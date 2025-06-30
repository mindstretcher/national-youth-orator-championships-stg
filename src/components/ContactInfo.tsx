
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-br from-red-600 to-red-800 text-white relative py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join?
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto">
            Have questions about the National Youth Orator Championships 2025? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Email Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-full mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <a 
              href="mailto:nyoc@mindstretcher.com" 
              className="text-red-100 hover:text-white transition-colors text-lg"
            >
              nyoc@mindstretcher.com
            </a>
          </div>

          {/* Phone Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-full mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
            <a 
              href="https://wa.me/6588838004" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-100 hover:text-white transition-colors text-lg"
            >
              +65 8883 8004
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ContactInfo;
