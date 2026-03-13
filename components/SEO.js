// components/SEO.js
// Reusable SEO component for custom metadata on specific pages

export default function generateMetadata({
    title,
    description,
    keywords = [],
    ogImage = '/mavlen-logo.png',
    ogType = 'website',
    noindex = false,
    canonicalUrl = null,
}) {
    const baseUrl = 'https://www.mavlenlabs.com';
    const fullTitle = title
        ? `${title} | MavlenLabs`
        : 'MavlenLabs - Expert Software Development & Digital Product Studio';

    const metaDescription = description ||
        'Transform your ideas into powerful digital products. MavlenLabs delivers expert software development, product design, and engineering services.';

    return {
        title,
        description: metaDescription,
        keywords: keywords.length > 0 ? keywords : undefined,

        robots: noindex ? {
            index: false,
            follow: false,
        } : {
            index: true,
            follow: true,
        },

        openGraph: {
            type: ogType,
            title: fullTitle,
            description: metaDescription,
            url: canonicalUrl || baseUrl,
            siteName: 'MavlenLabs',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title || 'MavlenLabs',
                }
            ],
        },

        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: metaDescription,
            images: [ogImage],
        },

        alternates: canonicalUrl ? {
            canonical: canonicalUrl,
        } : undefined,
    };
}
