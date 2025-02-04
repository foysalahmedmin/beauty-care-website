const AestheticClinic = () => {
  return (
    <main className="min-h-screen">
      <div className="container py-10">
        <h1 className="mb-6 text-3xl font-bold">Aesthetic Clinic Services</h1>
        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Aesthetic Treatments</h2>
            <p className="text-lg text-muted-foreground">
              Transform your appearance with our advanced aesthetic treatments, delivered by skilled professionals using cutting-edge technology and proven techniques.
            </p>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Available Services</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Facial Treatments",
                  description: "Rejuvenate your skin with our comprehensive facial treatments",
                },
                {
                  title: "Laser Treatments",
                  description: "Advanced laser procedures for various skin concerns",
                },
                {
                  title: "Body Contouring",
                  description: "Sculpt and shape your body with non-invasive procedures",
                },
                {
                  title: "Anti-Aging Solutions",
                  description: "Turn back time with our effective anti-aging treatments",
                },
                {
                  title: "Skin Rejuvenation",
                  description: "Restore your skin's natural glow and vitality",
                },
                {
                  title: "Medical Grade Peels",
                  description: "Professional peels for transformative results",
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

export default AestheticClinic;
