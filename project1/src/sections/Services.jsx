const Services = () => {
  return (
    <div id="services" className="px-5">
      <p className="font-semibold tracking-tighter text-amber-500/85">
        কিভাবে এটি কাজ করে?
      </p>
      <h3 className="text-3xl font-bold tracking-tight mb-5">
        স্বাস্থ্যসেবা, আরও সহজভাবে
      </h3>
      {/* services section  */}
      <div className="space-y-5 flex flex-col">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col justify-center items-center gap-2 bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg hover:scale-101 transition duration-300 px-5 overflow-hidden">
            <h3 className="text-lg font-bold tracking-tighter">
              অ্যাপয়েন্টমেন্ট ও শিডিউল এক জায়গায়!
            </h3>
            <p className="text-sm text-zinc-700 text-center sm:text-left">
              ডাক্তারদের শিডিউল, রোগীর সিরিয়াল এবং কনসাল্টেশন, সব কিছু
              অটোমেটেডভাবে ম্যানেজ করুন।
            </p>
            <button
              className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
              type="button"
            >
              📞আরও জানুন
            </button>

            <div className="-mb-90 mt-10">
              <img src="iPhone_mock.webp" alt="" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg hover:scale-101 transition duration-300 px-5">
            <div className="space-y-5 flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-bold tracking-tighter">
                অটোমেটেড রিপোর্ট, দ্রুত সেবা!
              </h3>
              <p className="text-sm text-zinc-700 text-center sm:text-left">
                Sasthotech Lab Management System এর মাধ্যেম ডাক্তাররা নিরাপদ
                যেকান সময়, যেকান জায়গায় রোগীর পরীক্ষার ফলাফল অনলাইনে দেখতে
                পারেন।
              </p>
              <button
                className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
                type="button"
              >
                📞আরও জানুন
              </button>
            </div>

            <div className="">
              <img src="doctor_front.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg hover:scale-101 transition duration-300 px-5">
            <div className="space-y-5">
              <h3 className="text-lg font-bold tracking-tighter">
                বেড ও ওয়ার্ড ম্যানেজমেন্ট, রিয়েল টাইমে!
              </h3>
              <p className="text-sm text-zinc-700 text-center sm:text-left">
                হাসপাতালের প্রতিটি বেডের অবস্থা, ওয়ার্ডের অবস্থা ও রোগী বরাদ্দ,
                সব কিছু দেখা যাবে এক ক্লিকেই
              </p>
              <button
                className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
                type="button"
              >
                📞আরও জানুন
              </button>
            </div>

            <div className="">
              <img src="bed_full.webp" alt="" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg hover:scale-101 transition duration-300 px-5 space-y-5">
            <div className="flex-1 space-y-5">
              <h3 className="text-lg font-bold tracking-tighter">
                স্মার্ট রিপোর্টিং
              </h3>
              <p className="text-sm text-zinc-700 text-center sm:text-left">
                রোগীর রিপোর্ট ও হিসাব সব এক জায়গায়। ডাক্তার ও ম্যানেজাররা দ্রুত
                ও নির্ভুল সিদ্ধান্ত নিতে পারবেন
              </p>
              <button
                className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
                type="button"
              >
                📞আরও জানুন
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <img className="w-42 rounded-2xl" src="nurse_1.webp" alt="" />
              <img className="w-42 rounded-2xl" src="nurse_2.webp" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* marquee section */}
      <div className="py-10 space-y-5">
        <marquee width="100%" direction="left" height="100px" scrollamount="20">
          <img src="nurse_1.webp" alt="" />
        </marquee>

        <marquee
          width="100%"
          direction="right"
          height="100px"
          scrollamount="20"
        >
          <img src="nurse_2.webp" alt="" />
        </marquee>

        {/* <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          onMouseOver={(e) => e.currentTarget.stop()}
          onMouseOut={(e) => e.currentTarget.start()}
        >
          <img src="nurse_1.webp" alt="Item 1" width="200" />
        </marquee>
        <marquee
          behavior="scroll"
          direction="right"
          scrollamount="5"
          onMouseOver={(e) => e.currentTarget.stop()}
          onMouseOut={(e) => e.currentTarget.start()}
        >
          <img src="nurse_2.webp" alt="Item 3" width="200" />
        </marquee> */}
      </div>

      {/* checkup section  */}
      <h1 className="font-bold text-shadow-amber-500 text-center text-3xl mb-10">Doctors Checkup</h1>
      <div className="grid items-center">

        <div className="order-2">
          <div className="">
            <h4>রোগীর সময় ও সুরক্ষা আমাদের অগ্রাধিকার</h4>
            <p>
              আমরা প্রতিটি রোগীর মূল্যবান সময়ের সম্মান করি এবং নিরাপদ সেবা
              নিশ্চিত করি।
            </p>
          </div>
          <div className="">
            <h4>পরিচ্ছন্ন ও বাড়ির মতো পরিবেশে যত্নের প্রতিশ্রুতি</h4>
            <p>
              রোগীরা যেন স্বস্তি ও আস্থার পরিবেশে চিকিৎসা নিতে পারেন, সেটাই
              আমাদের লক্ষ্য।
            </p>
          </div>
          <div className="">
            <h4>বিশ্বমানের টেকনোলজি, বিশ্বস্ত সেবা</h4>
            <p>
              সর্বাধুনিক প্রযুক্তি ব্যবহার করে আমরা দিই নির্ভরযোগ্য ও দ্রুত
              চিকিৎসাসেবা।
            </p>
          </div>
          <button
            className="transition duration-300  bg-amber-500/65 py-2 px-5 rounded-full font-bold hover:bg-amber-500"
            type="button"
          >
            সাবস্ক্রিপশন কিনুন <span>➡️</span>
          </button>
        </div>

        <div className="order-1 sm:order-2">
          <img src="doctor_checkup.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;

/**
 * <marquee behavior="scroll" direction="left" scrollamount="5" onmouseover="this.stop();" onmouseout="this.start();">
  
</marquee>

 */
