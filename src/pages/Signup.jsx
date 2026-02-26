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
    {
      id: "both",
      title: "Both",
      desc: "I want to sponsor opportunities and create my own",
      icon: Users,
    },
  ];

  const toggleRole = (roleId) => {
    setSelectedRoles((prev) =>
      prev.includes(roleId)
        ? prev.filter((id) => id !== roleId)
        : [...prev, roleId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const isStep2Valid =
    formData.username &&
    formData.email &&
    formData.phone &&
    formData.password &&
    selectedRoles.length > 0;

  const handleSignup = () => {
    if (!isStep2Valid) return;
    signup({
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      roles: selectedRoles,
    });
    navigate("/");
  };

  return (
    <div className="relative min-h-screen bg-cream flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Warm Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-peach/40 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        {/* Card */}
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-peach shadow-soft overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-peach/50 bg-brand-gradient">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center text-coffee font-bold">
                S
              </div>
              <h1 className="text-3xl font-bold text-coffee">
                Get Started
              </h1>
            </div>
            <p className="text-coffee/80">
              {step === 1
                ? "Select your role to continue"
                : "Complete your profile"}
            </p>
          </div>

          {/* Progress */}
          <div className="px-8 pt-6">
            <div className="flex gap-2">
              <motion.div
                animate={{ width: step === 1 ? "50%" : "100%" }}
                className="h-1 bg-orange rounded-full"
              />
              <div className="flex-1 h-1 bg-peach rounded-full" />
            </div>
            <p className="mt-4 text-sm text-muted">
              Step {step} of 2
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-coffee mb-2">
                    What are you?
                  </h2>
                  <p className="text-muted mb-8">
                    Select at least one role
                  </p>

                  <div className="space-y-4 mb-8">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      const active = selectedRoles.includes(role.id);

                      return (
                        <motion.button
                          key={role.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleRole(role.id)}
                          className={`
                            w-full p-4 rounded-xl border-2 text-left transition
                            ${
                              active
                                ? "border-orange bg-orange/20"
                                : "border-peach bg-white/60 hover:border-orange/60"
                            }
                          `}
                        >
                          <div className="flex justify-between">
                            <div className="flex gap-3">
                              <div
                                className={`p-2 rounded-lg ${
                                  active ? "bg-orange" : "bg-peach"
                                }`}
                              >
                                <Icon className="text-coffee" size={22} />
                              </div>
                              <div>
                                <h3 className="font-semibold text-coffee">
                                  {role.title}
                                </h3>
                                <p className="text-sm text-muted">
                                  {role.desc}
                                </p>
                              </div>
                            </div>
                            {active && (
                              <Check className="text-orange" size={22} />
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={selectedRoles.length === 0}
                    onClick={() => setStep(2)}
                    className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 ${
                      selectedRoles.length === 0
                        ? "opacity-50 cursor-not-allowed bg-gray-400"
                        : "bg-brand-gradient text-coffee shadow-soft hover:shadow-glow"
                    }`}
                  >
                    Next <ArrowRight size={18} />
                  </motion.button>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-coffee mb-2">
                    Create Your Account
                  </h2>
                  <p className="text-muted mb-8">
                    Fill in your details
                  </p>

                  <div className="space-y-4 mb-8">
                    {[
                      { name: "username", icon: User, placeholder: "Username" },
                      { name: "email", icon: Mail, placeholder: "Email" },
                      { name: "phone", icon: Phone, placeholder: "Phone" },
                      { name: "password", icon: Lock, placeholder: "Password", type: "password" },
                    ].map((f) => {
                      const Icon = f.icon;
                      return (
                        <div key={f.name} className="relative">
                          <Icon className="absolute left-3 top-3.5 text-muted" size={18} />
                          <input
                            type={f.type || "text"}
                            name={f.name}
                            value={formData[f.name]}
                            onChange={handleInputChange}
                            placeholder={f.placeholder}
                            className="
                              w-full pl-10 pr-4 py-3 rounded-xl
                              bg-white/60 border border-peach
                              text-coffee placeholder-muted
                              focus:outline-none focus:border-orange
                              transition
                            "
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 rounded-xl border border-peach text-coffee hover:bg-peach/40"
                    >
                      Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!isStep2Valid}
                      onClick={handleSignup}
                      className={`flex-1 py-3 rounded-xl font-semibold ${
                        isStep2Valid
                          ? "bg-brand-gradient text-coffee shadow-soft"
                          : "opacity-50 cursor-not-allowed bg-gray-400"
                      }`}
                    >
                      Create Account
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-muted text-sm mt-6">
          By signing up, you agree to our{" "}
          <span className="text-orange font-semibold">Terms</span> &{" "}
          <span className="text-orange font-semibold">Privacy Policy</span>
        </p>
      </motion.div>
    </div>
  );
}