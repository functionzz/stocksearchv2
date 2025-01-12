// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import './App.css';
// import Layout from "./pages/Layout";
// import Login from "./pages/Login";
// import Logout from "./pages/Logout";
// import Register from "./pages/Register";
// //contexts
// import UserContext from "./contexts/UserContext";

// //hooks
// import { useState } from "react";

// function App() {
  
//     const [User, setUser] = useState(null);

//     const login = (userData) => {
//       setUser(userData);
//     };

//     const logout = () => {
//       setUser(null);
//     };

  
//   return (




//     <UserContext.Provider value={{ User, login, logout}}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="register" element={<Register/>}/>
//             <Route path="login" element={<Login/>}/>
//             <Route path="logout" element={<Logout/>}/>
//             {/* <Route path="*" element={<NoPage />} /> */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </UserContext.Provider>


//   );
// }

// export default App;


import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoutes";

import './App.css';
import PublicHome from "./pages/PublicHome";
import UserHome from "./pages/UserHome";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

//contexts
// import UserContext from "./contexts/UserContext";

//hooks


function Logout() {
  localStorage.clear();
  return <Navigate to={"/login"}/>
}

function LogoutThenRegister() {
  localStorage.clear();
  return <Register/>
}

function App() {
  
  return (
    // <UserContext.Provider value={{ User, login, logout}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicHome />} />
            
            <Route path="home" 
            element={
            <ProtectedRoute>
              <UserHome/>
            </ProtectedRoute>}
            />

            <Route path="register" element={<LogoutThenRegister/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;


