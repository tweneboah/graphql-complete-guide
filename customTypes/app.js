const { GraphQLServer } = require("graphql-yoga");

//Custom Types

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
