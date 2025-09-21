import React from "react";
import { Award, Users, Leaf, Target, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every seed we produce and every service we provide.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Honest relationships built on trust and transparency with our farming partners.",
    },
    {
      icon: Globe,
      title: "Innovation",
      description:
        "Continuously advancing agricultural technology to meet evolving farming needs.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Working together with farmers to achieve mutual success and growth.",
    },
  ];

  const timeline = [
    {
      year: "1974",
      event: "AgriSeed Pro founded with a commitment to quality seeds",
    },
    {
      year: "1985",
      event: "Expanded operations to serve 10 states across the Midwest",
    },
    {
      year: "1995",
      event: "Introduced first hybrid corn varieties with enhanced yields",
    },
    {
      year: "2005",
      event: "Launched drought-resistant seed technology program",
    },
    {
      year: "2015",
      event: "Reached milestone of serving 30+ states nationwide",
    },
    {
      year: "2024",
      event: "Celebrating 50 years of agricultural innovation and excellence",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About FounderSeeds
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Located in Junagadh, Gujarat, FounderSeeds is an agri-seed company
            devoted to helping farmers thrive with dependable, high-performing
            seed varieties. Built on values of trust, quality, and service, we
            collaborate closely with growers and partners to supply seeds that
            meet the diverse needs of modern agriculture.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide farmers with high-quality seeds that lead to improved
              productivity and sustainability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 mb-6">
              <img
                src="/founder-seeds-logo.svg"
                alt="FOUNDER SEEDS Logo"
                className="w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a leading name in the seed industry known for consistency,
              service, and farmer-centric innovation.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purity and Performance Guaranteed - Every seed batch is subjected
              to rigorous quality checks to ensure germination, purity, and
              vigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Distribution Network */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Distribution Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Our Fields to Your Farms - FounderSeeds ensures timely
              delivery and regional adaptability through a strong distributor
              network.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <p className="text-lg text-gray-700 mb-6">
              Our seeds are available through trusted retail partners and
              agri-input dealers across India. We follow national seed
              certification standards and work with accredited testing
              laboratories to maintain consistent performance.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
              Become a Distributor
            </button>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to advancing agricultural
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Harrison",
                title: "Chief Executive Officer",
                experience: "25+ years in agricultural leadership",
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "Dr. Sarah Martinez",
                title: "Head of Research & Development",
                experience: "PhD in Plant Genetics, 20+ years R&D",
                image:
                  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                name: "Michael Chen",
                title: "VP of Operations",
                experience: "18+ years in agricultural operations",
                image:
                  "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="bg-green-600 rounded-2xl text-white p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Partner with FounderSeeds
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of successful farmers who trust FounderSeeds for
            their seed needs. Let's grow together toward a more productive and
            sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
