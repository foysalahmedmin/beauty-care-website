const ConciergeService = () => {
  return (
    <main className="min-h-screen">
      <div className="container py-10">
        <h1 className="mb-6 text-3xl font-bold">Concierge Medical Services</h1>
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Premium Healthcare Access</h2>
            <p className="text-lg text-muted-foreground">
              Experience luxury healthcare with our premium concierge service, providing round-the-clock access to medical care and personalized attention whenever you need it.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Concierge Benefits</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "24/7 Access",
                  description: "Round-the-clock availability to medical professionals",
                },
                {
                  title: "Priority Appointments",
                  description: "Immediate scheduling with minimal wait times",
                },
                {
                  title: "Home Visits",
                  description: "Medical care in the comfort of your home",
                },
                {
                  title: "Personal Care Coordinator",
                  description: "Dedicated coordinator for all your healthcare needs",
                },
                {
                  title: "Extended Consultations",
                  description: "Comprehensive visits without time constraints",
                },
                {
                  title: "Wellness Planning",
                  description: "Personalized preventive care and wellness strategies",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ConciergeService;
