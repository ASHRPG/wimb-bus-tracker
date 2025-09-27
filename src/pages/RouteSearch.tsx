import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BusCard, BusInfo } from "@/components/BusCard";
import { searchBusByRoute } from "@/data/mockBuses";

const RouteSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [searchResults, setSearchResults] = useState<BusInfo[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (departure.trim() && arrival.trim()) {
      const results = searchBusByRoute(departure, arrival);
      setSearchResults(results);
      setHasSearched(true);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Route Search</h1>
        <p className="text-muted-foreground">
          Find buses between your departure and arrival locations
        </p>
      </div>

      <div className="bg-gradient-primary rounded-lg p-6 text-white">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Search Bus Routes</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="From (e.g., Central Station)"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
            
            <ArrowRight className="h-5 w-5 mx-2 self-center text-white/70 hidden sm:block" />
            
            <div className="flex-1">
              <Input
                placeholder="To (e.g., Airport)"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
            
            <Button 
              onClick={handleSearch}
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {hasSearched && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            {searchResults.length > 0 
              ? `Found ${searchResults.length} bus(es)`
              : "No buses found"
            }
          </h3>
          
          {searchResults.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No buses found for this route.</p>
              <p className="text-sm mt-2">Try different locations or check spelling.</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((bus) => (
                <BusCard key={bus.id} bus={bus} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RouteSearch;