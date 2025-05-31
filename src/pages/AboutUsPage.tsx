import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
          Our Story
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Lumière, we believe in the transformative power of beauty and self-care.
          Our journey began with a simple vision: to create luxury cosmetics that enhance
          natural beauty while prioritizing sustainability and ethical practices.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-20">
        <div className="bg-pink-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <Target className="text-pink-500 mr-3" size={28} />
              <h2 className="text-2xl font-serif font-medium text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To empower individuals through clean, sustainable beauty products that enhance
              their natural radiance. We strive to create exceptional cosmetics that not only
              deliver remarkable results but also uphold our commitment to environmental
              stewardship and ethical practices. Through innovation and transparency, we aim
              to redefine luxury in the beauty industry.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mb-20">
        <div className="bg-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <Heart className="text-purple-500 mr-3" size={28} />
              <h2 className="text-2xl font-serif font-medium text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the leading force in sustainable luxury beauty, setting new standards for
              clean formulations and ethical practices. We envision a world where beauty and
              environmental consciousness coexist seamlessly, inspiring a global movement
              towards more mindful beauty choices.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mb-20">
        <div className="flex items-center justify-center mb-12">
          <Award className="text-pink-500 mr-3" size={28} />
          <h2 className="text-2xl font-serif font-medium text-gray-900">Our Core Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-serif text-xl text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We prioritize environmental responsibility in every aspect of our business,
              from sourcing ingredients to packaging design.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-serif text-xl text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously push boundaries to develop cutting-edge formulations that
              deliver exceptional results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-serif text-xl text-gray-900 mb-3">Transparency</h3>
            <p className="text-gray-600">
              We believe in complete honesty about our ingredients, processes, and
              business practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-serif text-xl text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              We never compromise on the quality of our products or the safety of
              our customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-serif text-xl text-gray-900 mb-3">Inclusivity</h3>
            <p className="text-gray-600">
              We celebrate diversity and create products that cater to all skin types
              and tones.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-serif text-xl text-gray-900 mb-3">Ethics</h3>
            <p className="text-gray-600">
              We maintain the highest ethical standards in our operations and
              partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div>
        <div className="flex items-center justify-center mb-12">
          <Users className="text-pink-500 mr-3" size={28} />
          <h2 className="text-2xl font-serif font-medium text-gray-900">Our Leadership</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Janet Njuguna"
                className="w-48 h-48 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="font-serif text-xl font-medium text-gray-900 mb-2">
              Janet Njuguna
            </h3>
            <p className="text-pink-500 font-medium mb-4">Chief Executive Officer</p>
            <p className="text-gray-600">
              With over 15 years of experience in the beauty industry, Janet leads
              Lumière's vision of sustainable luxury beauty. Her passion for clean
              beauty and innovation drives our company's mission forward.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <img
                src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Lexy Njuguna"
                className="w-48 h-48 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="font-serif text-xl font-medium text-gray-900 mb-2">
              Lexy Njuguna
            </h3>
            <p className="text-pink-500 font-medium mb-4">Chief Operating Officer</p>
            <p className="text-gray-600">
              Lexy brings extensive operational expertise to Lumière, ensuring our
              commitment to sustainability and quality is reflected in every aspect
              of our business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;