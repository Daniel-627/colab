import React from "react";

const services = {
  design: [
    { title: "UI/UX Design", description: "Crafting user-centered interfaces and experiences for websites and applications to ensure optimal usability and engagement." },
    { title: "Graphic Design", description: "Creating visually appealing designs for digital and print media, including posters, brochures, and digital banners." },
    { title: "Website Design", description: "Designing responsive and visually appealing website layouts tailored to client requirements and brand identity." },
    // Add more services...
  ],
  development: [
    { title: "Front-end Development", description: "Developing interactive and responsive user interfaces using modern web technologies like HTML, CSS, and JavaScript." },
    { title: "Back-end Development", description: "Building robust server-side functionality, databases, and APIs to support web applications." },
    { title: "Full-stack Web Development", description: "Providing end-to-end web development services, integrating front-end and back-end solutions." },
    // Add more services...
  ],
  brandingAndMarketing: [
    { title: "Brand Strategy and Identity", description: "Developing comprehensive brand strategies and visual identities to align with business goals and target audiences." },
    { title: "Content Creation and Copywriting", description: "Producing high-quality written and visual content to engage audiences and communicate brand messages." },
    { title: "Social Media Management", description: "Managing social media accounts to boost engagement and build a strong online presence." },
    // Add more services...
  ],
};

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">What Colab Studios Does</h1>
        <p className="text-lg text-gray-600 mt-4">
          At Colab Studios, we specialize in delivering cutting-edge solutions in design, development, branding, and marketing. Our mission is to bring ideas to life with innovation, creativity, and strategy, helping businesses achieve their goals and stand out in today’s competitive market.  
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Whether you’re looking to establish a memorable digital presence, create exceptional software, or enhance your brand identity, we’ve got you covered. From startups to established enterprises, our team of skilled professionals is dedicated to collaborating with you at every step. We focus on understanding your unique needs, crafting tailored solutions that drive impactful results, and delivering value that resonates with your audience.  
        </p>
        <p className="text-lg text-gray-600 mt-4">
          From designing intuitive user interfaces to developing robust web and mobile applications, we prioritize functionality and aesthetics. In branding and marketing, we employ data-driven strategies and creative storytelling to amplify your message and expand your reach. Our comprehensive services ensure that your business not only looks great but also performs exceptionally in its digital and offline presence.  
        </p>
      </div>

      {/* Service List */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Design Services */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Design</h2>
          {services.design.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Development Services */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Development</h2>
          {services.development.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Branding and Marketing Services */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Branding & Marketing</h2>
          {services.brandingAndMarketing.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
