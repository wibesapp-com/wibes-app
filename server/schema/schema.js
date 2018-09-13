//describes objects, relations,queries,mutateions and all
const graphql = require('graphql');
const _=require('lodash');

 const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt ,GraphQLList , GraphQLNonNull} = graphql;
const WibesAppUsersModel = require('../models/wibesAppUsers');

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


  const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
      userEnquiry:{
        type:new GraphQLList(wibesAppUsersType),
        resolve(parents,args){
         return WibesAppUsers.find({});
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
         human_name:{type:new GraphQLNonNull(GraphQLString)},
         pass_code:{type:new GraphQLNonNull(GraphQLString)},
         backup_code:{type:new GraphQLNonNull(GraphQLString)},
         personal_key:{type:new GraphQLNonNull(GraphQLString)},
         reverb_coins:{type:new GraphQLNonNull(GraphQLString)},
         reputation:{type:new GraphQLNonNull(GraphQLString)},
         portal_name:{type:new GraphQLNonNull(GraphQLString)},
         wibe_wallet:{type:new GraphQLNonNull(GraphQLString)},
         block:{type:new GraphQLNonNull(GraphQLString)
       },
       resolve(_,args){
         let user = new WibesAppUsersModel({
           human_name:args.human_name,
           pass_code:args.pass_code,
           backup_code:args.backup_code,
           personal_key:args.personal_key,
           reverb_coins:args.reverb_coins,
           reputation:args.reputation,
           portal_name:args.portal_name,
           wibe_wallet:args.wibe_wallet,
           block:args.block
         }); //Author is the collection imported from models
         return user.save();
       }
     }
   }
 }
 })

 module.exports = new GraphQLSchema({
      query:RootQuery,
       mutation:Mutation
 });
