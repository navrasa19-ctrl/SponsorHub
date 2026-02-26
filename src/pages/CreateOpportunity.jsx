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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result);
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
    <div className="relative min-h-screen bg-cream overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-orange/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-peach/25 rounded-full blur-3xl" />
      </div>

      <Navbar />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pt-32 pb-16 px-4 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-coffee mb-4">
          Create Sponsorship{" "}
          <span className="text-transparent bg-clip-text bg-brand-gradient">
            Opportunities
          </span>
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Post your event and connect with sponsors worldwide
        </p>
      </motion.div>

      {/* Form */}
      <div className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="
              rounded-3xl p-10
              bg-white/70 backdrop-blur-xl
              border border-peach
              shadow-2xl
            "
          >
            {/* Image Upload */}
            <div className="mb-10">
              <label className="block text-sm font-semibold text-coffee mb-3">
                Cover Image
              </label>

              <div className="border-2 border-dashed border-peach rounded-xl p-8 text-center hover:border-orange transition cursor-pointer bg-cream">
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
                      <Upload className="w-10 h-10 text-orange mx-auto mb-3" />
                      <p className="text-coffee font-semibold">
                        Click to upload image
                      </p>
                      <p className="text-muted text-sm">
                        PNG, JPG up to 5MB
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* LEFT */}
              <div className="space-y-6">
                {[
                  { label: "Opportunity Title *", name: "title", placeholder: "Annual Tech Summit 2026" },
                  { label: "Budget Range *", name: "budget", placeholder: "$10,000 - $50,000" },
                  { label: "Location", name: "location", placeholder: "City, Country" },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-semibold text-coffee mb-2">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="
                        w-full px-4 py-3 rounded-xl
                        bg-white/70 border border-peach
                        text-coffee placeholder-muted
                        focus:outline-none focus:border-orange
                      "
                      required={field.label.includes("*")}
                    />
                  </div>
                ))}

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-coffee mb-2">
                    Category *
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="
                        w-full appearance-none px-4 py-3 pr-10
                        rounded-xl bg-white/70 border border-peach
                        text-coffee focus:outline-none focus:border-orange
                      "
                      required
                    >
                      <option value="">Select category</option>
                      {categoriesData.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <ArrowDown className="w-4 h-4 text-muted" />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-coffee mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="
                      w-full px-4 py-3 rounded-xl
                      bg-white/70 border border-peach
                      text-coffee focus:outline-none focus:border-orange
                    "
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-coffee mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={7}
                    placeholder="Describe your opportunity..."
                    className="
                      w-full px-4 py-3 rounded-xl resize-none
                      bg-white/70 border border-peach
                      text-coffee placeholder-muted
                      focus:outline-none focus:border-orange
                    "
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
              className={`
                w-full py-4 rounded-xl font-semibold
                flex items-center justify-center gap-2
                transition-all
                ${
                  isFormValid && !loading
                    ? "bg-brand-gradient text-coffee shadow-soft hover:shadow-glow"
                    : "opacity-50 cursor-not-allowed bg-muted text-white"
                }
              `}
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