/*
 * config.js — single source of truth for everything editable.
 * Unknown commercial facts stay as [TODO_*] strings (global-searchable).
 * validateConfig() in app.js reports which TODOs block a real launch.
 */
window.APP_CONFIG = {
  environment: "preview", // "preview" | "production"
  locale: "en-US",
  currencyCode: "USD",
  domain: "[TODO_DOMAIN]", // e.g. "https://example.com" (no trailing slash)
  paymentUrl: "https://buy.stripe.com/00weVdaSmbq7bH0fv09ws01", // hosted checkout URL, https only (Stripe Payment Link). Course access delivery via Kwiga is not set up yet.
  videoMode: "facade", // "facade" | "lazy"

  brand: { name: "AI Video and Images Creation" },

  product: {
    name: "AI Video and Images Creation",
    type: "Educational bundle",
    currentPrice: 39, // number; change anytime, then re-minify
    // The comparison price is the SUM of the individual course prices (products[].price). oldPrice, oldPriceConfirmed,
    // discountPct and the saving are computed at the bottom of this file. Change a course price, not these.
    oldPrice: null, // computed: sum of confirmed course prices (what the courses cost bought separately)
    oldPriceConfirmed: false, // computed: true when every confirmed course has a numeric price
    discountPct: null, // computed
    saving: null, // computed: oldPrice - currentPrice
    access: "[TODO_ACCESS_TYPE]",
    guarantee: "30-day money-back guarantee: request a full refund for any reason within 30 days of purchase.", // "NONE" hides the section
    numberOfLessons: null, // computed below from confirmed products
    totalDuration: null, // computed from lesson durations
    language: "English",
    platform: "Kwiga", // confirmed learning platform
    loginUrl: "[TODO_COURSE_LOGIN_URL]",
    delivery: "[TODO_DELIVERY_METHOD]",
    updatePolicy: "[TODO_UPDATE_POLICY]"
  },

  /* Purchase buttons: {price} is appended from product.currentPrice. "short" is used in narrow containers (top sale bar). */
  cta: { text: "Get all {courses} courses", shortText: "Get the bundle" }, // {courses} = number of confirmed courses

  /* Price comparison copy. Numbers are filled in from the course prices and product.currentPrice. */
  compare: {
    compareText: "Purchased separately: {old}. Get all {courses} courses together for {price}.",
    separateLabel: "Purchased separately",
    bundleLabel: "Complete bundle",
    saveLine: "You save {save} · {pct}%",
    courseLine: "{coursePrice} individually",
    included: "Included in the bundle"
  },

  hero: {
    badge: "AI creation · 2026",
    title: "Turn your ideas into AI images, characters and short films.",
    text: "Three practical courses that guide you from your first prompt to images, animated characters and cinematic stories—with step-by-step lessons in OpenArt.",
    valueLine: "Beginner-friendly · {courses} courses · {lessons} video lessons", // counts are computed from confirmed products
    // Hero artwork: desktop (>900px) and mobile files. Paths are applied by app.js; index.html carries the same defaults for first paint.
    image: {
      desktop: { src: "assets/img/hero/hero-ai-creator-bundle-desktop.webp", width: 2000, height: 1600 },
      mobile: { src: "assets/img/hero/hero-ai-creator-bundle-mobile.webp", width: 1200, height: 1200 },
      alt: "Three-course AI Creator Bundle covering visual creation, character animation and filmmaking.",
      caption: "Concept artwork illustrating the bundle’s topics."
    }
  },

  /* Three standalone products grouped from the confirmed 4-section / 28-lesson outline. Counts and durations are computed. */
  products: [
    {
      id: "visual-foundations-and-first-creations",
      status: "confirmed",
      price: 29, // individual price in product.currency units; feeds the comparison price
      category: "Product 1 · Foundations",
      title: "AI Visual Foundations & First Creations",
      outcome: "Start with an idea. Create your first images and clips.",
      description: "Learn how light, composition and camera direction shape your results. Get comfortable with OpenArt and explore image and video generation from prompts and reference images.",
      points: ["Light, color, composition and camera basics", "Text-to-image and text-to-video workflows", "Image-to-video creation in OpenArt"],
      media: { type: "image", src: "assets/img/products/visual-foundations/cover-landscape.webp", width: 1600, height: 1200, alt: "Course cover: 01 AI Visual Foundations & First Creations, with a blue glass perfume bottle on pearl silk" },
      sections: [
        { title: "Introduction", lessons: [
          { title: "Course Roadmap", duration: "3:47" },
          { title: "Why Lighting and Shadows Matter", duration: "4:18" },
          { title: "Color Grading", duration: "2:14" },
          { title: "Camera Movements", duration: "3:36" },
          { title: "Common Camera Shots", duration: "5:28" },
          { title: "More Camera Shot Types", duration: "2:28" },
          { title: "How to Take a Better Photo or Shot", duration: "3:02" }
        ] },
        { title: "Getting Started with OpenArt", lessons: [
          { title: "The OpenArt All-in-One Platform", duration: "7:06" },
          { title: "What AI Video Creation Costs", duration: "4:26" },
          { title: "Your First AI Video from a Text Prompt", duration: "11:39" },
          { title: "Speed Up Your Work with AI Video Templates", duration: "6:57" },
          { title: "Organize Projects with Folders and Tags", duration: "3:49" },
          { title: "Turn Your Ideas into Stunning AI Images", duration: "9:15" },
          { title: "Transform Your Images into Cinematic AI Videos", duration: "9:39" }
        ] }
      ]
    },
    {
      id: "characters-voice-and-motion",
      status: "confirmed",
      price: 29, // individual price in product.currency units; feeds the comparison price
      category: "Product 2 · Characters",
      title: "AI Characters, Voice & Motion",
      outcome: "Create a character you can bring back—and bring to life.",
      description: "Build a recognizable character across scenes, then explore lip sync, motion sync and AI voice to give it expression and movement.",
      points: ["Consistent character creation", "Lip sync and motion sync", "AI voice and audio"],
      media: { type: "image", src: "assets/img/products/characters-voice-motion/cover-landscape.webp", width: 1600, height: 1200, alt: "Course cover: 02 AI Characters, Voice & Motion, with a portrait of a woman with curly hair and three expressions" },
      sections: [
        { title: "Professional AI Video Techniques", lessons: [
          { title: "Create Realistic Lip Sync Videos", duration: "10:06" },
          { title: "Design a Consistent AI Character", duration: "11:29" },
          { title: "Bring Your AI Character into Any Scene", duration: "10:27" },
          { title: "Generate Consistent Videos with Your Character", duration: "8:08" },
          { title: "More Professional Images with the Same Character", duration: "6:58" },
          { title: "Design AI Characters with Ready-Made Templates", duration: "10:23" },
          { title: "Use Motion Sync for Realistic Character Animation", duration: "7:22" },
          { title: "Generate 3D Worlds with AI", duration: "8:57" },
          { title: "Realistic AI Voice and Audio with OpenArt", duration: "8:37" },
          { title: "More Audio Features in OpenArt", duration: "3:36" }
        ] }
      ]
    },
    {
      id: "ai-filmmaking",
      status: "confirmed",
      price: 29, // individual price in product.currency units; feeds the comparison price
      category: "Product 3 · Short film",
      title: "AI Filmmaking with OpenArt",
      outcome: "Turn separate shots into a story.",
      description: "Follow a filmmaking workflow in OpenArt: develop your idea, plan characters and locations, refine scenes and review your short film.",
      points: ["Story, character and location planning", "Scene development and refinement", "Final review and editing"],
      media: { type: "image", src: "assets/img/products/ai-filmmaking/cover-landscape.webp", width: 1600, height: 1200, alt: "Course cover: 03 AI Filmmaking with OpenArt, with a figure on a rainy night street and a film strip" },
      sections: [
        { title: "AI Filmmaking with OpenArt", lessons: [
          { title: "Start Creating Your First AI Short Film", duration: "13:01" },
          { title: "Preview Characters and Locations", duration: "3:13" },
          { title: "Refine Your AI Movie Like a Director", duration: "4:53" },
          { title: "Review, Edit, and Improve Your AI Film", duration: "4:25" }
        ] }
      ]
    }
  ],

  /* Draft topics from the brief that are NOT confirmed by the program outline. Never rendered. */
  draftTopics: [
    { id: "ai-images-visual-direction", status: "draft", title: "AI Images & Visual Direction" },
    { id: "ai-music", status: "draft", title: "AI Music" },
    { id: "face-replacement-editing", status: "draft", title: "Face Replacement & Video Editing" }
  ],

  showcaseOrigin: "Concept AI images illustrating the course topics. Not student work or footage from the lessons.",
  // `featured: true` items are visible first; the rest open with "View all examples".
  showcase: [
    { id: "still", featured: true, category: "Images", title: "Product visuals for ads and social posts", task: "Explore lighting, materials and composition for product-focused images.", src: "assets/img/showcase/showcase-product-still-life.webp", width: 1600, height: 1200, alt: "A blue glass perfume bottle with a faceted crystal cap on folds of pearl silk, with warm highlights" },
    { id: "series", featured: true, category: "Characters", title: "One character. Different expressions.", task: "Explore how to keep a character recognizable as expressions change.", src: "assets/img/showcase/showcase-character-expressions.webp", width: 1600, height: 1200, alt: "Three portraits of the same woman with curly hair: calm, smiling and surprised" },
    { id: "street", featured: true, category: "Cinematic Scenes", title: "Cinematic scenes for your next story", task: "Explore atmosphere, framing and light for story-driven visuals.", src: "assets/img/showcase/showcase-rainy-night-street.webp", width: 1600, height: 1200, alt: "A man in a long coat walking along a wet cobblestone street at night, with glowing lanterns and a domed building in blue mist" },
    { id: "portrait", category: "Characters", title: "Character portrait", task: "Design one recognizable face: hair, jewelry, wardrobe and color palette.", src: "assets/img/showcase/showcase-character-portrait.webp", width: 1600, height: 1200, alt: "Portrait of a woman with short curly hair, freckles, gold hoop earrings and a cobalt blue shirt in warm backlight" },
    { id: "dunes", category: "Cinematic Scenes", title: "Wide shot at sunset", task: "Use scale: a small figure against layered dunes and a low sun.", src: "assets/img/showcase/showcase-sunset-wide-shot.webp", width: 1600, height: 1200, alt: "A person in a light coat walking across desert dunes toward a setting sun, with footprints in the sand" },
    { id: "anim", category: "Animation Concepts", title: "Character in motion", task: "Explore how pose, fabric and composition communicate movement.", src: "assets/img/showcase/showcase-character-motion.webp", width: 1600, height: 1200, alt: "A woman in a blue silk shirt and cream trousers leaping through the air, with the fabric streaming behind her" }
  ],
  showcaseToggle: { more: "View all examples", less: "Show fewer examples" },

  bundle: {
    title: "Three courses. One complete creative workflow.",
    intro: "Start with visual foundations, bring a character to life, then put the pieces together in a short film.",
    flow: "Create the visual → Bring it to life → Build the film"
  },

  tools: {
    title: "One creative workflow. Today’s AI tools.",
    text: "Learn in OpenArt, from image generation and character creation to motion, audio and filmmaking.",
    directions: ["Images", "Video", "Characters", "Motion", "Voice & Audio", "Filmmaking"],
    note: "AI tool subscriptions and generation credits are separate from the course purchase."
  },
  // Names from the brief that are NOT confirmed by the program outline. Never rendered until the lessons or materials confirm them.
  toolsUnconfirmed: ["Nano Banana Pro", "Veo", "Sora", "Seedance", "music generation", "face swapping", "OpenArt Director"],

  // Optional real lesson / workflow demo. Hidden completely until enabled and a source is set.
  realLesson: {
    enabled: false,
    title: "See the workflow before you start.",
    description: "",
    poster: "", // image shown before the video loads
    localVideo: null, // { src: "assets/video/products/demo.mp4", mime: "video/mp4", captions: [{ src: "...vtt", lang: "en", label: "English" }] }
    videoEmbed: null, // { vimeoId: "123456789" }
    caption: ""
  },

  // Compact accordion under the hero buttons. Items render only when visible is true and the text is real (not a [TODO_*] value).
  heroInfo: {
    items: [
      {
        id: "who-its-for", visible: true, title: "Who it’s for",
        text: "For beginners, content creators, marketers and educators who want to create AI images, animated characters and short films. No previous experience with AI tools is required."
      },
      {
        id: "how-access-works", visible: false, title: "How access works", // keep hidden until delivery and access duration are confirmed
        text: "[TODO_ACCESS_INFO]" // when Kwiga is set up: briefly describe how access is received, how lessons are watched and how long access lasts
      },
      {
        id: "what-you-need", visible: true, title: "What you need",
        text: "Internet access and an OpenArt account for the practical workflows. AI tool subscriptions and generation credits are purchased separately and are not included in the bundle price."
      }
    ]
  },

  finalCta: {
    title: "Your next idea deserves more than a prompt.",
    text: "Learn a connected workflow for AI images, characters and short films—all in one three-course bundle."
  },

  results: [],
  reviews: [], // [TODO_REVIEW_01] [TODO_REVIEW_02] [TODO_REVIEWS] — real reviews only
  socialProof: "[TODO_SOCIAL_PROOF]",
  rating: "[TODO_RATING]",
  bonuses: [], // [TODO_BONUSES] — confirmed extra materials only
  updates: "[TODO_UPDATE_POLICY]",

  sale: {
    enabled: true,
    timerMode: "daily", // "daily": counts down to the next midnight in `timezone`, repeating every day. "fixed": counts down to `endAt` once.
    timezone: "America/New_York", // IANA name. Midnight is computed in this zone for every visitor, whatever their device time zone.
    badgeText: "SAVE {pct}%",
    mainText: "All {courses} courses for {price}",
    shortText: "All {courses} courses for {price}",
    label: "Daily countdown",
    ctaText: "Get the bundle",
    noteText: "Refreshes daily at midnight ET. The {price} price stays the same.",
    // Used only when timerMode is "fixed":
    endAt: "[TODO_SALE_END_AT]", // ISO 8601 with offset, e.g. "2026-12-31T23:59:59-05:00"
    expiredBehavior: "hideDiscount" // fixed mode only: "hideDiscount" removes bar, strikethrough and badge after endAt; "hideBanner" removes the bar only
  },

  faq: [
    { q: "What is included in the bundle?", a: "@included" },
    { q: "How much do I save with the bundle?", a: "@savings" },
    { q: "Is this suitable for beginners?", a: "Yes. The program is built as a step-by-step path: it starts with light, color and camera basics, then moves into hands-on image, character and film workflows in OpenArt." },
    { q: "Which AI tools will I need?", a: "@tools" },
    { q: "Are AI tool subscriptions and credits included?", a: "No. AI tool subscriptions and generation credits are separate from the course purchase. The lesson “What AI Video Creation Costs” helps you plan a budget." },
    { q: "What language are the lessons in?", a: "@language" },
    { q: "How do I get access, and for how long?", a: "@access" },
    { q: "Can I learn from my phone?", a: "You can watch lessons on any device that plays them. Hands-on exercises depend on the AI tools you use, so check each tool's own device support before relying on a phone." },
    { q: "What is the refund policy?", a: "@refund" }
  ],

  company: {
    name: "[TODO_COMPANY_NAME]",
    address: "[TODO_COMPANY_ADDRESS]",
    number: "[TODO_COMPANY_NUMBER]",
    jurisdiction: "[TODO_JURISDICTION]"
  },
  support: { email: "[TODO_SUPPORT_EMAIL]" },
  delivery: { method: "[TODO_DELIVERY_METHOD]" },

  seo: {
    title: "AI Video and Images Creation — AI Content Creation Course Bundle",
    description:
      "Three practical courses that guide you from your first prompt to images, animated characters and cinematic stories, with step-by-step lessons in OpenArt.",
    ogImage: "/assets/img/social/ai-creator-bundle-og.jpg", // 1200x630 JPG. index.html carries the absolute og:image / twitter:image URL for crawlers; update it when the domain changes.
    ogImageWidth: 1200,
    ogImageHeight: 630
  },

  tracking: { metaPixelId: "[TODO_META_PIXEL_ID]", enabled: true, requireConsent: true }
};

