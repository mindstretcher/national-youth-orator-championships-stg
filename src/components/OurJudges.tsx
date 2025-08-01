
import { motion } from "framer-motion";
import { Users, Award } from "lucide-react";

const OurJudges = () => {
  const judges = [
    {
      name: "Mary Ann Tear",
      title: "Senior Examiner & Consultant",
      organization: "Trinity College London",
      description: "A leading figure in speech and drama education, Mary Ann has over 30 years of experience across Singapore, Southeast Asia, and the UK. As a Senior Examiner and Consultant with Trinity College London, she has trained educators, shaped curriculum, and adjudicated performances worldwide. A passionate advocate for public speaking, she also served as voice coach to Singapore’s World Schools Debating Champions in 2015. At NYOC 2025, she brings global insight, adjudication expertise, and a deep belief in empowering youth through voice and performance.",
      image: "/images/judges/mary-ann.jpg"
    },
    {
      name: "Muhd Nurhakim",
      title: "District Director (2024-2025)",
      organization: "Toastmasters District 80",
      description: "As District Director, Hakim leads Toastmasters clubs across Singapore, supporting a vibrant community of speakers and leaders. A seasoned speaker and youth mentor, he is deeply committed to nurturing clarity, confidence, and purpose in communication. At NYOC 2025, he brings adjudication rigour, calm authority, and a passion for empowering the next generation of voices.",
      image: "/images/judges/hakim.jpg"
    },
    {
      name: "Moses Soh",
      title: "Deputy CEO",
      organization: "Mind Stretcher",
      description: "A 2012 Singapore President’s Scholar, MAS Overseas Scholar, and Wharton graduate (Summa Cum Laude), Moses also holds a Master’s in Finance from Princeton and a diploma in AI from Stanford. An ex-RI debater and gold medal winner at the SAGE World Championships, he now leads educational innovation at Mind Stretcher. At NYOC 2025, he brings intellectual rigour and a passion for shaping future-ready youth leaders.",
      image: "/images/judges/moses.jpg"
    },
    {
      name: "Du Xuan",
      title: "Lawyer",
      organization: "Harvard & Oxford Alumna",
      description: "Xuan holds a Master of Laws from Harvard and graduated with First Class Honours from Oxford. A former moot court competitor and Oxford Union debater, she’s guided aspiring speakers in crafting persuasive, high-impact arguments. At NYOC 2025, she brings sharp analytical insight and a belief in speech as a tool for purpose-driven youth advocacy.",
      image: "/images/judges/du-xuan.jpg"
    },
    {
      name: "Alvin Kuek",
      title: "Lead Coach",
      organization: "Master Speakers",
      description: "A former Raffles Institution, Raffles Junior College and University scholar, Alvin is a highly respected public speaking coach with over 20 years of experience. A multiple-time speech contest winner and animated speaker himself, he has trained thousands of students – many of whom became champions and confident communicators. At NYOC 2025, he brings deep expertise, sharp mentorship, and an unwavering belief in youth voice.",
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
          A distinguished judging panel featuring top speakers, seasoned coaches, and accomplished professionals — including Harvard and Oxford alumni, Toastmasters leaders, and Master Speakers’ and Mind Stretcher’s finest.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-gray-100 w-full sm:w-[calc(100%-1.5rem)] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
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
