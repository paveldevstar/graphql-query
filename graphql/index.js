var GraphQLSchema = require('graphql').GraphQLSchema;
var queryType = require('./queries/movie').queryType;

exports.movieSchema = new GraphQLSchema({
  query: queryType,  
})

