import { CheckCircle, ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import overflowReport from '@/assets/overflow-report.jpg';
import cleanupAfter from '@/assets/cleanup-after.jpg';

interface ReportClosureProps {
  onNavigate: (screen: string) => void;
}

export const ReportClosure = ({ onNavigate }: ReportClosureProps) => {
  return (
    <div className="min-h-screen bg-background p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button size="sm" variant="ghost" onClick={() => onNavigate('map')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold">Report Details</h1>
      </div>

      {/* Before/After Images */}
      <Card className="p-4 mb-6">
        <h3 className="font-medium mb-3">Progress Photos</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Before</p>
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img 
                src={overflowReport} 
                alt="Before cleanup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">After</p>
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img 
                src={cleanupAfter} 
                alt="After cleanup" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Timeline */}
      <Card className="p-4 mb-6">
        <h3 className="font-medium mb-4">Timeline</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">Submitted</p>
              <p className="text-xs text-muted-foreground">Today, 8:45 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">Assigned</p>
              <p className="text-xs text-muted-foreground">Today, 9:12 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">In Progress</p>
              <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-3 h-3 text-primary fill-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Fixed</p>
              <p className="text-xs text-muted-foreground">Today, 2:15 PM</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Reporter Info */}
      <Card className="p-4 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <User className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm">Reported by Rahul Kumar</span>
        </div>
        <div className="text-xs text-muted-foreground">
          Student ID: 2021CSE045 • Hostel B Resident
        </div>
      </Card>

      {/* Verification */}
      <Card className="p-4 mb-6 border-primary bg-primary/5">
        <div className="flex items-center gap-3 mb-3">
          <Badge className="bg-primary">
            <CheckCircle className="w-3 h-3 mr-1" />
            Verified
          </Badge>
        </div>
        <p className="text-sm font-medium mb-1">Verified by Facilities • Points credited: +50</p>
        <p className="text-xs text-muted-foreground">
          Issue resolved successfully. Dustbin replaced and area cleaned.
        </p>
      </Card>

      {/* Action Button */}
      <Button 
        className="w-full bg-primary hover:bg-primary/90"
        onClick={() => onNavigate('rewards')}
      >
        View Points & Rewards
      </Button>
    </div>
  );
};