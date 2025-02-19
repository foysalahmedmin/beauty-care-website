import BannerSection from "@/components/partials/Sections/BannerSection";
import { useForm } from 'react-hook-form';
import { FaArrowRight, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission here
    };

    return (
        <main className="min-h-screen">
            <BannerSection
                title="Contact Us"
                description="Contact us for any inquiries or to schedule an appointment. We are here to assist you."
                image="https://images.squarespace-cdn.com/content/v1/64f83f902d10c760d4813bf4/7dcd0d2c-bb28-43a0-a8e7-643a169b3707/saw.jpeg"
                imageClassName="bg-blue-800 blur-md"
            />

            {/* Contact Information Cards */}
            <div className="container mx-auto px-4 -mt-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaPhone className="text-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Phone</h3>
                        <p className="text-gray-600 mb-2">02081495432</p>
                        {/* <p className="text-gray-600">+44 20 8765 4321</p> */}
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaEnvelope className="text-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Email</h3>
                        <p className="text-gray-600 mb-2">info@arkangelclinic.com</p>
                        <p className="text-gray-600">arkangelclinicuk@gmail.com</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaMapMarkerAlt className="text-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Location</h3>
                        <p className="text-gray-600 mb-2">Aegon House</p>
                        <p className="text-gray-600">13 Lanark Square (Ground Floor East)</p>
                        <p className="text-gray-600">London, W1G 6AB</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaClock className="text-primary text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
                        <p className="text-gray-600 mb-2">Mon-Sun: 9:00 - 20:00</p>
                    </div>
                </div>

                {/* Contact Form and Map */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
                    <div className="lg:col-span-2 bg-white p-10 rounded-lg border border-gray-100">
                        <div className="max-w-md mx-auto">
                            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Get in Touch</h2>
                            <p className="text-gray-500 mb-8 text-sm">We'll get back to you within 24 hours</p>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        {...register('name', { required: 'Name is required' })}
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-gray-400"
                                        type="text"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-gray-400"
                                        type="email"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        {...register('phone')}
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-gray-400"
                                        type="tel"
                                        placeholder="+44 20 1234 5678"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        {...register('message', { required: 'Message is required' })}
                                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-gray-400"
                                        rows="4"
                                        placeholder="Tell us about your inquiry..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-2.5 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                                >
                                    <span>Send Message</span>
                                    <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-0.5" />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="lg:col-span-3 bg-white p-10 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-2">Find Us</h2>
                        <p className="text-gray-600 mb-8">Visit our clinic in Harley Street</p>
                        <div className="h-[400px] rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4790621357444!2d-0.1483347!3d51.5199828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad3c9ea3b97%3A0x5f0e791c8d3a1c69!2sHarley%20St%2C%20London!5e0!3m2!1sen!2suk!4v1643900874197!5m2!1sen!2suk"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Map */}

            </div>

            {/* FAQ Section */}
            {/* <div className="mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services and procedures</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <h3 className="text-xl font-semibold mb-4">What are your opening hours?</h3>
                        <p className="text-gray-600 leading-relaxed">We are open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 4:00 PM. We are closed on Sundays and public holidays.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">Do you offer emergency appointments?</h3>
                        <p className="text-gray-600">Yes, we offer emergency appointments for urgent cases. Please call our emergency number for immediate assistance.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">How do I book an appointment?</h3>
                        <p className="text-gray-600">You can book an appointment through our online booking system, by calling us directly, or by filling out the contact form on this page.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-3">What payment methods do you accept?</h3>
                        <p className="text-gray-600">We accept all major credit cards, debit cards, and cash payments. We also work with various insurance providers.</p>
                    </div>
                </div>
            </div> */}

            {/* Newsletter Section */}
            {/* <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-16 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
                    <p className="mb-8 max-w-2xl mx-auto text-lg opacity-90">Subscribe to our newsletter to receive updates about new services, special offers, and health tips.</p>
                    <form className="max-w-lg mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-xl focus:outline-none text-gray-900 text-lg"
                        />
                        <button
                            type="submit"
                            className="bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium flex items-center gap-2"
                        >
                            Subscribe
                            <FaArrowRight className="text-sm" />
                        </button>
                    </form>
                </div>
            </div> */}
        </main >
    );
};

export default Contact;