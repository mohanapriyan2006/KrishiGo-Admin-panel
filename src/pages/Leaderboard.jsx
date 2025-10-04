import { useState } from 'react';
import { Trophy, Medal, Award, Crown } from 'lucide-react';

function Leaderboard() {
  // Mock leaderboard data
  const [leaderboard] = useState([
    { id: 1, rank: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', points: 2450, courses: 15, badges: 8 },
    { id: 2, rank: 2, name: 'Priya Sharma', email: 'priya@example.com', points: 2280, courses: 14, badges: 7 },
    { id: 3, rank: 3, name: 'Amit Patel', email: 'amit@example.com', points: 2150, courses: 13, badges: 6 },
    { id: 4, rank: 4, name: 'Sunita Singh', email: 'sunita@example.com', points: 1980, courses: 12, badges: 6 },
    { id: 5, rank: 5, name: 'Vikram Reddy', email: 'vikram@example.com', points: 1875, courses: 11, badges: 5 },
    { id: 6, rank: 6, name: 'Anjali Desai', email: 'anjali@example.com', points: 1750, courses: 10, badges: 5 },
    { id: 7, rank: 7, name: 'Karthik Nair', email: 'karthik@example.com', points: 1620, courses: 9, badges: 4 },
    { id: 8, rank: 8, name: 'Meera Gupta', email: 'meera@example.com', points: 1540, courses: 9, badges: 4 },
    { id: 9, rank: 9, name: 'Ravi Verma', email: 'ravi@example.com', points: 1420, courses: 8, badges: 3 },
    { id: 10, rank: 10, name: 'Neha Iyer', email: 'neha@example.com', points: 1350, courses: 8, badges: 3 }
  ]);

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1:
        return <Crown size={24} color="#FFD700" />;
      case 2:
        return <Medal size={24} color="#C0C0C0" />;
      case 3:
        return <Award size={24} color="#CD7F32" />;
      default:
        return <Trophy size={20} color="#78BB1B" />;
    }
  };



  const topUsers = leaderboard.slice(0, 3);
  const stats = [
    { label: 'Total Active Users', value: leaderboard.length.toString(), color: '#78BB1B' },
    { label: 'Average Points', value: Math.round(leaderboard.reduce((acc, user) => acc + user.points, 0) / leaderboard.length).toString(), color: '#314C1C' },
    { label: 'Total Courses Completed', value: leaderboard.reduce((acc, user) => acc + user.courses, 0).toString(), color: '#9BD748' },
    { label: 'Total Badges Earned', value: leaderboard.reduce((acc, user) => acc + user.badges, 0).toString(), color: '#78BB1B' }
  ];

  return (
    <>
      <div className="bg-white px-8 py-6 border-b border-border flex justify-between items-center">
        <h2 className="m-0 text-3xl">Leaderboard Management</h2>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
              >
                <Trophy size={28} />
              </div>
              <div>
                <h3 className="m-0 mb-1 text-3xl text-text-dark">{stat.value}</h3>
                <p className="m-0 text-text-light text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h3 className="mb-6">Top Performers</h3>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {topUsers.map((user) => (
              <div 
                key={user.id}
                className={`p-6 bg-bg-light rounded-xl text-center border-2 ${
                  user.rank === 1 ? 'border-yellow-400' : 
                  user.rank === 2 ? 'border-gray-400' : 
                  'border-orange-400'
                }`}
              >
                <div className="mb-4">
                  {getRankIcon(user.rank)}
                </div>
                <h4 className="my-2">{user.name}</h4>
                <p className="text-text-light text-sm mb-4">
                  {user.email}
                </p>
                <div className="flex justify-around py-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {user.points}
                    </div>
                    <div className="text-xs text-text-light">Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {user.courses}
                    </div>
                    <div className="text-xs text-text-light">Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {user.badges}
                    </div>
                    <div className="text-xs text-text-light">Badges</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
          <table className="w-full border-collapse">
            <thead className="bg-bg-light">
              <tr>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Rank</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">User</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Email</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Points</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Courses Completed</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Badges Earned</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(user => (
                <tr key={user.id}>
                  <td className="p-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      {getRankIcon(user.rank)}
                      <span className={`px-3 py-1 rounded-xl text-sm ${
                        user.rank <= 3 
                          ? user.rank === 1 
                            ? 'bg-yellow-100 text-yellow-800 font-bold' 
                            : user.rank === 2 
                            ? 'bg-gray-100 text-gray-800 font-bold' 
                            : 'bg-orange-100 text-orange-800 font-bold'
                          : 'bg-bg-light text-text-dark'
                      }`}>
                        #{user.rank}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 border-b border-border font-medium">{user.name}</td>
                  <td className="p-4 border-b border-border">{user.email}</td>
                  <td className="p-4 border-b border-border">
                    <span className="text-primary font-semibold text-lg">
                      {user.points}
                    </span>
                  </td>
                  <td className="p-4 border-b border-border">{user.courses}</td>
                  <td className="p-4 border-b border-border">{user.badges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
