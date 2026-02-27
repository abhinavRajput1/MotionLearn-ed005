import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const data = [
    { day: 'Mon', minutes: 45 },
    { day: 'Tue', minutes: 80 },
    { day: 'Wed', minutes: 30 },
    { day: 'Thu', minutes: 95 },
    { day: 'Fri', minutes: 60 },
    { day: 'Sat', minutes: 110 },
    { day: 'Sun', minutes: 75 },
];

const CustomBar = (props) => {
    const { x, y, width, height } = props;
    return (
        <g>
            <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
            </defs>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={8}
                ry={8}
                fill="url(#barGrad)"
            />
        </g>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-800 text-white text-xs rounded-xl px-3 py-2 shadow-lg">
                <p className="font-bold">{label}</p>
                <p className="text-blue-300">{payload[0].value} mins</p>
            </div>
        );
    }
    return null;
};

export default function ActivityTimeline() {
    const total = data.reduce((sum, d) => sum + d.minutes, 0);
    const avg = Math.round(total / data.length);

    return (
        <motion.div
            className="bg-white rounded-3xl p-6 shadow-sm border border-blue-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-slate-800">Weekly Activity</h2>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="font-semibold text-blue-600">{total} mins</span> total
                </div>
            </div>
            <p className="text-xs text-slate-400 mb-5">Avg: <span className="font-semibold text-slate-500">{avg} min/day</span></p>

            <ResponsiveContainer width="100%" height={160}>
                <BarChart data={data} barSize={28} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 600 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#eff6ff', radius: 8 }} />
                    <Bar dataKey="minutes" shape={<CustomBar />} />
                </BarChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
