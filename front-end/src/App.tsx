import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/router';

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}


export default App;

// import { RouterProvider } from "react-router-dom";
// import router from "./router";
// import { BrowserRouter as Router } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SideBar from './components/Sidebar';
// import Home from './components/Home';
// import DashBoard from './components/DashBoard';
// import Login from './components/Login';
// import AuthButton from './components/AuthButton';
// import SignInPage from './features/auth/SignInPage';
// import SignOutPage from './features/auth/SignOutPage';
// import PrivateRoute from './features/auth/PrivateRoute';









// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AppRouter } from './router/router';
// import Home from './components/Home';
// import DashBoard from './components/DashBoard';
// import Login from './components/Login';
// import ErrorPage from './components/ErrorPage';

// import { Container, CssBaseline, Grid, Paper } from '@mui/material';


// function App() {
//   return (
//     <Router>
//     <AppRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/dashboard" element={<DashBoard />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </AppRouter>
//   </Router>
//   );
// }

// export default App;

