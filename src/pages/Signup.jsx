import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Building2,
  Sparkles,
  Users,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { signup } = useAuth();

  const roles = [
    {
      id: "creator",
      title: "Creator",
      desc: "I organize events, create content, or run projects",
      icon: Sparkles,
    },
    {
      id: "brand",
      title: "Brand",
      desc: "I'm looking for sponsorship opportunities",
      icon: Building2,
    },
  ];

  const toggleRole = (roleId) => {
    if (selectedRoles.includes(roleId)) {
      setSelectedRoles(selectedRoles.filter((id) => id !== roleId));
    } else {
      setSelectedRoles([...selectedRoles, roleId]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isStep2Valid =
    formData.username &&
    formData.email &&
    formData.phone &&
    formData.password &&
    selectedRoles.length > 0;

  const handleSignup = () => {
    if (isStep2Valid) {
      signup({
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        roles: selectedRoles,
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        {/* Form Container */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-white/10 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h1 className="text-3xl font-bold text-white">Get Started</h1>
            </div>
            <p className="text-gray-300">
              {step === 1
                ? "Select your role to continue"
                : "Complete your profile"}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="px-8 pt-6">
            <div className="flex gap-2">
              <motion.div
                initial={{ width: "33%" }}
                animate={{ width: step >= 1 ? "50%" : "33%" }}
                className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
              />
              <div
                className={`h-1 flex-1 rounded-full ${
                  step >= 2 ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-white/10"
                }`}
              />
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Step {step} of 2
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Role Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2">
                    What are you?
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Select at least one role to continue
                  </p>

                  <div className="space-y-4 mb-8">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      const isSelected = selectedRoles.includes(role.id);
                      return (
                        <motion.button
                          key={role.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleRole(role.id)}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                            isSelected
                              ? "border-purple-500 bg-purple-600/20"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <div className={`p-2 rounded-lg ${
                                isSelected
                                  ? "bg-purple-600"
                                  : "bg-white/10"
                              }`}>
                                <Icon className="text-white" size={24} />
                              </div>
                              <div>
                                <h3 className="font-semibold text-white">
                                  {role.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                  {role.desc}
                                </p>
                              </div>
                            </div>
                            {isSelected && (
                              <Check className="text-purple-400" size={24} />
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStep(2)}
                    disabled={selectedRoles.length === 0}
                    className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-opacity ${
                      selectedRoles.length === 0
                        ? "opacity-50 cursor-not-allowed bg-gray-600"
                        : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-lg"
                    }`}
                  >
                    Next <ArrowRight size={18} />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Form */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Create Your Account
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fill in your details to get started
                  </p>

                  <div className="space-y-4 mb-8">
                    {/* Username */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Username
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                        <input
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          placeholder="Your username"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Selected Roles */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Roles
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {selectedRoles.map((roleId) => {
                          const role = roles.find((r) => r.id === roleId);
                          return (
                            <span
                              key={roleId}
                              className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-purple-500/50 text-purple-300 text-sm font-semibold"
                            >
                              {role?.title}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSignup}
                      disabled={!isStep2Valid}
                      className={`flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-opacity ${
                        isStep2Valid
                          ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-lg"
                          : "opacity-50 cursor-not-allowed bg-gray-600"
                      }`}
                    >
                      Create Account <ArrowRight size={18} />
                    </motion.button>
                  </div>

                  <p className="text-center text-gray-400 text-sm mt-6">
                    Already have an account?{" "}
                    <a href="/" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Sign in
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          By signing up, you agree to our{" "}
          <a href="#" className="text-purple-400 hover:text-purple-300">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-400 hover:text-purple-300">
            Privacy Policy
          </a>
        </p>
      </motion.div>
    </div>
  );
}