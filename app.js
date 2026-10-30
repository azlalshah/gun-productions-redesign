// ==========================================================================
// GUN PRODUCTIONS — INTERACTIVE VIDEO SHOWCASE ENGINE
// Real portfolio media, client ads, viral shorts & widescreen cinema films
// ==========================================================================

const HERO_REELS = [
  {
    id: 'showreel',
    titleNL: 'GUN Agency Showreel & Strategie',
    titleEN: 'GUN Agency Showreel & Strategy',
    metaNL: 'VSL + High-Converting Client Clips',
    metaEN: 'VSL + High-Converting Client Clips',
    src: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792350942942-eq26nz?alt=media'
  },
  {
    id: 'onlocation',
    titleNL: 'Op Locatie Filmen (1 Dag = 30+ Video\'s)',
    titleEN: 'On-Location Cinema Shoot (1 Day = 30+ Clips)',
    metaNL: 'Sony Cinema Line · Eindhoven & NL',
    metaEN: 'Sony Cinema Line · Eindhoven & NL',
    src: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791971631196-hjcgfx?alt=media'
  },
  {
    id: 'editing',
    titleNL: 'High-Retention Edit & Color Grading',
    titleEN: 'High-Retention Edit & Color Grading',
    metaNL: 'DaVinci Resolve · Hook Optimalisatie',
    metaEN: 'DaVinci Resolve · Hook Optimization',
    src: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791971746902-hr2qx0?alt=media'
  },
  {
    id: 'metaads',
    titleNL: 'Meta Ads & Directe CRM Leadflow',
    titleEN: 'Meta Ads & Direct CRM Lead Engine',
    metaNL: '5 Kanalen · Gekwalificeerde Leads',
    metaEN: '5 Channels · Qualified B2B Leads',
    src: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791964927924-fc2k93?alt=media'
  }
];

