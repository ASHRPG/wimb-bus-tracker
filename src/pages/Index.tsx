import { Link } from "react-router-dom";
import { Bus, Search, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Bus className="h-12 w-12 text-primary" />
          <h1 className="text-5xl font-bold">WIMB</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Where Is My Bus - Your real-time bus tracking companion. 
          Never miss your bus again with live status updates and route planning.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        <Card className="shadow-bus-card hover:shadow-lg transition-all hover:scale-105 active:scale-95">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Route Search
            </CardTitle>
            <CardDescription>
              Find buses between your departure and arrival locations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/route-search">
              <Button className="w-full">
                Search Routes
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-bus-card hover:shadow-lg transition-all hover:scale-105 active:scale-95">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Bus Lookup
            </CardTitle>
            <CardDescription>
              Search for a specific bus by its ID to see real-time status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/bus-lookup">
              <Button className="w-full" variant="outline">
                Lookup Bus
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="shadow-bus-card hover:shadow-lg transition-all hover:scale-105 active:scale-95">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Live Tracking
            </CardTitle>
            <CardDescription>
              View real-time status of all buses in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/live-tracking">
              <Button className="w-full" variant="secondary">
                Live Status
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-primary rounded-lg p-8 text-white max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose WIMB?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Real-Time Updates</h3>
            <p className="text-white/90">Get live delays, arrivals, and route changes</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Smart Search</h3>
            <p className="text-white/90">Find buses by route or ID with intelligent matching</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Occupancy Info</h3>
            <p className="text-white/90">See how crowded buses are before boarding</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Status Alerts</h3>
            <p className="text-white/90">Color-coded status indicators for quick understanding</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
