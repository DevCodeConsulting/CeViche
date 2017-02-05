export function generateRootLevelLink(link) {
    if(!link)
        return;

    if(!__BASENAME__) {
        if(link[0] === '/')
            return link;

        return `/${link}`;
    }

    if(link[0] === '/' && __BASENAME__[__BASENAME__.length - 1] === '/')
        link = link.substr(1);

    const hasDividingSlash = link[0] === '/' || __BASENAME__[__BASENAME__.length - 1] === '/';

    return `${__BASENAME__}${hasDividingSlash ? "" : "/"}${link}`;
}
