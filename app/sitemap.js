export default function sitemap() {
  const base = 'https://www.securitylink-bd.com';
  const routes = [
    { path: '', priority: 1 },
    { path: '/about/about-us', priority: 0.8 },
    { path: '/about/achievements', priority: 0.7 },
    { path: '/about/md', priority: 0.7 },
    { path: '/services/guard', priority: 0.9 },
    { path: '/services/logistics', priority: 0.8 },
    { path: '/services/risk-management', priority: 0.9 },
    { path: '/services/equipments', priority: 0.8 },
    { path: '/s&t/selection', priority: 0.6 },
    { path: '/s&t/training', priority: 0.6 },
    { path: '/gallery', priority: 0.5 },
    { path: '/contact', priority: 0.8 },
    { path: '/contact/form', priority: 0.6 },
  ];
  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }));
}