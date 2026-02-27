import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LearningDistribution from './components/LearningDistribution';
import PerformanceOverview from './components/PerformanceOverview';
import SkillMastery from './components/SkillMastery';
import ActivityTimeline from './components/ActivityTimeline';
import RewardsAchievements from './components/RewardsAchievements';
import MultiplayerInsights from './components/MultiplayerInsights';
import ParentalControls from './components/ParentalControls';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      <Sidebar />

      {/* Main content - offset for sidebar */}
      <div className="lg:pl-64">
        <Header />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {/* Welcome Banner */}
          <motion.div
            className="relative overflow-hidden rounded-3xl p-6 mb-6 shadow-md"
            style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative circles */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -right-4 top-8 w-28 h-28 bg-white/10 rounded-full" />
            <div className="absolute right-24 -bottom-8 w-20 h-20 bg-white/10 rounded-full" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-blue-200 text-sm font-semibold mb-1">👋 Welcome back!</p>
                <h2 className="text-white text-2xl font-bold leading-tight">Alex is on a 14-day streak! 🔥</h2>
                <p className="text-blue-200 text-sm mt-1">Completed 3 challenges today · 95 mins active</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
                  <p className="text-white text-2xl font-bold">4,280</p>
                  <p className="text-blue-200 text-xs font-medium">Total Points</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-5 py-3 text-center">
                  <p className="text-white text-2xl font-bold">#42</p>
                  <p className="text-blue-200 text-xs font-medium">Global Rank</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Row: Performance + Learning Distribution */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">
            <motion.div custom={0} variants={fadeInUp} initial="hidden" animate="visible">
              <PerformanceOverview />
            </motion.div>
            <motion.div custom={1} variants={fadeInUp} initial="hidden" animate="visible">
              <LearningDistribution />
            </motion.div>
          </div>

          {/* Skill Mastery - Full Width */}
          <motion.div custom={2} variants={fadeInUp} initial="hidden" animate="visible" className="mb-5">
            <SkillMastery />
          </motion.div>

          {/* Middle Row: Activity Timeline + Rewards */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-5">
            <motion.div custom={3} variants={fadeInUp} initial="hidden" animate="visible">
              <ActivityTimeline />
            </motion.div>
            <motion.div custom={4} variants={fadeInUp} initial="hidden" animate="visible">
              <RewardsAchievements />
            </motion.div>
          </div>

          {/* Bottom Row: Multiplayer + Parental Controls */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-6">
            <motion.div custom={5} variants={fadeInUp} initial="hidden" animate="visible">
              <MultiplayerInsights />
            </motion.div>
            <motion.div custom={6} variants={fadeInUp} initial="hidden" animate="visible">
              <ParentalControls />
            </motion.div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-slate-400 pb-4 font-medium">
            StemQuest Parent Portal · Data updates every 5 minutes · All times in local timezone
          </p>
        </main>
      </div>
    </div>
  );
}
