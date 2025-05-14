import Navbar from './components/Navbar';
import Career from './components/Career';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Career />
        <Projects />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;