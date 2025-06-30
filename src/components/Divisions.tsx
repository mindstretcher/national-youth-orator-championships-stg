
import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Eye, Clock, Lightbulb, Download } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Divisions = () => {
  const divisions = [
    {
      id: "lower-primary",
      title: "Lower Primary (P1–P3)",
      icon: BookOpen,
      timeLimit: "1.5-2 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { period: "Past", topic: "A story my grandparents told me about Singapore." },
        { period: "Present", topic: "Something I love about living in Singapore." },
        { period: "Future", topic: "When I grow up, I want to help Singapore by..." }
      ]
    },
    {
      id: "upper-primary",
      title: "Upper Primary (P4–P6)",
      icon: Eye,
      timeLimit: "2-2.5 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { period: "Past", topic: "The shoulders on which we stand." },
        { period: "Present", topic: "A moment that made me feel proud to be Singaporean." },
        { period: "Future", topic: "My dream for Singapore in 2065." }
      ]
    },
    {
      id: "lower-secondary",
      title: "Lower Secondary (Sec 1–2)",
      icon: Clock,
      timeLimit: "2.5-3.5 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { period: "Past", topic: "A lesson from Singapore's history we must not forget." },
        { period: "Present", topic: "What it means to be Singaporean today." },
        { period: "Future", topic: "One hope I have for my generation." }
      ]
    },
    {
      id: "upper-secondary",
      title: "Upper Secondary & Youth Open (Sec 3-5, JC, IB, Uni, Poly, ITE)",
      icon: Lightbulb,
      timeLimit: "2.5-3.5 minutes",
      criteria: [
        "Language & delivery",
        "Content & relevance", 
        "Personal voice & impact"
      ],
      themes: [
        { period: "Past", topic: "We are who we are because of who they were." },
        { period: "Present", topic: "What Singapore needs most today." },
        { period: "Future", topic: "As Singapore turns 60, how should we prepare for a future shaped by AI and technology?" }
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
            Categories & Themes
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Open to students from Primary to University levels. Explore themes that connect Singapore's past, present and future.
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
                            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border flex-shrink-0 w-fit ${getPeriodColor(theme.period)}`}>
                                {theme.period}
                              </span>
                              <p className="text-gray-700 font-medium flex-1 leading-relaxed">
                                "{theme.topic}"
                              </p>
                            </div>
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
