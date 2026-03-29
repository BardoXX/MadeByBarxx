// src/app/admin/page.tsx
import AdminRoute from '../components/AdminRoute'; // Adjust path if needed

const AdminDashboardPage = () => {
  return (
    <AdminRoute>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p>Welcome, Administrator!</p>
        {/* Add admin-specific content here */}
      </div>
    </AdminRoute>
  );
};

export default AdminDashboardPage;
