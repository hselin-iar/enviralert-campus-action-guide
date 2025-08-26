import { ArrowLeft, Clock, Users, Droplets, Download, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface AdminDashboardProps {
  onNavigate: (screen: string) => void;
}

export const AdminDashboard = ({ onNavigate }: AdminDashboardProps) => {
  const reports = [
    {
      id: 1,
      title: "Dustbin Overflow",
      location: "Hostel B - Mess Gate",
      time: "12m ago",
      severity: "High",
      status: "Open",
      reporter: "Rahul Kumar"
    },
    {
      id: 2,
      title: "Water Leak",
      location: "Library - Ground Floor",
      time: "45m ago",
      severity: "Medium",
      status: "Assigned",
      reporter: "Aisha Sharma"
    },
    {
      id: 3,
      title: "Cleanliness Issue",
      location: "Academic Block A",
      time: "2h ago",
      severity: "Low",
      status: "In Progress",
      reporter: "Vikram Singh"
    },
    {
      id: 4,
      title: "Maintenance Required",
      location: "Sports Complex",
      time: "4h ago",
      severity: "Medium",
      status: "Fixed",
      reporter: "Priya Patel"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-3 p-4">
        <Button size="sm" variant="ghost" onClick={() => onNavigate('map')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Enviralert Admin Dashboard</h1>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button>Schedule Pickups</Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Reports List */}
          <div className="col-span-7">
            <Card className="h-full">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Open Reports</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {reports.map((report) => (
                    <Dialog key={report.id}>
                      <DialogTrigger asChild>
                        <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                            {report.severity === 'High' && <AlertTriangle className="w-6 h-6 text-destructive" />}
                            {report.severity === 'Medium' && <Clock className="w-6 h-6 text-yellow-500" />}
                            {report.severity === 'Low' && <CheckCircle className="w-6 h-6 text-primary" />}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium">{report.title}</h3>
                              <Badge 
                                variant={
                                  report.severity === 'High' ? 'destructive' :
                                  report.severity === 'Medium' ? 'secondary' : 'outline'
                                }
                              >
                                {report.severity}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                              <MapPin className="w-3 h-3" />
                              <span>{report.location}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">{report.time}</span>
                              <Badge 
                                variant={report.status === 'Fixed' ? 'default' : 'outline'}
                                className={report.status === 'Fixed' ? 'bg-primary' : ''}
                              >
                                {report.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Work Order Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Report: {report.title}</h4>
                            <p className="text-sm text-muted-foreground">Location: {report.location}</p>
                            <p className="text-sm text-muted-foreground">Reporter: {report.reporter}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Assigned Staff</h4>
                            <p className="text-sm text-muted-foreground">Maintenance Team A - Campus Facilities</p>
                          </div>
                          
                          <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-sm text-muted-foreground">Closure Photo</span>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm">Assign Staff</Button>
                            <Button size="sm" variant="outline">Update Status</Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="col-span-5 space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold">8.4 hrs</p>
                    <p className="text-sm text-muted-foreground">Median time-to-fix</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-volunteer-green" />
                  <div>
                    <p className="text-2xl font-bold">124 hrs</p>
                    <p className="text-sm text-muted-foreground">Volunteer hours (month)</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <Droplets className="w-8 h-8 text-leak-blue" />
                  <div>
                    <p className="text-2xl font-bold">3,200 L</p>
                    <p className="text-sm text-muted-foreground">Estimated water saved</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mini Map */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Campus Overview</h3>
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center relative">
                <span className="text-sm text-muted-foreground">Campus Map</span>
                <div className="absolute top-4 left-4 w-3 h-3 bg-destructive rounded-full" />
                <div className="absolute top-1/2 right-6 w-3 h-3 bg-leak-blue rounded-full" />
                <div className="absolute bottom-6 left-1/3 w-3 h-3 bg-volunteer-green rounded-full" />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden p-4 space-y-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <p className="text-xl font-bold">8.4 hrs</p>
            <p className="text-xs text-muted-foreground">Time-to-fix</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-xl font-bold">124</p>
            <p className="text-xs text-muted-foreground">Vol. hours</p>
          </Card>
        </div>

        {/* Reports List */}
        <Card>
          <div className="p-4 border-b">
            <h2 className="font-semibold">Recent Reports</h2>
          </div>
          <div className="space-y-3 p-4">
            {reports.slice(0, 3).map((report) => (
              <div key={report.id} className="flex items-center gap-3 pb-3 border-b last:border-b-0">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{report.title}</h3>
                  <p className="text-xs text-muted-foreground">{report.location}</p>
                </div>
                <Badge variant="outline" className="text-xs">{report.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};