// Unified Video Vault — Structured in symmetrical triplets:
// [Vertical 9:16 Reel] - [Widescreen 16:9 Cinema Film in Middle] - [Vertical 9:16 Reel]
const VIDEO_VAULT = [
  // --- ROW 1 ---
  {
    id: 'timar-ad',
    title: 'Timar Security',
    category: 'ads',
    badgeNL: 'Recruitment · 9:16',
    badgeEN: 'Recruitment · 9:16',
    kpi: '€10,86 CPL',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413343-n5294b?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791972837893-jx99hi?alt=media'
  },
  {
    id: 'antarctica-sea-shepherd',
    gearSpec: 'Sony FX6 Cinema Line · DJI Mavic 3 Cine',
    gradeSpec: '4K DCI · DaVinci Resolve Film Emulation',
    highlightNL: 'Overweldigende 4K cinema beelden in -20°C expedities met miljoenen organisch bereik.',
    highlightEN: 'Immersive 4K cinema footage in -20°C polar expeditions with millions in organic reach.',
    title: 'Antarctica with Sea Shepherd',
    category: 'cinema',
    badgeNL: 'Cinema Docu · 16:9',
    badgeEN: 'Cinema Docu · 16:9',
    kpi: '4K Expedition',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: true,
    autoLoop: false,
    type: 'youtube',
    ytId: 'A2LEw_J477o',
    thumb: 'https://img.youtube.com/vi/A2LEw_J477o/hqdefault.jpg',
    fallbackThumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1751869236881_230313-AD-MVDG--DJI_0488_230305_AD_MG_Mavic3_AK_Antarctica%20penguins%20and%20iceberg%20closeups.jpg?alt=media'
  },
  {
    id: 'azura-ad',
    title: 'Azura',
    category: 'ads',
    badgeNL: 'Meta Ad · 9:16',
    badgeEN: 'Meta Ad · 9:16',
    kpi: 'High-ROAS',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413342-5v61kp?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791972837884-ejb6y5?alt=media'
  },

  // --- ROW 2 (Wide Cinema in Middle as requested) ---
  {
    id: 'roy-poolboy',
    title: 'Roy the Poolboy',
    category: 'ads',
    badgeNL: 'Organic + Ads · 9:16',
    badgeEN: 'Organic + Ads · 9:16',
    kpi: '2.0M+ Views',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413342-6sq2fm?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791972837892-4wsa4q?alt=media'
  },
  {
    id: 'skiing-switzerland',
    gearSpec: 'FPV High-Speed Drone · 4K 60FPS ProRes',
    gradeSpec: 'Rec.709 High Dynamic Alpine Color Profile',
    highlightNL: 'High-energy actieshots die kijkers direct onderdompelen in het winterlandschap.',
    highlightEN: 'High-octane action cinematography that pulls viewers directly into the alpine world.',
    title: 'Skiing in Switzerland',
    category: 'cinema',
    badgeNL: 'Aerial Cinema · 16:9',
    badgeEN: 'Aerial Cinema · 16:9',
    kpi: 'Commercial',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: true,
    autoLoop: false,
    type: 'youtube',
    ytId: '6Cz_mut8UmQ',
    thumb: 'https://img.youtube.com/vi/6Cz_mut8UmQ/hqdefault.jpg'
  },
  {
    id: 'vdvelde-bv',
    title: 'VdVelde Waterplanten BV',
    category: 'ads',
    badgeNL: 'Social Serie · 9:16',
    badgeEN: 'Social Series · 9:16',
    kpi: '367K Views',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413343-fzzozt?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791965345586-96nm4h?alt=media'
  },

  // --- ROW 3 (Wide Cinema in Middle) ---
  {
    id: 'short-redefine',
    title: 'Redefine Retreat',
    category: 'shorts',
    badgeNL: 'Hospitality · 9:16',
    badgeEN: 'Hospitality · 9:16',
    kpi: 'Luxury Brand',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764082567997-wl4n1y?alt=media&token=156854d2-dba7-45eb-918b-4ffdd8525a0c',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764082672263-tprs9p?alt=media'
  },
  {
    id: 'fpv-oneshot',
    gearSpec: 'Custom Naked Cine-Drone · Smooth One-Take',
    gradeSpec: 'Custom Sound Design & Atmos Spatial Audio',
    highlightNL: 'Vlekkeloze single-take indoor-to-outdoor vlucht zonder ook maar één zichtbare knip.',
    highlightEN: 'Flawless single-take indoor-to-outdoor flight without a single visible cut.',
    title: 'FPV Drone One-Shot',
    category: 'cinema',
    badgeNL: 'FPV Cinema · 16:9',
    badgeEN: 'FPV Cinema · 16:9',
    kpi: 'One-Take 4K',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: true,
    autoLoop: false,
    type: 'youtube',
    ytId: 'O-j2jWV501s',
    thumb: 'https://img.youtube.com/vi/O-j2jWV501s/hqdefault.jpg'
  },
  {
    id: 'short-sea-shepherd',
    title: 'Sea Shepherd Antarctica',
    category: 'shorts',
    badgeNL: 'Ocean Reel · 9:16',
    badgeEN: 'Ocean Reel · 9:16',
    kpi: 'Viral Series',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764084503560-iycven?alt=media&token=44a13421-e362-4e60-a6db-a56bc7d4190d',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1751869236881_230313-AD-MVDG--DJI_0488_230305_AD_MG_Mavic3_AK_Antarctica%20penguins%20and%20iceberg%20closeups.jpg?alt=media'
  },

  // --- ROW 4 (Wide Cinema in Middle) ---
  {
    id: 'short-honeybalm',
    title: 'Honeybalm Commercial',
    category: 'shorts',
    badgeNL: 'DTC Ad · 9:16',
    badgeEN: 'DTC Ad · 9:16',
    kpi: 'High-Hook',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764080133042-eldmf6?alt=media&token=8424b371-8e07-4016-9908-3ff9952cd22d',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764081457572-lk38ew?alt=media'
  },
  {
    id: 'xpand-yacht',
    gearSpec: 'Sony FX3 · Gimbal & Cine Prime Lenses',
    gradeSpec: 'Warm Mediterranean Golden-Hour Tone',
    highlightNL: 'Cinematische luxe storytelling die direct resulteert in gekwalificeerde leads.',
    highlightEN: 'Cinematic luxury storytelling engineered for high-ticket lead generation.',
    title: 'X-Pand Yacht Retreat',
    category: 'cinema',
    badgeNL: 'Brand Film · 16:9',
    badgeEN: 'Brand Film · 16:9',
    kpi: 'Mediterranean',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: true,
    autoLoop: false,
    type: 'youtube',
    ytId: 'IhgRVwKZE98',
    thumb: 'https://img.youtube.com/vi/IhgRVwKZE98/hqdefault.jpg'
  },
  {
    id: 'chesto-giveaway',
    title: 'Chesto Campaign',
    category: 'ads',
    badgeNL: 'Giveaway · 9:16',
    badgeEN: 'Giveaway · 9:16',
    kpi: 'Lead Magnet',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: true,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413341-fo34k8?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791972837893-0x76pf?alt=media'
  },

  // --- ADDITIONAL CLIENT ADS & SHORTS ---
  {
    id: 'plnktn-ad',
    title: 'Plnktn',
    category: 'ads',
    badgeNL: 'E-Com Ad · 9:16',
    badgeEN: 'E-Com Ad · 9:16',
    kpi: 'Hook Test',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413342-8sdg6h?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791972837892-b0r8fc?alt=media'
  },
  {
    id: 'seeds-foundation',
    title: 'Seeds Foundation',
    category: 'ads',
    badgeNL: 'Brand Story · 9:16',
    badgeEN: 'Brand Story · 9:16',
    kpi: 'Multi-Channel',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413342-y679ru?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791972837893-cjtuks?alt=media'
  },
  {
    id: 'roy-martina',
    title: 'Dr. Roy Martina',
    category: 'ads',
    badgeNL: 'Authority · 9:16',
    badgeEN: 'Authority · 9:16',
    kpi: 'Retainer Series',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: true,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1792354413343-jhplqu?alt=media',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791972837894-05ukum?alt=media'
  },
  {
    id: 'short-deplay',
    title: 'Deplay Kids Tablets',
    category: 'shorts',
    badgeNL: 'Product Ad · 9:16',
    badgeEN: 'Product Ad · 9:16',
    kpi: 'E-Com Scale',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764078674665-obd0l2?alt=media&token=786ad73f-5b45-411b-88af-fd5d7611ff97',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764081622816-okh0i6?alt=media'
  },
  {
    id: 'short-wendy',
    title: 'Wendy van Dijk',
    category: 'shorts',
    badgeNL: 'Personal Brand · 9:16',
    badgeEN: 'Personal Brand · 9:16',
    kpi: 'Celebrity Talent',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1766700877133-mg2spu?alt=media&token=079d92c7-6a96-44e5-a743-866db2242977',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1766700930681-dyjdi5?alt=media&token=75858302-1c9f-42f1-8050-a223a6181f3d'
  },
  {
    id: 'short-gbr',
    title: 'Great Barrier Reef',
    category: 'shorts',
    badgeNL: 'Travel Reel · 9:16',
    badgeEN: 'Travel Reel · 9:16',
    kpi: 'Aerial & Sea',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764082442226-onkx2m?alt=media&token=bc205e57-f04a-4aea-9a25-2fac5b0a6d7b',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1751869236882_MIK03457-%20Bali-3.jpg?alt=media'
  },
  {
    id: 'short-aftermovie',
    title: 'Event Aftermovie',
    category: 'shorts',
    badgeNL: 'Live Event · 9:16',
    badgeEN: 'Live Event · 9:16',
    kpi: 'Dynamic Cut',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764083593782-dxqf1r?alt=media&token=080899b5-54a5-4a85-a9f0-7876c3446445',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764087309335-fg29hm?alt=media'
  },
  {
    id: 'short-treehouse',
    title: 'Magical Tree House',
    category: 'shorts',
    badgeNL: 'Hospitality · 9:16',
    badgeEN: 'Hospitality · 9:16',
    kpi: 'Boutique Stay',
    aspect: 'vertical',
    bentoRole: 'reel',
    featured: false,
    autoLoop: false,
    type: 'mp4',
    videoSrc: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764084778067-ob8nus?alt=media&token=dfef51dd-bc30-4390-8ea6-4411669979e1',
    thumb: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1764085132683-qb33fg?alt=media'
  },

  // --- ADDITIONAL WIDESCREEN 16:9 CINEMATIC FILMS ---
  {
    id: 'starstruck-glamping',
    title: 'Starstruck Glamping',
    category: 'cinema',
    badgeNL: 'Cinema Film · 16:9',
    badgeEN: 'Cinema Film · 16:9',
    kpi: 'Hero Film',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: false,
    autoLoop: false,
    type: 'youtube',
    ytId: 'DG_4dUjf5xE',
    thumb: 'https://img.youtube.com/vi/DG_4dUjf5xE/hqdefault.jpg'
  },
  {
    id: 'mexico-cinema',
    title: 'Traveling Through Mexico',
    category: 'cinema',
    badgeNL: 'Travel Docu · 16:9',
    badgeEN: 'Travel Docu · 16:9',
    kpi: 'Color Grade',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: false,
    autoLoop: false,
    type: 'youtube',
    ytId: 'L1EdLoQjgEI',
    thumb: 'https://img.youtube.com/vi/L1EdLoQjgEI/hqdefault.jpg'
  },
  {
    id: 'algarve-cinema',
    title: 'The Algarve Coastline',
    category: 'cinema',
    badgeNL: 'Aerial Film · 16:9',
    badgeEN: 'Aerial Film · 16:9',
    kpi: 'Mavic 3 Cine',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: false,
    autoLoop: false,
    type: 'youtube',
    ytId: 'FdK785ZXfhs',
    thumb: 'https://img.youtube.com/vi/FdK785ZXfhs/hqdefault.jpg'
  },
  {
    id: 'antarctica-wildlife',
    title: 'Antarctica Wildlife Expedition',
    category: 'cinema',
    badgeNL: 'Nature Docu · 16:9',
    badgeEN: 'Nature Docu · 16:9',
    kpi: 'Polar 4K',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: false,
    autoLoop: false,
    type: 'youtube',
    ytId: 'HpU-_60OuSA',
    thumb: 'https://img.youtube.com/vi/HpU-_60OuSA/hqdefault.jpg'
  },
  {
    id: 'spain-retreat',
    title: 'Spain Wellness Retreat',
    category: 'cinema',
    badgeNL: 'Aftermovie · 16:9',
    badgeEN: 'Aftermovie · 16:9',
    kpi: 'Story Film',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: false,
    autoLoop: false,
    type: 'youtube',
    ytId: 'VsOhA2hf2AM',
    thumb: 'https://img.youtube.com/vi/VsOhA2hf2AM/hqdefault.jpg'
  },
  {
    id: 'south-africa',
    title: 'South Africa Expedition',
    category: 'cinema',
    badgeNL: 'Documentary · 16:9',
    badgeEN: 'Documentary · 16:9',
    kpi: 'Widescreen',
    aspect: 'cinema',
    bentoRole: 'cinema',
    featured: false,
    autoLoop: false,
    type: 'youtube',
    ytId: 'vB8GoVASNwo',
    thumb: 'https://img.youtube.com/vi/vB8GoVASNwo/hqdefault.jpg'
  }
];

