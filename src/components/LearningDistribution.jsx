import { motion } from 'framer-motion';

const subjects = [
    { name: 'Coding', practice: 35, challenge: 65, icon: '💻' },
    { name: 'Math', practice: 50, challenge: 50, icon: '🔢' },
    { name: 'Physics', practice: 40, challenge: 60, icon: '⚛️' },
    { name: 'Logic Puzzles', practice: 30, challenge: 70, icon: '🧩' },
];

export default function LearningDistribution() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-50">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Learning Distribution</h2>
                <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full">This Week</span>
            </div>

            <div className="space-y-5">
                {subjects.map((subject, i) => (
                    <motion.div
                        key={subject.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                                <span>{subject.icon}</span> {subject.name}
                            </span>
                            <span className="text-xs text-slate-400">{subject.practice}% / {subject.challenge}%</span>
                        </div>
                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                            <motion.div
                                className="h-full rounded-l-full"
                                style={{ background: 'linear-gradient(90deg, #93c5fd, #60a5fa)' }}
                                initial={{ width: 0 }}
                                animate={{ width: `${subject.practice}%` }}
                                transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                            />
                            <motion.div
                                className="h-full rounded-r-full"
                                style={{ background: 'linear-gradient(90deg, #2563eb, #1e40af)' }}
                                initial={{ width: 0 }}
                                animate={{ width: `${subject.challenge}%` }}
                                transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(90deg, #2563eb, #1e40af)' }} />
                    <span className="text-xs text-slate-500 font-medium">Challenge Mode</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(90deg, #93c5fd, #60a5fa)' }} />
                    <span className="text-xs text-slate-500 font-medium">Practice Mode</span>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                <motion.div
                    className="rounded-2xl p-4 text-center"
                    style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}
                    whileHover={{ scale: 1.02 }}
                >
                    <p className="text-2xl font-bold text-blue-400">40%</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Practice Mode</p>
                </motion.div>
                <motion.div
                    className="rounded-2xl p-4 text-center"
                    style={{ background: 'linear-gradient(135deg, #eff6ff, #bfdbfe)' }}
                    whileHover={{ scale: 1.02 }}
                >
                    <p className="text-2xl font-bold text-blue-700">60%</p>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Challenge Mode</p>
                </motion.div>
            </div>
        </div>
    );
}
