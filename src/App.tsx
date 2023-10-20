import Layout from "./Layout";
import AdminLogin from "./components/admin/adminLogin";
import Dashboard from "./components/admin/components/dashboard";
import Login from "./components/login"
import Signup from "./components/signup"
import Profile from "./pages/profile/Profile.tsx";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route, redirectDocument } from 'react-router-dom';
import Home from "./pages/home/Home.tsx";
import Unauthorized from "./components/Unauthorize";
import PresistLogin from "./components/PresistLogin";
import Missing from "./components/Missing.tsx";
import Stats from "./components/Stats.tsx";
import Chat from "./pages/chat/Chat.tsx";
import Game from "./pages/game/Game.tsx";
import LeftAside from "./components/LeftAside.tsx";
import NavBar from "./pages/home/NavBar.tsx";
import SearchReasult from "./components/admin/components/searchReasult.tsx";
import useAuth from "./hooks/useAuth.tsx";
import ChatContainer from "./pages/chat/ChatContainer.tsx";
import ChatRoom from "./pages/chat/chatRoom.tsx";
import ChatPrivate from "./pages/chat/ChatPrivate.tsx";


const ROLES = {
'player': 'player',
'admin': 'admin',
'staff': 'staff',
}

function App() {
  const {auth} = useAuth();
  const isAuthenticated = auth?.accessToken ? true : false;


  return (
    <section>
   

     
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="unauthorized" element={<Unauthorized />} />
         

          {/* Protected Routes */}
          {!isAuthenticated ? (
            <Route path="/" element={<Login/>} />

          ):(
            <Route path="/home" element={<Home />} />

          )}
          <Route element={<PresistLogin />}>
        
            {/* <Route> */}
            <Route
              element={
                <RequireAuth
                  allowedRoles={[ROLES.player, ROLES.admin, ROLES.staff]}
                />
              }
            >
              <Route path="/home" element={<Home />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.player]} />}>
              {/* <Route> */}
              <Route path="chatRoom" element={<ChatRoom />} />
              <Route path="profile" element={<Profile />} />
              <Route path="stat" element={<Stats />} />
              <Route path="chat" element={<Chat />} />
              <Route path="chatPrivate" element={<ChatPrivate />} />
              <Route path="game" element={<Game />} />
            </Route>
            {/* <Route> */}
            <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="search" element={<SearchReasult />} />
             </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.staff]} />}>
                  <Route path="dashboard" element={<Dashboard />} />
                </Route>

            {/* <Route
                  element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.staff]} />}
                >
                  <Route path="admin/dashboard" element={<Dashboard />} />
                </Route> */}
          </Route>

          {/* Catch for all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App
