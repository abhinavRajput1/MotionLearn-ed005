import { motion } from 'framer-motion';
import { Users, Swords, Handshake } from 'lucide-react';

const stats = [
    {
        icon: Swords,
        label: 'Matches Played',
        value: '138',
        color: 'text-blue-600',
        bg: 'from-blue-50 to-blue-100',
        iconColor: 'from-blue-400 to-blue-600',
    },
    {
        icon: Users,
        label: 'Win Rate',
        value: '67%',
        color: 'text-violet-600',
        bg: 'from-violet-50 to-violet-100',
        iconColor: 'from-violet-400 to-violet-600',
    },
    {
        icon: Handshake,
        label: 'Team Collab Score',
        value: '8.4/10',
        color: 'text-emerald-600',
        bg: 'from-emerald-50 to-emerald-100',
        iconColor: 'from-emerald-400 to-emerald-600',
    },
];

export default function MultiplayerInsights() {
    return (
        <motion.div
            className="bg-white rounded-3xl p-6 shadow-sm border border-blue-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Multiplayer Insights</h2>
                <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full">🎮 Online</span>
            </div>

            <div className="space-y-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br ${stat.bg}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.12 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.iconColor} flex items-center justify-center shadow-sm shrink-0`}>
                                <Icon size={18} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                                <p className={`text-xl font-bold ${stat.color} mt-0.5`}>{stat.value}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Win Rate visual */}
            <div className="mt-5 pt-5 border-t border-slate-100">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium">Win/Loss Ratio</span>
                    <span className="font-bold text-violet-600">67% wins</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden flex gap-0.5">
                    <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #7c3aed, #8b5cf6)' }}
                        initial={{ width: 0 }}
                        animate={{ width: '67%' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                    <motion.div
                        className="h-full rounded-full"
                        style={{ background: '#e2e8f0' }}
                        initial={{ width: 0 }}
                        animate={{ width: '33%' }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                </div>
                <div className="flex justify-between text-xs mt-1.5 text-slate-400">
                    <span>Wins</span>
                    <span>Losses</span>
                </div>
            </div>
        </motion.div>
    );
}
