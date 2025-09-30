
import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Eye, Clock, Lightbulb, Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Divisions = () => {
  const divisions = [
    {
      id: "lower-primary",
      title: "Lower Primary (Pri 1–3)",
      icon: BookOpen,
      timeLimit: "1.5-2 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { topic: "My Favourite Childhood Singapore Memory: What's the funniest, happiest or most unforgettable thing you remember doing in Singapore as a kid?" },
        { topic: "The Most Magical Singapore Dish Ever! Which Singapore food feels like pure magic to you, and why do you love it so much?" },
        { topic: "My Dream for Singapore in 10 Years: What cool new things do you hope Singapore will have when you're older?" }
      ]
    },
    {
      id: "upper-primary",
      title: "Upper Primary (Pri 4–6)",
      icon: Eye,
      timeLimit: "2-2.5 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { topic: "The First Thing You'd Share About Singapore: What's the most amazing thing about Singapore you'd tell a new friend from overseas?" },
        { topic: "If I Were Prime Minister for a Day: If you got to be Singapore's Prime Minister for just one day, what's the coolest thing you'd do?" },
        { topic: "My Singapore Superhero: Create a superhero based on a Singaporean trait (like 'kiasuism', resilience, multiculturalism etc.). What would his/her superpowers be?" }
      ]
    },
    {
      id: "lower-secondary",
      title: "Lower Secondary (Sec 1–2)",
      icon: Clock,
      timeLimit: "2.5-3 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { topic: "The Most Unexpected Thing I'd Miss About Singapore When Overseas: What's one surprising thing about Singapore you never thought you'd miss, but end up missing when you travel?" },
        { topic: "The Everyday National Monument: If you could turn any everyday spot (like a bubble tea shop, bus interchange, community parks etc.) into a National Monument, which would you pick and why?" },
        { topic: "Singapore's Best Trait: Strength or Weakness? Pick one common Singaporean trait (like 'kiasuism', efficiency, pressure to succeed etc.) and argue if it helps us or holds us back." }
      ]
    },
    {
      id: "upper-secondary",
      title: "Upper Secondary & Youth Open (Sec 3-5, JC, IB, Uni, Poly, ITE)",
      icon: Lightbulb,
      timeLimit: "2.5-3 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { topic: "\"Lah, leh, lor!\" Does Singlish Help or Hinder Singapore's Global Image? Take a stand and argue your position." },
        { topic: "A Historical Moment that Shaped Us: What's one event from Singapore's history that matters most to you, and why was it so important?" },
        { topic: "If I Could Make a New Law for a Day: What novel or useful law would you create if you had the power for one day, and why?" }
      ]
    }
  ];

  const getPeriodColor = (period: string) => {
    switch (period) {
      case "Past": return "bg-amber-100 text-amber-800 border-amber-200";
      case "Present": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Future": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleDownloadRubrics = () => {
    window.open('https://drive.google.com/file/d/1JizjCjMX4HweAF5OugCkWemwbEB0MMZw/view?usp=sharing', '_blank');
  };

  return (
    <section id="divisions" className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Semi-Finals Topics
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Explore the thought-provoking themes that our Semi-Finalists will tackle on stage.
          </p>
          <Button 
            onClick={handleDownloadRubrics}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Judging Rubrics
          </Button>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {divisions.map((division, index) => (
              <AccordionItem 
                key={division.id} 
                value={division.id}
                className="bg-gray-50 rounded-xl border border-gray-200 px-6"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center w-full">
                    <div className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-lg text-red-600 mr-4 flex-shrink-0">
                      <division.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-900">{division.title}</h3>
                      <p className="text-sm font-medium text-red-600 mt-1">Duration: {division.timeLimit}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="ml-16 space-y-6">
                    {/* Speech Themes */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Speech Themes</h4>
                      <p className="text-gray-700 mb-4">Please choose 1 out of the 3 themes below for your speech:</p>
                      <div className="space-y-4">
                        {division.themes.map((theme, themeIndex) => (
                          <div key={themeIndex} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <p className="text-gray-700 font-medium leading-relaxed">
                              {theme.topic}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Judging Criteria */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Judging Criteria</h4>
                      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                        <ul className="space-y-2">
                          {division.criteria.map((criterion, criteriaIndex) => (
                            <li key={criteriaIndex} className="flex items-start">
                              <span className="text-red-600 mr-3 mt-1 flex-shrink-0">•</span>
                              <span className="text-gray-700">{criterion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Divisions;
