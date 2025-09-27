import { BusInfo } from "@/components/BusCard";

export const mockBuses: BusInfo[] = [
  {
    id: "B101",
    route: "Downtown - Airport",
    departure: "Central Station",
    arrival: "International Airport",
    departureTime: "08:30",
    arrivalTime: "09:15",
    delay: 0,
    status: "on-time",
    capacity: 45,
    occupancy: 32,
  },
  {
    id: "B205",
    route: "University - Mall",
    departure: "University Campus",
    arrival: "Shopping Mall",
    departureTime: "09:00",
    arrivalTime: "09:25",
    delay: 5,
    status: "delayed",
    capacity: 40,
    occupancy: 38,
  },
  {
    id: "B310",
    route: "Hospital - Stadium",
    departure: "General Hospital",
    arrival: "City Stadium",
    departureTime: "10:15",
    arrivalTime: "10:45",
    delay: -3,
    status: "early",
    capacity: 50,
    occupancy: 15,
  },
  {
    id: "B442",
    route: "Beach - City Center",
    departure: "Sunset Beach",
    arrival: "City Center",
    departureTime: "11:30",
    arrivalTime: "12:00",
    delay: 12,
    status: "delayed",
    capacity: 45,
    occupancy: 41,
  },
  {
    id: "B555",
    route: "Airport - Downtown",
    departure: "International Airport",
    arrival: "Central Station",
    departureTime: "14:20",
    arrivalTime: "15:05",
    delay: 0,
    status: "on-time",
    capacity: 45,
    occupancy: 23,
  },
];

export const searchBusByRoute = (departure: string, arrival: string) => {
  return mockBuses.filter(
    bus => 
      bus.departure.toLowerCase().includes(departure.toLowerCase()) &&
      bus.arrival.toLowerCase().includes(arrival.toLowerCase())
  );
};

export const searchBusById = (id: string) => {
  return mockBuses.find(bus => bus.id.toLowerCase().includes(id.toLowerCase()));
};