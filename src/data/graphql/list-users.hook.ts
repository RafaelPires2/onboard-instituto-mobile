import { useQuery } from "@apollo/client";
import { LIST_USERS_QUERY } from "./queries-gql";

export const useListUsers = (offset = 0, limit = 10 ) => {
    const { loading, error, data, fetchMore } = useQuery(LIST_USERS_QUERY, {
        variables: {
          data: {
            offset: offset,
            limit: limit,
          },
        },
      });

      return { loading, error, data, fetchMore } 
}
 