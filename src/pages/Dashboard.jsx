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
      <div className="bg-white px-8 py-6 border-b border-border flex justify-between items-center">
        <h2 className="m-0 text-3xl">Dashboard</h2>
        <div className="text-text-light">
          Welcome back, Admin!
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                >
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="m-0 mb-1 text-3xl text-text-dark">{stat.value}</h3>
                  <p className="m-0 text-text-light text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h3 className="mb-4">Recent Activities</h3>
          <div className="flex flex-col gap-4">
            {recentActivities.map((activity, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-4 bg-bg-light rounded-lg"
              >
                <div>
                  <div className="font-medium mb-1">
                    {activity.action}
                  </div>
                  <div className="text-text-light text-sm">
                    {activity.detail}
                  </div>
                </div>
                <div className="text-text-light text-sm">
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
