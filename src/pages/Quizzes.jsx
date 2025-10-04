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
      <div className="bg-white px-8 py-6 border-b border-border flex justify-between items-center">
        <h2 className="m-0 text-3xl">Quizzes</h2>
        <button 
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-primary-dark border-none text-base flex items-center gap-2" 
          onClick={handleAdd}
        >
          <Plus size={20} />
          Add Quiz
        </button>
      </div>
      <div className="p-8">
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
          <table className="w-full border-collapse">
            <thead className="bg-bg-light">
              <tr>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Quiz Title</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Course</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Questions</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Difficulty</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Status</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {quizzes.map(quiz => (
                <tr key={quiz.id}>
                  <td className="p-4 border-b border-border font-medium">{quiz.title}</td>
                  <td className="p-4 border-b border-border">{quiz.course}</td>
                  <td className="p-4 border-b border-border">{quiz.questions}</td>
                  <td className="p-4 border-b border-border">
                    <span className={`px-3 py-1 rounded-xl text-sm ${
                      quiz.difficulty === 'Easy' 
                        ? 'bg-green-100 text-green-600' 
                        : quiz.difficulty === 'Medium' 
                        ? 'bg-orange-100 text-orange-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {quiz.difficulty}
                    </span>
                  </td>
                  <td className="p-4 border-b border-border">
                    <span className="px-3 py-1 rounded-xl text-sm bg-green-100 text-green-600">
                      {quiz.status}
                    </span>
                  </td>
                  <td className="p-4 border-b border-border">
                    <div className="flex gap-2">
                      <button 
                        className="p-2 rounded border-none cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 bg-primary text-white" 
                        onClick={() => handleEdit(quiz)}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="p-2 rounded border-none cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 bg-error text-white" 
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="m-0 text-2xl">{editingQuiz ? 'Edit Quiz' : 'Add New Quiz'}</h3>
              <button 
                className="p-2 rounded border-none cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 bg-transparent" 
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Quiz Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Number of Questions</label>
                <input
                  type="number"
                  name="questions"
                  value={formData.questions}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Difficulty</label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
              <div className="flex gap-4 justify-end mt-6">
                <button 
                  type="button" 
                  className="px-6 py-3 bg-border text-text-dark rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-gray-300 border-none text-base" 
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-primary-dark border-none text-base"
                >
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
