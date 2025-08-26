import { Camera, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import overflowReport from '@/assets/overflow-report.jpg';

interface ReportScreenProps {
  onNavigate: (screen: string) => void;
}

export const ReportScreen = ({ onNavigate }: ReportScreenProps) => {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button size="sm" variant="ghost" onClick={() => onNavigate('map')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold">Report Issue</h1>
      </div>

      {/* Photo Section */}
      <Card className="p-4 mb-6">
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
            <img 
              src={overflowReport} 
              alt="Overflow issue" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Hostel B — Mess Gate</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Auto-detected location</p>
            <Button size="sm" variant="outline" className="w-full">
              <Camera className="w-4 h-4 mr-2" />
              Retake Photo
            </Button>
          </div>
        </div>
      </Card>

      {/* Report Type */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Report Type</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default" className="bg-destructive hover:bg-destructive/90">
            Dustbin Overflow
          </Badge>
          <Badge variant="outline">Leak</Badge>
          <Badge variant="outline">Cleanliness</Badge>
          <Badge variant="outline">Maintenance</Badge>
        </div>
      </div>

      {/* Severity */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Severity</h3>
        <div className="flex gap-2">
          <Badge variant="outline">Low</Badge>
          <Badge variant="outline">Medium</Badge>
          <Badge variant="default" className="bg-destructive hover:bg-destructive/90">
            High
          </Badge>
        </div>
      </div>

      {/* Notes */}
      <div className="mb-8">
        <h3 className="font-medium mb-3">Additional Notes</h3>
        <Textarea 
          placeholder="Describe the issue in detail..."
          className="min-h-20"
          defaultValue="Dustbin overflowing near mess entrance, causing hygiene issues and blocking pedestrian path."
        />
      </div>

      {/* Submit Button */}
      <div className="space-y-3">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-medium"
          onClick={() => onNavigate('closure')}
        >
          Report • +5 pts
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Verified fixes grant +50 pts
        </p>
      </div>
    </div>
  );
};