import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";

const GET_CHARACTERS = gql`
query {
  characters {
    results {
      id
      name
      species
      notInSchema
    }
  }
}
`;

const Home: NextPage = () => {
  const { loading, data } = useQuery(GET_CHARACTERS);

  return (
    <div>
      <main>
        { loading && <p>Loading...</p>}

        { data?.characters.results.map((character) => (
          <p key={character.id}>{character.name}</p>
        ))}
      </main>
    </div>
  );
};

export default Home;