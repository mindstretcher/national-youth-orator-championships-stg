
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {

  return (
    <footer className="bg-red-800 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 border-b border-red-700">
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
              <li><button onClick={() => document.getElementById('why-take-part')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Why Take Part</button></li>
              <li><button onClick={() => document.getElementById('how-to-join')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">How To Join</button></li>
              <li><button onClick={() => document.getElementById('divisions')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Categories & Themes</button></li>
              <li><button onClick={() => document.getElementById('our-judges')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Judges</button></li>
              <li><button onClick={() => document.getElementById('timeline')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Timeline</button></li>
              <li><button onClick={() => document.getElementById('tips')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Tips & Resources</button></li>
              <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">FAQ</button></li>
            </ul>
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
