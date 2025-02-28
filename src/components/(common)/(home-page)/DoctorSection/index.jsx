
const counts = [
  {
    value: "30+",
    label: "Years in business",
  },
  {
    value: "50,000+",
    label: "Coolsculpting Cycles",
  },
  {
    value: "30,000+",
    label: "Patients Cared for",
  },
  {
    value: "100%",
    label: "Professionalism & Love",
  },
];

const DoctorSection = () => {
  return (
    <section className="dark bg-slate-dark py-16 text-title md:py-24">
      <div className="container space-y-16">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[5/6] w-full overflow-hidden md:order-2">
            <img
              className="size-full object-cover object-center"
              src="/images/shut/treatments/1929370055.jpg"
              alt=""
            />
          </div>
          <div className="space-y-4 md:order-1 md:space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-primary px-2 text-sm font-medium uppercase tracking-widest text-primary-foreground">
                Anti-Aging Experts
              </div>
              <h2 className="text-4xl uppercase md:text-5xl">
                Board Certified word renowned aesthetician
              </h2>
            </div>
            <p className="text-lg">
              Our board-certified, world-renowned specialises in advanced anti-ageing
              procedures, delivering youthful, rejuvenated results with expert care and precision.
            </p>
            {/* <div>
              <Button className="primary">About The Client</Button>
            </div> */}
          </div>
        </div>
        {/* <div className="grid grid-cols-2 md:grid-cols-4">
          {counts?.map((item, index) => (
            <div key={index} className="space-y-2 text-center">
              <h1>{item.value}</h1>
              <p>{item.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default DoctorSection;
