import BannerSection from '@/components/partials/Sections/BannerSection';
import { FaStar } from 'react-icons/fa';

const About = () => {
    return (
        <main>
            <BannerSection
                title="About Us"
                description="Discover the Arkangel Clinic, where we specialize in providing top-notch private GP services. With same-day appointments, personalized care, and convenient consultations, we ensure your health is our priority."
                image="https://images.squarespace-cdn.com/content/v1/64f83f902d10c760d4813bf4/7dcd0d2c-bb28-43a0-a8e7-643a169b3707/saw.jpeg"
            />
            {/* Mission Section */}
            <section className="w-full bg-white py-20">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-primary uppercase tracking-[2px] text-sm font-semibold">ABOUT US</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">Helping you look and feel your best every day.</h2>
                            <p className="text-lg text-gray-600">
                                At Arkangel Clinic, we've been enhancing confidence and empowering lives for over 10 years. With multiple clinics across London, we're proud to be a leading provider of Aesthetic and GP Services. Our mission is simple: to make advanced, effective treatments accessible to everyone.
                            </p>
                        </div>
                        <div className="relative h-[500px] w-full">
                            <img
                                src="https://www.pipcpatients.org/uploads/1/2/9/0/12902828/accept-new-medicare-patients2_orig.jpg"
                                alt="Our Mission"
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Empowerment Section */}
            <section className="w-full bg-[#F3F1FF] py-20">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] w-full order-2 md:order-1">
                            <img
                                src="https://www.pipcpatients.org/uploads/1/2/9/0/12902828/accept-new-medicare-patients2_orig.jpg"
                                alt="Our Community"
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <p className="text-primary uppercase tracking-[2px] text-sm font-semibold">A PLACE FOR EVERYONE</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">Empowered to Belong</h2>
                            <p className="text-lg text-gray-600">
                                We are a people-first organisation, welcoming everyone with open arms—clients, patients, and employees alike. We foster a culture of belonging, where individuals feel supported, celebrated, and valued for who they are. Diversity is at the heart of our growing community, empowering each person to live their best life and build meaningful relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full bg-grey py-16 md:py-24">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        <div className="flex flex-col items-center space-y-2">
                            <h3 className="font-Optima text-5xl tracking-[-2px] md:text-5xl xl:text-6xl">10+</h3>
                            <p className="text-xs uppercase tracking-[1px] text-noir-600 2xl:text-base">Years Experience</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h3 className="font-Optima text-5xl tracking-[-2px] md:text-5xl xl:text-6xl">50+</h3>
                            <p className="text-xs uppercase tracking-[1px] text-noir-600 2xl:text-base">Expert Staff</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h3 className="font-Optima text-5xl tracking-[-2px] md:text-5xl xl:text-6xl">15k+</h3>
                            <p className="text-xs uppercase tracking-[1px] text-noir-600 2xl:text-base">Happy Clients</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <h3 className="font-Optima text-5xl tracking-[-2px] md:text-5xl xl:text-6xl">30+</h3>
                            <p className="text-xs uppercase tracking-[1px] text-noir-600 2xl:text-base">Services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="space-y-28 bg-noir-900 py-20 md:py-16" >
                <div className="mx-auto max-w-screen-xl space-y-8 px-6">
                    <div className="grid gap-8 md:grid-cols-4 md:gap-2">
                        <div className="space-y-8 md:pr-12">
                            <h6 className="text-xs font-semibold uppercase tracking-[2px] text-primary">Why Choose Us?</h6>
                            <h1 className="text-3xl leading-[46px] text-noir-50 md:text-4xl">With over 10 years of experience, we're proud to offer safe, effective treatments that are accessible and tailored to suit your needs.</h1>
                        </div>
                        <div className="space-y-4">
                            <div className="h-[400px] w-full overflow-hidden bg-[#241b13]">
                                <img
                                    src="https://beautytechnology.com.au/wp-content/uploads/2022/09/Picture2-1.jpg"
                                    alt="Advanced Technology"
                                    className="h-full object-cover object-top opacity-90 duration-500 group-hover:opacity-80"
                                />
                            </div>
                            <div className="px-6 md:px-0">
                                <h4 className="text-noir-50">Advanced Technology:</h4>
                                <p className="pr-8 text-noir-300">We use the latest and most advanced equipment to ensure optimal results.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-[400px] w-full overflow-hidden bg-[#241b13]">
                                <img
                                    src="https://therapieclinic.com/_next/image?url=%2Fassets%2Faboutus%2Fabout03.webp&w=828&q=75"
                                    alt="Expert Team"
                                    className="h-full object-cover object-top opacity-90 duration-500 group-hover:opacity-80"
                                />
                            </div>
                            <div className="px-6 md:px-0">
                                <h4 className="text-noir-50">Expert Team:</h4>
                                <p className="pr-8 text-noir-300">Our highly trained professionals are committed to your care and satisfaction.</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-[400px] w-full overflow-hidden bg-[#241b13]">
                                <img
                                    src="https://www.pipcpatients.org/uploads/1/2/9/0/12902828/accept-new-medicare-patients2_orig.jpg"
                                    alt="Personalized Care"
                                    className="h-full object-cover object-top opacity-90 duration-500 group-hover:opacity-80"
                                />
                            </div>
                            <div className="px-6 md:px-0">
                                <h4 className="text-noir-50">Personalized Care:</h4>
                                <p className="pr-8 text-noir-300">Every treatment is tailored to meet your unique needs and goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Doctor Reviews Section */}
            <section className="bg-grey/50 py-20">
                <div className="mx-auto max-w-screen-xl space-y-10 md:space-y-16">
                    <div className="mx-auto flex items-end justify-between px-6">
                        <div className="space-y-2 md:space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-[2px] text-primary">Our Experts</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Doctor Reviews</h2>
                        </div>
                    </div>
                    <div className="w-full overflow-hidden px-6">
                        <div className="flex gap-8">
                            {/* Doctor Card */}
                            <div className="justify-left flex w-full shrink-0 flex-col rounded-xl bg-white px-2 py-6 md:flex-row md:gap-5 md:p-6 lg:w-1/2">
                                <div className="flex w-full flex-col items-center p-2 md:w-1/3">
                                    <div className="flex w-full items-center justify-center pb-4">
                                        <img
                                            alt="Dr. Sarah Smith"
                                            className="h-auto w-4/6 rounded-full md:w-full"
                                            src="https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg"
                                        />
                                    </div>
                                    <div className="font-Optima text-2xl font-bold tracking-[-1px] text-noir-900 md:text-5xl">4.8</div>
                                    <div className="flex h-8 items-center justify-center">
                                        {[1, 2, 3, 4].map((_, i) => (
                                            <FaStar key={i} className="h-4 w-4 text-[#D4B726]" />
                                        ))}
                                    </div>
                                    <div className="font-Lato text-xs md:text-base">267 reviews</div>
                                </div>
                                <div className="w-full py-4 pl-4 pr-4 md:w-2/3 md:pl-0">
                                    <h3 className="text-xl text-noir-900 md:text-4xl">Dr. Sarah Smith</h3>
                                    <p className="leading-[0px] text-gray-500"><small>Arkangel Clinic London</small></p>
                                    <div className="relative mt-5 font-Lato md:mt-0">
                                        <div className="h-80 w-full overflow-hidden overflow-y-scroll md:h-[500px]">
                                            <div className="hidden pb-10 pt-5 text-base md:block">
                                                I serve as both a  an Aesthetic Doctor at Arkangel Clinic. I am deeply passionate about aesthetics and am committed to continuously enhancing my skills and knowledge through attending masterclasses and international conferences.
                                            </div>
                                            <div className="relative">
                                                <div className="pb-5">
                                                    <div className="font-semibold">Jane Doe</div>
                                                    <div className="text-noir-700">Dr Sarah is amazing! She really takes the time to understand what you want and explains everything thoroughly. I couldn't be happier with my results.</div>
                                                    <div className="flex h-10 flex-row pt-2">
                                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                                            <FaStar key={i} className="h-4 w-4 text-[#D4B726]" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-5 z-10 h-20 w-full bg-gradient-to-b from-transparent to-white"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-left flex w-full shrink-0 flex-col rounded-xl bg-white px-2 py-6 md:flex-row md:gap-5 md:p-6 lg:w-1/2">
                                <div className="flex w-full flex-col items-center p-2 md:w-1/3">
                                    <div className="flex w-full items-center justify-center pb-4">
                                        <img
                                            alt="Dr. Sarah Smith"
                                            className="h-auto w-4/6 rounded-full md:w-full"
                                            src="https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg"
                                        />
                                    </div>
                                    <div className="font-Optima text-2xl font-bold tracking-[-1px] text-noir-900 md:text-5xl">4.8</div>
                                    <div className="flex h-8 items-center justify-center">
                                        {[1, 2, 3, 4].map((_, i) => (
                                            <FaStar key={i} className="h-4 w-4 text-[#D4B726]" />
                                        ))}
                                        <img src="/assets/icons/halfStar.svg" className="h-4 w-4" alt="" />
                                    </div>
                                    <div className="font-Lato text-xs md:text-base">267 reviews</div>
                                </div>
                                <div className="w-full py-4 pl-4 pr-4 md:w-2/3 md:pl-0">
                                    <h3 className="text-xl text-noir-900 md:text-4xl">Dr. Sarah Smith</h3>
                                    <p className="leading-[0px] text-gray-500"><small>Arkangel Clinic London</small></p>
                                    <div className="relative mt-5 font-Lato md:mt-0">
                                        <div className="h-80 w-full overflow-hidden overflow-y-scroll md:h-[500px]">
                                            <div className="hidden pb-10 pt-5 text-base md:block">
                                                I work as both a General Practitioner and an Aesthetic Doctor at Arkangel Clinic. I am passionate about aesthetics and continuously strive to improve my skills and knowledge by attending masterclasses and international conferences.
                                            </div>
                                            <div className="relative">
                                                <div className="pb-5">
                                                    <div className="font-semibold">Jane Doe</div>
                                                    <div className="text-noir-700">Dr. Sarah is incredible! She takes the time to fully understand your needs and explains everything in detail. I couldn't be more delighted with my results.</div>
                                                    <div className="flex h-10 flex-row pt-2">
                                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                                            <FaStar key={i} className="h-4 w-4 text-[#D4B726]" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-5 z-10 h-20 w-full bg-gradient-to-b from-transparent to-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
};

export default About;