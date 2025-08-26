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
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Navigation for demo purposes */}
      <div className="fixed top-4 right-4 z-50 flex flex-wrap gap-2 p-3 bg-white rounded-lg shadow-lg border max-w-md">
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
      
      {/* Mobile Frame Container */}
      {currentScreen === 'admin' ? (
        // Admin dashboard full width
        <div className="w-full">
          {renderScreen()}
        </div>
      ) : (
        // Mobile screens in phone frame
        <div className="flex justify-center items-start pt-8">
          <div className="relative">
            {/* Phone Frame */}
            <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-11 bg-black/5 flex items-center justify-between px-6 text-sm font-medium z-50">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-black/30 rounded-sm">
                      <div className="w-3 h-1 bg-black/80 rounded-sm m-px"></div>
                    </div>
                  </div>
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full pt-11 overflow-hidden">
                  {renderScreen()}
                </div>
              </div>
            </div>
            
            {/* Screen Label */}
            <div className="text-center mt-4">
              <span className="inline-block px-3 py-1 bg-white rounded-full shadow text-sm font-medium">
                {currentScreen === 'map' && '01_Map_Hero.png'}
                {currentScreen === 'report' && '02_Report.png'}
                {currentScreen === 'closure' && '03_Report_Closure.png'}
                {currentScreen === 'volunteer' && '04_Volunteer.png'}
                {currentScreen === 'marketplace' && '05_Marketplace.png'}
                {currentScreen === 'rewards' && '06_Rewards.png'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};