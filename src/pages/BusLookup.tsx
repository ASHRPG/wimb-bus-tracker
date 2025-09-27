import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BusCard, BusInfo } from "@/components/BusCard";
import { searchBusById } from "@/data/mockBuses";

const BusLookup = () => {
  const [busId, setBusId] = useState("");
  const [searchResult, setSearchResult] = useState<BusInfo | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (busId.trim()) {
      const result = searchBusById(busId);
      setSearchResult(result || null);
      setHasSearched(true);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Bus Lookup</h1>
        <p className="text-muted-foreground">
          Search for a specific bus by its ID to see real-time status
        </p>
      </div>

      <div className="bg-gradient-primary rounded-lg p-6 text-white">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Enter Bus ID</h2>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Bus ID (e.g., B101, B205)"
                value={busId}
                onChange={(e) => setBusId(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
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
            {searchResult 
              ? `Bus ${searchResult.id} Details`
              : "Bus Not Found"
            }
          </h3>
          
          {!searchResult ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>No bus found with ID "{busId}".</p>
              <p className="text-sm mt-2">Please check the bus ID and try again.</p>
              <p className="text-sm mt-1">Example IDs: B101, B205, B310, B442, B555</p>
            </div>
          ) : (
            <div className="max-w-md">
              <BusCard bus={searchResult} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BusLookup;