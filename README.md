# Setting up babel to use ES6 in node

## Install these packages

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

## Test it

In your app.js

```js
console.log("yea");
```

# Setting up Graphql Server
