/**
 * MONASTERIO DE LA LUZ · i18n.js  v2
 * Sistema bilingüe ES / EN — diccionario completo para todas las páginas.
 * Uso en HTML: data-i18n="clave"            → innerHTML
 *              data-i18n-placeholder="clave" → placeholder attr
 */
(function () {
  'use strict';

  /* =================================================================
     DICCIONARIO
  ================================================================= */
  const D = {

    /* ---- NAV ---- */
    'nav.home': { es: 'Inicio', en: 'Home' },
    'nav.abbey': { es: 'La Abadía', en: 'The Abbey' },
    'nav.rates': { es: 'Tarifas', en: 'Admission' },
    'nav.news': { es: 'Noticias', en: 'News' },
    'nav.gallery': { es: 'Galería', en: 'Gallery' },
    'nav.contact': { es: 'Contacto', en: 'Contact' },

    /* ---- FOOTER ---- */
    'ft.pages': { es: 'Páginas', en: 'Pages' },
    'ft.legal': { es: 'Legal', en: 'Legal' },
    'ft.contact': { es: 'Contacto', en: 'Contact' },
    'ft.legal1': { es: 'Aviso legal', en: 'Legal notice' },
    'ft.legal2': { es: 'Privacidad', en: 'Privacy policy' },
    'ft.legal3': { es: 'Cookies', en: 'Cookie policy' },
    'ft.legal4': { es: 'Términos y condiciones', en: 'Terms & conditions' },
    'ft.copy': {
      es: '© 2026 Monasterio de Santa María de San Salvador de Cañas · Todos los derechos reservados',
      en: '© 2026 Monastery of Santa María de San Salvador de Cañas · All rights reserved'
    },

    /* ---- PAGE HEROES ---- */
    'ph.abbey.over': { es: 'Patrimonio · Cister', en: 'Heritage · Cistercian' },
    'ph.abbey.title': { es: 'La Abadía', en: 'The Abbey' },
    'ph.abbey.sub': {
      es: 'Monasterio de Santa María de San Salvador de Cañas',
      en: 'Monastery of Santa María de San Salvador de Cañas'
    },
    'ph.rates.over': { es: 'Acceso · Visitas', en: 'Access · Visits' },
    'ph.rates.title': { es: 'Tarifas', en: 'Admission' },
    'ph.rates.sub': {
      es: 'Elige la modalidad que mejor se adapta a ti',
      en: 'Choose the option that best suits you'
    },
    'ph.news.over': { es: 'Actualidad · Cultura', en: 'News · Culture' },
    'ph.news.title': { es: 'Noticias', en: 'News' },
    'ph.news.sub': {
      es: 'Lo más reciente sobre el Monasterio de Cañas',
      en: 'The latest from Monasterio de Cañas'
    },
    'ph.gal.over': { es: 'Imágenes · Fotografía', en: 'Images · Photography' },
    'ph.gal.title': { es: 'Galería', en: 'Gallery' },
    'ph.gal.sub': {
      es: 'El Monasterio de Cañas a través de sus espacios',
      en: 'Monasterio de Cañas through its spaces'
    },
    'ph.legal.over': { es: 'Legal · Información', en: 'Legal · Information' },
    'ph.legal.title': { es: 'Aviso Legal', en: 'Legal Notice' },
    'ph.legal.sub': { es: 'Condiciones de uso del sitio web', en: 'Website terms of use' },
    'ph.priv.over': { es: 'Legal · Privacidad', en: 'Legal · Privacy' },
    'ph.priv.title': { es: 'Política de Privacidad', en: 'Privacy Policy' },
    'ph.priv.sub': { es: 'Cómo tratamos tus datos personales', en: 'How we handle your personal data' },
    'ph.cook.over': { es: 'Legal · Cookies', en: 'Legal · Cookies' },
    'ph.cook.title': { es: 'Política de Cookies', en: 'Cookie Policy' },
    'ph.cook.sub': { es: 'Qué cookies usamos y para qué', en: 'What cookies we use and why' },
    'ph.terms.over': { es: 'Legal · Condiciones', en: 'Legal · Terms' },
    'ph.terms.title': { es: 'Términos y Condiciones', en: 'Terms and Conditions' },
    'ph.terms.sub': { es: 'Condiciones generales de visita y contratación', en: 'General conditions for visits and bookings' },

    /* ---- HOME: HERO ---- */
    'hero.over': { es: 'La Rioja · España · Cister', en: 'La Rioja · Spain · Cistercian' },
    'hero.line1': { es: 'Un lugar', en: 'A majestic' },
    'hero.line2': { es: 'majestuoso', en: 'place' },
    'hero.sub': { es: 'El Monasterio de la Luz', en: 'The Monastery of Light' },
    'hero.hours': {
      es: '10:30 – 14:00 h · 16:00 – 19:30 h',
      en: '10:30 am – 2:00 pm · 4:00 – 7:30 pm'
    },
    'btn.rates': { es: 'Ver tarifas', en: 'View admission' },
    'btn.abbey': { es: 'Conocer la abadía', en: 'Explore the abbey' },

    /* ---- DATA STRIP ---- */
    'strip.open': { es: 'Abierto todos los días', en: 'Open every day' },

    /* ---- VIDEO ---- */
    'vid.over': { es: 'Bienvenidos', en: 'Welcome' },
    'vid.title': { es: 'Descubre el Monasterio', en: 'Discover the Monastery' },
    'vid.desc': {
      es: 'Un viaje a través de siglos de historia, espiritualidad y arte en el corazón de La Rioja',
      en: 'A journey through centuries of history, spirituality and art in the heart of La Rioja'
    },
    'vid.caption': {
      es: 'Monasterio de Santa María de San Salvador de Cañas',
      en: 'Monastery of Santa María de San Salvador de Cañas'
    },

    /* ---- WHY ---- */
    'why.over': { es: 'El Monasterio', en: 'The Monastery' },
    'why.title': { es: '¿Por qué visitarnos?', en: 'Why visit us?' },
    'why.desc': {
      es: 'Un lugar único donde el patrimonio medieval, la espiritualidad y la belleza natural de La Rioja se dan la mano.',
      en: 'A unique place where medieval heritage, spirituality and the natural beauty of La Rioja come together.'
    },
    'why.c1.title': { es: 'Patrimonio del siglo XII', en: '12th-century Heritage' },
    'why.c1.desc': {
      es: 'Contempla una de las iglesias góticas más auténticas de La Rioja, con su retablo renacentista considerado uno de los mejores de la región.',
      en: 'Marvel at one of the most authentic Gothic churches in La Rioja, with its Renaissance altarpiece considered one of the finest in the region.'
    },
    'why.c2.title': { es: 'Monasterio vivo', en: 'A living monastery' },
    'why.c2.desc': {
      es: 'Una comunidad de monjas cistercienses habita el monasterio desde el siglo XII, manteniendo viva la tradición benedictina en pleno siglo XXI.',
      en: 'A community of Cistercian nuns has inhabited the monastery since the 12th century, keeping the Benedictine tradition alive in the 21st century.'
    },
    'why.c3.title': { es: 'Tesoros únicos', en: 'Unique treasures' },
    'why.c3.desc': {
      es: 'Visita la Sala de Reliquias, la Cilla‑Museo y el Claustro cisterciense; espacios que guardan siglos de historia y devoción.',
      en: 'Visit the Relic Room, the Cilla‑Museum and the Cistercian Cloister — spaces that hold centuries of history and devotion.'
    },
    'why.c4.title': { es: 'Para todos', en: 'For everyone' },
    'why.c4.desc': {
      es: 'Tarifas accesibles para individuales, familias y grupos, con visitas guiadas y no guiadas adaptadas a cada tipo de visitante.',
      en: 'Affordable tickets for individuals, families and groups, with guided and self-guided tours adapted to every visitor.'
    },

    /* ---- RATES PREVIEW (home) ---- */
    'rp.over': { es: 'Acceso', en: 'Admission' },
    'rp.title': { es: 'Tarifas de visita', en: 'Visit Admission' },
    'rp.desc': {
      es: 'Precios asequibles para todos. Elige la modalidad que mejor se adapte a tu visita.',
      en: 'Affordable prices for everyone. Choose the option that best suits your visit.'
    },
    'rp.cta.text': {
      es: 'Desde <strong>4€</strong> por persona — acceso a la iglesia gótica del siglo XII, el claustro, la Sala Capitular, la sala de reliquias y más. Un patrimonio único en La Rioja al alcance de todos.',
      en: 'From <strong>€4</strong> per person — access to the 12th-century Gothic church, the cloister, the Chapter House, the relics room and more. A unique heritage site in La Rioja, accessible to all.'
    },
    'rp.btn': { es: 'Ver todas las tarifas', en: 'View all admission prices' },

    /* ---- RESERVAS (home CTA) ---- */
    'res.over': { es: 'Reservas', en: 'Bookings' },
    'res.title': { es: 'Reserva tu visita', en: 'Book your visit' },
    'res.desc': {
      es: 'Ocho siglos de historia te esperan. Asegura tu plaza y vive una experiencia única en el corazón de La Rioja — antes de que se agoten las entradas.',
      en: 'Eight centuries of history await you. Secure your place and enjoy a unique experience in the heart of La Rioja — before tickets sell out.'
    },
    'res.btn': { es: 'Reservar entradas', en: 'Book tickets' },

    /* ---- CONTACT FORM ---- */
    'ct.over': { es: 'Reservas y consultas', en: 'Bookings & enquiries' },
    'ct.title': { es: 'Contacto', en: 'Contact' },
    'ct.intro': {
      es: '¿Tienes alguna pregunta sobre tu visita o quieres hacer una reserva? Escríbenos y te responderemos lo antes posible.',
      en: 'Do you have a question about your visit or would like to make a booking? Write to us and we will get back to you as soon as possible.'
    },
    'ct.f.name': { es: 'Nombre y apellidos', en: 'Full name' },
    'ct.f.phone': { es: 'Teléfono', en: 'Phone' },
    'ct.f.email': { es: 'Correo electrónico', en: 'Email address' },
    'ct.f.type': { es: 'Tipo de visita', en: 'Visit type' },
    'ct.f.type.ph': { es: 'Selecciona una opción', en: 'Select an option' },
    'ct.f.type.ng': { es: 'Sin guía', en: 'Self-guided' },
    'ct.f.type.g': { es: 'Con guía', en: 'Guided tour' },
    'ct.f.people': { es: 'Número de personas', en: 'Number of people' },
    'ct.f.kids': { es: 'Niños entre 6 y 14 años', en: 'Children aged 6–14' },
    'ct.f.date': { es: 'Fecha de visita preferida', en: 'Preferred visit date' },
    'ct.f.time': { es: 'Horario preferido', en: 'Preferred time slot' },
    'ct.f.time.ph': { es: 'Selecciona horario', en: 'Select time slot' },
    'ct.f.time.m1': { es: 'Mañana — 10:30 h', en: 'Morning — 10:30 am' },
    'ct.f.time.m2': { es: 'Mañana — 11:30 h', en: 'Morning — 11:30 am' },
    'ct.f.time.m3': { es: 'Mañana — 12:30 h', en: 'Morning — 12:30 pm' },
    'ct.f.time.t1': { es: 'Tarde — 16:00 h', en: 'Afternoon — 4:00 pm' },
    'ct.f.time.t2': { es: 'Tarde — 17:00 h', en: 'Afternoon — 5:00 pm' },
    'ct.f.time.t3': { es: 'Tarde — 18:00 h', en: 'Afternoon — 6:00 pm' },
    'ct.f.msg': { es: 'Mensaje o información adicional', en: 'Message or additional information' },
    'ct.f.note': {
      es: '* Campos obligatorios. Tus datos se enviarán únicamente a entradas@monasteriodecanas.org.',
      en: '* Required fields. Your data will only be sent to entradas@monasteriodecanas.org.'
    },
    'ct.f.submit': { es: 'Enviar solicitud', en: 'Send request' },
    'ct.f.reply': { es: 'Respondemos en menos de 24h', en: 'We reply within 24 hours' },
    'ct.f.terms.pre': { es: 'He leído y acepto los', en: 'I have read and accept the' },
    'ct.f.terms.link': { es: 'términos y condiciones de reserva', en: 'booking terms and conditions' },
    'ct.f.captcha.pending': {
      es: 'Captcha — pendiente de activar (ver comentario en el código)',
      en: 'Captcha — pending activation (see code comment)'
    },
    'ct.f.sending': { es: 'Enviando…', en: 'Sending…' },
    'ct.f.ok': {
      es: '✓ Solicitud enviada. Te responderemos en breve.',
      en: '✓ Request sent. We\'ll get back to you shortly.'
    },
    'ct.f.err': {
      es: 'Por favor rellena los campos obligatorios.',
      en: 'Please fill in all required fields.'
    },
    'ct.f.senderr': {
      es: 'No se pudo enviar el mensaje. Por favor escríbenos directamente a entradas@monasteriodecanas.org',
      en: 'Could not send the message. Please write directly to entradas@monasteriodecanas.org'
    },
    'ct.addr.lbl': { es: 'Dirección', en: 'Address' },
    'ct.addr.val': {
      es: 'Plaza Carretera 12<br>26312 Cañas, La Rioja, España',
      en: 'Plaza Carretera 12<br>26312 Cañas, La Rioja, Spain'
    },
    'ct.phone.lbl': { es: 'Teléfono', en: 'Phone' },
    'ct.email.lbl': { es: 'Email', en: 'Email' },
    'ct.hours.lbl': { es: 'Horarios', en: 'Opening hours' },
    'ct.hours.val': {
      es: '10:30 – 14:00 h<br>16:00 – 19:30 h',
      en: '10:30 am – 2:00 pm<br>4:00 – 7:30 pm'
    },

    /* ---- ABADÍA ---- */
    'ab.intro.over': { es: 'Historia', en: 'History' },
    'ab.intro.h2': {
      es: 'Un lugar de fe y arte desde el siglo XII',
      en: 'A place of faith and art since the 12th century'
    },
    'ab.intro.p1': {
      es: 'El Monasterio de Santa María de San Salvador de Cañas fue fundado en el siglo XII. Es un conjunto monástico cisterciense habitado por una comunidad de monjas que mantiene viva la tradición benedictina hasta nuestros días.',
      en: 'The Monastery of Santa María de San Salvador de Cañas was founded in the 12th century. It is a Cistercian monastic complex inhabited by a community of nuns who keep the Benedictine tradition alive to this day.'
    },
    'ab.intro.p2': {
      es: 'El conjunto arquitectónico reúne varios espacios de singular valor patrimonial: una iglesia gótica del siglo XIII, un claustro de austeridad cisterciense, la sala capitular, una extraordinaria sala de reliquias y la cilla‑museo con una colección de arte sacro de primer orden.',
      en: 'The architectural complex brings together several spaces of singular heritage value: a 13th-century Gothic church, a cloister of Cistercian austerity, the chapter house, an extraordinary relic room and the Cilla‑Museum housing a first-class collection of sacred art.'
    },
    'ab.intro.p3': {
      es: 'Declarado Bien de Interés Cultural, el monasterio forma parte del paisaje histórico y espiritual de La Rioja, siendo un destino imprescindible para quienes buscan belleza, silencio e historia.',
      en: 'Listed as a Property of Cultural Interest, the monastery is part of the historical and spiritual landscape of La Rioja, making it an unmissable destination for those seeking beauty, silence and history.'
    },
    'ab.intro.btn': { es: 'Planificar la visita', en: 'Plan your visit' },
    'ab.s1.tag': { es: 'Románico · s. XII', en: 'Romanesque · 12th c.' },
    'ab.s1.title': { es: 'La Iglesia', en: 'The Church' },
    'ab.s1.p1': {
      es: 'El templo actual mide treinta metros de largo y nueve de ancho en el crucero. La cabecera tiene tres ábsides, con el central de mayor tamaño y los laterales en semicírculo.',
      en: 'The current church is thirty metres long and nine metres wide at the transept. The apse has three sections, with the central one being larger and the lateral ones semicircular.'
    },
    'ab.s1.p2': {
      es: 'La nave central se prolonga para alojar el coro de las monjas, mientras que la nave de la epístola se aboveda y se extiende hasta la portería. En el lado norte, la tercera nave se interrumpe en el crucero, donde se abre una puerta que comunica con el cementerio del monasterio, conocido como la <em>"puerta de los difuntos"</em>.',
      en: 'The central nave extends to house the nuns\' choir, while the epistle nave is vaulted and extends to the gatehouse. On the north side, the third nave ends at the transept, where a door opens to the monastery cemetery, known as the <em>"gate of the departed"</em>.'
    },
    'ab.s1.p3': {
      es: 'La iglesia conserva un mobiliario modesto, con un "Cristo crucificado" gótico del siglo XIV y una talla de madera policromada de "Nuestra Señora de Cañas" del siglo XIII. En el coro, se encuentra el retablo, la sillería y un fascistol, destacando la reubicación del retablo que permitió una mayor iluminación de la nave.',
      en: 'The church retains modest furnishings, including a 14th-century Gothic "Crucified Christ" and a 13th-century polychrome wooden carving of "Our Lady of Cañas". The choir holds the altarpiece, the stalls and a lectern, and the relocation of the altarpiece allowed greater light to flood the central nave.'
    },
    'ab.s1.p4': {
      es: 'La sillería del coro, con 26 asientos, data del siglo XVIII y fue restaurada a finales del siglo XX. En la nave central hay siete laudas sepulcrales de abadesas fallecidas en el siglo XVII.',
      en: 'The choir stalls, with 26 seats, date from the 18th century and were restored at the end of the 20th century. The central nave contains seven funerary slabs of abbesses who died in the 17th century.'
    },
    'ab.s2.tag': { es: 'Renacimiento', en: 'Renaissance' },
    'ab.s2.title': { es: 'El Retablo Mayor', en: 'The High Altarpiece' },
    'ab.s2.p1': {
      es: 'El Retablo Mayor es la obra más destacada de la iglesia y una referencia del arte renacentista en La Rioja. Fue encargado a principios del siglo XVI por la abadesa Leonor de Osorio y realizado por Guillen de Holanda, Andrés de Melgar y Alonso Gallego. En 1975 se trasladó desde el ábside al pie del templo, donde hoy se presenta como tríptico que combina escultura y pintura en torno a la vida de la Virgen.',
      en: 'The High Altarpiece is the most remarkable work in the church and a benchmark of Renaissance art in La Rioja. Commissioned in the early 16th century by Abbess Leonor de Osorio, it was crafted by Guillen de Holanda, Andrés de Melgar, and Alonso Gallego. In 1975 it was moved from the apse to the foot of the church, where it now stands as a triptych blending sculpture and painting around the life of the Virgin.'
    },
    'ab.s2.p2': {
      es: 'Su estructura se organiza en siete calles y tres pisos con un ático superior. En el centro figura la Virgen entre San Benito y San Bernardo, acompañada por escenas como la Adoración de los Reyes, la Asunción y el Calvario. Los relieves del banco ilustran episodios bíblicos, mientras las tablas laterales muestran santos y pasajes como la Anunciación, la Visitación y la Huida a Egipto.',
      en: 'Its composition unfolds in seven vertical panels and three tiers topped by an attic. At the center is the Virgin between Saints Benedict and Bernard, surrounded by scenes such as the Adoration of the Magi, the Assumption, and the Calvary. The base reliefs depict key biblical episodes, while the side panels portray saints and moments like the Annunciation, the Visitation, and the Flight into Egypt.'
    },
    'ab.s2.p3': {
      es: 'El conjunto culmina con el ático, donde aparecen la Piedad y la Santísima Trinidad bajo la fórmula medieval en la que el Padre sostiene la cruz y la paloma simboliza al Espíritu Santo sobre Cristo. Este retablo constituye un testimonio excepcional de la devoción y la maestría artística de su tiempo.',
      en: 'The upper section concludes with the Pietà and the Holy Trinity, following the medieval depiction where the Eternal Father holds the cross and a dove represents the Holy Spirit above Christ’s head. This altarpiece stands as a magnificent example of faith and artistry from its era.'
    },
    'ab.s3.tag': { es: 'Arquitectura Cisterciense', en: 'Cistercian Architecture' },
    'ab.s3.title': { es: 'El Claustro', en: 'The Cloister' },
    'ab.s3.p1': {
      es: 'El claustro del monasterio es un valioso testimonio de su evolución arquitectónica entre los siglos XII y XVIII, iniciada bajo la dirección de la beata Urraca Díaz de Haro. Su edificación, marcada por la diversidad de materiales y estilos, refleja las distintas etapas constructivas y los recursos disponibles a lo largo del tiempo, combinando muros románicos, portadas góticas y arquerías de medio punto.',
      en: 'The monastery’s cloister is a remarkable record of architectural evolution from the 12th to the 18th century, begun under Blessed Urraca Díaz de Haro. Its construction, shaped by diverse materials and artistic styles, reflects changing economic circumstances and patronage, combining Romanesque walls, Gothic portals, and semicircular arcades.'
    },
    'ab.s3.p2': {
      es: 'Los distintos tramos muestran desde sillares finamente labrados hasta fábricas más sencillas, con ladrillos en la planta superior que transforman los arcos originales en vanos cuadrangulares. Destaca el pavimento de la galería, parcialmente conservado, con un singular diseño de motivos radiales en piedra. Entre sus portadas sobresale la de la sala capitular, con tres arcos apuntados y dos ventanales, ejemplo notable del gótico monástico riojano.',
      en: 'The various sections display finely carved ashlar alongside rougher masonry, with upper-level brickwork enclosing original arches to form square openings. The gallery floor, partly preserved, features unique radial stone patterns. Among the most notable elements is the Chapter House portal on the east wing, with three pointed arches and two windows representing monastic Gothic architecture at its finest.'
    },
    'ab.s3.p3': {
      es: 'En los demás lados del claustro se abren accesos a la iglesia, la sacristía, el refectorio y otras dependencias, con capiteles ornamentados que incluyen figuras humanas y motivos vegetales. El ala oeste, antigua cilla y hoy museo, conserva una puerta central cegada durante siglos, testimonio de la prolongada historia constructiva del conjunto.',
      en: 'Other wings connect to the church, sacristy, refectory, and service rooms, adorned with capitals of vegetal motifs and human figures. The west wing, once the cellar and now a museum, retains a long-sealed central doorway — a silent witness to the cloister’s layered architectural history.'
    },
    'ab.s4.tag': { es: 'Vida Comunitaria', en: 'Community Life' },
    'ab.s4.title': { es: 'Sala Capitular', en: 'Chapter House' },
    'ab.s4.p1': {
      es: 'Construida en la segunda mitad del siglo XIII, se sitúa junto al claustro y servía para las reuniones de la comunidad. También se convirtió en panteón, acogiendo el sarcófago de la beata Urraca Díaz de Haro y las laudas de cuatro abadesas. Su fachada, con una portada y dos ventanales apuntados decorados con motivos vegetales, destaca por una curiosa figura esculpida, el “eterno borracho”, una cabeza humana invertida en el pórtico.',
      en: 'Built in the second half of the 13th century, stands beside the cloister and was used for community meetings. It later became a pantheon, housing the sarcophagus of Blessed Urraca Díaz de Haro and the tomb slabs of four abbesses. Its façade features a pointed-arch doorway and twin windows with ornate vegetal carvings, and includes a curious sculpture known as the “eternal drunkard”—a reversed human head set into the portico.'
    },
    'ab.s4.p2': {
      es: 'El interior se compone de cuatro bóvedas sostenidas por una columna central y columnillas adosadas, cuyo diseño simboliza la Santísima Trinidad mediante tres elementos que convergen en el eje central. Esta estructura refuerza la espiritualidad del recinto y su función de unión comunitaria. La decoración vegetal domina el conjunto, aportando armonía y significado simbólico al espacio monástico.',
      en: 'Inside, four vaults rest upon a central column and attached shafts, symbolizing the Holy Trinity through three converging architectural elements. This design emphasizes the spiritual unity of the monastic community, while vegetal decoration enriches the solemn atmosphere of the space.'
    },
    'ab.s4.p3': {
      es: 'El sarcófago de la beata, pieza excepcional realizada entre los siglos XIII y XIV, se apoya sobre ménsulas con figuras animales y muestra en su tapa a Urraca con sus atributos abaciales, flanqueada por ángeles y novicias. En la caja se narran episodios de su vida y su elevación al cielo con veintiséis personajes. Su cuerpo incorrupto, verificado en varias ocasiones, se acompaña de las laudas de las abadesas, reafirmando su papel central en la historia espiritual del monasterio.',
      en: 'The sarcophagus of the Blessed Urraca Díaz de Haro, crafted between the 13th and 14th centuries, rests on brackets carved with animals. Its lid depicts Urraca with her abbatial insignia, flanked by angels and novices, while the chest recounts scenes from her life and ascent to heaven through twenty-six human figures. Her incorrupt body, confirmed several times, is flanked by the tomb slabs of four abbesses—an enduring testament to her revered legacy within the monastery.'
    },
    'ab.s5.tag': { es: 'Tesoro Espiritual', en: 'Spiritual Treasury' },
    'ab.s5.title': { es: 'Sala de Reliquias', en: 'Relic Room' },
    'ab.s5.p1': {
      es: 'Las reliquias han sido veneradas desde la Edad Media por su vínculo con los santos y su capacidad para atraer devoción y peregrinos. Con el tiempo, la Iglesia reguló su autenticidad mediante documentos llamados “auténticas”, especialmente a partir de la Edad Moderna, para frenar los abusos y el comercio excesivo asociado a este culto.',
      en: 'Relics have been venerated since the Middle Ages for their connection to saints and their power to inspire devotion and attract pilgrims. Over time, the Church regulated their authenticity through documents known as “authentics,” especially from the early modern period onward, in order to curb abuses and the excessive trade associated with relic cults.'
    },
    'ab.s5.p2': {
      es: 'El monasterio de Cañas conserva una destacada colección de reliquias organizada en varias etapas históricas, desde la época medieval hasta el siglo XX. Entre las piezas más notables figuran la canilla de Santa Engracia y un hueso de los mártires de Cardeña, ambas con certificado de autenticidad, junto a otras piezas singulares como la reproducción del clavo de la crucifixión o las herraduras atribuidas al caballo del apóstol Santiago.',
      en: 'The Monastery of Cañas preserves an outstanding collection of relics organized into several historical phases, from the medieval period to the 20th century. Among the most notable pieces are the shinbone of Saint Engracia and a bone of the Martyrs of Cardeña, both accompanied by certificates of authenticity, together with singular items such as a reproduction of the nail of the Crucifixion and the horseshoes attributed to the Apostle James’s horse.'
    },
    'ab.s5.p3': {
      es: 'La sala de reliquias reúne además valiosas obras de arte, como una talla gótica de Santa Ana, la Virgen y el Niño, marfiles hispano-filipinos y una imagen en alabastro de Nuestra Señora del Cister. Este conjunto une valor devocional y artístico, y convierte el espacio en un testimonio excepcional de la historia religiosa y patrimonial del monasterio.',
      en: 'The relics room also displays valuable works of art, including a Gothic polychrome group of Saint Anne, the Virgin, and Child, Hispano-Filipino ivories, and an alabaster image of Our Lady of the Cister. Together, these objects combine devotional significance with artistic value, making the room an exceptional witness to the monastery’s religious and heritage history.'
    },
    'ab.s6.tag': { es: 'Arte Sacro · Colecciones', en: 'Sacred Art · Collections' },
    'ab.s6.title': { es: 'Cilla‑Museo', en: 'Cilla‑Museum' },
    'ab.s6.p1': {
      es: 'El museo del monasterio ocupa la antigua cilla y alberga la mayor parte del patrimonio mueble de la abadía. Su colección, organizada desde el siglo XVI y distribuida en cinco grandes temas, reúne obras dedicadas a los santos cistercienses, la infancia de Cristo, la Pasión y la Redención, la Virgen y otros santos. El espacio, accesible desde una portada del siglo XIII, se divide en dos salas conectadas por arcos ojivales.',
      en: 'The monastery museum occupies the former granary and houses most of the abbey’s movable heritage. Its collection, arranged from the 16th century onward and organized into five main themes, brings together works devoted to Cistercian saints, the early life of Christ, the Passion and Redemption, the Virgin Mary, and other saints. The space, accessible through a 13th-century doorway, is divided into two rooms linked by pointed arches.'
    },
    'ab.s6.p2': {
      es: 'Entre sus piezas más destacadas figuran valiosas tallas de madera como la “Virgen de la Ayuela”, de los siglos XII-XIII, la de “San Juan Evangelista” y la de “San Pedro”, además de la imagen gótica de “San Martín de Tours”. También sobresalen varios retablos de los siglos XVII y XVIII, como los de San Juan Bautista, La Inmaculada, San Benito, Santa Lucía, San José y el Calvario, junto a obras de temática cisterciense y piezas de la Escuela Riojana.',
      en: 'Among its most notable pieces are valuable wooden sculptures such as the “Virgin of Ayuela,” dating from the 12th–13th centuries, as well as “Saint John the Evangelist” and “Saint Peter,” together with the Gothic image of “Saint Martin of Tours.” The museum also features several 17th- and 18th-century altarpieces, including those of Saint John the Baptist, the Immaculate Conception, Saint Benedict, Saint Lucy, Saint Joseph, and the Calvary, along with Cistercian-themed works and pieces from the Rioja School.'
    },
    'ab.s6.p3': {
      es: 'La colección se completa con lienzos como el “Desposorio místico de San Roberto”, “La Lactancia de San Bernardo” y “San Bernardo con los instrumentos de la Pasión”, además de un sagrario barroco, el “Tríptico de San Juan Bautista” y una destacada “Trinidad” en mediorelieve. Este conjunto ofrece una visión amplia del arte devocional y de la riqueza patrimonial acumulada por el monasterio a lo largo de los siglos.',
      en: 'The collection is completed by paintings such as the “Mystical Betrothal of Saint Robert,” “The Nursing of Saint Bernard,” and “Saint Bernard with the Instruments of the Passion,” as well as a Baroque tabernacle, the “Triptych of Saint John the Baptist,” and a striking half-relief of the Trinity. Together, these works offer a broad view of devotional art and the rich heritage accumulated by the monastery over the centuries.'

    },
    'ab.cta.over': { es: '¿Listo para visitar?', en: 'Ready to visit?' },
    'ab.cta.h2': { es: 'Planifica tu visita', en: 'Plan your visit' },
    'ab.cta.desc': {
      es: 'Consulta nuestras tarifas y horarios, o ponte en contacto con nosotros para organizar tu grupo.',
      en: 'Check our prices and opening hours, or contact us to organise your group visit.'
    },
    'ab.cta.btn1': { es: 'Ver tarifas', en: 'View admission' },
    'ab.cta.btn2': { es: 'Ver galería', en: 'View gallery' },

    /* ---- TARIFAS ---- */
    'tr.over': { es: 'Precios', en: 'Prices' },
    'tr.title': { es: 'Nuestras tarifas', en: 'Our admission prices' },
    'tr.desc': {
      es: 'Para que puedas elegir las entradas que mejor se adapten a tus necesidades, ofrecemos cuatro opciones diferentes con precios muy asequibles para todos.',
      en: 'To help you choose the tickets that best suit your needs, we offer four different options at very affordable prices for everyone.'
    },
    'tr.tog.ind': { es: 'Visita Individual', en: 'Individual visit' },
    'tr.tog.grp': { es: 'Visita en Grupo', en: 'Group visit' },
    'tr.sec.ng': { es: 'Visitas No Guiadas', en: 'Self-guided Visits' },
    'tr.sec.g': { es: 'Visita Guiada Individual', en: 'Individual Guided Visit' },
    'tr.sec.gng': { es: 'Visita No Guiada · Grupos', en: 'Self-guided · Groups' },
    'tr.sec.gg': { es: 'Suplemento Visita Guiada · Grupos', en: 'Guided Tour Supplement · Groups' },
    'tr.adult': { es: 'Adulto', en: 'Adult' },
    'tr.reduced': { es: 'Tarifa Reducida', en: 'Reduced Rate' },
    'tr.free': { es: 'Menores de 6 años', en: 'Under 6 years' },
    'tr.free.acc': { es: 'gratuito', en: 'free' },
    'tr.free.inc1': { es: 'Acceso libre', en: 'Free access' },
    'tr.free.inc2': { es: 'Acompañado de adulto', en: 'Accompanied by adult' },
    'tr.adult.note': { es: '', en: '' },
    'tr.red.note': {
      es: 'Válido para menores de 6 a 14 años acreditados en taquilla.',
      en: 'Valid for children aged 6–14, verified at the ticket office.'
    },
    'tr.guided.ind': { es: 'Guiada · Individual', en: 'Guided · Individual' },
    'tr.grp.25p': { es: 'Grupos + 25 personas', en: 'Groups of 25+ people' },
    'tr.grp.25m': { es: 'Grupos − 25 personas', en: 'Groups under 25 people' },
    'tr.kids': { es: 'Niños (6 – 14 años)', en: 'Children (aged 6–14)' },
    'tr.supp.guide': { es: 'Guía incluido', en: 'Guide included' },
    'tr.inc.church': { es: 'Iglesia del siglo XII', en: '12th-century Church' },
    'tr.inc.cloister': { es: 'El Claustro', en: 'The Cloister' },
    'tr.inc.relics': { es: 'Sala de Reliquias', en: 'Relic Room' },
    'tr.inc.chapter': { es: 'La Sala Capitular', en: 'Chapter House' },
    'tr.inc.cilla': { es: 'La Cilla‑Museo', en: 'The Cilla‑Museum' },
    'tr.inc.guide': { es: 'Guía especializado incluido', en: 'Specialist guide included' },
    'tr.inc.free': { es: 'Acceso libre', en: 'Free access' },
    'tr.inc.adult': { es: 'Acompañado de adulto', en: 'Accompanied by adult' },
    'tr.book.title': { es: '¿Cómo reservar?', en: 'How to book?' },
    'tr.book.p': {
      es: 'Las visitas guiadas individuales están sujetas a disponibilidad. Contacta con nosotros con antelación para confirmar fecha y hora.',
      en: 'Individual guided visits are subject to availability. Contact us in advance to confirm date and time.'
    },
    'tr.grp.title': { es: 'Reservas de grupos', en: 'Group bookings' },
    'tr.grp.p': {
      es: 'Para la gestión y reserva de grupos, es necesario contactar previamente. Las reservas están sujetas a disponibilidad y deben confirmarse con antelación.',
      en: 'Group bookings must be arranged in advance. Reservations are subject to availability and must be confirmed beforehand.'
    },
    'tr.grp.p2': {
      es: 'La falta de confirmación puede entenderse como cancelación de la reserva.',
      en: 'Failure to confirm may be treated as cancellation of the booking.'
    },
    'tr.reserve.btn': { es: 'Solicitar reserva', en: 'Request booking' },
    'tr.grp.btn': { es: 'Reservar grupo', en: 'Book a group' },
    'tr.note.txt': {
      es: '<strong>Horarios:</strong> De 10:30 a 14:00 h y de 16:00 a 19:30 h (hasta 20:00 h en temporada estival). Los horarios pueden variar. Las tarifas especiales se aplican únicamente acreditando la condición en taquilla.',
      en: '<strong>Opening hours:</strong> 10:30 am–2:00 pm and 4:00–7:30 pm (until 8:00 pm in summer). Hours may vary. Reduced rates apply only upon verification at the ticket office.'
    },
    'tr.faq.over': { es: 'Dudas', en: 'FAQ' },
    'tr.faq.title': { es: 'Preguntas frecuentes', en: 'Frequently asked questions' },
    'tr.faq.q1': { es: '¿Cuáles son los horarios de visita?', en: 'What are the visiting hours?' },
    'tr.faq.a1': {
      es: '<p><strong>Mañanas:</strong> de 10:30 a 14:00 horas.<br><strong>Tardes:</strong> de 16:00 a 19:30 horas (hasta las 20:00 h en temporada estival).</p><p>Los horarios pueden variar según la temporada o eventos especiales. Se recomienda confirmar antes de la visita.</p>',
      en: '<p><strong>Mornings:</strong> 10:30 am to 2:00 pm.<br><strong>Afternoons:</strong> 4:00 to 7:30 pm (until 8:00 pm in summer).</p><p>Hours may vary by season or special events. We recommend confirming before your visit.</p>'
    },
    'tr.faq.q2': { es: '¿Necesito reserva previa para visitar?', en: 'Do I need to book in advance?' },
    'tr.faq.a2': {
      es: '<p>Para visitas individuales no guiadas no es necesaria reserva previa; puedes comprar la entrada directamente en taquilla.</p><p>Para visitas guiadas y grupos, la reserva previa es recomendable.</p>',
      en: '<p>For individual self-guided visits, no prior booking is required; you can buy tickets directly at the ticket office.</p><p>For guided visits and groups, advance booking is recommended.</p>'
    },
    'tr.faq.q3': { es: '¿Se admiten cambios o devoluciones de entradas?', en: 'Are ticket changes or refunds accepted?' },
    'tr.faq.a3': {
      es: '<p>Una vez adquirida y reservada la entrada, no se admiten cambios ni devoluciones, salvo en los casos de cancelación del servicio por parte del monasterio.</p>',
      en: '<p>Once a ticket has been purchased and reserved, no changes or refunds are accepted, except in cases where the monastery cancels the service.</p>'
    },
    'tr.faq.q4': { es: '¿Los descuentos son acumulables?', en: 'Can discounts be combined?' },
    'tr.faq.a4': {
      es: '<p>No, los descuentos y promociones no son acumulables entre sí. Cada descuento o promoción debe ser utilizado de manera individual.</p>',
      en: '<p>No, discounts and promotions cannot be combined. Each discount or promotion must be used individually.</p>'
    },
    'tr.faq.q5': {
      es: '¿El monasterio tiene accesibilidad para personas con movilidad reducida?',
      en: 'Is the monastery accessible for people with reduced mobility?'
    },
    'tr.faq.a5': {
      es: '<p>Disponemos de acceso adaptado en los principales espacios. Para necesidades específicas, te recomendamos que contactes con nosotros previamente.</p>',
      en: '<p>We have adapted access to the main spaces. For specific needs, we recommend contacting us beforehand.</p>'
    },

    /* ---- NOTICIAS ---- */
    'nw.over': { es: 'Prensa y medios', en: 'Press & media' },
    'nw.title': { es: 'En los medios', en: 'In the press' },
    'nw.desc': {
      es: 'El Monasterio de Cañas en la prensa regional y nacional. Haz clic en cada noticia para leer el artículo completo.',
      en: 'Monasterio de Cañas in the regional and national press. Click on each article to read the full story.'
    },
    'nw.tag1': { es: 'Cultura · Música', en: 'Culture · Music' },
    'nw.title1': {
      es: 'Cinco conciertos de lujo para disfrutar',
      en: 'Five luxury concerts to enjoy'
    },
    'nw.exc1': {
      es: 'Música y patrimonio se unen en el Monasterio de Cañas. Una propuesta cultural única que fusiona el arte sonoro con la arquitectura medieval cisterciense del siglo XII.',
      en: 'Music and heritage come together at Monasterio de Cañas. A unique cultural proposal fusing sound art with 12th-century Cistercian medieval architecture.'
    },
    'nw.tag2': { es: 'Visita · Verano', en: 'Visit · Summer' },
    'nw.title2': {
      es: 'Un tesoro por descubrir: abre sus puertas este verano',
      en: 'A treasure to discover: opens its doors this summer'
    },
    'nw.exc2': {
      es: 'El Monasterio de Cañas abre sus puertas este verano para que puedas descubrir la magia de uno de los conjuntos monásticos más singulares de La Rioja.',
      en: 'Monasterio de Cañas opens its doors this summer so you can discover the magic of one of the most singular monastic complexes in La Rioja.'
    },
    'nw.tag3': { es: 'Turismo · Patrimonio', en: 'Tourism · Heritage' },
    'nw.title3': {
      es: 'Descubre este verano la magia del Monasterio de Cañas',
      en: 'Discover the magic of Monasterio de Cañas this summer'
    },
    'nw.exc3': {
      es: 'Una visita imprescindible para todos aquellos que deseen conocer el patrimonio histórico y espiritual de La Rioja en un entorno único e incomparable.',
      en: 'A must-visit for all those who wish to discover the historical and spiritual heritage of La Rioja in a unique and incomparable setting.'
    },
    'nw.tag4': { es: 'Apertura · Temporada', en: 'Opening · Season' },
    'nw.title4': {
      es: 'La abadía de luz: podrá visitarse este verano',
      en: 'The abbey of light: open to visitors this summer'
    },
    'nw.exc4': {
      es: 'El Monasterio de Cañas amplía su calendario de visitas durante los meses de verano, ofreciendo una experiencia única en un enclave histórico de La Rioja Alta.',
      en: 'Monasterio de Cañas extends its visiting calendar during the summer months, offering a unique experience in a historic enclave of La Rioja Alta.'
    },
    'nw.readmore': { es: 'Leer en ', en: 'Read in ' },
    'nw.cta.h2': { es: '¿Quieres organizar tu visita?', en: 'Want to plan your visit?' },
    'nw.cta.desc': {
      es: 'Ponte en contacto con nosotros y te ayudamos a planificar la visita perfecta al Monasterio.',
      en: 'Get in touch and we will help you plan the perfect visit to the Monastery.'
    },
    'nw.cta.btn1': { es: 'Ver tarifas', en: 'View admission' },
    'nw.cta.btn2': { es: 'Contactar', en: 'Contact us' },

    /* ---- GALERÍA ---- */
    'gal.all': { es: 'Todos los espacios', en: 'All spaces' },
    'gal.church': { es: 'La Iglesia', en: 'The Church' },
    'gal.cloister': { es: 'El Claustro', en: 'The Cloister' },
    'gal.chapter': { es: 'Sala Capitular', en: 'Chapter House' },
    'gal.relics': { es: 'Sala de Reliquias', en: 'Relic Room' },
    'gal.cilla': { es: 'Cilla‑Museo', en: 'Cilla‑Museum' },
    'gal.s1': { es: 'La Iglesia', en: 'The Church' },
    'gal.s2': { es: 'El Claustro', en: 'The Cloister' },
    'gal.s3': { es: 'Sala Capitular', en: 'Chapter House' },
    'gal.s4': { es: 'Sala de Reliquias', en: 'Relic Room' },
    'gal.s5': { es: 'Cilla‑Museo', en: 'Cilla‑Museum' },
    'gal.note': {
      es: 'Las fotografías reales del monasterio se mostrarán en esta galería. Para añadirlas, coloca las imágenes en la carpeta <code>assets/img/galeria/</code> y actualiza los elementos con las rutas correspondientes.',
      en: 'Real photographs of the monastery will be displayed here. To add them, place images in the <code>assets/img/galeria/</code> folder and update the elements with the corresponding paths.'
    },
  };

  /* =================================================================
     NÚCLEO
  ================================================================= */
  const LS_KEY = 'ml_lang';
  let lang = localStorage.getItem(LS_KEY) || (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es';
  // Fix: previous line has a precedence bug — recompute cleanly
  const saved = localStorage.getItem(LS_KEY);
  if (saved === 'en' || saved === 'es') lang = saved;
  else lang = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es';

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

    // Lang toggle buttons
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'es' ? 'EN' : 'ES';
      btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    });
  }

  function setLang(newLang) {
    lang = newLang;
    localStorage.setItem(LS_KEY, lang);
    apply();
  }

  // Public
  window.i18n = { t, setLang, getLang: () => lang, apply };

  // Wire toggle clicks (delegated — works even after nav injection)
  document.addEventListener('click', function (e) {
    if (e.target.closest('.lang-toggle')) {
      setLang(lang === 'es' ? 'en' : 'es');
    }
  });

  // Apply as soon as DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }

})();