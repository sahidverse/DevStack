import banner from "../assets/banner-stack.png";

const HeroBanner = () => {
  return (
    <div className="container mx-auto flex items-center justify-between gap-8 px-6 py-12">
      <div>
        <h1 className="text-3xl font-medium  text-[#0F172A]">Build Your Ideal</h1>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</h1>
        <p className="mt-4 max-w-xl text-gray-600">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div>
          <button className="mr-4 mt-6 rounded bg-gradient-to-r from-[#FF5722] to-[#7C3AED] px-5 py-3 text-white">
            Explore Technologies
          </button>
          <button className="mt-6 rounded border border-fuchsia-600 px-5 py-3 text-fuchsia-600">
            Learn More
          </button>
        </div>
      </div>
      <img className="h-[320px] w-[350px] object-contain" src={banner} alt="Development stack" />
    </div>
  );
};

export default HeroBanner;
