
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate">Let's Connect</h3>
        <p className="text-slate my-6 text-lg">
          I'm currently seeking new opportunities and I'm always excited to collaborate on interesting projects. Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:makemerichmp@gmail.com"
            className="px-10 py-4 bg-teal text-black rounded-md hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 transform transition-all duration-300 font-semibold"
          >
            Say Hello!
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;