const PIPELINE_STEPS = [
  {
    num: '01',
    titleNL: '10 tot 30+ Scripts & Hooks',
    titleEN: '10 to 30+ Scripts & Scroll-Stopping Hooks',
    descNL: 'Wij analyseren winnende formats in jouw markt en schrijven alle scripts vooraf.',
    descEN: 'We research winning formats in your market and script every single video for you.',
    video: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791971631196-hjcgfx?alt=media'
  },
  {
    num: '02',
    titleNL: '1 Filmdag op Locatie',
    titleEN: '1 Shoot Day On Location',
    descNL: 'Cinema camera\'s, licht, drone en regie op jouw bedrijfslocatie. Minimale tijdsinvestering.',
    descEN: 'Cinema cameras, lighting, FPV/drone, and on-set direction at your HQ in a single day.',
    video: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791965955170-y2s7zy?alt=media'
  },
  {
    num: '03',
    titleNL: 'High-Retention Montage & Color Grade',
    titleEN: 'High-Retention Editing & Cinema Grade',
    descNL: 'Strakke cuts, sound design en ondertiteling die kijkers vasthouden tot de CTA.',
    descEN: 'Punchy pacing, bespoke sound design, and dynamic captions engineered for retention.',
    video: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791971746902-hr2qx0?alt=media'
  },
  {
    num: '04',
    titleNL: 'Publicatie op 5 Kanalen',
    titleEN: 'Omnichannel Publishing on 5 Platforms',
    descNL: 'Instagram, TikTok, LinkedIn, YouTube & Facebook — volledig door ons ingepland.',
    descEN: 'Instagram, TikTok, LinkedIn, YouTube & Facebook — scheduled and managed end-to-end.',
    video: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791963742291-xpzlle?alt=media'
  },
  {
    num: '05',
    titleNL: 'Meta Ads & Directe CRM Leads',
    titleEN: 'Meta Paid Ads & Direct CRM Delivery',
    descNL: 'Winnende video\'s schalen we met gerichte Meta-campagnes rechtstreeks jouw CRM in.',
    descEN: 'Top-performing creatives are scaled via targeted Meta campaigns straight into your CRM.',
    video: 'https://cdn.framekit.ai/v0/b/digisell-io.appspot.com/o/users%2FeBCujQlsE0cWS5X8OyVGfSDZhgZ2%2F1791964927924-fc2k93?alt=media'
  }
];

let currentLang = 'nl';
let currentFilter = 'featured';
let currentModalList = [];
let currentModalIndex = 0;
let viewportObserver = null;

// ==========================================================================
// MODERN WEB GUIDANCE HELPERS: Top-Layer Exit + Dialog Light-Dismiss Fallback
// ==========================================================================
let supportsDisplayTransition;
function canTransitionDisplay() {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
    return false;
  }
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = 'none';
  supportsDisplayTransition = getComputedStyle(probe).display === 'block';
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit() {
  return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
}

