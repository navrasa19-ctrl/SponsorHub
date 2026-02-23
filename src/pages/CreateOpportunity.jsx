import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Upload, Loader2, ArrowDown } from "lucide-react";
import { categoriesData } from "../context/dummyData";

export default function CreateOpportunity() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    budget: "",
    eventDate: "",
    location: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Opportunity created successfully!");
      setFormData({
        title: "",
        category: "",
        budget: "",
        eventDate: "",
        location: "",
        description: "",
      });
      setImagePreview(null);
    }, 2000);
  };

  const isFormValid =
    formData.title &&
    formData.category &&
    formData.budget &&
    formData.description;

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-32 pb-16 px-4 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Create Sponsorship <span className="text-purple-400">Opportunities</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Post your event and connect with sponsors worldwide
        </p>
      </motion.div>

      {/* Form Section */}
      <div className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white/5 backdrop-blur-2xl 
            border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)] 
            p-10"
          >
            {/* Image Upload */}
            <div className="mb-10">
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Cover Image
              </label>

              <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-purple-500/50 transition-all cursor-pointer bg-slate-900">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />

                <label htmlFor="image-upload" className="cursor-pointer block">
                  {imagePreview ? (
                    <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-56 object-cover rounded-xl"
                    />
                  ) : (
                    <>
                      <Upload className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">
                        Click to upload image
                      </p>
                      <p className="text-gray-500 text-sm">
                        PNG, JPG up to 5MB
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* LEFT */}
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Opportunity Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Annual Tech Summit 2026"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 
                    border border-white/10 text-white 
                    placeholder-gray-500 focus:outline-none 
                    focus:border-purple-500 focus:ring-2 
                    focus:ring-purple-500/30 transition-all"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Category *
                  </label>

                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full appearance-none px-4 py-3 pr-10 
                      rounded-xl bg-slate-900 border border-white/10 
                      text-white focus:outline-none 
                      focus:border-purple-500 focus:ring-2 
                      focus:ring-purple-500/30 transition-all"
                      required
                    >
                      <option value="" className="bg-slate-900 text-gray-400">
                        Select category
                      </option>

                      {categoriesData.map((cat) => (
                        <option
                          key={cat.id}
                          value={cat.name}
                          className="bg-slate-900 text-white"
                        >
                          {cat.name}
                        </option>
                      ))}
                    </select>

                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <ArrowDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="$10,000 - $50,000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 
                    border border-white/10 text-white 
                    placeholder-gray-500 focus:outline-none 
                    focus:border-purple-500 focus:ring-2 
                    focus:ring-purple-500/30 transition-all"
                    required
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, Country"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 
                    border border-white/10 text-white 
                    placeholder-gray-500 focus:outline-none 
                    focus:border-purple-500 focus:ring-2 
                    focus:ring-purple-500/30 transition-all"
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 
                    border border-white/10 text-white 
                    focus:outline-none focus:border-purple-500 
                    focus:ring-2 focus:ring-purple-500/30 transition-all"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={7}
                    placeholder="Describe your opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 
                    border border-white/10 text-white 
                    placeholder-gray-500 focus:outline-none 
                    focus:border-purple-500 focus:ring-2 
                    focus:ring-purple-500/30 transition-all resize-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={!isFormValid || loading}
              type="submit"
              className={`w-full py-4 rounded-xl font-semibold 
              flex items-center justify-center gap-2 
              transition-all duration-300 ${
                isFormValid && !loading
                  ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
                  : "opacity-50 cursor-not-allowed bg-gray-600"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Creating...
                </>
              ) : (
                <>Create Opportunity</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <Footer />
    </div>
  );
}