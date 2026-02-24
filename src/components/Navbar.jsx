import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Activity,
    Bookmark,
    User,
    Menu,
    X,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ProfilePanel from "./ProfilePanel";

const navItems = [
    { label: "Explore", path: "/", icon: Home },
    { label: "Opportunity", path: "/opportunity", icon: Activity },
    { label: "Saved", path: "/saved", icon: Bookmark },
];

export default function TopNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profilePanelOpen, setProfilePanelOpen] = useState(false);
    const [showSignupPrompt, setShowSignupPrompt] = useState(false);
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (!isAuthenticated) {
            setShowSignupPrompt(true);
        } else {
            setProfilePanelOpen(true);
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="fixed top-4 left-0 right-0 z-40 flex justify-center font-body"
            >
                <div className="w-[92%] max-w-6xl rounded-2xl px-6 py-4 shadow-xl backdrop-blur-xl bg-white/10 border border-white/20 relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 pointer-events-none" />

                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="hidden sm:inline font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                                SponsorHub
                            </span>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex gap-8">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <NavLink key={item.path} to={item.path} className="relative">
                                        {({ isActive }) => (
                                            <motion.div
                                                whileHover={{ y: -2 }}
                                                className={`relative flex items-center gap-2 text-sm font-medium transition ${isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
                                                    }`}
                                            >
                                                <Icon className="w-4 h-4" />
                                                {item.label}
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="nav-underline"
                                                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                                                    />
                                                )}
                                            </motion.div>
                                        )}
                                    </NavLink>
                                );
                            })}
                        </nav>

                        {/* Desktop Right Side */}
                        <div className="hidden md:flex items-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleProfileClick}
                                className="p-2 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                            >
                                <User size={20} className="text-gray-300 hover:text-white" />
                            </motion.button>

                            {!isAuthenticated && (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate("/signup")}
                                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm hover:shadow-lg transition-shadow"
                                >
                                    Sign Up
                                </motion.button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-white"
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: -10 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="md:hidden mt-4 -mx-6 -mb-4 p-6 border-t border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                            >
                                <div className="flex flex-col gap-4">
                                    {navItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <NavLink
                                                key={item.path}
                                                to={item.path}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 text-base font-medium transition ${isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
                                                    }`
                                                }
                                            >
                                                <Icon className="w-5 h-5" />
                                                {item.label}
                                            </NavLink>
                                        );
                                    })}
                                    <button
                                        onClick={handleProfileClick}
                                        className="flex items-center gap-3 text-base font-medium text-gray-300 hover:text-white transition"
                                    >
                                        <User className="w-5 h-5" />
                                        Profile
                                    </button>
                                    {!isAuthenticated && (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                navigate("/signup");
                                                setMobileMenuOpen(false);
                                            }}
                                            className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold text-sm"
                                        >
                                            Sign Up
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.header>
            <ProfilePanel isOpen={profilePanelOpen} onClose={() => setProfilePanelOpen(false)} />
            <AnimatePresence>
                {showSignupPrompt && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSignupPrompt(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        />

                        {/* Centered Modal Wrapper */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="
                                    w-full max-w-sm
                                    bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                                    rounded-2xl border border-white/20 shadow-2xl
                                    p-6 sm:p-8
                                  "
                                >
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">
                                    Access Your Profile
                                </h3>

                                <p className="text-gray-400 mb-6 text-sm sm:text-base text-center">
                                    Please sign up or log in to access your profile and manage your sponsorships.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            navigate("/signup");
                                            setShowSignupPrompt(false);
                                        }}
                                        className="
                                            flex-1 py-2.5 rounded-lg
                                            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                                            text-white font-semibold
                                            hover:shadow-lg transition-shadow
                                          "
                                    >
                                        Sign Up
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowSignupPrompt(false)}
                                        className="
                                        flex-1 py-2.5 rounded-lg
                                        border border-white/20 text-white font-semibold
                                        hover:bg-white/10 transition-colors
                                      "
                                    >
                                        Close
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}