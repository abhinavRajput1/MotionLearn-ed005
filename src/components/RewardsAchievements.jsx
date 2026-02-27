import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const badges = [
    { icon: '🏆', name: 'Champion', earned: true },
    { icon: '⚡', name: 'Speed Star', earned: true },
    { icon: '🧠', name: 'Genius', earned: true },
    { icon: '🔥', name: 'On Fire', earned: true },
    { icon: '🎯', name: 'Bullseye', earned: true },
    { icon: '🚀', name: 'Rocket', earned: true },
    { icon: '💡', name: 'Inventor', earned: false },
    { icon: '🌟', name: 'All-Star', earned: false },
];

export default function RewardsAchievements() {
    return (
        <motion.div
            className="bg-white rounded-3xl p-6 shadow-sm border border-blue-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-slate-800">Rewards & Achievements</h2>
                <div className="flex items-center gap-1.5 bg-orange-50 text-orange-500 px-3 py-1 rounded-full">
                    <Flame size={13} />
                    <span className="text-xs font-bold">14 day streak</span>
                </div>
            </div>

            {/* Points */}
            <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 rounded-2xl p-4 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
                    <p className="text-2xl font-bold text-blue-600">4,280</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Points Earned</p>
                </div>
                <div className="flex-1 rounded-2xl p-4 bg-gradient-to-br from-amber-50 to-amber-100 text-center">
                    <p className="text-2xl font-bold text-amber-600">6</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Badges Unlocked</p>
                </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-4 gap-3">
                {badges.map((badge, i) => (
                    <motion.div
                        key={badge.name}
                        className={`flex flex-col items-center gap-1 p-2.5 rounded-2xl cursor-default
              ${badge.earned ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-slate-50 opacity-40 grayscale'}`}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: badge.earned ? 1 : 0.4, scale: 1 }}
                        transition={{ delay: i * 0.07, type: 'spring' }}
                        whileHover={badge.earned ? { scale: 1.1, rotate: [0, -5, 5, 0] } : {}}
                        title={badge.name}
                    >
                        <span className="text-2xl">{badge.icon}</span>
                        <span className="text-[10px] text-slate-500 font-medium text-center leading-tight">{badge.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
