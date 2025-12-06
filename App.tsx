import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ActionPanel from './components/ActionPanel';
import { Bell, FileText, Download, Search, Filter } from 'lucide-react';

// Placeholder Components
const Covenants = () => (
  <div className="p-8 max-w-7xl mx-auto space-y-6">
    <h1 className="text-2xl font-bold text-white mb-6">Covenants Compliance</h1>
    {/* Mock Table */}
    <div className="bg-fintech-card border border-fintech-border rounded-sm overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-white/5 text-xs uppercase font-bold text-gray-400">
          <tr>
            <th className="px-6 py-4">Covenant</th>
            <th className="px-6 py-4">Threshold</th>
            <th className="px-6 py-4">Actual</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Test Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-fintech-border text-gray-300">
           <tr className="hover:bg-white/5">
             <td className="px-6 py-4 font-medium text-white">Leverage Ratio</td>
             <td className="px-6 py-4">Max 4.00x</td>
             <td className="px-6 py-4 text-red-500 font-bold">4.52x</td>
             <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-red-500/20 text-red-500 text-xs font-bold">BREACH</span></td>
             <td className="px-6 py-4">31 Dec 2025</td>
           </tr>
           <tr className="hover:bg-white/5">
             <td className="px-6 py-4 font-medium text-white">Interest Cover</td>
             <td className="px-6 py-4">Min 3.50x</td>
             <td className="px-6 py-4 text-green-500">5.10x</td>
             <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs font-bold">PASS</span></td>
             <td className="px-6 py-4">31 Dec 2025</td>
           </tr>
           <tr className="hover:bg-white/5">
             <td className="px-6 py-4 font-medium text-white">Capex Limit</td>
             <td className="px-6 py-4">Max $50M</td>
             <td className="px-6 py-4 text-white">$42M</td>
             <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs font-bold">PASS</span></td>
             <td className="px-6 py-4">31 Dec 2025</td>
           </tr>
           <tr className="hover:bg-white/5">
             <td className="px-6 py-4 font-medium text-white">Debt Service Cover</td>
             <td className="px-6 py-4">Min 1.20x</td>
             <td className="px-6 py-4 text-white">1.35x</td>
             <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs font-bold">PASS</span></td>
             <td className="px-6 py-4">31 Dec 2025</td>
           </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const Alerts = () => (
  <div className="p-8 max-w-7xl mx-auto space-y-6">
    <h1 className="text-2xl font-bold text-white mb-6">Active Alerts</h1>
    <div className="space-y-4">
       <div className="bg-fintech-card border border-l-4 border-l-red-500 border-y-fintech-border border-r-fintech-border p-4 rounded-r-sm flex items-start gap-4">
          <div className="p-2 bg-red-500/10 rounded-full"><Bell className="w-5 h-5 text-red-500" /></div>
          <div className="flex-1">
            <h3 className="font-bold text-white">Leverage Ratio Breach Detected</h3>
            <p className="text-sm text-gray-400 mt-1">The leverage ratio for Q4 2025 has exceeded the maximum threshold of 4.00x. Immediate remediation required.</p>
            <p className="text-xs text-gray-500 mt-2">Detected: Today, 09:42 AM</p>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-sm hover:bg-red-700">Review</button>
       </div>
       <div className="bg-fintech-card border border-l-4 border-l-yellow-500 border-y-fintech-border border-r-fintech-border p-4 rounded-r-sm flex items-start gap-4">
          <div className="p-2 bg-yellow-500/10 rounded-full"><FileText className="w-5 h-5 text-yellow-500" /></div>
          <div className="flex-1">
            <h3 className="font-bold text-white">Compliance Certificate Due</h3>
            <p className="text-sm text-gray-400 mt-1">Q4 2025 Compliance Certificate is pending approval.</p>
            <p className="text-xs text-gray-500 mt-2">Due: Jan 15, 2026</p>
          </div>
          <button className="px-4 py-2 border border-gray-600 text-gray-300 text-xs font-bold rounded-sm hover:text-white hover:border-gray-400">View</button>
       </div>
       <div className="bg-fintech-card border border-l-4 border-l-blue-500 border-y-fintech-border border-r-fintech-border p-4 rounded-r-sm flex items-start gap-4">
          <div className="p-2 bg-blue-500/10 rounded-full"><FileText className="w-5 h-5 text-blue-500" /></div>
          <div className="flex-1">
            <h3 className="font-bold text-white">Rate Setting Notice</h3>
            <p className="text-sm text-gray-400 mt-1">New interest period begins Feb 1, 2026.</p>
            <p className="text-xs text-gray-500 mt-2">Received: Yesterday</p>
          </div>
          <button className="px-4 py-2 border border-gray-600 text-gray-300 text-xs font-bold rounded-sm hover:text-white hover:border-gray-400">View</button>
       </div>
    </div>
  </div>
);

const Documents = () => (
  <div className="p-8 max-w-7xl mx-auto space-y-6">
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Documents</h1>
        <div className="flex gap-2">
            <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search documents..." className="bg-fintech-card border border-fintech-border pl-10 pr-4 py-2 text-sm text-white rounded-sm w-64 focus:outline-none focus:border-fintech-accent" />
            </div>
            <button className="p-2 border border-fintech-border rounded-sm text-gray-400 hover:text-white"><Filter className="w-4 h-4" /></button>
        </div>
    </div>
    
    <div className="bg-fintech-card border border-fintech-border rounded-sm">
        {[
            { name: "Facility Agreement_Final_Executed.pdf", type: "PDF", size: "2.4 MB", date: "Jan 12, 2024" },
            { name: "Q3_2025_Compliance_Cert.pdf", type: "PDF", size: "1.1 MB", date: "Oct 15, 2025" },
            { name: "Q3_2025_Financials.xlsx", type: "XLSX", size: "4.5 MB", date: "Oct 10, 2025" },
            { name: "Fee_Letter_Redacted.pdf", type: "PDF", size: "0.8 MB", date: "Jan 12, 2024" },
            { name: "Security_Trust_Deed.pdf", type: "PDF", size: "3.2 MB", date: "Jan 12, 2024" },
        ].map((doc, i) => (
            <div key={i} className="flex items-center justify-between p-4 border-b border-fintech-border hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded text-gray-400 group-hover:text-white group-hover:bg-gray-700">
                        <FileText className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white group-hover:text-fintech-accent transition-colors">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <span className="text-xs text-gray-500">{doc.date}</span>
                    <button className="text-gray-500 hover:text-white"><Download className="w-4 h-4" /></button>
                </div>
            </div>
        ))}
    </div>
  </div>
);

const Settings = () => (
  <div className="p-8 max-w-4xl mx-auto space-y-8">
     <h1 className="text-2xl font-bold text-white border-b border-fintech-border pb-6">Settings</h1>
     
     <div className="space-y-6">
        <div>
            <h3 className="text-lg font-medium text-white mb-4">Notification Preferences</h3>
            <div className="space-y-3 bg-fintech-card border border-fintech-border p-6 rounded-sm">
                {['Email Alerts for Critical Breaches', 'Daily Portfolio Summary', 'New Document Uploads'].map((label, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-fintech-accent focus:ring-offset-gray-900" />
                        <span className="text-sm text-gray-300">{label}</span>
                    </label>
                ))}
            </div>
        </div>

        <div>
            <h3 className="text-lg font-medium text-white mb-4">Display</h3>
             <div className="space-y-3 bg-fintech-card border border-fintech-border p-6 rounded-sm">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Theme</span>
                    <select className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-1">
                        <option>Dark (Fintech)</option>
                        <option>Light</option>
                    </select>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-300">Density</span>
                    <select className="bg-gray-800 border border-gray-700 text-white text-sm rounded px-3 py-1">
                        <option>High (Compact)</option>
                        <option>Comfortable</option>
                    </select>
                </div>
             </div>
        </div>
     </div>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const showActionPanel = activeTab !== 'settings';

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Dashboard />;
      case 'covenants': return <Covenants />;
      case 'alerts': return <Alerts />;
      case 'documents': return <Documents />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#0a0e17] text-white font-sans antialiased overflow-hidden selection:bg-fintech-accent selection:text-white">
      {/* Fixed Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative">
        {/* Scrollable Container with conditional margins */}
        <div className={`flex-1 overflow-y-auto bg-fintech-bg transition-all duration-300 ml-64 ${showActionPanel ? 'mr-96' : ''}`}>
             {renderContent()}
        </div>
        
        {/* Right Action Panel */}
        {showActionPanel && <ActionPanel />}
      </main>
    </div>
  );
};

export default App;