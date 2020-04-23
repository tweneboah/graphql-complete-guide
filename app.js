const { GraphQLServer } = require("graphql-yoga");

//REQUIREMT

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
   me: User!
   post: Post!
}
type User {
  id: ID!
  name: String!
  email:String!
  age:Int
}

type Post {
  id:ID!
  title: String!
  body: String!
  published:Boolean
}
`;

//Resolvers
//Is a function that will perform on our API when a user makes a query
//It will run and returns and data base on various operation

const resolvers = {
  Query: {
    me() {
      return {
        id: "1320d",
        name: "Emma",
        email: "em@gmail.com",
      };
    },
    post() {
      return {
        id: "23434",
        title: "Node js",
        body: "Woow cool",
        published: true,
      };
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
