import { getCollection, type CollectionEntry } from 'astro:content';

export type Category = CollectionEntry<'categories'>;
export type Business = CollectionEntry<'businesses'>;

export async function getCategoriesSorted(): Promise<Category[]> {
	const categories = await getCollection('categories');
	return categories.sort((a, b) => {
		const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
		const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;
		if (orderA !== orderB) return orderA - orderB;
		return a.data.title.localeCompare(b.data.title, 'en');
	});
}

export async function getBusinessesByCategory(categoryId: string): Promise<Business[]> {
	const businesses = await getCollection('businesses');
	return businesses
		.filter((business) => business.data.category === categoryId)
		.sort((a, b) => a.data.name.localeCompare(b.data.name, 'en'));
}

export async function getBusinessById(id: string): Promise<Business | undefined> {
	const businesses = await getCollection('businesses');
	return businesses.find((business) => business.id === id);
}

export async function getCategoryById(id: string): Promise<Category | undefined> {
	const categories = await getCollection('categories');
	return categories.find((category) => category.id === id);
}
