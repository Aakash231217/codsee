import { PrismaClient } from "@prisma/client";
import { env } from "~/env";

const createPrismaClient = () => {
  const client = new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
  
  // Add connection verification
  client.$connect()
    .then(() => console.log("Database connection established"))
    .catch(e => console.error("Database connection failed:", e));
    
  return client;
};

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;