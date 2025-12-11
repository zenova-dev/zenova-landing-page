# SEO Optimization Guide - Zenova Tech Landing Page

## Overview
This document outlines the comprehensive SEO implementation for the Zenova Tech landing page.

## Implemented SEO Features

### 1. Meta Tags (app/layout.tsx)
**Enhanced metadata includes:**
- **Title Template**: Dynamic titles with "| Zenova Tech" suffix
- **Primary Title**: "Zenova Tech | Desarrollo de Productos Digitales y Software a Medida"
- **Description**: Comprehensive 150-character description highlighting MVPs, enterprise systems, IA, and automation
- **Extended Keywords**: 20+ relevant keywords including:
  - desarrollo software, MVP, producto mínimo viable
  - apps móviles, desarrollo móvil
  - inteligencia artificial, automatización empresarial
  - SaaS, desarrollo web, software a medida
  - sistemas enterprise, aplicaciones escalables
  - transformación digital, desarrollo ágil

### 2. Open Graph Tags
**Facebook/LinkedIn sharing optimized:**
- Type: website
- Locale: es_AR (Spanish - Argentina)
- Site Name: Zenova Tech
- OG Image: `/images/og-image.jpg` (1200x630px recommended)
- Complete title and description for social sharing

### 3. Twitter Card Tags
**Twitter sharing optimized:**
- Card type: summary_large_image
- Optimized title and description
- Twitter handle placeholder: @zenova (update when available)

### 4. Robots Configuration
**Search engine directives:**
- Index: true (allow indexing)
- Follow: true (follow links)
- Google-specific settings:
  - max-video-preview: unlimited
  - max-image-preview: large
  - max-snippet: unlimited

### 5. Structured Data (JSON-LD)
**Location**: `/components/StructuredData.tsx`

**Implemented schemas:**

#### a) Organization Schema
- Business name, URL, logo
- Contact information
- Geographic location (Argentina)
- Social media profiles (placeholder)

#### b) Service Schema
- Service catalog with 6 core offerings:
  1. Desarrollo de MVPs
  2. Desarrollo de Aplicaciones Móviles
  3. Desarrollo Web
  4. Integración de Inteligencia Artificial
  5. Automatización Empresarial
  6. Sistemas Enterprise Escalables

#### c) WebSite Schema
- Site metadata
- Language: es-AR
- Publisher information

#### d) ProfessionalService Schema
- Business hours: Monday-Friday, 9:00-18:00
- Price range indicator
- Geographic coordinates (add when available)

#### e) BreadcrumbList Schema
- Navigation structure for search results

### 6. Sitemap (app/sitemap.ts)
**Automated XML sitemap generation:**
- Homepage (priority: 1.0)
- Servicios section (priority: 0.8)
- Por Qué Nosotros section (priority: 0.7)
- Hermes product (priority: 0.7)
- Contacto section (priority: 0.9)
- Update frequency: weekly to monthly
- Accessible at: `https://www.zenova.tech/sitemap.xml`

### 7. Robots.txt (public/robots.txt)
**Crawler directives:**
```
User-agent: *
Allow: /
Sitemap: https://www.zenova.tech/sitemap.xml
```

### 8. Additional SEO Features
- **Canonical URLs**: Properly set to avoid duplicate content
- **Language Tags**: es-AR and es alternates
- **Font Optimization**: Font display swap for performance
- **Format Detection**: Disabled to prevent mobile browsers from auto-linking
- **Verification Tags**: Placeholders for Google, Yandex, Bing (add when registered)

## Next Steps & Recommendations

### Immediate Actions Required:
1. **Create OG Image**: Design and add `/public/images/og-image.jpg` (1200x630px)
   - Include Zenova branding
   - Add key value proposition text
   - Optimize for social media display

2. **Social Media Setup**:
   - Update Twitter handle in metadata when created
   - Add social media URLs to StructuredData.tsx `sameAs` array

3. **Search Console Registration**:
   - Register site with Google Search Console
   - Add verification meta tag to layout.tsx
   - Submit sitemap manually if needed

4. **Analytics Setup**:
   - Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in .env
   - Google Analytics 4 is already integrated

### Performance Optimization:
1. **Image Optimization**:
   - Use Next.js Image component for all images
   - Implement lazy loading for below-fold content
   - Add proper alt text to all images

2. **Core Web Vitals**:
   - Monitor LCP (Largest Contentful Paint)
   - Optimize CLS (Cumulative Layout Shift)
   - Improve FID/INP (First Input Delay / Interaction to Next Paint)

### Content SEO:
1. **Header Tags**: Ensure proper H1-H6 hierarchy in components
2. **Internal Linking**: Add contextual links between sections
3. **Alt Text**: Add descriptive alt text to all images
4. **Mobile Optimization**: Test and optimize mobile experience

### Local SEO (if applicable):
1. **Google Business Profile**: Create and optimize
2. **Geographic Information**: Add specific address if available
3. **Local Keywords**: Include location-specific terms in content

### Ongoing Monitoring:
1. **Search Console**: Monitor crawl errors, indexing status
2. **Analytics**: Track organic traffic, bounce rate, conversions
3. **Rank Tracking**: Monitor keyword positions
4. **Schema Validation**: Use Google's Rich Results Test

## Testing & Validation

### Tools to Use:
1. **Google Search Console**: Submit and monitor sitemap
2. **Google Rich Results Test**: Validate structured data
   - URL: https://search.google.com/test/rich-results
3. **Facebook Sharing Debugger**: Test OG tags
   - URL: https://developers.facebook.com/tools/debug/
4. **Twitter Card Validator**: Test Twitter cards
   - URL: https://cards-dev.twitter.com/validator
5. **Lighthouse**: Audit SEO score
   - Run in Chrome DevTools

### Validation Checklist:
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] All JSON-LD schemas validate without errors
- [ ] OG image displays correctly on social media
- [ ] Meta description under 160 characters
- [ ] Title tags under 60 characters
- [ ] Mobile-friendly test passes
- [ ] Page load time under 3 seconds
- [ ] HTTPS enabled and working
- [ ] Canonical URLs properly set

## Files Modified/Created

### Created:
- `/components/StructuredData.tsx` - Comprehensive JSON-LD schemas
- `/public/robots.txt` - Search engine crawler directives
- `/SEO-GUIDE.md` - This documentation

### Modified:
- `/app/layout.tsx` - Enhanced metadata and integrated StructuredData

### Existing (verified):
- `/app/sitemap.ts` - Automated sitemap generation

## Technical Details

### Metadata Configuration
```typescript
// Title appears as: "Page Name | Zenova Tech"
title: {
  default: "Zenova Tech | Desarrollo de Productos Digitales y Software a Medida",
  template: "%s | Zenova Tech"
}
```

### Canonical URL
```typescript
alternates: {
  canonical: 'https://www.zenova.tech',
  languages: {
    'es-AR': 'https://www.zenova.tech',
    'es': 'https://www.zenova.tech',
  },
}
```

### Structured Data Location
All structured data is centralized in the `StructuredData` component and injected into the `<head>` section for optimal parsing by search engines.

## Support & Maintenance

### Regular Updates:
- Update lastModified dates in sitemap when content changes
- Keep keywords relevant to current offerings
- Update service descriptions as products evolve
- Add new pages to sitemap as site grows

### Monitoring Frequency:
- **Daily**: Search Console for critical errors
- **Weekly**: Analytics for traffic trends
- **Monthly**: Keyword rankings and competitor analysis
- **Quarterly**: Full SEO audit and strategy review

## Additional Resources
- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

---

**Last Updated**: December 2025
**SEO Implementation Version**: 1.0
