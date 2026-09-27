const Footer = () => {
  return (
    <>
      <div className="px-5">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 py-5">
          <div className="">
            <div id="navigate" className="w-30">
              <a href="/">
                <img src="logo.webp" alt="brand logo" />
              </a>
            </div>

            <h1 className="text-sm">
              আপনার হাসপাতালকে ভবিষ্যতের জন্য প্রস্তুত করুন
            </h1>
            <p className="text-xs mb-3">
              আমাদের উন্নতমানের হাসপাতাল ব্যবস্থাপনা সফটওয়্যার দিয়ে আপনার কাজ
              সহজ করুন এবং রোগীদের সেবা এক ধাপ এগিয়ে রাখুন।
            </p>

            <div className="flex gap-3">
              <div className="w-6 h-6 bg-blue-600/65 rounded-lg "></div>
              <div className="w-6 h-6 bg-red-600/65 rounded-lg "></div>
              <div className="w-6 h-6 bg-blue-600 rounded-lg "></div>
            </div>
          </div>

          <div className="">
            <h1 className="font-bold">Company Details</h1>
            <a className="underline capitalize text-sm" href="">
              about
            </a>{" "}
            <br />
            <a className="underline capitalize text-sm" href="">
              terms & condition
            </a>{" "}
            <br />
            <a className="underline capitalize text-sm" href="">
              privacy & policy
            </a>{" "}
            <br />
            <a className="underline capitalize text-sm" href="">
              return, refund & cancellation policy
            </a>{" "}
            <br />
            <p className="font-semibold tracking-tight">
              Current Trade License: 02/B-0483
            </p>
            <p className="font-semibold tracking-tight">
              Old Trade License: 02/B-2180
            </p>
          </div>

          <div className="">
            <h1 className="font-bold">Contact Details</h1>

            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-amber-600/65 rounded-md"></div>
              <p>admin@sasthotech.com</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-amber-600/65 rounded-md"></div>
              <p>01896-156558, 01851-503939</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-amber-600/65 rounded-md"></div>
              <p>
                <span className="font-semibold">Registered address:</span>{" "}
                Talaimari Mor, Kajla, Rajshahi 6204, Bangladesh
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 bg-amber-600/65 rounded-md"></div>
              <p>House 586, East Kazipara, Kafrul, Dhaka-1216</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <p className="font-semibold capitalize text-center text-sm">
          secure payment
        </p>
        <img src="sslcommerz-desktop.png" alt="" />
      </div>

      <p className="text-center text-sm tracking-tight text-zinc-500">© 2026 Sasthotech. All rights reserved.</p>
    </>
  );
};

export default Footer;
