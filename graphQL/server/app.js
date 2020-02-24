const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');

const app = express();
const PORT = 3333;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, err => {
  err ? console.log(error) : console.log(`http://localhost:${PORT}/graphql`);
});
