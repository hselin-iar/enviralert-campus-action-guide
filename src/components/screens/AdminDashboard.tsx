import { 
  ArrowLeft, Clock, Users, Droplets, Download, MapPin, CheckCircle, AlertTriangle, 
  TrendingUp, Activity, BarChart3, Calendar, Filter, Search, Settings, 
  FileText, Zap, Target, Award, Bell, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface AdminDashboardProps {
  onNavigate: (screen: string) => void;
}

export const AdminDashboard = ({ onNavigate }: AdminDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button size="sm" variant="ghost" onClick={() => onNavigate('map')} className="md:hidden bg-glass-bg backdrop-blur-md border border-glass-border text-white">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Enviralert Admin Dashboard</h1>
            <p className="text-white/60">AIT Pune Campus Management</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <Badge className="bg-destructive/20 text-destructive border-destructive/30">+12%</Badge>
          </div>
          <h3 className="text-2xl font-bold text-white">47</h3>
          <p className="text-white/60 text-sm">Active Reports</p>
          <p className="text-xs text-white/50 mt-1">18 high priority</p>
        </div>

        <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <Badge className="bg-primary/20 text-primary border-primary/30">-8%</Badge>
          </div>
          <h3 className="text-2xl font-bold text-white">6.2 hrs</h3>
          <p className="text-white/60 text-sm">Avg Resolution Time</p>
          <p className="text-xs text-white/50 mt-1">Target: 8 hrs</p>
        </div>

        <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-volunteer-green/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-volunteer-green" />
            </div>
            <Badge className="bg-volunteer-green/20 text-volunteer-green border-volunteer-green/30">+24%</Badge>
          </div>
          <h3 className="text-2xl font-bold text-white">342</h3>
          <p className="text-white/60 text-sm">Active Volunteers</p>
          <p className="text-xs text-white/50 mt-1">1,240 hrs this month</p>
        </div>

        <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-leak-blue/20 rounded-xl flex items-center justify-center">
              <Droplets className="w-6 h-6 text-leak-blue" />
            </div>
            <Badge className="bg-leak-blue/20 text-leak-blue border-leak-blue/30">+15%</Badge>
          </div>
          <h3 className="text-2xl font-bold text-white">48,300L</h3>
          <p className="text-white/60 text-sm">Water Saved</p>
          <p className="text-xs text-white/50 mt-1">This semester</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Panel - Reports & Activity */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Recent Reports */}
          <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Recent Reports</h2>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
                  <Filter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Dustbin Overflow", location: "Hostel B - Mess Gate", severity: "High", status: "In Progress", time: "15m ago", assignee: "Team Alpha" },
                { title: "Water Leak", location: "Library - Ground Floor", severity: "Medium", status: "Assigned", time: "1h ago", assignee: "Plumbing Crew" },
                { title: "Broken Light", location: "Academic Block A", severity: "Low", status: "Fixed", time: "3h ago", assignee: "Electrical Team" },
                { title: "Cleanliness Issue", location: "Sports Complex", severity: "Medium", status: "Open", time: "5h ago", assignee: "Unassigned" }
              ].map((report, idx) => (
                <div key={idx} className="bg-glass-bg border border-glass-border rounded-xl p-4 hover:bg-glass-border transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-glass-bg border border-glass-border rounded-lg flex items-center justify-center">
                        <AlertTriangle className={`w-5 h-5 ${report.severity === 'High' ? 'text-destructive' : report.severity === 'Medium' ? 'text-yellow-500' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{report.title}</h4>
                        <p className="text-sm text-white/60">{report.location}</p>
                        <p className="text-xs text-white/50">Assigned to: {report.assignee}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`${report.status === 'Fixed' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-glass-bg border-glass-border text-white'} mb-2`}>
                        {report.status}
                      </Badge>
                      <p className="text-xs text-white/60">{report.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
              <h3 className="text-lg font-semibold text-white mb-4">Report Trends</h3>
              <div className="w-full h-32 bg-glass-bg border border-glass-border rounded-lg flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white/40" />
              </div>
            </div>
            <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
              <h3 className="text-lg font-semibold text-white mb-4">Resolution Rate</h3>
              <div className="w-full h-32 bg-glass-bg border border-glass-border rounded-lg flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Controls & Map */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Quick Actions */}
          <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90 justify-start">
                <Zap className="w-4 h-4 mr-2" />
                Assign Emergency Team
              </Button>
              <Button variant="outline" className="w-full bg-glass-bg border-glass-border text-white hover:bg-glass-border justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Maintenance
              </Button>
              <Button variant="outline" className="w-full bg-glass-bg border-glass-border text-white hover:bg-glass-border justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Send Notifications
              </Button>
              <Button variant="outline" className="w-full bg-glass-bg border-glass-border text-white hover:bg-glass-border justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>

          {/* Campus Map */}
          <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
            <h3 className="text-lg font-semibold text-white mb-4">Live Campus Map</h3>
            <div className="w-full h-48 bg-glass-bg border border-glass-border rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
              <div className="absolute top-4 left-4 w-3 h-3 bg-destructive rounded-full animate-pulse" />
              <div className="absolute top-1/2 right-6 w-3 h-3 bg-leak-blue rounded-full animate-pulse" />
              <div className="absolute bottom-6 left-1/3 w-3 h-3 bg-volunteer-green rounded-full animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white/40" />
              </div>
            </div>
            <div className="flex justify-between text-xs text-white/60 mt-2">
              <span>47 Active</span>
              <span>Real-time</span>
            </div>
          </div>

          {/* Team Performance */}
          <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-6 shadow-glass">
            <h3 className="text-lg font-semibold text-white mb-4">Team Performance</h3>
            <div className="space-y-4">
              {['Maintenance Team A', 'Cleaning Crew B', 'Emergency Response'].map((team, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{team}</p>
                    <p className="text-xs text-white/60">{Math.floor(Math.random() * 20) + 80}% efficiency</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-sm text-white">{Math.floor(Math.random() * 15) + 5}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};