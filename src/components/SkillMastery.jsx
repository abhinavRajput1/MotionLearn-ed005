import { motion } from 'framer-motion';

const skills = [
    { name: 'Problem Solving', value: 78, color: '#3b82f6', track: '#dbeafe' },
    { name: 'Logical Thinking', value: 85, color: '#8b5cf6', track: '#ede9fe' },
    { name: 'Speed', value: 62, color: '#f59e0b', track: '#fef3c7' },
    { name: 'Accuracy', value: 91, color: '#10b981', track: '#d1fae5' },
];

function CircularProgress({ value, color, track, name, delay }) {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="relative w-24 h-24">
                <svg width="96" height="96" viewBox="0 0 96 96">
                    {/* Track */}
                    <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        fill="none"
                        stroke={track}
                        strokeWidth="8"
                    />
                    {/* Progress */}
                    <motion.circle
                        cx="48"
                        cy="48"
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
                        style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                    />
                </svg>
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                        className="text-lg font-bold"
                        style={{ color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: delay + 0.5 }}
                    >
                        {value}%
                    </motion.span>
                </div>
            </div>
            <p className="text-xs font-semibold text-slate-600 text-center">{name}</p>
        </motion.div>
    );
}

export default function SkillMastery() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-50">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Skill Mastery</h2>
                <span className="text-xs bg-violet-50 text-violet-600 font-semibold px-3 py-1 rounded-full">Level 5</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {skills.map((skill, i) => (
                    <CircularProgress key={skill.name} {...skill} delay={i * 0.15} />
                ))}
            </div>

            {/* Average bar */}
            <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium">Overall Mastery</span>
                    <span className="font-bold text-blue-600">79%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}
                        initial={{ width: 0 }}
                        animate={{ width: '79%' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                </div>
            </div>
        </div>
    );
}
