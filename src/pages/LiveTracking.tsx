import { useState, useEffect } from "react";
import { Clock, Wifi } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BusCard, BusInfo } from "@/components/BusCard";
import { mockBuses } from "@/data/mockBuses";

const LiveTracking = () => {
  const [buses, setBuses] = useState<BusInfo[]>(mockBuses);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBuses(prevBuses => 
        prevBuses.map(bus => ({
          ...bus,
          // Randomly adjust delays and occupancy to simulate real-time changes
          delay: bus.delay + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0),
          occupancy: Math.max(0, Math.min(bus.capacity, 
            bus.occupancy + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 2 : -1) : 0)
          )),
          status: bus.delay > 5 ? "delayed" : bus.delay < -2 ? "early" : "on-time" as any,
        }))
      );
      setLastUpdate(new Date());
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">Live Tracking</h1>
          <Badge className="bg-status-on-time text-white">
            <Wifi className="h-3 w-3 mr-1" />
            Live
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Real-time status of all buses in the system
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          Last updated: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>

      <div className="bg-gradient-status rounded-lg p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{buses.filter(b => b.status === 'on-time').length}</p>
            <p className="text-sm opacity-90">On Time</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{buses.filter(b => b.status === 'delayed').length}</p>
            <p className="text-sm opacity-90">Delayed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{buses.filter(b => b.status === 'early').length}</p>
            <p className="text-sm opacity-90">Early</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{buses.length}</p>
            <p className="text-sm opacity-90">Total Active</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">All Active Buses</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {buses.map((bus) => (
            <BusCard key={bus.id} bus={bus} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;