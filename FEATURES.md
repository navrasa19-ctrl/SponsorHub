# SponsorHub - Modern Sponsorship Platform Frontend

A premium, fully responsive sponsorship platform connecting event creators with brands. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

SponsorHub is a modern SaaS-style platform that enables:
- **Event Creators** to post sponsorship opportunities
- **Brands** to discover and apply for sponsorship opportunities
- Seamless matching between events and sponsors

## ✨ Key Features Implemented

### 🧭 Navigation & Layout
- **Modern Sticky Navbar** with glassmorphism design
- Smooth brand logo with gradient text
- Mobile-responsive hamburger menu
- Quick access buttons for all sections

### 🏠 Home Page
- **Hero Section** with animated gradient background
- Large gradient heading with CTA button
- **Statistics Section** showing platform metrics
- **Categories Section** with 6 event categories (Tech, College, Music, Startup, NGO, Sports)
- **Featured Opportunities** displaying top sponsorship cards
- **CTA Section** encouraging opportunity creation
- **Footer** with social links and navigation

### 📂 Opportunities Page
- **Advanced Search & Filter System**
  - Real-time search by title/description
  - Category filtering
  - Budget range filtering
- **Opportunity Cards** with:
  - Event images
  - Budget information
  - Category badges
  - Save/Bookmark functionality
  - View Details button
- **Details Modal** showing full opportunity information
- **Responsive Grid Layout** (1, 2, or 3 columns)

### 💾 Saved Page
- Display all saved opportunities
- Beautiful empty state with illustration
- Quick access to favorite opportunities
- Same card design as opportunities page

### 👤 Profile Management
- **Right Slide Panel** with smooth animation
- User profile information (avatar, email, phone)
- Account statistics (posts, applications, success rate)
- My Opportunities section with ability to view all
- Applied Sponsorships with status badges
- Logout functionality
- Authentication required - shows signup prompt if not logged in

### 📝 Signup Page
- **2-Step Registration Form**
  - Step 1: Select Role (Creator, Brand, or Both)
  - Step 2: Fill in profile details
    - Username
    - Email
    - Phone
    - Password
- Form validation with visual feedback
- Progress bar showing form completion
- Beautiful role selection cards with icons
- Animated transitions between steps

### 📋 Create Opportunity Page
- Form to create new sponsorship opportunities
- Fields for:
  - Title
  - Category selection
  - Budget range
  - Event date
  - Location
  - Cover image upload with preview
  - Full description
- Form validation
- Loading state during submission

## 🎨 Design Features

### Glassmorphism
- Semi-transparent backgrounds with blur effects
- Modern card designs with `bg-white/10 backdrop-blur-xl border border-white/20`
- Soft shadows and hover effects

### Color Scheme
- **Primary Gradient**: `from-indigo-600 via-purple-600 to-pink-600`
- **Background**: `from-slate-900 via-slate-800 to-slate-900`
- **Accent**: Purple/Pink gradient tones

### Animations & Interactions
- **Page Transitions**: Smooth fade and slide animations
- **Card Hover Effects**: Lift animations with glow effects
- **Button Animations**: Scale on hover, smooth transitions
- **Modal Animations**: Scale and fade animations
- **Profile Panel**: Slide in from right with backdrop blur
- **Gradient Animations**: Animated gradient backgrounds

### Typography
- **Heading Font**: Poppins (bold, modern)
- **Body Font**: Inter (clean, readable)
- **Responsive Text Sizes**: Scales from mobile to desktop

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.1.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 10.18.0
- **Routing**: React Router DOM 6.30.1
- **Icons**: Lucide React 0.324.0
- **State Management**: React Context API

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx                 # Main navigation with profile panel
│   ├── HeroSection.jsx            # Home page hero
│   ├── CategoriesSection.jsx      # Category cards grid
│   ├── FeaturedOpportunities.jsx  # Featured opportunities showcase
│   ├── CTASection.jsx             # Call-to-action section
│   ├── Footer.jsx                 # Footer with links
│   ├── SponsorPopup.jsx           # Welcome popup modal
│   ├── OpportunityCard.jsx        # Reusable opportunity card component
│   ├── DetailsModal.jsx           # Full opportunity details modal
│   ├── Modal.jsx                  # Generic modal component
│   ├── ProfilePanel.jsx           # Right-side profile panel
│   └── ...existing components
├── pages/
│   ├── Home.jsx                   # Home page with all sections
│   ├── Opportunities.jsx          # Opportunities list with filters
│   ├── Saved.jsx                  # Saved opportunities page
│   ├── Profile.jsx                # Profile page (redirects to panel)
│   ├── Signup.jsx                 # 2-step sign up form
│   └── CreateOpportunity.jsx      # Create new opportunity form
├── context/
│   ├── AuthContext.jsx            # Global auth state management
│   └── dummyData.js               # Mock data for opportunities
├── App.jsx                        # Main app with routing
├── main.jsx                       # Application entry point
└── index.css                      # Global styles and animations
```

## 🎯 Key Components Breakdown

### AuthContext
- Manages user authentication state
- Signup/login/logout functionality
- Persists user data in localStorage
- Provides useAuth hook for components

### OpportunityCard
- Reusable card component for opportunities
- Shows image, title, budget, date
- Save button with heart icon
- View Details button opens modal
- Smooth hover animations

### DetailsModal
- Full opportunity details display
- Shows budget, location, applicants, views
- Benefits list with checkmarks
- Apply button with submission handling
- Close button with rotation animation

### ProfilePanel
- Right-side slide panel (50% width on desktop)
- User profile information
- Statistics grid (4 cards)
- My Opportunities preview
- Applied Sponsorships with status badges
- Logout button

## 🚀 Features & Interactions

### Search & Filtering
- Real-time search across all opportunities
- Category filter with multi-select
- Budget range filtering
- Instant results update

### Save Functionality
- Heart icon for saving opportunities
- Visual feedback (fill/unfill animation)
- Saved items persist across pages

### Authentication
- Simple auth context for user management
- Sign up with 2-step form
- Profile access restricted to authenticated users
- Signup prompt modal for non-authenticated users

### Responsive Design
- Mobile-first approach
- Hamburger menu on tablets and below
- Grid layouts that adapt to screen size
- Touch-friendly interactive elements

## 💻 Development Setup

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5175/`

### Build for Production
```bash
npm run build
```

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
- Modify gradient colors in components
- Change background gradient in main layout
- Update button and accent colors

### Animations
Adjust animation timings in `index.css`:
- Modify `animate-gradient` duration
- Change Framer Motion transition values
- Update hover effects

### Content
- Update dummy data in `src/context/dummyData.js`
- Modify category names and icons
- Customize opportunity card fields

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (tailwind `sm`)
- **Tablet**: 640px - 1024px (tailwind `md` to `lg`)
- **Desktop**: > 1024px (tailwind `lg`)

## ✅ Quality Features

- Clean, maintainable code structure
- Reusable components with proper separation
- Context API for state management
- Smooth animations and transitions
- Professional UI/UX patterns
- Accessibility considerations
- Mobile-first responsive design
- Ready for backend integration

## 🔄 Backend Integration Ready

The project is structured to easily connect with backend APIs:
- Auth endpoints for signup/login
- Opportunity CRUD operations
- Search and filter endpoints
- User profile endpoints
- Application submission endpoints

All dummy data can be replaced with API calls by updating the Context API and components.

## 📝 License

Built for modern sponsorship platform needs with premium SaaS styling.
