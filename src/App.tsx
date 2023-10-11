import Layout from "./Layout";
import AdminLogin from "./components/admin/adminLogin";
import Dashboard from "./components/admin/components/dashboard";
import Login from "./components/login"
import Signup from "./components/signup"
import RequireAuth from "./components/RequireAuth";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Unauthorized from "./components/Unauthorize";

const ROLES = {
player: 'player',
admin: 'admin',
staff: 'staff',
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="admim/login" element={<AdminLogin />} />
        <Route path="unauthorized" element={<Unauthorized/>} />

        {/* Protected Routes */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[ROLES.player, ROLES.admin, ROLES.staff]}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.player]} />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route> */}

        <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.staff]} />}>
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route> */}

        {/* <Route
          element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.staff]} />}
        >
          <Route path="admin/dashboard" element={<Dashboard />} />
        </Route> */}

        {/* Catch for all */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App
