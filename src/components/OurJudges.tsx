
import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";

const OurJudges = () => {
  const judges = [
    {
      name: "Moses Soh",
      title: "Deputy CEO",
      organization: "Mind Stretcher",
      description: "President's Scholar and Wharton graduate (Summa Cum Laude), Moses also holds a Master's in Finance from Princeton and a diploma in AI from Stanford. At Mind Stretcher, he leads innovation in education and mentors the next generation of confident thinkers and speakers.",
      image: "/images/judges/moses.jpg"
    },
    {
      name: "Du Xuan",
      title: "Deputy Senior State Counsel",
      organization: "Attorney-General's Chambers",
      description: "Xuan graduated with First Class Honours from Oxford and earned her Master's from Harvard Law. A former moot court competitor and public speaking mentor, she brings legal rigour and a passion for impactful advocacy.",
      image: "/images/judges/du-xuan.jpg"
    },
    {
      name: "Muhd Nurhakim",
      title: "District Director (2024-2025)",
      organization: "Toastmasters District 80",
      description: "As District Director, Hakim leads Toastmasters across Singapore and Southeast Asia. With deep experience in public speaking and youth development, he is passionate about nurturing clear, confident communicators.",
      image: "/images/judges/hakim.jpg"
    },
    {
      name: "Alvin Kuek",
      title: "Master Coach",
      organization: "Master Speakers",
      description: "Alvin is an international speaking champion with over 10 years of coaching experience. Known for his energy and insight, he has guided hundreds of students to speak with confidence, clarity, and heart.",
      image: "/images/judges/alvin.jpg"
    }
  ];

  return (
    <section id="our-judges" className="bg-white py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Judges
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A distinguished panel of judges featuring top speakers from Master Speakers, Mind Stretcher, AGC and Toastmasters International.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-2 border-red-100">
                <img 
                  src={judge.image} 
                  alt={`${judge.name} - ${judge.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {judge.name}
              </h3>
              <div className="mb-3">
                <p className="text-red-600 font-medium text-sm">
                  {judge.title}
                </p>
                <p className="text-gray-700 font-medium text-xs">
                  {judge.organization}
                </p>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {judge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJudges;