async function closeTopLayer(dialogEl) {
  stopModalMedia();
  if (!supportsTopLayerExit()) {
    dialogEl.setAttribute('data-closing', '');
    const animations = dialogEl.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((r) => setTimeout(r, 2000))
      ]);
    }
    if (!dialogEl.hasAttribute('data-closing')) return;
    dialogEl.removeAttribute('data-closing');
  }
  dialogEl.close();
}

function initDialogBehavior() {
  const dialog = document.getElementById('cinemaDialog');
  if (!dialog) return;

  // Fallback for browsers without <dialog closedby="any"> support (e.g. Safari)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (isDialogContent) return;
      closeTopLayer(dialog);
    });
  }

  // Intercept Esc / native cancel so exit animates cleanly
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeTopLayer(dialog);
  });

  dialog.addEventListener('close', () => {
    stopModalMedia();
  });

  document.getElementById('dialogCloseBtn')?.addEventListener('click', () => {
    closeTopLayer(dialog);
  });

  document.getElementById('dialogPrevBtn')?.addEventListener('click', () => {
    navigateModal(-1);
  });

  document.getElementById('dialogNextBtn')?.addEventListener('click', () => {
    navigateModal(1);
  });

  window.addEventListener('keydown', (e) => {
    if (!dialog.open) return;
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
  });
}

function stopModalMedia() {
  const stage = document.getElementById('dialogPlayerStage');
  if (stage) stage.innerHTML = '';
}

// ==========================================================================
// FAST VIDEO STREAMING & VIEWPORT OBSERVER (Instant 0ms Display)
// ==========================================================================
function setupViewportVideoObserver(container) {
  if (viewportObserver) {
    viewportObserver.disconnect();
  }

  viewportObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector('video.auto-loop-video');
        if (!video) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.1 }
  );

  container.querySelectorAll('.video-card').forEach((card) => {
    const video = card.querySelector('video.auto-loop-video');
    if (video) {
      video.play().catch(() => {});
      viewportObserver.observe(card);
    }
  });

  const resumeAll = () => {
    container.querySelectorAll('video.auto-loop-video').forEach((v) => {
      if (v.paused) v.play().catch(() => {});
    });
    window.removeEventListener('touchstart', resumeAll);
    window.removeEventListener('click', resumeAll);
  };
  window.addEventListener('touchstart', resumeAll, { passive: true });
  window.addEventListener('click', resumeAll, { passive: true });
}

function getFilteredVideos(filter) {
  if (filter === 'featured') return VIDEO_VAULT.filter((v) => v.featured);
  if (filter === 'all') return VIDEO_VAULT;
  return VIDEO_VAULT.filter((v) => v.category === filter);
}

function buildCardMarkup(item, idx, customClass = '') {
  const badge = currentLang === 'nl' ? item.badgeNL : item.badgeEN;
  const expandText = currentLang === 'nl' ? 'Volledig scherm ↗' : 'Watch w/ Sound ↗';
  const isCinemaWideBento = customClass && customClass.includes('bento-cinema-wide');

  let cardClasses = ['video-card'];
  if (customClass) {
    cardClasses.push(customClass);
  } else if (item.aspect === 'cinema') {
    cardClasses.push('ratio-cinema');
  } else {
    cardClasses.push('ratio-vertical');
  }

  // Real video frame & instant autoplay for all MP4 videos (NO misleading static logo images!)
  let mediaMarkup = '';
  if (item.type === 'mp4' && item.videoSrc) {
    cardClasses.push('auto-loop-card');
    mediaMarkup = `
      <video class="card-video auto-loop-video"
             src="${item.videoSrc}"
             autoplay
             muted
             loop
             playsinline
             preload="auto"
             aria-label="${item.title}">
      </video>
    `;
  } else {
    // YouTube Cinema Film (Real 4K still thumbnail directly from YouTube)
    const ytThumb = item.ytId ? `https://img.youtube.com/vi/${item.ytId}/hqdefault.jpg` : item.thumb;
    mediaMarkup = `
      <img class="cinema-thumb" src="${ytThumb}" alt="${item.title}" loading="lazy" decoding="async" />
    `;
  }

  if (isCinemaWideBento) {
    const highlight = currentLang === 'nl' ? item.highlightNL : item.highlightEN;
    const kicker = currentLang === 'nl' ? '4K Cinema · Bedrijfsdocumentaires' : '4K Cinema · Brand Documentaries';
    return `
      <article class="${cardClasses.join(' ')}" tabindex="0" role="button"
               data-index="${idx}" data-id="${item.id}"
               aria-label="${item.title} - ${badge}">
        <div class="cinema-stage-wrap">
          <div class="video-card-media">
            ${mediaMarkup}
          </div>
          <div class="card-play-orb" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v14l11-7-11-7z"/>
            </svg>
          </div>
          <div class="video-card-overlay">
            <div class="card-top-badges">
              <span class="format-pill">${badge}</span>
              ${item.kpi ? `<span class="kpi-pill">${item.kpi}</span>` : ''}
            </div>
            <div class="card-bottom-meta">
              <span class="card-expand-hint">${expandText}</span>
            </div>
          </div>
        </div>
        <div class="cinema-clean-info">
          <span class="cinema-clean-kicker">${kicker}</span>
          <h3 class="cinema-clean-title">${item.title}</h3>
          <p class="cinema-clean-desc">${highlight || (currentLang === 'nl' ? 'High-end cinema storytelling & commercials gefilmd op Sony Cinema Line & DJI Cine.' : 'High-end cinema storytelling & commercials shot on Sony Cinema Line & DJI Cine.')}</p>
        </div>
      </article>
    `;
  }

  return `
    <article class="${cardClasses.join(' ')}" tabindex="0" role="button"
             data-index="${idx}" data-id="${item.id}"
             aria-label="${item.title} - ${badge}">
      <div class="video-card-media">
        ${mediaMarkup}
      </div>
      <div class="card-play-orb" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.14v14l11-7-11-7z"/>
        </svg>
      </div>
      <div class="video-card-overlay">
        <div class="card-top-badges">
          <span class="format-pill">${badge}</span>
          ${item.kpi ? `<span class="kpi-pill">${item.kpi}</span>` : ''}
        </div>
        <div class="card-bottom-meta">
          <span class="card-category">${item.type === 'youtube' ? '4K Cinema' : 'Social / Ad Reel'}</span>
          <h3 class="card-title">${item.title}</h3>
          <span class="card-expand-hint">${expandText}</span>
        </div>
      </div>
    </article>
  `;
}

