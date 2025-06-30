
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I submit more than one video?",
      answer: "No. Each student may submit one entry only."
    },
    {
      question: "Can I use slides, props, pictures, or music in my video?",
      answer: "No – videos should be unedited and feature only your voice and presence. No slides, props, pictures, background music, or special effects are allowed as the speech is designed to be short and impactful, showcasing your natural speaking ability."
    },
    {
      question: "Can homeschoolers or international school students join?",
      answer: "Yes, all students based in Singapore are welcome, including those from homeschools and international schools."
    },
    {
      question: "What format should the video be in?",
      answer: "Please submit in landscape orientation (MP4 format). Follow the duration for your division and ensure your face is clearly visible with no background music or edits."
    },
    {
      question: "What should I wear in my video?",
      answer: "Students should dress in their school uniform. University and Polytechnic students can dress in smart casual attire."
    }
  ];

  const recognitionInfo = [
    {
      category: "All participants receive:",
      items: ["Certificate of Participation", "Personalised Feedback Report"]
    },
    {
      category: "Finalists will receive:",
      items: ["Trophy or Finalist Certificate", "Professional coaching session", "Feature in our 'Voices of Youth SG60' video"]
    }
  ];

  return (
    <section id="faq" className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-red-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find answers to common questions about the competition.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-xl border border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
