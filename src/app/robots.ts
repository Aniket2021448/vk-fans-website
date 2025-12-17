import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 0,
        disallow: ['/admin/', '/private/', '/_next/', '/api/'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
    ],
    sitemap: [
      'https://vkfans.com/sitemap.xml',
      'https://vkfans.com/sitemap-products.xml',
      'https://vkfans.com/sitemap-support.xml',
      'https://vkfans.com/sitemap-catalog.xml',
    ],
  };
}
