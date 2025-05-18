import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBriefcase, FaUsers, FaLightbulb, FaRocket, FaChartLine, FaCode } from 'react-icons/fa';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [typedWord, setTypedWord] = useState(0);
  const words = ['Innovators', 'Creators', 'Change-makers', 'Visionaries'];

  const jobs = [
    {
      id: 1,
      title: 'Data Scientist',
      department: 'Data Science',
      type: 'Full-Time',
      location: 'Addis Ababa / Remote',
      description: 'Harness data to drive insights and innovation for African markets.',
      requirements: ['3+ years in data science', 'Expertise in Python & TensorFlow', 'Experience with big data'],
      perks: ['Flexible hours', 'Learning budget', 'Remote work options'],
      culture: 'Join a team passionate about data-driven impact.',
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-Time',
      location: 'Hybrid',
      description: 'Build and maintain scalable cloud infrastructure for global solutions.',
      requirements: ['4+ years in DevOps', 'Expertise in AWS & Kubernetes', 'CI/CD pipeline experience'],
      perks: ['Competitive salary', 'Health insurance', 'Growth opportunities'],
      culture: 'Work with cutting-edge tech in a collaborative environment.',
    },
  ];

  const stats = [
    { icon: FaUsers, value: '150+', label: 'Team Members' },
    { icon: FaRocket, value: '75+', label: 'Projects Launched' },
    { icon: FaLightbulb, value: '20+', label: 'Countries Reached' },
    { icon: FaChartLine, value: '98%', label: 'Client Satisfaction' },
  ];

  const cultureValues = [
    { title: 'Innovation', description: 'Pushing boundaries with bold ideas.', icon: FaLightbulb },
    { title: 'Collaboration', description: 'Building together as a diverse team.', icon: FaUsers },
    { title: 'Impact', description: 'Creating solutions that transform lives.', icon: FaRocket },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-white text-[#1F2937] relative">
      <div className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-[Poppins]"
          >
            Join Our Team of
            <motion.span
              key={typedWord}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="block text-[#2BA6FF] mt-4"
            >
              {words[typedWord]}
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-[#4B5563] mb-8 max-w-3xl mx-auto font-[Inter]"
          >
            Shape the future of African technology with passion and purpose.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(43, 166, 255, 0.3)' }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#2BA6FF] text-white px-8 py-4 rounded-full text-lg font-semibold font-[Poppins] transition-all duration-300"
            aria-label="View open positions"
          >
            View Open Positions
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 text-[#2BA6FF] mx-auto mb-4" aria-hidden="true" />
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-[#1F2937] mb-2 font-[Poppins]"
              >
                {stat.value}
              </motion.div>
              <div className="text-[#4B5563] font-[Inter]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 font-[Poppins] text-[#1F2937]">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cultureValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#F3F4F6] rounded-xl p-6 text-center shadow-sm"
            >
              <value.icon className="w-12 h-12 text-[#2BA6FF] mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-2 font-[Poppins] text-[#1F2937]">{value.title}</h3>
              <p className="text-[#4B5563] font-[Inter]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 font-[Poppins] text-[#1F2937]">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.03 }}
              className="bg-[#F3F4F6] rounded-xl p-6 cursor-pointer transition-transform duration-300 shadow-sm"
              onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedJob(selectedJob?.id === job.id ? null : job)}
              aria-label={`View details for ${job.title}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-3 font-[Poppins]">{job.title}</h3>
                <div className="text-[#4B5563] mb-2 font-[Inter]">{job.department} · {job.type}</div>
                <div className="text-[#2BA6FF] mb-4 font-[Inter]">{job.location}</div>
                <p className="text-[#4B5563] mb-4 font-[Inter]">{job.description}</p>
              </div>
              {selectedJob?.id === job.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 mt-4 rounded-xl shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-3 font-[Poppins] text-[#1F2937]">Requirements</h4>
                  <ul className="list-disc list-inside text-[#4B5563] font-[Inter]">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="mb-2">{req}</li>
                    ))}
                  </ul>
                  <h4 className="text-xl font-semibold mb-3 mt-6 font-[Poppins] text-[#1F2937]">Perks & Benefits</h4>
                  <ul className="list-disc list-inside text-[#4B5563] font-[Inter]">
                    {job.perks.map((perk, idx) => (
                      <li key={idx} className="mb-2">{perk}</li>
                    ))}
                  </ul>
                  <h4 className="text-xl font-semibold mb-3 mt-6 font-[Poppins] text-[#1F2937]">Our Culture</h4>
                  <p className="text-[#4B5563] font-[Inter]">{job.culture}</p>
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(43, 166, 255, 0.3)' }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-6 bg-[#2BA6FF] text-white px-6 py-3 rounded-full font-semibold font-[Poppins]"
                    aria-label={`Apply for ${job.title}`}
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 font-[Poppins] text-[#1F2937]">A Day in the Life</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2BA6FF]"></div>
          {[
            { time: '9:00 AM', activity: 'Team Standup', icon: FaUsers },
            { time: '11:00 AM', activity: 'Code Review', icon: FaCode },
            { time: '3:00 PM', activity: 'Innovation Sprint', icon: FaLightbulb },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`bg-[#F3F4F6] p-6 rounded-xl w-5/12 ${index % 2 === 0 ? 'mr-8' : 'ml-8'} shadow-sm`}>
                <item.icon className="w-8 h-8 text-[#2BA6FF] mb-2" aria-hidden="true" />
                <p className="text-[#2BA6FF] font-[Poppins]">{item.time}</p>
                <p className="text-[#1F2937] font-[Inter]">{item.activity}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;