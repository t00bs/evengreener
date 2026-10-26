/* Shared sample data + annotation pin helper for the EvenGreener CRO redesign pages.
   Product facts are placeholders standing in for Shopify metafields; review counts are Yotpo placeholders. */
(function () {
  // Real imagery, all from evengreener.com (Shopify CDN). Plain keys = product packshots,
  // L_ = lifestyle shots from the same product listings, C_ = EvenGreener's own collection photography.
  var CDN = 'https://cdn.shopify.com/s/files/1/0601/7240/2945/';
  var IMG_PATHS = {
    butt100: 'files/250L_1.jpg?v=1741456993',
    butt210: 'files/210-WHITE.jpg?v=1740867653',
    rocky: 'files/GFROCK400DG_1.jpg?v=1755855306',
    barrel: 'files/Barrica_420_212132-1.jpg?v=1739485937',
    diverter: 'products/Shopify_Products_RainDiverterKit_3c65d1fd-10aa-4af8-b2b5-5ae0dbf69247.jpg?v=1668421763',
    stand: 'files/35lt-45lt-Water-Butt-Stand-No-Butt.jpg?v=1739312064',
    link: 'products/Shopify_Products_WaterButtLinkKit.jpg?v=1655464830',
    tap: 'products/Shopify_Products_WaterButtTap.jpg?v=1655464858',
    conv330: 'products/Shopify_Products_BlackwallComposter_330lGreen.jpg?v=1666259920',
    conv220: 'products/Shopify_Products_BlackwallComposter_220lGreen.jpg?v=1773057524',
    johanna: 'products/Shopify_Products_GreenJohanna_5c59f5f9-e07a-4d9a-be57-0ca97615b0a7.jpg?v=1655463595',
    hot450: 'products/hotbinmega450litrebin.webp?v=1678801390',
    hot700: 'products/hotbinmega700.webp?v=1678801793',
    thermo: 'files/ETCTHERM500_2.jpg?v=1772314196',
    aerator: 'products/Shopify_Products_Aerator.jpg?v=1697618216',
    activator: 'files/New_labels_-_10.06.26.jpg?v=1781090940',
    jacket: 'products/Shopify_Products_GreenJohannaWithWinterJacket2_22507658-c608-4030-a915-268762186f1e.jpg?v=1649839058',
    reencle: 'files/71CWa8HfINL._AC_SX679.jpg?v=1779116826',
    filter: 'files/EDLOMICFIL_1.webp?v=1786358820',
    microbes: 'files/EDLOMIPODS_1.webp?v=1786361699',
    mat: 'files/g185g_compact_tidy_tray_green_1.jpg?v=1738795674',
    beehive: 'products/BeehiveComposter_Rowlinson3.jpg?v=1667901916',
    twobay: 'products/Wooden905litreModularCompostBin.jpg?v=1652698705',
    slatted: 'products/Thermo-Wood600LitreCompostBin2.jpg?v=1652700951',
    lid: 'products/Lidfor480litreWoodenModularCompostBin.jpg?v=1652698415',
    maze180: 'products/CompostTumbler180LMaze2.jpg?v=1675868467',
    maze245: 'products/MazeCompostTumble.jpg?v=1655466316',
    compactT: 'files/DR180TUMBLER_1.jpg?v=1752570697',
    bokTwin: 'files/GGSBOKBX2_1.webp?v=1790343895',
    bokSingle: 'files/GGSBOKBUC_1.webp?v=1785015894',
    bran: 'files/Shopify_Products_BokashiBran_fe2b0e71-3a9a-473f-9ba1-5e550ab946be.jpg?v=1698681473',
    liners: 'files/CW0017C7Compostableliners_f3e8b333-ac01-458b-8862-e0443ec29f9c.jpg?v=1781705542',
    wormery: 'products/Shopify_Products_MazeWormFarm2.jpg?v=1656580372',
    worms: 'products/pppg_5_f7b4ee4c-baf7-42a6-9b7b-0b93a2062b72.png?v=1652091649',
    wormFood: 'files/WGWC1LBUC.webp?v=1755779632',
    coir: 'files/WORM_FARM_TRAY_057a8552-b636-4314-acd4-3f4cd5200949.jpg?v=1736768898',
    caddy5: 'products/Shopify_Products_StraightGreenCaddy5l2.jpg?v=1655463212',
    caddy7: 'products/Shopify_Products_StraightGreenCaddy7l.jpg?v=1645442640',
    steelCaddy: 'files/12b7d3d795337bd3cd0453ed5bc0158bb320629d99e6b69f141de6f75e6bfee6_827208eb-a8bd-441a-82bd-8f28f17a711f.jpg?v=1779884019',
    cone: 'products/Shopify_Products_GreenCone3.jpg?v=1656579422',
    selfPot: 'files/ce38ec5d441d4d2d93bc34d9f148cba21f72adde58a91cb93889c64a9252ccd9_690f098f-831f-4cad-8eac-cb219624b3b3.png?v=1774613643',
    indoorCan: 'files/WH6LWCGRN_1.jpg?v=1755787211',
    mister: 'products/Elho0.7LitreWhiteRecycledPlasticPlantMister.webp?v=1676647554',
    spikes: 'files/G77BigDrippaPhoto.jpg?v=1758033553',
    rec2: 'products/Shopify_Products_OilCointainer2.jpg?v=1734354575',
    recStack: 'products/Shopify_Products_StraightGreenCaddy23l.jpg?v=1645442641',
    recSlim: 'files/batterymax02.jpg?v=1736851795',
    recBags: 'files/ba763753c874c06a6e2f1a048c744441dcf8a8e8669eae7c8d3896c091fc0af7.png?v=1788126449',
    kneeler: 'files/DREVAKNEEL_1.jpg?v=1755384045',
    trug: 'files/DRGARCAD_1.jpg?v=1755382154',
    sieve: 'products/Shopify_Products_Sieve3.jpg?v=1655463920',
    labels: 'files/GloveleeAmazonWB2.jpg?v=1721894565',
    planter: 'files/pltub50_squareplanter_main.jpg?v=1723737150',
    raised: 'files/pltro100_rectangularplanter_main_RGPPLTRO100.jpg?v=1723584843',
    windowBox: 'files/1daf38fb-c8d2-4e83-a1b3-502315239934.jpg?v=1742895325',
    growBag: 'files/PlantBoxSetof3_9ba63217-81cf-4cc0-839f-ee33396141ee.jpg?v=1732546681',
    can9: 'files/W3020LSE-Value-Watering-Can-Green-10ltr-2.2-Gallon-Rose-On-768x512.jpg?v=1753343485',
    reel: 'products/Shopify_Products_HarcostarExtensionHos.jpg?v=1645442641',
    drip: 'files/20-Cleanable-Three-Element-Dripper-Extension-Kit-Contents-white-800-1000x1000.webp?v=1777320259',
    pump: 'files/DRWBPUMP350W_1.jpg?v=1752582148',
    feeder: 'files/GFWF3GBBBADLX_2.webp?v=1763591032',
    bugHotel: 'files/6ccdc65b841281a781dca9d6e3dbcafbc678279c9b886b84e746b4e55777efb5.jpg?v=1787521414',
    hedgehog: 'files/608a7db08117fbb62b594f466eacc399746d1605d08da387e4684f1ce660fa4c.png?v=1790885036',
    beeHotel: 'files/T4A1553.jpg?v=1772748530',
    kidsWorm: 'files/266c627528f8a4ca7747682ec822fd70c822194831eacdb780ad0ba36e523e6d.png?v=1790885153',
    kidsCan: 'files/f06e4b796bb12f73a118fe1d2e19f646e8d150eca1d4ee9557e2b1e281a14064.jpg?v=1761058782',
    growKit: 'files/94663c9731f440585b8d68a50c4b3d214290a2a38585cd5b457bc42f43fc5735.jpg?v=1787521415',
    L_butt210: 'files/STWB210KIT_2.png?v=1779893097',
    L_rocky: 'files/GFROCK400DG_1.jpg?v=1755855306',
    L_barrel: 'files/Barrica_420_212132-2.jpg?v=1739485937',
    L_ward: 'files/STWB250KIT_6.jpg?v=1780083647',
    L_ward3: 'files/STWB250KIT_3.png?v=1780083577',
    L_conv330: 'products/BlackwallComposter330litreGreeninsitu.jpg?v=1666259920',
    L_johanna0: 'products/Shopify_Products_GreenJohanna.jpg?v=1655463595',
    L_johanna2: 'products/grnjod_1.jpg?v=1655463595',
    L_johanna3: 'products/Shopify_Products_GreenJohanna3.jpg?v=1655463595',
    L_jacket0: 'files/grnjojacketd_2_e41530ad-8edd-475d-9a8a-dc217e2f87af.jpg?v=1730413117',
    L_jacket3: 'files/Shopify_Products_GreenJohanna4.jpg?v=1730413033',
    L_hot700: 'products/hotbinmega700litree.webp?v=1678801503',
    L_hot450: 'products/hotbinmega450litree.webp?v=1678801390',
    L_diverter: 'products/RainDiverterKit.jpg?v=1668421763',
    L_steelCaddy: 'files/42666fc447ff8d73f0921dc0998853754cc5342e47481ec612f38ab6251965c7_9b806f02-68a8-409c-a31c-386f9111fc18.jpg?v=1779884019',
    L_indoorCan: 'files/WH6LWCGRN_2.jpg?v=1755787238',
    L_twobay: 'products/Wooden905litreModularCompostBin.jpg?v=1652698705',
    L_harco: 'products/Shopify_Products_HarcostarMagnum5.jpg?v=1655464085',
    L_novara: 'files/TPTNOV280SLA_5.jpg?v=1761162585',
    L_prestige: 'files/PR100MANTSAN_2.jpg?v=1763381598',
    L_cubus: 'files/GF1000CUBUSGRN_1_0f38ad53-8c16-4f8e-8f04-a35c532a2408.jpg?v=1753342029',
    L_tower: 'files/Tower_Stone_HYPRTS350ANT_2.webp?v=1744814519',
    L_maze180: 'products/180LTumblerinaction.webp?v=1675941798',
    L_reencle: 'files/71CWa8HfINL._AC_SX679.jpg?v=1779116826',
    L_sieve: 'products/Shopify_Products_Sieve4.jpg?v=1655463920',
    L_bok: 'files/GGSBOKBUC_3.webp?v=1785015894',
    C_waterButts: 'collections/Bestselling_Water_Butts_at_EvenGreener.webp?v=1743288069',
    C_factory: 'collections/eg-factory_still-0005.jpg?v=1722374426',
    C_gardenAcc: 'collections/Gardening_Accessories.webp?v=1697803605',
    C_gardenRange: 'collections/Gardening_Page.webp?v=1697810599',
    C_greenCone: 'collections/GGS_0916.jpg?v=1743290553',
    C_hot: 'collections/Hot_Composters_to_buy_at_EvenGreener.webp?v=1733326470',
    C_hotbin: 'collections/HOTBIN_Hot_Compost_Bins.webp?v=1729532935',
    C_planters: 'collections/planters_col.webp?v=1742139313',
    C_rainsaver: 'collections/eg-location_still-rainsaver-0063.jpg?v=1748722203',
    C_kitchen: 'collections/Composting_Accessories.webp?v=1743289946',
    C_hedgehog: 'collections/Hedgehog_Haus.webp?v=1761505124',
    C_kids: 'collections/Children_s_Range.webp?v=1683896201',
    C_caddyOutside: 'collections/G118MiniOdourFreeCompostCaddyinuse.jpg?v=1733579407',
    C_wormFarm: 'collections/190911_Maze173_2.jpg?v=1727349712',
    C_tank: 'collections/Selection_of_Water_tanks.webp?v=1746279658',
    L_rec2: 'products/Shopify_Products_CookingOilRecyclingContainer.jpg?v=1734354569',
    C_olla: 'collections/watering_cans_collection.webp?v=1757272654'
  };
  function img(key, w) { var p = IMG_PATHS[key]; return p ? CDN + p + (p.indexOf('?') > -1 ? '&' : '?') + 'width=' + (w || 800) : undefined; }
  var ALIAS = { compost330: 'conv330', graf: 'rocky', hotbin450: 'hot450', hotbin700: 'hot700' };
  // Lifestyle tiles in the mega menu (By capacity, By style, Knowledge hub)
  var TILE = {
    'Under 100 litres': 'L_prestige', '100 to 250 litres': 'L_butt210', '250 to 500 litres': 'L_harco', 'Over 500 litres': 'L_cubus',
    'Slimline': 'L_ward', 'Wall tanks': 'L_rocky', 'Stone effect': 'L_tower', 'Classic barrel': 'L_barrel',
    'Which composter is right for me?': 'C_hot', 'How to start composting at home': 'L_conv330', 'How to set up a water butt': 'L_ward3', 'Water-saving tips for summer gardens': 'L_indoorCan',
    'Will my composter smell?': 'L_johanna3', 'Can I compost cooked food?': 'C_greenCone', 'How do I fit a diverter?': 'L_diverter', 'Delivery and returns': 'C_factory',
    'Can I use wastewater in my garden?': 'C_rainsaver', 'Composting through winter': 'L_hot450', 'Wildlife-friendly gardens': 'C_hedgehog', 'Cutting kitchen waste': 'C_kitchen',
    'Email our Customer Care Team': 'L_harco', 'Bulk enquiries': 'C_factory', 'Track an order': 'C_waterButts', 'Returns': 'L_hot450'
  };
  // Blog posts and guides
  var POST = {
    'Which composter is right for me?': 'C_hot', 'How to start composting at home': 'L_conv330', 'Hot composting: compost in 1 to 3 months': 'C_hotbin',
    'How to set up a water butt': 'L_ward3', 'Composting in a flat': 'L_steelCaddy', 'Water-saving tips for summer gardens': 'L_indoorCan',
    'Can I compost cooked food?': 'C_greenCone', 'Composting through winter': 'L_hot450', 'Making a wildlife-friendly corner': 'C_hedgehog'
  };
  // Category and collection cards
  var CAT = {
    'Water butts and tanks': 'C_waterButts', 'Composting': 'L_hot700', 'Indoor and kitchen': 'C_kitchen', 'In the garden': 'C_gardenRange',
    'Slimline water butts': 'L_ward', 'Wall tanks': 'L_rocky', 'Classic barrels': 'L_barrel', 'Diverters and accessories': 'L_diverter',
    'Standard composters': 'L_conv330', 'Hot composters': 'C_hotbin', 'Wooden composters': 'L_twobay', 'Tumblers': 'L_maze180',
    'Bokashi composters': 'L_bok', 'Worm composters': 'C_wormFarm', 'Electric composters': 'L_reencle', 'Accessories': 'L_sieve',
    'Kitchen caddies': 'C_kitchen', 'Indoor recycling': 'L_rec2', 'Indoor watering': 'C_olla', 'Food waste management': 'C_caddyOutside',
    'Planters': 'C_planters', 'Wildlife corner': 'C_hedgehog', 'Gifts under £30': 'C_gardenAcc', 'Gifts for children': 'C_kids'
  };
  var byTitle = {};
  function keyFor(o) { if (!o) return null; var k = o.id && (ALIAS[o.id] || o.id); if (k && IMG_PATHS[k]) return k; return (o.title && byTitle[o.title]) || null; }
  // Image for any product-ish object: explicit image, then id, then exact title. Lifestyle-kind cards get the lifestyle shot.
  function itemImg(o, w) { if (!o) return undefined; if (o.image) return o.image; var k = keyFor(o); if (!k) return undefined; if (o.kind === 'lifestyle' && IMG_PATHS['L_' + k]) return img('L_' + k, w || 900); return img(k, w || 600); }
  function addImg(o) { if (o && !o.image) { var u = itemImg(o); if (u) o.image = u; } return o; }
  // Toby's standing rule: packshots fill their frame edge to edge (the DS pads them). PDP main image: white well, contain.
  try {
    var st = document.createElement('style'); st.setAttribute('data-eg-imagery', '');
    st.textContent = '.eg-media.eg-media--packshot>img{object-fit:cover;padding:0}.eg-media:has(>img){color:transparent}.eg-media.eg-media--pdp-main{background:#fff}.eg-media.eg-media--pdp-main>img{object-fit:contain;padding:0}.eg-media.eg-media--fill{aspect-ratio:auto;height:100%}';
    (document.head || document.documentElement).appendChild(st);
  } catch (e) {}
  function col(title, links) { return { title: title, links: links.map(function (l) { return typeof l === 'string' ? { label: l } : l; }) }; }
  // Each menu: columns (mobile accordion) + featured (desktop: sub-collection list | 4 products for the hovered one)
  function P(title, price, extra) { return Object.assign({ title: title, price: price }, extra || {}); }
  function T(title) { return { title: title, kind: 'lifestyle', image: TILE[title] ? img(TILE[title], 600) : undefined }; }
  function F(label, products, cta) { return { label: label, href: '#', cta: cta || 'Shop all', products: products, image: products[0] && products[0].image }; }
  function top(label, featured, mobileLinks) {
    return { label: label, href: '#', mega: { columns: [col(label, mobileLinks || featured.map(function (f) { return f.label; }))], featured: featured } };
  }
  var p = {
    butt100: P('Straight 100 Litre Slimline Water Butt Kit', 44.99), butt210: P('Straight 210 Litre Water Butt Kit', 54.99),
    rocky: P('Graf Rocky Junior 300 Litre Wall Tank', 299.99, { wasPrice: 439.99 }), barrel: P('Classic 350 Litre Barrel Water Butt', 89.99),
    diverter: P('Rainwater Diverter Kit', 14.99), stand: P('Water Butt Stand', 24.99), link: P('Water Butt Link Kit', 9.99), tap: P('Replacement Water Butt Tap', 6.99),
    conv330: P('Straight 330 Litre Recycled Compost Converter', 39.99, { from: true }), conv220: P('Straight 220 Litre Compost Converter', 34.99),
    johanna: P('Green Johanna 330L Compost Bin', 124.99), hot450: P('HOTBIN Mega 450 Litre Hot Composting Bin', 480), hot700: P('HOTBIN Mega 700 Litre Hot Composting Bin', 660),
    thermo: P('Compost Thermometer', 19.99), aerator: P('Compost Aerator', 16.99), activator: P('Compost Activator', 9.99), jacket: P('Green Johanna Insulating Jacket', 79.99),
    reencle: P('Reencle Electric Composter', 399, { from: true }), filter: P('Reencle Filter Pack', 29.99), microbes: P('Reencle Microbes', 19.99), mat: P('Countertop Mat', 14.99),
    beehive: P('Strata Wooden Beehive Composter', 149.99), twobay: P('Strata Two Bay Wooden Composter', 189.99), slatted: P('Slatted Wooden Compost Bin', 69.99), lid: P('Wooden Compost Bin Lid', 24.99),
    maze180: P('Maze 180 Litre Compost Tumbler', 185.99), maze245: P('Maze 245 Litre Compost Tumbler', 229.99), compactT: P('Compact Compost Tumbler', 119.99),
    bokTwin: P('Bokashi Bin Twin Pack', 59.99), bokSingle: P('Bokashi Bin', 34.99), bran: P('Bokashi Bran 1kg', 9.99), liners: P('Compostable Caddy Liners', 6.99),
    wormery: P('Maze Worm Farm Wormery', 79.99), worms: P('Wormery Starter Worms', 24.99), wormFood: P('Worm Food', 8.99), coir: P('Coir Bedding Block', 6.99),
    caddy5: P('Straight 5 Litre Green Kitchen Caddy', 9.99), caddy7: P('Straight 7 Litre Green Kitchen Caddy', 9.99), steelCaddy: P('Stainless Steel Kitchen Caddy', 24.99),
    cone: P('Green Cone Food Waste Digester', 109.99),
    selfPot: P('Self-watering Plant Pot', 14.99), indoorCan: P('Indoor Watering Can', 12.99), mister: P('Plant Misting Bottle', 7.99), spikes: P('Watering Spikes', 9.99),
    rec2: P('Two Compartment Recycling Bin', 39.99), recStack: P('Stacking Recycling Boxes', 29.99), recSlim: P('Slim Recycling Bin', 24.99), recBags: P('Recycling Bag Set', 12.99),
    kneeler: P('Kneeling Pad', 9.99), trug: P('Garden Trug', 14.99), sieve: P('Compost Sieve', 12.99), labels: P('Plant Labels', 4.99),
    planter: P('Recycled Plastic Planter', 24.99), raised: P('Raised Bed', 89.99), windowBox: P('Window Box', 14.99), growBag: P('Grow Bag Planter', 9.99),
    can9: P('9 Litre Watering Can', 12.99), reel: P('Hose Reel', 39.99), drip: P('Drip Irrigation Kit', 29.99), pump: P('Water Butt Pump', 49.99),
    feeder: P('Bird Feeder', 14.99), bugHotel: P('Bug Hotel', 19.99), hedgehog: P('Hedgehog House', 39.99), beeHotel: P('Bee Hotel', 16.99),
    kidsWorm: P('Kids\u2019 Wormery', 29.99), kidsCan: P('Kids\u2019 Watering Can', 7.99), growKit: P('Grow Your Own Kit', 12.99)
  };
  Object.keys(p).forEach(function (k) { p[k].image = img(k, 600); byTitle[p[k].title] = k; });
  var nav = [
    top('Water butts and tanks', [
      F('Shop all', [p.butt100, p.rocky, p.butt210, p.barrel], 'Shop all water butts and tanks'),
      F('By capacity', [T('Under 100 litres'), T('100 to 250 litres'), T('250 to 500 litres'), T('Over 500 litres')], 'Shop by capacity'),
      F('By style', [T('Slimline'), T('Wall tanks'), T('Stone effect'), T('Classic barrel')], 'Shop by style'),
      F('Accessories and diverters', [p.diverter, p.stand, p.link, p.tap]),
      F('Bestsellers', [p.butt100, p.rocky, p.diverter, p.butt210], 'Shop bestsellers')
    ], ['By capacity', 'By style', 'Accessories and diverters', { label: 'Bestsellers', strong: true }]),
    top('Composting', [
      F('Standard composters', [p.conv330, p.conv220, p.johanna, p.slatted]),
      F('Hot composters', [p.hot450, p.hot700, p.johanna, p.thermo]),
      F('Food waste composting', [p.johanna, p.cone, p.bokTwin, p.reencle], 'Shop food waste composting'),
      F('Electric composters', [p.reencle, p.filter, p.microbes, p.mat]),
      F('Wooden composters', [p.beehive, p.twobay, p.slatted, p.lid]),
      F('Tumblers', [p.maze180, p.maze245, p.compactT, p.activator]),
      F('Bokashi composters', [p.bokTwin, p.bokSingle, p.bran, p.liners]),
      F('Worm composters', [p.wormery, p.worms, p.wormFood, p.coir]),
      F('Accessories', [p.thermo, p.aerator, p.activator, p.jacket])
    ]),
    top('Indoor and kitchen', [
      F('Kitchen caddies', [p.caddy7, p.caddy5, p.steelCaddy, p.liners]),
      F('Electric composters', [p.reencle, p.filter, p.microbes, p.mat]),
      F('Indoor watering', [p.selfPot, p.indoorCan, p.mister, p.spikes]),
      F('Indoor recycling', [p.rec2, p.recStack, p.recSlim, p.recBags]),
      F('Food waste management', [p.johanna, p.cone, p.caddy7, p.bokTwin]),
      F('Bokashi composters', [p.bokTwin, p.bokSingle, p.bran, p.liners])
    ]),
    top('In the garden', [
      F('Garden accessories', [p.kneeler, p.trug, p.sieve, p.labels]),
      F('Planters', [p.planter, p.raised, p.windowBox, p.growBag]),
      F('Watering', [p.can9, p.reel, p.drip, p.pump]),
      F('Wildlife corner', [p.feeder, p.bugHotel, p.hedgehog, p.beeHotel])
    ]),
    top('Gifts', [
      F('Under £30', [p.caddy7, p.thermo, p.bugHotel, p.bran], 'Shop gifts under £30'),
      F('Gifts for gardeners', [p.wormery, p.trug, p.beeHotel, p.sieve]),
      F('Gifts for children', [p.kidsWorm, p.kidsCan, p.bugHotel, p.growKit])
    ]),
    top('Knowledge hub', [
      F('How-to guides', [T('Which composter is right for me?'), T('How to start composting at home'), T('How to set up a water butt'), T('Water-saving tips for summer gardens')], 'View all guides'),
      F('FAQs', [T('Will my composter smell?'), T('Can I compost cooked food?'), T('How do I fit a diverter?'), T('Delivery and returns')], 'View all FAQs'),
      F('Blog', [T('Can I use wastewater in my garden?'), T('Composting through winter'), T('Wildlife-friendly gardens'), T('Cutting kitchen waste')], 'View the blog'),
      F('Contact us', [T('Email our Customer Care Team'), T('Bulk enquiries'), T('Track an order'), T('Returns')], 'Contact us')
    ])
  ];
  var utility = [{ label: 'Delivery' }, { label: 'Bulk enquiries' }];
  var scopes = ['All', 'Water butts and tanks', 'Composting', 'Indoor and kitchen', 'In the garden', 'Gifts'];
  var footer = [
    { title: 'Shop', links: ['Water butts and tanks', 'Composting', 'Indoor and kitchen', 'In the garden', 'Gifts'] },
    { title: 'Knowledge hub', links: ['How-to guides', 'FAQs', 'Blog', 'Contact us'] },
    { title: 'Good to know', links: ['About us', 'Bulk enquiries', 'Outside the UK', 'Customer reviews'] },
    { title: 'Connect', links: ['Instagram', 'TikTok', 'YouTube', 'Facebook', 'Pinterest'] },
    { title: 'Account', links: ['Manage account', 'Orders and returns'] },
    { title: 'Policies', links: ['Terms', 'Privacy', 'Cookies', 'Delivery and returns'] }
  ];

  var bestsellers = [
    { id: 'butt100', title: 'Straight 100 Litre Slimline Water Butt Kit', price: 44.99, rating: 4.8, reviews: 28, badges: ['bestseller', 'made-in-britain'], imageLabel: 'Packshot on mist' },
    { id: 'johanna', title: 'Green Johanna 330L Compost Bin', price: 124.99, rating: 4.9, reviews: 23, badges: ['bestseller', 'recycled'] },
    { id: 'compost330', title: 'Straight 330 Litre Recycled Compost Converter', price: 39.99, rating: 4.7, reviews: 41, badges: ['made-in-britain'], capacities: ['220L', '330L'] },
    { id: 'graf', title: 'Graf Rocky Junior 300 Litre Wall Tank', price: 299.99, wasPrice: 439.99, rating: 4.6, reviews: 9, badges: [{ type: 'sale', saving: 140 }], kind: 'lifestyle', imageLabel: 'Lifestyle' },
    { id: 'hotbin450', title: 'HOTBIN Mega 450 Litre Hot Composting Bin', price: 480, rating: 4.8, reviews: 12, badges: ['made-in-britain'] },
    { id: 'caddy7', title: 'Straight 7 Litre Green Kitchen Caddy', price: 9.99, rating: 4.9, reviews: 11, badges: ['recycled'] }
  ];

  var homeReviews = [
    { rating: 5, title: 'Easy to set up', body: 'Arrived quickly, went together in no time and it is already full of worms. Really pleased.', author: 'Helen', location: 'Leeds', product: 'Straight 330 Litre Compost Converter' },
    { rating: 5, title: 'Great advice', body: 'The Customer Care Team helped me pick the right size for a small garden. Exactly what I needed.', author: 'Tom', location: 'York', product: 'HOTBIN Mega 450 Litre' },
    { rating: 4, title: 'Does what it says', body: 'Fills up quicker than I expected after rain. Thinking about adding a second one.', author: 'Priya', location: 'Bristol', product: 'Straight 100 Litre Water Butt Kit' }
  ];

  var cart = [
    { id: 'compost330', title: 'Straight 330 Litre Recycled Compost Converter', variant: '330L, Green', price: 39.99, qty: 1 },
    { id: 'caddy7', title: 'Straight 7 Litre Green Kitchen Caddy', variant: 'Green', price: 9.99, qty: 1 }
  ];
  var aerator = { id: 'aerator', title: 'Compost Aerator', why: 'Pairs with your compost converter', text: 'Turns air into the heap so it breaks down faster.', price: 16.99, rating: 4.7, reviews: 18 };
  var payments = ['Apple Pay', 'Google Pay', 'PayPal', 'Klarna', 'Visa', 'Mastercard', 'Amex'];

  function C(id, title, price, rating, reviews, type, cap, extra) { return Object.assign({ id: id, title: title, price: price, rating: rating, reviews: reviews, type: type, cap: cap, material: 'Recycled plastic', stock: 'in' }, extra || {}); }
  var composting = [
    C('compost330', 'Straight 330 Litre Recycled Compost Converter', 39.99, 4.7, 41, 'Standard', 330, { from: true, badges: ['bestseller', 'made-in-britain'], capacities: ['220L', '330L'], uk: true, excerpt: 'Simple, sturdy bin for garden waste and raw peelings.' }),
    C('johanna', 'Green Johanna 330L Compost Bin', 124.99, 4.9, 23, 'Hot', 330, { badges: ['bestseller', 'recycled'], cooked: true, excerpt: 'Hot composts cooked food, meat and dairy all year.' }),
    C('hotbin450', 'HOTBIN Mega 450 Litre Hot Composting Bin', 480, 4.8, 12, 'Hot', 450, { badges: ['made-in-britain'], uk: true, cooked: true, stock: { status: 'low', count: 3 }, excerpt: 'Compost in 1 to 3 months, even through winter.' }),
    C('maze180', 'Maze 180 Litre Compost Tumbler', 185.99, 4.5, 19, 'Tumbler', 180, { excerpt: 'Turn the drum every few days for compost in 4 to 8 weeks.' }),
    C('reencle', 'Reencle Electric Composter', 399, 4.6, 15, 'Electric', 14, { from: true, badges: ['new'], cooked: true, material: 'Plastic', capacities: ['Grey', 'White'], excerpt: 'Turns kitchen scraps into compost in 24 hours, indoors.' }),
    C('twobay', 'Strata Two Bay Wooden Composter', 189.99, 4.7, 8, 'Wooden', 650, { wasPrice: 229.99, badges: [{ type: 'sale', saving: 40 }], material: 'Wood', kind: 'lifestyle', imageLabel: 'Lifestyle', excerpt: 'Fill one bay while the other matures.' }),
    C('bokTwin', 'Bokashi Bin Twin Pack', 59.99, 4.6, 34, 'Bokashi', 32, { badges: ['bestseller'], cooked: true, excerpt: 'Ferments all food waste in the kitchen, no smell.' }),
    C('wormery', 'Maze Worm Farm Wormery', 79.99, 4.4, 21, 'Worm', 60, { excerpt: 'Worms turn scraps into rich compost and liquid feed.' }),
    C('conv220', 'Straight 220 Litre Compost Converter', 34.99, 4.6, 17, 'Standard', 220, { badges: ['made-in-britain'], uk: true, excerpt: 'Our compact bin for smaller gardens.' }),
    C('beehive', 'Strata Wooden Beehive Composter', 149.99, 4.7, 8, 'Wooden', 380, { material: 'Wood', excerpt: 'Traditional beehive look that suits a cottage garden.' }),
    C('hotbin700', 'HOTBIN Mega 700 Litre Hot Composting Bin', 660, 4.8, 7, 'Hot', 700, { uk: true, cooked: true, badges: ['made-in-britain'], excerpt: 'For allotments and big households.' }),
    C('slatted', 'Slatted Wooden Compost Bin', 69.99, 4.3, 6, 'Wooden', 300, { material: 'Wood', stock: 'out', excerpt: 'Open slats let air in for a classic heap.' })
  ];
  var water = [
    C('butt100', 'Straight 100 Litre Slimline Water Butt Kit', 44.99, 4.8, 28, 'Slimline', 100, { badges: ['bestseller', 'made-in-britain'], uk: true, excerpt: 'Fits a narrow side return.' }),
    C('butt210', 'Straight 210 Litre Water Butt Kit', 54.99, 4.7, 36, 'Classic', 210, { badges: ['made-in-britain'], uk: true, excerpt: 'Everything you need to start collecting.' }),
    C('graf', 'Graf Rocky Junior 300 Litre Wall Tank', 299.99, 4.6, 9, 'Wall tank', 300, { wasPrice: 439.99, badges: [{ type: 'sale', saving: 140 }], kind: 'lifestyle', imageLabel: 'Lifestyle', excerpt: 'Stone effect tank that sits flat to the wall.' }),
    C('barrel', 'Classic 350 Litre Barrel Water Butt', 89.99, 4.5, 14, 'Classic', 350, { excerpt: 'Traditional barrel look, big capacity.' }),
    C('diverter', 'Rainwater Diverter Kit', 14.99, 4.6, 52, 'Accessory', 0, { excerpt: 'Connects your downpipe to the butt.' }),
    C('stand', 'Water Butt Stand', 24.99, 4.7, 19, 'Accessory', 0, { excerpt: 'Raises the tap to fit a watering can.' })
  ];
  var catalogue = composting.concat(water, [C('caddy7', 'Straight 7 Litre Green Kitchen Caddy', 9.99, 4.9, 11, 'Caddy', 7, { badges: ['recycled'] }), C('caddy5', 'Straight 5 Litre Green Kitchen Caddy', 9.99, 4.8, 9, 'Caddy', 5), C('cone', 'Green Cone Food Waste Digester', 109.99, 4.4, 27, 'Digester', 0, { cooked: true })]);
  function facetsFor(list, groups) {
    return groups.map(function (g) { return { title: g.title, options: g.options.map(function (o) { return { label: o, count: list.filter(function (pp) { return g.test(pp, o); }).length }; }) }; });
  }
  var capTest = function (pp, o) { var c = pp.cap; return o === 'Under 200L' ? c > 0 && c < 200 : o === 'Over 400L' ? c > 400 : c >= 200 && c <= 400; };
  var priceTest = function (pp, o) { var v = pp.price; return o === 'Under £50' ? v < 50 : o === 'Over £200' ? v > 200 : v >= 50 && v <= 200; };
  var compostFacets = facetsFor(composting, [
    { title: 'Type', options: ['Standard', 'Hot', 'Tumbler', 'Wooden', 'Electric', 'Bokashi', 'Worm'], test: function (pp, o) { return pp.type === o; } },
    { title: 'Capacity', options: ['Under 200L', '200 to 400L', 'Over 400L'], test: capTest },
    { title: 'Price', options: ['Under £50', '£50 to £200', 'Over £200'], test: priceTest },
    { title: 'Material', options: ['Recycled plastic', 'Wood', 'Plastic'], test: function (pp, o) { return pp.material === o; } },
    { title: 'Good to know', options: ['Takes cooked food', 'Made in Britain'], test: function (pp, o) { return o === 'Made in Britain' ? !!pp.uk : !!pp.cooked; } }
  ]);
  function filterFn(pp, active) {
    if (!active.length) return true;
    var g = {};
    active.forEach(function (k) { var i = k.indexOf(': '); var t = k.slice(0, i); (g[t] = g[t] || []).push(k.slice(i + 2)); });
    return Object.keys(g).every(function (t) { return g[t].some(function (o) {
      if (t === 'Type' || t === 'Style') return pp.type === o;
      if (t === 'Capacity') return capTest(pp, o);
      if (t === 'Price') return priceTest(pp, o);
      if (t === 'Material') return pp.material === o;
      if (t === 'Good to know') return o === 'Made in Britain' ? !!pp.uk : !!pp.cooked;
      return true; }); });
  }
  function post(title, topic, mins, excerpt) { return { title: title, topic: topic, excerpt: excerpt, meta: (topic === 'Blog' ? 'Blog' : 'Guide') + ' · ' + mins + ' min read', image: POST[title] ? img(POST[title], 900) : undefined }; }
  var posts = [
    post('Which composter is right for me?', 'Composting', 7, 'Space, speed and what you want to compost. Three questions that point you to the right bin.'),
    post('How to start composting at home', 'Composting', 6, 'Everything you need to turn scraps into rich compost, whatever the size of your space.'),
    post('Hot composting: compost in 1 to 3 months', 'Composting', 8, 'How hot composters work, what to put in them and how to keep the heat up all year.'),
    post('How to set up a water butt', 'Water saving', 5, 'Fitting a diverter, choosing a spot and getting the most from every downpour.'),
    post('Composting in a flat', 'Food waste', 5, 'Kitchen caddies, bokashi and electric composters that fit small spaces and won\u2019t smell.'),
    post('Water-saving tips for summer gardens', 'Water saving', 4, 'Simple habits that keep borders and pots going through a dry spell.'),
    post('Can I compost cooked food?', 'Food waste', 4, 'What goes in which bin, and the composters that take meat, fish and dairy.'),
    post('Composting through winter', 'Composting', 5, 'Keep your heap working when the temperature drops.'),
    post('Making a wildlife-friendly corner', 'Gardening', 6, 'Bug hotels, hedgehog houses and planting that brings the garden to life.')
  ];
  var orders = [
    { id: 'EG10482', date: '12 October 2026', status: 'Dispatched', total: 164.98, items: [{ title: 'Green Johanna 330L Compost Bin', variant: 'Green', qty: 1, price: 124.99 }, { title: 'Straight 330 Litre Recycled Compost Converter', variant: '330L, Green', qty: 1, price: 39.99 }] },
    { id: 'EG10217', date: '3 August 2026', status: 'Delivered', total: 64.98, items: [{ title: 'Straight 210 Litre Water Butt Kit', variant: 'Green', qty: 1, price: 54.99 }, { title: 'Straight 7 Litre Green Kitchen Caddy', variant: 'Green', qty: 1, price: 9.99 }] },
    { id: 'EG09864', date: '21 April 2026', status: 'Delivered', total: 19.99, items: [{ title: 'Compost Thermometer', variant: 'One size', qty: 1, price: 19.99 }] }
  ];
  var addresses = [
    { name: 'Helen Wright', lines: ['14 Allotment Lane', 'Headingley', 'Leeds', 'LS6 3AB'], phone: '07700 900123', isDefault: true },
    { name: 'Helen Wright', lines: ['The Old Barn, Moor Road', 'Ilkley', 'LS29 8QT'], phone: '', isDefault: false }
  ];

  [bestsellers, composting, water, catalogue, cart, [aerator]].forEach(function (l) { l.forEach(addImg); });
  orders.forEach(function (o) { o.items.forEach(addImg); });

  function pins(layer) {
    if (!layer) return [];
    var base = layer.getBoundingClientRect();
    var maxL = document.documentElement.clientWidth - 30;
    var want = param('notes');
    var only = want && want !== 'all' && want !== '1' ? want.split(',') : null;
    return Array.prototype.slice.call(document.querySelectorAll('[data-note]')).filter(function (el) {
      var n = el.getAttribute('data-note');
      return only ? only.indexOf(n) > -1 : n.charAt(0) !== 'D' || !!document.querySelector('.eg-drawer');
    }).map(function (el) {
      var r = el.getBoundingClientRect();
      if (!r.width && !r.height) return null;
      var cs = getComputedStyle(el);
      if (cs.visibility === 'hidden') return null;
      return { n: el.getAttribute('data-note'), top: Math.max(2, r.top - base.top - 8) + 'px', left: Math.max(2, Math.min(r.left - base.left - 8, maxL - base.left)) + 'px' };
    }).filter(Boolean);
  }
  function shell(c) {
    var st = c.state || {}; var m = (st.w || window.innerWidth) < 900;
    var items = cart.concat(st.added || []);
    return {
      mobile: m, desktop: !m, gut: m ? '16px' : 'var(--eg-gutter)', secPad: m ? '40px' : '80px',
      nav: nav, utility: utility, scopes: scopes, footerCols: footer,
      bagCount: items.length, bagTotal: items.reduce(function (s, i) { return s + i.price * i.qty; }, 0),
      drawerOpen: !!st.drawer, drawerItems: items,
      openDrawer: function () { c.setState({ drawer: true }); }, closeDrawer: function () { c.setState({ drawer: false }); },
      quickAdd: function (pp) { c.setState(function (s) { var a = s.added || []; return { drawer: true, added: a.some(function (x) { return x.id === pp.id; }) ? a : a.concat([{ id: pp.id, title: pp.title, variant: 'One size', price: pp.price, qty: 1, image: itemImg(pp) }]) }; }); }
    };
  }
  function fmt(v) { return '£' + Number(v).toFixed(2); }
  function param(k) { try { return new URLSearchParams(location.search || (location.hash || '').replace(/^#/, '')).get(k); } catch (e) { return null; } }

  window.EGData = { nav: nav, utility: utility, scopes: scopes, footer: footer, bestsellers: bestsellers, homeReviews: homeReviews, cart: cart, aerator: aerator, payments: payments, composting: composting, water: water, catalogue: catalogue, compostFacets: compostFacets, facetsFor: facetsFor, filterFn: filterFn, capTest: capTest, priceTest: priceTest, posts: posts, orders: orders, addresses: addresses };
  window.EGUtil = { pins: pins, fmt: fmt, param: param, shell: shell };
  window.EGImg = {
    src: img, item: itemImg,
    post: function (t, w) { return POST[t] ? img(POST[t], w || 900) : undefined; },
    cat: function (t, w) { return CAT[t] ? img(CAT[t], w || 900) : undefined; },
    hero: img('C_rainsaver', 1600), team: img('C_factory', 1600), story: img('L_harco', 1200), brands: img('C_hotbin', 1200),
    // Green Johanna PDP gallery, in the order the design shows it
    johanna: [
      { kind: 'lifestyle', label: 'In a garden border', src: img('L_johanna2', 1200) },
      { kind: 'packshot', label: 'Front packshot', src: img('johanna', 1200) },
      { kind: 'packshot', label: 'Lid and aerator', src: img('L_jacket3', 1200) },
      { kind: 'lifestyle', label: 'Adding kitchen scraps', src: img('L_johanna3', 1200) },
      { kind: 'lifestyle', label: 'Emptying the base hatch', src: img('L_johanna0', 1200) },
      { kind: 'lifestyle', label: 'With the insulating jacket', src: img('L_jacket0', 1200) }
    ]
  };
})();
