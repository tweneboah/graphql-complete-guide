# Setting up babel to use ES6 in node

## Install these packages...

i. babel-cli
ii. babel-preset-env

# Create .babelrc file in the root of your app

- Add this

```js
{
  "presets": ["env"]
}

```

# Configure your script

```js
  "scripts": {
    "start": "babel-node app.js"
  }
```

# server port

- visit

```js
localhost: 4000;
```

## Test it

In your app.js

```js
console.log("yea");
```

# Setting up Graphql Server

```js
const { GraphQLServer } = require("graphql-yoga");
```

# REQUIREMT for Graphql server

- It needs

### Type definition

- These are the operations to be perform on our api

### Resolvers

- Functions that runs on any query runs

## Type Definition

### Types of data types

1. Scalar types: This stores a single value String, int, boolean,Float ID this is use for unique identifier

## Query definition

```js
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
```

# Resolvers

- Is a function that will perform on our API when a user makes a query
- It will run and returns and data base on various operation

```js
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
```

# Creating Custom types

```js
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
```