function renderVideoVault() {
  const container = document.getElementById('videoGrid');
  if (!container) return;

  if (currentFilter === 'all') {
    currentModalList = VIDEO_VAULT;
    container.className = 'vault-all-wrapper';

    const cinemaItems = VIDEO_VAULT.filter(v => v.category === 'cinema');
    const adsItems = VIDEO_VAULT.filter(v => v.category === 'ads');
    const shortsItems = VIDEO_VAULT.filter(v => v.category === 'shorts');

    const cinemaMarkup = cinemaItems
      .map(item => buildCardMarkup(item, VIDEO_VAULT.indexOf(item), 'ratio-cinema'))
      .join('');

    const adsMarkup = adsItems
      .map(item => buildCardMarkup(item, VIDEO_VAULT.indexOf(item), 'ratio-vertical'))
      .join('');

    const shortsMarkup = shortsItems
      .map(item => buildCardMarkup(item, VIDEO_VAULT.indexOf(item), 'ratio-vertical'))
      .join('');

    const titleCinema = currentLang === 'nl' ? '4K Cinematic Films & Bedrijfsdocu\'s (16:9)' : '4K Cinematic Films & Brand Documentaries (16:9)';
    const titleAds = currentLang === 'nl' ? 'Meta Advertenties & Klant Cases (9:16)' : 'Meta Paid Ads & Client Cases (9:16)';
    const titleShorts = currentLang === 'nl' ? 'Virale Shorts & Social Portfolio (9:16)' : 'Viral Shorts & Social Portfolio (9:16)';

    container.innerHTML = `
      <div class="vault-all-group">
        <div class="vault-group-header">
          <span class="group-header-badge">16:9 Widescreen</span>
          <h3 class="group-header-title">${titleCinema} (${cinemaItems.length})</h3>
        </div>
        <div class="video-grid layout-cinema">
          ${cinemaMarkup}
        </div>
      </div>

      <div class="vault-all-group">
        <div class="vault-group-header">
          <span class="group-header-badge">9:16 Performance</span>
          <h3 class="group-header-title">${titleAds} (${adsItems.length})</h3>
        </div>
        <div class="video-grid layout-vertical">
          ${adsMarkup}
        </div>
      </div>

      <div class="vault-all-group">
        <div class="vault-group-header">
          <span class="group-header-badge">9:16 Virality</span>
          <h3 class="group-header-title">${titleShorts} (${shortsItems.length})</h3>
        </div>
        <div class="video-grid layout-vertical">
          ${shortsMarkup}
        </div>
      </div>
    `;
  } else {
    const list = getFilteredVideos(currentFilter);
    currentModalList = list;

    container.className = 'video-grid';
    if (currentFilter === 'featured') {
      container.classList.add('layout-bento');
    } else if (currentFilter === 'cinema') {
      container.classList.add('layout-cinema');
    } else {
      container.classList.add('layout-vertical');
    }

    container.innerHTML = list
      .map((item, idx) => {
        let customClass = '';
        if (currentFilter === 'featured') {
          customClass = item.bentoRole === 'cinema' ? 'bento-cinema-wide' : 'bento-reel';
        } else if (currentFilter === 'cinema') {
          customClass = 'ratio-cinema' + (idx === 0 ? ' cinema-featured' : '');
        } else {
          customClass = item.aspect === 'cinema' ? 'ratio-cinema' : 'ratio-vertical';
        }
        return buildCardMarkup(item, idx, customClass);
      })
      .join('');
  }

  attachCardInteractions(container);
  setupViewportVideoObserver(container);

  if (window.gsap) {
    gsap.fromTo(
      container.querySelectorAll('.video-card'),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out' }
    );
  }
}

function attachCardInteractions(grid) {
  const cursor = document.getElementById('playCursor');

  grid.querySelectorAll('.video-card').forEach((card) => {
    const hoverVid = card.querySelector('video.hover-video');

    card.addEventListener('mouseenter', () => {
      cursor?.classList.add('is-visible');
      if (hoverVid) {
        if (!hoverVid.src && hoverVid.dataset.src) {
          hoverVid.src = hoverVid.dataset.src;
        }
        hoverVid.play().then(() => {
          card.classList.add('is-playing-preview');
        }).catch(() => {});
      }
    });

    card.addEventListener('mouseleave', () => {
      cursor?.classList.remove('is-visible');
      if (hoverVid) {
        hoverVid.pause();
        card.classList.remove('is-playing-preview');
      }
    });

    card.addEventListener('click', () => {
      const idx = Number(card.dataset.index);
      openCinemaModal(idx);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCinemaModal(Number(card.dataset.index));
      }
    });
  });
}

// ==========================================================================
// OPEN & NAVIGATE CINEMA THEATER LIGHTBOX
// ==========================================================================
function openCinemaModal(index) {
  const dialog = document.getElementById('cinemaDialog');
  if (!dialog || !currentModalList[index]) return;

  currentModalIndex = index;
  populateModalItem(currentModalList[index]);

  if (!dialog.open) {
    dialog.showModal();
  }
}

function openVideoById(videoId) {
  const idxInAll = VIDEO_VAULT.findIndex((v) => v.id === videoId);
  if (idxInAll === -1) return;
  currentModalList = VIDEO_VAULT;
  openCinemaModal(idxInAll);
}

function navigateModal(delta) {
  if (!currentModalList.length) return;
  currentModalIndex = (currentModalIndex + delta + currentModalList.length) % currentModalList.length;
  populateModalItem(currentModalList[currentModalIndex]);
}

