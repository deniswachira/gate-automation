import Container from "../Components/Container";
import { DigitalCompanies } from "../Components/DigitalCompanies";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const GetPostie = () => {
    return (
        <Container className="flex flex-col gap-6">
            <Navbar />

            {/* Get in Touch Section */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Side - Contact Form */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2C47]">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mt-2">
                            We're excited to hear from you! Fill your details below and we’ll
                            be in touch within 24 hours.
                        </p>

                        <form className="mt-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-semibold text-gray-700">
                                        First Name*
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded-md p-3 w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-semibold text-gray-700">
                                        Last Name*
                                    </label>
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded-md p-3 w-full"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700">
                                    Company Name*
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-3 w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700">
                                    Job Title*
                                </label>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-md p-3 w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700">
                                    Work Email*
                                </label>
                                <input
                                    type="email"
                                    className="border border-gray-300 rounded-md p-3 w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700">
                                    Phone Number*
                                </label>
                                <input
                                    type="tel"
                                    className="border border-gray-300 rounded-md p-3 w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-gray-700">
                                    Monthly Marketing Spend*
                                </label>
                                <select className="border border-gray-300 rounded-md p-3 w-full">
                                    <option value="">Please Select</option>
                                    <option value="under-5k">Under $5K</option>
                                    <option value="5k-10k">$5K - $10K</option>
                                    <option value="10k-50k">$10K - $50K</option>
                                    <option value="50k-plus">$50K+</option>
                                </select>
                            </div>

                            {/* Subscribe Checkbox */}
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    className="w-5 h-5 border-gray-300 rounded"
                                />
                                <label htmlFor="newsletter" className="text-gray-700">
                                    Subscribe to our newsletter for updates and offers
                                </label>
                            </div>

                            {/* Submit Button - Centered */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className=" btn btn-primary bg-[#00C4FF] text-blue-700 font-semibold py-3 px-6 rounded-md shadow-md hover:bg-[#009ECF] transition w-full md:w-1/2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side - Customer Testimonials */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#0A2C47]">
                            What Customers Are Saying
                        </h3>

                        <div className="mt-6 space-y-6">
                            {/* Testimonial 1 */}
                            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
                                <p className="text-gray-700">
                                    Postie has enabled us to launch and scale a new growth channel
                                    with analytics to back it. The team at Postie has been
                                    incredibly helpful in offering insights, reporting, and tests
                                    to enable us to grow this channel.
                                </p>
                                <div className="flex items-center mt-4">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="Emma"
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <p className="font-bold">Emma Lieblich</p>
                                        <p className="text-sm text-[#00C4FF]">
                                            Free Fly Apparel, Ecommerce Manager
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
                                <p className="text-gray-700">
                                    Postie’s approach to direct marketing was a game changer for
                                    us. Their ability to merge a digital-first approach to
                                    targeting and the speed and agility of real-time execution has
                                    been very powerful.
                                </p>
                                <div className="flex items-center mt-4">
                                    <img
                                        src="https://via.placeholder.com/40"
                                        alt="Doug"
                                        className="w-10 h-10 rounded-full mr-3"
                                    />
                                    <div>
                                        <p className="font-bold">Doug Sweeny</p>
                                        <p className="text-sm text-[#00C4FF]">
                                            Chief Marketing Officer, One Medical
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <DigitalCompanies />
            <Footer />
        </Container>
    );
};

export default GetPostie;
