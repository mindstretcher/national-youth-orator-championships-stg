
import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => {

  return (
    <footer className="bg-red-800 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10 border-b border-red-700">
          <div>
            <h2 className="text-2xl font-bold mb-6">NYOC 2025</h2>
            <p className="text-red-100 mb-6">
              National Youth Orator Championships 2025 - SG60 Edition. 
              Empowering Singapore's youth to become confident communicators and leaders.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:nyoc@mindstretcher.com" className="text-red-100 hover:text-white transition-colours">
                  nyoc@mindstretcher.com
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-2" />
                <a href="https://wa.me/6588838004" target="_blank" rel="noopener noreferrer" className="text-red-100 hover:text-white transition-colours">
                  +65 8883 8004
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => {
                const element = document.getElementById('stay-updated');
                if (element) {
                  const offset = 120;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }} className="text-red-100 hover:text-white transition-colours">Stay Updated</button></li>
              <li><button onClick={() => {
                const element = document.getElementById('why-take-part');
                if (element) {
                  const offset = 120;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }} className="text-red-100 hover:text-white transition-colours">Why Take Part</button></li>
              <li><button onClick={() => {
                const element = document.getElementById('divisions');
                if (element) {
                  const offset = 120;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }} className="text-red-100 hover:text-white transition-colours">Finals Topics</button></li>
              <li><button onClick={() => {
                const element = document.getElementById('tips');
                if (element) {
                  const offset = 120;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }} className="text-red-100 hover:text-white transition-colours">Tips & Resources</button></li>
              <li><button onClick={() => {
                const element = document.getElementById('our-judges');
                if (element) {
                  const offset = 120;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }} className="text-red-100 hover:text-white transition-colours">Judges</button></li>
              <li><button onClick={() => {
                const element = document.getElementById('timeline');
                if (element) {
                  const offset = 120;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }} className="text-red-100 hover:text-white transition-colours">Competition Key Details</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
            <p className="text-red-100 text-sm mb-4">Stay updated with the latest NYOC news!</p>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/masterspeakersacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-red-100 hover:text-white transition-colors group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Master Speakers Academy</span>
              </a>
              <a 
                href="https://www.instagram.com/masterspeakersacademy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-red-100 hover:text-white transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>@masterspeakersacademy</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 flex flex-col gap-4">
          <p className="text-red-200 text-sm text-center">
            © {new Date().getFullYear()} National Youth Orator Championships.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
