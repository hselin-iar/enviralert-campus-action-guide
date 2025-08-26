import { useState } from 'react';
import { MapHero } from './screens/MapHero';
import { ReportScreen } from './screens/ReportScreen';
import { ReportClosure } from './screens/ReportClosure';
import { VolunteerScreen } from './screens/VolunteerScreen';
import { MarketplaceScreen } from './screens/MarketplaceScreen';
import { RewardsScreen } from './screens/RewardsScreen';
import { AdminDashboard } from './screens/AdminDashboard';
import { Button } from '@/components/ui/button';

type Screen = 'map' | 'report' | 'closure' | 'volunteer' | 'marketplace' | 'rewards' | 'admin';

export const EnviralertApp = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('map');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'map':
        return <MapHero onNavigate={handleNavigate} />;
      case 'report':
        return <ReportScreen onNavigate={handleNavigate} />;
      case 'closure':
        return <ReportClosure onNavigate={handleNavigate} />;
      case 'volunteer':
        return <VolunteerScreen onNavigate={handleNavigate} />;
      case 'marketplace':
        return <MarketplaceScreen onNavigate={handleNavigate} />;
      case 'rewards':
        return <RewardsScreen onNavigate={handleNavigate} />;
      case 'admin':
        return <AdminDashboard onNavigate={handleNavigate} />;
      default:
        return <MapHero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation for demo purposes */}
      <div className="fixed top-4 right-4 z-50 flex flex-wrap gap-2 p-3 bg-card rounded-lg shadow-lg border max-w-md">
        <Button 
          size="sm" 
          variant={currentScreen === 'map' ? 'default' : 'outline'} 
          onClick={() => setCurrentScreen('map')}
        >
          Map
        </Button>
        <Button 
          size="sm" 
          variant={currentScreen === 'report' ? 'default' : 'outline'} 
          onClick={() => setCurrentScreen('report')}
        >
          Report
        </Button>
        <Button 
          size="sm" 
          variant={currentScreen === 'closure' ? 'default' : 'outline'} 
          onClick={() => setCurrentScreen('closure')}
        >
          Closure
        </Button>
        <Button 
          size="sm" 
          variant={currentScreen === 'volunteer' ? 'default' : 'outline'} 
          onClick={() => setCurrentScreen('volunteer')}
        >
          Volunteer
        </Button>
        <Button 
          size="sm" 
          variant={currentScreen === 'marketplace' ? 'default' : 'outline'} 
          onClick={() => setCurrentScreen('marketplace')}
        >
          Market
        </Button>
        <Button 
          size="sm" 
          variant={currentScreen === 'rewards' ? 'default' : 'outline'} 
          onClick={() => setCurrentScreen('rewards')}
        >
          Rewards
        </Button>
        <Button 
          size="sm" 
          variant={currentScreen === 'admin' ? 'default' : 'outline'} 
          onClick={() => setCurrentScreen('admin')}
        >
          Admin
        </Button>
      </div>
      
      {renderScreen()}
    </div>
  );
};