import { NextPage } from "next";
import { useGetCharactersQuery } from "@/generated/graphql";
import EmailForm from "@/components/EmailForm";


const Home: NextPage = () => {
  const { loading, data } = useGetCharactersQuery();

  const characters = data?.characters?.results;

  return (
    <div>
      <main>
        {loading && <p>Loading...</p>}

        {characters && (
          <div>
            <EmailForm {...{ characters }} />

            {characters.map((character, index) => (
              <p key={character?.id ?? index}>
                {character?.name ?? "No name: something is wrong"}
              </p>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;