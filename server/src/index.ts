import express from 'express';
//import {listings} from "./listings";
//import bodyParser from "body-parser"
import {ApolloServer} from "apollo-server-express";
import {schema} from "./graphql";
import {typeDefs, resolvers} from "./graphql/index";

const app = express();
const port = 9000;
//const server = new ApolloServer({schema});
const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app, path:"/api"});

//app.use(bodyParser.json());

// REST API version.
/*app.get('/listings', (_req, res) => {
    res.send(listings);
});

app.post('/delete-listing', (req, res) => {
   const id: string = req.body.id;
   for(let i  = 0; i < listings.length; i++) {
       if(listings[i].id == id) {
           res.send(listings.splice(i, 1));
       }
   }
   res.send('Could not delete this thing.');
});*/



app.listen(port);

console.log('Fraiser is listening.');
