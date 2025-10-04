import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  HelpCircle, 
  Trophy, 
  Target, 
  LogOut,
  Sprout,
  Award
} from 'lucide-react';
import logo from '../assets/logo2.png';

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-65 bg-primary-dark text-white p-6 flex flex-col fixed h-screen overflow-y-auto">
        <div className="mb-8 bg-green-100 bg-opacity-96 border-b border-white border-opacity-10 rounded-full">
          <img src={logo} className="w-45 h-auto ml-2.5" alt="KrishiGo Logo" />
        </div>
        <nav className="flex-1">
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <Link 
                to="/dashboard" 
                className={`flex items-center gap-3 px-4 py-3 text-white text-opacity-80 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                  isActive('/dashboard') ? 'bg-primary text-white' : ''
                }`}
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/courses" 
                className={`flex items-center gap-3 px-4 py-3 text-white text-opacity-80 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                  isActive('/courses') ? 'bg-primary text-white' : ''
                }`}
              >
                <BookOpen size={20} />
                Courses
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/quizzes" 
                className={`flex items-center gap-3 px-4 py-3 text-white text-opacity-80 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                  isActive('/quizzes') ? 'bg-primary text-white' : ''
                }`}
              >
                <HelpCircle size={20} />
                Quizzes
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/rewards" 
                className={`flex items-center gap-3 px-4 py-3 text-white text-opacity-80 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                  isActive('/rewards') ? 'bg-primary text-white' : ''
                }`}
              >
                <Trophy size={20} />
                Rewards
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/challenges" 
                className={`flex items-center gap-3 px-4 py-3 text-white text-opacity-80 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                  isActive('/challenges') ? 'bg-primary text-white' : ''
                }`}
              >
                <Target size={20} />
                Challenges
              </Link>
            </li>
            <li className="mb-2">
              <Link 
                to="/leaderboard" 
                className={`flex items-center gap-3 px-4 py-3 text-white text-opacity-80 rounded-lg transition-all duration-200 hover:bg-primary hover:text-white ${
                  isActive('/leaderboard') ? 'bg-primary text-white' : ''
                }`}
              >
                <Award size={20} />
                Leaderboard
              </Link>
            </li>
          </ul>
        </nav>
        <button 
          onClick={handleLogout} 
          className="mt-auto flex items-center gap-2 justify-center px-6 py-3 bg-border text-text-dark rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-gray-300 border-none text-base"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>
      <main className="flex-1 ml-65 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
