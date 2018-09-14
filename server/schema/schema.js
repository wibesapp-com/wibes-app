//describes objects, relations,queries,mutateions and all
const graphql = require('graphql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

 const {GraphQLObjectType,
   GraphQLString,
   GraphQLSchema,
   GraphQLID,
   GraphQLInt ,
   GraphQLList ,
    GraphQLNonNull,
  GraphQLInputObjectType} = graphql;
const User = require('../models/wibesAppUsers');

const createToken = (user, secret, expiresIn) => {
  var name = user.human_name
  var pass_code = user.pass_code
    return jwt.sign({
        name, pass_code
    }, secret, {expiresIn})

}

const wibesAppUsersType = new GraphQLObjectType({
   name:'wibesAppUsers', //like table name
   fields:() => ({  //like column names
     human_name:{type:GraphQLString},
     pass_code:{type:GraphQLString},
     backup_code:{type:GraphQLString},
     personal_key:{type:GraphQLString},
     reverb_coins:{type:GraphQLString},
     reputation:{type:GraphQLString},
     portal_name:{type:GraphQLString},
     wibe_wallet:{type:GraphQLString},
     block:{type:GraphQLString}
     })
 });


const signWibesType = new GraphQLObjectType({
  name:'signWibes', //like table name
  fields:() => ({  //like column names
    human_name:{type:GraphQLString},
    pass_code:{type:GraphQLString}
  })
});

const token = new GraphQLObjectType({
  name:'token',
  fields:() => ({
    Token:{type:GraphQLString}
  })
})

const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    userEnquiry:{
      type:new GraphQLList(wibesAppUsersType),
      resolve(parents,args){
       return User.find({});
      }
    }
  }
});


const Mutation = new GraphQLObjectType({
 name:'Mutation',
 fields:{
   addWibesAppUser:{
     type:wibesAppUsersType,
     args:{
       human_name:{type:new GraphQLNonNull(GraphQLString)}, pass_code:{type:new GraphQLNonNull(GraphQLString)}, backup_code:{type:new GraphQLNonNull(GraphQLString)},
       personal_key:{type:new GraphQLNonNull(GraphQLString)},reverb_coins:{type:new GraphQLNonNull(GraphQLString)},reputation:{type:new GraphQLNonNull(GraphQLString)},
       portal_name:{type:new GraphQLNonNull(GraphQLString)},wibe_wallet:{type:new GraphQLNonNull(GraphQLString)}, block:{type:new GraphQLNonNull(GraphQLString)}
     },
     resolve(_,args){
       let user = new User({
         human_name:args.human_name,
         pass_code:args.pass_code,
         backup_code:args.backup_code,
         personal_key:args.personal_key,
         reverb_coins:args.reverb_coins,
         reputation:args.reputation,
         portal_name:args.portal_name,
         wibe_wallet:args.wibe_wallet,
         block:args.block
       });
       return user.save();
     }
   },

   signinUser:{
     type:token,
     args:{
           human_name:{type:new GraphQLNonNull(GraphQLString)},
           pass_code:{type:new GraphQLNonNull(GraphQLString)}
       },
       resolve(_,args){
        const  name = args.human_name;
        const  user = User.findOne({human_name:name});
            if(!user){
                throw new Error('User Not Found');
            }
            const isValidPassword =  bcrypt.compare(args.pass_code, user.pass_code);
              if(!isValidPassword){
                  throw new Error('inValid password');
                  // return msg ="not valid pass"
              }
              const pass_code = user.pass_code;
        const temp =  createToken(user, "teja", "1hr")
        return {Token:temp}
       }
   }
 }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
});
