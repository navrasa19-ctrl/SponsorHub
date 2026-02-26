import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  CheckCircle,
  Edit2,
  LogOut,
  FileText,
  Bookmark,
  Settings,
  BarChart3,
  Save,
  Loader2,
  Mail,
  User,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePanel({ isOpen, onClose }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    username: "johndoe",
    bio: "Passionate about tech and innovation",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsEditOpen(false);
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
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          />

          {/* Slide Panel */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="
              fixed right-0 top-0 bottom-0 w-full max-w-md z-50 overflow-y-auto
              bg-white/70 backdrop-blur-xl
              border-l border-peach
              shadow-2xl
            "
          >
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-peach bg-cream/80 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-coffee">
                {isEditOpen ? "Edit Profile" : "Profile"}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  isEditOpen ? setIsEditOpen(false) : onClose()
                }
                className="p-2 rounded-lg hover:bg-peach/40 transition-colors"
              >
                <X size={24} className="text-coffee" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isEditOpen ? (
                /* PROFILE VIEW */
                <motion.div className="space-y-6">
                  {/* Avatar */}
                  <div className="text-center pb-6 border-b border-peach">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-brand-gradient p-1 shadow-soft">
                      <div className="w-full h-full rounded-full bg-cream flex items-center justify-center text-4xl font-bold text-coffee">
                        JD
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-coffee mb-1">
                      {formData.fullName}
                    </h3>

                    <p className="text-muted text-sm flex justify-center gap-2">
                      <Mail size={14} /> {formData.email}
                    </p>
                    <p className="text-muted text-sm flex justify-center gap-2 mb-3">
                      <Phone size={14} /> {formData.phone}
                    </p>

                    <p className="text-muted text-sm italic mb-4">
                      “{formData.bio}”
                    </p>

                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-gradient text-coffee shadow-soft">
                      <CheckCircle size={14} /> Verified Creator
                    </span>
                  </div>

                  {/* Edit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditOpen(true)}
                    className="w-full py-3 rounded-lg bg-brand-gradient text-coffee font-semibold shadow-soft hover:shadow-glow flex items-center justify-center gap-2"
                  >
                    <Edit2 size={18} /> Edit Profile
                  </motion.button>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Posts", value: "12" },
                      { label: "Active", value: "8" },
                      { label: "Applied", value: "24" },
                      { label: "Success", value: "92%" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-white/70 border border-peach text-center hover:border-orange transition"
                      >
                        <p className="text-2xl font-bold text-orange">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted mt-1.5">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted uppercase mb-3">
                      Quick Navigation
                    </p>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "My Posts", icon: BarChart3, path: "/myopportunities" },
                        { label: "Applications", icon: FileText, path: "/applications" },
                        { label: "Saved Items", icon: Bookmark, path: "/saved" },
                      ].map((item, i) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={i}
                            onClick={() => navigate(item.path)}
                            className="
                            cursor-pointer
                            flex flex-col items-center gap-2 p-3 rounded-lg
                            bg-brand-gradient text-coffee font-semibold
                            shadow-soft hover:shadow-glow
                            transition transform hover:scale-105
                          "
                          >
                            <Icon size={20} />
                            <span className="text-xs">{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      onClose?.();
                      window.location.href = "/signup";
                    }}
                    className="
                    w-full py-3 rounded-lg
                    bg-red-600/20 border border-red-500/50
                    text-red-500 font-semibold
                    flex items-center justify-center gap-2
                    hover:bg-red-600/30
                    transition
                    "
                  >
                    <LogOut size={18} /> Logout
                  </motion.button>
                </motion.div>
              ) : (
                /* EDIT FORM */
                <motion.div className="space-y-4">
                  {[
                    { label: "Full Name", name: "fullName", icon: User },
                    { label: "Username", name: "username", icon: User },
                    { label: "Email", name: "email", icon: Mail },
                    { label: "Phone", name: "phone", icon: Phone },
                  ].map((field, i) => {
                    const Icon = field.icon;
                    return (
                      <div key={i}>
                        <label className="block text-sm font-semibold text-coffee mb-2 flex items-center gap-2">
                          <Icon size={16} /> {field.label}
                        </label>
                        <input
                          type="text"
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          className="
                            w-full px-4 py-2.5 rounded-lg
                            bg-white/70 border border-peach
                            text-coffee placeholder-muted
                            focus:outline-none focus:border-orange
                          "
                        />
                      </div>
                    );
                  })}

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-semibold text-coffee mb-2">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="3"
                      className="
                        w-full px-4 py-2.5 rounded-lg
                        bg-white/70 border border-peach
                        text-coffee resize-none
                        focus:outline-none focus:border-orange
                      "
                    />
                  </div>

                  {/* Save */}
                  <motion.button
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    onClick={handleSave}
                    disabled={isLoading}
                    className="w-full py-3 rounded-lg bg-brand-gradient text-coffee font-semibold shadow-soft flex items-center justify-center gap-2"
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

                  {/* Cancel */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEditOpen(false)}
                    className="w-full py-2.5 rounded-lg border border-peach text-coffee hover:bg-peach/40"
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