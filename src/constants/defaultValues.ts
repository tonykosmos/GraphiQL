export const defaultRequestText = `# Welcome to GraphiQL(tool for writing and testing GraphQL queries)
#
# GraphQL queries typically start with a "{" character. Lines that start
# with a # are ignored.
#
# An example GraphQL query might look like:
query Planets {
  allPlanets {
    totalCount
    planets {
      name
    }
  }
}
`;

export const defaultAPIRequest =
  'https://swapi-graphql.netlify.app/.netlify/functions/index';

export const trevorBladesAPIRequest = 'https://countries.trevorblades.com';

export const exampleAPIRequest = 'https://countries.trevorblades.com';
