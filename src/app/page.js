import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center h-screen ">
  {/* Header with Title on the Left and Search Bar on the Right */}
  <div className="w-full flex justify-between items-center py-10 px-8">
    {/* Title on the Left */}
    <div className="text-4xl font-bold text-white" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      Movie To Stream
    </div>

    {/* Search Bar on the Right */}
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="px-4 py-2 rounded-full border-none text-black"
        style={{ width: '250px' }}
      />
    </div>
  </div>

  <div className="text-white text-xl mb-4" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
    AMZN NTFLX DISN+ CRAVE
  </div>

  <div>
    <Image className="shadow-xl rounded-lg" width={300} height={400} src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg" />
  </div>

  <div >
    
  </div>
</div>

  );
}
