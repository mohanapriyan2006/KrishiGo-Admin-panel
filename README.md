# KrishiGo Admin Panel

A clean and modern admin panel for managing the KrishiGo agricultural education platform. Built with React, Vite, and following KrishiGo's brand design.

## 🌱 Features

### Authentication
- Secure login system with form validation
- Protected routes ensuring authenticated access
- Demo credentials: `admin@krishigo.com` / `admin123`

### Dashboard
- Overview statistics for courses, quizzes, rewards, challenges
- Real-time user metrics and growth tracking
- Recent activities feed

### CRUD Management
- **Courses**: Create, update, delete courses with difficulty levels
- **Quizzes**: Manage quizzes with customizable questions and difficulty
- **Rewards**: Manage badges, certificates, and point-based rewards
- **Challenges**: Create achievements, streaks, and competitions
- **Leaderboard**: View and manage user rankings and achievements

### Design
- KrishiGo color theme (#78BB1B primary green, #314C1C dark green)
- Responsive web design
- Clean, intuitive interface
- Modal-based create/edit operations
- Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Login Credentials
- Email: `admin@krishigo.com`
- Password: `admin123`

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.jsx           # Main layout with sidebar
│   └── ProtectedRoute.jsx   # Authentication wrapper
├── pages/
│   ├── Login.jsx            # Login page
│   ├── Dashboard.jsx        # Dashboard overview
│   ├── Courses.jsx          # Courses CRUD
│   ├── Quizzes.jsx          # Quizzes CRUD
│   ├── Rewards.jsx          # Rewards CRUD
│   ├── Challenges.jsx       # Challenges CRUD
│   └── Leaderboard.jsx      # Leaderboard management
├── App.jsx                  # Main app with routing
├── App.css                  # Component styles
├── index.css                # Global styles and theme
└── main.jsx                 # App entry point
```

## 🎨 Color Theme

Following KrishiGo's brand colors:
- Primary Green: `#78BB1B`
- Dark Green: `#314C1C`
- Light Green: `#9BD748`
- Background: `#F8FAF5`

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library
- **Custom CSS** - Styled with KrishiGo theme variables

## 📝 Features Detail

### Courses Management
- Add new courses with title, description, duration
- Set difficulty level (Beginner, Intermediate, Advanced)
- Update course status (Active, Draft, Archived)
- Edit and delete existing courses

### Quizzes Management
- Create quizzes linked to courses
- Define number of questions
- Set difficulty levels (Easy, Medium, Hard)
- Manage quiz status

### Rewards Management
- Create various reward types (Badge, Certificate, Trophy, Points)
- Assign point values
- Add descriptions and requirements
- Manage reward availability

### Challenges Management
- Create different challenge types (Achievement, Streak, Competition, Quest)
- Set reward points
- Define duration (time-based or ongoing)
- Track challenge status

### Leaderboard
- View top performers with medals
- Display complete user rankings
- Show user statistics (points, courses completed, badges earned)
- Track platform-wide metrics

## 🔒 Security

- Client-side authentication with localStorage
- Protected routes preventing unauthorized access
- Form validation on all inputs

**Note**: This is a frontend-only demo. In production, implement proper backend authentication, authorization, and API integration.

## 📄 License

This project is part of the KrishiGo platform.

## 🤝 Contributing

For contributions to the KrishiGo Admin Panel, please follow the standard Git workflow:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with 💚 for KrishiGo - Empowering farmers through education
