import BannerSection from "@/components/partials/Sections/BannerSection";


const Terms = () => {
  return (
    <>
      <BannerSection
        title="Terms of Service"
        description="Our commitment to providing quality healthcare services"
        image="/images/shut/banner/2.jpg"
      />
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Terms and Conditions</h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to ARKangel Clinic. By accessing our services, you agree to
            these terms and conditions.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">1. Medical Services</h3>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>All medical services are provided by licensed healthcare professionals</li>
            <li>Appointments must be scheduled in advance</li>
            <li>Emergency services are available 24/7 for registered patients</li>
            <li>Medical advice given is specific to individual cases</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">2. Appointments and Cancellations</h3>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>24-hour notice required for appointment cancellations</li>
            <li>Late cancellations may incur a fee</li>
            <li>Arrival 10 minutes before appointment time is recommended</li>
            <li>Missed appointments without notice will be charged</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">3. Payment Terms</h3>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Payment is required at the time of service</li>
            <li>We accept major credit cards and insurance plans</li>
            <li>Special payment arrangements must be made in advance</li>
            <li>Prices are subject to change with notice</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">4. Patient Responsibilities</h3>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Provide accurate medical history and information</li>
            <li>Follow prescribed treatment plans</li>
            <li>Attend scheduled appointments</li>
            <li>Maintain respectful behavior towards staff and other patients</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">5. Confidentiality</h3>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>All patient information is confidential</li>
            <li>Records are maintained according to medical privacy laws</li>
            <li>Information shared only with authorized parties</li>
            <li>Patients have right to access their medical records</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">6. Service Limitations</h3>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Some treatments may require multiple sessions</li>
            <li>Results may vary between individuals</li>
            <li>Certain conditions may require specialist referral</li>
            <li>Emergency cases may take priority</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">7. Changes to Terms</h3>
          <p className="text-muted-foreground">
            ARKangel Clinic reserves the right to modify these terms at any time.
            Changes will be effective immediately upon posting to our website.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">Contact Us</h3>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms of Service, please contact
            us at:
          </p>
          <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-muted-foreground">02081495432</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-muted-foreground">info@arkangelclinic.com</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-muted-foreground">13 Lanark Square (Ground Floor East), London E14 3LP</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Last updated: February 14, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
