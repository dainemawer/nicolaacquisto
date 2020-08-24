/**
 * 🔑 Contentful API
 *
 * Handles API calls to Contentful.
 *
 * @link https://www.contentful.com/developers/docs/references/content-delivery-api/
 * @author Daine Mawer
 */
import {createClient} from 'contentful';

class Contentful {
    constructor() {
        this.client = createClient({
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        });
    }

    async fetchEntries() {
        return this.client
            .getEntries({
                content_type: 'work',
                order: 'sys.createdAt'
            })
            .then((entries) => {
                if (entries && entries.items && entries.items.length > 0) {
                    const posts = entries.items.map((entry) => this.convertEntry(entry));
                    return posts;
                }
                return [];
            });
    }

    async fetchEntriesByCategory(cat) {
        return this.client
            .getEntries({
                content_type: 'work',
                order: 'sys.createdAt',
                'fields.category.sys.contentType.sys.id': 'category',
                'fields.category.fields.name': cat
            })
            .then((entries) => {
                if (entries && entries.items && entries.items.length > 0) {
                    const posts = entries.items.map((entry) => this.convertEntry(entry));
                    return posts;
                }
                return [];
            });
    }

    async fetchEntryBySlug(slug) {
        return await this.client.getEntries({
            content_type: 'work',
            'fields.slug': slug,
        });
    }

    async getEntryBySlug(slug) {

        try {
            const content = await this.fetchEntryBySlug(slug);
            const entry = content.items[0].fields || null;
            const sys = content.items[0].sys || null;

            return {
                id: entry.postId || null,
                title: entry.title || null,
                role: entry.role || null,
                description: entry.description || null,
                slug: entry.slug || null,
                credits: entry.credits || null,
                images: entry.images || null,
                hero: entry.hero || null,
                modified: sys.updatedAt || null,
                published: sys.createdAt || null,
            }

        } catch (error) {
            console.error(error);
        }
    }

    convertEntry(data) {
        const { fields } = data;
        return {
            id: fields.postId || null,
            title: fields.title || null,
            role: fields.role || null,
            description: fields.description || null,
            slug: fields.slug || null,
            credits: fields.credits || null,
            images: fields.images || null,
            hero: fields.hero || null,
            category: fields.category || null
        }
    }
}

export default Contentful;