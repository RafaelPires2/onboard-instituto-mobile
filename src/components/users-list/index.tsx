import { FlatList, Text } from 'react-native';
import { UserItem } from '../user-item';
import { useState } from 'react';
import { useListUsers } from '../../data/graphql/list-users.hook';
import { ItemSeparatorSmall } from '../item-separator/styles';

interface UserListProps {
  onUserClick: (userId: string) => void;
}

export function UsersList({ onUserClick }: UserListProps) {
  const [offset, setOffset] = useState(0);

  const { loading, error, data, fetchMore } = useListUsers();

  
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
  
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  
  return (
    <FlatList
    data={data.users.nodes}
    keyExtractor={(item) => item.id}
    onEndReached={loadMore}
    ItemSeparatorComponent={ItemSeparatorSmall}
    renderItem={({ item }) => (
      <>
          <UserItem
            id={item.id}
            name={item.name}
            email={item.email}
            key={item.id}
            onUserClick={onUserClick}
          />
        </>
      )}
    />
  );
}
