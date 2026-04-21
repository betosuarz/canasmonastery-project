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
    'nav.home':    { es: 'Inicio',     en: 'Home',       fr: 'Accueil',   de: 'Startseite', it: 'Home',        pt: 'Início',    eu: 'Hasiera',   ca: 'Inici',     ko: '홈' },
    'nav.abbey':   { es: 'La Abadía', en: 'The Abbey',  fr: 'L\'Abbaye', de: 'Die Abtei',  it: 'L\'Abbazia',  pt: 'A Abadia',  eu: 'Abadia',    ca: 'L\'Abadia', ko: '수도원' },
    'nav.rates':   { es: 'Tarifas',   en: 'Admission',  fr: 'Tarifs',    de: 'Preise',     it: 'Tariffe',     pt: 'Tarifas',   eu: 'Tarifak',   ca: 'Tarifes',   ko: '요금' },
    'nav.news':    { es: 'Noticias',  en: 'News',       fr: 'Actualités',de: 'Neuigkeiten',it: 'Notizie',     pt: 'Notícias',  eu: 'Albisteak', ca: 'Notícies',  ko: '소식' },
    'nav.gallery': { es: 'Galería',   en: 'Gallery',    fr: 'Galerie',   de: 'Galerie',    it: 'Galleria',    pt: 'Galeria',   eu: 'Galeria',   ca: 'Galeria',   ko: '갤러리' },
    'nav.contact': { es: 'Contacto',  en: 'Contact',    fr: 'Contact',   de: 'Kontakt',    it: 'Contatto',    pt: 'Contacto',  eu: 'Harremana', ca: 'Contacte',  ko: '문의' },

    /* ---- FOOTER ---- */
    'ft.pages':  { es: 'Páginas',              en: 'Pages',          fr: 'Pages',              de: 'Seiten',       it: 'Pagine',              pt: 'Páginas',              eu: 'Orrialdeak',            ca: 'Pàgines',              ko: '페이지' },
    'ft.legal':  { es: 'Legal',                en: 'Legal',          fr: 'Légal',              de: 'Rechtliches',  it: 'Legale',              pt: 'Legal',                eu: 'Legezkoa',              ca: 'Legal',                ko: '법적 정보' },
    'ft.contact':{ es: 'Contacto',             en: 'Contact',        fr: 'Contact',            de: 'Kontakt',      it: 'Contatto',            pt: 'Contacto',             eu: 'Harremana',             ca: 'Contacte',             ko: '문의' },
    'ft.legal1': { es: 'Aviso legal',          en: 'Legal notice',   fr: 'Mentions légales',   de: 'Impressum',    it: 'Note legali',         pt: 'Aviso legal',          eu: 'Lege-oharra',           ca: 'Avís legal',           ko: '법적 고지' },
    'ft.legal2': { es: 'Privacidad',           en: 'Privacy policy', fr: 'Confidentialité',    de: 'Datenschutz',  it: 'Privacy',             pt: 'Privacidade',          eu: 'Pribatutasuna',         ca: 'Privacitat',           ko: '개인정보 보호' },
    'ft.legal3': { es: 'Cookies',              en: 'Cookie policy',  fr: 'Cookies',            de: 'Cookies',      it: 'Cookie',              pt: 'Cookies',              eu: 'Cookie-ak',             ca: 'Cookies',              ko: '쿠키' },
    'ft.legal4': { es: 'Términos y condiciones', en: 'Terms & conditions', fr: 'Conditions générales', de: 'AGB', it: 'Termini e condizioni', pt: 'Termos e condições',   eu: 'Baldintzak eta arauak', ca: 'Termes i condicions',  ko: '이용 약관' },
    'ft.copy': {
      es: '© 2026 Monasterio de Santa María de San Salvador de Cañas · Todos los derechos reservados',
      en: '© 2026 Monastery of Santa María de San Salvador de Cañas · All rights reserved',
      fr: '© 2026 Monastère de Santa María de San Salvador de Cañas · Tous droits réservés',
      de: '© 2026 Kloster Santa María de San Salvador de Cañas · Alle Rechte vorbehalten'
    },

    /* ---- PAGE HEROES ---- */
    'ph.abbey.over':  { es: 'Patrimonio · Cister', en: 'Heritage · Cistercian', fr: 'Patrimoine · Cistercien', de: 'Erbe · Zisterzienser', it: 'Patrimonio · Cistercense', pt: 'Património · Cisterciense', eu: 'Ondarea · Zistertziar', ca: 'Patrimoni · Cistercenc', ko: '문화유산 · 시토회' },
    'ph.abbey.title': { es: 'La Abadía', en: 'The Abbey', fr: 'L\'Abbaye', de: 'Die Abtei', it: 'L\'Abbazia', pt: 'A Abadia', eu: 'Abadia', ca: 'L\'Abadia', ko: '수도원' },
    'ph.abbey.sub':   {
      es: 'Monasterio de Santa María de San Salvador de Cañas',
      en: 'Monastery of Santa María de San Salvador de Cañas',
      fr: 'Monastère de Santa María de San Salvador de Cañas',
      de: 'Kloster Santa María de San Salvador de Cañas',
      it: 'Monastero di Santa María de San Salvador de Cañas',
      pt: 'Mosteiro de Santa María de San Salvador de Cañas',
      eu: 'Santa María de San Salvador de Cañasko Monasterioa',
      ca: 'Monestir de Santa María de San Salvador de Cañas',
      ko: '산타 마리아 데 산 살바도르 데 카냐스 수도원'
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
    'hero.over':  { es: 'La Rioja · España · Cister',  en: 'La Rioja · Spain · Cistercian', fr: 'La Rioja · Espagne · Cistercien', de: 'La Rioja · Spanien · Zisterzienser', it: 'La Rioja · Spagna · Cistercense', pt: 'La Rioja · Espanha · Cisterciense', eu: 'La Rioja · Espainia · Zistertziar', ca: 'La Rioja · Espanya · Cistercenc', ko: '라 리오하 · 스페인 · 시토회' },
    'hero.line1': { es: 'Un lugar',    en: 'A majestic',  fr: 'Un lieu',      de: 'Ein majestätischer', it: 'Un luogo',  pt: 'Um lugar',          eu: 'Leku',          ca: 'Un lloc',      ko: '장엄한' },
    'hero.line2': { es: 'majestuoso',  en: 'place',       fr: 'majestueux',   de: 'Ort',                it: 'maestoso', pt: 'majestoso',         eu: 'maiestatsua',   ca: 'majestuós',    ko: '장소' },
    'hero.sub':   { es: 'El Monasterio de la Luz', en: 'The Monastery of Light', fr: 'Le Monastère de la Lumière', de: 'Das Kloster des Lichts', it: 'Il Monastero della Luce', pt: 'O Mosteiro da Luz', eu: 'Argiaren Monasterioa', ca: 'El Monestir de la Llum', ko: '빛의 수도원' },
    'hero.hours': {
      es: '10:30 – 14:00 h · 16:00 – 19:30 h',
      en: '10:30 am – 2:00 pm · 4:00 – 7:30 pm',
      fr: '10 h 30 – 14 h 00 · 16 h 00 – 19 h 30',
      de: '10:30 – 14:00 Uhr · 16:00 – 19:30 Uhr',
      it: '10:30 – 14:00 · 16:00 – 19:30',
      pt: '10:30 – 14:00 · 16:00 – 19:30',
      eu: '10:30 – 14:00 · 16:00 – 19:30',
      ca: '10:30 – 14:00 · 16:00 – 19:30',
      ko: '10:30 – 14:00 · 16:00 – 19:30'
    },
    'btn.rates': { es: 'Ver tarifas',          en: 'View admission',      fr: 'Voir les tarifs',         de: 'Preise ansehen',       it: 'Vedi le tariffe',    pt: 'Ver tarifas',          eu: 'Tarifak ikusi',       ca: 'Veure tarifes',       ko: '입장료 보기' },
    'btn.abbey': { es: 'Conocer la abadía',    en: 'Explore the abbey',   fr: 'Découvrir l\'abbaye',     de: 'Die Abtei erkunden',   it: 'Scopri l\'abbazia', pt: 'Conhecer a abadia',    eu: 'Abadiaz gehiago jakin', ca: 'Conèixer l\'abadia', ko: '수도원 알아보기' },

    /* ---- DATA STRIP ---- */
    'strip.open': { es: 'Abierto todos los días', en: 'Open every day', fr: 'Ouvert tous les jours', de: 'Täglich geöffnet', it: 'Aperto tutti i giorni', pt: 'Aberto todos os dias', eu: 'Egunero irekita', ca: 'Obert tots els dies', ko: '매일 개방' },

    /* ---- VIDEO ---- */
    'vid.over':   { es: 'Bienvenidos',              en: 'Welcome',           fr: 'Bienvenue',               de: 'Willkommen',                    it: 'Benvenuti',           pt: 'Bem-vindos',          eu: 'Ongi etorri',         ca: 'Benvinguts',          ko: '환영합니다' },
    'vid.title':  { es: 'Descubre el Monasterio',   en: 'Discover the Monastery', fr: 'Découvrez le Monastère', de: 'Entdecken Sie das Kloster',  it: 'Scopri il Monastero', pt: 'Descubra o Mosteiro', eu: 'Aurkitu Monasterioa', ca: 'Descobreix el Monestir', ko: '수도원을 발견하세요' },
    'vid.desc':   {
      es: 'Un viaje a través de siglos de historia, espiritualidad y arte en el corazón de La Rioja',
      en: 'A journey through centuries of history, spirituality and art in the heart of La Rioja',
      fr: 'Un voyage à travers des siècles d\'histoire, de spiritualité et d\'art au cœur de La Rioja',
      de: 'Eine Reise durch Jahrhunderte der Geschichte, Spiritualität und Kunst im Herzen von La Rioja',
      it: 'Un viaggio attraverso secoli di storia, spiritualità e arte nel cuore della Rioja',
      pt: 'Uma viagem através de séculos de história, espiritualidade e arte no coração da Rioja',
      eu: 'Riojako bihotzean historia, espiritualtasun eta artearen mendeetako bidaia bat',
      ca: 'Un viatge a través de segles d\'història, espiritualitat i art al cor de La Rioja',
      ko: '라 리오하의 중심에서 수세기의 역사, 영성, 예술을 여행하다'
    },
    'vid.caption': {
      es: 'Monasterio de Santa María de San Salvador de Cañas',
      en: 'Monastery of Santa María de San Salvador de Cañas',
      fr: 'Monastère de Santa María de San Salvador de Cañas',
      de: 'Kloster Santa María de San Salvador de Cañas',
      it: 'Monastero di Santa María de San Salvador de Cañas',
      pt: 'Mosteiro de Santa María de San Salvador de Cañas',
      eu: 'Santa María de San Salvador de Cañasko Monasterioa',
      ca: 'Monestir de Santa María de San Salvador de Cañas',
      ko: '산타 마리아 데 산 살바도르 데 카냐스 수도원'
    },

    /* ---- WHY ---- */
    'why.over':   { es: 'El Monasterio',        en: 'The Monastery',      fr: 'Le Monastère',           de: 'Das Kloster',        it: 'Il Monastero',  pt: 'O Mosteiro',   eu: 'Monasterioa',       ca: 'El Monestir',         ko: '수도원' },
    'why.title':  { es: '¿Por qué visitarnos?', en: 'Why visit us?',      fr: 'Pourquoi nous rendre visite ?', de: 'Warum uns besuchen?', it: 'Perché visitarci?', pt: 'Por que nos visitar?', eu: 'Zergatik bisitatu?', ca: 'Per què visitar-nos?', ko: '왜 방문해야 할까요?' },
    'why.desc':   {
      es: 'Un lugar único donde el patrimonio medieval, la espiritualidad y la belleza natural de La Rioja se dan la mano.',
      en: 'A unique place where medieval heritage, spirituality and the natural beauty of La Rioja come together.',
      fr: 'Un lieu unique où le patrimoine médiéval, la spiritualité et la beauté naturelle de La Rioja se rejoignent.',
      de: 'Ein einzigartiger Ort, an dem mittelalterliches Erbe, Spiritualität und die natürliche Schönheit von La Rioja zusammenkommen.',
      it: 'Un luogo unico dove il patrimonio medievale, la spiritualità e la bellezza naturale della Rioja si incontrano.',
      pt: 'Um lugar único onde o património medieval, a espiritualidade e a beleza natural da Rioja se encontram.',
      eu: 'Leku bakarra, non Erdi Aroko ondarea, espiritualtasuna eta Riojako natura-edertasuna bat egiten diren.',
      ca: 'Un lloc únic on el patrimoni medieval, l\'espiritualitat i la bellesa natural de La Rioja es donen la mà.',
      ko: '중세 유산, 영성, 라 리오하의 자연 아름다움이 만나는 특별한 장소.'
    },
    'why.c1.title': { es: 'Patrimonio del siglo XII', en: '12th-century Heritage', fr: 'Patrimoine du XIIe siècle', de: 'Erbe aus dem 12. Jahrhundert', it: 'Patrimonio del XII secolo', pt: 'Património do século XII', eu: 'XII. mendeko ondarea', ca: 'Patrimoni del segle XII', ko: '12세기 문화유산' },
    'why.c1.desc':  {
      es: 'Contempla una de las iglesias góticas más auténticas de La Rioja, con su retablo renacentista considerado uno de los mejores de la región.',
      en: 'Marvel at one of the most authentic Gothic churches in La Rioja, with its Renaissance altarpiece considered one of the finest in the region.',
      fr: 'Admirez l\'une des églises gothiques les plus authentiques de La Rioja, avec son retable Renaissance considéré comme l\'un des plus beaux de la région.',
      de: 'Bewundern Sie eine der authentischsten gotischen Kirchen in La Rioja mit ihrem Renaissanceretabel, das als eines der schönsten der Region gilt.',
      it: 'Ammira una delle chiese gotiche più autentiche della Rioja, con il suo altare rinascimentale considerato uno dei migliori della regione.',
      pt: 'Contemple uma das igrejas góticas mais autênticas da Rioja, com o seu retábulo renascentista considerado um dos melhores da região.',
      eu: 'Riojako eliza gotiko autentikoenenetako bat ikusi, bere errenazimentuko erretaula eskualdeko onenetakoa dela uste dena.',
      ca: 'Contempla una de les esglésies gòtiques més autèntiques de La Rioja, amb el seu retaule renaixentista considerat un dels millors de la regió.',
      ko: '라 리오하에서 가장 정통 고딕 교회 중 하나를 감상하세요. 이 지역 최고의 르네상스 제단화가 있습니다.'
    },
    'why.c2.title': { es: 'Monasterio vivo',    en: 'A living monastery',  fr: 'Un monastère vivant',    de: 'Ein lebendiges Kloster', it: 'Monastero vivo',  pt: 'Mosteiro vivo',  eu: 'Biziko monasterioa',   ca: 'Monestir viu',        ko: '살아있는 수도원' },
    'why.c2.desc':  {
      es: 'Una comunidad de monjas cistercienses habita el monasterio desde el siglo XII, manteniendo viva la tradición benedictina en pleno siglo XXI.',
      en: 'A community of Cistercian nuns has inhabited the monastery since the 12th century, keeping the Benedictine tradition alive in the 21st century.',
      fr: 'Une communauté de moniales cisterciennes habite le monastère depuis le XIIe siècle, maintenant vivante la tradition bénédictine au XXIe siècle.',
      de: 'Eine Gemeinschaft zisterziensischer Nonnen bewohnt das Kloster seit dem 12. Jahrhundert und hält die benediktinische Tradition im 21. Jahrhundert lebendig.',
      it: 'Una comunità di monache cistercensi abita il monastero dal XII secolo, mantenendo viva la tradizione benedettina nel XXI secolo.',
      pt: 'Uma comunidade de freiras cistercienses habita o mosteiro desde o século XII, mantendo viva a tradição beneditina no século XXI.',
      eu: 'Monja zisterziarren komunitate batek XII. mendetik bizi du monasterioa, benediktar tradizioa XXI. mendean bizirik mantenduz.',
      ca: 'Una comunitat de monges cistercenques habita el monestir des del segle XII, mantenint viva la tradició benedictina en ple segle XXI.',
      ko: '시토회 수녀 공동체가 12세기부터 수도원에 거주하며 21세기에도 베네딕토 전통을 이어가고 있습니다.'
    },
    'why.c3.title': { es: 'Tesoros únicos',     en: 'Unique treasures',    fr: 'Trésors uniques',        de: 'Einzigartige Schätze', it: 'Tesori unici',   pt: 'Tesouros únicos', eu: 'Altxor bakarrak',      ca: 'Tresors únics',       ko: '유일한 보물' },
    'why.c3.desc':  {
      es: 'Visita la Sala de Reliquias, la Cilla‑Museo y el Claustro cisterciense; espacios que guardan siglos de historia y devoción.',
      en: 'Visit the Relic Room, the Cilla‑Museum and the Cistercian Cloister — spaces that hold centuries of history and devotion.',
      fr: 'Visitez la Salle des Reliques, la Cilla-Musée et le Cloître cistercien — des espaces qui renferment des siècles d\'histoire et de dévotion.',
      de: 'Besuchen Sie den Reliquiensaal, das Cilla-Museum und den Zisterzienserkreuzgang — Räume, die Jahrhunderte der Geschichte und Hingabe beherbergen.',
      it: 'Visita la Sala delle Reliquie, la Cilla‑Museo e il Chiostro cistercense — spazi che custodiscono secoli di storia e devozione.',
      pt: 'Visite a Sala das Relíquias, a Cilla‑Museu e o Claustro cisterciense — espaços que guardam séculos de história e devoção.',
      eu: 'Bisitatu Erlikiategien Aretoa, Cilla‑Museoa eta Klaustroa — historia eta deboziozko mendeak gordetzen dituzten guneak.',
      ca: 'Visita la Sala de les Relíquies, la Cilla‑Museu i el Claustre cistercenc — espais que guarden segles d\'història i devoció.',
      ko: '유물실, 시야-박물관, 시토회 회랑을 방문하세요 — 수세기의 역사와 신앙이 깃든 공간.'
    },
    'why.c4.title': { es: 'Para todos', en: 'For everyone', fr: 'Pour tous', de: 'Für alle', it: 'Per tutti', pt: 'Para todos', eu: 'Guztientzat', ca: 'Per a tothom', ko: '모두를 위한' },
    'why.c4.desc':  {
      es: 'Tarifas accesibles para individuales, familias y grupos, con visitas guiadas y no guiadas adaptadas a cada tipo de visitante.',
      en: 'Affordable tickets for individuals, families and groups, with guided and self-guided tours adapted to every visitor.',
      fr: 'Des tarifs accessibles pour les individuels, les familles et les groupes, avec des visites guidées et non guidées adaptées à chaque visiteur.',
      de: 'Erschwingliche Eintritte für Einzelpersonen, Familien und Gruppen, mit geführten und selbst geführten Touren für jeden Besucher.',
      it: 'Tariffe accessibili per individuali, famiglie e gruppi, con visite guidate e non guidate adattate a ogni tipo di visitatore.',
      pt: 'Tarifas acessíveis para individuais, famílias e grupos, com visitas guiadas e não guiadas adaptadas a cada tipo de visitante.',
      eu: 'Prezio eskuragarriak banakoentzat, familientzat eta taldeentzat, bisitari mota bakoitzera egokitutako bisita gidatuak eta gidatu gabeak.',
      ca: 'Tarifes assequibles per a individuals, famílies i grups, amb visites guiades i no guiades adaptades a cada tipus de visitant.',
      ko: '개인, 가족, 단체를 위한 합리적인 요금으로 각 방문객 유형에 맞는 가이드 및 자유 투어를 제공합니다.'
    },

    /* ---- RATES PREVIEW (home) ---- */
    'rp.over':   { es: 'Acceso',           en: 'Admission',         fr: 'Accès',               de: 'Eintritt',          it: 'Accesso',           pt: 'Acesso',           eu: 'Sarrera',           ca: 'Accés',             ko: '입장' },
    'rp.title':  { es: 'Tarifas de visita',en: 'Visit Admission',   fr: 'Tarifs de visite',    de: 'Besuchspreise',     it: 'Tariffe di visita', pt: 'Tarifas de visita', eu: 'Bisita-tarifak',    ca: 'Tarifes de visita', ko: '방문 요금' },
    'rp.desc':   {
      es: 'Precios asequibles para todos. Elige la modalidad que mejor se adapte a tu visita.',
      en: 'Affordable prices for everyone. Choose the option that best suits your visit.',
      fr: 'Des prix accessibles pour tous. Choisissez l\'option qui convient le mieux à votre visite.',
      de: 'Erschwingliche Preise für alle. Wählen Sie die Option, die am besten zu Ihrem Besuch passt.',
      it: 'Prezzi accessibili per tutti. Scegli la modalità più adatta alla tua visita.',
      pt: 'Preços acessíveis para todos. Escolha a modalidade que melhor se adapta à sua visita.',
      eu: 'Prezio eskuragarriak guztientzat. Aukeratu zure bisitarako egokiena den modua.',
      ca: 'Preus assequibles per a tothom. Tria la modalitat que millor s\'adapti a la teva visita.',
      ko: '모두를 위한 합리적인 가격. 방문에 가장 적합한 옵션을 선택하세요.'
    },
    'rp.cta.text': {
      es: 'Desde <strong>4€</strong> por persona — acceso a la iglesia gótica del siglo XII, el claustro, la Sala Capitular, la sala de reliquias y más. Un patrimonio único en La Rioja al alcance de todos.',
      en: 'From <strong>€4</strong> per person — access to the 12th-century Gothic church, the cloister, the Chapter House, the relics room and more. A unique heritage site in La Rioja, accessible to all.',
      fr: 'À partir de <strong>4 €</strong> par personne — accès à l\'église gothique du XIIe siècle, le cloître, la salle capitulaire, la salle des reliques et plus. Un patrimoine unique en La Rioja accessible à tous.',
      de: 'Ab <strong>4 €</strong> pro Person — Zugang zur gotischen Kirche aus dem 12. Jahrhundert, dem Kreuzgang, dem Kapitelsaal, dem Reliquiensaal und mehr. Ein einzigartiges Kulturerbe in La Rioja, für alle zugänglich.',
      it: 'Da <strong>4€</strong> a persona — accesso alla chiesa gotica del XII secolo, il chiostro, la Sala Capitolare, la sala delle reliquie e altro. Un patrimonio unico nella Rioja alla portata di tutti.',
      pt: 'A partir de <strong>4€</strong> por pessoa — acesso à igreja gótica do século XII, o claustro, a Sala Capitular, a sala das relíquias e mais. Um património único na Rioja ao alcance de todos.',
      eu: '<strong>4€</strong>tik aurrera pertsonako — XII. mendeko eliza gotikoa, klaustroa, Kapituluaren Aretoa, erlikiategien aretoa eta gehiagora sarrera. Ondare bakarra Rioja guztiontzat.',
      ca: 'Des de <strong>4€</strong> per persona — accés a l\'església gòtica del segle XII, el claustre, la Sala Capitular, la sala de les relíquies i més. Un patrimoni únic a La Rioja a l\'abast de tothom.',
      ko: '1인당 <strong>4€</strong>부터 — 12세기 고딕 교회, 회랑, 참사회실, 유물실 등 입장. 라 리오하의 독특한 유산을 모두가 누릴 수 있습니다.'
    },
    'rp.btn': { es: 'Ver todas las tarifas', en: 'View all admission prices', fr: 'Voir tous les tarifs', de: 'Alle Preise ansehen', it: 'Vedi tutte le tariffe', pt: 'Ver todas as tarifas', eu: 'Tarifa guztiak ikusi', ca: 'Veure totes les tarifes', ko: '전체 요금 보기' },

    /* ---- RESERVAS (home CTA) ---- */
    'res.over':  { es: 'Reservas',           en: 'Bookings',          fr: 'Réservations',        de: 'Buchungen',          it: 'Prenotazioni',        pt: 'Reservas',            eu: 'Erreserbak',          ca: 'Reserves',            ko: '예약' },
    'res.title': { es: 'Reserva tu visita',  en: 'Book your visit',   fr: 'Réservez votre visite', de: 'Ihren Besuch buchen', it: 'Prenota la tua visita', pt: 'Reserve a sua visita', eu: 'Erreserbatu zure bisita', ca: 'Reserva la teva visita', ko: '방문 예약하기' },
    'res.desc':  {
      es: 'Ocho siglos de historia te esperan. Asegura tu plaza y vive una experiencia única en el corazón de La Rioja — antes de que se agoten las entradas.',
      en: 'Eight centuries of history await you. Secure your place and enjoy a unique experience in the heart of La Rioja — before tickets sell out.',
      fr: 'Huit siècles d\'histoire vous attendent. Réservez votre place et vivez une expérience unique au cœur de La Rioja — avant que les billets ne soient épuisés.',
      de: 'Acht Jahrhunderte Geschichte warten auf Sie. Sichern Sie sich Ihren Platz und erleben Sie ein einzigartiges Erlebnis im Herzen von La Rioja — bevor die Tickets ausverkauft sind.',
      it: 'Otto secoli di storia ti aspettano. Assicura il tuo posto e vivi un\'esperienza unica nel cuore della Rioja — prima che i biglietti si esauriscano.',
      pt: 'Oito séculos de história esperam por si. Garanta o seu lugar e viva uma experiência única no coração da Rioja — antes que os bilhetes se esgotem.',
      eu: 'Zortzi mendeko historia zain dago. Ziurtatu zure lekua eta bizi esperientzia bakarra Riojaren bihotzean — sarrerak agortu aurretik.',
      ca: 'Vuit segles d\'història t\'esperen. Assegura el teu lloc i viu una experiència única al cor de La Rioja — abans que s\'esgotin les entrades.',
      ko: '8세기의 역사가 여러분을 기다립니다. 자리를 확보하고 라 리오하의 중심에서 특별한 경험을 즐기세요 — 티켓이 매진되기 전에.'
    },
    'res.btn': { es: 'Reservar entradas', en: 'Book tickets', fr: 'Réserver des billets', de: 'Tickets buchen', it: 'Prenota i biglietti', pt: 'Reservar bilhetes', eu: 'Sarrerak erreserbatu', ca: 'Reservar entrades', ko: '티켓 예약' },

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
    'ab.intro.over': { es: 'Historia', en: 'History', fr: 'Histoire', de: 'Geschichte', it: 'Storia', pt: 'História', eu: 'Historia', ca: 'Història', ko: '역사' },
    'ab.intro.h2':   {
      es: 'Un lugar de fe y arte desde el siglo XII',
      en: 'A place of faith and art since the 12th century',
      fr: 'Un lieu de foi et d\'art depuis le XIIe siècle',
      de: 'Ein Ort des Glaubens und der Kunst seit dem 12. Jahrhundert',
      it: 'Un luogo di fede e arte dal XII secolo',
      pt: 'Um lugar de fé e arte desde o século XII',
      eu: 'XII. mendetik fede eta artearen lekua',
      ca: 'Un lloc de fe i art des del segle XII',
      ko: '12세기부터 이어진 신앙과 예술의 공간'
    },
    'ab.intro.p1': {
      es: 'El Monasterio de Santa María de San Salvador de Cañas fue fundado en el siglo XII. Es un conjunto monástico cisterciense habitado por una comunidad de monjas que mantiene viva la tradición benedictina hasta nuestros días.',
      en: 'The Monastery of Santa María de San Salvador de Cañas was founded in the 12th century. It is a Cistercian monastic complex inhabited by a community of nuns who keep the Benedictine tradition alive to this day.',
      fr: 'Le Monastère de Santa María de San Salvador de Cañas a été fondé au XIIe siècle. C\'est un ensemble monastique cistercien habité par une communauté de sœurs qui maintient vivante la tradition bénédictine jusqu\'à nos jours.',
      de: 'Das Kloster Santa María de San Salvador de Cañas wurde im 12. Jahrhundert gegründet. Es ist ein zisterziensischer Klosterkomplex, der von einer Gemeinschaft von Nonnen bewohnt wird, die die benediktinische Tradition bis heute lebendig hält.',
      it: 'Il Monastero di Santa María de San Salvador de Cañas fu fondato nel XII secolo. È un complesso monastico cistercense abitato da una comunità di monache che mantiene viva la tradizione benedettina fino ai giorni nostri.',
      pt: 'O Mosteiro de Santa María de San Salvador de Cañas foi fundado no século XII. Trata-se de um conjunto monástico cisterciense habitado por uma comunidade de monjas que mantém viva a tradição beneditina até aos dias de hoje.',
      eu: 'Cañaseko Santa María de San Salvador monasterioa XII. mendean sortu zen. Zistertar ordenako monastegi multzoa da, eta monja komunitate batek bizi du, gaur egunera arte beneditar tradizioa bizirik mantenduz.',
      ca: 'El Monestir de Santa María de San Salvador de Cañas va ser fundat al segle XII. És un conjunt monàstic cistercenc habitat per una comunitat de monges que manté viva la tradició benedictina fins als nostres dies.',
      ko: '카냐스의 산타 마리아 데 산 살바도르 수도원은 12세기에 설립되었습니다. 이곳은 시토회 수도 공동체로, 오늘날까지 베네딕토 전통을 이어가는 수녀 공동체가 거주하고 있습니다.'
    },
    'ab.intro.p2': {
      es: 'El conjunto arquitectónico reúne varios espacios de singular valor patrimonial: una iglesia gótica del siglo XIII, un claustro de austeridad cisterciense, la sala capitular, una extraordinaria sala de reliquias y la cilla‑museo con una colección de arte sacro de primer orden.',
      en: 'The architectural complex brings together several spaces of singular heritage value: a 13th-century Gothic church, a cloister of Cistercian austerity, the chapter house, an extraordinary relic room and the Cilla‑Museum housing a first-class collection of sacred art.',
      fr: 'L\'ensemble architectural réunit plusieurs espaces d\'une valeur patrimoniale singulière : une église gothique du XIIIe siècle, un cloître d\'austérité cistercienne, la salle capitulaire, une extraordinaire salle des reliques et la Cilla-Musée abritant une collection de premier ordre d\'art sacré.',
      de: 'Das architektonische Ensemble vereint mehrere Räume von einzigartiger kultureller Bedeutung: eine gotische Kirche aus dem 13. Jahrhundert, einen Kreuzgang von zisterziensischer Schlichtheit, den Kapitelsaal, einen außergewöhnlichen Reliquiensaal und das Cilla-Museum mit einer erstklassigen Sammlung sakraler Kunst.',
      it: 'Il complesso architettonico riunisce diversi spazi di grande valore patrimoniale: una chiesa gotica del XIII secolo, un chiostro di austera semplicità cistercense, la sala capitolare, una straordinaria sala delle reliquie e la cilla‑museo con una collezione di arte sacra di prim\'ordine.',
      pt: 'O conjunto arquitetónico reúne vários espaços de grande valor patrimonial: uma igreja gótica do século XIII, um claustro de austeridade cisterciense, a sala capitular, uma extraordinária sala de relíquias e a cilla‑museu com uma coleção de arte sacra de primeira ordem.',
      eu: 'Multzo arkitektonikoak ondare-balio handiko hainbat espazio biltzen ditu: XIII. mendeko eliza gotikoa, zistertar estiloko klaustro soila, kapitulu-aretoa, erlikiak gordetzeko areto bikaina eta cilla‑museoa, lehen mailako arte sakratuaren bildumarekin.',
      ca: 'El conjunt arquitectònic reuneix diversos espais de gran valor patrimonial: una església gòtica del segle XIII, un claustre d\'austeritat cistercenca, la sala capitular, una extraordinària sala de relíquies i la cilla‑museu amb una col·lecció d\'art sacre de primer ordre.',
      ko: '이 건축 단지는 뛰어난 문화유산적 가치를 지닌 여러 공간으로 이루어져 있습니다: 13세기의 고딕 양식 성당, 시토회 특유의 소박한 회랑, 회의실(챕터 하우스), 특별한 성유물 전시실, 그리고 수준 높은 성미술 컬렉션을 보유한 창고‑박물관입니다.'
    },
    'ab.intro.p3': {
      es: 'Declarado Bien de Interés Cultural, el monasterio forma parte del paisaje histórico y espiritual de La Rioja, siendo un destino imprescindible para quienes buscan belleza, silencio e historia.',
      en: 'Listed as a Property of Cultural Interest, the monastery is part of the historical and spiritual landscape of La Rioja, making it an unmissable destination for those seeking beauty, silence and history.',
      fr: 'Classé Bien d\'Intérêt Culturel, le monastère fait partie du paysage historique et spirituel de La Rioja, et constitue une destination incontournable pour ceux qui recherchent beauté, silence et histoire.',
      de: 'Als Kulturgut von nationalem Interesse eingestuft, ist das Kloster Teil der historischen und spirituellen Landschaft von La Rioja — ein unverzichtbares Ziel für alle, die Schönheit, Stille und Geschichte suchen.',
      it: 'Dichiarato Bene di Interesse Culturale, il monastero fa parte del paesaggio storico e spirituale della Rioja ed è una meta imprescindibile per chi cerca bellezza, silenzio e storia.',
      pt: 'Declarado Bem de Interesse Cultural, o mosteiro faz parte da paisagem histórica e espiritual da Rioja, sendo um destino imprescindível para quem procura beleza, silêncio e história.',
      eu: 'Kultura Intereseko Ondasun izendatua, monasterioa Errioxako paisaia historiko eta espiritualaren parte da, eta helmuga ezinbestekoa da edertasuna, isiltasuna eta historia bilatzen dutenentzat.',
      ca: 'Declarat Bé d\'Interès Cultural, el monestir forma part del paisatge històric i espiritual de La Rioja, i és una destinació imprescindible per a qui busca bellesa, silenci i història.',
      ko: '문화재로 지정된 이 수도원은 라 리오하 지역의 역사적·영적 풍경의 일부로, 아름다움과 고요함, 그리고 역사를 찾는 이들에게 꼭 방문해야 할 장소입니다.'
    },
    'ab.intro.btn': { es: 'Planificar la visita', en: 'Plan your visit', fr: 'Planifier la visite', de: 'Besuch planen', it: 'Pianifica la visita', pt: 'Planear a visita', eu: 'Bisita planifikatu', ca: 'Planifica la visita', ko: '방문 계획하기' },

    'ab.s1.tag':   { es: 'Románico · s. XII',  en: 'Romanesque · 12th c.', fr: 'Roman · XIIe s.',     de: 'Romanisch · 12. Jh.', it: 'Romanico · sec. XII', pt: 'Românico · séc. XII', eu: 'Erromanikoa · XII. mendea', ca: 'Romànic · s. XII', ko: '로마네스크 · 12세기' },
    'ab.s1.title': { es: 'La Iglesia',          en: 'The Church',           fr: 'L\'Église',           de: 'Die Kirche',          it: 'La Chiesa',           pt: 'A Igreja',           eu: 'Eliza',                    ca: 'L\'Església',     ko: '성당' },
    'ab.s1.p1': {
      es: 'El templo actual mide treinta metros de largo y nueve de ancho en el crucero. La cabecera tiene tres ábsides, con el central de mayor tamaño y los laterales en semicírculo.',
      en: 'The current church is thirty metres long and nine metres wide at the transept. The apse has three sections, with the central one being larger and the lateral ones semicircular.',
      fr: 'L\'édifice actuel mesure trente mètres de long et neuf mètres de large au transept. Le chevet comporte trois absides, la centrale plus grande et les latérales en demi-cercle.',
      de: 'Die heutige Kirche ist dreißig Meter lang und neun Meter breit im Querschiff. Der Chor hat drei Apsiden, wobei die mittlere größer und die seitlichen halbkreisförmig sind.',
      it: 'Il tempio attuale misura trenta metri di lunghezza e nove di larghezza nel transetto. La testata presenta tre absidi, con quella centrale di dimensioni maggiori e le laterali a semicerchio.',
      pt: 'O templo atual mede trinta metros de comprimento e nove de largura no transepto. A cabeceira possui três absides, sendo o central de maiores dimensões e os laterais em semicírculo.',
      eu: 'Egungo tenpluak hogeita hamar metroko luzera eta bederatzi metroko zabalera ditu gurutzaduran. Burualdeak hiru abside ditu, erdikoa handiagoa eta albokoak erdi-zirkularrak.',
      ca: 'El temple actual fa trenta metres de llarg i nou d\'ample al creuer. La capçalera té tres absis, amb el central de major dimensió i els laterals en semicercle.',
      ko: '현재의 성당은 길이 30미터, 트란셉트(십자형 교차부)의 너비는 9미터입니다. 제대 뒤쪽에는 세 개의 후진(앱스)이 있으며, 중앙이 가장 크고 양쪽은 반원형입니다.'
    },
    'ab.s1.p2': {
      es: 'La nave central se prolonga para alojar el coro de las monjas, mientras que la nave de la epístola se aboveda y se extiende hasta la portería. En el lado norte, la tercera nave se interrumpe en el crucero, donde se abre una puerta que comunica con el cementerio del monasterio, conocido como la <em>"puerta de los difuntos"</em>.',
      en: 'The central nave extends to house the nuns\' choir, while the epistle nave is vaulted and extends to the gatehouse. On the north side, the third nave ends at the transept, where a door opens to the monastery cemetery, known as the <em>"gate of the departed"</em>.',
      fr: 'La nef centrale se prolonge pour accueillir le chœur des sœurs, tandis que la nef de l\'épître est voûtée et s\'étend jusqu\'au portail. Du côté nord, la troisième nef s\'interrompt au transept, où s\'ouvre une porte donnant accès au cimetière du monastère, connue sous le nom de <em>« porte des défunts »</em>.',
      de: 'Das Hauptschiff verlängert sich, um den Nonnenchor aufzunehmen, während das Epistolschiff gewölbt ist und sich bis zum Torhaus erstreckt. Auf der Nordseite endet das dritte Schiff am Querschiff, wo eine Tür zum Klosterfriedhof führt, bekannt als <em>„Tor der Verstorbenen"</em>.',
      it: 'La navata centrale si prolunga per accogliere il coro delle monache, mentre la navata dell\'epistola è coperta da volte e si estende fino alla portineria. Sul lato nord, la terza navata si interrompe nel transetto, dove si apre una porta che comunica con il cimitero del monastero, nota come <em>"porta dei defunti"</em>.',
      pt: 'A nave central prolonga-se para acolher o coro das monjas, enquanto a nave da epístola é abobadada e se estende até à portaria. No lado norte, a terceira nave interrompe-se no transepto, onde se abre uma porta que comunica com o cemitério do mosteiro, conhecida como <em>"porta dos defuntos"</em>.',
      eu: 'Nabe nagusia luzatu egiten da monjen korua hartzeko; epistolaren aldeko nabea ganga bidez estalita dago eta atariraino hedatzen da. Iparraldean, hirugarren nabea gurutzaduran eten egiten da, eta han monasterioko hilerriarekin lotzen duen ate bat irekitzen da, <em>"hildakoen atea"</em> izenekoa.',
      ca: 'La nau central s\'allarga per acollir el cor de les monges, mentre que la nau de l\'epístola està coberta amb volta i s\'estén fins a la porteria. Al costat nord, la tercera nau s\'interromp al creuer, on s\'obre una porta que comunica amb el cementiri del monestir, coneguda com la <em>"porta dels difunts"</em>.',
      ko: '중앙 신랑은 수녀들의 성가대를 수용하기 위해 연장되어 있으며, 서간서 측 신랑은 아치형 천장으로 덮여 입구 공간까지 이어집니다. 북쪽에서는 세 번째 신랑이 트란셉트에서 끝나며, 그곳에는 수도원 묘지로 연결되는 문이 있는데 <em>"죽은 이들의 문"</em>으로 불립니다.'
    },
    'ab.s1.p3': {
      es: 'La iglesia conserva un mobiliario modesto, con un "Cristo crucificado" gótico del siglo XIV y una talla de madera policromada de "Nuestra Señora de Cañas" del siglo XIII. En el coro, se encuentra el retablo, la sillería y un fascistol, destacando la reubicación del retablo que permitió una mayor iluminación de la nave.',
      en: 'The church retains modest furnishings, including a 14th-century Gothic "Crucified Christ" and a 13th-century polychrome wooden carving of "Our Lady of Cañas". The choir holds the altarpiece, the stalls and a lectern, and the relocation of the altarpiece allowed greater light to flood the central nave.',
      fr: 'L\'église conserve un mobilier modeste, avec un « Christ crucifié » gothique du XIVe siècle et une sculpture en bois polychrome de « Notre-Dame de Cañas » du XIIIe siècle. Le chœur abrite le retable, les stalles et un lutrin, et le déplacement du retable a permis une plus grande luminosité dans la nef centrale.',
      de: 'Die Kirche bewahrt eine bescheidene Einrichtung mit einem gotischen „Gekreuzigten Christus" aus dem 14. Jahrhundert und einer polychromen Holzschnitzerei „Unsere Liebe Frau von Cañas" aus dem 13. Jahrhundert. Der Chor beherbergt den Altar, die Chorstühle und ein Pult; die Umsetzung des Altarretabels ermöglichte mehr Licht im Hauptschiff.',
      it: 'La chiesa conserva un arredo modesto, con un Cristo crocifisso gotico del XIV secolo e una scultura lignea policroma della Madonna di Cañas del XIII secolo. Nel coro si trovano la pala d\'altare, gli stalli e un leggio, tra cui spicca la ricollocazione della pala che ha permesso una maggiore illuminazione della navata.',
      pt: 'A igreja conserva um mobiliário modesto, com um Cristo crucificado gótico do século XIV e uma escultura em madeira policromada de Nossa Senhora de Cañas do século XIII. No coro encontram-se o retábulo, a estalagem (cadeiral) e um facistol, destacando-se a relocalização do retábulo que permitiu uma melhor iluminação da nave.',
      eu: 'Elizak altzari xumeak gordetzen ditu: XIV. mendeko Kristoren gurutze-irudia eta XIII. mendeko Cañaseko Andre Mariaren egur polikromatutako irudia. Koruaren barruan erretaula, eserlekuak eta irakurgai-mahaia daude, eta erretaularen kokapen berriak argiztapen handiagoa ahalbidetu du.',
      ca: 'L\'església conserva un mobiliari modest, amb un Crist crucificat gòtic del segle XIV i una talla de fusta policromada de la Mare de Déu de Cañas del segle XIII. Al cor hi ha el retaule, la cadira coral i un faristol, destacant la reubicació del retaule que ha permès una millor il·luminació de la nau.',
      ko: '성당 내부는 비교적 소박한 장식을 유지하고 있으며, 14세기 고딕 양식의 십자가상과 13세기 채색 목조 성모상인 "카냐스의 성모"가 보존되어 있습니다. 성가대 공간에는 제단화, 좌석, 대형 독서대가 있으며, 제단화의 위치를 옮긴 덕분에 내부 채광이 개선되었습니다.'
    },
    'ab.s1.p4': {
      es: 'La sillería del coro, con 26 asientos, data del siglo XVIII y fue restaurada a finales del siglo XX. En la nave central hay siete laudas sepulcrales de abadesas fallecidas en el siglo XVII.',
      en: 'The choir stalls, with 26 seats, date from the 18th century and were restored at the end of the 20th century. The central nave contains seven funerary slabs of abbesses who died in the 17th century.',
      fr: 'Les stalles du chœur, avec 26 sièges, datent du XVIIIe siècle et ont été restaurées à la fin du XXe siècle. La nef centrale abrite sept dalles funéraires d\'abbesses décédées au XVIIe siècle.',
      de: 'Das Chorgestühl mit 26 Sitzen stammt aus dem 18. Jahrhundert und wurde Ende des 20. Jahrhunderts restauriert. Das Hauptschiff enthält sieben Grabplatten von Äbtissinnen, die im 17. Jahrhundert verstorben sind.',
      it: 'Gli stalli del coro, con 26 sedili, risalgono al XVIII secolo e sono stati restaurati alla fine del XX secolo. Nella navata centrale si trovano sette lastre sepolcrali di badesse del XVII secolo.',
      pt: 'O cadeiral do coro, com 26 lugares, data do século XVIII e foi restaurado no final do século XX. Na nave central encontram-se sete lajes sepulcrais de abadessas do século XVII.',
      eu: 'Koruaren eserlekuak, 26 guztira, XVIII. mendekoak dira eta XX. mendearen amaieran zaharberritu ziren. Nabe nagusian XVII. mendeko abadesen zazpi hilobi-losa daude.',
      ca: 'La cadira del cor, amb 26 seients, data del segle XVIII i va ser restaurada a finals del segle XX. A la nau central hi ha set lloses sepulcrals d\'abadesses del segle XVII.',
      ko: '성가대 좌석은 총 26석으로 18세기에 제작되었으며 20세기 말에 복원되었습니다. 중앙 신랑에는 17세기 수녀원장들의 묘비 7기가 놓여 있습니다.'
    },

    'ab.s2.tag':   { es: 'Renacimiento',     en: 'Renaissance',           fr: 'Renaissance',           de: 'Renaissance',          it: 'Rinascimento',       pt: 'Renascimento',       eu: 'Errenazimentua',    ca: 'Renaixement',       ko: '르네상스' },
    'ab.s2.title': { es: 'El Retablo Mayor', en: 'The High Altarpiece',   fr: 'Le Retable Majeur',     de: 'Der Hochaltar',        it: 'La Pala d\'altare Maggiore', pt: 'O Retábulo-Mor', eu: 'Erretaula Nagusia', ca: 'El Retaule Major',  ko: '주 제단화' },
    'ab.s2.p1': {
      es: 'El Retablo Mayor es la obra más destacada de la iglesia y una referencia del arte renacentista en La Rioja. Fue encargado a principios del siglo XVI por la abadesa Leonor de Osorio y realizado por Guillen de Holanda, Andrés de Melgar y Alonso Gallego. En 1975 se trasladó desde el ábside al pie del templo, donde hoy se presenta como tríptico que combina escultura y pintura en torno a la vida de la Virgen.',
      en: 'The High Altarpiece is the most remarkable work in the church and a benchmark of Renaissance art in La Rioja. Commissioned in the early 16th century by Abbess Leonor de Osorio, it was crafted by Guillen de Holanda, Andrés de Melgar, and Alonso Gallego. In 1975 it was moved from the apse to the foot of the church, where it now stands as a triptych blending sculpture and painting around the life of the Virgin.',
      fr: 'Le Retable Majeur est l\'œuvre la plus remarquable de l\'église et une référence de l\'art Renaissance en La Rioja. Commandé au début du XVIe siècle par l\'abbesse Leonor de Osorio, il fut réalisé par Guillen de Holanda, Andrés de Melgar et Alonso Gallego. En 1975, il fut déplacé de l\'abside au pied du temple, où il se présente aujourd\'hui comme un triptyque combinant sculpture et peinture autour de la vie de la Vierge.',
      de: 'Der Hochaltar ist das bedeutendste Werk der Kirche und ein Referenzpunkt der Renaissancekunst in La Rioja. Im frühen 16. Jahrhundert von Äbtissin Leonor de Osorio in Auftrag gegeben, wurde er von Guillen de Holanda, Andrés de Melgar und Alonso Gallego geschaffen. 1975 wurde er von der Apsis ans Ende der Kirche verlegt, wo er heute als Triptychon präsentiert wird, das Skulptur und Malerei rund um das Leben der Jungfrau verbindet.',
      it: 'La Pala d\'altare Maggiore è l\'opera più importante della chiesa e un riferimento dell\'arte rinascimentale nella Rioja. Fu commissionata all\'inizio del XVI secolo dall\'abbadessa Leonor de Osorio e realizzata da Guillén de Holanda, Andrés de Melgar e Alonso Gallego. Nel 1975 fu trasferita dall\'abside ai piedi del tempio, dove oggi si presenta come un trittico che combina scultura e pittura attorno alla vita della Vergine.',
      pt: 'O Retábulo-Mor é a obra mais destacada da igreja e uma referência da arte renascentista na Rioja. Foi encomendado no início do século XVI pela abadessa Leonor de Osorio e realizado por Guillén de Holanda, Andrés de Melgar e Alonso Gallego. Em 1975 foi transferido da abside para os pés do templo, onde hoje se apresenta como um tríptico que combina escultura e pintura em torno da vida da Virgem.',
      eu: 'Erretaula Nagusia elizako lanik nabarmenena da eta Errioxako arte errenazentistaren erreferentea. XVI. mendearen hasieran Leonor de Osorio abadesak enkargatu zuen, eta Guillén de Holanda, Andrés de Melgar eta Alonso Gallegok egin zuten. 1975ean absideatik tenpluaren oinetara eraman zen, eta gaur egun triptiko moduan aurkezten da, Ama Birjinaren bizitzaren inguruan eskultura eta pintura uztartuz.',
      ca: 'El Retaule Major és l\'obra més destacada de l\'església i una referència de l\'art renaixentista a La Rioja. Va ser encarregat a inicis del segle XVI per l\'abadessa Leonor de Osorio i realitzat per Guillén de Holanda, Andrés de Melgar i Alonso Gallego. L\'any 1975 es va traslladar de l\'absis als peus del temple, on avui es presenta com un tríptic que combina escultura i pintura al voltant de la vida de la Mare de Déu.',
      ko: '주 제단화는 이 성당에서 가장 중요한 작품이자 라 리오하 지역 르네상스 미술의 대표적인 예입니다. 16세기 초 레오노르 데 오소리오 수녀원장의 의뢰로 제작되었으며, 기옌 데 올란다, 안드레스 데 멜가르, 알론소 가예고가 제작에 참여했습니다. 1975년에 제단 뒤편에서 성당 입구 쪽으로 옮겨졌으며, 현재는 성모 마리아의 생애를 중심으로 조각과 회화를 결합한 삼면 제단화 형태로 전시되어 있습니다.'
    },
    'ab.s2.p2': {
      es: 'Su estructura se organiza en siete calles y tres pisos con un ático superior. En el centro figura la Virgen entre San Benito y San Bernardo, acompañada por escenas como la Adoración de los Reyes, la Asunción y el Calvario. Los relieves del banco ilustran episodios bíblicos, mientras las tablas laterales muestran santos y pasajes como la Anunciación, la Visitación y la Huida a Egipto.',
      en: 'Its composition unfolds in seven vertical panels and three tiers topped by an attic. At the center is the Virgin between Saints Benedict and Bernard, surrounded by scenes such as the Adoration of the Magi, the Assumption, and the Calvary. The base reliefs depict key biblical episodes, while the side panels portray saints and moments like the Annunciation, the Visitation, and the Flight into Egypt.',
      fr: 'Sa structure s\'organise en sept travées et trois niveaux avec un attique supérieur. Au centre figure la Vierge entre saint Benoît et saint Bernard, accompagnée de scènes telles que l\'Adoration des Mages, l\'Assomption et le Calvaire. Les reliefs du socle illustrent des épisodes bibliques, tandis que les panneaux latéraux montrent des saints et des scènes comme l\'Annonciation, la Visitation et la Fuite en Égypte.',
      de: 'Seine Struktur gliedert sich in sieben senkrechte Felder und drei Etagen mit einem Dachgeschoss. In der Mitte befindet sich die Jungfrau zwischen dem heiligen Benedikt und dem heiligen Bernhard, begleitet von Szenen wie der Anbetung der Könige, der Himmelfahrt und dem Kalvarienberg. Die Reliefs am Sockel zeigen biblische Episoden, während die seitlichen Tafeln Heilige und Szenen wie die Verkündigung, die Heimsuchung und die Flucht nach Ägypten darstellen.',
      it: 'La sua struttura è organizzata in sette scomparti e tre registri con un attico superiore. Al centro si trova la Vergine tra San Benedetto e San Bernardo, accompagnata da scene come l\'Adorazione dei Magi, l\'Assunzione e il Calvario. I rilievi del basamento illustrano episodi biblici, mentre le tavole laterali mostrano santi e passaggi come l\'Annunciazione, la Visitazione e la Fuga in Egitto.',
      pt: 'A sua estrutura organiza-se em sete ruas e três andares com um ático superior. No centro figura a Virgem entre São Bento e São Bernardo, acompanhada por cenas como a Adoração dos Reis Magos, a Assunção e o Calvário. Os relevos da base ilustram episódios bíblicos, enquanto as tábuas laterais mostram santos e passagens como a Anunciação, a Visitação e a Fuga para o Egito.',
      eu: 'Bere egitura zazpi kaletan eta hiru solairutan antolatuta dago, goiko atiko batekin. Erdian Ama Birjina ageri da San Benito eta San Bernardoren artean, Erregeen Gurtza, Jasokundea eta Kalbarioa bezalako eszenekin batera. Oinarriko erliebeek pasarte biblikoak irudikatzen dituzte, eta alboko taulek santuak eta eszenak erakusten dituzte, hala nola Iragarpena, Ikustaldia eta Egiptora Ihesa.',
      ca: 'La seva estructura s\'organitza en set carrers i tres pisos amb un àtic superior. Al centre hi figura la Mare de Déu entre Sant Benet i Sant Bernat, acompanyada d\'escenes com l\'Adoració dels Reis, l\'Assumpció i el Calvari. Els relleus del banc il·lustren episodis bíblics, mentre que les taules laterals mostren sants i passatges com l\'Anunciació, la Visitació i la Fugida a Egipte.',
      ko: '구조는 일곱 개의 구획과 세 개의 층, 그리고 상부 장식으로 이루어져 있습니다. 중앙에는 성 베네딕토와 성 베르나르도 사이에 성모가 자리하고 있으며, 동방박사의 경배, 성모 승천, 갈바리오 장면 등이 함께 표현되어 있습니다. 하단 부조에는 성경 장면들이 묘사되어 있고, 측면 패널에는 성인들과 수태고지, 방문, 이집트로의 피난 등의 장면이 그려져 있습니다.'
    },
    'ab.s2.p3': {
      es: 'El conjunto culmina con el ático, donde aparecen la Piedad y la Santísima Trinidad bajo la fórmula medieval en la que el Padre sostiene la cruz y la paloma simboliza al Espíritu Santo sobre Cristo. Este retablo constituye un testimonio excepcional de la devoción y la maestría artística de su tiempo.',
      en: 'The upper section concludes with the Pietà and the Holy Trinity, following the medieval depiction where the Eternal Father holds the cross and a dove represents the Holy Spirit above Christ\'s head. This altarpiece stands as a magnificent example of faith and artistry from its era.',
      fr: 'L\'ensemble culmine avec l\'attique, où apparaissent la Pietà et la Sainte Trinité, selon la formule médiévale dans laquelle le Père tient la croix et la colombe symbolise l\'Esprit Saint au-dessus du Christ. Ce retable constitue un témoignage exceptionnel de la dévotion et de la maîtrise artistique de son époque.',
      de: 'Der obere Teil schließt mit der Pietà und der Heiligen Dreifaltigkeit, nach der mittelalterlichen Darstellung, in der der ewige Vater das Kreuz hält und eine Taube den Heiligen Geist über Christus symbolisiert. Dieses Altarretabel ist ein herausragendes Beispiel für Glaube und Kunstfertigkeit seiner Zeit.',
      it: 'L\'insieme culmina con l\'attico, dove compaiono la Pietà e la Santissima Trinità secondo la formula medievale in cui il Padre sostiene la croce e la colomba simboleggia lo Spirito Santo sopra Cristo. Questo retablo costituisce una testimonianza eccezionale della devozione e della maestria artistica del suo tempo.',
      pt: 'O conjunto culmina com o ático, onde aparecem a Pietà e a Santíssima Trindade segundo a fórmula medieval em que o Pai sustenta a cruz e a pomba simboliza o Espírito Santo sobre Cristo. Este retábulo constitui um testemunho excecional da devoção e da mestria artística do seu tempo.',
      eu: 'Multzoa atikoan amaitzen da, non Pietatea eta Hirutasun Santua agertzen diren, Erdi Aroko formularekin: Aitak gurutzea eusten du eta usoak Espiritu Santua sinbolizatzen du Kristoren gainean. Erretaula honek bere garaiko debozioaren eta arte maisutasunaren lekukotasun aparta eskaintzen du.',
      ca: 'El conjunt culmina amb l\'àtic, on apareixen la Pietat i la Santíssima Trinitat segons la fórmula medieval en què el Pare sosté la creu i el colom simbolitza l\'Esperit Sant sobre Crist. Aquest retaule constitueix un testimoni excepcional de la devoció i la mestria artística del seu temps.',
      ko: '상부 장식에는 피에타와 삼위일체가 표현되어 있으며, 성부가 십자가를 들고 있고 비둘기가 성령을 상징하는 중세적 도상이 나타납니다. 이 제단화는 당시의 신앙심과 예술적 완성도를 보여주는 뛰어난 작품입니다.'
    },

    'ab.s3.tag':   { es: 'Arquitectura Cisterciense', en: 'Cistercian Architecture', fr: 'Architecture Cistercienne', de: 'Zisterziensische Architektur', it: 'Architettura cistercense', pt: 'Arquitetura Cisterciense', eu: 'Arkitektura zistertarra', ca: 'Arquitectura Cistercenca', ko: '시토회 건축' },
    'ab.s3.title': { es: 'El Claustro',               en: 'The Cloister',            fr: 'Le Cloître',               de: 'Der Kreuzgang',              it: 'Il Chiostro',            pt: 'O Claustro',             eu: 'Klaustroa',               ca: 'El Claustre',           ko: '회랑' },
    'ab.s3.p1': {
      es: 'El claustro del monasterio es un valioso testimonio de su evolución arquitectónica entre los siglos XII y XVIII, iniciada bajo la dirección de la beata Urraca Díaz de Haro. Su edificación, marcada por la diversidad de materiales y estilos, refleja las distintas etapas constructivas y los recursos disponibles a lo largo del tiempo, combinando muros románicos, portadas góticas y arquerías de medio punto.',
      en: 'The monastery\'s cloister is a remarkable record of architectural evolution from the 12th to the 18th century, begun under Blessed Urraca Díaz de Haro. Its construction, shaped by diverse materials and artistic styles, reflects changing economic circumstances and patronage, combining Romanesque walls, Gothic portals, and semicircular arcades.',
      fr: 'Le cloître du monastère est un précieux témoignage de son évolution architecturale entre les XIIe et XVIIIe siècles, commencée sous la direction de la bienheureuse Urraca Díaz de Haro. Sa construction, marquée par la diversité des matériaux et des styles, reflète les différentes étapes constructives et les ressources disponibles au fil du temps, combinant des murs romans, des portails gothiques et des arcades en plein cintre.',
      de: 'Der Kreuzgang des Klosters ist ein wertvolles Zeugnis seiner architektonischen Entwicklung vom 12. bis zum 18. Jahrhundert, die unter der Leitung der seligen Urraca Díaz de Haro begann. Sein Bau, geprägt durch die Vielfalt der Materialien und Stile, spiegelt die verschiedenen Bauphasen und die im Laufe der Zeit verfügbaren Ressourcen wider, mit romanischen Mauern, gotischen Portalen und Rundbogenarkaden.',
      it: 'Il chiostro del monastero è una preziosa testimonianza della sua evoluzione architettonica tra il XII e il XVIII secolo, iniziata sotto la direzione della beata Urraca Díaz de Haro. La sua costruzione, segnata dalla varietà di materiali e stili, riflette le diverse fasi costruttive e le risorse disponibili nel tempo, combinando muri romanici, portali gotici e arcate a tutto sesto.',
      pt: 'O claustro do mosteiro é um valioso testemunho da sua evolução arquitetónica entre os séculos XII e XVIII, iniciada sob a direção da beata Urraca Díaz de Haro. A sua construção, marcada pela diversidade de materiais e estilos, reflete as diferentes fases construtivas e os recursos disponíveis ao longo do tempo, combinando muros românicos, portais góticos e arcadas de volta perfeita.',
      eu: 'Monasterioko klaustroa XII. eta XVIII. mendeen arteko bere bilakaera arkitektonikoaren lekukotasun baliotsua da, Urraca Díaz de Haro dohatsuaren gidaritzapean hasia. Eraikuntza, material eta estiloen aniztasunak markatua, denboran zehar izandako fase desberdinak eta erabilitako baliabideak islatzen ditu, horma erromanikoak, portada gotikoak eta erdi-puntuko arkuak uztartuz.',
      ca: 'El claustre del monestir és un valuós testimoni de la seva evolució arquitectònica entre els segles XII i XVIII, iniciada sota la direcció de la beata Urraca Díaz de Haro. La seva construcció, marcada per la diversitat de materials i estils, reflecteix les diferents etapes constructives i els recursos disponibles al llarg del temps, combinant murs romànics, portals gòtics i arcades de mig punt.',
      ko: '이 수도원의 회랑은 12세기부터 18세기까지 이어진 건축적 발전을 보여주는 중요한 유산으로, 복자 우라카 디아스 데 아로의 지도 아래 시작되었습니다. 다양한 재료와 양식이 결합된 이 건축은 시대별 건축 단계와 가용 자원을 반영하며, 로마네스크 양식의 벽, 고딕 양식의 출입구, 반원형 아치를 조화롭게 결합하고 있습니다.'
    },
    'ab.s3.p2': {
      es: 'Los distintos tramos muestran desde sillares finamente labrados hasta fábricas más sencillas, con ladrillos en la planta superior que transforman los arcos originales en vanos cuadrangulares. Destaca el pavimento de la galería, parcialmente conservado, con un singular diseño de motivos radiales en piedra. Entre sus portadas sobresale la de la sala capitular, con tres arcos apuntados y dos ventanales, ejemplo notable del gótico monástico riojano.',
      en: 'The various sections display finely carved ashlar alongside rougher masonry, with upper-level brickwork enclosing original arches to form square openings. The gallery floor, partly preserved, features unique radial stone patterns. Among the most notable elements is the Chapter House portal on the east wing, with three pointed arches and two windows representing monastic Gothic architecture at its finest.',
      fr: 'Les différentes sections présentent des pierres de taille finement sculptées côtoyant des maçonneries plus simples, avec des briques à l\'étage supérieur qui transforment les arcs originaux en ouvertures rectangulaires. Le pavement de la galerie, partiellement conservé, présente un singulier dessin à motifs radiaux en pierre. Parmi les portails, celui de la salle capitulaire se distingue, avec trois arcs brisés et deux baies, exemple notable du gothique monastique riojano.',
      de: 'Die verschiedenen Abschnitte zeigen fein behauene Quader neben einfacherer Mauerwerk, mit Ziegelsteinen im Obergeschoss, die die ursprünglichen Bögen in rechteckige Öffnungen verwandeln. Der teilweise erhaltene Galeriebelag weist ein einzigartiges Muster aus radialen Steinmotiven auf. Unter den Portalen sticht das der Sakristei hervor, mit drei Spitzbögen und zwei Fenstern — ein bemerkenswertes Beispiel der monastischen Gotik von La Rioja.',
      it: 'I diversi tratti mostrano dai conci finemente lavorati a strutture più semplici, con mattoni nel piano superiore che trasformano gli archi originali in aperture quadrangolari. Spicca la pavimentazione della galleria, parzialmente conservata, con un singolare disegno di motivi radiali in pietra. Tra i portali si distingue quello della sala capitolare, con tre archi ogivali e due finestre, notevole esempio del gotico monastico della Rioja.',
      pt: 'Os diferentes trechos mostram desde silhares finamente trabalhados até construções mais simples, com tijolos no piso superior que transformam os arcos originais em vãos quadrangulares. Destaca-se o pavimento da galeria, parcialmente conservado, com um singular desenho de motivos radiais em pedra. Entre os portais sobressai o da sala capitular, com três arcos ogivais e duas janelas, exemplo notável do gótico monástico da Rioja.',
      eu: 'Zati desberdinek harlandu fin landuetatik egitura xumeagoetara bitartekoak erakusten dituzte, goiko solairuan adreiluak erabiliz jatorrizko arkuak bao laukizuzen bihurtuz. Nabarmena da galerian partzialki kontserbatutako zoladura, harrizko motibo erradialen diseinu bereziarekin. Portaden artean kapitulu-aretokoa nabarmentzen da, hiru arku zorrotz eta bi leihoekin, Errioxako gotiko monastikoaren adibide bikaina.',
      ca: 'Els diferents trams mostren des de carreus finament treballats fins a estructures més senzilles, amb maons a la planta superior que transformen els arcs originals en obertures quadrangulars. Destaca el paviment de la galeria, parcialment conservat, amb un singular disseny de motius radials en pedra. Entre els portals sobresurt el de la sala capitular, amb tres arcs apuntats i dues finestres, exemple notable del gòtic monàstic de La Rioja.',
      ko: '각 구간은 정교하게 다듬어진 석재부터 보다 단순한 구조까지 다양한 모습을 보여주며, 상층부에서는 벽돌을 사용해 원래의 아치 구조를 사각형 개구부로 변화시켰습니다. 특히 일부만 남아 있는 회랑 바닥은 방사형 석재 문양으로 이루어진 독특한 디자인이 돋보입니다. 출입구 가운데에서는 세 개의 첨두 아치와 두 개의 창을 갖춘 챕터 하우스 입구가 눈에 띄며, 라 리오하 지역 고딕 수도원 건축의 훌륭한 사례입니다.'
    },
    'ab.s3.p3': {
      es: 'En los demás lados del claustro se abren accesos a la iglesia, la sacristía, el refectorio y otras dependencias, con capiteles ornamentados que incluyen figuras humanas y motivos vegetales. El ala oeste, antigua cilla y hoy museo, conserva una puerta central cegada durante siglos, testimonio de la prolongada historia constructiva del conjunto.',
      en: 'Other wings connect to the church, sacristy, refectory, and service rooms, adorned with capitals of vegetal motifs and human figures. The west wing, once the cellar and now a museum, retains a long-sealed central doorway — a silent witness to the cloister\'s layered architectural history.',
      fr: 'Les autres côtés du cloître donnent accès à l\'église, la sacristie, le réfectoire et d\'autres dépendances, avec des chapiteaux ornés de figures humaines et de motifs végétaux. L\'aile ouest, ancienne grange et aujourd\'hui musée, conserve une porte centrale murée pendant des siècles, témoignage de la longue histoire constructive de l\'ensemble.',
      de: 'Die anderen Seiten des Kreuzgangs führen zur Kirche, Sakristei, dem Refektorium und anderen Nebengebäuden, mit verzierten Kapitellen mit menschlichen Figuren und pflanzlichen Motiven. Der Westflügel, einst die Scheune und heute ein Museum, bewahrt ein seit Jahrhunderten vermauertes zentrales Tor — ein stiller Zeuge der vielschichtigen Baugeschichte des Kreuzgangs.',
      it: 'Sugli altri lati del chiostro si aprono accessi alla chiesa, alla sacrestia, al refettorio e ad altri ambienti, con capitelli decorati con figure umane e motivi vegetali. L\'ala ovest, antica cilla e oggi museo, conserva una porta centrale murata per secoli, testimonianza della lunga storia costruttiva del complesso.',
      pt: 'Nos restantes lados do claustro abrem-se acessos à igreja, à sacristia, ao refeitório e a outras dependências, com capitéis decorados com figuras humanas e motivos vegetais. A ala oeste, antiga cilla e hoje museu, conserva uma porta central entaipada durante séculos, testemunho da longa história construtiva do conjunto.',
      eu: 'Klaustroaren beste aldeetan elizara, sakristiara, jangelara eta bestelako guneetara sarbideak irekitzen dira, giza irudiak eta landare-motiboak dituzten kapitel apainduekin. Mendebaldeko hegala, antzinako cilla eta gaur egungo museoa, mendeetan itxita egon den erdiko ate bat gordetzen du, multzoaren eraikuntza-historia luzearen lekuko.',
      ca: 'Als altres costats del claustre s\'obren accessos a l\'església, la sagristia, el refetor i altres dependències, amb capitells decorats amb figures humanes i motius vegetals. L\'ala oest, antiga cilla i avui museu, conserva una porta central tapiada durant segles, testimoni de la llarga història constructiva del conjunt.',
      ko: '회랑의 다른 측면에는 성당, 성물 보관실, 식당 및 기타 공간으로 이어지는 출입구들이 있으며, 기둥머리에는 인간 형상과 식물 문양이 장식되어 있습니다. 서쪽 구역은 옛 창고(cilla)였으며 현재는 박물관으로 사용되고 있고, 수 세기 동안 막혀 있던 중앙 출입구를 보존하고 있어 이 건축 복합체의 오랜 역사적 과정을 보여줍니다.'
    },

    'ab.s4.tag':   { es: 'Vida Comunitaria',  en: 'Community Life',   fr: 'Vie Communautaire', de: 'Gemeinschaftsleben', it: 'Vita comunitaria',    pt: 'Vida comunitária',    eu: 'Bizitza komunitarioa', ca: 'Vida comunitària',    ko: '공동체 생활' },
    'ab.s4.title': { es: 'Sala Capitular',    en: 'Chapter House',    fr: 'Salle Capitulaire', de: 'Kapitelsaal',        it: 'Sala capitolare',    pt: 'Sala Capitular',      eu: 'Kapitulu-aretoa',      ca: 'Sala Capitular',      ko: '챕터 하우스(회의실)' },
    'ab.s4.p1': {
      es: 'Construida en la segunda mitad del siglo XIII, se sitúa junto al claustro y servía para las reuniones de la comunidad. También se convirtió en panteón, acogiendo el sarcófago de la beata Urraca Díaz de Haro y las laudas de cuatro abadesas. Su fachada, con una portada y dos ventanales apuntados decorados con motivos vegetales, destaca por una curiosa figura esculpida, el "eterno borracho", una cabeza humana invertida en el pórtico.',
      en: 'Built in the second half of the 13th century, stands beside the cloister and was used for community meetings. It later became a pantheon, housing the sarcophagus of Blessed Urraca Díaz de Haro and the tomb slabs of four abbesses. Its façade features a pointed-arch doorway and twin windows with ornate vegetal carvings, and includes a curious sculpture known as the "eternal drunkard"—a reversed human head set into the portico.',
      fr: 'Construite dans la seconde moitié du XIIIe siècle, elle se situe à côté du cloître et servait pour les réunions de la communauté. Elle est également devenue un panthéon, accueillant le sarcophage de la bienheureuse Urraca Díaz de Haro et les dalles de quatre abbesses. Sa façade, avec un portail et deux baies gothiques décorées de motifs végétaux, se distingue par une curieuse figure sculptée, « l\'éternel ivrogne », une tête humaine inversée dans le porche.',
      de: 'Er wurde in der zweiten Hälfte des 13. Jahrhunderts erbaut, liegt neben dem Kreuzgang und diente den Versammlungen der Gemeinschaft. Er wurde auch zum Pantheon mit dem Sarkophag der seligen Urraca Díaz de Haro und den Grabplatten von vier Äbtissinnen. Seine Fassade mit einem Spitzbogenportal und zwei mit Pflanzenmotiven verzierten Fenstern zeichnet sich durch eine kuriose Skulptur aus, den „ewigen Trinker" — ein umgekehrter Menschenkopf im Vorhof.',
      it: 'Costruita nella seconda metà del XIII secolo, si trova accanto al chiostro e serviva per le riunioni della comunità. Divenne anche un pantheon, accogliendo il sarcofago della beata Urraca Díaz de Haro e le lastre sepolcrali di quattro badesse. La sua facciata, con un portale e due ventanali ogivali decorati con motivi vegetali, si distingue per una curiosa figura scolpita, l\'"eterno ubriaco", una testa umana capovolta nel portico.',
      pt: 'Construída na segunda metade do século XIII, situa-se junto ao claustro e servia para as reuniões da comunidade. Tornou-se também um panteão, acolhendo o sarcófago da beata Urraca Díaz de Haro e as lajes sepulcrais de quatro abadessas. A sua fachada, com um portal e duas janelas ogivais decoradas com motivos vegetais, destaca-se por uma curiosa figura esculpida, o "eterno bêbado", uma cabeça humana invertida no pórtico.',
      eu: 'XIII. mendearen bigarren erdian eraikia, klaustroaren ondoan kokatzen da eta komunitatearen bilerak egiteko erabiltzen zen. Panteoi ere bihurtu zen, Urraca Díaz de Haro dohatsuaren sarkofagoa eta lau abadesaren hilobi-lauzak hartuz. Bere fatxada, portada batekin eta landare-motiboekin apaindutako bi leiho zorrotzekin, bereziki nabarmentzen da "betiko mozkorra" izeneko eskultura bitxiagatik, arkupean alderantzizko giza buru bat.',
      ca: 'Construïda a la segona meitat del segle XIII, se situa al costat del claustre i servia per a les reunions de la comunitat. També es va convertir en panteó, acollint el sarcòfag de la beata Urraca Díaz de Haro i les lloses sepulcrals de quatre abadesses. La seva façana, amb un portal i dues finestres apuntades decorades amb motius vegetals, destaca per una curiosa figura esculpida, l\'"etern borratxo", un cap humà invertit al pòrtic.',
      ko: '이 공간은 13세기 후반에 건설되었으며, 회랑 옆에 위치해 공동체 회의를 위해 사용되었습니다. 또한 판테온의 역할을 하며, 복자 우라카 디아스 데 아로의 석관과 네 명의 수녀원장의 묘비를 보관하고 있습니다. 외관은 식물 문양으로 장식된 출입구와 두 개의 첨두 창으로 구성되어 있으며, 현관에는 거꾸로 된 인간 머리 형상의 "영원한 술꾼"이라는 독특한 조각상이 특징입니다.'
    },
    'ab.s4.p2': {
      es: 'El interior se compone de cuatro bóvedas sostenidas por una columna central y columnillas adosadas, cuyo diseño simboliza la Santísima Trinidad mediante tres elementos que convergen en el eje central. Esta estructura refuerza la espiritualidad del recinto y su función de unión comunitaria. La decoración vegetal domina el conjunto, aportando armonía y significado simbólico al espacio monástico.',
      en: 'Inside, four vaults rest upon a central column and attached shafts, symbolizing the Holy Trinity through three converging architectural elements. This design emphasizes the spiritual unity of the monastic community, while vegetal decoration enriches the solemn atmosphere of the space.',
      fr: 'L\'intérieur se compose de quatre voûtes soutenues par une colonne centrale et des colonnettes adossées, dont le design symbolise la Sainte Trinité par trois éléments convergeant vers l\'axe central. Cette structure renforce la spiritualité du lieu et sa fonction d\'union communautaire. La décoration végétale domine l\'ensemble, apportant harmonie et signification symbolique à l\'espace monastique.',
      de: 'Das Innere besteht aus vier Gewölben, die von einer Mittelsäule und angesetzten Säulchen getragen werden, deren Gestaltung die Heilige Dreifaltigkeit durch drei zum Mittelpunkt konvergierende Elemente symbolisiert. Diese Struktur betont die Spiritualität des Raumes und seine Funktion der gemeinschaftlichen Einheit. Die Pflanzendekoration dominiert das Ensemble und verleiht dem monastischen Raum Harmonie und symbolische Bedeutung.',
      it: 'L\'interno è composto da quattro volte sostenute da una colonna centrale e da colonnine addossate, il cui disegno simboleggia la Santissima Trinità mediante tre elementi che convergono nell\'asse centrale. Questa struttura rafforza la spiritualità dello spazio e la sua funzione di unione comunitaria. La decorazione vegetale domina l\'insieme, apportando armonia e significato simbolico all\'ambiente monastico.',
      pt: 'O interior é composto por quatro abóbadas sustentadas por uma coluna central e colunas adossadas, cujo desenho simboliza a Santíssima Trindade através de três elementos que convergem no eixo central. Esta estrutura reforça a espiritualidade do espaço e a sua função de união comunitária. A decoração vegetal domina o conjunto, conferindo harmonia e significado simbólico ao ambiente monástico.',
      eu: 'Barrualdea lau gangaz osatua dago, zutabe zentral batek eta hormari atxikitako zutabetxoek eutsita. Diseinuak Hirutasun Santua sinbolizatzen du, erdiko ardatzean bat egiten duten hiru elementuren bidez. Egitura honek espazioaren espiritualtasuna eta batasun komunitarioaren funtzioa indartzen ditu. Landare-dekorazioa nagusi da, harmonia eta esanahi sinbolikoa emanez ingurune monastikoari.',
      ca: 'L\'interior es compon de quatre voltes sostingudes per una columna central i columnetes adossades, el disseny de les quals simbolitza la Santíssima Trinitat mitjançant tres elements que convergeixen a l\'eix central. Aquesta estructura reforça l\'espiritualitat de l\'espai i la seva funció d\'unió comunitària. La decoració vegetal domina el conjunt, aportant harmonia i significat simbòlic a l\'espai monàstic.',
      ko: '내부는 중앙 기둥과 벽에 붙은 기둥들이 지탱하는 네 개의 볼트 구조로 이루어져 있습니다. 이 구조는 세 요소가 중심 축에서 만나는 형태로 삼위일체를 상징하며, 공간의 영성과 공동체적 의미를 강조합니다. 전체적으로 식물 장식이 지배적이며, 수도원 공간에 조화와 상징성을 부여합니다.'
    },
    'ab.s4.p3': {
      es: 'El sarcófago de la beata, pieza excepcional realizada entre los siglos XIII y XIV, se apoya sobre ménsulas con figuras animales y muestra en su tapa a Urraca con sus atributos abaciales, flanqueada por ángeles y novicias. En la caja se narran episodios de su vida y su elevación al cielo con veintiséis personajes. Su cuerpo incorrupto, verificado en varias ocasiones, se acompaña de las laudas de las abadesas, reafirmando su papel central en la historia espiritual del monasterio.',
      en: 'The sarcophagus of the Blessed Urraca Díaz de Haro, crafted between the 13th and 14th centuries, rests on brackets carved with animals. Its lid depicts Urraca with her abbatial insignia, flanked by angels and novices, while the chest recounts scenes from her life and ascent to heaven through twenty-six human figures. Her incorrupt body, confirmed several times, is flanked by the tomb slabs of four abbesses—an enduring testament to her revered legacy within the monastery.',
      fr: 'Le sarcophage de la bienheureuse, pièce exceptionnelle réalisée entre les XIIIe et XIVe siècles, repose sur des corbeaux avec des figures animales et montre sur son couvercle Urraca avec ses attributs abbatiaux, flanquée d\'anges et de novices. Sur le coffre sont narrés des épisodes de sa vie et son élévation au ciel avec vingt-six personnages. Son corps incorruptible, vérifié à plusieurs reprises, est accompagné des dalles des abbesses, réaffirmant son rôle central dans l\'histoire spirituelle du monastère.',
      de: 'Der Sarkophag der Seligen, ein außergewöhnliches Werk aus dem 13. bis 14. Jahrhundert, ruht auf Konsolen mit Tierfiguren und zeigt auf seinem Deckel Urraca mit ihren Äbtissinneninsignien, flankiert von Engeln und Novizinnen. Auf dem Kasten werden Episoden ihres Lebens und ihrer Himmelfahrt mit 26 Figuren erzählt. Ihr unverweslicher Körper, mehrfach bestätigt, wird von den Grabplatten der Äbtissinnen begleitet und bekräftigt ihre zentrale Rolle in der spirituellen Geschichte des Klosters.',
      it: 'Il sarcofago della beata, pezzo eccezionale realizzato tra il XIII e il XIV secolo, poggia su mensole con figure animali e presenta sulla copertura Urraca con i suoi attributi abbaziali, affiancata da angeli e novizie. Sulla cassa si narrano episodi della sua vita e la sua elevazione al cielo con ventisei personaggi. Il suo corpo incorrotto, verificato in diverse occasioni, è accompagnato dalle lastre delle badesse, riaffermando il suo ruolo centrale nella storia spirituale del monastero.',
      pt: 'O sarcófago da beata, peça excecional realizada entre os séculos XIII e XIV, assenta sobre mísulas com figuras animais e apresenta na tampa Urraca com os seus atributos abaciais, ladeada por anjos e noviças. Na arca narram-se episódios da sua vida e a sua elevação ao céu com vinte e seis personagens. O seu corpo incorrupto, verificado em várias ocasiões, é acompanhado pelas lajes das abadessas, reafirmando o seu papel central na história espiritual do mosteiro.',
      eu: 'Dohatsuaren sarkofagoa, XIII. eta XIV. mendeen artean egindako pieza bikaina, animalia-irudidun mentsulen gainean dago, eta estalkian Urraca ageri da bere atributu abacialekin, aingeruz eta nobiziekin inguratuta. Kutxan bere bizitzako pasarteak eta zerurako igoera irudikatzen dira, hogeita sei pertsonaiarekin. Bere gorputz usteldu gabea, hainbatetan egiaztatua, abadesen hilobi-lauzekin batera ageri da, monasterioaren historia espiritualean izan duen funtsezko rola berretsiz.',
      ca: 'El sarcòfag de la beata, peça excepcional realitzada entre els segles XIII i XIV, es recolza sobre mènsules amb figures animals i mostra a la tapa Urraca amb els seus atributs abacials, flanquejada per àngels i novícies. A la caixa s\'hi narren episodis de la seva vida i la seva elevació al cel amb vint-i-sis personatges. El seu cos incorrupte, verificat en diverses ocasions, es presenta juntament amb les lloses de les abadesses, reafirmant el seu paper central en la història espiritual del monestir.',
      ko: '석관은 13세기에서 14세기 사이에 제작된 뛰어난 작품으로, 동물 형상이 있는 받침 위에 놓여 있습니다. 뚜껑에는 수도원장으로서의 상징을 지닌 우라카가 천사와 수련자들과 함께 표현되어 있으며, 측면에는 그녀의 생애와 천상으로의 승천 장면이 26명의 인물과 함께 묘사되어 있습니다. 여러 차례 확인된 부패하지 않은 그녀의 유해는 다른 수녀원장들의 묘비와 함께 놓여 있으며, 수도원의 영적 역사에서 중심적인 역할을 강조합니다.'
    },

    'ab.s5.tag':   { es: 'Tesoro Espiritual',  en: 'Spiritual Treasury',  fr: 'Trésor Spirituel',   de: 'Geistlicher Schatz', it: 'Tesoro spirituale',   pt: 'Tesouro espiritual',  eu: 'Altxor espirituala',  ca: 'Tresor espiritual',   ko: '영적 보물' },
    'ab.s5.title': { es: 'Sala de Reliquias',  en: 'Relic Room',          fr: 'Salle des Reliques', de: 'Reliquiensaal',      it: 'Sala delle reliquie', pt: 'Sala de Relíquias',   eu: 'Erlikien aretoa',     ca: 'Sala de Relíquies',   ko: '성유물 전시실' },
    'ab.s5.p1': {
      es: 'Las reliquias han sido veneradas desde la Edad Media por su vínculo con los santos y su capacidad para atraer devoción y peregrinos. Con el tiempo, la Iglesia reguló su autenticidad mediante documentos llamados "auténticas", especialmente a partir de la Edad Moderna, para frenar los abusos y el comercio excesivo asociado a este culto.',
      en: 'Relics have been venerated since the Middle Ages for their connection to saints and their power to inspire devotion and attract pilgrims. Over time, the Church regulated their authenticity through documents known as "authentics," especially from the early modern period onward, in order to curb abuses and the excessive trade associated with relic cults.',
      fr: 'Les reliques ont été vénérées depuis le Moyen Âge pour leur lien avec les saints et leur capacité à attirer la dévotion et les pèlerins. Au fil du temps, l\'Église a réglementé leur authenticité par des documents appelés « authentiques », notamment à partir de l\'époque moderne, pour freiner les abus et le commerce excessif associé à ce culte.',
      de: 'Reliquien wurden seit dem Mittelalter wegen ihrer Verbindung zu Heiligen und ihrer Fähigkeit, Andacht und Pilger anzuziehen, verehrt. Im Laufe der Zeit regulierte die Kirche ihre Echtheit durch Dokumente namens „Authentiken", besonders ab der frühen Neuzeit, um Missbrauch und übermäßigen Handel im Zusammenhang mit dem Reliquienkult einzudämmen.',
      it: 'Le reliquie sono state venerate fin dal Medioevo per il loro legame con i santi e per la loro capacità di attrarre devozione e pellegrini. Con il tempo, la Chiesa ne regolò l\'autenticità attraverso documenti chiamati "autentiche", soprattutto a partire dall\'Età Moderna, per frenare gli abusi e il commercio eccessivo legato a questo culto.',
      pt: 'As relíquias foram veneradas desde a Idade Média pelo seu vínculo com os santos e pela sua capacidade de atrair devoção e peregrinos. Com o tempo, a Igreja regulou a sua autenticidade através de documentos chamados "autênticas", sobretudo a partir da Idade Moderna, para travar abusos e o comércio excessivo associado a este culto.',
      eu: 'Erlikiak Erdi Arotik gurtuak izan dira, santuekin duten loturagatik eta debozioa zein erromesak erakartzeko duten gaitasunagatik. Denborarekin, Elizak haien benetakotasuna arautu zuen "autentikak" izeneko agirien bidez, batez ere Aro Modernotik aurrera, kultu horri lotutako gehiegikeriak eta merkataritza kontrolatzeko.',
      ca: 'Les relíquies han estat venerades des de l\'Edat Mitjana pel seu vincle amb els sants i per la seva capacitat d\'atreure devoció i pelegrins. Amb el temps, l\'Església en va regular l\'autenticitat mitjançant documents anomenats "autèntiques", especialment a partir de l\'Edat Moderna, per frenar abusos i el comerç excessiu associat a aquest culte.',
      ko: '성유물은 성인들과의 연결성과 신앙심 및 순례자를 끌어들이는 힘으로 인해 중세 시대부터 숭배되어 왔습니다. 시간이 흐르면서 교회는 "인증 문서"를 통해 그 진위를 규제하게 되었으며, 특히 근세 이후에는 이와 관련된 남용과 과도한 거래를 억제하기 위해 체계화되었습니다.'
    },
    'ab.s5.p2': {
      es: 'El monasterio de Cañas conserva una destacada colección de reliquias organizada en varias etapas históricas, desde la época medieval hasta el siglo XX. Entre las piezas más notables figuran la canilla de Santa Engracia y un hueso de los mártires de Cardeña, ambas con certificado de autenticidad, junto a otras piezas singulares como la reproducción del clavo de la crucifixión o las herraduras atribuidas al caballo del apóstol Santiago.',
      en: 'The Monastery of Cañas preserves an outstanding collection of relics organized into several historical phases, from the medieval period to the 20th century. Among the most notable pieces are the shinbone of Saint Engracia and a bone of the Martyrs of Cardeña, both accompanied by certificates of authenticity, together with singular items such as a reproduction of the nail of the Crucifixion and the horseshoes attributed to the Apostle James\'s horse.',
      fr: 'Le monastère de Cañas conserve une importante collection de reliques organisée en plusieurs étapes historiques, depuis l\'époque médiévale jusqu\'au XXe siècle. Parmi les pièces les plus remarquables figurent la jambe de sainte Engrace et un os des martyrs de Cardeña, tous deux avec certificat d\'authenticité, ainsi que d\'autres pièces singulières comme la reproduction du clou de la crucifixion ou les fers à cheval attribués au cheval de l\'apôtre Jacques.',
      de: 'Das Kloster Cañas bewahrt eine bedeutende Reliquiensammlung, die in mehreren historischen Phasen vom Mittelalter bis zum 20. Jahrhundert organisiert ist. Zu den bemerkenswertesten Stücken gehören das Schienbein der Heiligen Engracia und ein Knochen der Märtyrer von Cardeña, beide mit Echtheitszertifikat, sowie besondere Objekte wie eine Reproduktion des Kreuznagels oder die dem Pferd des Apostels Jakobus zugeschriebenen Hufeisen.',
      it: 'Il monastero di Cañas conserva una notevole collezione di reliquie organizzata in diverse fasi storiche, dal periodo medievale fino al XX secolo. Tra i pezzi più importanti figurano la tibia di Santa Engracia e un osso dei martiri di Cardeña, entrambi con certificato di autenticità, insieme ad altri oggetti singolari come la riproduzione del chiodo della crocifissione o i ferri attribuiti al cavallo dell\'apostolo Santiago.',
      pt: 'O mosteiro de Cañas conserva uma importante coleção de relíquias organizada em várias etapas históricas, desde a época medieval até ao século XX. Entre as peças mais notáveis encontram-se a tíbia de Santa Engrácia e um osso dos mártires de Cardeña, ambos com certificado de autenticidade, juntamente com outros objetos singulares como a reprodução do prego da crucificação ou as ferraduras atribuídas ao cavalo do apóstolo Santiago.',
      eu: 'Cañaseko monasterioak hainbat garai historikotan antolatutako erliki bilduma nabarmena gordetzen du, Erdi Arotik XX. mendera arte. Pieza esanguratsuenen artean daude Santa Engraziaren hezur zati bat eta Cardeñako martirien hezur bat, biak benetakotasun ziurtagiriarekin, baita beste objektu berezi batzuk ere, hala nola gurutziltzaketaren iltzearen erreprodukzioa edo Santiago apostoluaren zaldiari egozten zaizkion ferrak.',
      ca: 'El monestir de Cañas conserva una destacada col·lecció de relíquies organitzada en diverses etapes històriques, des de l\'època medieval fins al segle XX. Entre les peces més notables hi ha la tíbia de Santa Engràcia i un os dels màrtirs de Cardeña, ambdós amb certificat d\'autenticitat, juntament amb altres objectes singulars com la reproducció del clau de la crucifixió o les ferradures atribuïdes al cavall de l\'apòstol Sant Jaume.',
      ko: '카냐스 수도원은 중세부터 20세기에 이르기까지 여러 시대에 걸쳐 형성된 중요한 성유물 컬렉션을 보존하고 있습니다. 대표적인 유물로는 인증서를 갖춘 성 엔그라시아의 다리뼈와 카르데냐 순교자들의 유골 일부가 있으며, 그 밖에도 십자가형에 사용된 못의 복제품이나 사도 야고보의 말에 속한다고 전해지는 말굽과 같은 독특한 유물들이 포함되어 있습니다.'
    },
    'ab.s5.p3': {
      es: 'La sala de reliquias reúne además valiosas obras de arte, como una talla gótica de Santa Ana, la Virgen y el Niño, marfiles hispano-filipinos y una imagen en alabastro de Nuestra Señora del Cister. Este conjunto une valor devocional y artístico, y convierte el espacio en un testimonio excepcional de la historia religiosa y patrimonial del monasterio.',
      en: 'The relics room also displays valuable works of art, including a Gothic polychrome group of Saint Anne, the Virgin, and Child, Hispano-Filipino ivories, and an alabaster image of Our Lady of the Cister. Together, these objects combine devotional significance with artistic value, making the room an exceptional witness to the monastery\'s religious and heritage history.',
      fr: 'La salle des reliques présente également de précieuses œuvres d\'art, comme une sculpture gothique de sainte Anne, la Vierge et l\'Enfant, des ivoires hispano-philippins et une image en albâtre de Notre-Dame du Cîteaux. Cet ensemble unit valeur dévotionnelle et artistique, et fait de l\'espace un témoignage exceptionnel de l\'histoire religieuse et patrimoniale du monastère.',
      de: 'Der Reliquiensaal zeigt auch wertvolle Kunstwerke, darunter eine gotische Polychromgruppe der heiligen Anna, der Jungfrau und des Kindes, hispanisch-philippinische Elfenbeinschnitzereien und ein Alabasterbild Unserer Lieben Frau vom Zisterzienser. Dieses Ensemble verbindet devotionale und künstlerische Bedeutung und macht den Raum zu einem außergewöhnlichen Zeugnis der religiösen und kulturellen Geschichte des Klosters.',
      it: 'La sala delle reliquie riunisce inoltre preziose opere d\'arte, come una scultura gotica di Sant\'Anna con la Vergine e il Bambino, avori ispano-filippini e un\'immagine in alabastro della Madonna del Cister. Questo insieme unisce valore devozionale e artistico, rendendo lo spazio una testimonianza eccezionale della storia religiosa e patrimoniale del monastero.',
      pt: 'A sala de relíquias reúne também valiosas obras de arte, como uma escultura gótica de Santa Ana com a Virgem e o Menino, marfins hispano-filipinos e uma imagem em alabastro de Nossa Senhora do Cister. Este conjunto une valor devocional e artístico, tornando o espaço um testemunho excecional da história religiosa e patrimonial do mosteiro.',
      eu: 'Erlikien aretoak, gainera, arte lan baliotsuak biltzen ditu: Santa Ana, Ama Birjina eta Haurra irudikatzen dituen eskultura gotikoa, hispano-filipinar marfilak eta Cisterreko Andre Mariaren alabastrozko irudia. Multzo honek balio debozionala eta artistikoa uztartzen ditu, eta monasterioaren historia erlijioso eta ondarearen lekukotasun aparta bihurtzen du espazioa.',
      ca: 'La sala de relíquies reuneix també valuoses obres d\'art, com una escultura gòtica de Santa Anna amb la Mare de Déu i el Nen, marfils hispanofilipins i una imatge en alabastre de la Mare de Déu del Cister. Aquest conjunt uneix valor devocional i artístic, convertint l\'espai en un testimoni excepcional de la història religiosa i patrimonial del monestir.',
      ko: '이 전시실에는 또한 귀중한 예술 작품들도 함께 전시되어 있습니다. 성 안나와 성모자(성모 마리아와 아기 예수)를 묘사한 고딕 조각, 히스파노-필리핀 상아 작품들, 그리고 시토회 성모의 알라바스터 조각상이 대표적입니다. 이 공간은 신앙적 가치와 예술적 가치를 결합하여 수도원의 종교적·문화적 유산을 보여주는 뛰어난 사례입니다.'
    },

    'ab.s6.tag':   { es: 'Arte Sacro · Colecciones', en: 'Sacred Art · Collections', fr: 'Art Sacré · Collections', de: 'Sakrale Kunst · Sammlungen', it: 'Arte sacra · Collezioni', pt: 'Arte sacra · Coleções',    eu: 'Arte sakratua · Bildumak', ca: 'Art sacre · Col·leccions', ko: '성미술 · 컬렉션' },
    'ab.s6.title': { es: 'Cilla‑Museo',              en: 'Cilla‑Museum',             fr: 'Cilla-Musée',            de: 'Cilla-Museum',             it: 'Cilla‑Museo',            pt: 'Cilla‑Museu',             eu: 'Cilla‑Museoa',             ca: 'Cilla‑Museu',             ko: '창고-박물관(Cilla-Museo)' },
    'ab.s6.p1': {
      es: 'El museo del monasterio ocupa la antigua cilla y alberga la mayor parte del patrimonio mueble de la abadía. Su colección, organizada desde el siglo XVI y distribuida en cinco grandes temas, reúne obras dedicadas a los santos cistercienses, la infancia de Cristo, la Pasión y la Redención, la Virgen y otros santos. El espacio, accesible desde una portada del siglo XIII, se divide en dos salas conectadas por arcos ojivales.',
      en: 'The monastery museum occupies the former granary and houses most of the abbey\'s movable heritage. Its collection, arranged from the 16th century onward and organized into five main themes, brings together works devoted to Cistercian saints, the early life of Christ, the Passion and Redemption, the Virgin Mary, and other saints. The space, accessible through a 13th-century doorway, is divided into two rooms linked by pointed arches.',
      fr: 'Le musée du monastère occupe l\'ancienne grange et abrite la majeure partie du patrimoine mobilier de l\'abbaye. Sa collection, organisée depuis le XVIe siècle et répartie en cinq grands thèmes, réunit des œuvres consacrées aux saints cisterciens, à l\'enfance du Christ, à la Passion et la Rédemption, à la Vierge et à d\'autres saints. L\'espace, accessible depuis un portail du XIIIe siècle, se divise en deux salles reliées par des arcs ogivaux.',
      de: 'Das Klostermuseum befindet sich in der ehemaligen Scheune und beherbergt den größten Teil des beweglichen Kulturerbes der Abtei. Seine Sammlung, die seit dem 16. Jahrhundert geordnet und in fünf Hauptthemen unterteilt ist, vereint Werke zu zisterziensischen Heiligen, der Kindheit Christi, der Passion und Erlösung, der Jungfrau und anderen Heiligen. Der Raum, zugänglich durch ein Portal aus dem 13. Jahrhundert, ist in zwei durch Spitzbögen verbundene Säle unterteilt.',
      it: 'Il museo del monastero occupa l\'antica cilla e custodisce la maggior parte del patrimonio mobile dell\'abbazia. La sua collezione, organizzata a partire dal XVI secolo e suddivisa in cinque grandi temi, riunisce opere dedicate ai santi cistercensi, all\'infanzia di Cristo, alla Passione e Redenzione, alla Vergine e ad altri santi. Lo spazio, accessibile da un portale del XIII secolo, è suddiviso in due sale collegate da archi ogivali.',
      pt: 'O museu do mosteiro ocupa a antiga cilla e alberga a maior parte do património móvel da abadia. A sua coleção, organizada desde o século XVI e distribuída em cinco grandes temas, reúne obras dedicadas aos santos cistercienses, à infância de Cristo, à Paixão e Redenção, à Virgem e a outros santos. O espaço, acessível por um portal do século XIII, divide-se em duas salas ligadas por arcos ogivais.',
      eu: 'Monasterioko museoa antzinako cillan kokatzen da, eta abadiaren ondare mugikorraren zati handiena gordetzen du. Bere bilduma, XVI. mendetik aurrera antolatua eta bost gai nagusitan banatua, zistertar santuei, Kristoren haurtzaroari, Pasioari eta Erredentzioari, Ama Birjinari eta beste santuei eskainitako lanak biltzen ditu. Espazioa, XIII. mendeko portada batetik sartzen dena, bi aretotan banatzen da, arku zorrotzen bidez lotuta.',
      ca: 'El museu del monestir ocupa l\'antiga cilla i acull la major part del patrimoni moble de l\'abadia. La seva col·lecció, organitzada des del segle XVI i distribuïda en cinc grans temes, reuneix obres dedicades als sants cistercencs, a la infància de Crist, a la Passió i Redempció, a la Mare de Déu i a altres sants. L\'espai, accessible des d\'un portal del segle XIII, es divideix en dues sales connectades per arcs ogivals.',
      ko: '수도원 박물관은 옛 창고(cilla)에 자리하고 있으며, 수도원의 주요 동산 문화재를 보관하고 있습니다. 이 컬렉션은 16세기부터 체계적으로 구성되었으며, 다섯 가지 주요 주제로 나뉘어 시토회 성인들, 그리스도의 유년 시절, 수난과 구원, 성모 마리아, 그리고 기타 성인들에 관한 작품들을 포함하고 있습니다. 13세기 출입구를 통해 진입할 수 있으며, 내부는 첨두 아치로 연결된 두 개의 전시실로 구성되어 있습니다.'
    },
    'ab.s6.p2': {
      es: 'Entre sus piezas más destacadas figuran valiosas tallas de madera como la "Virgen de la Ayuela", de los siglos XII-XIII, la de "San Juan Evangelista" y la de "San Pedro", además de la imagen gótica de "San Martín de Tours". También sobresalen varios retablos de los siglos XVII y XVIII, como los de San Juan Bautista, La Inmaculada, San Benito, Santa Lucía, San José y el Calvario, junto a obras de temática cisterciense y piezas de la Escuela Riojana.',
      en: 'Among its most notable pieces are valuable wooden sculptures such as the "Virgin of Ayuela," dating from the 12th–13th centuries, as well as "Saint John the Evangelist" and "Saint Peter," together with the Gothic image of "Saint Martin of Tours." The museum also features several 17th- and 18th-century altarpieces, including those of Saint John the Baptist, the Immaculate Conception, Saint Benedict, Saint Lucy, Saint Joseph, and the Calvary, along with Cistercian-themed works and pieces from the Rioja School.',
      fr: 'Parmi ses pièces les plus remarquables figurent de précieuses sculptures en bois comme la « Vierge de la Ayuela », des XIIe-XIIIe siècles, celle de « saint Jean l\'Évangéliste » et celle de « saint Pierre », ainsi que l\'image gothique de « saint Martin de Tours ». On y trouve également plusieurs retables des XVIIe et XVIIIe siècles, comme ceux de saint Jean-Baptiste, l\'Immaculée Conception, saint Benoît, sainte Lucie, saint Joseph et le Calvaire, avec des œuvres à thème cistercien et des pièces de l\'École de La Rioja.',
      de: 'Zu den bedeutendsten Stücken gehören wertvolle Holzschnitzereien wie die „Jungfrau von Ayuela" aus dem 12.–13. Jahrhundert, „Der heilige Johannes der Evangelist" und „Der heilige Petrus" sowie das gotische Bild des „heiligen Martin von Tours". Hinzu kommen mehrere Altarretabel aus dem 17. und 18. Jahrhundert, darunter die des heiligen Johannes des Täufers, der Unbefleckten Empfängnis, des heiligen Benedikt, der heiligen Luzia, des heiligen Josef und des Kalvarienbergs, zusammen mit zisterziensischen Themenwerken und Stücken der Rioja-Schule.',
      it: 'Tra le opere più importanti figurano preziose sculture lignee come la "Vergine dell\'Ayuela", dei secoli XII-XIII, quelle di "San Giovanni Evangelista" e "San Pietro", oltre all\'immagine gotica di "San Martino di Tours". Spiccano inoltre diversi retabli dei secoli XVII e XVIII, come quelli di San Giovanni Battista, dell\'Immacolata, di San Benedetto, Santa Lucia, San Giuseppe e del Calvario, insieme a opere di tematica cistercense e pezzi della scuola riojana.',
      pt: 'Entre as peças mais destacadas encontram-se valiosas esculturas em madeira, como a "Virgem da Ayuela", dos séculos XII-XIII, as de "São João Evangelista" e "São Pedro", além da imagem gótica de "São Martinho de Tours". Destacam-se também vários retábulos dos séculos XVII e XVIII, como os de São João Batista, da Imaculada, de São Bento, Santa Luzia, São José e do Calvário, juntamente com obras de temática cisterciense e peças da escola riojana.',
      eu: 'Nabarmentzekoak dira egurrezko eskultura baliotsuak, hala nola XII-XIII. mendeetako "Ayuela Ama Birjina", "San Joan Ebanjelaria" eta "San Pedro", baita "San Martin Tourskoa" irudi gotikoa ere. Halaber, XVII. eta XVIII. mendeetako erretaula ugari azpimarratzen dira, besteak beste San Joan Bataiatzailearena, Sortzez Garbiarena, San Benitorena, Santa Luzia, San Jose eta Kalbarioarena, zistertar gaietako lanekin eta Errioxako eskolako piezekin batera.',
      ca: 'Entre les peces més destacades hi ha valuoses escultures de fusta com la "Mare de Déu de l\'Ayuela", dels segles XII-XIII, les de "Sant Joan Evangelista" i "Sant Pere", així com la imatge gòtica de "Sant Martí de Tours". També sobresurten diversos retaules dels segles XVII i XVIII, com els de Sant Joan Baptista, la Immaculada, Sant Benet, Santa Llúcia, Sant Josep i el Calvari, juntament amb obres de temàtica cistercenca i peces de l\'escola riojana.',
      ko: '주요 작품으로는 12~13세기의 "아유엘라의 성모"를 비롯해 "성 요한 복음사가", "성 베드로"의 목조 조각상과 "투르의 성 마르틴"의 고딕 조각상이 있습니다. 또한 17세기와 18세기의 제단화들도 눈에 띄는데, 세례자 요한, 원죄 없이 잉태된 성모, 성 베네딕토, 성 루치아, 성 요셉, 그리고 갈바리오 장면을 주제로 한 작품들이 포함됩니다. 이와 함께 시토회 주제의 작품들과 라 리오하 지역 화파의 작품들도 전시되어 있습니다.'
    },
    'ab.s6.p3': {
      es: 'La colección se completa con lienzos como el "Desposorio místico de San Roberto", "La Lactancia de San Bernardo" y "San Bernardo con los instrumentos de la Pasión", además de un sagrario barroco, el "Tríptico de San Juan Bautista" y una destacada "Trinidad" en mediorelieve. Este conjunto ofrece una visión amplia del arte devocional y de la riqueza patrimonial acumulada por el monasterio a lo largo de los siglos.',
      en: 'The collection is completed by paintings such as the "Mystical Betrothal of Saint Robert," "The Nursing of Saint Bernard," and "Saint Bernard with the Instruments of the Passion," as well as a Baroque tabernacle, the "Triptych of Saint John the Baptist," and a striking half-relief of the Trinity. Together, these works offer a broad view of devotional art and the rich heritage accumulated by the monastery over the centuries.',
      fr: 'La collection se complète de toiles comme le « Mariage mystique de saint Robert », « L\'Allaitement de saint Bernard » et « Saint Bernard avec les instruments de la Passion », ainsi qu\'un tabernacle baroque, le « Triptyque de saint Jean-Baptiste » et une remarquable « Trinité » en demi-relief. Cet ensemble offre une vision large de l\'art dévotionnel et de la richesse patrimoniale accumulée par le monastère au fil des siècles.',
      de: 'Die Sammlung wird durch Gemälde wie die „Mystische Vermählung des heiligen Robert", „Die Stillung des heiligen Bernhard" und „Der heilige Bernhard mit den Leidenswerkzeugen" sowie ein barockes Tabernakel, das „Triptychon des heiligen Johannes des Täufers" und eine bemerkenswerte „Dreifaltigkeit" in Halbrelief vervollständigt. Dieses Ensemble bietet einen umfassenden Einblick in die Andachtskunst und den reichen Kulturschatz, den das Kloster im Laufe der Jahrhunderte angesammelt hat.',
      it: 'La collezione si completa con dipinti come lo "Sposalizio mistico di San Roberto", "L\'allattamento di San Bernardo" e "San Bernardo con gli strumenti della Passione", oltre a un tabernacolo barocco, il "Trittico di San Giovanni Battista" e una notevole "Trinità" in bassorilievo. Questo insieme offre una visione ampia dell\'arte devozionale e della ricchezza patrimoniale accumulata dal monastero nel corso dei secoli.',
      pt: 'A coleção completa-se com pinturas como o "Desposório místico de São Roberto", "A Lactação de São Bernardo" e "São Bernardo com os instrumentos da Paixão", além de um sacrário barroco, o "Tríptico de São João Batista" e uma destacada "Trindade" em baixo-relevo. Este conjunto oferece uma visão ampla da arte devocional e da riqueza patrimonial acumulada pelo mosteiro ao longo dos séculos.',
      eu: 'Bilduma osatzeko margolanak ere badaude, hala nola "San Robertoren ezkontza mistikoa", "San Bernardoren edoskitzea" eta "San Bernardo Pasioaren tresnekin", baita sagrario barroko bat, "San Joan Bataiatzailearen triptikoa" eta erliebe erdiko "Hirutasuna" nabarmena. Multzo honek arte debozionalaren eta mendeetan zehar metatutako ondarearen ikuspegi zabala eskaintzen du.',
      ca: 'La col·lecció es completa amb pintures com el "Desposori místic de Sant Robert", "La Lactància de Sant Bernat" i "Sant Bernat amb els instruments de la Passió", a més d\'un sagrari barroc, el "Tríptic de Sant Joan Baptista" i una destacada "Trinitat" en mig relleu. Aquest conjunt ofereix una visió àmplia de l\'art devocional i de la riquesa patrimonial acumulada pel monestir al llarg dels segles.',
      ko: '컬렉션에는 "성 로베르토의 신비로운 혼인", "성 베르나르도의 수유", "수난의 도구를 지닌 성 베르나르도" 등의 회화 작품도 포함되며, 바로크 양식의 성체 보관함, "세례자 요한의 삼면 제단화", 그리고 부조 형식의 "삼위일체" 작품도 함께 전시되어 있습니다. 이 공간은 신앙 예술과 수도원이 축적해 온 풍부한 문화유산을 폭넓게 보여줍니다.'
    },
    'ab.cta.over':  { es: '¿Listo para visitar?', en: 'Ready to visit?', fr: 'Prêt à visiter ?', de: 'Bereit für Ihren Besuch?', it: 'Pronto per la visita?',       pt: 'Pronto para visitar?',    eu: 'Prest bisitatzeko?',      ca: 'A punt per visitar?',      ko: '방문할 준비가 되셨나요?' },
    'ab.cta.h2':    { es: 'Planifica tu visita',  en: 'Plan your visit', fr: 'Planifiez votre visite', de: 'Planen Sie Ihren Besuch',  it: 'Pianifica la tua visita',    pt: 'Planeie a sua visita',    eu: 'Antolatu zure bisita',    ca: 'Planifica la teva visita', ko: '방문 계획하기' },
    'ab.cta.desc':  {
      es: 'Consulta nuestras tarifas y horarios, o ponte en contacto con nosotros para organizar tu grupo.',
      en: 'Check our prices and opening hours, or contact us to organise your group visit.',
      fr: 'Consultez nos tarifs et horaires, ou contactez-nous pour organiser votre visite de groupe.',
      de: 'Schauen Sie sich unsere Preise und Öffnungszeiten an oder kontaktieren Sie uns, um Ihren Gruppenbesuch zu organisieren.',
      it: 'Consulta le nostre tariffe e gli orari, oppure contattaci per organizzare il tuo gruppo.',
      pt: 'Consulte as nossas tarifas e horários, ou entre em contacto connosco para organizar o seu grupo.',
      eu: 'Kontsultatu gure tarifak eta ordutegiak, edo jarri gurekin harremanetan zure taldea antolatzeko.',
      ca: 'Consulta les nostres tarifes i horaris, o posa\'t en contacte amb nosaltres per organitzar el teu grup.',
      ko: '요금 및 운영 시간을 확인하시거나, 단체 방문을 위해 저희에게 문의해 주세요.'
    },
    'ab.cta.btn1': { es: 'Ver tarifas',    en: 'View admission',  fr: 'Voir les tarifs',  de: 'Preise ansehen',    it: 'Visualizza tariffe', pt: 'Ver tarifas',  eu: 'Ikusi tarifak',  ca: 'Veure tarifes',  ko: '요금 보기' },
    'ab.cta.btn2': { es: 'Ver galería',    en: 'View gallery',    fr: 'Voir la galerie',  de: 'Galerie ansehen',   it: 'Visualizza galleria',pt: 'Ver galeria',  eu: 'Ikusi galeria',  ca: 'Veure galeria',  ko: '갤러리 보기' },

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
    'ft.social':       { es: 'Social',     en: 'Social',    fr: 'Réseaux sociaux', de: 'Soziale Medien', it: 'Social', pt: 'Social', eu: 'Sare sozialak', ca: 'Social', ko: '소셜' },
    'ft.brand.addr':   {
      es: 'Carretera 12 · 26325 Cañas, La Rioja, España',
      en: 'Carretera 12 · 26325 Cañas, La Rioja, Spain',
      fr: 'Carretera 12 · 26325 Cañas, La Rioja, Espagne',
      de: 'Carretera 12 · 26325 Cañas, La Rioja, Spanien',
      it: 'Carretera 12 · 26325 Cañas, La Rioja, Spagna',
      pt: 'Carretera 12 · 26325 Cañas, La Rioja, Espanha',
      eu: 'Carretera 12 · 26325 Cañas, Errioxa, Espainia',
      ca: 'Carretera 12 · 26325 Cañas, La Rioja, Espanya',
      ko: 'Carretera 12 · 26325 Cañas, La Rioja, 스페인'
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
     NÚCLEO — soporte de 9 idiomas: es / en / fr / de / it / pt / eu / ca / ko
  ================================================================= */
  const LS_KEY   = 'ml_lang';
  const LANGS    = ['es', 'en', 'fr', 'de', 'it', 'pt', 'eu', 'ca', 'ko'];

  function detectLang() {
    const saved = localStorage.getItem(LS_KEY);
    if (saved && LANGS.includes(saved)) return saved;
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('de')) return 'de';
    if (nav.startsWith('en')) return 'en';
    if (nav.startsWith('it')) return 'it';
    if (nav.startsWith('pt')) return 'pt';
    if (nav.startsWith('eu')) return 'eu';
    if (nav.startsWith('ca')) return 'ca';
    if (nav.startsWith('ko')) return 'ko';
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