function populateModalItem(item) {
  const dialog = document.getElementById('cinemaDialog');
  const stage = document.getElementById('dialogPlayerStage');
  const titleEl = document.getElementById('cinemaTitle');
  const badgeEl = document.getElementById('cinemaBadge');
  const kpiEl = document.getElementById('cinemaKpi');

  dialog.classList.toggle('is-vertical-modal', item.aspect === 'vertical');
  titleEl.textContent = item.title;
  badgeEl.textContent = currentLang === 'nl' ? item.badgeNL : item.badgeEN;
  kpiEl.textContent = item.kpi || '';

  if (item.type === 'youtube') {
    stage.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${item.ytId}?autoplay=1&rel=0&modestbranding=1"
        title="${item.title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  } else {
    stage.innerHTML = `
      <video src="${item.videoSrc}" controls autoplay playsinline></video>
    `;
  }
}

// ==========================================================================
// HERO REEL DOCK & PIPELINE INTERACTIVITY
// ==========================================================================
function renderHeroReelDock() {
  const dock = document.getElementById('heroReelList');
  const heroVideo = document.getElementById('heroBgVideo');
  if (!dock || !heroVideo) return;

  dock.innerHTML = HERO_REELS.map((r, i) => `
    <button type="button" class="reel-switch-item ${i === 0 ? 'is-active' : ''}" data-src="${r.src}">
      <div>
        <span class="reel-switch-title">${currentLang === 'nl' ? r.titleNL : r.titleEN}</span>
        <span class="reel-switch-meta">${currentLang === 'nl' ? r.metaNL : r.metaEN}</span>
      </div>
      <div class="reel-eq" aria-hidden="true"><span></span><span></span><span></span></div>
    </button>
  `).join('');

  dock.querySelectorAll('.reel-switch-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      dock.querySelectorAll('.reel-switch-item').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      heroVideo.style.opacity = '0.3';
      setTimeout(() => {
        heroVideo.src = btn.dataset.src;
        heroVideo.play().catch(() => {});
        heroVideo.style.opacity = '1';
      }, 180);
    });
  });
}

function renderPipelineSteps() {
  const listEl = document.getElementById('pipelineStepsList');
  const vidEl = document.getElementById('pipelineStageVideo');
  const capTitle = document.getElementById('pipelineCaptionTitle');
  if (!listEl || !vidEl) return;

  listEl.innerHTML = PIPELINE_STEPS.map((s, i) => `
    <button type="button" class="step-card ${i === 0 ? 'is-active' : ''}" data-idx="${i}">
      <span class="step-num">${s.num}</span>
      <span>
        <span class="step-title">${currentLang === 'nl' ? s.titleNL : s.titleEN}</span>
        <span class="step-desc">${currentLang === 'nl' ? s.descNL : s.descEN}</span>
      </span>
      <span aria-hidden="true">→</span>
    </button>
  `).join('');

  listEl.querySelectorAll('.step-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      const step = PIPELINE_STEPS[Number(btn.dataset.idx)];
      listEl.querySelectorAll('.step-card').forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      vidEl.src = step.video;
      vidEl.play().catch(() => {});
      if (capTitle) capTitle.textContent = currentLang === 'nl' ? step.titleNL : step.titleEN;
    });
  });
}

// ==========================================================================
// GSAP SCROLL ANIMATIONS (BELOW HERO ONLY)
// ==========================================================================
function initGsapAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  // Section-over-section reveal animations (HERO IS STRICTLY EXCLUDED)
  
  // 1. Vault Section Header
  gsap.fromTo('#vault .section-header-row', 
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#vault', start: 'top 85%' }
    }
  );

  // 2. ROI Section (Card stacking entrance)
  gsap.fromTo('#results .section-header-row',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#results', start: 'top 85%' }
    }
  );
  gsap.fromTo('#results .roi-card',
    { y: 35, opacity: 0.4 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '#results .roi-grid', start: 'top 88%' }
    }
  );

  // 3. System Section: Step cards ALWAYS stay visible, smooth slide-up
  gsap.fromTo('#system .section-header-row',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#system', start: 'top 85%' }
    }
  );
  gsap.fromTo('#system .step-card',
    { x: -20, opacity: 0.4 },
    { x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '#system .system-showcase', start: 'top 90%' }
    }
  );
  gsap.fromTo('#system .system-video-stage',
    { scale: 0.97, opacity: 0.5 },
    { scale: 1, opacity: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#system .system-showcase', start: 'top 90%' }
    }
  );

  // 4. Founder & Comparison Table
  gsap.fromTo('#founder .section-header-row',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#founder', start: 'top 85%' }
    }
  );
  gsap.fromTo('#founder .compare-table-wrap',
    { y: 30, opacity: 0.5 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#founder .compare-table-wrap', start: 'top 88%' }
    }
  );
  gsap.fromTo('#founder .founder-grid',
    { y: 35, opacity: 0.5 },
    { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '#founder .founder-grid', start: 'top 88%' }
    }
  );

  // 5. FAQ items
  gsap.fromTo('#faq .faq-item',
    { y: 25, opacity: 0.4 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out',
      scrollTrigger: { trigger: '#faq .faq-list', start: 'top 90%' }
    }
  );
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-nl][data-en]').forEach((el) => {
    el.innerHTML = lang === 'nl' ? el.dataset.nl : el.dataset.en;
  });

  document.querySelectorAll('.lang-btn').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });

  renderHeroReelDock();
  renderVideoVault();
  renderPipelineSteps();
}

