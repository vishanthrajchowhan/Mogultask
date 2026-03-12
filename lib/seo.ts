import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
}

const defaultMetadata = {
  title: 'MogulTask - Transform Your Passion Into Profit',
  description: 'Certified Professional Coach, Motivator & Strategist helping professionals escape 9-5, build powerful brands, and achieve clarity, purpose, and profit.',
  image: '/images/og-image.jpg',
  url: 'https://mogultask.com',
}

export function generateSEO({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  author,
}: SEOProps = {}): Metadata {
  const seoTitle = title 
    ? `${title} | MogulTask`
    : defaultMetadata.title
  
  const seoDescription = description || defaultMetadata.description
  const seoImage = image || defaultMetadata.image
  const seoUrl = url || defaultMetadata.url

  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: 'MogulTask',
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: '@mogultask',
    },
    alternates: {
      canonical: seoUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'MekaDivine',
    jobTitle: 'Certified Professional Coach, Motivator & Strategist',
    url: 'https://mogultask.com',
    sameAs: [
      'https://www.linkedin.com/in/mekadivine',
      'https://www.instagram.com/mogultask',
    ],
    description: 'Certified Professional Coach helping professionals and entrepreneurs achieve clarity, purpose, and profit.',
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MogulTask',
    url: 'https://mogultask.com',
    logo: 'https://mogultask.com/images/logo.png',
    description: 'Business, career & personal development coaching platform',
    founder: {
      '@type': 'Person',
      name: 'MekaDivine',
    },
  }
}
