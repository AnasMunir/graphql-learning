import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// data
import { authors, games, reviews } from "./_db.js";
import { typeDefs } from "./schema.js";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// resolvers
const resolvers = {
  Query: {
    games() {
      return games;
    },
    authors() {
      return authors;
    },
    reviews() {
      return reviews;
    },
  },
};

/* const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
]; */
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
/* const resolvers = {
  Query: {
    books: () => books,
  },
}; */

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
