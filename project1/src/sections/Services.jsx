const Services = () => {
  return (
    <div id="services" className="px-5">
      <p>কিভাবে এটি কাজ করে?</p>
      <h3>স্বাস্থ্যসেবা, আরও সহজভাবে</h3>

      <div className="border space-y-5">
        <div className="flex gap-4">
          <div className="bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg w-4/12 hover:scale-105 transition duration-300 px-5">
            <h3>অ্যাপয়েন্টমেন্ট ও শিডিউল এক জায়গায়!</h3>
            <p>
              ডাক্তারদের শিডিউল, রোগীর সিরিয়াল এবং কনসাল্টেশন, সব কিছু
              অটোমেটেডভাবে ম্যানেজ করুন।
            </p>
            <button
              className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
              type="button"
            >
              📞আরও জানুন
            </button>

            <div className="">
              <img src="iPhone_mock.webp" alt="" />
            </div>
          </div>

          <div className="bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg w-8/12 hover:scale-105 transition duration-300 px-5">
            <h3>অটোমেটেড রিপোর্ট, দ্রুত সেবা!</h3>
            <p>
              Sasthotech Lab Management System এর মাধ্যেম ডাক্তাররা নিরাপদ যেকান
              সময়, যেকান জায়গায় রোগীর পরীক্ষার ফলাফল অনলাইনে দেখতে পারেন।
            </p>
            <button
              className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
              type="button"
            >
              📞আরও জানুন
            </button>

            <div className="">
              <img src="doctor_front.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg w-8/12 hover:scale-105 transition duration-300 px-5">
            <h3>বেড ও ওয়ার্ড ম্যানেজমেন্ট, রিয়েল টাইমে!</h3>
            <p>
              হাসপাতালের প্রতিটি বেডের অবস্থা, ওয়ার্ডের অবস্থা ও রোগী বরাদ্দ,
              সব কিছু দেখা যাবে এক ক্লিকেই
            </p>
            <button
              className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
              type="button"
            >
              📞আরও জানুন
            </button>

            <div className="">
              <img src="bed_full.webp" alt="" />
            </div>
          </div>

          <div className="bg-linear-to-b from-amber-200/15 to-amber-500/35 rounded-lg w-4/12 hover:scale-105 transition duration-300 px-5">
            <h3>স্মার্ট রিপোর্টিং</h3>
            <p>
              রোগীর রিপোর্ট ও হিসাব সব এক জায়গায়। ডাক্তার ও ম্যানেজাররা দ্রুত ও
              নির্ভুল সিদ্ধান্ত নিতে পারবেন
            </p>
            <button
              className="transition duration-300 shadow-md py-2 px-5 rounded-full font-bold bg-amber-500/65 hover:bg-amber-500 "
              type="button"
            >
              📞আরও জানুন
            </button>

            <div className="flex gap-4">
              <img className="w-42" src="nurse_1.webp" alt="" />
              <img className="w-42" src="nurse_2.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
