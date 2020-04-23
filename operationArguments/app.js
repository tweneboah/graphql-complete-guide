const { GraphQLServer } = require("graphql-yoga");



//Query definition
const typeDefs = `
type Query {
  greeting(name: String):String!
}
`;

//Resolvers

const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      // parents = for relational database eg if a user has many
      //args = object from user
      //ctx = login user
      //infor = actual operation
      console.log(args);
      if (args.name) {
        return `Hello ${args.name}!`;
      } else {
        return "Hello";
      }
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
