export const treatmentTypes = [
  'ALL',
  'SKIN',
  'FACIALS',
  'AESTHETICS',
  'HAIR',
  'PEELS',
  'TREATMENTS FOR MEN',
  'WELLNESS'
];

export const treatments = [
  {
    id: 'acne-scar-treatment',
    title: 'Acne Scar Treatment',
    description: 'Targeted resurfacing protocols to smooth post-acne marks and improve overall skin texture.',
    detailedDescription: 'Our acne scar treatment combines laser resurfacing, microneedling, and collagen stimulation plans based on your scar depth and skin type. Sessions are customized to soften box scars, rolling scars, and uneven texture while supporting healthy skin renewal.',
    benefits: [
      'Improves pitted and uneven skin texture.',
      'Stimulates collagen for long-term skin remodeling.',
      'Reduces post-acne marks and scar visibility.',
      'Personalized plan for different scar types and sensitivities.'
    ],
    type: 'SKIN',
    imageSeed: 'https://www.indianskin.co.in/wp-content/uploads/2026/01/Acne-Scar-Treatments.webp'
  },
  {
    id: 'pigmentation-treatment',
    title: 'Pigmentation Treatment',
    description: 'Corrective treatment for uneven tone, dark patches, and sun-induced pigmentation.',
    detailedDescription: 'Our pigmentation treatment is designed to reduce stubborn discoloration caused by sun exposure, acne marks, hormones, or inflammation. We use a combination of peels, laser toning, and maintenance skincare to help restore a brighter and balanced complexion.',
    benefits: [
      'Lightens dark spots and patchy discoloration.',
      'Improves skin clarity and brightness.',
      'Targets multiple pigmentation causes with layered protocols.',
      'Supports lasting results with guided maintenance.'
    ],
    type: 'SKIN',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXZqXEosjD4IdFyYjwJoZ0Mydki9nYizxSA&s'
  },
  {
    id: 'melasma-treatment',
    title: 'Melasma Treatment',
    description: 'Specialized melasma management focused on hormonal pigmentation and relapse prevention.',
    detailedDescription: 'Melasma needs precision and consistency. Our treatment strategy includes gentle brightening procedures, laser-safe protocols, sun defense planning, and medically curated home care to reduce patches while minimizing rebound pigmentation.',
    benefits: [
      'Targets stubborn brown-gray facial patches safely.',
      'Uses melasma-safe protocols to reduce flare risk.',
      'Improves overall facial tone and uniformity.',
      'Includes prevention-focused long-term guidance.'
    ],
    type: 'SKIN',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy7MPkGuQ2Nu3rJK5G4SwczOSH96Xkx9kIA&s'
  },
  {
    id: 'pico-laser-treatment',
    title: 'Pico Laser Treatment',
    description: 'High-precision pico technology for pigmentation, acne marks, and texture renewal.',
    detailedDescription: 'Pico laser delivers ultra-short pulses that break down pigment and stimulate skin regeneration with minimal downtime. This treatment is ideal for spot reduction, tone correction, and brighter skin quality over progressive sessions.',
    benefits: [
      'Targets pigmentation with precision energy delivery.',
      'Enhances radiance with low downtime.',
      'Supports collagen renewal and smoother texture.',
      'Suitable for multiple concerns in one protocol.'
    ],
    type: 'SKIN',
    imageSeed: 'https://regenesisspa.com/wp-content/uploads/2024/03/l3SeWiRErrME-Pico-Laser-Treatment-intro-image.jpg'
  },
  {
    id: 'tan-removal',
    title: 'Tan Removal',
    description: 'De-tan therapy to reverse sun dullness and reveal clearer, fresher skin tone.',
    detailedDescription: 'Our tan removal programs combine exfoliation, brightening peels, and laser toning where needed to reduce UV-induced darkening on face and body. Plans are tailored for skin sensitivity and event timelines.',
    benefits: [
      'Reduces uneven sun tan and dullness.',
      'Restores fresher and brighter tone.',
      'Improves skin smoothness and clarity.',
      'Custom options for face, neck, and body.'
    ],
    type: 'SKIN',
    imageSeed: 'https://www.toniqueskincare.com/cdn/shop/articles/How_to_Get_the_Best_Skin_Lightening_Effects_0eb3e3e4-1d9d-469e-b839-b962c8021dcd.jpg?v=1571577263'
  },
  {
    id: 'tattoo-removal',
    title: 'Tattoo Removal',
    description: 'Laser tattoo fading and removal plans for safe, gradual clearance of unwanted ink.',
    detailedDescription: 'Our tattoo removal treatments use advanced laser protocols to fragment ink particles so they can be naturally cleared over time. Sessions are selected based on ink color, depth, age of tattoo, and skin type.',
    benefits: [
      'Progressively fades multi-color tattoos.',
      'Targets ink while protecting surrounding skin.',
      'Customized intervals for safer healing.',
      'Suitable for revision or complete removal goals.'
    ],
    type: 'SKIN',
    imageSeed: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'wart-removal',
    title: 'Keloid Removal',
    description: 'Keloid removal refers to medical and cosmetic procedures used to flatten, shrink, or eliminate raised, thickened scar tissue that grows beyond the boundaries of an original wound. Unlike standard scars, keloids are caused by an overproduction of collagen and do not fade or go away on their own',
    detailedDescription: 'Warts are treated with controlled procedures such as radiofrequency, cautery, or other dermatological techniques based on lesion type and site. Our focus is complete clearance, comfort, and recurrence control.',
    benefits: [
      'Precision Lesion Clearance: Expertly targets and eliminates even the most stubborn wart lesions for a clear complexion.',
      'Gold-Standard Clinical Hygiene: Performed within a sterile, boutique environment following strict medical-grade protocols.',
      'Aesthetic-First Results: Advanced techniques designed to minimize recovery time and ensure a seamless, mark-free finish.',
      'Comprehensive Recovery Care: Bespoke aftercare guidance to promote rapid tissue regeneration and flawless healing.'
    ],
    type: 'SKIN',
    imageSeed: 'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-07255-8/MediaObjects/41598_2022_7255_Fig1_HTML.jpg'
  },
  {
    id: 'stretch-mark-treatment',
    title: 'Stretch Mark Treatment',
    description: 'Texture-focused solutions to improve stretch mark appearance and skin quality.',
    detailedDescription: 'Our stretch mark protocols combine collagen-boosting procedures with regenerative skin therapies to improve tone and textural irregularity. Suitable for post-weight change, puberty, and post-pregnancy concerns.',
    benefits: [
      'Softens visible stretch mark lines.',
      'Improves local skin texture and elasticity.',
      'Stimulates collagen in affected zones.',
      'Works across body areas with tailored intensity.'
    ],
    type: 'SKIN',
    imageSeed: 'https://anceitaclinic.com/wp-content/uploads/2023/12/stretch-marks.jpg'
  },
  {
    id: 'dermatology-consultation',
    title: 'Dermatology Consultation (Banjara Hills)',
    description: 'Expert dermatology consultation for diagnosis-led treatment planning across skin concerns.',
    detailedDescription: 'This specialist consultation includes detailed skin assessment, condition mapping, treatment sequencing, and home-care strategy. Ideal for acne, pigmentation, sensitivity, and preventive dermatology care.',
    benefits: [
      'Accurate diagnosis before treatment initiation.',
      'Personalized treatment roadmap and timelines.',
      'Medication and procedure balancing by skin need.',
      'Guided maintenance for long-term skin health.'
    ],
    type: 'SKIN',
    imageSeed: 'https://productimages.withfloats.com/serviceimages/actual/68f88851461f1d3e164eddb9Screenshot2025-10-22125907'
  },
  {
    id: 'hydra-facial',
    title: 'Hydra Facial',
    description: 'Deep cleansing, hydration infusion, and instant glow in one advanced facial session.',
    detailedDescription: 'Hydra Facial combines exfoliation, painless extraction, and serum infusion to leave skin refreshed, hydrated, and event-ready. It is ideal for clogged pores, dullness, and dehydrated skin needing immediate improvement.',
    benefits: [
      'Deep cleans and decongests pores.',
      'Boosts hydration and skin plumpness.',
      'Delivers instant glow with no downtime.',
      'Safe for regular maintenance and pre-event care.'
    ],
    type: 'FACIALS',
    imageSeed: 'https://ocalaeye.com/wp-content/uploads/2021/06/Benefits-of-a-HydraFacial.png'
  },
  {
    id: 'vampire-facial-prp',
    title: 'Face PRP Treatement',
    description: 'PRP-powered facial rejuvenation for texture refinement and natural collagen activation.',
    detailedDescription: 'Face PRP treatement uses platelet-rich plasma with microneedling to stimulate skin repair and boost collagen. It is particularly effective for tired texture, mild acne marks, and loss of skin vitality.',
    benefits: [
      'Activates collagen using your own growth factors.',
      'Improves texture and post-acne marks.',
      'Enhances skin firmness and glow over sessions.',
      'Natural regenerative approach with minimal downtime.'
    ],
    type: 'FACIALS',
    imageSeed: 'https://aestheticsmedispa.co.uk/wp-content/uploads/2021/09/PRP-for-Facial-Rejuvenation-640W.png'
  },
  {
    id: 'celebrity-glass-skin-protocol',
    title: 'Celebrity Glass Skin Protocol',
    description: 'High-performance glow protocol designed for smooth, translucent, camera-ready skin.',
    detailedDescription: 'Our glass skin protocol layers exfoliation, hydration boosters, and radiance-focused technologies in a planned sequence to deliver a polished and luminous finish. Recommended as a short series for best visible clarity.',
    benefits: [
      'Enhances smooth, reflective skin finish.',
      'Refines pores and improves texture quality.',
      'Builds long-lasting radiance with layered care.',
      'Popular for events and high-visibility occasions.'
    ],
    type: 'FACIALS',
    imageSeed: 'https://akns-images.eonline.com/eol_images/Entire_Site/20251209/95d96623-f688-482a-afcf-1aea645274f6_1765302816.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top'
  },
  {
    id: 'red-carpet-celebrity-style-treatments',
    title: 'Red-Carpet Celebrity-Style Treatments',
    description: 'Event-focused facial programs for immediate lift, glow, and polished skin finish.',
    detailedDescription: 'These pre-event treatments are curated for quick visible enhancement with minimal downtime. Protocols may include hydration infusion, calming radiance steps, and contour-enhancing techniques for camera-ready skin.',
    benefits: [
      'Provides immediate event-day glow.',
      'Improves skin smoothness and makeup finish.',
      'Minimizes dullness and fatigue signs.',
      'Customizable by event date and skin sensitivity.'
    ],
    type: 'FACIALS',
    imageSeed: 'https://coveteur.com/media-library/image.jpg?id=25273792&width=1200&height=1200&coordinates=437%2C0%2C438%2C0'
  },
  {
    id: 'dermapen-microneedling-facial',
    title: 'Mesotherapy for Skin (Mesoglow)',
    description: 'This treatment acts as an internal hydrator and skin booster, perfect for achieving that "Red-Carpet" celebrity radiance.',
    detailedDescription: 'Dermapen microneedling creates controlled microchannels that trigger healing response and collagen renewal. This facial is ideal for acne scars, enlarged pores, and early signs of aging needing structural skin improvement.',
    benefits: [
      'Instant Radiance: Provides an immediate "lit-from-within" glow by improving microcirculation.',
      'Deep Hydration: Hyaluronic acid binds moisture within the skin, plumping out fine lines.',
      'Skin Firming: Stimulates the biological production of collagen for better elasticity.',
      'Pigmentation Control: Helps fade mild sun spots and evens out skin tone.'
    ],
    type: 'FACIALS',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr5THMZCzX9WAktXFj9_7VIUPgo1OCVDnmIQ&s'
  },
    {
    id: 'dermapen-microneedling-facial2',
    title: 'Mesotherapy for Hair (Mesohair)',
    description: 'This is a non-surgical alternative for those experiencing hair thinning or excessive shedding. It revitalizes dormant follicles and improves the scalp environment.',
    detailedDescription: 'Dermapen microneedling creates controlled microchannels that trigger healing response and collagen renewal. This facial is ideal for acne scars, enlarged pores, and early signs of aging needing structural skin improvement.',
    benefits: [
      'Reduces Hair Fall: Strengthens the hair bulb and prevents premature shedding.',
      'Stimulates Growth: Triggers the anagen (growth) phase of the hair follicle.',
      'Improves Hair Quality: Increases the diameter and strength of existing hair strands.',
      'Scalp Health: Balances oil production and improves blood flow to the scalp.'
    ],
    type: 'FACIALS',
    imageSeed: 'https://www.bonitaa.co.in/assets/our-images/blog/effective-meso-hair-loss-therpy.webp'
  },
  {
    id: 'skin-boosters-radiance-treatment',
    title: 'Skin Boosters (Radiance treatment)',
    description: 'Injectable hydration and radiance boosters for dewy, healthy, long-lasting skin glow.',
    detailedDescription: 'Skin boosters deliver hydrating actives and revitalizing compounds into the dermis to improve plumpness, luminosity, and fine texture. Excellent for dull or dehydrated skin and as part of anti-ageing skin plans.',
    benefits: [
      'Improves skin hydration at deeper levels.',
      'Enhances glow and softness of skin.',
      'Refines fine lines and crepey texture.',
      'Complements facial and anti-ageing protocols.'
    ],
    type: 'FACIALS',
    imageSeed: 'https://www.dermiqclinic.com/blog/wp-content/uploads/2024/08/Skin-Booster-Treatment-1200x900.jpg'
  },
  {
    id: 'botox-treatment',
    title: 'Botox Treatment',
    description: 'Targeted wrinkle-relaxing treatment for smoother expression lines and refreshed appearance.',
    detailedDescription: 'Botox treatment is performed with precision mapping to soften dynamic wrinkles on forehead, frown lines, and crow\'s feet while preserving natural expressions. Results are subtle, balanced, and customized to your facial movement.',
    benefits: [
      'Softens dynamic facial wrinkles.',
      'Prevents deeper line formation over time.',
      'Quick procedure with minimal downtime.',
      'Natural-looking results with expert dosing.'
    ],
    type: 'AESTHETICS',
    imageSeed: 'https://muskclinic.com/wp-content/uploads/2025/05/Botox-Treament.webp'
  },
  {
    id: 'thread-lift-treatment',
    title: 'Thread Lift Treatment',
    description: 'Minimally invasive lift for sagging skin and contour definition without surgery.',
    detailedDescription: 'Thread lift uses absorbable threads to gently reposition and support sagging tissues while stimulating collagen. It is ideal for jawline definition, cheek lift, and lower face tightening for a fresher contour.',
    benefits: [
      'Improves facial lift and contour definition.',
      'Stimulates collagen in treated zones.',
      'Less downtime than surgical lifting.',
      'Natural enhancement with progressive improvement.'
    ],
    type: 'AESTHETICS',
    imageSeed: 'https://www.estiqueclinic.com/treatments/images/Thread%20Lift.webp'
  },
  {
    id: 'anti-ageing-treatments',
    title: 'Anti-Ageing Treatments',
    description: 'Comprehensive anti-ageing plans combining skin quality, firmness, and wrinkle correction.',
    detailedDescription: 'Our anti-ageing treatments combine medical-grade facials, injectables, boosters, and collagen stimulation based on your age profile and goals. We focus on prevention, correction, and natural rejuvenation over time.',
    benefits: [
      'Targets multiple visible signs of ageing.',
      'Improves firmness, tone, and skin vitality.',
      'Supports long-term youthful skin strategy.',
      'Fully personalized combination protocols.'
    ],
    type: 'AESTHETICS',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaPhR4wLOjGAdZBPUW3SwfB00wrRom3hiaQ&s'
  },
  {
    id: 'fat-loss-injections',
    title: 'Fat Loss Injections',
    description: 'Localized non-surgical fat reduction for contour refinement in stubborn areas.',
    detailedDescription: 'Fat loss injections are used to break down localized fat deposits in resistant zones such as submental fullness and small body pockets. Treatments are planned across sessions for gradual and natural contour change.',
    benefits: [
      'Targets localized stubborn fat areas.',
      'Non-surgical contouring option.',
      'Minimal downtime and office-based procedure.',
      'Gradual and natural-looking slimming effect.'
    ],
    type: 'AESTHETICS',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ZCKuWP--cuujsoIaigFrQ8DyVIvGaJFwKA&s'
  },
  {
    id: 'skin-tightening-treatment',
    title: 'Skin Tightening Treatment',
    description: 'Collagen-focused tightening to lift lax skin and improve firmness of face and body.',
    detailedDescription: 'Skin tightening uses advanced energy-based technologies to stimulate collagen remodeling and reduce laxity. This treatment is designed for clients seeking non-surgical improvement in firmness and contour.',
    benefits: [
      'Improves skin firmness and elasticity.',
      'Helps lift mild-to-moderate sagging.',
      'Supports better jawline and neck definition.',
      'No major recovery downtime required.'
    ],
    type: 'AESTHETICS',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BvXdp0brpR0-92jRtv5Du3tOEbGi5k34KQ&s'
  },
  {
    id: 'dark-circle-treatment',
    title: 'Dark Circle Treatment',
    description: 'Targeted under-eye rejuvenation for pigmentation, hollowness, and tired appearance.',
    detailedDescription: 'Dark circle treatment includes diagnosis-led correction using peels, laser-safe options, boosters, and under-eye revitalization protocols based on pigment depth and structural volume loss around the eyes.',
    benefits: [
      'Lightens pigmentation around the eye contour.',
      'Reduces tired and sunken appearance.',
      'Improves smoothness of under-eye skin.',
      'Customized for pigment and volume components.'
    ],
    type: 'AESTHETICS',
    imageSeed: 'https://drjuvita.com/wp-content/uploads/2023/03/Gozalti-Morluklari-.jpg'
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Long-term laser hair reduction for smoother skin with precision and comfort.',
    detailedDescription: 'Our laser hair removal protocol targets hair follicles safely with skin-protective settings for different tones and body areas. It helps reduce growth density and thickness over a planned treatment cycle.',
    benefits: [
      'Long-term reduction in unwanted hair growth.',
      'Reduces ingrown hair and shaving irritation.',
      'Suitable for multiple face and body zones.',
      'Comfort-focused sessions with progressive results.'
    ],
    type: 'HAIR',
    imageSeed: 'https://www.tricureclinics.com/wp-content/uploads/2025/08/Procedure-for-Laser-Hair-Removal-on-the-Face-express-med-spa.jpeg.webp'
  },
  {
    id: 'exosome-therapy-hair-skin',
    title: 'Exosome and GFC Treatement (Hair & Skin)',
    description: 'Advanced regenerative therapy for scalp vitality and skin rejuvenation support. Your blood is collected and processed in specialized GFC tubes to extract a high concentration of pure growth factors. This acellular gold-colored liquid is then injected back into the scalp or face.',
    detailedDescription: 'Exosome therapy delivers bioactive signaling support for cellular repair, making it useful for hair thinning and skin recovery protocols. It can be integrated with other treatments for enhanced regeneration outcomes, GFC is the advanced, highly stable successor to PRP. While PRP contains various blood cells, GFC isolates only the pure growth factors from your own platelets.',
    benefits: [
      'Supports scalp and follicle recovery pathways.',
      'Enhances skin healing and radiance programs.',
      'Can be paired with other regenerative treatments.',
      'Designed for progressive, biology-led improvement.',
      'Known for being highly effective at increasing hair density and thickness with fewer sessions than traditional PRP.'
    ],
    type: 'HAIR',
    imageSeed: 'https://www.flossgloss.co.in/assets/e2.webp'
  },
  {
    id: 'pdrn-treatment-hair-vitality',
    title: 'Weight Loss RF (Radiofrequency) Treatment)',
    description: 'Weight Loss RF (Radiofrequency) Treatment is a non-invasive body contouring technology designed to tighten skin and reduce localized fat pockets. It is often referred to as "skin tightening" or "body sculpting" because it uses thermal energy to reshape the body without surgery.',
    detailedDescription: 'Weight Loss RF (Radiofrequency) Treatment is a non-invasive body contouring technology designed to tighten skin and reduce localized fat pockets. It is often referred to as "skin tightening" or "body sculpting" because it uses thermal energy to reshape the body without surgery.',
    benefits: [
      'Targeted Fat Loss: Excellent for stubborn areas that diet and exercise wont touch, such as the "love handles," lower abdomen, underarms (bat wings), and inner thighs.',
      'Cellulite Reduction: By tightening the underlying tissue and shrinking fat cells, it significantly smooths out the "orange peel" texture of cellulite.',
      'Zero Downtime: Unlike liposuction, this is a "walk-in, walk-out" procedure. There are no needles, no anesthesia, and no recovery time needed.',
      'Skin Firming: While you lose inches, the RF energy ensures the skin remains tight and toned rather than becoming saggy, which is a common issue with traditional weight loss.'
    ],
    type: 'HAIR',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAe4sb8F7IcviThtDtoSqYpy3zG0cq_CUlIg&s'
  },
  {
    id: 'hair-fall-consultation',
    title: 'Hair Fall Consultation',
    description: 'Clinical hair and scalp consultation for root-cause diagnosis and treatment planning.',
    detailedDescription: 'Our hair fall consultation covers scalp analysis, history review, trigger identification, and a practical restoration plan. It helps map medical and procedural options for sustainable hair care outcomes.',
    benefits: [
      'Identifies underlying hair loss triggers.',
      'Provides staged treatment and maintenance roadmap.',
      'Combines medical and procedural options as needed.',
      'Tracks progress through structured follow-ups.'
    ],
    type: 'HAIR',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-V8YG9V2JUTl6QglZpF6wKNjAsp7SLTiSA&s'
  },
  {
    id: 'chemical-peels-standard-advanced',
    title: 'Chemical Peels (Standard/Advanced)',
    description: 'Controlled resurfacing peels to improve tone, texture, acne marks, and skin clarity.',
    detailedDescription: 'Our peel range includes standard and advanced strengths selected by skin type, concern, and tolerance. Treatments are ideal for pigmentation, acne-prone texture, and dull skin that needs visible renewal.',
    benefits: [
      'Refines texture and improves skin brightness.',
      'Helps fade acne marks and superficial pigmentation.',
      'Supports clearer pores and smoother skin feel.',
      'Can be scaled from mild to advanced strength.'
    ],
    type: 'PEELS',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAOtog2cDUqn3ntQXCmVUfj_nsFwp2LFtIg&s'
  },
  {
    id: 'brightening-peels-for-pigmentation-tan',
    title: 'Brightening Peels (For Pigmentation/Tan)',
    description: 'Pigmentation-focused peel therapy for de-tan, glow enhancement, and tone balancing.',
    detailedDescription: 'Brightening peels are customized for dullness, tan, and patchy pigmentation to improve skin clarity without over-stressing the barrier. They are ideal as a seasonal refresh and in corrective pigmentation plans.',
    benefits: [
      'Lightens tan and uneven facial tone.',
      'Adds visible brightness and freshness.',
      'Works well in pigmentation maintenance cycles.',
      'Low downtime with customized intensity.'
    ],
    type: 'PEELS',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vLOX5pGB9BbhNsNL4xfxw8TNZI00jEDDcw&s'
  },
  {
    id: 'Derma-fillers',
    title: 'Derma Fillers',
    description: 'Dermal Fillers are injectable treatments used to restore lost volume, smooth out deep wrinkles, and "sculpt" facial features. Unlike Botox (which relaxes muscles), fillers use a gel-like substance—most commonly Hyaluronic Acid (HA)—to physically fill in hollow areas and attract moisture to the skin..',
    detailedDescription: 'Dermal Fillers are injectable treatments used to restore lost volume, smooth out deep wrinkles, and "sculpt" facial features. Unlike Botox (which relaxes muscles), fillers use a gel-like substance—most commonly Hyaluronic Acid (HA)—to physically fill in hollow areas and attract moisture to the skin.',
    benefits: [
      'Instant Gratification: Results are visible immediately after the session, with full integration into the tissue over 2 weeks.',
      'Non-Surgical Face Lift: Can create a "liquid facelift" effect by lifting sagging skin without the need for incisions or a long recovery.',
      'Customizable & Natural: Modern techniques allow for subtle "tweakments" that enhance your natural beauty rather than changing your face entirely.',
      'Reversible & Safe: HA fillers can be dissolved if needed, offering a safety net that permanent surgeries do not.'
    ],
    type: 'SKIN',
    imageSeed: 'https://movelmedspa.com/storage/2024/05/Cheek-Filler-Treatment-at-Movel-Med-Spa.webp'
  },
  {
    id: 'male-pattern-hair-fall-treatment',
    title: 'Male Pattern Hair Fall Treatment',
    description: 'Structured treatment approach for androgenic hair thinning in men.',
    detailedDescription: 'Male pattern hair fall treatment combines scalp diagnostics, medical management, and regenerative procedures where needed. The plan is designed for slowing progression and improving visible density over time.',
    benefits: [
      'Targets male-pattern thinning progression.',
      'Improves scalp health and follicle support.',
      'Builds an evidence-based treatment routine.',
      'Supports better hair density and retention.'
    ],
    type: 'TREATMENTS FOR MEN',
    imageSeed: 'https://drluvs.com/wp-content/uploads/2019/01/hairloss.jpg'
  },
  {
    id: 'mens-acne-scar-management',
    title: 'Men\'s Acne & Scar Management',
    description: 'Clinical acne and post-acne scar care tailored to male skin behavior and lifestyle.',
    detailedDescription: 'This treatment addresses active acne, oil imbalance, pore clogging, and residual scarring in men using a combination of peels, laser options, and scar revision methods. Protocols are adapted for thicker male skin and grooming habits.',
    benefits: [
      'Controls breakouts and reduces acne inflammation.',
      'Improves acne marks and scar texture.',
      'Optimized for male skin resilience and oil profile.',
      'Promotes cleaner, smoother skin appearance.'
    ],
    type: 'TREATMENTS FOR MEN',
    imageSeed: 'https://images.squarespace-cdn.com/content/v1/5fb8718b46f1f03825094143/68e2890c-3310-4fcb-a4bb-9ec12c12098b/prp-acne-scar-treatment-before-after-vaughan.png'
  },
  {
    id: 'jawline-contouring-aesthetics',
    title: 'Jawline Contouring (Aesthetics)',
    description: 'Aesthetic jaw definition treatment for a sharper, structured lower-face profile.',
    detailedDescription: 'Jawline contouring uses non-surgical aesthetic techniques to define and balance the lower face. This treatment is ideal for men who want improved profile sharpness while maintaining natural masculine facial character.',
    benefits: [
      'Enhances jawline definition and profile balance.',
      'Improves lower-face contour without surgery.',
      'Customized to natural masculine proportions.',
      'Delivers structured yet natural-looking results.'
    ],
    type: 'TREATMENTS FOR MEN',
    imageSeed: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAml8sYld9QQ7PUjVl2IT6zbqk9qyU8h3-qQ&s'
  },
  {
    id: 'exosome-regenerative-therapy',
    title: 'Exosome Regenerative Therapy',
    description: 'Regenerative wellness protocol to support tissue recovery, vitality, and skin quality.',
    detailedDescription: 'Exosome regenerative therapy is used in advanced wellness and skin programs to support cellular communication and recovery pathways. It is integrated into personalized protocols for long-term quality improvement.',
    benefits: [
      'Supports regenerative cellular signaling.',
      'Complements advanced skin and wellness goals.',
      'Can be integrated with anti-ageing plans.',
      'Designed for progressive whole-skin vitality.'
    ],
    type: 'WELLNESS',
    imageSeed: 'https://drreemaarora.com/wp-content/uploads/2024/10/Exosome-Therapy-The-Future-of-Anti-Aging-and-Regenerative-Medicine-scaled.jpg'
  },
  {
    id: 'general-skin-health-consultation',
    title: 'General Skin Health Consultation',
    description: 'Preventive and corrective consultation for routine skin health and long-term care.',
    detailedDescription: 'This consultation focuses on skin barrier health, daily care optimization, seasonal correction, and preventive planning. It is ideal for clients who want a stable skin routine and early intervention strategy.',
    benefits: [
      'Builds a practical long-term skin roadmap.',
      'Improves skin barrier resilience and consistency.',
      'Prevents concern escalation through early correction.',
      'Personalized routine aligned to lifestyle and climate.'
    ],
    type: 'WELLNESS',
    imageSeed: 'https://img.grouponcdn.com/bynder/3u4fztJx2vD1rU8qzpzcygsHroJJ/3u-2048x1229/v1/t2001x1212.webp'
  },
  {
    id: 'anti-ageing-wellness-programs',
    title: 'Anti-Ageing Wellness Programs',
    description: 'Holistic anti-ageing programs integrating skin, nutrition, and regenerative care.',
    detailedDescription: 'Our anti-ageing wellness programs combine clinical skin treatments, guided lifestyle strategy, and regenerative support to improve vitality and appearance over time. Programs are individualized with measurable milestones.',
    benefits: [
      'Addresses ageing from inside-out and outside-in.',
      'Combines aesthetics with wellness fundamentals.',
      'Improves skin quality, energy, and recovery support.',
      'Personalized for age, goals, and lifestyle patterns.'
    ],
    type: 'WELLNESS',
    imageSeed: 'https://static.wixstatic.com/media/69df95_c50460791a034a229163a21124a11db1~mv2.jpg/v1/fill/w_1920,h_1280,al_c,q_90/Anti%20Ageing%20Wellness%20Retreats-min.jpg'
  }
];
