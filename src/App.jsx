import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "https://api.chucknorris.io/jokes/random";

function App() {
  const args = {
    queryKey: ["teste-123"],
    queryFn: () => axios.get(url),
  };

  const { data, isError, error, isLoading } = useQuery(args);

  if (isLoading) return <h1>Loading....</h1>;

  return (
    <>
      <h3>{data?.data?.id}</h3>
      {isError && (
        <>
          <h1>Deu ruim</h1>
          <h4>{JSON.stringify(error)}</h4>
        </>
      )}
    </>
  );
}

export default App;
