const Counter = () => {
  return (
    <div className="shadow-md rounded border-2 border-amber-200 md:flex md:items-center gap-6 md:gap-0 grid grid-cols-2">
      <div className="flex flex-col flex-1 items-center px-2 sm:px-4 py-2 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">১২০০০+</h2>
        <p className="mt-1 sm:mt-2 text-zinc-600 text-xs sm:text-sm">
          কর্মচারী পরিচালিত
        </p>
      </div>
      <div className="flex flex-col flex-1 items-center px-2 sm:px-4 py-2 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">৬০+</h2>
        <p className="mt-1 sm:mt-2 text-zinc-600 text-xs sm:text-sm">
          বেশি হাসপাতাল যুক্ত
        </p>
      </div>
      <div className="flex flex-col flex-1 items-center px-2 sm:px-4 py-2 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">৮২%</h2>
        <p className="mt-1 sm:mt-2 text-zinc-600 text-xs sm:text-sm">
          দক্ষতা বৃদ্ধি
        </p>
      </div>
      <div className="flex flex-col flex-1 items-center px-2 sm:px-4 py-2 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">৩x</h2>
        <p className="mt-1 sm:mt-2 text-zinc-600 text-xs sm:text-sm">
          লাভ বৃদ্ধি
        </p>
      </div>
    </div>
  );
};

export default Counter;
