import { ArrowLeft, Coffee, Printer, TreePine, Award, Droplets, Trash2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RewardsScreenProps {
  onNavigate: (screen: string) => void;
}

export const RewardsScreen = ({ onNavigate }: RewardsScreenProps) => {
  const rewards = [
    {
      title: "Free Coffee",
      points: 500,
      icon: Coffee,
      available: true
    },
    {
      title: "100 Prints",
      points: 1500,
      icon: Printer,
      available: true
    },
    {
      title: "Plant a Tree",
      points: 2000,
      icon: TreePine,
      available: false
    }
  ];

  const badges = [
    {
      title: "Clean Warrior",
      icon: Award,
      earned: true,
      description: "Reported 10+ issues"
    },
    {
      title: "Water Saver",
      icon: Droplets,
      earned: true,
      description: "Helped save 1000L water"
    },
    {
      title: "Green Donor",
      icon: TreePine,
      earned: false,
      description: "Donated 50+ items"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button size="sm" variant="ghost" onClick={() => onNavigate('map')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold">Rewards & Impact</h1>
      </div>

      {/* Points Display */}
      <Card className="p-6 mb-6 text-center bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-primary-foreground">1,520</span>
        </div>
        <h2 className="text-lg font-bold mb-2">Total Points</h2>
        <p className="text-sm text-muted-foreground">
          You're 380 pts away from free coffee
        </p>
      </Card>

      {/* Redemption Options */}
      <div className="mb-6">
        <h3 className="font-medium mb-4">Redeem Points</h3>
        <div className="space-y-3">
          {rewards.map((reward, index) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  reward.available ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <reward.icon className={`w-6 h-6 ${
                    reward.available ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium">{reward.title}</h4>
                  <p className="text-sm text-muted-foreground">{reward.points} pts</p>
                </div>
                
                <Button 
                  size="sm" 
                  variant={reward.available ? "default" : "outline"}
                  disabled={!reward.available}
                  className={reward.available ? "bg-primary hover:bg-primary/90" : ""}
                >
                  {reward.available ? "Redeem" : "Locked"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Impact KPIs */}
      <Card className="p-4 mb-6">
        <h3 className="font-medium mb-4">Your Impact</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center mb-2">
              <Droplets className="w-5 h-5 text-leak-blue" />
            </div>
            <p className="text-lg font-bold">3,200 L</p>
            <p className="text-xs text-muted-foreground">Water saved</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <Trash2 className="w-5 h-5 text-destructive" />
            </div>
            <p className="text-lg font-bold">120 kg</p>
            <p className="text-xs text-muted-foreground">Waste diverted</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-volunteer-green" />
            </div>
            <p className="text-lg font-bold">124 hrs</p>
            <p className="text-xs text-muted-foreground">Volunteer hours</p>
          </div>
        </div>
      </Card>

      {/* Badges */}
      <div className="mb-6">
        <h3 className="font-medium mb-4">Badges Collection</h3>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge, index) => (
            <Card key={index} className={`p-3 text-center ${
              badge.earned ? 'border-primary bg-primary/5' : 'border-muted bg-muted/20'
            }`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                badge.earned ? 'bg-primary/20' : 'bg-muted'
              }`}>
                <badge.icon className={`w-5 h-5 ${
                  badge.earned ? 'text-primary' : 'text-muted-foreground'
                }`} />
              </div>
              <h4 className="text-xs font-medium mb-1">{badge.title}</h4>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
              {badge.earned && (
                <Badge className="mt-2 bg-primary text-xs">Earned</Badge>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};