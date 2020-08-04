/**
 * ⚙️ Body Class
 *
 * Outputs unique class name to body tag.
 *
 * @file body
 * @author Daine Mawer
 * @since 1.0.0
 */

export const bodyClassName = path => {

    let className;

    switch (path) {
        case '/':
            className = 'page-home';
            break;
        case '/about':
            className = 'page-about';
            break;
        case '/news':
            className = 'page-news';
            break;
        case '/news/[slug]':
            className = 'page-news-article';
            break;
        case '/projects':
            className = 'page-projects';
            break;
        case '/projects/[slug]':
            className = 'page-project-article';
            break;
        case '/contact':
            className = 'page-contact';
            break;
        case '/privacy-policy':
            className = 'page-privacy-policy';
            break;
        case '/uses':
            className = 'page-uses';
            break;
        case '/terms-and-conditions':
            className = 'page-terms-and-conditions';
            break;
        case '/login':
            className = 'page-login';
            break;
    }

    return className;
}