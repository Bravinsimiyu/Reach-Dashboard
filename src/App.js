import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <Router>
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Route exact path='/admin' component={Main} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Route exact path='/dashboard' component={Dashboard} />
    </div>
    </Router>
  );
};

export default App;
