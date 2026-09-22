const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
      <h1 className="text-6xl font-bold capitalize">
        The odd jobs you keep{" "}
        <span className="text-amber-500">meaning to sort</span>
      </h1>

      <p className="max-w-2xl text-center text-lg tracking-wider text-amber-800/90">
        Shelves that need putting up properly, a door that has not closed since
        spring, the flat-pack still in its box. Two qualified tradespeople,
        published rates, and a written quote before any work starts.
      </p>

      <div className="flex gap-4 font-bold">
        <button className="px-4 py-2 rounded-lg text-white hover:bg-amber-400 hover:text-black bg-amber-600 capitalize ">
          get a fixed qoute
        </button>
        <button className="px-4 py-2 rounded-lg text-white hover:bg-amber-400 hover:text-black bg-amber-600 capitalize ">
          see our rates
        </button>
        <button className="px-4 py-2 rounded-lg text-white hover:bg-amber-400 hover:text-black bg-amber-600 capitalize ">
          watch demo
        </button>
      </div>
    </div>
  );
};

export default Home;
