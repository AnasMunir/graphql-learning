export const typeDefs = `#graphql
  type Game {
      id: ID!
      title: String!
      platform: [String!]!
      reviews: [Review!]
    }
    type Review {
      id: ID!
      rating: Int!
      content: String!
      game: Game!
    }
    type Author {
      id: ID!
      name: String!
      verified: Boolean!
    }
    type Query {
      games: [Game]
      reviews: [Review]
      authors: [Author]
    }
  `;
