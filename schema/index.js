const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');

const rootQuery = importSchema(`${__dirname}/schema.graphql`);

module.exports = makeExecutableSchema({
  typeDefs: rootQuery,
  resolvers: {
    Query:{
      allWords:() => {
        // code conexion db
        return ['nicolas', 'molina'];
      } 
    }
  }
});