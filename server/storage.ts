import { users, type User, type UpsertUser } from "@shared/schema";
import { getDb } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    try {
      const [user] = await getDb().select().from(users).where(eq(users.id, id));
      return user || undefined;
    } catch (error) {
      console.error(`[Storage] Error fetching user ${id}:`, error);
      throw new Error('Failed to fetch user from database');
    }
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    try {
      const [user] = await getDb()
        .insert(users)
        .values(userData)
        .onConflictDoUpdate({
          target: users.id,
          set: {
            ...userData,
            updatedAt: new Date(),
          },
        })
        .returning();
      return user;
    } catch (error) {
      console.error(`[Storage] Error upserting user:`, error);
      throw new Error('Failed to save user to database');
    }
  }
}

export const storage = new DatabaseStorage();
