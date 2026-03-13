// app/robots.js
// This automatically generates your robots.txt at build time
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: 'https://www.mavlenlabs.com/sitemap.xml',
    };
}
