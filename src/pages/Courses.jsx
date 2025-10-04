import { useState } from 'react';
import { Plus, Edit, Trash2, X } from 'lucide-react';

function Courses() {
  // Mock data - in real app, fetch from API
  const [courses, setCourses] = useState([
    { id: 1, title: 'Organic Farming Basics', description: 'Learn the fundamentals of organic farming', duration: '4 weeks', level: 'Beginner', status: 'Active' },
    { id: 2, title: 'Soil Management', description: 'Advanced techniques for soil health', duration: '6 weeks', level: 'Advanced', status: 'Active' },
    { id: 3, title: 'Crop Rotation', description: 'Maximize yield with proper crop rotation', duration: '3 weeks', level: 'Intermediate', status: 'Active' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    level: 'Beginner',
    status: 'Active'
  });

  const handleAdd = () => {
    setEditingCourse(null);
    setFormData({ title: '', description: '', duration: '', level: 'Beginner', status: 'Active' });
    setShowModal(true);
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData(course);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCourse) {
      setCourses(courses.map(course => 
        course.id === editingCourse.id ? { ...formData, id: course.id } : course
      ));
    } else {
      setCourses([...courses, { ...formData, id: Date.now() }]);
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
        <h2 className="m-0 text-3xl">Courses</h2>
        <button 
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium cursor-pointer transition-all duration-200 hover:bg-primary-dark border-none text-base flex items-center gap-2" 
          onClick={handleAdd}
        >
          <Plus size={20} />
          Add Course
        </button>
      </div>
      <div className="p-8">
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
          <table className="w-full border-collapse">
            <thead className="bg-bg-light">
              <tr>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Title</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Description</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Duration</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Level</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Status</th>
                <th className="text-left p-4 font-semibold text-text-dark border-b-2 border-border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td className="p-4 border-b border-border font-medium">{course.title}</td>
                  <td className="p-4 border-b border-border">{course.description}</td>
                  <td className="p-4 border-b border-border">{course.duration}</td>
                  <td className="p-4 border-b border-border">
                    <span className={`px-3 py-1 rounded-xl text-sm ${
                      course.level === 'Beginner' 
                        ? 'bg-green-100 text-green-600' 
                        : course.level === 'Intermediate' 
                        ? 'bg-orange-100 text-orange-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {course.level}
                    </span>
                  </td>
                  <td className="p-4 border-b border-border">
                    <span className="px-3 py-1 rounded-xl text-sm bg-green-100 text-green-600">
                      {course.status}
                    </span>
                  </td>
                  <td className="p-4 border-b border-border">
                    <div className="flex gap-2">
                      <button 
                        className="p-2 rounded border-none cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 bg-primary text-white" 
                        onClick={() => handleEdit(course)}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="p-2 rounded border-none cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 bg-error text-white" 
                        onClick={() => handleDelete(course.id)}
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
              <h3 className="m-0 text-2xl">{editingCourse ? 'Edit Course' : 'Add New Course'}</h3>
              <button 
                className="p-2 rounded border-none cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:opacity-80 bg-transparent" 
                onClick={() => setShowModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Course Title</label>
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
                <label className="block mb-2 font-medium text-text-dark">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 4 weeks"
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium text-text-dark">Level</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-border rounded-lg outline-none transition-colors duration-200 bg-white text-text-dark focus:border-primary"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
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
                  {editingCourse ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Courses;
