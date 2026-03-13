/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.mavlenlabs.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ['/api/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        additionalSitemaps: [
            'https://www.mavlenlabs.com/sitemap.xml',
        ],
    },
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    // Add blog posts or dynamic routes here
    additionalPaths: async (config) => {
        const result = [];

        // Add blog posts if you have them
        // const blogPosts = await getBlogPosts();
        // blogPosts.forEach((post) => {
        //   result.push({
        //     loc: `/blog/${post.slug}`,
        //     lastmod: post.updatedAt,
        //     priority: 0.7,
        //     changefreq: 'monthly',
        //   });
        // });

        return result;
    },
};