/* Derived values — counts and durations come from the confirmed products. */
(function (c) {
  var n = 0, sec = 0;
  function toSec(d) { var p = String(d).split(":"); return (+p[0]) * 60 + (+p[1] || 0); }
  function fmt(t) { var m = Math.round(t / 60), h = Math.floor(m / 60); return (h ? h + " h " : "") + (m % 60 ? (m % 60) + " min" : (h ? "" : "0 min")); }
  c.products.forEach(function (p) {
    if (p.status !== "confirmed") return;
    var ps = 0; p.lessons = [];
    p.sections.forEach(function (s) { s.lessons.forEach(function (l) { ps += toSec(l.duration); p.lessons.push(l); }); });
    p.duration = fmt(ps); sec += ps; n += p.lessons.length;
  });
  c.product.numberOfLessons = n || "[TODO_LESSON_COUNT]";
  // Comparison price = sum of the individual course prices (single source of truth for the discount).
  var sep = 0, allPriced = true, cur = c.product.currentPrice;
  c.products.forEach(function (p) { if (p.status !== "confirmed") return; if (typeof p.price === "number") { sep += p.price; } else { allPriced = false; } });
  if (allPriced && sep > 0) {
    c.product.oldPrice = sep; c.product.oldPriceConfirmed = true;
    if (typeof cur === "number" && cur > 0) { c.product.saving = sep - cur; c.product.discountPct = Math.round((1 - cur / sep) * 100); }
  }
  c.product.totalDuration = sec ? fmt(sec) : "[TODO_LESSON_COUNT]";
})(window.APP_CONFIG);
