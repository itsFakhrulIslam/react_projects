const Features = () => {
  return (
    <div>
      <h1 className="text-shadow-amber-500 text-center text-2xl mb-2 tracking-tighter">
        আপনি নিজে কোনো আপনার প্রতিষ্ঠানে ডাক্তার দেখাবেন বা টেস্ট করাবেন, একবার
        চিন্তা করুন?{" "}
      </h1>
      <p className="tracking-tight text-center">
        আপনার সময়মতো আপনি ডাক্তার দেখাতে পারবেন, টেস্ট এর জন্য স্যাম্পল দিতে
        পারবেন। আবার, রিপোর্ট এর জন্য লাইনেও দাঁড়াতে হবেনা।
      </p>
      <h4 className="text-3xl font-bold tracking-tight text-center py-6">
        তাই নয় কি?
      </h4>

      <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center">
        <p className="text-right">তাহলে এই সুবিধাটা -ই একজন রোগীকে দিন।</p>
        <button
          className="transition duration-300  bg-amber-500/65 py-2 px-5 rounded-full font-bold hover:bg-amber-500"
          type="button"
        >
          সাবস্ক্রিপশন কিনুন <span>➡️</span>
        </button>
      </div>
    </div>
  );
};

export default Features;
