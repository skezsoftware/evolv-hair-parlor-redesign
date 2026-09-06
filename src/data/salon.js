const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`

export const salon = {
  name: 'Êvolv Hair Parlor',
  shortName: 'Êvolv',
  established: 2016,
  tagline: 'More Good Hair Days',
  description:
    'A one-of-a-kind hybrid salon in Hillcrest, created to deliver the most sophisticated haircuts and styles for men and women.',
  neighborhood: 'Hillcrest',
  type: 'Hybrid Salon & Barbershop',

  address: {
    street: '409 University Ave',
    city: 'San Diego',
    state: 'CA',
    zip: '92103',
    full: '409 University Ave, San Diego, CA 92103',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=409+University+Ave+San+Diego+CA+92103',
  },

  phone: {
    display: '(619) 291-2887',
    href: 'tel:+16192912887',
  },

  email: {
    display: 'hello@evolvhairparlor.com',
    href: 'mailto:hello@evolvhairparlor.com',
  },

  hours: [
    { days: 'Monday – Friday', time: '10:00 am – 8:00 pm' },
    { days: 'Saturday – Sunday', time: '10:00 am – 5:00 pm' },
  ],

  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/_evolv/' },
    {
      name: 'Yelp',
      href: 'https://www.yelp.com/biz/%C3%AAvolv-hair-parlor-san-diego',
    },
  ],

  bookingUrl: 'tel:+16192912887',

  primaryCta: {
    label: 'Book Now',
    to: '/team',
  },

  /** Production site URL — update when a custom domain is connected */
  siteUrl: 'https://evolv-hair-parlor-redesign.vercel.app',

  seo: {
    defaultDescription:
      'Êvolv Hair Parlor — a hybrid salon in Hillcrest, San Diego. Sophisticated cuts, color, and barbering for men and women. More good hair days.',
    ogImage: '/images/salon/storefront.jpg',
    pages: {
      '/': {
        description:
          'Êvolv Hair Parlor in Hillcrest, San Diego — hybrid salon cuts, color, and barbering for men and women. More good hair days.',
      },
      '/services': {
        title: 'Services',
        description:
          'Explore cuts, color, and barbering at Êvolv Hair Parlor in Hillcrest. Call or book with your stylist for the look you want.',
      },
      '/team': {
        title: 'Team',
        description:
          'Meet the Êvolv Hair Parlor team — barbers, stylists, and educators in Hillcrest. Book your appointment today.',
      },
      '/spotlight': {
        title: 'Client Spotlight',
        description:
          'Client Spotlight at Êvolv Hair Parlor — faces, looks, and stories from our Hillcrest community.',
      },
      '/about': {
        title: 'Our Story',
        description:
          'The story of Êvolv Hair Parlor — founder Mario Garcia and a hybrid salon built on craft in Hillcrest since 2016.',
      },
      '/contact': {
        title: 'Contact',
        description:
          'Visit Êvolv Hair Parlor at 409 University Ave in Hillcrest, San Diego. Call (619) 291-2887 to book.',
      },
    },
  },

  colors: {
    ivory: '#f6f5f3',
    charcoal: '#121212',
    olive: '#6e6a66',
    gold: '#8f6a57',
    goldSoft: '#b08a76',
  },

  images: {
    hero: '/images/salon/interior-front.jpg',
    salonInterior: '',
    chair: '/images/salon/lounge-seating-area.webp',
    storyTools: '/images/salon/story_image.jpg',
    cut: '/images/salon/barber-at-work.jpg',
    color: '/images/salon/yellow-hair-color.webp',
    tools: '/images/salon/barn-door.jpg',
    barber: '/images/salon/barber-at-work.jpg',
    style: '/images/salon/team.jpg',
    blowdry: '/images/salon/barber-at-work.jpg',
    portrait: '/images/salon/team.jpg',
    brick: '/images/salon/storefront.jpg',
    detail: '/images/salon/interior-front.jpg',
    storefront: '/images/salon/storefront.jpg',
    interiorFront: '/images/salon/interior-front.jpg',
    teamGroup: '/images/salon/team.jpg',
    barberStation: '/images/salon/barber-station-chair.webp',
    teamAtWork: '/images/salon/evolv-team-at-work.webp',
    community: '/images/salon/community-hero.jpg',
    communityMobile: '/images/salon/community-hero-mobile.jpg',
    shawn: '/images/team/shawn-gray.png',
    mario: '/images/team/mario-garcia.png',
    oscar: '/images/team/oscar-gomez.png',
    fernando: '/images/team/fernando-sanchez.png',
    jesse: '/images/team/jesse-estrella.png',
    marlon: '/images/team/marlon-franco-lagos.png',
    mimi: '/images/team/mimi-luv.png',
    izzy: '/images/clients/izzy.jpg',
    logo: '/images/logo.png',
    logoLight: '/images/logo-light.png',
    hillcrestSign: '/images/hillcrest-sign.jpg',
  },

  neighborhoodSpotlight: {
    eyebrow: 'Hillcrest',
    title: 'Located in the heart of Hillcrest.',
    text: 'Been serving the San Diego and Hillcrest community for almost two decades.',
    imageKey: 'hillcrestSign',
  },

  about: {
    eyebrow: 'Our Story',
    title: 'More than a haircut — an experience.',
    lead:
      'Êvolv Hair Parlor is a reflection of dedication to turning a haircut into an experience.',
    quote: {
      text: 'Êvolv Hair Parlor is a reflection of my dedication to turning a haircut into an experience.',
      attribution: 'Mario Garcia, Founder',
    },
    story: [
      'Mario Garcia started cutting hair in Tijuana, Mexico when he was just 11 years old. Coming from a family of stylists, his passion and devotion lies within the craft itself — not the industry. For Mario, cutting hair is an experience to be had, for both the guest and the artist.',
      'By the age of 18, Mario had mastered and acquired licenses in both barbering and cosmetology. His devotion led him to become a teacher at a private beauty college, where he continues to give future professionals the skills and techniques needed to succeed.',
      'As a platform artist for Hair Evolution Professionals, Mario fulfills his passion for barbering while educating and inspiring other artists at the start of their journey. Realizing the time was right to open his own shop, he opened Êvolv Hair Parlor in October of 2016.',
      'Êvolv is a reflection of sacrifice and dedication to the craft of hair cutting — the culmination of a journey, and a place where it is more than a haircut. It is an experience.',
    ],
    philosophy: {
      title: 'How we work',
      text: 'We are a hybrid salon built for both men and women — sophisticated cuts, clean finishes, and service that starts the moment you walk in.',
      points: [
        {
          title: 'Hybrid craft',
          text: 'Barbering and cosmetology under one roof — fades, classic cuts, color, and finishing work done with the same standard of care.',
        },
        {
          title: 'The experience',
          text: 'High-quality service from arrival to leave. At Êvolv, there are no bad hair days.',
        },
        {
          title: 'Hillcrest home',
          text: 'A modern parlor with brick character on University Avenue — simple, polished, and built for good hair days.',
        },
      ],
    },
    interior: {
      title: 'The parlor',
      text: 'Clean lines, black and white finishes, and brick walls that give the room warmth and edge. The space is designed to feel modern and calm — a place where the cut gets the attention it deserves.',
    },
  },

  founder: {
    name: 'Mario Garcia',
    title: 'Founder · Barber & Cosmetologist',
    imageKey: 'mario',
    booksyUrl:
      'https://booksy.com/en-us/dl/show-business/87091?utm_medium=c2c_referral',
    bio: [
      'Mario started cutting hair at 11 in Tijuana and holds licenses in both barbering and cosmetology. He teaches at a private beauty college and works as a platform artist for Hair Evolution Professionals.',
      'He opened Êvolv Hair Parlor in Hillcrest in 2016 to share a simple belief: a haircut should be an experience — precise, personal, and worth coming back for.',
    ],
  },

  team: [
    {
      name: 'Mario Garcia',
      role: 'Barber, Cosmetologist, Founder',
      phone: '(619) 200-9777',
      phoneHref: 'tel:+16192009777',
      imageKey: 'mario',
      booksyUrl:
        'https://booksy.com/en-us/dl/show-business/87091?utm_medium=c2c_referral',
      bio: 'Founder of Êvolv. Dual-licensed artist, educator, and platform artist for Hair Evolution Professionals. Call (619) 200-9777.',
    },
    {
      name: 'Fernando Sanchez',
      role: 'Barber',
      phone: '(619) 653-0622',
      phoneHref: 'tel:+16196530622',
      imageKey: 'fernando',
      booksyUrl:
        'https://booksy.com/en-us/dl/show-business/158317?utm_medium=c2c_referral',
      bio: 'Sharp fades, clean lineups, and tailored cuts for every style. Call (619) 653-0622.',
    },
    {
      name: 'Jesse Estrella',
      role: 'Stylist',
      phone: '(619) 291-2887',
      phoneHref: 'tel:+16192912887',
      imageKey: 'jesse',
      instagram: '@j3s5e',
      instagramUrl: 'https://www.instagram.com/j3s5e/',
      bio: 'Cuts and color with a loyal following — consistent results and a style that lasts. Book on Instagram @j3s5e or call (619) 291-2887.',
    },
    {
      name: 'Marlon Franco Lagos',
      role: 'Stylist',
      imageKey: 'marlon',
      instagram: '@bybob_styles',
      instagramUrl: 'https://www.instagram.com/bybob_styles/',
      bio: 'Book through Instagram for cuts and color — message @bybob_styles to schedule.',
    },
    {
      name: 'Mimi Luv',
      role: 'Stylist',
      phone: '(619) 291-2887',
      phoneHref: 'tel:+16192912887',
      imageKey: 'mimi',
      bio: 'Creative cuts and color with a personal touch — ask for Mimi when you book. Call (619) 291-2887.',
    },
    {
      name: 'Oscar Gomez',
      role: 'Barber/Cosmetologist/Educator',
      phone: '(619) 379-7562',
      phoneHref: 'tel:+16193797562',
      imageKey: 'oscar',
      bio: 'Hybrid stylist and educator focused on refined cuts and lasting results. Call (619) 379-7562.',
    },
    {
      name: 'Shawn Gray',
      role: 'Barber',
      phone: '(442) 226-8247',
      phoneHref: 'tel:+14422268247',
      imageKey: 'shawn',
      booksyUrl:
        'https://booksy.com/en-us/dl/show-business/19979?utm_medium=c2c_referral',
      bio: 'Precision cuts, fades, and classic barbering with a clean, modern finish. Call (442) 226-8247.',
    },
  ],

  featuredServices: [
    {
      name: 'Cuts & Styling',
      description:
        'From classic fades to longer looks — tailored cuts and finishes for men and women.',
      imageKey: 'cut',
    },
    {
      name: 'Color & Texture',
      description:
        'Custom color, highlights, and treatments shaped around your hair and the look you want.',
      imageKey: 'color',
    },
    {
      name: 'Barbering & Care',
      description:
        'Shaves, lineups, and finishing work — the details that keep every visit sharp.',
      imageKey: 'izzy',
    },
  ],

  experience: {
    eyebrow: 'The Parlor',
    title: 'Life isn’t perfect, but your hair can be.',
    text: 'Êvolv was created to provide the highest quality hair service in San Diego. From the chair to the finish, every visit is built around precision, hospitality, and more good hair days.',
    points: [
      'Hybrid salon for men and women',
      'Sophisticated cuts, color, and finishing',
      'Hillcrest location on University Avenue',
      'Service that starts the moment you walk in',
    ],
  },

  testimonials: [
    {
      quote:
        'A good barber is like a good mechanic. Finding one you trust is worth the search. The talent here is unmatched — I’ll wait weeks if I have to.',
      name: 'Local Guest',
      detail: 'Hillcrest',
    },
    {
      quote:
        'Walked in for a fade and walked out looking sharper than I expected. Clean shop, solid vibe, and the kind of attention that makes you book again.',
      name: 'Regular Client',
      detail: 'San Diego',
    },
    {
      quote:
        'Hybrid salon done right — they handle both barbering and salon work without missing a beat. Easy to recommend.',
      name: 'First-Time Guest',
      detail: 'University Avenue',
    },
  ],

  servicesDisclaimer:
    'Please contact us with questions about services not listed below. Appointments recommended.',

  services: [
    {
      id: 'cuts',
      name: 'Cuts',
      note: 'All cuts include a consultation, clean finish, and style.',
      items: [
        {
          name: 'Short Haircut',
          description: 'Precision cut for short lengths, shampoo, and style.',
          price: 40,
        },
        {
          name: 'Long Haircut',
          description: 'Shape, trim, and finish for longer hair.',
          price: '45+',
        },
        {
          name: 'Buzzcut',
          description: 'Even length all around — clean and simple.',
          price: 30,
        },
      ],
    },
    {
      id: 'color',
      name: 'Color',
      note: 'Color services are customized. Final pricing depends on length and technique.',
      items: [
        {
          name: 'Color Service',
          description: 'Single-process and custom color applications.',
          price: '60+',
        },
        {
          name: 'Highlights',
          description: 'Dimensional color for depth and brightness.',
          price: '75+',
        },
        {
          name: 'Hairshine Treatment',
          description: 'Glossing treatment for shine, softness, and polish.',
          price: 45,
        },
      ],
    },
    {
      id: 'barbering',
      name: 'Barbering',
      items: [
        {
          name: 'Shave Treatments',
          description: 'Hot towel shave and finishing treatment.',
          price: 35,
        },
        {
          name: 'Blowdry',
          description: 'Wash and blowdry finish.',
          price: 40,
        },
        {
          name: 'Eyebrow Wax',
          description: 'Clean, shaped brows to frame the face.',
          price: 25,
        },
      ],
    },
  ],

  parking: {
    title: 'Parking',
    text: 'Street parking is available along University Avenue and nearby side streets in Hillcrest. Arrive a few minutes early to find a spot and settle in before your appointment.',
  },

  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=-117.162%2C32.744%2C-117.146%2C32.754&layer=mapnik&marker=32.749%2C-117.154',

  /**
   * Client Spotlight — put the newest feature first.
   * To add one: drop a photo in public/images/clients/, then add an entry below.
   * Use `image` for a local path (e.g. '/images/clients/name.jpg') or `imageKey` for an existing salon.images key.
   */
  spotlights: [
    {
      name: 'Joe Smith',
      month: 'September 2026',
      image: '/images/clients/joe-smith.jpg',
      summary:
        'A familiar face in the chair at Êvolv — clean fade, confident presence, and the kind of regular who makes Hillcrest feel like home. Proud to feature Joe in this month’s client spotlight.',
    },
  ],
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Spotlight', path: '/spotlight' },
  { label: 'Our Story', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export function formatPrice(price) {
  if (typeof price === 'number') {
    return `$${price}`
  }
  if (typeof price === 'string') {
    if (price.endsWith('+')) {
      const base = price.slice(0, -1)
      return base.startsWith('$') ? `${base}+` : `$${base}+`
    }
    if (price.includes('/')) {
      return price
        .split('/')
        .map((part) => {
          const trimmed = part.trim()
          return trimmed.startsWith('$') ? trimmed : `$${trimmed}`
        })
        .join(' / ')
    }
  }
  return price
}

export function getImage(imageKey) {
  return salon.images[imageKey] ?? ''
}

export function getSpotlightImage(entry) {
  if (entry?.image) return entry.image
  return getImage(entry?.imageKey)
}
