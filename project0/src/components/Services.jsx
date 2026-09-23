import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="services" className="space-y-5">
      <div className="text-center">
        <h1 className="text-4xl capitalize font-semibold tracking-tight">Jobs from the last month</h1>
        <p className="text-amber-800/95 tracking-wider">
          Real jobs with the time and the final cost, because that is what
          everyone actually wants to know.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
