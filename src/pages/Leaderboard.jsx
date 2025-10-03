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

  const getRankBadgeStyle = (rank) => {
    if (rank <= 3) {
      return {
        backgroundColor: rank === 1 ? '#fef3c7' : rank === 2 ? '#e5e7eb' : '#fed7aa',
        color: rank === 1 ? '#92400e' : rank === 2 ? '#374151' : '#9a3412',
        fontWeight: 'bold'
      };
    }
    return {
      backgroundColor: 'var(--color-bg-light)',
      color: 'var(--color-text-dark)'
    };
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
      <div className="content-header">
        <h2>Leaderboard Management</h2>
      </div>
      <div className="content-body">
        <div className="stats-grid" style={{ marginBottom: '2rem' }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                <Trophy size={28} />
              </div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Top Performers</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {topUsers.map((user) => (
              <div 
                key={user.id}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: `2px solid ${user.rank === 1 ? '#FFD700' : user.rank === 2 ? '#C0C0C0' : '#CD7F32'}`
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  {getRankIcon(user.rank)}
                </div>
                <h4 style={{ margin: '0.5rem 0' }}>{user.name}</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {user.email}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-around',
                  padding: '1rem 0',
                  borderTop: '1px solid var(--color-border)'
                }}>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                      {user.points}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Points</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                      {user.courses}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Courses</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                      {user.badges}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Badges</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Email</th>
                <th>Points</th>
                <th>Courses Completed</th>
                <th>Badges Earned</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(user => (
                <tr key={user.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {getRankIcon(user.rank)}
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        ...getRankBadgeStyle(user.rank)
                      }}>
                        #{user.rank}
                      </span>
                    </div>
                  </td>
                  <td style={{ fontWeight: '500' }}>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      {user.points}
                    </span>
                  </td>
                  <td>{user.courses}</td>
                  <td>{user.badges}</td>
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
