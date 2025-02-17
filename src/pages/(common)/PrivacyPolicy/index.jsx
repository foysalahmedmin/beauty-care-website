import BannerSection from "@/components/partials/Sections/BannerSection";

const PrivacyPolicy = () => {
  return (
    <>
      <BannerSection
        title="Privacy Policy"
        description="How we protect and manage your personal information"
        image="/images/shut/banner/1.jpg"
      />
      <div className="container py-16 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At ARKangel Clinic, protecting your privacy is our top priority. This policy
            outlines our practices for handling your personal and medical information.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">1. Information Collection</h3>
          <h4 className="text-xl font-medium text-secondary mb-4">Personal Information</h4>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Name and contact details</li>
            <li>Date of birth and NHS number</li>
            <li>Emergency contact information</li>
            <li>Insurance details</li>
          </ul>

          <h4 className="text-xl font-medium text-secondary mt-8 mb-4">Medical Information</h4>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Medical history and conditions</li>
            <li>Treatment records and medications</li>
            <li>Test results and diagnoses</li>
            <li>Allergies and adverse reactions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">2. How We Use Your Information</h3>
          <h4 className="text-xl font-medium text-secondary mb-4">Primary Uses</h4>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Providing medical care and treatment</li>
            <li>Managing your healthcare services</li>
            <li>Scheduling appointments and follow-ups</li>
            <li>Processing payments and insurance claims</li>
          </ul>

          <h4 className="text-xl font-medium text-secondary mt-8 mb-4">Secondary Uses</h4>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Quality assurance and improvement</li>
            <li>Staff training and education</li>
            <li>Research (with explicit consent)</li>
            <li>Legal and regulatory compliance</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">3. Information Security</h3>
          <p className="text-muted-foreground mb-4">
            We employ robust security measures to protect your information:
          </p>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Advanced encryption for digital records</li>
            <li>Secure access controls and authentication</li>
            <li>Regular security assessments and updates</li>
            <li>Staff confidentiality training</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">4. Your Privacy Rights</h3>
          <p className="text-muted-foreground mb-4">Under data protection laws, you have the right to:</p>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Access your medical records</li>
            <li>Request corrections to your information</li>
            <li>Restrict how we use your data</li>
            <li>Receive copies of your records</li>
            <li>File complaints about data handling</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">5. Information Sharing</h3>
          <p className="text-muted-foreground mb-4">We may share your information with:</p>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            <li>Other healthcare providers involved in your care</li>
            <li>NHS services when required</li>
            <li>Insurance providers (with your consent)</li>
            <li>Legal authorities when legally required</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">6. Data Retention</h3>
          <p className="text-muted-foreground">
            We retain medical records in accordance with NHS guidelines and legal
            requirements. Adult records are typically kept for 10 years after your
            last treatment.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">7. Changes to This Policy</h3>
          <p className="text-muted-foreground">
            We may update this privacy policy periodically. Significant changes will
            be communicated to you directly.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-12 mb-6">8. Contact Information</h3>
          <p className="text-muted-foreground mb-4">
            For privacy-related inquiries, contact our Data Protection Officer:
          </p>
          <div className="bg-secondary/10 p-6 rounded-lg space-y-3">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-muted-foreground">privacy@arkangelclinic.com</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-muted-foreground">02081495432</span>
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

export default PrivacyPolicy;
