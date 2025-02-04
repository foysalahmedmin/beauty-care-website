
const PrivateGp = () => {
  return (
    <main className="min-h-screen">
      <div className="container py-10">
        <h1 className="mb-6 text-3xl font-bold">Private GP Services</h1>
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Expert Medical Care</h2>
            <p className="text-lg text-muted-foreground">
              Experience comprehensive healthcare with our expert GP services, offering personalized medical attention in a comfortable, state-of-the-art facility.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Private GP Consultation",
                  description: "One-on-one consultations with experienced doctors",
                },
                {
                  title: "Extended GP Consultation",
                  description: "Longer appointments for complex medical issues",
                },
                {
                  title: "Full Health Check",
                  description: "Comprehensive health assessment and screening",
                },
                {
                  title: "Specialist Referrals",
                  description: "Direct access to specialist care when needed",
                },
                {
                  title: "Travel Medicine",
                  description: "Pre-travel consultations and vaccinations",
                },
                {
                  title: "Health Screening",
                  description: "Preventive health checks and early detection",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivateGp;