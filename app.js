const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const graphQLSchema = require('./graphql/schema/index');
const grahphQLResolvers = require('./graphql/resolvers/index');


const app = express();

app.use(bodyParser.json());

app.use(
    '/graphql', 
    graphqlHTTP({
    graphiql: true
    })
);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASSWORD
    }@cluster0-tqqk1.azure.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {useNewUrlParser: true}
).then(() => {
    app.listen(3000);
}
).catch(err => {
    console.log(err);
});

