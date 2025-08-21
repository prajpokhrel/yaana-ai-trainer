// src/components/layout/Header.jsx
import { useAuth } from '../../contexts/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import { LogOut } from 'lucide-react'

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">YAANA</span>
            </div>
            <span className="font-bold text-xl text-gray-900">AI Chatbot Trainer</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  to="/dashboard"
                  className={`text-sm font-medium transition-colors ${isActive('/dashboard') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className={`text-sm font-medium transition-colors ${isActive('/profile') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  Profile
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700 hidden sm:block">
                  Welcome, {user?.name}
                </span>
                <button onClick={logout} className="btn btn-outline text-sm">
                  <LogOut size={16} className="mr-2" /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="btn btn-outline text-sm">Login</Link>
                <Link to="/register" className="btn btn-primary text-sm">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
