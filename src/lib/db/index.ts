import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from './schema.js';

const sqlite = new Database('blog.db');
export const db = drizzle(sqlite, { schema });

// Initialize database with migrations
export function initializeDatabase() {
	try {
		// Run migrations
		migrate(db, { migrationsFolder: './drizzle' });
		console.log('Database initialized successfully');
	} catch (error) {
		console.error('Failed to initialize database:', error);
	}
}

export { posts } from './schema.js';
export type { Post, NewPost } from './schema.js';