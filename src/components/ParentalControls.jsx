import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Zap, Shield, Moon } from 'lucide-react';

function Toggle({ enabled, onChange, label }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600 font-medium">{label}</span>
            <button
                onClick={() => onChange(!enabled)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none
          ${enabled ? 'bg-blue-500' : 'bg-slate-200'}`}
            >
                <motion.div
                    className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm"
                    animate={{ x: enabled ? 24 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </button>
        </div>
    );
}

function Slider({ value, onChange, min, max, label, unit, color }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-600 font-medium">{label}</span>
                <span className="text-sm font-bold" style={{ color }}>{value}{unit}</span>
            </div>
            <div className="relative h-3 bg-slate-100 rounded-full">
                <motion.div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{ background: color, width: `${((value - min) / (max - min)) * 100}%` }}
                    animate={{ width: `${((value - min) / (max - min)) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 300 }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer h-3"
                />
                {/* Thumb */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full shadow-md border-2 border-white"
                    style={{
                        left: `calc(${((value - min) / (max - min)) * 100}% - 10px)`,
                        background: color,
                    }}
                />
            </div>
        </div>
    );
}

export default function ParentalControls() {
    const [playtime, setPlaytime] = useState(60);
    const [difficulty, setDifficulty] = useState(3);
    const [multiplayer, setMultiplayer] = useState(true);
    const [nightMode, setNightMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    const diffLabels = ['', 'Beginner', 'Easy', 'Medium', 'Hard', 'Expert'];

    return (
        <motion.div
            className="bg-white rounded-3xl p-6 shadow-sm border border-blue-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-800">Parental Controls</h2>
                <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    <Shield size={12} />
                    <span className="text-xs font-bold">Protected</span>
                </div>
            </div>

            <div className="space-y-6">
                {/* Playtime Slider */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Clock size={16} className="text-blue-600" />
                        <span className="text-sm font-bold text-slate-700">Daily Playtime Limit</span>
                    </div>
                    <Slider
                        value={playtime}
                        onChange={setPlaytime}
                        min={15}
                        max={180}
                        label="Minutes allowed per day"
                        unit=" min"
                        color="#3b82f6"
                    />
                    <p className="text-xs text-blue-500 mt-2 font-medium">
                        = {Math.floor(playtime / 60)}h {playtime % 60}m per day
                    </p>
                </div>

                {/* Difficulty Slider */}
                <div className="p-4 bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Zap size={16} className="text-violet-600" />
                        <span className="text-sm font-bold text-slate-700">Difficulty Level</span>
                    </div>
                    <Slider
                        value={difficulty}
                        onChange={setDifficulty}
                        min={1}
                        max={5}
                        label="Current difficulty"
                        unit=""
                        color="#8b5cf6"
                    />
                    <p className="text-xs text-violet-500 mt-2 font-medium">
                        Mode: {diffLabels[difficulty]}
                    </p>
                </div>

                {/* Toggles */}
                <div className="space-y-4 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl">
                    <Toggle enabled={multiplayer} onChange={setMultiplayer} label="🎮 Enable Multiplayer" />
                    <div className="h-px bg-slate-200" />
                    <Toggle enabled={nightMode} onChange={setNightMode} label="🌙 Night Mode Restriction" />
                    <div className="h-px bg-slate-200" />
                    <Toggle enabled={notifications} onChange={setNotifications} label="🔔 Progress Notifications" />
                </div>

                {/* Save Button */}
                <motion.button
                    className="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-md"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #1e40af)' }}
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(59,130,246,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    Save Settings
                </motion.button>
            </div>
        </motion.div>
    );
}
