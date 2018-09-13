const express = require('express');

const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

mongoose.connect('mongodb://teja:test123@ds151892.mlab.com:51892/gql-ninja');
mongoose.connection.once('open',() => {
  console.log('connected to database');
})


app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}));

app.listen(4000,() => {
  console.log("now listening on requests on port 4000")
});
