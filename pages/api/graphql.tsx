import { ApolloServer, gql, MockList } from 'apollo-server-micro';
const faker = require("faker");

const typeDefs = gql`
    type Course {
      id: ID
      name: String
      author: String
      description: String
      length: Int
      complete: Boolean
    }

    type Query {
      allCourses: [Course]
    }
`;

const mocks = {
  ID: () => faker.random.uuid(),
  Int: () => faker.random.number({ min: 15, max: 200}),
  String: () => faker.name.findName(),
  Boolean: () => faker.random.boolean(),
  Course: () => ({
      name: () => faker.random.arrayElement(['HTML Basic', 'CSS Advanced', 'Javascript Elite', 'GraphQl Intermediate']),
      description: () => faker.random.arrayElement(['This is a good course', 'This is a bad course', ' This is a hard course'])
  }),
  Query: () => ({
    allCourses: () => new MockList([1,20])
  })
}

const apolloServer = new ApolloServer({ typeDefs, mocks });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });