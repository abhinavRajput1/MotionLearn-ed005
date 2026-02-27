import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronDown, LogOut, User, Settings } from 'lucide-react';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                {/* Left: Title */}
                <div>
                    <motion.h1
                        className="text-xl font-bold text-slate-800 leading-none"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Parent Dashboard
                    </motion.h1>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">Monitoring Alex · Last updated just now</p>
                </div>


                {/* Right: Actions */}
                <div className="flex items-center gap-3">
                    {/* Notification */}
                    <motion.button
                        className="relative w-9 h-9 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Bell size={16} />
                        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
                    </motion.button>

                    {/* Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <motion.div
                            className="flex items-center gap-2 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl px-3 py-2 cursor-pointer select-none"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setDropdownOpen((prev) => !prev)}
                        >
                            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                P
                            </div>
                            <span className="text-sm font-semibold text-slate-700 hidden sm:block">Parent</span>
                            <motion.div
                                animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="hidden sm:block"
                            >
                                <ChevronDown size={13} className="text-slate-400" />
                            </motion.div>
                        </motion.div>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                    transition={{ duration: 0.18, ease: 'easeOut' }}
                                >
                                    {/* Profile Info */}
                                    <div className="px-4 py-3 border-b border-slate-100 bg-gradient-to-br from-blue-50 to-blue-100">
                                        <p className="text-sm font-bold text-slate-800">Parent Account</p>
                                        <p className="text-xs text-slate-400 mt-0.5">parent@stemquest.app</p>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="py-2">
                                        <button
                                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-slate-600 font-medium hover:bg-slate-50 transition-colors"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            <User size={15} className="text-slate-400" />
                                            My Profile
                                        </button>
                                        <button
                                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-slate-600 font-medium hover:bg-slate-50 transition-colors"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            <Settings size={15} className="text-slate-400" />
                                            Settings
                                        </button>

                                        <div className="mx-3 my-1.5 h-px bg-slate-100" />

                                        {/* Sign Out */}
                                        <button
                                            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"
                                            onClick={() => {
                                                setDropdownOpen(false);
                                                alert('Signed out!');
                                            }}
                                        >
                                            <LogOut size={15} />
                                            Sign Out
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    );
}
