export interface Car {
    id: string;
    brand: string;
    model: string;
    category: "SUV" | "Sedan" | "Hatchback" | "Luxury" | "Electric";
    pricePerDay: number;
    image: string;
    specs: {
        seats: number;
        transmission: "Automatic" | "Manual";
        fuel: "Petrol" | "Diesel" | "Electric" | "Hybrid";
        mileage: string; // e.g., "15 km/l" or "400 km range"
    };
    location: string;
    available: boolean;
}

export const cars: Car[] = [
    {
        id: "1",
        brand: "Toyota",
        model: "Camry",
        category: "Sedan",
        pricePerDay: 50,
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?auto=format&fit=crop&q=80&w=1000",
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuel: "Hybrid",
            mileage: "20 km/l",
        },
        location: "New York, NY",
        available: true,
    },
    {
        id: "2",
        brand: "Tesla",
        model: "Model 3",
        category: "Electric",
        pricePerDay: 80,
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000",
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuel: "Electric",
            mileage: "400 km range",
        },
        location: "San Francisco, CA",
        available: true,
    },
    {
        id: "3",
        brand: "BMW",
        model: "X5",
        category: "SUV",
        pricePerDay: 120,
        image: "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=80&w=1000",
        specs: {
            seats: 7,
            transmission: "Automatic",
            fuel: "Diesel",
            mileage: "12 km/l",
        },
        location: "Miami, FL",
        available: true,
    },
    {
        id: "4",
        brand: "Mercedes-Benz",
        model: "C-Class",
        category: "Luxury",
        pricePerDay: 100,
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuel: "Petrol",
            mileage: "14 km/l",
        },
        location: "Los Angeles, CA",
        available: true,
    },
    {
        id: "5",
        brand: "Honda",
        model: "Civic",
        category: "Sedan",
        pricePerDay: 45,
        image: "https://images.unsplash.com/photo-1606152421811-aa61169828cb?auto=format&fit=crop&q=80&w=1000",
        specs: {
            seats: 5,
            transmission: "Automatic",
            fuel: "Petrol",
            mileage: "16 km/l",
        },
        location: "Chicago, IL",
        available: true,
    },
    {
        id: "6",
        brand: "Ford",
        model: "Mustang",
        category: "Luxury",
        pricePerDay: 90,
        image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=1000",
        specs: {
            seats: 4,
            transmission: "Automatic",
            fuel: "Petrol",
            mileage: "10 km/l",
        },
        location: "Las Vegas, NV",
        available: true,
    },
];
