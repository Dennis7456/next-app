import {
  GetCharactersDocument,
  GetCharactersQuery,
  GetCharactersQueryVariables,
} from '@/generated/graphql';
import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";

const Home: NextPage = () => {
  const { loading, data } = useQuery<
  GetCharactersQuery,
  GetCharactersQueryVariables
  >(GetCharactersDocument);

  const characters = data?.characters?.results;

  return (
    <div>
      <main>
        { loading && <p>Loading...</p>}
        {characters &&
          characters.map((character, index) => (
          <p key={character?.id ?? index}>
            {character?.name ?? "No name: something is wrong"}
          </p>
        ))}
      </main>
    </div>
  );
};

export default Home;