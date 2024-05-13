import { gql} from '@apollo/client';

export const GET_COUNTRIES = gql `
query getCountries {
  countries {
      id
      name
      emoji
      code
    }
}
`;

export const GET_COUNTRY = gql`
  query getCountryDetails($code: String!) {
    country(code: $code) {
      id
      name
      emoji
      code
    }
  }
`;