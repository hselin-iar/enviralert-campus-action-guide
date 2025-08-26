import { MapPin, Filter, Camera, Navigation, Toilet, User, Bell, Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import campusMapBg from '@/assets/campus-map-bg.jpg';
import overflowReport from '@/assets/overflow-report.jpg';
import cleanupAfter from '@/assets/cleanup-after.jpg';

interface MapHeroProps {
  onNavigate: (screen: string) => void;
}

export const MapHero = ({ onNavigate }: MapHeroProps) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Map Background - 70% height */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${campusMapBg})`,
          height: '70%'
        }}
      >
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40" />
      </div>

      {/* Top Header */}
      <div className="relative z-30 flex items-center justify-between p-4 pt-6">
        {/* Left - Menu */}
        <Button size="sm" variant="ghost" className="bg-glass-bg backdrop-blur-md border border-glass-border text-white">
          <Menu className="w-5 h-5" />
        </Button>
        
        {/* Center - College Name */}
        <h1 className="text-lg font-bold text-white">AIT Pune</h1>
        
        {/* Right - Profile & Bell */}
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="bg-glass-bg backdrop-blur-md border border-glass-border text-white">
            <Bell className="w-5 h-5" />
          </Button>
          <Button size="sm" variant="ghost" className="bg-glass-bg backdrop-blur-md border border-glass-border text-white">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Notification Popup */}
      <div className="absolute top-20 right-4 z-30 max-w-xs">
        <div className="bg-glass-bg backdrop-blur-md border border-glass-border rounded-2xl p-4 shadow-glass">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-primary rounded-full mt-2 animate-pulse" />
            <div className="flex-1">
              <p className="text-white text-sm font-medium">Your friend Nilesh just raised an issue, go support!</p>
              <Button size="sm" variant="ghost" className="text-primary text-xs p-0 h-auto mt-1">
                View →
              </Button>
            </div>
            <Button size="sm" variant="ghost" className="text-white/60 p-0 h-auto">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Map Pins */}
      <div className="absolute top-1/3 left-1/4 z-20">
        <div className="relative">
          <MapPin className="w-8 h-8 text-destructive fill-destructive drop-shadow-lg" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
            Overflow
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/3 z-20">
        <div className="relative">
          <MapPin className="w-8 h-8 text-leak-blue fill-leak-blue drop-shadow-lg" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-leak-blue text-leak-blue-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
            Leak
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/3 z-20">
        <div className="relative">
          <Navigation className="w-8 h-8 text-volunteer-green fill-volunteer-green drop-shadow-lg" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-volunteer-green text-volunteer-green-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
            Volunteer
          </div>
        </div>
      </div>

      {/* Heatmap Blobs */}
      <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-destructive/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-leak-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-volunteer-green/20 rounded-full blur-3xl" />

      {/* Bottom Glass Panel - Starts at 70% from top */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 z-20">
        <div className="h-full bg-glass-bg backdrop-blur-md border-t border-glass-border rounded-t-3xl p-6 shadow-glass">
          {/* Report Timeline */}
          <div className="mb-6">
            <h3 className="text-white text-lg font-semibold mb-4">Recent Reports</h3>
            <div className="space-y-3">
              {/* Timeline Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-glass-bg border border-glass-border">
                  <img src={overflowReport} alt="Report" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">Dustbin Overflow</p>
                      <p className="text-white/60 text-xs">Hostel B • In Progress</p>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      +5 pts
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-glass-bg border border-glass-border">
                  <img src={cleanupAfter} alt="Report" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">Cleanup Complete</p>
                      <p className="text-white/60 text-xs">Library • Verified</p>
                    </div>
                    <Badge className="bg-volunteer-green/20 text-volunteer-green border-volunteer-green/30 text-xs">
                      +50 pts
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between">
            {/* Left side navigation */}
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="ghost" 
                className="bg-glass-bg backdrop-blur-md border border-glass-border text-white flex-col h-12 px-3"
                onClick={() => onNavigate('volunteer')}
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

            {/* Center Camera Button */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 rounded-full w-16 h-16 shadow-lg"
              onClick={() => onNavigate('report')}
            >
              <Camera className="w-8 h-8" />
            </Button>

            {/* Right side navigation */}
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