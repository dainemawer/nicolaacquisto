/**
 * ⚙️ Helpers
 *
 * Helper functions for generateSiteMap
 *
 * @file helpers
 * @author Daine Mawer
 * @since 1.0.0
 */

require('dotenv').config();
const {createClient} = require('contentful');

const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});

const CONTENT_TYPE_PROJECT = 'work';

const getAllProjects = async () =>
    client.getEntries({
        content_type: CONTENT_TYPE_PROJECT,
    });

exports.generateAllProjects = async () => {
    const articles = await getAllProjects();
    return articles.items.map((item) => ({...item.fields}));
};