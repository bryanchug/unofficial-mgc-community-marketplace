import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const affiliation = z.enum([
	'MGC Main',
	'MGC Global',
	'MGCNLCA',
	'MGCNLCA Alumni Community',
]);

const categories = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number().optional(),
	}),
});

const businesses = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/businesses' }),
	schema: z.object({
		name: z.string(),
		category: z.string(),
		summary: z.string(),
		affiliation: z.array(affiliation).min(1),
		website: z.string().url().optional(),
		contact: z.string().optional(),
		location: z.string().optional(),
		owner: z.string().optional(),
	}),
});

export const collections = { categories, businesses };
