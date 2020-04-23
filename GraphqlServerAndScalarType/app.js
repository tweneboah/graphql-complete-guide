const { GraphQLServer } = require("graphql-yoga");
console.log("hhh");

// Scalart Types

//1. String, Boolean, Int, Float, ID = 5 scalar value because it stores a single value

//It needs
//1. Type definition
//These are the operations to be perform on our api

//2. Resolvers
//Functions that runs on any query runs

//Type Definition

//Types of data types
//1. Scalar types: This stores a single value
//String, int, boolean,Float ID this is use for unique identifier

//Query definition
const typeDefs = `
type Query {
   id: ID!
   name: String!
   age:Int!
   employed:Boolean!
   gpa:Float
   title:String!
   price:Int
   releaseYear:Int
   rating:Float
   inStock:Boolean!
   amount:Int

}
`;

//Resolvers
//Is a function that will perform on our API when a user makes a query
//It will run and returns and data base on various operation

const resolvers = {
  Query: {
    id() {
      return "sdjnsjdhs";
    },
    name() {
      return `Emmanuel Tweneboah`;
    },
    age() {
      return 30;
    },
    employed() {
      return true;
    },
    gpa() {
      return 3.9;
    },
    title() {
      return `TekLinco`;
    },
    releaseYear() {
      return 2019;
    },
    price() {
      return 590;
    },
    rating() {
      return 5.5;
    },
    inStock() {
      return true;
    },
    amount() {
      return 400;
    },
  },
};

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.start(() => {
  console.log("The server is up");
});
