import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, CheckCircle, Edit2, LogOut, FileText, Bookmark, Settings, BarChart3, Save, Loader2, Mail, Lock, User } from 'lucide-react';
import { useState } from 'react';

export default function ProfilePanel({ isOpen, onClose }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    username: 'johndoe',
    bio: 'Passionate about tech and innovation'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsEditOpen(false);
    // Here you would typically make an API call to update user data
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Slide Panel */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-l border-white/20 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-slate-900/50 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white">{isEditOpen ? 'Edit Profile' : 'Profile'}</h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => isEditOpen ? setIsEditOpen(false) : onClose()}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} className="text-white" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isEditOpen ? (
                // Profile View
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                  {/* Profile Image & Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center pb-6 border-b border-white/10"
                  >
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                        JD
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{formData.fullName}</h3>
                    <p className="text-gray-400 text-sm mb-1 flex items-center justify-center gap-2"><Mail size={14} /> {formData.email}</p>
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2 mb-3"><Phone size={14} /> {formData.phone}</p>
                    <p className="text-gray-400 text-sm italic mb-4">"{formData.bio}"</p>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center gap-2 justify-center shadow-lg"
                    >
                      <CheckCircle size={14} /> Verified Creator
                    </motion.span>
                  </motion.div>

                  {/* Edit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditOpen(true)}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    <Edit2 size={18} /> Edit Profile
                  </motion.button>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Posts', value: '12' },
                      { label: 'Active', value: '8' },
                      { label: 'Applied', value: '24' },
                      { label: 'Success', value: '92%' }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 text-center hover:border-white/20 transition-all"
                      >
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-400 mt-1.5">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Links - Two Column */}
                  <div className="pt-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Navigation</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'My Posts', icon: BarChart3, link: '/myopportunities', color: 'from-blue-500 to-blue-600' },
                        { label: 'Applications', icon: FileText, link: '/applications', color: 'from-purple-500 to-purple-600' },
                        { label: 'Saved Items', icon: Bookmark, link: '/saved', color: 'from-pink-500 to-pink-600' },
                        { label: 'Settings', icon: Settings, link: '#', color: 'from-indigo-500 to-indigo-600' }
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <motion.a
                            key={i}
                            href={item.link}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-gradient-to-br ${item.color} text-white font-semibold hover:shadow-lg transition-all`}
                          >
                            <Icon size={20} />
                            <span className="text-xs text-center">{item.label}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recent Section */}
                  <div className="pt-2 border-t border-white/10 space-y-4">
                    {/* Recent Posts */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white text-sm">Recent Posts</h4>
                        <a href="/myopportunities" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                          View All →
                        </a>
                      </div>
                      <div className="space-y-2">
                        {[1, 2].map((i) => (
                          <motion.div
                            key={i}
                            whileHover={{ x: 3, backgroundColor: 'rgba(255,255,255,0.08)' }}
                            className="p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer transition-colors"
                          >
                            <p className="text-sm font-semibold text-white">Tech Summit 2026</p>
                            <p className="text-xs text-gray-400 mt-1">Posted 2 days ago</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Applications */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white text-sm">Recent Applications</h4>
                        <a href="/applications" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">
                          View All →
                        </a>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: 'Music Festival 2026', status: 'Under Review', color: 'yellow' },
                          { name: 'Tech Conference', status: 'Approved', color: 'green' }
                        ].map((app, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ x: 3, backgroundColor: 'rgba(255,255,255,0.08)' }}
                            className="p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-semibold text-white flex-1 truncate">{app.name}</p>
                              <span className={`text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap ${
                                app.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'
                              }`}>
                                {app.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Logout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-lg bg-red-600/20 border border-red-500/50 text-red-400 font-semibold hover:bg-red-600/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <LogOut size={18} /> Logout
                  </motion.button>
                </motion.div>
              ) : (
                // Edit Form
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <User size={16} /> Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <User size={16} /> Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="johndoe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Mail size={16} /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <Phone size={16} /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      <CheckCircle size={16} /> Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  {/* Save Button */}
                  <motion.button
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    onClick={handleSave}
                    disabled={isLoading}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:shadow-xl transition-shadow flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Saving...
                      </>
                    ) : (
                      <>
                        <Save size={18} /> Save Changes
                      </>
                    )}
                  </motion.button>

                  {/* Cancel Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditOpen(false)}
                    className="w-full py-2.5 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
