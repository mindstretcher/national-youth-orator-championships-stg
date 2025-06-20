
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate subscription (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to NYOC 2025 updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-red-800 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 border-b border-red-700">
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
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+6588838004" className="text-red-100 hover:text-white transition-colours">
                  +65 8883 8004
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('why-take-part')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Why Take Part</button></li>
              <li><button onClick={() => document.getElementById('who-can-join')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Who Can Join</button></li>
              <li><button onClick={() => document.getElementById('divisions')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Divisions</button></li>
              <li><button onClick={() => document.getElementById('timeline')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Timeline</button></li>
              <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">FAQ</button></li>
              <li><button onClick={() => document.getElementById('contact-info')?.scrollIntoView({behavior: 'smooth'})} className="text-red-100 hover:text-white transition-colours">Register Now</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Stay Updated</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-red-700 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-red-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-white text-red-600 rounded-md hover:bg-red-50 transition-colours flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe for Updates
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
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
