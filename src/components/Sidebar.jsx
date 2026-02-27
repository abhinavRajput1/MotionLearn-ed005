import { motion } from 'framer-motion';
import {
    LayoutDashboard, BarChart2, Shield, Trophy, Users, Settings, Bell, LogOut,
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BarChart2, label: 'Analytics', active: false },
    { icon: Trophy, label: 'Achievements', active: false },
    { icon: Users, label: 'Multiplayer', active: false },
    { icon: Shield, label: 'Controls', active: false },
    { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-white border-r border-blue-50 shadow-sm fixed left-0 top-0 z-20">
            {/* Logo */}
            <div className="flex items-center gap-3 px-6 py-6 border-b border-blue-50">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #1e40af)' }}>
                    <span className="text-white text-lg font-bold">S</span>
                </div>
                <div>
                    <p className="text-sm font-bold text-slate-800 leading-none">StemQuest</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Parent Portal</p>
                </div>
            </div>

            {/* Child Info */}
            <div className="px-5 py-4 border-b border-blue-50">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        AJ
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-700">Alex Johnson</p>
                        <p className="text-[10px] text-slate-400 font-medium">Age 10 · Grade 5</p>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <motion.button
                            key={item.label}
                            className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-semibold transition-all
                ${item.active
                                    ? 'text-white shadow-md'
                                    : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'}`}
                            style={item.active ? { background: 'linear-gradient(135deg, #3b82f6, #1e40af)' } : {}}
                            whileHover={{ x: item.active ? 0 : 3 }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <Icon size={17} />
                            {item.label}
                        </motion.button>
                    );
                })}
            </nav>

            {/* Bottom */}
            <div className="px-4 pb-6 space-y-2">
                <motion.button
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-sm font-semibold text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all"
                    whileHover={{ x: 3 }}
                >
                    <LogOut size={17} />
                    Sign Out
                </motion.button>
            </div>
        </aside>
    );
}
