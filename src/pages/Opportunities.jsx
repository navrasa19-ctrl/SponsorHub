import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OpportunityCard from "../components/OpportunityCard";
import DetailsModal from "../components/DetailsModal";
import { opportunitiesData, categoriesData } from "../context/dummyData";
import { Search } from "lucide-react";

export default function Opportunities() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [budgetRange, setBudgetRange] = useState("all");

  /* ==============================
     READ FILTERS FROM URL (ON LOAD)
  =============================== */
  useEffect(() => {
    const params = new URLSearchParams(location.search);

    setSelectedCategory(params.get("category") || "All");
    setBudgetRange(params.get("budget") || "all");
    setSearchQuery(params.get("search") || "");
  }, [location.search]);

  /* ==============================
     UPDATE URL WHEN FILTER CHANGES
  =============================== */
  /* ==============================
   UPDATE URL (WITHOUT LOOP)
============================== */
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory !== "All")
      params.set("category", selectedCategory);

    if (budgetRange !== "all")
      params.set("budget", budgetRange);

    if (searchQuery.trim())
      params.set("search", searchQuery.trim());

    const newSearch = params.toString();
    const currentSearch = location.search.replace("?", "");

    if (newSearch !== currentSearch) {
      navigate(
        {
          pathname: "/opportunity",
          search: newSearch,
        },
        { replace: true }
      );
    }

  }, [selectedCategory, budgetRange, searchQuery]);
  /* ==============================
     BUDGET STRING → NUMBER
  =============================== */
  const getMinBudget = (budgetString) => {
    if (!budgetString) return 0;

    const numbers = budgetString.replace(/,/g, "").match(/\d+/);
    return numbers ? parseInt(numbers[0]) : 0;
  };

  /* ==============================
     FILTER LOGIC
  =============================== */
  const filteredOpportunities = useMemo(() => {
    return opportunitiesData.filter((opp) => {
      const searchLower = searchQuery.toLowerCase();

      const matchesSearch =
        opp.title.toLowerCase().includes(searchLower) ||
        opp.description.toLowerCase().includes(searchLower);

      const matchesCategory =
        selectedCategory === "All" ||
        opp.category === selectedCategory;

      const minBudget = getMinBudget(opp.budget);

      let matchesBudget = true;

      if (budgetRange === "under30")
        matchesBudget = minBudget < 30000;

      if (budgetRange === "30to75")
        matchesBudget = minBudget >= 30000 && minBudget <= 75000;

      if (budgetRange === "above75")
        matchesBudget = minBudget > 75000;

      return matchesSearch && matchesCategory && matchesBudget;
    });
  }, [searchQuery, selectedCategory, budgetRange]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setBudgetRange("all");
  };

  const handleApply = () => {
    setSelectedOpportunity(null);
    alert("Application submitted successfully!");
  };

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-16 px-4 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Find Your Perfect <span className="text-purple-400">Sponsorship</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore curated sponsorship opportunities tailored for your brand.
        </p>
      </motion.div>

      {/* FILTERS */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">

            {/* SEARCH */}
            <div className="relative flex-1 w-full">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
              />
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-900/70 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
              />
            </div>

            {/* CATEGORY */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full lg:w-56 py-3 px-4 rounded-xl bg-slate-900 border border-purple-500/30 text-white focus:ring-2 focus:ring-purple-500/40"
            >
              <option value="All">All Categories</option>
              {categoriesData.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* BUDGET */}
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full lg:w-56 py-3 px-4 rounded-xl bg-slate-900 border border-purple-500/30 text-white focus:ring-2 focus:ring-purple-500/40"
            >
              <option value="all">All Budgets</option>
              <option value="under30">Under $30K</option>
              <option value="30to75">$30K - $75K</option>
              <option value="above75">Above $75K</option>
            </select>

            {/* RESET */}
            <button
              onClick={handleReset}
              className="w-full lg:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:opacity-90 transition-all"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          {filteredOpportunities.length > 0 ? (
            <>
              <p className="text-gray-400 mb-6">
                Showing {filteredOpportunities.length} opportunities
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredOpportunities.map((opportunity) => (
                  <OpportunityCard
                    key={opportunity.id}
                    opportunity={opportunity}
                    onViewDetails={setSelectedOpportunity}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <Search size={60} className="mx-auto text-gray-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                No opportunities found
              </h3>
              <p className="text-gray-400">
                Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* MODAL */}
      <DetailsModal
        opportunity={selectedOpportunity}
        isOpen={!!selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onApply={handleApply}
      />
    </div>
  );
}