import Layout from "./Layout";
import AdminLogin from "./components/admin/adminLogin";
import Dashboard from "./components/admin/components/dashboard";
import Login from "./components/login"
import Signup from "./components/signup"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='admim/login' element={<AdminLogin />} />

          {/* Protected Routes */}
         <Route>
         <Route path="admin/dashboard" element={<Dashboard/>} />
         </Route>




          {/* Catch for all */}
          <Route path='*' element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
