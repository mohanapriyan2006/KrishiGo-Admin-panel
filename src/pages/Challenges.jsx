import { useState } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';

function Challenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, name: '30 Day Learning Streak', type: 'Streak', reward: 100, duration: '30 days', status: 'Active' },
    { id: 2, name: 'Complete 5 Courses', type: 'Achievement', reward: 150, duration: 'Ongoing', status: 'Active' },
    { id: 3, name: 'Weekly Quiz Master', type: 'Competition', reward: 75, duration: '7 days', status: 'Active' },
    { id: 4, name: 'Perfect Score Challenge', type: 'Achievement', reward: 200, duration: 'Ongoing', status: 'Active' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Achievement',
    reward: '',
    duration: '',
    status: 'Active'
  });

  const handleAdd = () => {
    setEditingChallenge(null);
    setFormData({ name: '', type: 'Achievement', reward: '', duration: '', status: 'Active' });
    setShowModal(true);
  };

  const handleEdit = (challenge) => {
    setEditingChallenge(challenge);
    setFormData(challenge);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this challenge?')) {
      setChallenges(challenges.filter(challenge => challenge.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingChallenge) {
      setChallenges(challenges.map(challenge => 
        challenge.id === editingChallenge.id ? { ...formData, id: challenge.id } : challenge
      ));
    } else {
      setChallenges([...challenges, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="bg-white px-8 py-6 border-b border-border flex justify-between items-center">
        <h2 className="m-0 text-3xl">Challenges</h2>
        <button 
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-primary-dark border-none text-base flex items-center gap-2" 
          onClick={handleAdd}
        >
          <Plus size={20} style={{ marginRight: '0.5rem' }} />
          Add Challenge
        </button>
      </div>
      <div className="p-8">
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
          <table className="w-full border-collapse">
            <thead className="bg-bg-light">
              <tr>
                <th>Challenge Name</th>
                <th>Type</th>
                <th>Reward</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map(challenge => (
                <tr key={challenge.id}>
                  <td style={{ fontWeight: '500' }}>{challenge.name}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      backgroundColor: challenge.type === 'Streak' ? '#e0f2fe' : 
                                     challenge.type === 'Achievement' ? '#fef3c7' : '#fce7f3',
                      color: challenge.type === 'Streak' ? '#0369a1' : 
                             challenge.type === 'Achievement' ? '#92400e' : '#9f1239'
                    }}>
                      {challenge.type}
                    </span>
                  </td>
                  <td>{challenge.reward} pts</td>
                  <td>{challenge.duration}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      backgroundColor: '#e0f2e9',
                      color: '#16a34a'
                    }}>
                      {challenge.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <button 
                        className="icon-btn" 
                        onClick={() => handleEdit(challenge)}
                        style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="icon-btn btn-danger" 
                        onClick={() => handleDelete(challenge.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3>{editingChallenge ? 'Edit Challenge' : 'Add New Challenge'}</h3>
              <button 
                className="icon-btn" 
                onClick={() => setShowModal(false)}
                style={{ backgroundColor: 'transparent' }}
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Challenge Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="Achievement">Achievement</option>
                  <option value="Streak">Streak</option>
                  <option value="Competition">Competition</option>
                  <option value="Quest">Quest</option>
                </select>
              </div>
              <div className="form-group">
                <label>Reward Points</label>
                <input
                  type="number"
                  name="reward"
                  value={formData.reward}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 30 days or Ongoing"
                  required
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
              <div className="flex gap-4 justify-end mt-6">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingChallenge ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Challenges;
