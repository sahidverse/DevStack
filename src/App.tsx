import { Suspense } from "react";
import HeroBanner from "./component/HeroBanner";
import Nav from "./component/Nav";
import Technologies from "./component/Technologies";
import type { Iplayer } from "./component/playerTypes.tsx";

const playersFetch = async (): Promise<Iplayer[]> => {
  const response = await fetch("/api-infos.json");
  const data = await response.json();
  return data;
};

function App() {
  const playersPromise = playersFetch();

  return (
    <>
      <Nav />
      <HeroBanner />
      <Suspense fallback={ <h2>Loading...</h2> }>
        <Technologies playersPromise={playersPromise} />
      </Suspense>
    </>
  );
}

export default App;
