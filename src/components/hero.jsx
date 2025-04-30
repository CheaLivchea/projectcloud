import React from 'react'
import logo from '/src/assets/hero.png' 
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="text-center py-16 px-8 bg-white flex flex-col md:flex-row items-center justify-center gap-8">
                <div data-aos="fade-right" className="md:w-1/2 order-2 md:order-1">
                    <h2 className="text-4xl font-extrabold mb-4">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h2>
                    <p className="text-gray-600 text-center mb-4 ">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Link to="/shop">
                        <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-800">
                            Shop Now
                        </button>
                    </Link>
                </div>
                <div data-aos="zoom-in" className="md:w-1/2 order-1 md:order-2">
                    <img
                        src={logo}
                        alt="Fashion Models"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* Stats */}
            <div className="flex justify-center gap-12 py-8 bg-gray-50">
                <div className="text-center">
                    <p className="text-2xl font-bold">200+</p>
                    <p className="text-gray-600">International Brands</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">2,000+</p>
                    <p className="text-gray-600">High-Quality Products</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">30,000+</p>
                    <p className="text-gray-600">Happy Customers</p>
                </div>
            </div>
        </div>
    )

}

export default Hero
