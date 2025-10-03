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
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>
            <Sprout size={28} />
            KrishiGo
          </h1>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/dashboard" className={isActive('/dashboard')}>
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/courses" className={isActive('/courses')}>
                <BookOpen size={20} />
                Courses
              </Link>
            </li>
            <li>
              <Link to="/quizzes" className={isActive('/quizzes')}>
                <HelpCircle size={20} />
                Quizzes
              </Link>
            </li>
            <li>
              <Link to="/rewards" className={isActive('/rewards')}>
                <Trophy size={20} />
                Rewards
              </Link>
            </li>
            <li>
              <Link to="/challenges" className={isActive('/challenges')}>
                <Target size={20} />
                Challenges
              </Link>
            </li>
            <li>
              <Link to="/leaderboard" className={isActive('/leaderboard')}>
                <Award size={20} />
                Leaderboard
              </Link>
            </li>
          </ul>
        </nav>
        <button 
          onClick={handleLogout} 
          className="btn btn-secondary"
          style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
