const Loading = () => {
  const skeletonCount = 3;
  return (
    <div className="bg-homepage-gradient relative text-white overflow-x-hidden overscroll-x-none shadow-2xl shadow-black">
        Loading Top Projects...
      {/* <div className="flex items-center justify-center">
        <h1 className="text-4xl leading-tight font-bold mt-10 animate-pulse">
          Loading Top Projects...
        </h1>
      </div>
      <span className="justify-center items-center flex">
        <img
          src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/borderline1.svg"
          alt="underline"
          className="w-[20rem] mt-4 animate-pulse"
        />
      </span>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {[...Array(skeletonCount)].map((_, index) => (
          <div
            key={index}
            className="w-[22rem] h-auto bg-indigo-100 shadow shadow-indigo-600 rounded-[20px] flex flex-col p-2 animate-pulse"
          >
            <div className="w-full h-[200px] bg-gray-300 rounded-[20px] rounded-tr-[20px] mb-2 animate-pulse" />
            <div className="w-3/4 h-6 bg-gray-300 rounded-full mb-2 animate-pulse" />
            <div className="w-full h-4 bg-gray-300 rounded-full mb-2 animate-pulse" />
            <div className="w-full h-4 bg-gray-300 rounded-full mb-2 animate-pulse" />
            <div className="w-full h-4 bg-gray-300 rounded-full mb-2 animate-pulse" />
            <div className="w-full h-4 bg-gray-300 rounded-full mb-2 animate-pulse" />
            <div className="w-full h-4 bg-gray-300 rounded-full mb-2 animate-pulse" />
          </div>
        ))}
      </div>
      <div className="p-6 pt-3 justify-center flex animate-pulse">
        <button
          className="block w-50% select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle text-sm font-bold uppercase text-black shadow-md  transition-all hover:shadow-lg hover:bg-indigo-600 hover:text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          disabled
        >
          View All Projects
        </button>
      </div> */}
    </div>
  );
};

export default Loading;
