// src/lib/testPrisma.ts
import prisma from './db';

async function testPrisma() {
  try {
    const vehicles = await prisma.vehicle.findMany();
    console.log('Vehicles:', vehicles);
  } catch (error) {
    console.error('Error with Prisma:', error);
  }
}

testPrisma();
