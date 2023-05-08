import { FlatList, Text } from 'react-native';
import { UserItem } from '../user-item';
import { useState } from 'react';
import { ItemSeparator } from '../user-item/styles';
import { useListUsers } from '../../data/graphql/list-users.hook';

export function UsersList() {
  const [offset, setOffset] = useState(0);

  const { loading, error, data, fetchMore } = useListUsers()

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
      ItemSeparatorComponent={ItemSeparator}
    />
  );
}
