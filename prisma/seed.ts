import { PrismaClient } from "../app/generated/prisma";
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import 'dotenv/config'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    console.log('Start seeding ...')

    // Cleanup existing data
    await prisma.booking.deleteMany()
    await prisma.car.deleteMany()
    await prisma.location.deleteMany()

    // Create Locations
    const heathrow = await prisma.location.create({
        data: {
            name: "London Heathrow T5",
            slug: "london-heathrow-t5",
            address: "Terminal 5, Hounslow",
            city: "London",
            postcode: "TW6 2GA",
            latitude: 51.4700,
            longitude: -0.4543
        }
    })

    const manchester = await prisma.location.create({
        data: {
            name: "Manchester Airport",
            slug: "manchester-airport",
            address: "Manchester M90 1QX",
            city: "Manchester",
            postcode: "M90 1QX",
            latitude: 53.3653,
            longitude: -2.2728
        }
    })

    const gatwick = await prisma.location.create({
        data: {
            name: "London Gatwick",
            slug: "london-gatwick",
            address: "Horley, Gatwick",
            city: "London",
            postcode: "RH6 0NP",
            latitude: 51.1537,
            longitude: -0.1821
        }
    })

    console.log('Created locations:', [heathrow.name, manchester.name, gatwick.name])

    // Create Cars
    await prisma.car.createMany({
        data: [
            {
                brand: "Tesla",
                model: "Model 3",
                category: "Electric",
                pricePerDay: 85,
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000",
                description: "Experience the future of driving with the Tesla Model 3. Autopilot included.",
                locationId: heathrow.id,
                transmission: "Automatic",
                fuelType: "Electric",
                seats: 5,
                mileage: "350 miles range",
                available: true
            },
            {
                brand: "BMW",
                model: "X5",
                category: "SUV",
                pricePerDay: 120,
                image: "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=80&w=1000",
                description: "Luxury SUV perfect for family trips and comfort.",
                locationId: heathrow.id,
                transmission: "Automatic",
                fuelType: "Diesel",
                seats: 7,
                mileage: "40 mpg",
                available: true
            },
            {
                brand: "Mercedes",
                model: "C-Class",
                category: "Luxury",
                pricePerDay: 95,
                image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000",
                description: "Elegant and powerful, the C-Class defines modern luxury.",
                locationId: manchester.id,
                transmission: "Automatic",
                fuelType: "Petrol",
                seats: 5,
                mileage: "35 mpg",
                available: true
            },
            {
                brand: "Ford",
                model: "Focus",
                category: "Hatchback",
                pricePerDay: 45,
                image: "https://images.unsplash.com/photo-1606152421811-aa61169828cb?auto=format&fit=crop&q=80&w=1000",
                description: "Reliable and economical hatchback for city driving.",
                locationId: manchester.id,
                transmission: "Manual",
                fuelType: "Petrol",
                seats: 5,
                mileage: "50 mpg",
                available: true
            },
            {
                brand: "Audi",
                model: "Q7",
                category: "SUV",
                pricePerDay: 110,
                image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1000",
                description: "Spacious luxury SUV with advanced technology.",
                locationId: gatwick.id,
                transmission: "Automatic",
                fuelType: "Diesel",
                seats: 7,
                mileage: "38 mpg",
                available: true
            }
        ]
    })

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
