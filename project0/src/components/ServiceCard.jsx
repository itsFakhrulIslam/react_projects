const ServiceCard = () => {
  return (
    <div className="border-2 rounded-2xl overflow-hidden space-y-5">
      <img src="about.jpg" className="w-full" alt="" />

      <div className="px-5 space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight">
          Kitchen shelving, three walls
        </h3>
        <p className="leading-5 text-justify tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          cupiditate accusantium expedita aspernatur fugiat dolor sed tempore
          soluta doloribus consequatur! Voluptate sint odit similique.
          Praesentium ducimus ipsa qui, id molestias nostrum commodi tempore
          pariatur?
        </p>
        <hr />

        <div className="flex justify-evenly gap-4">
          <div className="text-center">
            <p className="text-gray-600 font-semibold">Area</p>
            <p className="font-semibold">Dhaka, Uttara</p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-semibold">Time</p>
            <p className="font-semibold">Estimate 2.3hours</p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 font-semibold">cost</p>
            <p className="font-semibold">$250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
