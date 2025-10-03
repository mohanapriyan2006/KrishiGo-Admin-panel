import { BookOpen, HelpCircle, Trophy, Target, Users, TrendingUp } from 'lucide-react';

function Dashboard() {
  // Mock data - in real app, fetch from API
  const stats = [
    { 
      icon: BookOpen, 
      value: '24', 
      label: 'Total Courses',
      color: '#78BB1B'
    },
    { 
      icon: HelpCircle, 
      value: '156', 
      label: 'Total Quizzes',
      color: '#314C1C'
    },
    { 
      icon: Trophy, 
      value: '45', 
      label: 'Active Rewards',
      color: '#9BD748'
    },
    { 
      icon: Target, 
      value: '32', 
      label: 'Active Challenges',
      color: '#78BB1B'
    },
    { 
      icon: Users, 
      value: '1,234', 
      label: 'Total Users',
      color: '#314C1C'
    },
    { 
      icon: TrendingUp, 
      value: '+15%', 
      label: 'Growth This Month',
      color: '#16A34A'
    }
  ];

  const recentActivities = [
    { action: 'New course created', detail: 'Organic Farming Basics', time: '2 hours ago' },
    { action: 'Quiz completed', detail: 'Soil Management Quiz', time: '3 hours ago' },
    { action: 'Reward claimed', detail: 'Gold Badge - Harvest Master', time: '5 hours ago' },
    { action: 'Challenge completed', detail: '30 Day Learning Streak', time: '1 day ago' },
    { action: 'New user registered', detail: 'farmer@example.com', time: '1 day ago' }
  ];

  return (
    <>
      <div className="content-header">
        <h2>Dashboard</h2>
        <div style={{ color: 'var(--color-text-light)' }}>
          Welcome back, Admin!
        </div>
      </div>
      <div className="content-body">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                  <Icon size={28} />
                </div>
                <div className="stat-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Recent Activities</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentActivities.map((activity, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: '8px'
                }}
              >
                <div>
                  <div style={{ fontWeight: '500', marginBottom: '0.25rem' }}>
                    {activity.action}
                  </div>
                  <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
                    {activity.detail}
                  </div>
                </div>
                <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
