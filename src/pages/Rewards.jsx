import { useState } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';

function Rewards() {
  const [rewards, setRewards] = useState([
    { id: 1, name: 'Gold Badge', type: 'Badge', points: 100, description: 'Complete 10 courses', status: 'Active' },
    { id: 2, name: 'Silver Badge', type: 'Badge', points: 50, description: 'Complete 5 courses', status: 'Active' },
    { id: 3, name: 'Bronze Badge', type: 'Badge', points: 25, description: 'Complete first course', status: 'Active' },
    { id: 4, name: 'Expert Certificate', type: 'Certificate', points: 200, description: 'Pass all advanced courses', status: 'Active' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingReward, setEditingReward] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Badge',
    points: '',
    description: '',
    status: 'Active'
  });

  const handleAdd = () => {
    setEditingReward(null);
    setFormData({ name: '', type: 'Badge', points: '', description: '', status: 'Active' });
    setShowModal(true);
  };

  const handleEdit = (reward) => {
    setEditingReward(reward);
    setFormData(reward);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this reward?')) {
      setRewards(rewards.filter(reward => reward.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingReward) {
      setRewards(rewards.map(reward => 
        reward.id === editingReward.id ? { ...formData, id: reward.id } : reward
      ));
    } else {
      setRewards([...rewards, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="content-header">
        <h2>Rewards</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <Plus size={20} style={{ marginRight: '0.5rem' }} />
          Add Reward
        </button>
      </div>
      <div className="content-body">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Reward Name</th>
                <th>Type</th>
                <th>Points</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rewards.map(reward => (
                <tr key={reward.id}>
                  <td style={{ fontWeight: '500' }}>{reward.name}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      backgroundColor: reward.type === 'Badge' ? '#fef3c7' : '#ddd6fe',
                      color: reward.type === 'Badge' ? '#92400e' : '#5b21b6'
                    }}>
                      {reward.type}
                    </span>
                  </td>
                  <td>{reward.points} pts</td>
                  <td>{reward.description}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      backgroundColor: '#e0f2e9',
                      color: '#16a34a'
                    }}>
                      {reward.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="icon-btn" 
                        onClick={() => handleEdit(reward)}
                        style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="icon-btn btn-danger" 
                        onClick={() => handleDelete(reward.id)}
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
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingReward ? 'Edit Reward' : 'Add New Reward'}</h3>
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
                <label>Reward Name</label>
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
                  <option value="Badge">Badge</option>
                  <option value="Certificate">Certificate</option>
                  <option value="Trophy">Trophy</option>
                  <option value="Points">Points</option>
                </select>
              </div>
              <div className="form-group">
                <label>Points Value</label>
                <input
                  type="number"
                  name="points"
                  value={formData.points}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
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
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingReward ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Rewards;
