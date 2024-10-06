import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import OrderSummary from "./components/OrderSummary";
import Login from "./components/Login";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import TrendingProdcuts from "./components/TrendingProdcuts";
import User from "./components/User";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./utils/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <AuthProvider>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/about">Dashboard</NavLink>
        <NavLink to="/settings">Dashboard</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="/profile">Products</NavLink>
        {isLoggedIn ? (
          <button>Log out</button>
        ) : (
          <NavLink to="/login">Log out</NavLink>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/login" element={<Login onLogin={handleLoggin} />} />
        <Route path="users" element={<User />} />
        <Route path="users/admin" element={<Admin/>}/>
        <Route path="users/:userId" element={<UserDetail/>}/>
        <Route path="products" element={<Product />}>
          <Route path="featured" element={<FeaturedProduct />}></Route>
          <Route path="trending" index element={<TrendingProdcuts />} />
        </Route>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
