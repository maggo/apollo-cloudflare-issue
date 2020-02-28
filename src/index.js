const { ApolloServer, gql } = require("apollo-server-cloudflare");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({
  typeDefs,
  introspection: true,
  resolvers
});

server.listen().then(() => console.log("Server ready!"));
