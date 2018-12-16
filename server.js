const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const app = express();

app.use('*', cors());

const movieSchema = require('./graphql/index').movieSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: movieSchema,
  rootValue: global,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
