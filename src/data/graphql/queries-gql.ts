import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        name
        email
        id
      }
    }
  }
`;

export const LIST_USERS_QUERY = gql`
  query ListUser($data: PageInput) {
    users(data: $data) {
      count
      nodes {
        id
        email
        name
      }
      pageInfo {
        limit
        offset
      }
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation createUser($data: UserInput!) {
    createUser(data: $data) {
      name
      phone
      birthDate
      email
      role
      id
    }
  }
`;

export const FULL_USER_QUERY = gql`
  query user($itemId: ID!) {
    user(id: $itemId) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;