document.addEventListener('DOMContentLoaded', () => {
  initDialogBehavior();
  renderHeroReelDock();
  renderVideoVault();
  renderPipelineSteps();
  initGsapAnimations();
  initLenisSmoothScroll();
  initStudioChatWidget();
  initSmartHeader();

  // Mobile Drawer Toggle
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  menuBtn?.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('is-open');
    menuBtn.classList.toggle('is-active', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  drawer?.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      menuBtn?.classList.remove('is-active');
      menuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer?.classList.contains('is-open') && !drawer.contains(e.target) && !menuBtn?.contains(e.target)) {
      drawer.classList.remove('is-open');
      menuBtn?.classList.remove('is-active');
      menuBtn?.setAttribute('aria-expanded', 'false');
    }
  });

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      currentFilter = tab.dataset.filter;
      renderVideoVault();
    });
  });

  // Hero sound toggle
  const heroVideo = document.getElementById('heroBgVideo');
  const soundBtn = document.getElementById('heroSoundBtn');
  soundBtn?.addEventListener('click', () => {
    if (!heroVideo) return;
    heroVideo.muted = !heroVideo.muted;
    soundBtn.innerHTML = heroVideo.muted
      ? '🔇 <span data-nl="Geluid Aan" data-en="Unmute Reel">' + (currentLang === 'nl' ? 'Geluid Aan' : 'Unmute Reel') + '</span>'
      : '🔊 <span data-nl="Geluid Uit" data-en="Mute Reel">' + (currentLang === 'nl' ? 'Geluid Uit' : 'Mute Reel') + '</span>';
  });

  // Fullscreen Showreel button in Hero
  document.getElementById('watchShowreelBtn')?.addEventListener('click', () => {
    openVideoById('antarctica-sea-shepherd');
  });

  // ROI Card Watch Video buttons
  document.querySelectorAll('[data-watch-id]').forEach((btn) => {
    btn.addEventListener('click', () => openVideoById(btn.dataset.watchId));
  });

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Magnetic Play Cursor tracking (desktop fine pointers)
  const cursor = document.getElementById('playCursor');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }, { passive: true });
  }
});

// ==========================================================================
// LENIS SMOOTH MOMENTUM SCROLL ENGINE (Silky Smooth 60fps Scroll)
// ==========================================================================
// ==========================================================================
// SMART AUTO-HIDE HEADER ON SCROLL DOWN / REVEAL ON SCROLL UP
// ==========================================================================
function initSmartHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (currentY < 90) {
          header.classList.remove('is-hidden');
          header.classList.remove('scrolled');
        } else {
          header.classList.add('scrolled');
          if (currentY > lastScrollY + 6 && currentY > 160) {
            header.classList.add('is-hidden');
          } else if (currentY < lastScrollY - 6) {
            header.classList.remove('is-hidden');
          }
        }
        lastScrollY = Math.max(0, currentY);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

let lenisInstance = null;
function initLenisSmoothScroll() {
  if (typeof window.Lenis === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  try {
    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.2
    });

    if (window.ScrollTrigger && window.gsap) {
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  } catch (err) {
    console.warn('Lenis init skipped:', err);
  }
}

// ==========================================================================
// GUN PRODUCTIONS STUDIO CHAT & AI CALL AGENT CONTROLLER
// (Modular architecture ready for Bland AI, Vapi, Retell, Gemini Live)
// ==========================================================================
window.GUN_AI_STUDIO = {
  chatWebhook: null,
  callWebhook: null,
  isCallActive: false,
  callTimer: null,
  callSeconds: 0
};

const AI_CHAT_RESPONSES = {
  pakket: {
    nl: "Onze samenwerkingen starten vanaf 1 opnamedag waarin we 10 tot 30+ video's schieten. Inclusief scriptwriting, regie, cinema edit, sound design en Meta Ads beheer. Wil je een vrijblijvend voorstel voor jouw markt?",
    en: "Our partnerships start from a single shoot day producing 10 to 30+ videos. This includes scriptwriting, on-set direction, cinema edit, sound design, and full Meta Ads management. Would you like a tailored proposal?"
  },
  output: {
    nl: "Met onze gestroomlijnde cinema crew schieten we op 1 dag ruim 10 tot 30+ unieke hooks en formats op jouw locatie. Dat is genoeg high-retention content voor 1 tot 3 maanden!",
    en: "With our specialized cinema crew, we capture 10 to 30+ unique hooks and formats at your headquarters in a single shoot day. That's 1 to 3 months of high-converting content!"
  },
  ads: {
    nl: "Zeker! Wij zijn geen traditioneel filmbedrijf dat video's oplevert en weer vertrekt. Wij beheren de Meta-advertenties zelf en optimaliseren continu op Cost-Per-Lead (CPL) en directe CRM-deals.",
    en: "Absolutely! We're not a traditional video company that hands over files and disappears. We actively run and scale your Meta campaigns, optimizing directly for Cost-Per-Lead and CRM pipeline revenue."
  },
  call: {
    nl: "Top! Je kunt direct een vrijblijvend 30-minuten strategiegesprek inplannen in Mika's agenda via: <a href='https://calendly.com/mikavdgun/discovery' target='_blank' rel='noopener'>Calendly Link ↗</a>",
    en: "Awesome! You can directly book a free 30-min strategy session in Mika's calendar here: <a href='https://calendly.com/mikavdgun/discovery' target='_blank' rel='noopener'>Calendly Link ↗</a>"
  },
  default: {
    nl: "Bedankt voor je bericht! Ik heb je vraag doorgestuurd naar Mika. Wil je dat we direct een belafspraak plannen of heb je specifieke wensen voor jouw video's?",
    en: "Thank you for reaching out! I've logged your request for Mika. Would you like to schedule a quick call, or do you have a specific video project in mind?"
  }
};

