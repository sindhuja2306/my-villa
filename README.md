# My Villa - Premium Villa Showcase Website

A beautiful, modern, and fully functional villa showcase website built with React, Tailwind CSS, and React Router. Experience luxury villa rentals with stunning UI/UX and smooth animations.

## 🌟 Features

### ✨ Core Functionality
- **Home Page** - Hero section with beautiful background, featured villas showcase
- **Villa Details Page** - Comprehensive villa information with photo gallery
- **Direct Contact** - One-click calling and direction features
- **Responsive Design** - Perfectly optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Beautiful animations, smooth transitions, and intuitive navigation

### 🎯 Key Pages

#### Home Page
- **Hero Section** - Captivating background image with compelling CTA
- **Featured Villas** - Grid display of 6 premium villas with ratings and amenities
- **Statistics** - Showcase key metrics (50+ Villas, 10K+ Happy Guests, etc.)
- **Footer** - Complete contact information and navigation links

#### Villa Details Page
- **Image Gallery** - Full-width image gallery with navigation controls
- **Villa Information** - Name, location, ratings, and comprehensive description
- **Quick Stats** - Bedrooms, bathrooms, capacity
- **Amenities List** - All available amenities with check icons
- **Google Maps Integration** - Embedded location map
- **Booking Card** - Price, call now button, get directions CTA
- **Related Villas** - Suggestions for other villas
- **Safety Benefits** - Why choose us section

## 🛠️ Technology Stack

- **Frontend Framework**: React 18+
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Animations**: CSS Transitions & Keyframes
- **State Management**: React Hooks

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Install Required Packages (if not already installed)
```bash
npm install react react-dom
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install -D vite @vitejs/plugin-react
```

### Step 3: Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Step 4: Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
my-villa/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with logo
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── VillaCard.jsx       # Individual villa card component
│   │   ├── FeaturedVillas.jsx  # Villas grid section
│   │   ├── Footer.jsx          # Footer with contact info
│   │   └── Stats.jsx           # Statistics component
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   └── VillaDetails.jsx    # Villa detail page
│   ├── data/
│   │   └── villas.js           # Villa data and mock database
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # Custom styles
│   ├── index.css               # Tailwind CSS & global styles
│   └── main.jsx                # React entry point
├── index.html                  # HTML template
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Amber (#D97706, #F59E0B)
- **Secondary**: Gray (#1F2937, #6B7280)
- **Background**: White with subtle gradients

### Typography
- **Headlines**: Bold, large font sizes
- **Body**: Readable sans-serif fonts
- **Interactive Elements**: Clear, contrasting colors

### Animations
- Smooth page transitions
- Hover effects on cards and buttons
- Image carousel animations
- Fade-in animations on scroll
- Bounce animations for CTAs

## 📊 Data Structure

Each villa contains:
```javascript
{
  id: 1,
  name: "Villa Name",
  location: "City/Region",
  price: 12000,
  rating: 4.8,
  reviews: 24,
  images: ["url1", "url2", "url3"],
  amenities: ["WiFi", "Pool", "Parking", ...],
  contact: "+91-XXXXXXXXXX",
  description: "...",
  bedrooms: 4,
  bathrooms: 3,
  capacity: 10,
  mapLink: "Google Maps URL",
  highlights: ["Ocean View", "Pool", ...]
}
```

## 🚀 Usage

### Navigating the Website
1. **Home Page**: View all featured villas
2. **Click Villa Card**: See detailed information
3. **Call Now**: Directly dial the villa contact
4. **Get Directions**: Open Google Maps with villa location

### Customization

#### Change Villa Data
Edit `/src/data/villas.js` to add or modify villa information.

#### Update Colors
Modify `/tailwind.config.js` to change the color scheme.

#### Add New Villas
Add new villa objects to the `villas` array in `/src/data/villas.js`.

## ✅ Features Implemented

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Beautiful hero section with CTA
- ✅ Villa cards with image carousel
- ✅ Detailed villa pages
- ✅ Direct calling functionality
- ✅ Google Maps integration
- ✅ Smooth animations
- ✅ Contact information display
- ✅ Related villas suggestions
- ✅ SEO-friendly structure

## 🔮 Future Enhancements

- Online booking system
- Payment integration (Razorpay, Stripe)
- User reviews and ratings
- Admin dashboard
- WhatsApp direct booking button
- Email notifications
- Testimonials section
- Blog integration
- Availability calendar

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open-source and available under the MIT License.

## 👨‍💻 Developer Notes

- All villa images are from Unsplash (free to use)
- Contact numbers are placeholders - replace with actual numbers
- Email addresses are placeholders - update in Footer and contact sections
- Google Maps links use placeholder coordinates - update with real locations

## 🆘 Troubleshooting

### Vite Not Found
```bash
npm install -D vite
```

### Tailwind Not Working
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### React Router Issues
```bash
npm install react-router-dom
```

## 📞 Contact & Support

For questions or support, contact:
- **Email**: info@myvilla.com
- **Phone**: +91-9876543210
- **Website**: www.myvilla.com

---

**Built with ❤️ using React & Tailwind CSS**

Made for showcasing premium villas and creating unforgettable experiences! 🏡✨
