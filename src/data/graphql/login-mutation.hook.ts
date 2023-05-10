import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from './queries-gql';
import { AuthContext } from '../../contexts/auth-context';
import { useContext } from 'react';

export const useLoginMutation = () => {
  const authContext = useContext(AuthContext);

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ login }) {
      authContext.signIn({ token: login.token, email: login.email, name: login.name });
    },
  });

  return { login, loading, error };
};
