import { ArrowLeft, Book, Bike, Shirt, Laptop, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MarketplaceScreenProps {
  onNavigate: (screen: string) => void;
}

export const MarketplaceScreen = ({ onNavigate }: MarketplaceScreenProps) => {
  const items = [
    {
      id: 1,
      title: "Physics Textbook",
      type: "Donate",
      status: "Available",
      icon: Book,
      action: "Request pickup",
      description: "HC Verma Physics Vol 1 & 2"
    },
    {
      id: 2,
      title: "Bicycle",
      type: "Sell",
      status: "Listed",
      icon: Bike,
      action: "List item",
      description: "Hero Sprint, 2 years old"
    },
    {
      id: 3,
      title: "Clothes Donation",
      type: "Donate",
      status: "Pickup requested",
      icon: Shirt,
      action: "Track pickup",
      description: "Winter clothes bundle"
    },
    {
      id: 4,
      title: "Laptop Charger",
      type: "Recycle",
      status: "Available",
      icon: Laptop,
      action: "Schedule pickup",
      description: "HP 65W adapter"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Button size="sm" variant="ghost" onClick={() => onNavigate('map')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-xl font-bold">Marketplace</h1>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 mb-6">
        <Badge variant="default" className="bg-primary">Donate</Badge>
        <Badge variant="outline">Sell</Badge>
        <Badge variant="outline">Swap</Badge>
        <Badge variant="outline">Recycle</Badge>
      </div>

      {/* Info Card */}
      <Card className="p-4 mb-6 border-secondary bg-secondary/20">
        <div className="flex items-start gap-3">
          <Package className="w-5 h-5 text-secondary-foreground mt-0.5" />
          <div>
            <p className="text-sm font-medium mb-1">Easy Campus Logistics</p>
            <p className="text-xs text-muted-foreground">
              Schedule pickup with campus logistics or drop at Donation Point C
            </p>
          </div>
        </div>
      </Card>

      {/* Items Grid */}
      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <Badge 
                    variant={item.type === 'Donate' ? 'default' : 'outline'}
                    className={
                      item.type === 'Donate' ? 'bg-volunteer-green text-volunteer-green-foreground' :
                      item.type === 'Sell' ? 'bg-donation-orange text-donation-orange-foreground' :
                      'bg-leak-blue text-leak-blue-foreground'
                    }
                  >
                    {item.type}
                  </Badge>
                </div>
                
                <p className="text-xs text-muted-foreground mb-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={item.status === 'Available' ? 'border-primary text-primary' : ''}
                  >
                    {item.status}
                  </Badge>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-xs"
                  >
                    {item.action}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Item Button */}
      <div className="mt-8">
        <Button className="w-full bg-primary hover:bg-primary/90">
          + Add New Item
        </Button>
      </div>
    </div>
  );
};