function initStudioChatWidget() {
  const launcherBtn = document.getElementById('chatLauncherBtn');
  const chatPanel = document.getElementById('studioChatPanel');
  const closeBtn = document.getElementById('chatPanelCloseBtn');
  const tabChat = document.getElementById('tabModeChat');
  const tabCall = document.getElementById('tabModeCall');
  const chatView = document.getElementById('chatViewMode');
  const callView = document.getElementById('callViewMode');
  const chatInput = document.getElementById('chatInputField');
  const chatForm = document.getElementById('chatInputForm');
  const messagesList = document.getElementById('chatMessagesList');
  const typingIndicator = document.getElementById('chatTypingIndicator');
  const quickChips = document.getElementById('chatQuickChips');
  const startAiCallBtn = document.getElementById('startAiCallBtn');
  const startAiCallText = document.getElementById('startAiCallText');
  const callStatusText = document.getElementById('callStatusText');
  const audioWaveform = document.getElementById('audioWaveform');
  const callbackForm = document.getElementById('callbackForm');
  const callbackSuccess = document.getElementById('callbackSuccessNotice');

  if (!launcherBtn || !chatPanel) return;

  const iconChat = launcherBtn.querySelector('.icon-chat');
  const iconClose = launcherBtn.querySelector('.icon-close');

  const togglePanel = (forceOpen) => {
    const isHidden = chatPanel.style.display === 'none' || chatPanel.hasAttribute('hidden');
    const shouldOpen = forceOpen !== undefined ? forceOpen : isHidden;

    if (shouldOpen) {
      chatPanel.style.display = 'flex';
      chatPanel.removeAttribute('hidden');
      launcherBtn.setAttribute('aria-expanded', 'true');
      if (iconChat) iconChat.style.display = 'none';
      if (iconClose) iconClose.style.display = 'block';
      setTimeout(() => chatInput?.focus(), 150);
    } else {
      chatPanel.style.display = 'none';
      launcherBtn.setAttribute('aria-expanded', 'false');
      if (iconChat) iconChat.style.display = 'block';
      if (iconClose) iconClose.style.display = 'none';
    }
  };

  launcherBtn.addEventListener('click', () => togglePanel());
  closeBtn?.addEventListener('click', () => togglePanel(false));

  tabChat?.addEventListener('click', () => {
    tabChat.classList.add('is-active');
    tabChat.setAttribute('aria-selected', 'true');
    tabCall?.classList.remove('is-active');
    tabCall?.setAttribute('aria-selected', 'false');
    if (chatView) chatView.style.display = 'flex';
    if (callView) callView.style.display = 'none';
  });

  tabCall?.addEventListener('click', () => {
    tabCall.classList.add('is-active');
    tabCall.setAttribute('aria-selected', 'true');
    tabChat?.classList.remove('is-active');
    tabChat?.setAttribute('aria-selected', 'false');
    if (chatView) chatView.style.display = 'none';
    if (callView) callView.style.display = 'flex';
  });

  const appendMessage = (text, isUser = false) => {
    if (!messagesList) return;
    const row = document.createElement('div');
    row.className = `chat-bubble-row ${isUser ? 'outgoing' : 'incoming'}`;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${isUser ? 'outgoing' : 'incoming'}`;
    bubble.innerHTML = text;
    row.appendChild(bubble);
    messagesList.appendChild(row);
    messagesList.scrollTop = messagesList.scrollHeight;
  };

  const simulateAiResponse = (queryKey) => {
    if (typingIndicator) typingIndicator.style.display = 'flex';
    if (messagesList) messagesList.scrollTop = messagesList.scrollHeight;

    setTimeout(() => {
      if (typingIndicator) typingIndicator.style.display = 'none';
      const responsePack = AI_CHAT_RESPONSES[queryKey] || AI_CHAT_RESPONSES.default;
      const responseText = currentLang === 'nl' ? responsePack.nl : responsePack.en;
      appendMessage(responseText, false);
    }, 700);
  };

  chatForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = chatInput?.value?.trim();
    if (!val) return;
    appendMessage(val, true);
    chatInput.value = '';

    const lower = val.toLowerCase();
    let key = 'default';
    if (lower.includes('kost') || lower.includes('prijs') || lower.includes('cost') || lower.includes('rate')) key = 'pakket';
    else if (lower.includes('hoeveel') || lower.includes('veel') || lower.includes('many') || lower.includes('output')) key = 'output';
    else if (lower.includes('ad') || lower.includes('meta') || lower.includes('lead')) key = 'ads';
    else if (lower.includes('call') || lower.includes('afspraak') || lower.includes('contact') || lower.includes('book')) key = 'call';

    simulateAiResponse(key);
  });

  quickChips?.querySelectorAll('.quick-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const q = chip.dataset.query;
      const questionText = chip.innerText.trim();
      appendMessage(questionText, true);
      simulateAiResponse(q);
    });
  });

  startAiCallBtn?.addEventListener('click', () => {
    const isCalling = window.GUN_AI_STUDIO.isCallActive;
    if (!isCalling) {
      window.GUN_AI_STUDIO.isCallActive = true;
      window.GUN_AI_STUDIO.callSeconds = 0;
      startAiCallBtn.classList.add('is-calling');
      if (audioWaveform) audioWaveform.classList.add('is-active');

      if (startAiCallText) {
        startAiCallText.textContent = currentLang === 'nl' ? '⏹️ Verbreek AI Gesprek' : '⏹️ End AI Voice Call';
      }

      window.GUN_AI_STUDIO.callTimer = setInterval(() => {
        window.GUN_AI_STUDIO.callSeconds++;
        const s = window.GUN_AI_STUDIO.callSeconds;
        const mins = String(Math.floor(s / 60)).padStart(2, '0');
        const secs = String(s % 60).padStart(2, '0');
        if (callStatusText) {
          callStatusText.textContent = currentLang === 'nl' 
            ? `🔴 Verbonden (${mins}:${secs}) · AI Luistert...`
            : `🔴 Connected (${mins}:${secs}) · AI Listening...`;
        }
      }, 1000);
    } else {
      window.GUN_AI_STUDIO.isCallActive = false;
      clearInterval(window.GUN_AI_STUDIO.callTimer);
      startAiCallBtn.classList.remove('is-calling');
      if (audioWaveform) audioWaveform.classList.remove('is-active');

      if (startAiCallText) {
        startAiCallText.textContent = currentLang === 'nl' ? 'Start AI Voice Gesprek Nu' : 'Start AI Voice Call Now';
      }
      if (callStatusText) {
        callStatusText.textContent = currentLang === 'nl' ? 'AI Voice Agent Klaar' : 'AI Voice Agent Ready';
      }
    }
  });

  callbackForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneInput = document.getElementById('callbackPhone');
    if (!phoneInput?.value) return;
    if (callbackSuccess) callbackSuccess.style.display = 'block';
    phoneInput.disabled = true;
    const btn = document.getElementById('callbackSubmitBtn');
    if (btn) btn.disabled = true;
  });
}
