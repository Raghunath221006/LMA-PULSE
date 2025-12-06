import React from 'react';
import { LayoutDashboard, FileText, Bell, ShieldAlert, Settings, Activity } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview', label: 'Portfolio Overview', icon: LayoutDashboard },
    { id: 'covenants', label: 'Covenants', icon: FileText },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: 3 },
    { id: 'documents', label: 'Documents', icon: ShieldAlert },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-fintech-bg border-r border-fintech-border flex flex-col h-full fixed left-0 top-0 z-10">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-fintech-border">
        <Activity className="w-6 h-6 text-fintech-accent mr-3" />
        <span className="text-xl font-bold tracking-tight text-white">
          LMA <span className="text-fintech-accent">PULSE</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors duration-200 border-l-2
                ${isActive 
                  ? 'bg-white/5 border-fintech-accent text-white' 
                  : 'border-transparent text-fintech-text-secondary hover:bg-white/5 hover:text-white'
                }`}
            >
              <div className="flex items-center">
                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-fintech-accent' : 'text-gray-500'}`} />
                {item.label}
              </div>
              {item.badge && (
                <span className="bg-fintech-danger text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer / User Profile placeholder */}
      <div className="p-4 border-t border-fintech-border">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white">
            JD
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-fintech-text-muted">Senior Credit Officer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;