import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Login } from './components/Login';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Dashboard } from './components/Dashboard';
import { Issues } from './components/Issues';
import { Departments } from './components/Departments';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';
import { Profile } from './components/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'issues':
        return <Issues />;
      case 'departments':
        return <Departments />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? (
                <div className="flex h-screen bg-gray-100 dark:bg-slate-950">
                  <Sidebar
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    isCollapsed={sidebarCollapsed}
                    setIsCollapsed={setSidebarCollapsed}
                  />
                  
                  <div className="flex-1 flex flex-col overflow-hidden">
                    <Topbar onLogout={handleLogout} />
                    
                    <main className="flex-1 overflow-y-auto">
                      {renderContent()}
                    </main>
                  </div>
                </div>
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;