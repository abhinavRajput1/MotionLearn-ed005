import { motion } from 'framer-motion';
import { Clock, Trophy, Star, TrendingUp } from 'lucide-react';

const stats = [
    {
        icon: Clock,
        label: 'Time Spent',
        value: '24.5h',
        sub: 'This month',
        color: 'from-blue-400 to-blue-600',
        bg: 'from-blue-50 to-blue-100',
        text: 'text-blue-600',
    },
    {
        icon: Trophy,
        label: 'Levels Completed',
        value: '18',
        sub: '3 new this week',
        color: 'from-violet-400 to-violet-600',
        bg: 'from-violet-50 to-violet-100',
        text: 'text-violet-600',
    },
    {
        icon: Star,
        label: 'Current Rank',
        value: '#42',
        sub: 'Top 5% globally',
        color: 'from-amber-400 to-amber-600',
        bg: 'from-amber-50 to-amber-100',
        text: 'text-amber-600',
    },
    {
        icon: TrendingUp,
        label: 'Weekly Progress',
        value: '+23%',
        sub: 'vs last week',
        color: 'from-emerald-400 to-emerald-600',
        bg: 'from-emerald-50 to-emerald-100',
        text: 'text-emerald-600',
    },
];

export default function PerformanceOverview() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-50">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Child Performance Overview</h2>
                <span className="text-xs bg-emerald-50 text-emerald-600 font-semibold px-3 py-1 rounded-full">● Live</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            className={`rounded-2xl p-4 bg-gradient-to-br ${stat.bg} cursor-default`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.03, y: -2 }}
                        >
                            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-sm`}>
                                <Icon size={18} className="text-white" />
                            </div>
                            <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
                            <p className="text-slate-600 text-xs font-semibold mt-0.5">{stat.label}</p>
                            <p className="text-slate-400 text-xs mt-1">{stat.sub}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
