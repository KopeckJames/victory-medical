// Legacy WordPress URL → new site path.
//
// Nearly all old URLs are now served as real pages at their exact old paths
// (cloned content in content/legacy/, rendered by app/[slug]/page.tsx), so
// they need no redirect. The entries below are the exceptions:
//
//  - old utility pages whose direct equivalent already exists on the new
//    site (redirecting beats hosting a duplicate that splits rankings)
//  - old URLs that were never in the sitemap but may still hold backlinks
//  - thin form/opt-in shells not worth cloning

export const legacyRoutes: [string, string][] = [
  // Old service URLs not in the sitemap but possibly linked externally
  ['/mammogram-screening', '/services'],
  ['/acupuncture', '/services'],

  // Contact / appointment / question forms → /contact
  ['/contact-us', '/contact'],
  ['/medspa-contact', '/contact'],
  ['/medspa-ask-a-question', '/contact'],
  ['/medspa-book-an-appointment', '/contact'],
  ['/pick-your-appointment', '/contact'],
  ['/sms', '/contact'],
  ['/rpm-request', '/contact'],

  // Team / careers → /about
  ['/our-team', '/about'],
  ['/careers', '/about'],

  // Blog index + media → /blog
  ['/victoryblog', '/blog'],
  ['/podcasts', '/blog'],
  ['/re-capping-covid-19-victory-medical-centers-dr-billy-franklin-on-potential-treatments', '/blog'],
  ['/testing-guidance', '/blog'],

  // Patient resources → /insurance
  ['/patient-portals', '/insurance'],
  ['/patient-forms', '/insurance'],
  ['/patient-resources', '/insurance'],
  ['/patientportal', '/insurance'],

  // Case studies → /reviews
  ['/case-studies', '/reviews'],
]
