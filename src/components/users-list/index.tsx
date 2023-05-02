import { useQuery } from '@apollo/client';
import { FlatList, Text, View } from 'react-native';
import { LIST_USERS_QUERY } from '../../utils/queries-gql';
import { UserItem } from '../user-item';
import { useState } from 'react';

export function UsersList() {
  const [offset, setOffset] = useState(0);

  const { loading, error, data, fetchMore } = useQuery(LIST_USERS_QUERY, {
    variables: {
      data: {
        offset: 0,
        limit: 10,
      },
    },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  const loadMore = () => {
    fetchMore({
      variables: {
        data: {
          offset: offset + 10,
          limit: 10,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          users: {
            ...fetchMoreResult.users,
            nodes: [...prev.users.nodes, ...fetchMoreResult.users.nodes],
          },
        };
      },
    });
    setOffset(offset + 10);
  };

  return (
    <FlatList
      data={data.users.nodes}
      renderItem={({ item }) => <UserItem id={item.id} name={item.name} email={item.email} key={item.id}/>}
      keyExtractor={(item) => item.id}
      onEndReached={loadMore}
    />
  );
}
