/**
 * MONASTERIO DE LA LUZ · i18n.js  v3
 * Sistema cuadrilingüe ES / EN / FR / DE — diccionario completo para todas las páginas.
 * Uso en HTML: data-i18n="clave"            → innerHTML
 *              data-i18n-placeholder="clave" → placeholder attr
 *              data-i18n-aria="clave"        → aria-label attr
 */
(function () {
  'use strict';

  /* =================================================================
     DICCIONARIO
  ================================================================= */
  const D = {

    /* ---- NAV ---- */
    'nav.home':    { es: 'Inicio',     en: 'Home',       fr: 'Accueil',   de: 'Startseite' },
    'nav.abbey':   { es: 'La Abadía', en: 'The Abbey',  fr: 'L\'Abbaye', de: 'Die Abtei' },
    'nav.rates':   { es: 'Tarifas',   en: 'Admission',  fr: 'Tarifs',    de: 'Preise' },
    'nav.news':    { es: 'Noticias',  en: 'News',       fr: 'Actualités',de: 'Neuigkeiten' },
    'nav.gallery': { es: 'Galería',   en: 'Gallery',    fr: 'Galerie',   de: 'Galerie' },
    'nav.contact': { es: 'Contacto',  en: 'Contact',    fr: 'Contact',   de: 'Kontakt' },

    /* ---- FOOTER ---- */
    'ft.pages':  { es: 'Páginas',              en: 'Pages',          fr: 'Pages',              de: 'Seiten' },
    'ft.legal':  { es: 'Legal',                en: 'Legal',          fr: 'Légal',              de: 'Rechtliches' },
    'ft.contact':{ es: 'Contacto',             en: 'Contact',        fr: 'Contact',            de: 'Kontakt' },
    'ft.legal1': { es: 'Aviso legal',          en: 'Legal notice',   fr: 'Mentions légales',   de: 'Impressum' },
    'ft.legal2': { es: 'Privacidad',           en: 'Privacy policy', fr: 'Confidentialité',    de: 'Datenschutz' },
    'ft.legal3': { es: 'Cookies',              en: 'Cookie policy',  fr: 'Cookies',            de: 'Cookies' },
    'ft.legal4': { es: 'Términos y condiciones', en: 'Terms & conditions', fr: 'Conditions générales', de: 'AGB' },
    'ft.copy': {
      es: '© 2026 Monasterio de Santa María de San Salvador de Cañas · Todos los derechos reservados',
      en: '© 2026 Monastery of Santa María de San Salvador de Cañas · All rights reserved',
      fr: '© 2026 Monastère de Santa María de San Salvador de Cañas · Tous droits réservés',
      de: '© 2026 Kloster Santa María de San Salvador de Cañas · Alle Rechte vorbehalten'
    },

    /* ---- PAGE HEROES ---- */
    'ph.abbey.over':  { es: 'Patrimonio · Cister',          en: 'Heritage · Cistercian',    fr: 'Patrimoine · Cistercien',      de: 'Erbe · Zisterzienser' },
    'ph.abbey.title': { es: 'La Abadía',                    en: 'The Abbey',                fr: 'L\'Abbaye',                    de: 'Die Abtei' },
    'ph.abbey.sub':   {
      es: 'Monasterio de Santa María de San Salvador de Cañas',
      en: 'Monastery of Santa María de San Salvador de Cañas',
      fr: 'Monastère de Santa María de San Salvador de Cañas',
      de: 'Kloster Santa María de San Salvador de Cañas'
    },
    'ph.rates.over':  { es: 'Acceso · Visitas',     en: 'Access · Visits',       fr: 'Accès · Visites',        de: 'Zugang · Besuche' },
    'ph.rates.title': { es: 'Tarifas',              en: 'Admission',             fr: 'Tarifs',                 de: 'Eintrittspreise' },
    'ph.rates.sub':   {
      es: 'Elige la modalidad que mejor se adapta a ti',
      en: 'Choose the option that best suits you',
      fr: 'Choisissez l\'option qui vous convient le mieux',
      de: 'Wählen Sie die Option, die am besten zu Ihnen passt'
    },
    'ph.news.over':  { es: 'Actualidad · Cultura', en: 'News · Culture',        fr: 'Actualités · Culture',   de: 'Aktuelles · Kultur' },
    'ph.news.title': { es: 'Noticias',             en: 'News',                  fr: 'Actualités',             de: 'Neuigkeiten' },
    'ph.news.sub':   {
      es: 'Lo más reciente sobre el Monasterio de Cañas',
      en: 'The latest from Monasterio de Cañas',
      fr: 'Les dernières nouvelles du Monastère de Cañas',
      de: 'Die neuesten Nachrichten aus dem Kloster Cañas'
    },
    'ph.gal.over':  { es: 'Imágenes · Fotografía', en: 'Images · Photography', fr: 'Images · Photographie',  de: 'Bilder · Fotografie' },
    'ph.gal.title': { es: 'Galería',               en: 'Gallery',              fr: 'Galerie',                de: 'Galerie' },
    'ph.gal.sub':   {
      es: 'El Monasterio de Cañas a través de sus espacios',
      en: 'Monasterio de Cañas through its spaces',
      fr: 'Le Monastère de Cañas à travers ses espaces',
      de: 'Das Kloster Cañas durch seine Räume'
    },
    'ph.legal.over':  { es: 'Legal · Información', en: 'Legal · Information', fr: 'Légal · Information',     de: 'Rechtliches · Information' },
    'ph.legal.title': { es: 'Aviso Legal',          en: 'Legal Notice',        fr: 'Mentions Légales',        de: 'Impressum' },
    'ph.legal.sub':   { es: 'Condiciones de uso del sitio web', en: 'Website terms of use', fr: 'Conditions d\'utilisation du site web', de: 'Nutzungsbedingungen der Website' },
    'ph.priv.over':   { es: 'Legal · Privacidad',   en: 'Legal · Privacy',     fr: 'Légal · Confidentialité', de: 'Rechtliches · Datenschutz' },
    'ph.priv.title':  { es: 'Política de Privacidad', en: 'Privacy Policy',    fr: 'Politique de Confidentialité', de: 'Datenschutzerklärung' },
    'ph.priv.sub':    { es: 'Cómo tratamos tus datos personales', en: 'How we handle your personal data', fr: 'Comment nous traitons vos données personnelles', de: 'Wie wir Ihre persönlichen Daten verarbeiten' },
    'ph.cook.over':   { es: 'Legal · Cookies',      en: 'Legal · Cookies',     fr: 'Légal · Cookies',         de: 'Rechtliches · Cookies' },
    'ph.cook.title':  { es: 'Política de Cookies',  en: 'Cookie Policy',       fr: 'Politique de Cookies',    de: 'Cookie-Richtlinie' },
    'ph.cook.sub':    { es: 'Qué cookies usamos y para qué', en: 'What cookies we use and why', fr: 'Quels cookies nous utilisons et pourquoi', de: 'Welche Cookies wir verwenden und warum' },
    'ph.terms.over':  { es: 'Legal · Condiciones',  en: 'Legal · Terms',       fr: 'Légal · Conditions',      de: 'Rechtliches · Bedingungen' },
    'ph.terms.title': { es: 'Términos y Condiciones', en: 'Terms and Conditions', fr: 'Conditions Générales', de: 'Allgemeine Geschäftsbedingungen' },
    'ph.terms.sub':   { es: 'Condiciones generales de visita y contratación', en: 'General conditions for visits and bookings', fr: 'Conditions générales de visite et de réservation', de: 'Allgemeine Besuchs- und Buchungsbedingungen' },

    /* ---- HOME: HERO ---- */
    'hero.over':  { es: 'La Rioja · España · Cister',  en: 'La Rioja · Spain · Cistercian', fr: 'La Rioja · Espagne · Cistercien', de: 'La Rioja · Spanien · Zisterzienser' },
    'hero.line1': { es: 'Un lugar',    en: 'A majestic',  fr: 'Un lieu',      de: 'Ein majestätischer' },
    'hero.line2': { es: 'majestuoso',  en: 'place',       fr: 'majestueux',   de: 'Ort' },
    'hero.sub':   { es: 'El Monasterio de la Luz', en: 'The Monastery of Light', fr: 'Le Monastère de la Lumière', de: 'Das Kloster des Lichts' },
    'hero.hours': {
      es: '10:30 – 14:00 h · 16:00 – 19:30 h',
      en: '10:30 am – 2:00 pm · 4:00 – 7:30 pm',
      fr: '10 h 30 – 14 h 00 · 16 h 00 – 19 h 30',
      de: '10:30 – 14:00 Uhr · 16:00 – 19:30 Uhr'
    },
    'btn.rates': { es: 'Ver tarifas',          en: 'View admission',      fr: 'Voir les tarifs',         de: 'Preise ansehen' },
    'btn.abbey': { es: 'Conocer la abadía',    en: 'Explore the abbey',   fr: 'Découvrir l\'abbaye',     de: 'Die Abtei erkunden' },

    /* ---- DATA STRIP ---- */
    'strip.open': { es: 'Abierto todos los días', en: 'Open every day', fr: 'Ouvert tous les jours', de: 'Täglich geöffnet' },

    /* ---- VIDEO ---- */
    'vid.over':   { es: 'Bienvenidos',              en: 'Welcome',           fr: 'Bienvenue',               de: 'Willkommen' },
    'vid.title':  { es: 'Descubre el Monasterio',   en: 'Discover the Monastery', fr: 'Découvrez le Monastère', de: 'Entdecken Sie das Kloster' },
    'vid.desc':   {
      es: 'Un viaje a través de siglos de historia, espiritualidad y arte en el corazón de La Rioja',
      en: 'A journey through centuries of history, spirituality and art in the heart of La Rioja',
      fr: 'Un voyage à travers des siècles d\'histoire, de spiritualité et d\'art au cœur de La Rioja',
      de: 'Eine Reise durch Jahrhunderte der Geschichte, Spiritualität und Kunst im Herzen von La Rioja'
    },
    'vid.caption': {
      es: 'Monasterio de Santa María de San Salvador de Cañas',
      en: 'Monastery of Santa María de San Salvador de Cañas',
      fr: 'Monastère de Santa María de San Salvador de Cañas',
      de: 'Kloster Santa María de San Salvador de Cañas'
    },

    /* ---- WHY ---- */
    'why.over':   { es: 'El Monasterio',        en: 'The Monastery',      fr: 'Le Monastère',           de: 'Das Kloster' },
    'why.title':  { es: '¿Por qué visitarnos?', en: 'Why visit us?',      fr: 'Pourquoi nous rendre visite ?', de: 'Warum uns besuchen?' },
    'why.desc':   {
      es: 'Un lugar único donde el patrimonio medieval, la espiritualidad y la belleza natural de La Rioja se dan la mano.',
      en: 'A unique place where medieval heritage, spirituality and the natural beauty of La Rioja come together.',
      fr: 'Un lieu unique où le patrimoine médiéval, la spiritualité et la beauté naturelle de La Rioja se rejoignent.',
      de: 'Ein einzigartiger Ort, an dem mittelalterliches Erbe, Spiritualität und die natürliche Schönheit von La Rioja zusammenkommen.'
    },
    'why.c1.title': { es: 'Patrimonio del siglo XII', en: '12th-century Heritage', fr: 'Patrimoine du XIIe siècle', de: 'Erbe aus dem 12. Jahrhundert' },
    'why.c1.desc':  {
      es: 'Contempla una de las iglesias góticas más auténticas de La Rioja, con su retablo renacentista considerado uno de los mejores de la región.',
      en: 'Marvel at one of the most authentic Gothic churches in La Rioja, with its Renaissance altarpiece considered one of the finest in the region.',
      fr: 'Admirez l\'une des églises gothiques les plus authentiques de La Rioja, avec son retable Renaissance considéré comme l\'un des plus beaux de la région.',
      de: 'Bewundern Sie eine der authentischsten gotischen Kirchen in La Rioja mit ihrem Renaissanceretabel, das als eines der schönsten der Region gilt.'
    },
    'why.c2.title': { es: 'Monasterio vivo',    en: 'A living monastery',  fr: 'Un monastère vivant',    de: 'Ein lebendiges Kloster' },
    'why.c2.desc':  {
      es: 'Una comunidad de monjas cistercienses habita el monasterio desde el siglo XII, manteniendo viva la tradición benedictina en pleno siglo XXI.',
      en: 'A community of Cistercian nuns has inhabited the monastery since the 12th century, keeping the Benedictine tradition alive in the 21st century.',
      fr: 'Une communauté de moniales cisterciennes habite le monastère depuis le XIIe siècle, maintenant vivante la tradition bénédictine au XXIe siècle.',
      de: 'Eine Gemeinschaft zisterziensischer Nonnen bewohnt das Kloster seit dem 12. Jahrhundert und hält die benediktinische Tradition im 21. Jahrhundert lebendig.'
    },
    'why.c3.title': { es: 'Tesoros únicos',     en: 'Unique treasures',    fr: 'Trésors uniques',        de: 'Einzigartige Schätze' },
    'why.c3.desc':  {
      es: 'Visita la Sala de Reliquias, la Cilla‑Museo y el Claustro cisterciense; espacios que guardan siglos de historia y devoción.',
      en: 'Visit the Relic Room, the Cilla‑Museum and the Cistercian Cloister — spaces that hold centuries of history and devotion.',
      fr: 'Visitez la Salle des Reliques, la Cilla-Musée et le Cloître cistercien — des espaces qui renferment des siècles d\'histoire et de dévotion.',
      de: 'Besuchen Sie den Reliquiensaal, das Cilla-Museum und den Zisterzienserkreuzgang — Räume, die Jahrhunderte der Geschichte und Hingabe beherbergen.'
    },
    'why.c4.title': { es: 'Para todos', en: 'For everyone', fr: 'Pour tous', de: 'Für alle' },
    'why.c4.desc':  {
      es: 'Tarifas accesibles para individuales, familias y grupos, con visitas guiadas y no guiadas adaptadas a cada tipo de visitante.',
      en: 'Affordable tickets for individuals, families and groups, with guided and self-guided tours adapted to every visitor.',
      fr: 'Des tarifs accessibles pour les individuels, les familles et les groupes, avec des visites guidées et non guidées adaptées à chaque visiteur.',
      de: 'Erschwingliche Eintritte für Einzelpersonen, Familien und Gruppen, mit geführten und selbst geführten Touren für jeden Besucher.'
    },

    /* ---- RATES PREVIEW (home) ---- */
    'rp.over':   { es: 'Acceso',           en: 'Admission',         fr: 'Accès',               de: 'Eintritt' },
    'rp.title':  { es: 'Tarifas de visita',en: 'Visit Admission',   fr: 'Tarifs de visite',    de: 'Besuchspreise' },
    'rp.desc':   {
      es: 'Precios asequibles para todos. Elige la modalidad que mejor se adapte a tu visita.',
      en: 'Affordable prices for everyone. Choose the option that best suits your visit.',
      fr: 'Des prix accessibles pour tous. Choisissez l\'option qui convient le mieux à votre visite.',
      de: 'Erschwingliche Preise für alle. Wählen Sie die Option, die am besten zu Ihrem Besuch passt.'
    },
    'rp.cta.text': {
      es: 'Desde <strong>4€</strong> por persona — acceso a la iglesia gótica del siglo XII, el claustro, la Sala Capitular, la sala de reliquias y más. Un patrimonio único en La Rioja al alcance de todos.',
      en: 'From <strong>€4</strong> per person — access to the 12th-century Gothic church, the cloister, the Chapter House, the relics room and more. A unique heritage site in La Rioja, accessible to all.',
      fr: 'À partir de <strong>4 €</strong> par personne — accès à l\'église gothique du XIIe siècle, le cloître, la salle capitulaire, la salle des reliques et plus. Un patrimoine unique en La Rioja accessible à tous.',
      de: 'Ab <strong>4 €</strong> pro Person — Zugang zur gotischen Kirche aus dem 12. Jahrhundert, dem Kreuzgang, dem Kapitelsaal, dem Reliquiensaal und mehr. Ein einzigartiges Kulturerbe in La Rioja, für alle zugänglich.'
    },
    'rp.btn': { es: 'Ver todas las tarifas', en: 'View all admission prices', fr: 'Voir tous les tarifs', de: 'Alle Preise ansehen' },

    /* ---- RESERVAS (home CTA) ---- */
    'res.over':  { es: 'Reservas',           en: 'Bookings',          fr: 'Réservations',        de: 'Buchungen' },
    'res.title': { es: 'Reserva tu visita',  en: 'Book your visit',   fr: 'Réservez votre visite', de: 'Ihren Besuch buchen' },
    'res.desc':  {
      es: 'Ocho siglos de historia te esperan. Asegura tu plaza y vive una experiencia única en el corazón de La Rioja — antes de que se agoten las entradas.',
      en: 'Eight centuries of history await you. Secure your place and enjoy a unique experience in the heart of La Rioja — before tickets sell out.',
      fr: 'Huit siècles d\'histoire vous attendent. Réservez votre place et vivez une expérience unique au cœur de La Rioja — avant que les billets ne soient épuisés.',
      de: 'Acht Jahrhunderte Geschichte warten auf Sie. Sichern Sie sich Ihren Platz und erleben Sie ein einzigartiges Erlebnis im Herzen von La Rioja — bevor die Tickets ausverkauft sind.'
    },
    'res.btn': { es: 'Reservar entradas', en: 'Book tickets', fr: 'Réserver des billets', de: 'Tickets buchen' },

    /* ---- CONTACT FORM ---- */
    'ct.over':  { es: 'Reservas y consultas', en: 'Bookings & enquiries', fr: 'Réservations et renseignements', de: 'Buchungen & Anfragen' },
    'ct.title': { es: 'Contacto',             en: 'Contact',             fr: 'Contact',                        de: 'Kontakt' },
    'ct.intro': {
      es: '¿Tienes alguna pregunta sobre tu visita o quieres hacer una reserva? Escríbenos y te responderemos lo antes posible.',
      en: 'Do you have a question about your visit or would like to make a booking? Write to us and we will get back to you as soon as possible.',
      fr: 'Vous avez une question sur votre visite ou souhaitez faire une réservation ? Écrivez-nous et nous vous répondrons dans les meilleurs délais.',
      de: 'Haben Sie eine Frage zu Ihrem Besuch oder möchten Sie eine Buchung vornehmen? Schreiben Sie uns und wir melden uns so schnell wie möglich.'
    },
    'ct.f.name':    { es: 'Nombre y apellidos',     en: 'Full name',         fr: 'Nom et prénom',         de: 'Vor- und Nachname' },
    'ct.f.phone':   { es: 'Teléfono',               en: 'Phone',             fr: 'Téléphone',             de: 'Telefon' },
    'ct.f.email':   { es: 'Correo electrónico',     en: 'Email address',     fr: 'Adresse e-mail',        de: 'E-Mail-Adresse' },
    'ct.f.type':    { es: 'Tipo de visita',          en: 'Visit type',        fr: 'Type de visite',        de: 'Besuchsart' },
    'ct.f.type.ph': { es: 'Selecciona una opción',  en: 'Select an option',  fr: 'Sélectionnez une option', de: 'Option auswählen' },
    'ct.f.type.ng': { es: 'Sin guía',               en: 'Self-guided',       fr: 'Sans guide',            de: 'Ohne Führung' },
    'ct.f.type.g':  { es: 'Con guía',               en: 'Guided tour',       fr: 'Avec guide',            de: 'Mit Führung' },
    'ct.f.people':  { es: 'Número de personas',     en: 'Number of people',  fr: 'Nombre de personnes',   de: 'Anzahl der Personen' },
    'ct.f.kids':    { es: 'Niños entre 6 y 14 años',en: 'Children aged 6–14',fr: 'Enfants de 6 à 14 ans', de: 'Kinder zwischen 6 und 14 Jahren' },
    'ct.f.date':    { es: 'Fecha de visita preferida', en: 'Preferred visit date', fr: 'Date de visite souhaitée', de: 'Gewünschtes Besuchsdatum' },
    'ct.f.time':    { es: 'Horario preferido',      en: 'Preferred time slot',fr: 'Horaire préféré',       de: 'Bevorzugte Uhrzeit' },
    'ct.f.time.ph': { es: 'Selecciona horario',     en: 'Select time slot',  fr: 'Sélectionnez un horaire', de: 'Uhrzeit auswählen' },
    'ct.f.time.m1': { es: 'Mañana — 10:30 h',       en: 'Morning — 10:30 am',fr: 'Matin — 10 h 30',       de: 'Morgens — 10:30 Uhr' },
    'ct.f.time.m2': { es: 'Mañana — 11:30 h',       en: 'Morning — 11:30 am',fr: 'Matin — 11 h 30',       de: 'Morgens — 11:30 Uhr' },
    'ct.f.time.m3': { es: 'Mañana — 12:30 h',       en: 'Morning — 12:30 pm',fr: 'Matin — 12 h 30',       de: 'Morgens — 12:30 Uhr' },
    'ct.f.time.t1': { es: 'Tarde — 16:00 h',        en: 'Afternoon — 4:00 pm',fr: 'Après-midi — 16 h 00', de: 'Nachmittags — 16:00 Uhr' },
    'ct.f.time.t2': { es: 'Tarde — 17:00 h',        en: 'Afternoon — 5:00 pm',fr: 'Après-midi — 17 h 00', de: 'Nachmittags — 17:00 Uhr' },
    'ct.f.time.t3': { es: 'Tarde — 18:00 h',        en: 'Afternoon — 6:00 pm',fr: 'Après-midi — 18 h 00', de: 'Nachmittags — 18:00 Uhr' },
    'ct.f.msg':     { es: 'Mensaje o información adicional', en: 'Message or additional information', fr: 'Message ou informations supplémentaires', de: 'Nachricht oder zusätzliche Informationen' },
    'ct.f.note':    {
      es: '* Campos obligatorios. Tus datos se enviarán únicamente a entradas@monasteriodecanas.org.',
      en: '* Required fields. Your data will only be sent to entradas@monasteriodecanas.org.',
      fr: '* Champs obligatoires. Vos données seront envoyées uniquement à entradas@monasteriodecanas.org.',
      de: '* Pflichtfelder. Ihre Daten werden ausschließlich an entradas@monasteriodecanas.org gesendet.'
    },
    'ct.f.submit':  { es: 'Enviar solicitud',   en: 'Send request',         fr: 'Envoyer la demande',     de: 'Anfrage senden' },
    'ct.f.reply':   { es: 'Respondemos en menos de 24h', en: 'We reply within 24 hours', fr: 'Nous répondons en moins de 24 h', de: 'Wir antworten innerhalb von 24 Stunden' },
    'ct.f.terms.pre':  { es: 'He leído y acepto los',       en: 'I have read and accept the',  fr: 'J\'ai lu et j\'accepte les',  de: 'Ich habe die' },
    'ct.f.terms.link': { es: 'términos y condiciones de reserva', en: 'booking terms and conditions', fr: 'conditions générales de réservation', de: 'Buchungsbedingungen gelesen und akzeptiere sie' },
    'ct.f.captcha.pending': {
      es: 'Captcha — pendiente de activar (ver comentario en el código)',
      en: 'Captcha — pending activation (see code comment)',
      fr: 'Captcha — en attente d\'activation (voir commentaire dans le code)',
      de: 'Captcha — ausstehende Aktivierung (siehe Code-Kommentar)'
    },
    'ct.f.sending': { es: 'Enviando…',  en: 'Sending…',   fr: 'Envoi en cours…',  de: 'Wird gesendet…' },
    'ct.f.ok':      {
      es: '✓ Solicitud enviada. Te responderemos en breve.',
      en: '✓ Request sent. We\'ll get back to you shortly.',
      fr: '✓ Demande envoyée. Nous vous répondrons dans les meilleurs délais.',
      de: '✓ Anfrage gesendet. Wir werden uns in Kürze bei Ihnen melden.'
    },
    'ct.f.err': {
      es: 'Por favor rellena los campos obligatorios.',
      en: 'Please fill in all required fields.',
      fr: 'Veuillez remplir tous les champs obligatoires.',
      de: 'Bitte füllen Sie alle Pflichtfelder aus.'
    },
    'ct.f.senderr': {
      es: 'No se pudo enviar el mensaje. Por favor escríbenos directamente a entradas@monasteriodecanas.org',
      en: 'Could not send the message. Please write directly to entradas@monasteriodecanas.org',
      fr: 'Impossible d\'envoyer le message. Veuillez nous écrire directement à entradas@monasteriodecanas.org',
      de: 'Nachricht konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an entradas@monasteriodecanas.org'
    },
    'ct.addr.lbl':  { es: 'Dirección',  en: 'Address',        fr: 'Adresse',    de: 'Adresse' },
    'ct.addr.val':  {
      es: 'Plaza Carretera 12<br>26312 Cañas, La Rioja, España',
      en: 'Plaza Carretera 12<br>26312 Cañas, La Rioja, Spain',
      fr: 'Plaza Carretera 12<br>26312 Cañas, La Rioja, Espagne',
      de: 'Plaza Carretera 12<br>26312 Cañas, La Rioja, Spanien'
    },
    'ct.phone.lbl': { es: 'Teléfono',   en: 'Phone',          fr: 'Téléphone',  de: 'Telefon' },
    'ct.email.lbl': { es: 'Email',      en: 'Email',          fr: 'E-mail',     de: 'E-Mail' },
    'ct.hours.lbl': { es: 'Horarios',   en: 'Opening hours',  fr: 'Horaires',   de: 'Öffnungszeiten' },
    'ct.hours.val': {
      es: '10:30 – 14:00 h<br>16:00 – 19:30 h',
      en: '10:30 am – 2:00 pm<br>4:00 – 7:30 pm',
      fr: '10 h 30 – 14 h 00<br>16 h 00 – 19 h 30',
      de: '10:30 – 14:00 Uhr<br>16:00 – 19:30 Uhr'
    },

    /* ---- ABADÍA ---- */
    'ab.intro.over': { es: 'Historia', en: 'History', fr: 'Histoire', de: 'Geschichte' },
    'ab.intro.h2':   {
      es: 'Un lugar de fe y arte desde el siglo XII',
      en: 'A place of faith and art since the 12th century',
      fr: 'Un lieu de foi et d\'art depuis le XIIe siècle',
      de: 'Ein Ort des Glaubens und der Kunst seit dem 12. Jahrhundert'
    },
    'ab.intro.p1': {
      es: 'El Monasterio de Santa María de San Salvador de Cañas fue fundado en el siglo XII. Es un conjunto monástico cisterciense habitado por una comunidad de monjas que mantiene viva la tradición benedictina hasta nuestros días.',
      en: 'The Monastery of Santa María de San Salvador de Cañas was founded in the 12th century. It is a Cistercian monastic complex inhabited by a community of nuns who keep the Benedictine tradition alive to this day.',
      fr: 'Le Monastère de Santa María de San Salvador de Cañas a été fondé au XIIe siècle. C\'est un ensemble monastique cistercien habité par une communauté de sœurs qui maintient vivante la tradition bénédictine jusqu\'à nos jours.',
      de: 'Das Kloster Santa María de San Salvador de Cañas wurde im 12. Jahrhundert gegründet. Es ist ein zisterziensischer Klosterkomplex, der von einer Gemeinschaft von Nonnen bewohnt wird, die die benediktinische Tradition bis heute lebendig hält.'
    },
    'ab.intro.p2': {
      es: 'El conjunto arquitectónico reúne varios espacios de singular valor patrimonial: una iglesia gótica del siglo XIII, un claustro de austeridad cisterciense, la sala capitular, una extraordinaria sala de reliquias y la cilla‑museo con una colección de arte sacro de primer orden.',
      en: 'The architectural complex brings together several spaces of singular heritage value: a 13th-century Gothic church, a cloister of Cistercian austerity, the chapter house, an extraordinary relic room and the Cilla‑Museum housing a first-class collection of sacred art.',
      fr: 'L\'ensemble architectural réunit plusieurs espaces d\'une valeur patrimoniale singulière : une église gothique du XIIIe siècle, un cloître d\'austérité cistercienne, la salle capitulaire, une extraordinaire salle des reliques et la Cilla-Musée abritant une collection de premier ordre d\'art sacré.',
      de: 'Das architektonische Ensemble vereint mehrere Räume von einzigartiger kultureller Bedeutung: eine gotische Kirche aus dem 13. Jahrhundert, einen Kreuzgang von zisterziensischer Schlichtheit, den Kapitelsaal, einen außergewöhnlichen Reliquiensaal und das Cilla-Museum mit einer erstklassigen Sammlung sakraler Kunst.'
    },
    'ab.intro.p3': {
      es: 'Declarado Bien de Interés Cultural, el monasterio forma parte del paisaje histórico y espiritual de La Rioja, siendo un destino imprescindible para quienes buscan belleza, silencio e historia.',
      en: 'Listed as a Property of Cultural Interest, the monastery is part of the historical and spiritual landscape of La Rioja, making it an unmissable destination for those seeking beauty, silence and history.',
      fr: 'Classé Bien d\'Intérêt Culturel, le monastère fait partie du paysage historique et spirituel de La Rioja, et constitue une destination incontournable pour ceux qui recherchent beauté, silence et histoire.',
      de: 'Als Kulturgut von nationalem Interesse eingestuft, ist das Kloster Teil der historischen und spirituellen Landschaft von La Rioja — ein unverzichtbares Ziel für alle, die Schönheit, Stille und Geschichte suchen.'
    },
    'ab.intro.btn': { es: 'Planificar la visita', en: 'Plan your visit', fr: 'Planifier la visite', de: 'Besuch planen' },

    'ab.s1.tag':   { es: 'Románico · s. XII',  en: 'Romanesque · 12th c.', fr: 'Roman · XIIe s.',     de: 'Romanisch · 12. Jh.' },
    'ab.s1.title': { es: 'La Iglesia',          en: 'The Church',           fr: 'L\'Église',           de: 'Die Kirche' },
    'ab.s1.p1': {
      es: 'El templo actual mide treinta metros de largo y nueve de ancho en el crucero. La cabecera tiene tres ábsides, con el central de mayor tamaño y los laterales en semicírculo.',
      en: 'The current church is thirty metres long and nine metres wide at the transept. The apse has three sections, with the central one being larger and the lateral ones semicircular.',
      fr: 'L\'édifice actuel mesure trente mètres de long et neuf mètres de large au transept. Le chevet comporte trois absides, la centrale plus grande et les latérales en demi-cercle.',
      de: 'Die heutige Kirche ist dreißig Meter lang und neun Meter breit im Querschiff. Der Chor hat drei Apsiden, wobei die mittlere größer und die seitlichen halbkreisförmig sind.'
    },
    'ab.s1.p2': {
      es: 'La nave central se prolonga para alojar el coro de las monjas, mientras que la nave de la epístola se aboveda y se extiende hasta la portería. En el lado norte, la tercera nave se interrumpe en el crucero, donde se abre una puerta que comunica con el cementerio del monasterio, conocido como la <em>"puerta de los difuntos"</em>.',
      en: 'The central nave extends to house the nuns\' choir, while the epistle nave is vaulted and extends to the gatehouse. On the north side, the third nave ends at the transept, where a door opens to the monastery cemetery, known as the <em>"gate of the departed"</em>.',
      fr: 'La nef centrale se prolonge pour accueillir le chœur des sœurs, tandis que la nef de l\'épître est voûtée et s\'étend jusqu\'au portail. Du côté nord, la troisième nef s\'interrompt au transept, où s\'ouvre une porte donnant accès au cimetière du monastère, connue sous le nom de <em>« porte des défunts »</em>.',
      de: 'Das Hauptschiff verlängert sich, um den Nonnenchor aufzunehmen, während das Epistolschiff gewölbt ist und sich bis zum Torhaus erstreckt. Auf der Nordseite endet das dritte Schiff am Querschiff, wo eine Tür zum Klosterfriedhof führt, bekannt als <em>„Tor der Verstorbenen"</em>.'
    },
    'ab.s1.p3': {
      es: 'La iglesia conserva un mobiliario modesto, con un "Cristo crucificado" gótico del siglo XIV y una talla de madera policromada de "Nuestra Señora de Cañas" del siglo XIII. En el coro, se encuentra el retablo, la sillería y un fascistol, destacando la reubicación del retablo que permitió una mayor iluminación de la nave.',
      en: 'The church retains modest furnishings, including a 14th-century Gothic "Crucified Christ" and a 13th-century polychrome wooden carving of "Our Lady of Cañas". The choir holds the altarpiece, the stalls and a lectern, and the relocation of the altarpiece allowed greater light to flood the central nave.',
      fr: 'L\'église conserve un mobilier modeste, avec un « Christ crucifié » gothique du XIVe siècle et une sculpture en bois polychrome de « Notre-Dame de Cañas » du XIIIe siècle. Le chœur abrite le retable, les stalles et un lutrin, et le déplacement du retable a permis une plus grande luminosité dans la nef centrale.',
      de: 'Die Kirche bewahrt eine bescheidene Einrichtung mit einem gotischen „Gekreuzigten Christus" aus dem 14. Jahrhundert und einer polychromen Holzschnitzerei „Unsere Liebe Frau von Cañas" aus dem 13. Jahrhundert. Der Chor beherbergt den Altar, die Chorstühle und ein Pult; die Umsetzung des Altarretabels ermöglichte mehr Licht im Hauptschiff.'
    },
    'ab.s1.p4': {
      es: 'La sillería del coro, con 26 asientos, data del siglo XVIII y fue restaurada a finales del siglo XX. En la nave central hay siete laudas sepulcrales de abadesas fallecidas en el siglo XVII.',
      en: 'The choir stalls, with 26 seats, date from the 18th century and were restored at the end of the 20th century. The central nave contains seven funerary slabs of abbesses who died in the 17th century.',
      fr: 'Les stalles du chœur, avec 26 sièges, datent du XVIIIe siècle et ont été restaurées à la fin du XXe siècle. La nef centrale abrite sept dalles funéraires d\'abbesses décédées au XVIIe siècle.',
      de: 'Das Chorgestühl mit 26 Sitzen stammt aus dem 18. Jahrhundert und wurde Ende des 20. Jahrhunderts restauriert. Das Hauptschiff enthält sieben Grabplatten von Äbtissinnen, die im 17. Jahrhundert verstorben sind.'
    },

    'ab.s2.tag':   { es: 'Renacimiento',     en: 'Renaissance',           fr: 'Renaissance',           de: 'Renaissance' },
    'ab.s2.title': { es: 'El Retablo Mayor', en: 'The High Altarpiece',   fr: 'Le Retable Majeur',     de: 'Der Hochaltar' },
    'ab.s2.p1': {
      es: 'El Retablo Mayor es la obra más destacada de la iglesia y una referencia del arte renacentista en La Rioja. Fue encargado a principios del siglo XVI por la abadesa Leonor de Osorio y realizado por Guillen de Holanda, Andrés de Melgar y Alonso Gallego. En 1975 se trasladó desde el ábside al pie del templo, donde hoy se presenta como tríptico que combina escultura y pintura en torno a la vida de la Virgen.',
      en: 'The High Altarpiece is the most remarkable work in the church and a benchmark of Renaissance art in La Rioja. Commissioned in the early 16th century by Abbess Leonor de Osorio, it was crafted by Guillen de Holanda, Andrés de Melgar, and Alonso Gallego. In 1975 it was moved from the apse to the foot of the church, where it now stands as a triptych blending sculpture and painting around the life of the Virgin.',
      fr: 'Le Retable Majeur est l\'œuvre la plus remarquable de l\'église et une référence de l\'art Renaissance en La Rioja. Commandé au début du XVIe siècle par l\'abbesse Leonor de Osorio, il fut réalisé par Guillen de Holanda, Andrés de Melgar et Alonso Gallego. En 1975, il fut déplacé de l\'abside au pied du temple, où il se présente aujourd\'hui comme un triptyque combinant sculpture et peinture autour de la vie de la Vierge.',
      de: 'Der Hochaltar ist das bedeutendste Werk der Kirche und ein Referenzpunkt der Renaissancekunst in La Rioja. Im frühen 16. Jahrhundert von Äbtissin Leonor de Osorio in Auftrag gegeben, wurde er von Guillen de Holanda, Andrés de Melgar und Alonso Gallego geschaffen. 1975 wurde er von der Apsis ans Ende der Kirche verlegt, wo er heute als Triptychon präsentiert wird, das Skulptur und Malerei rund um das Leben der Jungfrau verbindet.'
    },
    'ab.s2.p2': {
      es: 'Su estructura se organiza en siete calles y tres pisos con un ático superior. En el centro figura la Virgen entre San Benito y San Bernardo, acompañada por escenas como la Adoración de los Reyes, la Asunción y el Calvario. Los relieves del banco ilustran episodios bíblicos, mientras las tablas laterales muestran santos y pasajes como la Anunciación, la Visitación y la Huida a Egipto.',
      en: 'Its composition unfolds in seven vertical panels and three tiers topped by an attic. At the center is the Virgin between Saints Benedict and Bernard, surrounded by scenes such as the Adoration of the Magi, the Assumption, and the Calvary. The base reliefs depict key biblical episodes, while the side panels portray saints and moments like the Annunciation, the Visitation, and the Flight into Egypt.',
      fr: 'Sa structure s\'organise en sept travées et trois niveaux avec un attique supérieur. Au centre figure la Vierge entre saint Benoît et saint Bernard, accompagnée de scènes telles que l\'Adoration des Mages, l\'Assomption et le Calvaire. Les reliefs du socle illustrent des épisodes bibliques, tandis que les panneaux latéraux montrent des saints et des scènes comme l\'Annonciation, la Visitation et la Fuite en Égypte.',
      de: 'Seine Struktur gliedert sich in sieben senkrechte Felder und drei Etagen mit einem Dachgeschoss. In der Mitte befindet sich die Jungfrau zwischen dem heiligen Benedikt und dem heiligen Bernhard, begleitet von Szenen wie der Anbetung der Könige, der Himmelfahrt und dem Kalvarienberg. Die Reliefs am Sockel zeigen biblische Episoden, während die seitlichen Tafeln Heilige und Szenen wie die Verkündigung, die Heimsuchung und die Flucht nach Ägypten darstellen.'
    },
    'ab.s2.p3': {
      es: 'El conjunto culmina con el ático, donde aparecen la Piedad y la Santísima Trinidad bajo la fórmula medieval en la que el Padre sostiene la cruz y la paloma simboliza al Espíritu Santo sobre Cristo. Este retablo constituye un testimonio excepcional de la devoción y la maestría artística de su tiempo.',
      en: 'The upper section concludes with the Pietà and the Holy Trinity, following the medieval depiction where the Eternal Father holds the cross and a dove represents the Holy Spirit above Christ\'s head. This altarpiece stands as a magnificent example of faith and artistry from its era.',
      fr: 'L\'ensemble culmine avec l\'attique, où apparaissent la Pietà et la Sainte Trinité, selon la formule médiévale dans laquelle le Père tient la croix et la colombe symbolise l\'Esprit Saint au-dessus du Christ. Ce retable constitue un témoignage exceptionnel de la dévotion et de la maîtrise artistique de son époque.',
      de: 'Der obere Teil schließt mit der Pietà und der Heiligen Dreifaltigkeit, nach der mittelalterlichen Darstellung, in der der ewige Vater das Kreuz hält und eine Taube den Heiligen Geist über Christus symbolisiert. Dieses Altarretabel ist ein herausragendes Beispiel für Glaube und Kunstfertigkeit seiner Zeit.'
    },

    'ab.s3.tag':   { es: 'Arquitectura Cisterciense', en: 'Cistercian Architecture', fr: 'Architecture Cistercienne', de: 'Zisterziensische Architektur' },
    'ab.s3.title': { es: 'El Claustro',               en: 'The Cloister',            fr: 'Le Cloître',               de: 'Der Kreuzgang' },
    'ab.s3.p1': {
      es: 'El claustro del monasterio es un valioso testimonio de su evolución arquitectónica entre los siglos XII y XVIII, iniciada bajo la dirección de la beata Urraca Díaz de Haro. Su edificación, marcada por la diversidad de materiales y estilos, refleja las distintas etapas constructivas y los recursos disponibles a lo largo del tiempo, combinando muros románicos, portadas góticas y arquerías de medio punto.',
      en: 'The monastery\'s cloister is a remarkable record of architectural evolution from the 12th to the 18th century, begun under Blessed Urraca Díaz de Haro. Its construction, shaped by diverse materials and artistic styles, reflects changing economic circumstances and patronage, combining Romanesque walls, Gothic portals, and semicircular arcades.',
      fr: 'Le cloître du monastère est un précieux témoignage de son évolution architecturale entre les XIIe et XVIIIe siècles, commencée sous la direction de la bienheureuse Urraca Díaz de Haro. Sa construction, marquée par la diversité des matériaux et des styles, reflète les différentes étapes constructives et les ressources disponibles au fil du temps, combinant des murs romans, des portails gothiques et des arcades en plein cintre.',
      de: 'Der Kreuzgang des Klosters ist ein wertvolles Zeugnis seiner architektonischen Entwicklung vom 12. bis zum 18. Jahrhundert, die unter der Leitung der seligen Urraca Díaz de Haro begann. Sein Bau, geprägt durch die Vielfalt der Materialien und Stile, spiegelt die verschiedenen Bauphasen und die im Laufe der Zeit verfügbaren Ressourcen wider, mit romanischen Mauern, gotischen Portalen und Rundbogenarkaden.'
    },
    'ab.s3.p2': {
      es: 'Los distintos tramos muestran desde sillares finamente labrados hasta fábricas más sencillas, con ladrillos en la planta superior que transforman los arcos originales en vanos cuadrangulares. Destaca el pavimento de la galería, parcialmente conservado, con un singular diseño de motivos radiales en piedra. Entre sus portadas sobresale la de la sala capitular, con tres arcos apuntados y dos ventanales, ejemplo notable del gótico monástico riojano.',
      en: 'The various sections display finely carved ashlar alongside rougher masonry, with upper-level brickwork enclosing original arches to form square openings. The gallery floor, partly preserved, features unique radial stone patterns. Among the most notable elements is the Chapter House portal on the east wing, with three pointed arches and two windows representing monastic Gothic architecture at its finest.',
      fr: 'Les différentes sections présentent des pierres de taille finement sculptées côtoyant des maçonneries plus simples, avec des briques à l\'étage supérieur qui transforment les arcs originaux en ouvertures rectangulaires. Le pavement de la galerie, partiellement conservé, présente un singulier dessin à motifs radiaux en pierre. Parmi les portails, celui de la salle capitulaire se distingue, avec trois arcs brisés et deux baies, exemple notable du gothique monastique riojano.',
      de: 'Die verschiedenen Abschnitte zeigen fein behauene Quader neben einfacherer Mauerwerk, mit Ziegelsteinen im Obergeschoss, die die ursprünglichen Bögen in rechteckige Öffnungen verwandeln. Der teilweise erhaltene Galeriebelag weist ein einzigartiges Muster aus radialen Steinmotiven auf. Unter den Portalen sticht das der Sakristei hervor, mit drei Spitzbögen und zwei Fenstern — ein bemerkenswertes Beispiel der monastischen Gotik von La Rioja.'
    },
    'ab.s3.p3': {
      es: 'En los demás lados del claustro se abren accesos a la iglesia, la sacristía, el refectorio y otras dependencias, con capiteles ornamentados que incluyen figuras humanas y motivos vegetales. El ala oeste, antigua cilla y hoy museo, conserva una puerta central cegada durante siglos, testimonio de la prolongada historia constructiva del conjunto.',
      en: 'Other wings connect to the church, sacristy, refectory, and service rooms, adorned with capitals of vegetal motifs and human figures. The west wing, once the cellar and now a museum, retains a long-sealed central doorway — a silent witness to the cloister\'s layered architectural history.',
      fr: 'Les autres côtés du cloître donnent accès à l\'église, la sacristie, le réfectoire et d\'autres dépendances, avec des chapiteaux ornés de figures humaines et de motifs végétaux. L\'aile ouest, ancienne grange et aujourd\'hui musée, conserve une porte centrale murée pendant des siècles, témoignage de la longue histoire constructive de l\'ensemble.',
      de: 'Die anderen Seiten des Kreuzgangs führen zur Kirche, Sakristei, dem Refektorium und anderen Nebengebäuden, mit verzierten Kapitellen mit menschlichen Figuren und pflanzlichen Motiven. Der Westflügel, einst die Scheune und heute ein Museum, bewahrt ein seit Jahrhunderten vermauertes zentrales Tor — ein stiller Zeuge der vielschichtigen Baugeschichte des Kreuzgangs.'
    },

    'ab.s4.tag':   { es: 'Vida Comunitaria',  en: 'Community Life',   fr: 'Vie Communautaire', de: 'Gemeinschaftsleben' },
    'ab.s4.title': { es: 'Sala Capitular',    en: 'Chapter House',    fr: 'Salle Capitulaire', de: 'Kapitelsaal' },
    'ab.s4.p1': {
      es: 'Construida en la segunda mitad del siglo XIII, se sitúa junto al claustro y servía para las reuniones de la comunidad. También se convirtió en panteón, acogiendo el sarcófago de la beata Urraca Díaz de Haro y las laudas de cuatro abadesas. Su fachada, con una portada y dos ventanales apuntados decorados con motivos vegetales, destaca por una curiosa figura esculpida, el "eterno borracho", una cabeza humana invertida en el pórtico.',
      en: 'Built in the second half of the 13th century, stands beside the cloister and was used for community meetings. It later became a pantheon, housing the sarcophagus of Blessed Urraca Díaz de Haro and the tomb slabs of four abbesses. Its façade features a pointed-arch doorway and twin windows with ornate vegetal carvings, and includes a curious sculpture known as the "eternal drunkard"—a reversed human head set into the portico.',
      fr: 'Construite dans la seconde moitié du XIIIe siècle, elle se situe à côté du cloître et servait pour les réunions de la communauté. Elle est également devenue un panthéon, accueillant le sarcophage de la bienheureuse Urraca Díaz de Haro et les dalles de quatre abbesses. Sa façade, avec un portail et deux baies gothiques décorées de motifs végétaux, se distingue par une curieuse figure sculptée, « l\'éternel ivrogne », une tête humaine inversée dans le porche.',
      de: 'Er wurde in der zweiten Hälfte des 13. Jahrhunderts erbaut, liegt neben dem Kreuzgang und diente den Versammlungen der Gemeinschaft. Er wurde auch zum Pantheon mit dem Sarkophag der seligen Urraca Díaz de Haro und den Grabplatten von vier Äbtissinnen. Seine Fassade mit einem Spitzbogenportal und zwei mit Pflanzenmotiven verzierten Fenstern zeichnet sich durch eine kuriose Skulptur aus, den „ewigen Trinker" — ein umgekehrter Menschenkopf im Vorhof.'
    },
    'ab.s4.p2': {
      es: 'El interior se compone de cuatro bóvedas sostenidas por una columna central y columnillas adosadas, cuyo diseño simboliza la Santísima Trinidad mediante tres elementos que convergen en el eje central. Esta estructura refuerza la espiritualidad del recinto y su función de unión comunitaria. La decoración vegetal domina el conjunto, aportando armonía y significado simbólico al espacio monástico.',
      en: 'Inside, four vaults rest upon a central column and attached shafts, symbolizing the Holy Trinity through three converging architectural elements. This design emphasizes the spiritual unity of the monastic community, while vegetal decoration enriches the solemn atmosphere of the space.',
      fr: 'L\'intérieur se compose de quatre voûtes soutenues par une colonne centrale et des colonnettes adossées, dont le design symbolise la Sainte Trinité par trois éléments convergeant vers l\'axe central. Cette structure renforce la spiritualité du lieu et sa fonction d\'union communautaire. La décoration végétale domine l\'ensemble, apportant harmonie et signification symbolique à l\'espace monastique.',
      de: 'Das Innere besteht aus vier Gewölben, die von einer Mittelsäule und angesetzten Säulchen getragen werden, deren Gestaltung die Heilige Dreifaltigkeit durch drei zum Mittelpunkt konvergierende Elemente symbolisiert. Diese Struktur betont die Spiritualität des Raumes und seine Funktion der gemeinschaftlichen Einheit. Die Pflanzendekoration dominiert das Ensemble und verleiht dem monastischen Raum Harmonie und symbolische Bedeutung.'
    },
    'ab.s4.p3': {
      es: 'El sarcófago de la beata, pieza excepcional realizada entre los siglos XIII y XIV, se apoya sobre ménsulas con figuras animales y muestra en su tapa a Urraca con sus atributos abaciales, flanqueada por ángeles y novicias. En la caja se narran episodios de su vida y su elevación al cielo con veintiséis personajes. Su cuerpo incorrupto, verificado en varias ocasiones, se acompaña de las laudas de las abadesas, reafirmando su papel central en la historia espiritual del monasterio.',
      en: 'The sarcophagus of the Blessed Urraca Díaz de Haro, crafted between the 13th and 14th centuries, rests on brackets carved with animals. Its lid depicts Urraca with her abbatial insignia, flanked by angels and novices, while the chest recounts scenes from her life and ascent to heaven through twenty-six human figures. Her incorrupt body, confirmed several times, is flanked by the tomb slabs of four abbesses—an enduring testament to her revered legacy within the monastery.',
      fr: 'Le sarcophage de la bienheureuse, pièce exceptionnelle réalisée entre les XIIIe et XIVe siècles, repose sur des corbeaux avec des figures animales et montre sur son couvercle Urraca avec ses attributs abbatiaux, flanquée d\'anges et de novices. Sur le coffre sont narrés des épisodes de sa vie et son élévation au ciel avec vingt-six personnages. Son corps incorruptible, vérifié à plusieurs reprises, est accompagné des dalles des abbesses, réaffirmant son rôle central dans l\'histoire spirituelle du monastère.',
      de: 'Der Sarkophag der Seligen, ein außergewöhnliches Werk aus dem 13. bis 14. Jahrhundert, ruht auf Konsolen mit Tierfiguren und zeigt auf seinem Deckel Urraca mit ihren Äbtissinneninsignien, flankiert von Engeln und Novizinnen. Auf dem Kasten werden Episoden ihres Lebens und ihrer Himmelfahrt mit 26 Figuren erzählt. Ihr unverweslicher Körper, mehrfach bestätigt, wird von den Grabplatten der Äbtissinnen begleitet und bekräftigt ihre zentrale Rolle in der spirituellen Geschichte des Klosters.'
    },

    'ab.s5.tag':   { es: 'Tesoro Espiritual',  en: 'Spiritual Treasury',  fr: 'Trésor Spirituel',   de: 'Geistlicher Schatz' },
    'ab.s5.title': { es: 'Sala de Reliquias',  en: 'Relic Room',          fr: 'Salle des Reliques', de: 'Reliquiensaal' },
    'ab.s5.p1': {
      es: 'Las reliquias han sido veneradas desde la Edad Media por su vínculo con los santos y su capacidad para atraer devoción y peregrinos. Con el tiempo, la Iglesia reguló su autenticidad mediante documentos llamados "auténticas", especialmente a partir de la Edad Moderna, para frenar los abusos y el comercio excesivo asociado a este culto.',
      en: 'Relics have been venerated since the Middle Ages for their connection to saints and their power to inspire devotion and attract pilgrims. Over time, the Church regulated their authenticity through documents known as "authentics," especially from the early modern period onward, in order to curb abuses and the excessive trade associated with relic cults.',
      fr: 'Les reliques ont été vénérées depuis le Moyen Âge pour leur lien avec les saints et leur capacité à attirer la dévotion et les pèlerins. Au fil du temps, l\'Église a réglementé leur authenticité par des documents appelés « authentiques », notamment à partir de l\'époque moderne, pour freiner les abus et le commerce excessif associé à ce culte.',
      de: 'Reliquien wurden seit dem Mittelalter wegen ihrer Verbindung zu Heiligen und ihrer Fähigkeit, Andacht und Pilger anzuziehen, verehrt. Im Laufe der Zeit regulierte die Kirche ihre Echtheit durch Dokumente namens „Authentiken", besonders ab der frühen Neuzeit, um Missbrauch und übermäßigen Handel im Zusammenhang mit dem Reliquienkult einzudämmen.'
    },
    'ab.s5.p2': {
      es: 'El monasterio de Cañas conserva una destacada colección de reliquias organizada en varias etapas históricas, desde la época medieval hasta el siglo XX. Entre las piezas más notables figuran la canilla de Santa Engracia y un hueso de los mártires de Cardeña, ambas con certificado de autenticidad, junto a otras piezas singulares como la reproducción del clavo de la crucifixión o las herraduras atribuidas al caballo del apóstol Santiago.',
      en: 'The Monastery of Cañas preserves an outstanding collection of relics organized into several historical phases, from the medieval period to the 20th century. Among the most notable pieces are the shinbone of Saint Engracia and a bone of the Martyrs of Cardeña, both accompanied by certificates of authenticity, together with singular items such as a reproduction of the nail of the Crucifixion and the horseshoes attributed to the Apostle James\'s horse.',
      fr: 'Le monastère de Cañas conserve une importante collection de reliques organisée en plusieurs étapes historiques, depuis l\'époque médiévale jusqu\'au XXe siècle. Parmi les pièces les plus remarquables figurent la jambe de sainte Engrace et un os des martyrs de Cardeña, tous deux avec certificat d\'authenticité, ainsi que d\'autres pièces singulières comme la reproduction du clou de la crucifixion ou les fers à cheval attribués au cheval de l\'apôtre Jacques.',
      de: 'Das Kloster Cañas bewahrt eine bedeutende Reliquiensammlung, die in mehreren historischen Phasen vom Mittelalter bis zum 20. Jahrhundert organisiert ist. Zu den bemerkenswertesten Stücken gehören das Schienbein der Heiligen Engracia und ein Knochen der Märtyrer von Cardeña, beide mit Echtheitszertifikat, sowie besondere Objekte wie eine Reproduktion des Kreuznagels oder die dem Pferd des Apostels Jakobus zugeschriebenen Hufeisen.'
    },
    'ab.s5.p3': {
      es: 'La sala de reliquias reúne además valiosas obras de arte, como una talla gótica de Santa Ana, la Virgen y el Niño, marfiles hispano-filipinos y una imagen en alabastro de Nuestra Señora del Cister. Este conjunto une valor devocional y artístico, y convierte el espacio en un testimonio excepcional de la historia religiosa y patrimonial del monasterio.',
      en: 'The relics room also displays valuable works of art, including a Gothic polychrome group of Saint Anne, the Virgin, and Child, Hispano-Filipino ivories, and an alabaster image of Our Lady of the Cister. Together, these objects combine devotional significance with artistic value, making the room an exceptional witness to the monastery\'s religious and heritage history.',
      fr: 'La salle des reliques présente également de précieuses œuvres d\'art, comme une sculpture gothique de sainte Anne, la Vierge et l\'Enfant, des ivoires hispano-philippins et une image en albâtre de Notre-Dame du Cîteaux. Cet ensemble unit valeur dévotionnelle et artistique, et fait de l\'espace un témoignage exceptionnel de l\'histoire religieuse et patrimoniale du monastère.',
      de: 'Der Reliquiensaal zeigt auch wertvolle Kunstwerke, darunter eine gotische Polychromgruppe der heiligen Anna, der Jungfrau und des Kindes, hispanisch-philippinische Elfenbeinschnitzereien und ein Alabasterbild Unserer Lieben Frau vom Zisterzienser. Dieses Ensemble verbindet devotionale und künstlerische Bedeutung und macht den Raum zu einem außergewöhnlichen Zeugnis der religiösen und kulturellen Geschichte des Klosters.'
    },

    'ab.s6.tag':   { es: 'Arte Sacro · Colecciones', en: 'Sacred Art · Collections', fr: 'Art Sacré · Collections', de: 'Sakrale Kunst · Sammlungen' },
    'ab.s6.title': { es: 'Cilla‑Museo',              en: 'Cilla‑Museum',             fr: 'Cilla-Musée',            de: 'Cilla-Museum' },
    'ab.s6.p1': {
      es: 'El museo del monasterio ocupa la antigua cilla y alberga la mayor parte del patrimonio mueble de la abadía. Su colección, organizada desde el siglo XVI y distribuida en cinco grandes temas, reúne obras dedicadas a los santos cistercienses, la infancia de Cristo, la Pasión y la Redención, la Virgen y otros santos. El espacio, accesible desde una portada del siglo XIII, se divide en dos salas conectadas por arcos ojivales.',
      en: 'The monastery museum occupies the former granary and houses most of the abbey\'s movable heritage. Its collection, arranged from the 16th century onward and organized into five main themes, brings together works devoted to Cistercian saints, the early life of Christ, the Passion and Redemption, the Virgin Mary, and other saints. The space, accessible through a 13th-century doorway, is divided into two rooms linked by pointed arches.',
      fr: 'Le musée du monastère occupe l\'ancienne grange et abrite la majeure partie du patrimoine mobilier de l\'abbaye. Sa collection, organisée depuis le XVIe siècle et répartie en cinq grands thèmes, réunit des œuvres consacrées aux saints cisterciens, à l\'enfance du Christ, à la Passion et la Rédemption, à la Vierge et à d\'autres saints. L\'espace, accessible depuis un portail du XIIIe siècle, se divise en deux salles reliées par des arcs ogivaux.',
      de: 'Das Klostermuseum befindet sich in der ehemaligen Scheune und beherbergt den größten Teil des beweglichen Kulturerbes der Abtei. Seine Sammlung, die seit dem 16. Jahrhundert geordnet und in fünf Hauptthemen unterteilt ist, vereint Werke zu zisterziensischen Heiligen, der Kindheit Christi, der Passion und Erlösung, der Jungfrau und anderen Heiligen. Der Raum, zugänglich durch ein Portal aus dem 13. Jahrhundert, ist in zwei durch Spitzbögen verbundene Säle unterteilt.'
    },
    'ab.s6.p2': {
      es: 'Entre sus piezas más destacadas figuran valiosas tallas de madera como la "Virgen de la Ayuela", de los siglos XII-XIII, la de "San Juan Evangelista" y la de "San Pedro", además de la imagen gótica de "San Martín de Tours". También sobresalen varios retablos de los siglos XVII y XVIII, como los de San Juan Bautista, La Inmaculada, San Benito, Santa Lucía, San José y el Calvario, junto a obras de temática cisterciense y piezas de la Escuela Riojana.',
      en: 'Among its most notable pieces are valuable wooden sculptures such as the "Virgin of Ayuela," dating from the 12th–13th centuries, as well as "Saint John the Evangelist" and "Saint Peter," together with the Gothic image of "Saint Martin of Tours." The museum also features several 17th- and 18th-century altarpieces, including those of Saint John the Baptist, the Immaculate Conception, Saint Benedict, Saint Lucy, Saint Joseph, and the Calvary, along with Cistercian-themed works and pieces from the Rioja School.',
      fr: 'Parmi ses pièces les plus remarquables figurent de précieuses sculptures en bois comme la « Vierge de la Ayuela », des XIIe-XIIIe siècles, celle de « saint Jean l\'Évangéliste » et celle de « saint Pierre », ainsi que l\'image gothique de « saint Martin de Tours ». On y trouve également plusieurs retables des XVIIe et XVIIIe siècles, comme ceux de saint Jean-Baptiste, l\'Immaculée Conception, saint Benoît, sainte Lucie, saint Joseph et le Calvaire, avec des œuvres à thème cistercien et des pièces de l\'École de La Rioja.',
      de: 'Zu den bedeutendsten Stücken gehören wertvolle Holzschnitzereien wie die „Jungfrau von Ayuela" aus dem 12.–13. Jahrhundert, „Der heilige Johannes der Evangelist" und „Der heilige Petrus" sowie das gotische Bild des „heiligen Martin von Tours". Hinzu kommen mehrere Altarretabel aus dem 17. und 18. Jahrhundert, darunter die des heiligen Johannes des Täufers, der Unbefleckten Empfängnis, des heiligen Benedikt, der heiligen Luzia, des heiligen Josef und des Kalvarienbergs, zusammen mit zisterziensischen Themenwerken und Stücken der Rioja-Schule.'
    },
    'ab.s6.p3': {
      es: 'La colección se completa con lienzos como el "Desposorio místico de San Roberto", "La Lactancia de San Bernardo" y "San Bernardo con los instrumentos de la Pasión", además de un sagrario barroco, el "Tríptico de San Juan Bautista" y una destacada "Trinidad" en mediorelieve. Este conjunto ofrece una visión amplia del arte devocional y de la riqueza patrimonial acumulada por el monasterio a lo largo de los siglos.',
      en: 'The collection is completed by paintings such as the "Mystical Betrothal of Saint Robert," "The Nursing of Saint Bernard," and "Saint Bernard with the Instruments of the Passion," as well as a Baroque tabernacle, the "Triptych of Saint John the Baptist," and a striking half-relief of the Trinity. Together, these works offer a broad view of devotional art and the rich heritage accumulated by the monastery over the centuries.',
      fr: 'La collection se complète de toiles comme le « Mariage mystique de saint Robert », « L\'Allaitement de saint Bernard » et « Saint Bernard avec les instruments de la Passion », ainsi qu\'un tabernacle baroque, le « Triptyque de saint Jean-Baptiste » et une remarquable « Trinité » en demi-relief. Cet ensemble offre une vision large de l\'art dévotionnel et de la richesse patrimoniale accumulée par le monastère au fil des siècles.',
      de: 'Die Sammlung wird durch Gemälde wie die „Mystische Vermählung des heiligen Robert", „Die Stillung des heiligen Bernhard" und „Der heilige Bernhard mit den Leidenswerkzeugen" sowie ein barockes Tabernakel, das „Triptychon des heiligen Johannes des Täufers" und eine bemerkenswerte „Dreifaltigkeit" in Halbrelief vervollständigt. Dieses Ensemble bietet einen umfassenden Einblick in die Andachtskunst und den reichen Kulturschatz, den das Kloster im Laufe der Jahrhunderte angesammelt hat.'
    },
    'ab.cta.over':  { es: '¿Listo para visitar?', en: 'Ready to visit?', fr: 'Prêt à visiter ?', de: 'Bereit für Ihren Besuch?' },
    'ab.cta.h2':    { es: 'Planifica tu visita',  en: 'Plan your visit', fr: 'Planifiez votre visite', de: 'Planen Sie Ihren Besuch' },
    'ab.cta.desc':  {
      es: 'Consulta nuestras tarifas y horarios, o ponte en contacto con nosotros para organizar tu grupo.',
      en: 'Check our prices and opening hours, or contact us to organise your group visit.',
      fr: 'Consultez nos tarifs et horaires, ou contactez-nous pour organiser votre visite de groupe.',
      de: 'Schauen Sie sich unsere Preise und Öffnungszeiten an oder kontaktieren Sie uns, um Ihren Gruppenbesuch zu organisieren.'
    },
    'ab.cta.btn1': { es: 'Ver tarifas',    en: 'View admission',  fr: 'Voir les tarifs',  de: 'Preise ansehen' },
    'ab.cta.btn2': { es: 'Ver galería',    en: 'View gallery',    fr: 'Voir la galerie',  de: 'Galerie ansehen' },

    /* ---- TARIFAS ---- */
    'tr.over':   { es: 'Precios',         en: 'Prices',               fr: 'Prix',               de: 'Preise' },
    'tr.title':  { es: 'Nuestras tarifas',en: 'Our admission prices', fr: 'Nos tarifs',          de: 'Unsere Eintrittspreise' },
    'tr.desc':   {
      es: 'Para que puedas elegir las entradas que mejor se adapten a tus necesidades, ofrecemos cuatro opciones diferentes con precios muy asequibles para todos.',
      en: 'To help you choose the tickets that best suit your needs, we offer four different options at very affordable prices for everyone.',
      fr: 'Pour vous aider à choisir les billets qui correspondent le mieux à vos besoins, nous proposons quatre options différentes à des prix très accessibles pour tous.',
      de: 'Um Ihnen die Wahl des passenden Tickets zu erleichtern, bieten wir vier verschiedene Optionen zu sehr günstigen Preisen für alle an.'
    },
    'tr.tog.ind':    { es: 'Visita Individual',          en: 'Individual visit',           fr: 'Visite individuelle',        de: 'Einzelbesuch' },
    'tr.tog.grp':    { es: 'Visita en Grupo',            en: 'Group visit',                fr: 'Visite en groupe',           de: 'Gruppenbesuch' },
    'tr.sec.ng':     { es: 'Visitas No Guiadas',         en: 'Self-guided Visits',         fr: 'Visites sans guide',         de: 'Besuche ohne Führung' },
    'tr.sec.g':      { es: 'Visita Guiada Individual',   en: 'Individual Guided Visit',    fr: 'Visite guidée individuelle', de: 'Individuelle Führung' },
    'tr.sec.gng':    { es: 'Visita No Guiada · Grupos',  en: 'Self-guided · Groups',       fr: 'Visite sans guide · Groupes',de: 'Ohne Führung · Gruppen' },
    'tr.sec.gg':     { es: 'Suplemento Visita Guiada · Grupos', en: 'Guided Tour Supplement · Groups', fr: 'Supplément visite guidée · Groupes', de: 'Zuschlag Gruppenführung' },
    'tr.adult':      { es: 'Adulto',                     en: 'Adult',                      fr: 'Adulte',                     de: 'Erwachsene' },
    'tr.reduced':    { es: 'Tarifa Reducida',            en: 'Reduced Rate',               fr: 'Tarif réduit',               de: 'Ermäßigter Tarif' },
    'tr.free':       { es: 'Menores de 6 años',          en: 'Under 6 years',              fr: 'Moins de 6 ans',             de: 'Unter 6 Jahren' },
    'tr.free.acc':   { es: 'gratuito',                   en: 'free',                       fr: 'gratuit',                    de: 'kostenlos' },
    'tr.free.inc1':  { es: 'Acceso libre',               en: 'Free access',                fr: 'Accès libre',                de: 'Freier Eintritt' },
    'tr.free.inc2':  { es: 'Acompañado de adulto',       en: 'Accompanied by adult',       fr: 'Accompagné d\'un adulte',    de: 'In Begleitung eines Erwachsenen' },
    'tr.adult.note': { es: '', en: '', fr: '', de: '' },
    'tr.red.note':   {
      es: 'Válido para menores de 6 a 14 años acreditados en taquilla.',
      en: 'Valid for children aged 6–14, verified at the ticket office.',
      fr: 'Valable pour les enfants de 6 à 14 ans, accrédités à la billetterie.',
      de: 'Gültig für Kinder von 6 bis 14 Jahren, bestätigt an der Kasse.'
    },
    'tr.guided.ind': { es: 'Guiada · Individual',       en: 'Guided · Individual',        fr: 'Guidée · Individuelle',      de: 'Geführt · Einzeln' },
    'tr.grp.25p':    { es: 'Grupos + 25 personas',      en: 'Groups of 25+ people',       fr: 'Groupes + 25 personnes',     de: 'Gruppen über 25 Personen' },
    'tr.grp.25m':    { es: 'Grupos − 25 personas',      en: 'Groups under 25 people',     fr: 'Groupes − 25 personnes',     de: 'Gruppen unter 25 Personen' },
    'tr.kids':       { es: 'Niños (6 – 14 años)',       en: 'Children (aged 6–14)',       fr: 'Enfants (6 – 14 ans)',       de: 'Kinder (6 – 14 Jahre)' },
    'tr.supp.guide': { es: 'Guía incluido',             en: 'Guide included',             fr: 'Guide inclus',               de: 'Führung inklusive' },
    'tr.inc.church': { es: 'Iglesia del siglo XII',     en: '12th-century Church',        fr: 'Église du XIIe siècle',      de: 'Kirche aus dem 12. Jh.' },
    'tr.inc.cloister':{ es: 'El Claustro',              en: 'The Cloister',               fr: 'Le Cloître',                 de: 'Der Kreuzgang' },
    'tr.inc.relics': { es: 'Sala de Reliquias',         en: 'Relic Room',                 fr: 'Salle des Reliques',         de: 'Reliquiensaal' },
    'tr.inc.chapter':{ es: 'La Sala Capitular',         en: 'Chapter House',              fr: 'La Salle Capitulaire',       de: 'Der Kapitelsaal' },
    'tr.inc.cilla':  { es: 'La Cilla‑Museo',            en: 'The Cilla‑Museum',           fr: 'La Cilla-Musée',             de: 'Das Cilla-Museum' },
    'tr.inc.guide':  { es: 'Guía especializado incluido',en: 'Specialist guide included', fr: 'Guide spécialisé inclus',    de: 'Fachführung inklusive' },
    'tr.inc.free':   { es: 'Acceso libre',              en: 'Free access',                fr: 'Accès libre',                de: 'Freier Eintritt' },
    'tr.inc.adult':  { es: 'Acompañado de adulto',      en: 'Accompanied by adult',       fr: 'Accompagné d\'un adulte',    de: 'In Begleitung eines Erwachsenen' },
    'tr.book.title': { es: '¿Cómo reservar?',          en: 'How to book?',               fr: 'Comment réserver ?',         de: 'Wie buchen?' },
    'tr.book.p':     {
      es: 'Las visitas guiadas individuales están sujetas a disponibilidad. Contacta con nosotros con antelación para confirmar fecha y hora.',
      en: 'Individual guided visits are subject to availability. Contact us in advance to confirm date and time.',
      fr: 'Les visites guidées individuelles sont soumises à disponibilité. Contactez-nous à l\'avance pour confirmer la date et l\'heure.',
      de: 'Individuelle Führungen sind abhängig von der Verfügbarkeit. Kontaktieren Sie uns im Voraus, um Datum und Uhrzeit zu bestätigen.'
    },
    'tr.grp.title':  { es: 'Reservas de grupos',       en: 'Group bookings',             fr: 'Réservations de groupes',    de: 'Gruppenbuchungen' },
    'tr.grp.p':      {
      es: 'Para la gestión y reserva de grupos, es necesario contactar previamente. Las reservas están sujetas a disponibilidad y deben confirmarse con antelación.',
      en: 'Group bookings must be arranged in advance. Reservations are subject to availability and must be confirmed beforehand.',
      fr: 'Pour la gestion et la réservation de groupes, il est nécessaire de nous contacter au préalable. Les réservations sont soumises à disponibilité et doivent être confirmées à l\'avance.',
      de: 'Für die Verwaltung und Buchung von Gruppen ist eine vorherige Kontaktaufnahme erforderlich. Buchungen unterliegen der Verfügbarkeit und müssen im Voraus bestätigt werden.'
    },
    'tr.grp.p2':     {
      es: 'La falta de confirmación puede entenderse como cancelación de la reserva.',
      en: 'Failure to confirm may be treated as cancellation of the booking.',
      fr: 'L\'absence de confirmation peut être considérée comme l\'annulation de la réservation.',
      de: 'Das Ausbleiben einer Bestätigung kann als Stornierung der Buchung gewertet werden.'
    },
    'tr.reserve.btn':{ es: 'Solicitar reserva',        en: 'Request booking',            fr: 'Demander une réservation',   de: 'Buchung anfragen' },
    'tr.grp.btn':    { es: 'Reservar grupo',           en: 'Book a group',               fr: 'Réserver un groupe',         de: 'Gruppe buchen' },
    'tr.note.txt':   {
      es: '<strong>Horarios:</strong> De 10:30 a 14:00 h y de 16:00 a 19:30 h (hasta 20:00 h en temporada estival). Los horarios pueden variar. Las tarifas especiales se aplican únicamente acreditando la condición en taquilla.',
      en: '<strong>Opening hours:</strong> 10:30 am–2:00 pm and 4:00–7:30 pm (until 8:00 pm in summer). Hours may vary. Reduced rates apply only upon verification at the ticket office.',
      fr: '<strong>Horaires :</strong> De 10 h 30 à 14 h 00 et de 16 h 00 à 19 h 30 (jusqu\'à 20 h 00 en saison estivale). Les horaires peuvent varier. Les tarifs réduits s\'appliquent uniquement sur présentation des justificatifs à la billetterie.',
      de: '<strong>Öffnungszeiten:</strong> 10:30 – 14:00 Uhr und 16:00 – 19:30 Uhr (bis 20:00 Uhr im Sommer). Die Zeiten können variieren. Ermäßigte Tarife gelten nur gegen Nachweis an der Kasse.'
    },
    'tr.faq.over':   { es: 'Dudas',                    en: 'FAQ',                        fr: 'Questions',                  de: 'FAQ' },
    'tr.faq.title':  { es: 'Preguntas frecuentes',     en: 'Frequently asked questions', fr: 'Questions fréquentes',       de: 'Häufig gestellte Fragen' },
    'tr.faq.q1':     { es: '¿Cuáles son los horarios de visita?', en: 'What are the visiting hours?', fr: 'Quels sont les horaires de visite ?', de: 'Was sind die Besuchszeiten?' },
    'tr.faq.a1':     {
      es: '<p><strong>Mañanas:</strong> de 10:30 a 14:00 horas.<br><strong>Tardes:</strong> de 16:00 a 19:30 horas (hasta las 20:00 h en temporada estival).</p><p>Los horarios pueden variar según la temporada o eventos especiales. Se recomienda confirmar antes de la visita.</p>',
      en: '<p><strong>Mornings:</strong> 10:30 am to 2:00 pm.<br><strong>Afternoons:</strong> 4:00 to 7:30 pm (until 8:00 pm in summer).</p><p>Hours may vary by season or special events. We recommend confirming before your visit.</p>',
      fr: '<p><strong>Matinée :</strong> de 10 h 30 à 14 h 00.<br><strong>Après-midi :</strong> de 16 h 00 à 19 h 30 (jusqu\'à 20 h 00 en saison estivale).</p><p>Les horaires peuvent varier selon la saison ou des événements spéciaux. Il est recommandé de confirmer avant la visite.</p>',
      de: '<p><strong>Morgens:</strong> 10:30 bis 14:00 Uhr.<br><strong>Nachmittags:</strong> 16:00 bis 19:30 Uhr (bis 20:00 Uhr im Sommer).</p><p>Die Zeiten können je nach Jahreszeit oder besonderen Veranstaltungen variieren. Wir empfehlen, vor dem Besuch zu bestätigen.</p>'
    },
    'tr.faq.q2': { es: '¿Necesito reserva previa para visitar?', en: 'Do I need to book in advance?', fr: 'Dois-je réserver à l\'avance pour visiter ?', de: 'Muss ich im Voraus buchen?' },
    'tr.faq.a2': {
      es: '<p>Para visitas individuales no guiadas no es necesaria reserva previa; puedes comprar la entrada directamente en taquilla.</p><p>Para visitas guiadas y grupos, la reserva previa es recomendable.</p>',
      en: '<p>For individual self-guided visits, no prior booking is required; you can buy tickets directly at the ticket office.</p><p>For guided visits and groups, advance booking is recommended.</p>',
      fr: '<p>Pour les visites individuelles sans guide, aucune réservation préalable n\'est nécessaire ; vous pouvez acheter les billets directement à la billetterie.</p><p>Pour les visites guidées et les groupes, la réservation préalable est recommandée.</p>',
      de: '<p>Für individuelle Besuche ohne Führung ist keine Vorabbuchung erforderlich; Tickets können direkt an der Kasse gekauft werden.</p><p>Für Führungen und Gruppen wird eine Vorabbuchung empfohlen.</p>'
    },
    'tr.faq.q3': { es: '¿Se admiten cambios o devoluciones de entradas?', en: 'Are ticket changes or refunds accepted?', fr: 'Les changements ou remboursements de billets sont-ils acceptés ?', de: 'Werden Ticketänderungen oder Rückerstattungen akzeptiert?' },
    'tr.faq.a3': {
      es: '<p>Una vez adquirida y reservada la entrada, no se admiten cambios ni devoluciones, salvo en los casos de cancelación del servicio por parte del monasterio.</p>',
      en: '<p>Once a ticket has been purchased and reserved, no changes or refunds are accepted, except in cases where the monastery cancels the service.</p>',
      fr: '<p>Une fois le billet acheté et réservé, aucun changement ni remboursement n\'est accepté, sauf dans les cas où le monastère annule le service.</p>',
      de: '<p>Einmal gekaufte und reservierte Tickets können nicht geändert oder erstattet werden, außer in Fällen, in denen das Kloster den Service storniert.</p>'
    },
    'tr.faq.q4': { es: '¿Los descuentos son acumulables?', en: 'Can discounts be combined?', fr: 'Les réductions sont-elles cumulables ?', de: 'Können Rabatte kombiniert werden?' },
    'tr.faq.a4': {
      es: '<p>No, los descuentos y promociones no son acumulables entre sí. Cada descuento o promoción debe ser utilizado de manera individual.</p>',
      en: '<p>No, discounts and promotions cannot be combined. Each discount or promotion must be used individually.</p>',
      fr: '<p>Non, les réductions et promotions ne sont pas cumulables. Chaque réduction ou promotion doit être utilisée individuellement.</p>',
      de: '<p>Nein, Rabatte und Aktionen können nicht kombiniert werden. Jeder Rabatt oder jede Aktion muss einzeln genutzt werden.</p>'
    },
    'tr.faq.q5': {
      es: '¿El monasterio tiene accesibilidad para personas con movilidad reducida?',
      en: 'Is the monastery accessible for people with reduced mobility?',
      fr: 'Le monastère est-il accessible aux personnes à mobilité réduite ?',
      de: 'Ist das Kloster für Menschen mit eingeschränkter Mobilität zugänglich?'
    },
    'tr.faq.a5': {
      es: '<p>Disponemos de acceso adaptado en los principales espacios. Para necesidades específicas, te recomendamos que contactes con nosotros previamente.</p>',
      en: '<p>We have adapted access to the main spaces. For specific needs, we recommend contacting us beforehand.</p>',
      fr: '<p>Nous disposons d\'un accès adapté dans les principaux espaces. Pour des besoins spécifiques, nous vous recommandons de nous contacter au préalable.</p>',
      de: '<p>Wir haben einen angepassten Zugang zu den Hauptbereichen. Für besondere Bedürfnisse empfehlen wir, uns vorab zu kontaktieren.</p>'
    },

    /* ---- NOTICIAS ---- */
    'nw.over':   { es: 'Prensa y medios',  en: 'Press & media',  fr: 'Presse et médias',  de: 'Presse & Medien' },
    'nw.title':  { es: 'En los medios',    en: 'In the press',   fr: 'Dans les médias',   de: 'In den Medien' },
    'nw.desc':   {
      es: 'El Monasterio de Cañas en la prensa regional y nacional. Haz clic en cada noticia para leer el artículo completo.',
      en: 'Monasterio de Cañas in the regional and national press. Click on each article to read the full story.',
      fr: 'Le Monastère de Cañas dans la presse régionale et nationale. Cliquez sur chaque article pour lire l\'histoire complète.',
      de: 'Das Kloster Cañas in der regionalen und nationalen Presse. Klicken Sie auf jeden Artikel, um die vollständige Geschichte zu lesen.'
    },
    'nw.tag1':   { es: 'Cultura · Música',     en: 'Culture · Music',     fr: 'Culture · Musique',    de: 'Kultur · Musik' },
    'nw.title1': { es: 'Cinco conciertos de lujo para disfrutar', en: 'Five luxury concerts to enjoy', fr: 'Cinq concerts de luxe à savourer', de: 'Fünf luxuriöse Konzerte zu genießen' },
    'nw.exc1':   {
      es: 'Música y patrimonio se unen en el Monasterio de Cañas. Una propuesta cultural única que fusiona el arte sonoro con la arquitectura medieval cisterciense del siglo XII.',
      en: 'Music and heritage come together at Monasterio de Cañas. A unique cultural proposal fusing sound art with 12th-century Cistercian medieval architecture.',
      fr: 'Musique et patrimoine s\'unissent au Monastère de Cañas. Une proposition culturelle unique qui fusionne l\'art sonore avec l\'architecture médiévale cistercienne du XIIe siècle.',
      de: 'Musik und Kulturerbe vereinen sich im Kloster Cañas. Ein einzigartiges Kulturangebot, das Klangkunst mit der mittelalterlichen Zisterzienserarchitektur aus dem 12. Jahrhundert verbindet.'
    },
    'nw.tag2':   { es: 'Visita · Verano',      en: 'Visit · Summer',      fr: 'Visite · Été',         de: 'Besuch · Sommer' },
    'nw.title2': { es: 'Un tesoro por descubrir: abre sus puertas este verano', en: 'A treasure to discover: opens its doors this summer', fr: 'Un trésor à découvrir : ouvre ses portes cet été', de: 'Ein Schatz zu entdecken: öffnet diesen Sommer seine Pforten' },
    'nw.exc2':   {
      es: 'El Monasterio de Cañas abre sus puertas este verano para que puedas descubrir la magia de uno de los conjuntos monásticos más singulares de La Rioja.',
      en: 'Monasterio de Cañas opens its doors this summer so you can discover the magic of one of the most singular monastic complexes in La Rioja.',
      fr: 'Le Monastère de Cañas ouvre ses portes cet été pour que vous puissiez découvrir la magie de l\'un des ensembles monastiques les plus singuliers de La Rioja.',
      de: 'Das Kloster Cañas öffnet diesen Sommer seine Türen, damit Sie die Magie eines der einzigartigsten Klosterkomplexe in La Rioja entdecken können.'
    },
    'nw.tag3':   { es: 'Turismo · Patrimonio', en: 'Tourism · Heritage',  fr: 'Tourisme · Patrimoine',de: 'Tourismus · Erbe' },
    'nw.title3': { es: 'Descubre este verano la magia del Monasterio de Cañas', en: 'Discover the magic of Monasterio de Cañas this summer', fr: 'Découvrez cet été la magie du Monastère de Cañas', de: 'Entdecken Sie diesen Sommer die Magie des Klosters Cañas' },
    'nw.exc3':   {
      es: 'Una visita imprescindible para todos aquellos que deseen conocer el patrimonio histórico y espiritual de La Rioja en un entorno único e incomparable.',
      en: 'A must-visit for all those who wish to discover the historical and spiritual heritage of La Rioja in a unique and incomparable setting.',
      fr: 'Une visite incontournable pour tous ceux qui souhaitent découvrir le patrimoine historique et spirituel de La Rioja dans un cadre unique et incomparable.',
      de: 'Ein Muss für alle, die das historische und spirituelle Erbe von La Rioja in einer einzigartigen und unvergleichlichen Umgebung entdecken möchten.'
    },
    'nw.tag4':   { es: 'Apertura · Temporada', en: 'Opening · Season',    fr: 'Ouverture · Saison',   de: 'Eröffnung · Saison' },
    'nw.title4': { es: 'La abadía de luz: podrá visitarse este verano', en: 'The abbey of light: open to visitors this summer', fr: 'L\'abbaye de lumière : pourra être visitée cet été', de: 'Die Abtei des Lichts: kann diesen Sommer besucht werden' },
    'nw.exc4':   {
      es: 'El Monasterio de Cañas amplía su calendario de visitas durante los meses de verano, ofreciendo una experiencia única en un enclave histórico de La Rioja Alta.',
      en: 'Monasterio de Cañas extends its visiting calendar during the summer months, offering a unique experience in a historic enclave of La Rioja Alta.',
      fr: 'Le Monastère de Cañas étend son calendrier de visites pendant les mois d\'été, offrant une expérience unique dans un site historique de La Rioja Alta.',
      de: 'Das Kloster Cañas erweitert seinen Besuchskalender in den Sommermonaten und bietet ein einzigartiges Erlebnis an einem historischen Ort in La Rioja Alta.'
    },
    'nw.readmore': { es: 'Leer en ', en: 'Read in ', fr: 'Lire dans ', de: 'Lesen in ' },
    'nw.cta.h2':   { es: '¿Quieres organizar tu visita?', en: 'Want to plan your visit?', fr: 'Vous souhaitez organiser votre visite ?', de: 'Möchten Sie Ihren Besuch planen?' },
    'nw.cta.desc': {
      es: 'Ponte en contacto con nosotros y te ayudamos a planificar la visita perfecta al Monasterio.',
      en: 'Get in touch and we will help you plan the perfect visit to the Monastery.',
      fr: 'Contactez-nous et nous vous aiderons à planifier la visite parfaite au Monastère.',
      de: 'Kontaktieren Sie uns und wir helfen Ihnen, den perfekten Besuch im Kloster zu planen.'
    },
    'nw.cta.btn1': { es: 'Ver tarifas', en: 'View admission', fr: 'Voir les tarifs', de: 'Preise ansehen' },
    'nw.cta.btn2': { es: 'Contactar',   en: 'Contact us',     fr: 'Nous contacter',  de: 'Kontakt' },

    /* ---- GALERÍA ---- */
    'gal.all':     { es: 'Todos los espacios', en: 'All spaces',    fr: 'Tous les espaces',    de: 'Alle Räume' },
    'gal.church':  { es: 'La Iglesia',         en: 'The Church',    fr: 'L\'Église',           de: 'Die Kirche' },
    'gal.cloister':{ es: 'El Claustro',        en: 'The Cloister',  fr: 'Le Cloître',          de: 'Der Kreuzgang' },
    'gal.chapter': { es: 'Sala Capitular',     en: 'Chapter House', fr: 'Salle Capitulaire',   de: 'Kapitelsaal' },
    'gal.relics':  { es: 'Sala de Reliquias',  en: 'Relic Room',    fr: 'Salle des Reliques',  de: 'Reliquiensaal' },
    'gal.cilla':   { es: 'Cilla‑Museo',        en: 'Cilla‑Museum',  fr: 'Cilla-Musée',         de: 'Cilla-Museum' },
    'gal.s1':      { es: 'La Iglesia',         en: 'The Church',    fr: 'L\'Église',           de: 'Die Kirche' },
    'gal.s2':      { es: 'El Claustro',        en: 'The Cloister',  fr: 'Le Cloître',          de: 'Der Kreuzgang' },
    'gal.s3':      { es: 'Sala Capitular',     en: 'Chapter House', fr: 'Salle Capitulaire',   de: 'Kapitelsaal' },
    'gal.s4':      { es: 'Sala de Reliquias',  en: 'Relic Room',    fr: 'Salle des Reliques',  de: 'Reliquiensaal' },
    'gal.s5':      { es: 'Cilla‑Museo',        en: 'Cilla‑Museum',  fr: 'Cilla-Musée',         de: 'Cilla-Museum' },
    'gal.note':    {
      es: 'Las fotografías reales del monasterio se mostrarán en esta galería. Para añadirlas, coloca las imágenes en la carpeta <code>assets/img/galeria/</code> y actualiza los elementos con las rutas correspondientes.',
      en: 'Real photographs of the monastery will be displayed here. To add them, place images in the <code>assets/img/galeria/</code> folder and update the elements with the corresponding paths.',
      fr: 'Les véritables photographies du monastère seront affichées dans cette galerie. Pour les ajouter, placez les images dans le dossier <code>assets/img/galeria/</code> et mettez à jour les éléments avec les chemins correspondants.',
      de: 'Echte Fotos des Klosters werden in dieser Galerie angezeigt. Um sie hinzuzufügen, legen Sie die Bilder im Ordner <code>assets/img/galeria/</code> ab und aktualisieren Sie die Elemente mit den entsprechenden Pfaden.'
    },

    /* ---- PÁGINAS LEGALES (secciones comunes) ---- */
    'leg.updated': {
      es: 'Última actualización: enero de 2026',
      en: 'Last updated: January 2026',
      fr: 'Dernière mise à jour : janvier 2026',
      de: 'Letzte Aktualisierung: Januar 2026'
    },

    /* ---- NAV / FOOTER extras ---- */
    'nav.aria.burger': { es: 'Abrir menú', en: 'Open menu', fr: 'Ouvrir le menu', de: 'Menü öffnen' },
    'ft.social':       { es: 'Social',     en: 'Social',    fr: 'Réseaux sociaux', de: 'Soziale Medien' },
    'ft.brand.addr':   {
      es: 'Carretera 12 · 26325 Cañas, La Rioja, España',
      en: 'Carretera 12 · 26325 Cañas, La Rioja, Spain',
      fr: 'Carretera 12 · 26325 Cañas, La Rioja, Espagne',
      de: 'Carretera 12 · 26325 Cañas, La Rioja, Spanien'
    },

    /* ---- AUDIOGUÍA (menús) ---- */
    'ag.welcome':     { es: 'Bienvenido · Welcome', en: 'Welcome', fr: 'Bienvenue', de: 'Willkommen' },
    'ag.choose':      { es: '¿Qué deseas consultar?', en: 'What would you like to explore?', fr: 'Que souhaitez-vous consulter ?', de: 'Was möchten Sie erkunden?' },
    'ag.select':      { es: 'Selecciona una opción para continuar', en: 'Select an option to continue', fr: 'Sélectionnez une option pour continuer', de: 'Wählen Sie eine Option, um fortzufahren' },
    'ag.brochure.title': { es: 'Folleto‑Guía', en: 'Visit Guide', fr: 'Dépliant‑Guide', de: 'Reiseführer' },
    'ag.brochure.desc':  { es: 'Descarga el folleto de visita en tu idioma', en: 'Download the visit guide in your language', fr: 'Téléchargez le dépliant de visite dans votre langue', de: 'Laden Sie den Besuchsführer in Ihrer Sprache herunter' },
    'ag.audio.title':    { es: 'Audioguía', en: 'Audio Guide', fr: 'Audioguide', de: 'Audioführer' },
    'ag.audio.desc':     { es: 'Escucha la guía de audio del monasterio', en: 'Listen to the monastery audio guide', fr: 'Écoutez le guide audio du monastère', de: 'Hören Sie den Audioführer des Klosters' },
    'ag.chooselang':     { es: 'Elige tu idioma', en: 'Choose your language', fr: 'Choisissez votre langue', de: 'Wählen Sie Ihre Sprache' },
    'ag.back':           { es: 'Volver', en: 'Back', fr: 'Retour', de: 'Zurück' },

    /* ---- COOKIES BANNER ---- */
    'ck.label':       { es: 'Cookies', en: 'Cookies', fr: 'Cookies', de: 'Cookies' },
    'ck.desc':        {
      es: 'Usamos cookies propias necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies analíticas para mejorar la experiencia. Puedes aceptarlas todas, rechazar las opcionales o personalizar tu elección. Más información en nuestra <a href="cookies.html">Política de Cookies</a>.',
      en: 'We use essential cookies for the site to function, and with your consent, analytics cookies to improve your experience. You can accept all, reject optional ones, or customise your choices. More information in our <a href="cookies.html">Cookie Policy</a>.',
      fr: 'Nous utilisons des cookies nécessaires au fonctionnement du site et, avec votre consentement, des cookies analytiques pour améliorer votre expérience. Vous pouvez tout accepter, refuser les optionnels ou personnaliser vos choix. Plus d\'informations dans notre <a href="cookies.html">Politique de Cookies</a>.',
      de: 'Wir verwenden notwendige Cookies für den Betrieb der Website und mit Ihrer Zustimmung Analyse-Cookies zur Verbesserung Ihrer Erfahrung. Sie können alle akzeptieren, optionale ablehnen oder Ihre Auswahl anpassen. Weitere Informationen in unserer <a href="cookies.html">Cookie-Richtlinie</a>.'
    },
    'ck.btn.settings':{ es: 'Personalizar',    en: 'Customise',     fr: 'Personnaliser',  de: 'Anpassen' },
    'ck.btn.reject':  { es: 'Solo necesarias', en: 'Necessary only',fr: 'Nécessaires seulement', de: 'Nur notwendige' },
    'ck.btn.accept':  { es: 'Aceptar todas',   en: 'Accept all',    fr: 'Tout accepter',  de: 'Alle akzeptieren' },
    'ck.panel.title': { es: 'Gestión detallada de cookies', en: 'Detailed cookie settings', fr: 'Gestion détaillée des cookies', de: 'Detaillierte Cookie-Einstellungen' },
    'ck.panel.aria':  { es: 'Configuración detallada de cookies', en: 'Detailed cookie settings', fr: 'Paramètres détaillés des cookies', de: 'Detaillierte Cookie-Einstellungen' },
    'ck.banner.aria': { es: 'Preferencias de cookies', en: 'Cookie preferences', fr: 'Préférences de cookies', de: 'Cookie-Einstellungen' },
    'ck.nec.name':    { es: 'Cookies necesarias',  en: 'Necessary cookies',  fr: 'Cookies nécessaires',  de: 'Notwendige Cookies' },
    'ck.nec.always':  { es: 'Siempre activas',     en: 'Always active',      fr: 'Toujours actives',     de: 'Immer aktiv' },
    'ck.nec.desc':    {
      es: 'Imprescindibles para el funcionamiento básico del sitio. Guardan tu preferencia de idioma (<code>lang_pref</code>) y si ya has respondido a este aviso (<code>cookie_consent</code>). No requieren consentimiento.',
      en: 'Essential for the basic functioning of the site. They store your language preference (<code>lang_pref</code>) and whether you have already responded to this notice (<code>cookie_consent</code>). No consent required.',
      fr: 'Indispensables au fonctionnement de base du site. Elles enregistrent votre préférence de langue (<code>lang_pref</code>) et si vous avez déjà répondu à cette notification (<code>cookie_consent</code>). Aucun consentement requis.',
      de: 'Unverzichtbar für den grundlegenden Betrieb der Website. Sie speichern Ihre Spracheinstellung (<code>lang_pref</code>) und ob Sie diesem Hinweis bereits zugestimmt haben (<code>cookie_consent</code>). Keine Einwilligung erforderlich.'
    },
    'ck.nec.aria':    { es: 'Cookies necesarias (siempre activas)', en: 'Necessary cookies (always active)', fr: 'Cookies nécessaires (toujours actives)', de: 'Notwendige Cookies (immer aktiv)' },
    'ck.ana.name':    { es: 'Cookies analíticas',  en: 'Analytics cookies',  fr: 'Cookies analytiques',  de: 'Analyse-Cookies' },
    'ck.ana.desc':    {
      es: 'Nos permiten medir el tráfico y el comportamiento de los visitantes de forma anonimizada (Google Analytics: <code>_ga</code>, <code>_ga_*</code>). Solo se instalan con tu consentimiento expreso.',
      en: 'Allow us to measure traffic and visitor behaviour in an anonymised way (Google Analytics: <code>_ga</code>, <code>_ga_*</code>). Only installed with your explicit consent.',
      fr: 'Nous permettent de mesurer le trafic et le comportement des visiteurs de manière anonymisée (Google Analytics : <code>_ga</code>, <code>_ga_*</code>). Elles ne sont installées qu\'avec votre consentement exprès.',
      de: 'Ermöglichen uns die anonymisierte Messung von Traffic und Besucherverhalten (Google Analytics: <code>_ga</code>, <code>_ga_*</code>). Werden nur mit Ihrer ausdrücklichen Einwilligung installiert.'
    },
    'ck.ana.aria':    { es: 'Activar cookies analíticas', en: 'Enable analytics cookies', fr: 'Activer les cookies analytiques', de: 'Analyse-Cookies aktivieren' },
    'ck.btn.reject.panel': { es: 'Rechazar opcionales', en: 'Reject optional', fr: 'Refuser les optionnels', de: 'Optionale ablehnen' },
    'ck.btn.save':    { es: 'Guardar preferencias', en: 'Save preferences', fr: 'Enregistrer les préférences', de: 'Einstellungen speichern' },
  };

  /* =================================================================
     NÚCLEO — soporte de 4 idiomas: es / en / fr / de
  ================================================================= */
  const LS_KEY   = 'ml_lang';
  const LANGS    = ['es', 'en', 'fr', 'de'];

  function detectLang() {
    const saved = localStorage.getItem(LS_KEY);
    if (saved && LANGS.includes(saved)) return saved;
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('de')) return 'de';
    if (nav.startsWith('en')) return 'en';
    return 'es';
  }

  let lang = detectLang();

  function t(key) {
    const e = D[key];
    if (!e) { console.warn('[i18n] missing key:', key); return ''; }
    return e[lang] !== undefined ? e[lang] : (e.es || '');
  }

  function apply() {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t(el.dataset.i18n);
      if (v !== '') el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = t(el.dataset.i18nPlaceholder);
      if (v !== '') el.placeholder = v;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const v = t(el.dataset.i18nAria);
      if (v !== '') el.setAttribute('aria-label', v);
    });

    // Lang dropdown: update current-language button text and aria-selected on options
    document.querySelectorAll('.lang-selector').forEach(sel => {
      const cur = sel.querySelector('.lang-current');
      if (cur) cur.textContent = lang.toUpperCase();
      sel.querySelectorAll('.lang-opt').forEach(btn => {
        const match = btn.dataset.lang === lang;
        btn.setAttribute('aria-selected', String(match));
      });
    });
  }

  function setLang(newLang) {
    if (!LANGS.includes(newLang)) return;
    lang = newLang;
    localStorage.setItem(LS_KEY, lang);
    apply();
    // Re-render cookies banner if visible
    if (window.__ckUpdateLang) window.__ckUpdateLang(lang);
  }

  // Public
  window.i18n = { t, setLang, getLang: () => lang, apply, LANGS };

  // Wire lang selector clicks (delegated)
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.lang-opt');
    if (btn && btn.dataset.lang) {
      setLang(btn.dataset.lang);
    }
    // Legacy toggle support
    if (e.target.closest('.lang-toggle') && !e.target.closest('.lang-opt')) {
      const idx = LANGS.indexOf(lang);
      setLang(LANGS[(idx + 1) % LANGS.length]);
    }
  });

  // Apply as soon as DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }

})();
