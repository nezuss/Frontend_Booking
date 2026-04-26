import React, { createContext, useContext, useState } from "react";

// ? Interfaces
import type { Room } from "@/pages/rooms.p";

// ? Api
import { searchAdvanced } from "@/api/search";

interface SearchContextType {
  rooms?: Room[];
  checkIn: Date;
  checkOut: Date;
  guests: number;
  search?: string;
  city?: string;
  rating?: number;
  freeParking?: boolean;
  wellnessCenter?: boolean;
  error: string;
  setRooms?: (rooms: Room[]) => void;
  setCheckIn: (checkIn: Date) => void;
  setCheckOut: (checkOut: Date) => void;
  setGuests: (guests: number) => void;
  setSearch?: (search: string) => void;
  setCity?: (city: string) => void;
  setRating?: (rating: number) => void;
  setFreeParking?: (freeParking: boolean) => void;
  setWellnessCenter?: (wellnessCenter: boolean) => void;
  setError?: (error: string) => void;
  findRooms?: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [freeParking, setFreeParking] = useState<boolean>(false);
  const [wellnessCenter, setWellnessCenter] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const findRooms = async () => {
    try {
      if (!guests || !checkIn || !checkOut) {
        setError("Please fill in all fields");
        return;
      }

      if (guests && guests < 1) {
        setError("Please enter a valid number of guests");
        return;
      }

      const result = await searchAdvanced({
        checkIn,
        checkOut,
        guests,
        search,
        city,
        rating,
        freeParking,
        wellnessCenter,
      });

      if (result.success) {
        setRooms(result.content?.rooms);
        setError("");
      } else {
        setError(result.content.message);
      }
    } catch (err) {
      setError(err?.message);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        rooms,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        guests,
        setGuests,
        search,
        setSearch,
        city,
        setRooms,
        setCity,
        rating,
        setRating,
        freeParking,
        setFreeParking,
        wellnessCenter,
        setWellnessCenter,
        setError,
        error,
        findRooms,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
