import { MapPin, Filter, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import campusMapBg from '@/assets/campus-map-bg.jpg';

interface MapHeroProps {
  onNavigate: (screen: string) => void;
}

export const MapHero = ({ onNavigate }: MapHeroProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${campusMapBg})` }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">E</span>
          </div>
          <h1 className="text-xl font-bold text-white">Enviralert</h1>
        </div>
        <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      {/* Map Pins */}
      <div className="absolute top-1/3 left-1/4 z-20">
        <div className="relative">
          <MapPin className="w-8 h-8 text-destructive fill-destructive" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
            Overflow
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/3 z-20">
        <div className="relative">
          <MapPin className="w-8 h-8 text-leak-blue fill-leak-blue" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-leak-blue text-leak-blue-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
            Leak
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/3 z-20">
        <div className="relative">
          <Users className="w-8 h-8 text-volunteer-green fill-volunteer-green" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-volunteer-green text-volunteer-green-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
            Volunteer
          </div>
        </div>
      </div>

      <div className="absolute top-2/3 right-1/4 z-20">
        <div className="relative">
          <DollarSign className="w-8 h-8 text-donation-orange fill-donation-orange" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-donation-orange text-donation-orange-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
            Donation
          </div>
        </div>
      </div>

      {/* Heatmap Blobs */}
      <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-destructive/30 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-leak-blue/30 rounded-full blur-xl" />
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-volunteer-green/30 rounded-full blur-xl" />

      {/* Legend */}
      <div className="absolute top-24 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h3 className="text-sm font-semibold mb-2 text-foreground">Campus Hotspots</h3>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive rounded-full" />
            <span>Overflow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-leak-blue rounded-full" />
            <span>Leak</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-volunteer-green rounded-full" />
            <span>Volunteer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-donation-orange rounded-full" />
            <span>Donation</span>
          </div>
        </div>
      </div>

      {/* Bottom KPI Card */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <Card className="bg-white/95 backdrop-blur-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">3 active reports</span>
              </div>
              <p className="text-xs text-muted-foreground">Updated 12m ago • Hostel B, Mess Gate</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => onNavigate('report')}
              className="bg-primary hover:bg-primary/90"
            >
              Open Map →
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};