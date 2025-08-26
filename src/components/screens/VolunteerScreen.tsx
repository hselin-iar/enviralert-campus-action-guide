import { Clock, MapPin, Users, QrCode, ArrowLeft, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import volunteerEvent from '@/assets/volunteer-event.jpg';

interface VolunteerScreenProps {
  onNavigate: (screen: string) => void;
}

export const VolunteerScreen = ({ onNavigate }: VolunteerScreenProps) => {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button size="sm" variant="ghost" onClick={() => onNavigate('map')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold">Volunteer Drive</h1>
      </div>

      {/* Event Card */}
      <Card className="p-4 mb-6">
        <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
          <img 
            src={volunteerEvent} 
            alt="Volunteer cleanup event" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-3">
          <h2 className="text-lg font-bold">Weekly Clean & Green</h2>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Sun 8AM • 2 hrs</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Main Gate • Campus Center</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm">12/20 spots filled</span>
            </div>
            <Badge className="bg-volunteer-green">+20 pts/hr</Badge>
          </div>
        </div>
      </Card>

      {/* Team Bonus */}
      <Card className="p-4 mb-6 border-secondary bg-secondary/20">
        <div className="flex items-center gap-3 mb-2">
          <Share className="w-5 h-5 text-secondary-foreground" />
          <h3 className="font-medium">Group Bonus Available</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Invite friends and earn +10% bonus if 3 or more friends join
        </p>
        <Button variant="outline" size="sm" className="w-full">
          Invite Friends
        </Button>
      </Card>

      {/* Auto Team Assignment */}
      <Card className="p-4 mb-6">
        <h3 className="font-medium mb-3">Auto Team Assignment</h3>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Team Alpha - Zone 1</p>
            <p className="text-xs text-muted-foreground">Main Campus Quad</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Teams are automatically assigned based on location and capacity
        </p>
      </Card>

      {/* QR Check-in */}
      <Card className="p-4 mb-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
            <QrCode className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="font-medium mb-1">QR Check-in</h3>
          <p className="text-sm text-muted-foreground">
            Scan QR at Main Gate to check in
          </p>
        </div>
      </Card>

      {/* Join Button */}
      <Button 
        className="w-full bg-volunteer-green hover:bg-volunteer-green/90 h-12 text-lg font-medium"
        onClick={() => onNavigate('rewards')}
      >
        Join • +20 pts/hr
      </Button>
    </div>
  );
};