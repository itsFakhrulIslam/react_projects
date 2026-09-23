const Banner = () => {
  return (
    <div id="home" className="grid gap-4 grid-cols-1 sm:grid-cols-2 place-items-center sm:place-items-end py-6 px-5 sm:py-16">
      <div className="flex flex-col gap-2 ">
        <h1 className="text-center sm:text-left text-4xl font-bold tracking-tight">
          হাসপাতাল ম্যানেজমেন্টের নির্ভরযোগ্য সমাধান
        </h1>
        <p className="text-center sm:text-left text-sm font-thin text-gray-700">
          স্বাস্থ্য-টেক এক প্ল্যাটফর্মে রোগী নিবন্ধন, অ্যাপয়েন্টমেন্ট, বিলিং ও
          রিপোর্ট ম্যানেজমেন্টের মাধ্যমে হাসপাতালের কাজকে করে আরও সহজ, দ্রুত ও
          দক্ষ।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold  hover:bg-amber-500 "
          type="button"
        >
          📞আরও জানুন
        </button>
        <button
          className="transition duration-300  bg-amber-500/65 py-2 px-5 rounded-full font-bold hover:bg-amber-500"
          type="button"
        >
          সাবস্ক্রিপশন কিনুন <span>➡️</span>
        </button>
      </div>

      {/* 
      
      
      <div className="border py-10 px-5 flex justify-center items-center ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BElANtCXPWA?si=DkMkqPaPIw7MYS-y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      */}
    </div>
  );
};

export default Banner;
