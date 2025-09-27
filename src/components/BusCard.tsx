import { Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BusInfo {
  id: string;
  route: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  delay: number; // minutes
  status: "on-time" | "delayed" | "early" | "cancelled";
  capacity: number;
  occupancy: number;
}

interface BusCardProps {
  bus: BusInfo;
}

export function BusCard({ bus }: BusCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-time": return "bg-status-on-time";
      case "delayed": return "bg-status-delayed";
      case "early": return "bg-status-early";
      case "cancelled": return "bg-status-cancelled";
      default: return "bg-muted";
    }
  };

  const getStatusText = (status: string, delay: number) => {
    switch (status) {
      case "on-time": return "On Time";
      case "delayed": return `${delay}m Delayed`;
      case "early": return `${Math.abs(delay)}m Early`;
      case "cancelled": return "Cancelled";
      default: return "Unknown";
    }
  };

  const occupancyPercentage = (bus.occupancy / bus.capacity) * 100;

  return (
    <Card className="shadow-bus-card hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">Bus {bus.id}</CardTitle>
          <Badge className={`${getStatusColor(bus.status)} text-white`}>
            {getStatusText(bus.status, bus.delay)}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{bus.route}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{bus.departure}</span>
            <Clock className="h-4 w-4 text-muted-foreground ml-auto" />
            <span className="text-sm">{bus.departureTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{bus.arrival}</span>
            <Clock className="h-4 w-4 text-muted-foreground ml-auto" />
            <span className="text-sm">{bus.arrivalTime}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <div className="flex justify-between text-sm">
              <span>Occupancy</span>
              <span>{bus.occupancy}/{bus.capacity}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-1">
              <div 
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${Math.min(occupancyPercentage, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}