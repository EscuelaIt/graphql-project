const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');

const resolvers = require('./resolvers');

const rootQuery = importSchema(`${__dirname}/schema.graphql`);

module.exports = makeExecutableSchema({
  typeDefs: rootQuery,
  resolvers
});