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
        case '/home':
            className = 'page-home';
            break;
        case '/about':
            className = 'page-about';
            break;
        case '/work':
            className = 'page-projects';
            break;
        case '/work/[slug]':
            className = 'page-project';
            break;
    }

    return className;
}