import { Camera, MapPin, ArrowLeft, Navigation, Toilet, Users } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pt-2">
        <Button size="sm" variant="ghost" onClick={() => onNavigate('map')} className="bg-glass-bg backdrop-blur-md border border-glass-border text-white">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold text-white">Report Issue</h1>
      </div>

      {/* Photo Section */}
      <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-4 mb-6 shadow-glass">
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded-lg overflow-hidden bg-glass-bg border border-glass-border flex-shrink-0">
            <img 
              src={overflowReport} 
              alt="Overflow issue" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium text-white">Hostel B — Mess Gate</span>
            </div>
            <p className="text-white/60 text-sm mb-2">Auto-detected location</p>
            <p className="text-white/60 text-xs mb-3">
              <Users className="w-3 h-3 inline mr-1" />
              12 reports at the same location this week
            </p>
            <Button size="sm" variant="outline" className="w-full bg-glass-bg border-glass-border text-white hover:bg-glass-border">
              <Camera className="w-4 h-4 mr-2" />
              Retake Photo
            </Button>
          </div>
        </div>
      </div>

      {/* Report Type */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-white">Report Type</h3>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-destructive/80 hover:bg-destructive text-white border-0">
            Dustbin Overflow
          </Badge>
          <Badge variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
            Leak
          </Badge>
          <Badge variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
            Cleanliness
          </Badge>
          <Badge variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
            Maintenance
          </Badge>
        </div>
      </div>

      {/* Severity */}
      <div className="mb-6">
        <h3 className="font-medium mb-3 text-white">Severity</h3>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
            Low
          </Badge>
          <Badge variant="outline" className="bg-glass-bg border-glass-border text-white hover:bg-glass-border">
            Medium
          </Badge>
          <Badge className="bg-destructive/80 hover:bg-destructive text-white border-0">
            High
          </Badge>
        </div>
      </div>

      {/* Notes */}
      <div className="mb-8">
        <h3 className="font-medium mb-3 text-white">Additional Notes</h3>
        <Textarea 
          placeholder="Describe the issue in detail..."
          className="min-h-20 bg-glass-bg backdrop-blur-md border-glass-border text-white placeholder:text-white/50 resize-none"
          defaultValue="Dustbin overflowing near mess entrance, causing hygiene issues and blocking pedestrian path."
        />
      </div>

      {/* Submit Button */}
      <div className="space-y-3 mb-20">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-medium text-white border-0"
          onClick={() => onNavigate('closure')}
        >
          Report • +5 pts
        </Button>
        <p className="text-xs text-center text-white/60">
          Verified fixes grant +50 pts
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-4 shadow-glass">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-glass-bg backdrop-blur-md border border-glass-border text-white flex-col h-12 px-3"
              >
                <Navigation className="w-4 h-4" />
                <span className="text-xs">Dustbin</span>
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-glass-bg backdrop-blur-md border border-glass-border text-white flex-col h-12 px-3"
              >
                <Toilet className="w-4 h-4" />
                <span className="text-xs">Washroom</span>
              </Button>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 rounded-full w-16 h-16 shadow-lg"
            >
              <Camera className="w-8 h-8" />
            </Button>

            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-glass-bg backdrop-blur-md border border-glass-border text-white flex-col h-12 px-3"
                onClick={() => onNavigate('marketplace')}
              >
                <span className="text-lg">🏪</span>
                <span className="text-xs">Market</span>
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-glass-bg backdrop-blur-md border border-glass-border text-white flex-col h-12 px-3"
                onClick={() => onNavigate('rewards')}
              >
                <span className="text-lg">🏆</span>
                <span className="text-xs">Rewards</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};