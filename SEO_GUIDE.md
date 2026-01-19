# SEO Implementation Guide

This guide explains how to add SEO to all pages in your website.

## What Has Been Set Up

1. **SEO Component** (`client/src/components/SEO.tsx`)
   - Dynamically updates meta tags, Open Graph, Twitter Cards, and structured data
   - No additional dependencies required

2. **Base Meta Tags** (`client/index.html`)
   - Basic SEO meta tags in the HTML head
   - Language set to Estonian (et)

3. **robots.txt** (`client/public/robots.txt`)
   - Tells search engines which pages to index

4. **sitemap.xml** (`client/public/sitemap.xml`)
   - Helps search engines discover all your pages

## How to Add SEO to Each Page

### Step 1: Import the SEO Component

```tsx
import { SEO } from "@/components/SEO";
```

### Step 2: Add SEO Component to Your Page

Add the `<SEO />` component at the top of your page component's return statement:

```tsx
export default function YourPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Page Title"
        description="Page description for search engines"
        url="https://rasmuskala.ee/your-page-url"
      />
      <Navbar />
      {/* Rest of your page */}
    </div>
  );
}
```

## Examples for Each Page

### Home Page (Already Added)
```tsx
<SEO
  title="Avaleht"
  description="Personaaltreeningud sportlastele ja harrastajatele..."
  url="https://rasmuskala.ee"
/>
```

### Contact Page (Already Added)
```tsx
<SEO
  title="Kontakt"
  description="Võta ühendust RasmusKalaga..."
  url="https://rasmuskala.ee/kontakt"
/>
```

### Online Coaching Page
```tsx
<SEO
  title="Online coaching"
  description="Personaalne ja paindlik online juhendamine. Koostan sulle personaalse treeningkava."
  url="https://rasmuskala.ee/online"
/>
```

### Harrastaja Hinnakiri Page
```tsx
<SEO
  title="Harrastaja hinnakiri"
  description="Personaaltreeningu hinnad harrastajatele. Vali endale sobiv pakett."
  url="https://rasmuskala.ee/harrastaja-hinnakiri"
/>
```

### Sportlase Hinnakiri Page
```tsx
<SEO
  title="Sportlase hinnakiri"
  description="ÜKE treeningu hinnad sportlastele. Personaalsed paketid spordi arendamiseks."
  url="https://rasmuskala.ee/sportlase-hinnakiri"
/>
```

### Minust Page
```tsx
<SEO
  title="Minust"
  description="Tutvu RasmusKalaga - personaaltreener, kes aitab Sul saavutada oma treeningueesmärke."
  url="https://rasmuskala.ee/minust"
/>
```

## Optional SEO Props

You can customize further with these optional props:

```tsx
<SEO
  title="Page Title"
  description="Page description"
  keywords="custom, keywords, here"  // Optional
  image="/path/to/image.jpg"         // Optional - default uses Kalarow.jpeg
  url="https://rasmuskala.ee/page"   // Optional - default uses base URL
  type="website"                      // Optional - "website" or "article"
  siteName="RasmusKala"               // Optional - default is "RasmusKala"
/>
```

## What Gets Added Automatically

The SEO component automatically adds:

1. **Basic Meta Tags**
   - Title (with site name suffix)
   - Description
   - Keywords
   - Author
   - Robots
   - Language

2. **Open Graph Tags** (for Facebook, LinkedIn, etc.)
   - og:title
   - og:description
   - og:image
   - og:url
   - og:type
   - og:site_name

3. **Twitter Card Tags**
   - twitter:card
   - twitter:title
   - twitter:description
   - twitter:image

4. **Structured Data (JSON-LD)**
   - Schema.org markup for better search engine understanding

## Important Notes

1. **Update sitemap.xml** when you add new pages
2. **Use unique descriptions** for each page
3. **Include relevant keywords** naturally in descriptions
4. **Update lastmod dates** in sitemap.xml periodically
5. **Use absolute URLs** for images in Open Graph tags

## Testing Your SEO

1. **Google Search Console**: Submit your sitemap
2. **Facebook Debugger**: Test Open Graph tags at https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: Test at https://cards-dev.twitter.com/validator
4. **Google Rich Results Test**: Test structured data at https://search.google.com/test/rich-results

## Next Steps

1. Add SEO component to remaining pages (Online, HarrastajaHinnakiri, SportlaseHinnakiri, Minust)
2. Update sitemap.xml with current dates
3. Submit sitemap to Google Search Console
4. Monitor SEO performance

