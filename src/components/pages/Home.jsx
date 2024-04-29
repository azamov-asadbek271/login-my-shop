import { useCollection } from "../hooks/useCollection";
import ResipiesList from "../ResipiesList";
function Home() {
  const { data: recipies } = useCollection();

  return (
    <div className="flex flex-col  items-center">
      <h1 className="mb-8 text-slate-500 text-4xl">All Recipies</h1>
      {recipies && <ResipiesList recipies={recipies} />}
    </div>
  );
}

export default Home;
