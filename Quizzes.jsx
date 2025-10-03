import { useState } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';

function Quizzes() {
  const [quizzes, setQuizzes] = useState([
    { id: 1, title: 'Soil Management Quiz', course: 'Soil Management', questions: 10, difficulty: 'Medium', status: 'Active' },
    { id: 2, title: 'Organic Farming Test', course: 'Organic Farming Basics', questions: 15, difficulty: 'Easy', status: 'Active' },
    { id: 3, title: 'Crop Rotation Assessment', course: 'Crop Rotation', questions: 12, difficulty: 'Hard', status: 'Active' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    course: '',
    questions: '',
    difficulty: 'Medium',
    status: 'Active'
  });

  const handleAdd = () => {
    setEditingQuiz(null);
    setFormData({ title: '', course: '', questions: '', difficulty: 'Medium', status: 'Active' });
    setShowModal(true);
  };

  const handleEdit = (quiz) => {
    setEditingQuiz(quiz);
    setFormData(quiz);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      setQuizzes(quizzes.filter(quiz => quiz.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingQuiz) {
      setQuizzes(quizzes.map(quiz => 
        quiz.id === editingQuiz.id ? { ...formData, id: quiz.id } : quiz
      ));
    } else {
      setQuizzes([...quizzes, { ...formData, id: Date.now() }]);
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
        <h2>Quizzes</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <Plus size={20} style={{ marginRight: '0.5rem' }} />
          Add Quiz
        </button>
      </div>
      <div className="content-body">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Quiz Title</th>
                <th>Course</th>
                <th>Questions</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map(quiz => (
                <tr key={quiz.id}>
                  <td style={{ fontWeight: '500' }}>{quiz.title}</td>
                  <td>{quiz.course}</td>
                  <td>{quiz.questions}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      backgroundColor: quiz.difficulty === 'Easy' ? '#e0f2e9' : 
                                     quiz.difficulty === 'Medium' ? '#fff4e6' : '#fee2e2',
                      color: quiz.difficulty === 'Easy' ? '#16a34a' : 
                             quiz.difficulty === 'Medium' ? '#ea580c' : '#dc2626'
                    }}>
                      {quiz.difficulty}
                    </span>
                  </td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      backgroundColor: '#e0f2e9',
                      color: '#16a34a'
                    }}>
                      {quiz.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="icon-btn" 
                        onClick={() => handleEdit(quiz)}
                        style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="icon-btn btn-danger" 
                        onClick={() => handleDelete(quiz.id)}
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
              <h3>{editingQuiz ? 'Edit Quiz' : 'Add New Quiz'}</h3>
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
                <label>Quiz Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Questions</label>
                <input
                  type="number"
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
              <div className="form-group">
                <label>Difficulty</label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
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
                  {editingQuiz ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Quizzes;
