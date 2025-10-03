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
      <div className="content-header">
        <h2>Courses</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <Plus size={20} style={{ marginRight: '0.5rem' }} />
          Add Course
        </button>
      </div>
      <div className="content-body">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Level</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course.id}>
                  <td style={{ fontWeight: '500' }}>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.duration}</td>
                  <td>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      backgroundColor: course.level === 'Beginner' ? '#e0f2e9' : 
                                     course.level === 'Intermediate' ? '#fff4e6' : '#fee2e2',
                      color: course.level === 'Beginner' ? '#16a34a' : 
                             course.level === 'Intermediate' ? '#ea580c' : '#dc2626'
                    }}>
                      {course.level}
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
                      {course.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="icon-btn" 
                        onClick={() => handleEdit(course)}
                        style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        className="icon-btn btn-danger" 
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
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingCourse ? 'Edit Course' : 'Add New Course'}</h3>
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
                <label>Course Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
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
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 4 weeks"
                  required
                />
              </div>
              <div className="form-group">
                <label>Level</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
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
