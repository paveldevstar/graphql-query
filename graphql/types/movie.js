

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLFloat = require('graphql').GraphQLFloat;

// Movie Type
exports.MovieType = new GraphQLObjectType({
  name: 'movie',
  fields: function () {
    return {
      // id: {
      //   type: new GraphQLNonNull(GraphQLID)
      // },
      title: {
        type: GraphQLString
      },
      overview: {
        type: GraphQLString
      },
      releaseDate: {
        type: GraphQLString
      },
      popularity: {
        type: GraphQLFloat
      }
    }
  }
});

