var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLString = require('graphql').GraphQLString;
var movieType = require('../types/movie').MovieType;
var request = require('request')

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      movies: {
        args: {
          page:{
              type : GraphQLInt,
          },
          query:{
            type : GraphQLString,
          },
        },
        type: new GraphQLList(movieType),
        resolve: async function (obj, args, context, info) {
          // console.log(args);
          let data = await new Promise((resolve, reject) => {
            request('https://api.themoviedb.org/3/search/movie?api_key=42fdb08aead0193795e4c5069bc35f32&language=en-US&query='+args.query+'&page='+args.page, function (error, response, rep) {
              let body = JSON.parse(rep);
              let ret = []
              for (let i = 0; i < body.results.length; i++) {
                ret.push({
                  title: body.results[i].title,
                  overview: body.results[i].overview,
                  releaseDate: body.results[i].release_date,
                  popularity: body.results[i].popularity
                })
              }
              resolve(ret)
            })
          })
          return data
        }
      }
    }
  }
});