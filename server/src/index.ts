require('dotenv').config();

import express, {Application} from 'express';
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./graphql/index";
import {connectDatabase} from "./database";
import {Database} from "./lib/types";

const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer(
        {typeDefs,
            resolvers,
            context: () => ({db})
        });
    server.applyMiddleware({app, path:"/api"});

    app.listen(process.env.PORT);

    console.log('Fraiser is listening.');

    const listings = await db.listings.find({}).toArray();
    console.log(listings);
};

mount(express());

