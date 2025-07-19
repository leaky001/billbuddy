import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-magnolia dark:bg-eerie text-eerie dark:text-white flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-indigo"
      >
        Welcome to <span className="text-lavender">BillBuddy</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl mb-8 max-w-2xl"
      >
        Your smart companion to track, manage, and never miss a bill — from electricity to rent and everything in between.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <Link to="/register" className="px-6 py-3 bg-lavender text-white rounded-lg hover:bg-indigo transition">
          Get Started
        </Link>
        <Link to="/login" className="px-6 py-3 border border-indigo text-indigo dark:text-magnolia rounded-lg hover:bg-indigo hover:text-white transition">
          Login
        </Link>
      </motion.div>
    </div>
  );
}




