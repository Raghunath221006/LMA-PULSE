import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { LEVERAGE_DATA, COVENANT_THRESHOLD } from '../data/mockData';
import { TrendingUp, Calendar, DollarSign } from 'lucide-react';

const MetricCard: React.FC<{
  title: string;
  value: string;
  subtext: string;
  status?: 'success' | 'danger' | 'neutral';
  icon: React.ElementType;
}> = ({ title, value, subtext, status = 'neutral', icon: Icon }) => {
  const valueColor = {
    success: 'text-fintech-success',
    danger: 'text-fintech-danger',
    neutral: 'text-white'
  }[status];

  return (
    <div className="bg-fintech-card border border-fintech-border p-5 rounded-sm shadow-sm hover:border-gray-700 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-semibold text-fintech-text-muted uppercase tracking-wider">{title}</span>
        <Icon className="w-4 h-4 text-fintech-text-muted" />
      </div>
      <div className={`text-2xl font-bold tracking-tight mb-1 ${valueColor}`}>
        {value}
      </div>
      <div className="text-xs text-fintech-text-secondary">
        {subtext}
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-fintech-bg border border-fintech-border p-3 shadow-xl rounded-sm">
        <p className="text-xs font-semibold text-gray-300 mb-1">{label}</p>
        <p className="text-sm font-bold text-white">
          {payload[0].value.toFixed(2)}x
        </p>
        <p className="text-[10px] text-gray-500 mt-1">
          Threshold: {COVENANT_THRESHOLD.toFixed(2)}x
        </p>
      </div>
    );
  }
  return null;
};

const Dashboard: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex justify-between items-end border-b border-fintech-border pb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            Portfolio Health: Solaris Energy Ltd
            <span className="px-2 py-1 rounded bg-fintech-danger/10 border border-fintech-danger/20 text-fintech-danger text-xs font-bold uppercase tracking-wider">
              Non-Compliant
            </span>
          </h1>
          <p className="text-fintech-text-secondary text-sm mt-1">
            Syndicated Term Loan B • $500M • Maturity 2028
          </p>
        </div>
        <div className="text-right">
            <span className="text-xs text-fintech-text-muted">Last Updated</span>
            <p className="text-sm font-medium text-white">Today, 09:42 AM</p>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-4 gap-4">
        <MetricCard 
          title="Leverage Ratio" 
          value="4.52x" 
          subtext="Limit: 4.00x" 
          status="danger"
          icon={TrendingUp}
        />
        <MetricCard 
          title="Interest Cover" 
          value="5.10x" 
          subtext="Limit: 3.50x" 
          status="success"
          icon={TrendingUp}
        />
        <MetricCard 
          title="Next Reporting" 
          value="Jan 15, 2026" 
          subtext="Compliance Certificate" 
          status="neutral"
          icon={Calendar}
        />
        <MetricCard 
          title="Facility Amount" 
          value="$500.0M" 
          subtext="100% Drawn" 
          status="neutral"
          icon={DollarSign}
        />
      </div>

      {/* Main Chart Area */}
      <div className="bg-fintech-card border border-fintech-border rounded-sm p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">Leverage Ratio Trend (Last 12 Months)</h2>
          <div className="flex gap-2">
              <span className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                  Actual
              </span>
              <span className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                  Threshold
              </span>
          </div>
        </div>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={LEVERAGE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1f2937" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                domain={[2.5, 5]} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickFormatter={(value) => `${value.toFixed(1)}x`}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine 
                y={COVENANT_THRESHOLD} 
                stroke="#ef4444" 
                strokeDasharray="4 4" 
                label={{ 
                  value: 'Covenant Threshold (4.00x)', 
                  position: 'insideTopRight', 
                  fill: '#ef4444', 
                  fontSize: 10,
                  dy: -10 
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={2} 
                dot={{ r: 3, fill: '#111625', stroke: '#3b82f6', strokeWidth: 2 }} 
                activeDot={{ r: 6, fill: '#3b82f6' }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Detail Grid (Mockup for high density feel) */}
      <div className="grid grid-cols-2 gap-4">
          <div className="bg-fintech-card border border-fintech-border p-4 rounded-sm">
              <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">Upcoming Covenants</h3>
              <ul className="space-y-3">
                  <li className="flex justify-between text-sm border-b border-gray-800 pb-2">
                      <span className="text-gray-300">Capex Limit</span>
                      <span className="text-white font-mono">$50M / Year</span>
                  </li>
                  <li className="flex justify-between text-sm border-b border-gray-800 pb-2">
                      <span className="text-gray-300">Debt Service Cover</span>
                      <span className="text-white font-mono">1.20x Min</span>
                  </li>
                  <li className="flex justify-between text-sm pb-1">
                      <span className="text-gray-300">Guarantor Coverage</span>
                      <span className="text-white font-mono">85% EBITDA</span>
                  </li>
              </ul>
          </div>
            <div className="bg-fintech-card border border-fintech-border p-4 rounded-sm">
              <h3 className="text-xs font-bold text-gray-400 uppercase mb-4">Latest Activities</h3>
              <ul className="space-y-3">
                  <li className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></div>
                      <div>
                          <p className="text-white">Q4 Financials Received</p>
                          <p className="text-xs text-gray-500">Today, 09:00 AM</p>
                      </div>
                  </li>
                  <li className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 mr-2 flex-shrink-0"></div>
                      <div>
                          <p className="text-gray-300">Rate Setting Notice Sent</p>
                          <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>

    </div>
  );
};

export default Dashboard;