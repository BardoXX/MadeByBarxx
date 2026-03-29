// src/app/dashboard/page.tsx
import ProtectedRoute from '../components/ProtectedRoute'; // Adjust path if needed

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
        <p>Welcome to your dashboard! You are logged in.</p>
        {/* Add dashboard content here */}
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
