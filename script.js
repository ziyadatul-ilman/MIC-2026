/* =========================================================
   STYLEMATCH — SCRIPT.JS
   Daftar isi:
   1. Data Dummy (Outfit, Color Match, Fashion Tips)
   2. Helper: membuat ilustrasi SVG outfit & kartu outfit
   3. Outfit Finder (filter + render hasil)
   4. Color Match (pilih warna + render hasil)
   5. Trending Outfit + Search
   6. Fashion Tips
   7. Modal Detail Outfit
   8. Favorite Button (dummy)
   9. Navbar mobile, scroll aktif, scroll to top
   ========================================================= */

/* ---------- 1. DATA DUMMY ---------- */

// Data utama outfit. "colors" berisi kode hex untuk swatch strip.
const outfitData = [
  {
    id: 1,
    name: "Sunday Linen Set",
    style: "Minimalist",
    occasion: "Casual",
    color: "Cream",
    colors: ["#EDE0D0", "#FFFDFB", "#B08968"],
    desc: "Setelan linen longgar warna netral, nyaman untuk aktivitas santai sepanjang hari.",
  },
  {
    id: 2,
    name: "Soft Latte Knit",
    style: "Clean Girl",
    occasion: "Casual",
    color: "Brown",
    colors: ["#B08968", "#F7EFE5", "#6B4F3F"],
    desc: "Sweater rajut warna latte dipadukan celana krem, simpel tapi tetap terlihat effortless.",
  },
  {
    id: 3,
    name: "Candlelit Dinner Dress",
    style: "Coquette",
    occasion: "Date",
    color: "Pink",
    colors: ["#F3D9DC", "#E3A9AE", "#FFFDFB"],
    desc: "Dress midi satin soft pink dengan detail pita kecil, manis untuk makan malam romantis.",
  },
  {
    id: 4,
    name: "Blush Date Night",
    style: "Old Money",
    occasion: "Date",
    color: "Beige",
    colors: ["#ede0d0", "#e3a9ae", "#6b4f3f"],
    desc: "Blazer beige dipadukan rok midi, elegan dan tetap hangat untuk kencan malam hari.",
  },
  {
    id: 5,
    name: "Golden Hour Party",
    style: "Korean",
    occasion: "Party",
    color: "Black",
    colors: ["#2c2420", "#B08968", "#F3D9DC"],
    desc: "Dress hitam potongan simpel dengan aksen aksesori emas, cocok untuk pesta malam hari.",
  },
  {
    id: 6,
    name: "Street Glow Night",
    style: "Streetwear",
    occasion: "Party",
    color: "Black",
    colors: ["#2c2420", "#8A7A6D", "#E3A9AE"],
    desc: "Crop jacket oversized dan celana kargo, gaya berani untuk pesta yang lebih santai.",
  },
  {
    id: 7,
    name: "Boardroom Beige",
    style: "Old Money",
    occasion: "Office",
    color: "Beige",
    colors: ["#ede0d0", "#6b4f3f", "#fffdfb"],
    desc: "Blazer terstruktur dan celana high-waist, tampil profesional tanpa kehilangan gaya.",
  },
  {
    id: 8,
    name: "Quiet Luxury Desk",
    style: "Minimalist",
    occasion: "Office",
    color: "Grey",
    colors: ["#8A7A6D", "#FFFDFB", "#B08968"],
    desc: "Kemeja abu lembut dan rok pensil, kombinasi rapi untuk hari kerja yang padat.",
  },
  {
    id: 9,
    name: "Island Breeze Set",
    style: "Clean Girl",
    occasion: "Vacation",
    color: "White",
    colors: ["#FFFDFB", "#F3D9DC", "#B08968"],
    desc: "Atasan crochet putih dan rok linen, ringan dan adem untuk liburan pantai.",
  },
  {
    id: 10,
    name: "Sunset Wanderer",
    style: "Korean",
    occasion: "Vacation",
    color: "Cream",
    colors: ["#F7EFE5", "#E3A9AE", "#B08968"],
    desc: "Dress mini bermotif ringan dipadukan topi anyaman, siap untuk foto liburan.",
  },
  {
    id: 11,
    name: "Ivory Vow Gown",
    style: "Old Money",
    occasion: "Wedding",
    color: "White",
    colors: ["#FFFDFB", "#EDE0D0", "#B08968"],
    desc: "Gaun ivory dengan siluet A-line klasik, anggun untuk menghadiri pesta pernikahan.",
  },
  {
    id: 12,
    name: "Rosewater Guest Look",
    style: "Coquette",
    occasion: "Wedding",
    color: "Pink",
    colors: ["#F3D9DC", "#E3A9AE", "#FFFDFB"],
    desc: "Dress satin dusty pink dengan lengan balon, manis untuk tamu undangan pernikahan.",
  },
  {
    id: 13,
    name: "Everyday Oversized",
    style: "Streetwear",
    occasion: "Casual",
    color: "Grey",
    colors: ["#8A7A6D", "#2c2420", "#FFFDFB"],
    desc: "Hoodie oversized dan jeans baggy, andalan untuk hari santai tanpa banyak mikir.",
  },
  {
    id: 14,
    name: "Café Study Date",
    style: "Coquette",
    occasion: "Date",
    color: "Cream",
    colors: ["#F7EFE5", "#E3A9AE", "#6B4F3F"],
    desc: "Cardigan rajut krem dan rok mini plisket, manis untuk kencan santai di kafe.",
  },
  {
    id: 15,
    name: "Resort Linen Two-Piece",
    style: "Minimalist",
    occasion: "Vacation",
    color: "Beige",
    colors: ["#EDE0D0", "#FFFDFB", "#8A7A6D"],
    desc: "Set linen dua potong warna netral, ringan dan mudah dipadukan selama liburan.",
  },
  {
    id: 16,
    name: "After Hours Slip",
    style: "Korean",
    occasion: "Party",
    color: "Pink",
    colors: ["#E3A9AE", "#2c2420", "#F3D9DC"],
    desc: "Slip dress satin dipadukan blazer mini, mudah bertransisi dari kantor ke pesta.",
  },
  {
    id: 17,
    name: "Seoul Casual Layers",
    style: "Korean",
    occasion: "Casual",
    color: "Grey",
    colors: ["#8A7A6D", "#FFFDFB", "#F3D9DC"],
    desc: "Cardigan grey longgar dengan kaos putih dan rok mini pink, gaya kasual khas jalanan Seoul.",
  },
  {
    id: 18,
    name: "Effortless Desk Look",
    style: "Clean Girl",
    occasion: "Office",
    color: "White",
    colors: ["#FFFDFB", "#EDE0D0", "#B08968"],
    desc: "Kemeja putih rapi, celana beige, dan rambut slicked-back untuk tampilan kantor yang bersih.",
  },
  {
    id: 19,
    name: "Sunday Brunch Clean",
    style: "Clean Girl",
    occasion: "Date",
    color: "Cream",
    colors: ["#F7EFE5", "#FFFDFB", "#E3A9AE"],
    desc: "Tank top cream dan rok satin putih dengan aksen blush, ringan untuk brunch romantis.",
  },
  {
    id: 20,
    name: "Coastal Old Money Set",
    style: "Old Money",
    occasion: "Vacation",
    color: "Navy",
    colors: ["#2C3E50", "#FFFDFB", "#C19A6B"],
    desc: "Polo rajut navy, celana putih, dan loafers camel, kesan liburan mewah tanpa berlebihan.",
  },
  {
    id: 21,
    name: "Utility Chic",
    style: "Streetwear",
    occasion: "Office",
    color: "Khaki",
    colors: ["#C3B091", "#2c2420", "#FFFDFB"],
    desc: "Blazer khaki oversized dengan celana kargo hitam, streetwear yang tetap pantas ke kantor.",
  },
  {
    id: 22,
    name: "Off-Duty Denim Date",
    style: "Streetwear",
    occasion: "Date",
    color: "Denim",
    colors: ["#5A7891", "#FFFDFB", "#B08968"],
    desc: "Jaket denim, tank top putih, dan rok panjang, santai tapi tetap manis untuk kencan.",
  },
  {
    id: 23,
    name: "Bow Baby Night Out",
    style: "Coquette",
    occasion: "Party",
    color: "Pink",
    colors: ["#F3D9DC", "#2c2420", "#E3A9AE"],
    desc: "Mini dress pink dengan pita besar dan boots hitam, manis dengan sentuhan berani.",
  },
  {
    id: 24,
    name: "Clean Line Guest Dress",
    style: "Minimalist",
    occasion: "Wedding",
    color: "Beige",
    colors: ["#EDE0D0", "#FFFDFB", "#8A7A6D"],
    desc: "Dress beige potongan bersih tanpa banyak detail, anggun untuk tamu pernikahan.",
  },
  {
    id: 25,
    name: "Low-Rise Denim Vibes",
    style: "Y2K",
    occasion: "Casual",
    color: "Denim",
    colors: ["#5A7891", "#F3D9DC", "#FFFDFB"],
    desc: "Jeans low-rise dengan baby tee pink dan tas kecil, nostalgia awal 2000-an yang playful.",
  },
  {
    id: 26,
    name: "Metallic Y2K Night",
    style: "Y2K",
    occasion: "Party",
    color: "Grey",
    colors: ["#8A7A6D", "#C9A227", "#2c2420"],
    desc: "Top metalik, rok mini hitam, dan aksesori berkilau untuk pesta malam bertema retro.",
  },
  {
    id: 27,
    name: "Butterfly Baby Tee Date",
    style: "Y2K",
    occasion: "Date",
    color: "Pink",
    colors: ["#F3D9DC", "#FFFDFB", "#B8D8E8"],
    desc: "Baby tee motif kupu-kupu dengan rok denim mini, manis dan ceria untuk kencan santai.",
  },
  {
    id: 28,
    name: "Sporty Poolside Y2K",
    style: "Y2K",
    occasion: "Vacation",
    color: "White",
    colors: ["#FFFDFB", "#B8D8E8", "#E3A9AE"],
    desc: "Crop top putih, track skirt biru muda, dan kacamata kecil, segar untuk liburan pantai.",
  },
  {
    id: 29,
    name: "Meadow Picnic Dress",
    style: "Cottagecore",
    occasion: "Casual",
    color: "Sage",
    colors: ["#A8B79C", "#F7EFE5", "#B08968"],
    desc: "Dress sage dengan lengan puff dan keranjang anyaman, pas untuk piknik di taman.",
  },
  {
    id: 30,
    name: "Garden Tea Date",
    style: "Cottagecore",
    occasion: "Date",
    color: "Dusty Rose",
    colors: ["#C9A0A0", "#F7EFE5", "#A8B79C"],
    desc: "Blouse renda dusty rose dan rok floral, lembut untuk minum teh sore berdua.",
  },
  {
    id: 31,
    name: "Countryside Wanderer",
    style: "Cottagecore",
    occasion: "Vacation",
    color: "Terracotta",
    colors: ["#C87A5B", "#F7EFE5", "#B08968"],
    desc: "Sundress terracotta dengan topi jerami, hangat untuk liburan di pedesaan.",
  },
  {
    id: 32,
    name: "Wildflower Guest Dress",
    style: "Cottagecore",
    occasion: "Wedding",
    color: "Sage",
    colors: ["#A8B79C", "#FFFDFB", "#F3D9DC"],
    desc: "Dress midi sage dengan detail bunga halus, romantis untuk pernikahan outdoor.",
  },
  {
    id: 33,
    name: "Varsity Prep Blazer",
    style: "Preppy",
    occasion: "Office",
    color: "Navy",
    colors: ["#2C3E50", "#FFFDFB", "#C19A6B"],
    desc: "Blazer navy, kemeja putih, dan rok pleated, rapi ala sekolah elite untuk bekerja.",
  },
  {
    id: 34,
    name: "Weekend Prep Polo",
    style: "Preppy",
    occasion: "Casual",
    color: "Khaki",
    colors: ["#C3B091", "#2C3E50", "#FFFDFB"],
    desc: "Polo putih, celana khaki, dan sweater navy di bahu, klasik untuk akhir pekan.",
  },
  {
    id: 35,
    name: "Prep School Sweetheart",
    style: "Preppy",
    occasion: "Date",
    color: "Burgundy",
    colors: ["#5E2129", "#F7EFE5", "#8A7A6D"],
    desc: "Cardigan burgundy, kemeja krem, dan rok kotak-kotak, manis dan cerdas.",
  },
  {
    id: 36,
    name: "Holiday Prep Party",
    style: "Preppy",
    occasion: "Party",
    color: "Burgundy",
    colors: ["#5E2129", "#C9A227", "#FFFDFB"],
    desc: "Blazer velvet burgundy dengan rok mini putih dan aksen emas untuk pesta akhir tahun.",
  },
  {
    id: 37,
    name: "Desert Boho Maxi",
    style: "Boho Chic",
    occasion: "Vacation",
    color: "Terracotta",
    colors: ["#C87A5B", "#F7EFE5", "#D4A24C"],
    desc: "Maxi dress terracotta mengalir dengan kalung layered, cocok untuk liburan gurun.",
  },
  {
    id: 38,
    name: "Free Spirit Layers",
    style: "Boho Chic",
    occasion: "Casual",
    color: "Mustard",
    colors: ["#D4A24C", "#B08968", "#F7EFE5"],
    desc: "Vest mustard, blouse krem, dan celana lebar, layering santai yang penuh karakter.",
  },
  {
    id: 39,
    name: "Sunset Boho Date",
    style: "Boho Chic",
    occasion: "Date",
    color: "Terracotta",
    colors: ["#C87A5B", "#F3D9DC", "#B08968"],
    desc: "Wrap dress terracotta dengan anting statement, hangat untuk kencan saat senja.",
  },
  {
    id: 40,
    name: "Beach Boho Wedding Guest",
    style: "Boho Chic",
    occasion: "Wedding",
    color: "Cream",
    colors: ["#F7EFE5", "#C87A5B", "#A8B79C"],
    desc: "Dress krem berenda dengan aksesori rotan, ringan untuk pernikahan di pantai.",
  },
  {
    id: 41,
    name: "Library Scholar Blazer",
    style: "Dark Academia",
    occasion: "Office",
    color: "Brown",
    colors: ["#4A2C2A", "#F7EFE5", "#B08968"],
    desc: "Blazer cokelat tua, turtleneck krem, dan rok tweed, intelektual dan hangat.",
  },
  {
    id: 42,
    name: "Vintage Reading Nook",
    style: "Dark Academia",
    occasion: "Casual",
    color: "Brown",
    colors: ["#6B4F3F", "#DCD0BA", "#2C3E50"],
    desc: "Sweater rajut cokelat, rok plaid, dan kaus kaki tinggi, nyaman ala perpustakaan tua.",
  },
  {
    id: 43,
    name: "Candlelit Study Date",
    style: "Dark Academia",
    occasion: "Date",
    color: "Burgundy",
    colors: ["#5E2129", "#4A2C2A", "#F7EFE5"],
    desc: "Blouse krem dengan vest burgundy dan rok panjang gelap, misterius namun elegan.",
  },
  {
    id: 44,
    name: "Academia Soirée",
    style: "Dark Academia",
    occasion: "Party",
    color: "Black",
    colors: ["#2c2420", "#5E2129", "#C9A227"],
    desc: "Dress hitam berlengan panjang dengan aksesori emas antik untuk pesta bertema klasik.",
  },
  {
    id: 45,
    name: "Ballet Flat Daydream",
    style: "Balletcore",
    occasion: "Casual",
    color: "White",
    colors: ["#FFFDFB", "#B8D8E8", "#F3D9DC"],
    desc: "Wrap cardigan putih, rok tulle pendek, dan ballet flats, lembut dan feminin.",
  },
  {
    id: 46,
    name: "Soft Ballerina Date",
    style: "Balletcore",
    occasion: "Date",
    color: "Pink",
    colors: ["#F3D9DC", "#FFFDFB", "#E3A9AE"],
    desc: "Wrap top pink pucat dengan rok flowy dan pita satin di rambut, manis untuk kencan.",
  },
  {
    id: 47,
    name: "Balletcore Desk Look",
    style: "Balletcore",
    occasion: "Office",
    color: "Beige",
    colors: ["#EDE0D0", "#F3D9DC", "#8A7A6D"],
    desc: "Kardigan beige, rok midi plisket, dan flats, feminin dengan nuansa kantor yang kalem.",
  },
  {
    id: 48,
    name: "Ballet Pink Night",
    style: "Balletcore",
    occasion: "Party",
    color: "Pink",
    colors: ["#E3A9AE", "#2c2420", "#F3D9DC"],
    desc: "Satin slip dress pink dengan sepatu ballet strap dan blazer hitam untuk pesta malam.",
  },
  {
    id: 49,
    name: "Hangang Picnic Date",
    style: "Korean",
    occasion: "Date",
    color: "Pink",
    colors: ["#F4C2C2", "#FFFDFB", "#8A7A6D"],
    desc: "Cardigan pastel, rok mini plisket, dan sneakers putih, manis ala kencan santai di tepi sungai.",
  },
  {
    id: 50,
    name: "Seoul Office Neutral",
    style: "Korean",
    occasion: "Office",
    color: "Beige",
    colors: ["#EDE0D0", "#FFFDFB", "#8A7A6D"],
    desc: "Blazer beige oversized, kemeja putih, dan celana lurus abu, rapi khas pekerja kantoran Seoul.",
  },
  {
    id: 51,
    name: "Seoul Garden Wedding Guest",
    style: "Korean",
    occasion: "Wedding",
    color: "Lavender",
    colors: ["#C9B8D8", "#FFFDFB", "#F3D9DC"],
    desc: "Dress midi lavender berlengan balon dengan pita di pinggang, lembut untuk tamu pernikahan.",
  },
  {
    id: 52,
    name: "Slick Back Night Out",
    style: "Clean Girl",
    occasion: "Party",
    color: "Black",
    colors: ["#2c2420", "#C9A227", "#FFFDFB"],
    desc: "Slip dress hitam polos, rambut slicked-back, dan perhiasan emas tipis, pesta yang tetap terlihat bersih.",
  },
  {
    id: 53,
    name: "Satin Minimal Guest",
    style: "Clean Girl",
    occasion: "Wedding",
    color: "Champagne",
    colors: ["#F2E4C9", "#FFFDFB", "#C9A227"],
    desc: "Slip dress satin champagne dengan blazer tipis, sederhana tapi terlihat mahal di pernikahan.",
  },
  {
    id: 54,
    name: "Sunday Polo & Loafers",
    style: "Old Money",
    occasion: "Casual",
    color: "Navy",
    colors: ["#2C3E50", "#F7EFE5", "#C19A6B"],
    desc: "Polo rajut navy, celana krem, dan loafers kulit, santai tapi tetap berkelas.",
  },
  {
    id: 55,
    name: "Pearl & Velvet Evening",
    style: "Old Money",
    occasion: "Party",
    color: "Burgundy",
    colors: ["#5E2129", "#FFFDFB", "#C9A227"],
    desc: "Dress velvet burgundy dengan kalung mutiara, klasik dan mewah untuk makan malam formal.",
  },
  {
    id: 56,
    name: "Cargo City Escape",
    style: "Streetwear",
    occasion: "Vacation",
    color: "Khaki",
    colors: ["#C3B091", "#FFFDFB", "#2c2420"],
    desc: "Celana kargo, tank top putih, dan bucket hat, praktis untuk liburan keliling kota.",
  },
  {
    id: 57,
    name: "Sharp Street Guest",
    style: "Streetwear",
    occasion: "Wedding",
    color: "Black",
    colors: ["#2c2420", "#FFFDFB", "#8A7A6D"],
    desc: "Setelan hitam oversized dengan sneakers putih bersih, berani tapi tetap pantas untuk pernikahan modern.",
  },
  {
    id: 58,
    name: "Lace Trim Morning",
    style: "Coquette",
    occasion: "Casual",
    color: "Cream",
    colors: ["#F7EFE5", "#F3D9DC", "#FFFDFB"],
    desc: "Kaos berenda krem, rok mini putih, dan pita di rambut, manis untuk hari santai.",
  },
  {
    id: 59,
    name: "Soft Bow Blouse Day",
    style: "Coquette",
    occasion: "Office",
    color: "White",
    colors: ["#FFFDFB", "#F3D9DC", "#8A7A6D"],
    desc: "Blouse putih berpita di kerah dengan rok pensil pink pucat, feminin untuk kantor.",
  },
  {
    id: 60,
    name: "Pastel Seaside Ruffles",
    style: "Coquette",
    occasion: "Vacation",
    color: "Pink",
    colors: ["#F3D9DC", "#FFFDFB", "#B08968"],
    desc: "Dress ruffle pink muda dengan topi jerami dan sandal tali, manis untuk liburan pantai.",
  },
  {
    id: 61,
    name: "Quiet Evening Set",
    style: "Minimalist",
    occasion: "Date",
    color: "Black",
    colors: ["#2c2420", "#F7EFE5", "#C9A227"],
    desc: "Atasan hitam potongan bersih dan celana wide-leg krem, sederhana tapi berkesan.",
  },
  {
    id: 62,
    name: "Monochrome After Dark",
    style: "Minimalist",
    occasion: "Party",
    color: "Charcoal",
    colors: ["#3A3A3A", "#2c2420", "#8A7A6D"],
    desc: "Serba arang dari atas ke bawah dengan satu anting statement, elegan tanpa berlebihan.",
  },
  {
    id: 63,
    name: "Corporate Y2K Twist",
    style: "Y2K",
    occasion: "Office",
    color: "Grey",
    colors: ["#8A7A6D", "#FFFDFB", "#F3D9DC"],
    desc: "Blazer abu cropped, rok mini plisket, dan tas baguette kecil, kantor dengan sentuhan 2000-an.",
  },
  {
    id: 64,
    name: "Glam Y2K Guest",
    style: "Y2K",
    occasion: "Wedding",
    color: "Lilac",
    colors: ["#DCC6E0", "#FFFDFB", "#8A7A6D"],
    desc: "Dress satin lilac potongan halter dengan clutch mini, nostalgia 2000-an yang tetap sopan.",
  },
  {
    id: 65,
    name: "Lantern Garden Party",
    style: "Cottagecore",
    occasion: "Party",
    color: "Maroon",
    colors: ["#7B2D26", "#F7EFE5", "#A8B79C"],
    desc: "Dress velvet maroon berlengan puff dengan kalung bunga, hangat untuk pesta malam bertema taman.",
  },
  {
    id: 66,
    name: "Soft Cottage Workday",
    style: "Cottagecore",
    occasion: "Office",
    color: "Cream",
    colors: ["#F7EFE5", "#A8B79C", "#B08968"],
    desc: "Blouse berenda krem, rok midi hijau sage, dan cardigan tipis, lembut tapi tetap rapi.",
  },
  {
    id: 67,
    name: "Nautical Stripes Getaway",
    style: "Preppy",
    occasion: "Vacation",
    color: "Navy",
    colors: ["#2C3E50", "#FFFDFB", "#C3B091"],
    desc: "Atasan garis navy-putih, celana pendek khaki, dan sneakers kanvas, segar bergaya pelayaran.",
  },
  {
    id: 68,
    name: "Garden Party Prep",
    style: "Preppy",
    occasion: "Wedding",
    color: "Baby Blue",
    colors: ["#B8D8E8", "#FFFDFB", "#C19A6B"],
    desc: "Dress midi baby blue dengan cardigan putih dan flats, rapi dan sopan untuk pernikahan siang.",
  },
  {
    id: 69,
    name: "Fringe & Gold Night",
    style: "Boho Chic",
    occasion: "Party",
    color: "Brown",
    colors: ["#B08968", "#C9A227", "#F7EFE5"],
    desc: "Atasan fringe, rok panjang, dan perhiasan emas bertumpuk, cocok untuk pesta bernuansa festival.",
  },
  {
    id: 70,
    name: "Earthy Creative Office",
    style: "Boho Chic",
    occasion: "Office",
    color: "Olive",
    colors: ["#7C7A4E", "#F7EFE5", "#B08968"],
    desc: "Blouse olive, celana lebar krem, dan kalung etnik, kantor kreatif yang santai.",
  },
  {
    id: 71,
    name: "Old Town Wanderer",
    style: "Dark Academia",
    occasion: "Vacation",
    color: "Coffee",
    colors: ["#6F4E37", "#F7EFE5", "#7C7A4E"],
    desc: "Blazer cokelat, kemeja krem, dan rok panjang gelap, pas untuk menjelajah kota tua.",
  },
  {
    id: 72,
    name: "Velvet Scholar Guest",
    style: "Dark Academia",
    occasion: "Wedding",
    color: "Forest Green",
    colors: ["#2F4A34", "#FFFDFB", "#C9A227"],
    desc: "Dress velvet hijau tua dengan kerah putih dan mary jane, klasik dan puitis untuk pernikahan.",
  },
  {
    id: 73,
    name: "Pastel Wrap Holiday",
    style: "Balletcore",
    occasion: "Vacation",
    color: "Pink",
    colors: ["#F3D9DC", "#FFFDFB", "#B8D8E8"],
    desc: "Wrap top pink, rok tulle pendek, dan flat shoes, ringan dan lembut untuk liburan.",
  },
  {
    id: 74,
    name: "Tulle & Satin Guest",
    style: "Balletcore",
    occasion: "Wedding",
    color: "Pink",
    colors: ["#F4C2C2", "#FFFDFB", "#C9A227"],
    desc: "Dress satin pink pucat bertali bahu halus dengan sepatu ballet strap, anggun untuk pernikahan.",
  },
  {
    id: 75,
    name: "Cloud Dancer Knit Set",
    style: "Minimalist",
    occasion: "Casual",
    color: "Cream",
    colors: ["#F0EEE9", "#FFFDFB", "#B08968"],
    trend: "Cloud Dancer 2026",
    desc: "Rajut dan celana serba putih lembut ala Cloud Dancer, warna Pantone 2026 yang tenang dan mudah dipadukan.",
  },
  {
    id: 76,
    name: "Leather Bomber Edit",
    style: "Streetwear",
    occasion: "Casual",
    color: "Brown",
    colors: ["#4A2C2A", "#F7EFE5", "#2c2420"],
    trend: "Leather Bomber",
    desc: "Bomber kulit cokelat tua dengan kaos putih dan celana lurus, jaket kulit jadi andalan musim ini.",
  },
  {
    id: 77,
    name: "Chocolate Brown Tailoring",
    style: "Old Money",
    occasion: "Office",
    color: "Chocolate Brown",
    colors: ["#4A2C2A", "#F7EFE5", "#C19A6B"],
    trend: "Chocolate Brown",
    desc: "Setelan cokelat tua dengan blouse krem dan tas camel, warna cokelat yang sedang naik di musim dingin.",
  },
  {
    id: 78,
    name: "Cherry Red Accent",
    style: "Clean Girl",
    occasion: "Date",
    color: "Cherry Red",
    colors: ["#9E2A2B", "#F7EFE5", "#FFFDFB"],
    trend: "Cherry Red",
    desc: "Atasan krem dan celana putih dengan aksen merah ceri lewat tas dan flats, detail kecil yang mencolok.",
  },
  {
    id: 79,
    name: "Butter Yellow Cardigan",
    style: "Clean Girl",
    occasion: "Casual",
    color: "Butter Yellow",
    colors: ["#F2E2A0", "#FFFDFB", "#B08968"],
    trend: "Butter Yellow",
    desc: "Cardigan kuning mentega dengan kaos putih dan jeans lurus, cerah untuk hari yang mendung.",
  },
  {
    id: 80,
    name: "Satin Slip & Chunky Knit",
    style: "Coquette",
    occasion: "Date",
    color: "Cream",
    colors: ["#F7EFE5", "#C9A0A0", "#6F4E37"],
    trend: "Slip Dress",
    desc: "Slip dress satin dilapis rajut tebal, kontras lembut antara yang mengilap dan yang hangat.",
  },
  {
    id: 81,
    name: "Poetcore Satchel Look",
    style: "Dark Academia",
    occasion: "Casual",
    color: "Brown",
    colors: ["#6B4F3F", "#F7EFE5", "#2C3E50"],
    trend: "Poetcore",
    desc: "Turtleneck, blazer vintage, dan tas satchel, gaya sastrawan yang sedang naik di Pinterest.",
  },
  {
    id: 82,
    name: "Glamoratti Power Suit",
    style: "Old Money",
    occasion: "Party",
    color: "Black",
    colors: ["#2c2420", "#C9A227", "#FFFDFB"],
    trend: "Glamoratti 80s",
    desc: "Setelan baggy berbahu tegas dengan gelang emas tebal, kemewahan era 80-an versi sekarang.",
  },
  {
    id: 83,
    name: "Khaki Coded Field Look",
    style: "Streetwear",
    occasion: "Casual",
    color: "Khaki",
    colors: ["#C3B091", "#7C7A4E", "#F7EFE5"],
    trend: "Khaki Coded",
    desc: "Jaket lapangan khaki, celana plisket, dan boots, gaya penjelajah yang praktis dan kekinian.",
  },
  {
    id: 84,
    name: "Argyle Knit Day",
    style: "Preppy",
    occasion: "Casual",
    color: "Navy",
    colors: ["#2C3E50", "#C19A6B", "#B8D8E8"],
    trend: "Argyle Knit",
    desc: "Sweater argyle multiwarna dengan rok plisket dan loafers, rajut bermotif yang jadi sorotan runway.",
  },
  {
    id: 85,
    name: "Eggplant Coat Evening",
    style: "Minimalist",
    occasion: "Date",
    color: "Plum",
    colors: ["#6B3F5D", "#F7EFE5", "#2c2420"],
    trend: "Eggplant & Plum",
    desc: "Mantel warna terong dengan rajut krem dan boots hitam, ungu tua yang elegan.",
  },
  {
    id: 86,
    name: "Baby Pink Blazer",
    style: "Coquette",
    occasion: "Office",
    color: "Pink",
    colors: ["#F4C2C2", "#FFFDFB", "#8A7A6D"],
    trend: "Pink Fever",
    desc: "Blazer baby pink dengan kemeja putih dan celana abu, pink lembut yang dipakai percaya diri.",
  },
  {
    id: 87,
    name: "Track Pants & Ballet Sneakers",
    style: "Balletcore",
    occasion: "Casual",
    color: "Grey",
    colors: ["#8A7A6D", "#F3D9DC", "#FFFDFB"],
    trend: "Track Pants",
    desc: "Celana track dengan rajut oversized dan sneakers ala sepatu balet, sporty tapi tetap manis.",
  },
  {
    id: 88,
    name: "Boho Revival Maxi",
    style: "Boho Chic",
    occasion: "Date",
    color: "Brown",
    colors: ["#6F4E37", "#C87A5B", "#F7EFE5"],
    trend: "Boho Revival",
    desc: "Maxi dress bertekstur dengan jaket suede, boho yang lebih kasar dan puitis.",
  },
  {
    id: 89,
    name: "Icy Cool Blue Set",
    style: "Minimalist",
    occasion: "Party",
    color: "Baby Blue",
    colors: ["#DCEEF3", "#A9D6E5", "#FFFDFB"],
    trend: "Cool Blue",
    desc: "Set biru es dengan aksesori perak, tren warna dingin yang sedang naik di Pinterest.",
  },
  {
    id: 90,
    name: "Animal Print Midi",
    style: "Old Money",
    occasion: "Date",
    color: "Camel",
    colors: ["#C19A6B", "#2c2420", "#F7EFE5"],
    trend: "Animal Print",
    desc: "Rok midi motif macan tutul halus dengan sweater hitam dan boots, motif hewan versi lebih rapi.",
  },
  {
    id: 91,
    name: "Mint Weekend Walk",
    style: "Clean Girl",
    occasion: "Casual",
    color: "Mint Green",
    colors: ["#B6E2D3", "#FFFDFB", "#B08968"],
    desc: "Atasan mint segar, celana putih, dan sneakers krem, ringan untuk jalan santai akhir pekan.",
  },
  {
    id: 92,
    name: "Lavender Dream Date",
    style: "Coquette",
    occasion: "Date",
    color: "Lavender",
    colors: ["#C9B8D8", "#FFFDFB", "#F3D9DC"],
    desc: "Cardigan lavender, rok putih berenda, dan pita satin, lembut untuk kencan sore.",
  },
  {
    id: 93,
    name: "Emerald Gala Night",
    style: "Old Money",
    occasion: "Party",
    color: "Emerald Green",
    colors: ["#245B45", "#C9A227", "#2c2420"],
    desc: "Gaun emerald berpotongan klasik dengan aksesori emas, mewah untuk acara malam resmi.",
  },
  {
    id: 94,
    name: "Olive Utility Day",
    style: "Streetwear",
    occasion: "Casual",
    color: "Olive",
    colors: ["#7C7A4E", "#F7EFE5", "#2c2420"],
    desc: "Jaket olive, kaos krem, dan celana kargo hitam, praktis dan bergaya untuk aktivitas harian.",
  },
  {
    id: 95,
    name: "Teal Office Statement",
    style: "Minimalist",
    occasion: "Office",
    color: "Teal",
    colors: ["#4C8C86", "#FFFDFB", "#C19A6B"],
    desc: "Blouse teal dengan celana putih dan tas camel, satu warna berani di tampilan kantor yang bersih.",
  },
  {
    id: 96,
    name: "Peach Brunch Look",
    style: "Korean",
    occasion: "Date",
    color: "Peach",
    colors: ["#F0B8A0", "#FFFDFB", "#B08968"],
    desc: "Blouse peach, rok putih, dan tas kecil cokelat, hangat dan manis untuk brunch berdua.",
  },
  {
    id: 97,
    name: "Rust Autumn Walk",
    style: "Boho Chic",
    occasion: "Casual",
    color: "Rust",
    colors: ["#B7410E", "#F7EFE5", "#6F4E37"],
    desc: "Sweater rust, rok panjang krem, dan boots kulit, hangat untuk jalan sore di musim gugur.",
  },
  {
    id: 98,
    name: "Wine Evening Slip",
    style: "Korean",
    occasion: "Party",
    color: "Wine",
    colors: ["#6D1E28", "#2c2420", "#C9A227"],
    desc: "Slip dress wine dengan blazer hitam tipis dan anting emas, elegan untuk pesta malam.",
  },
  {
    id: 99,
    name: "Cobalt Blazer Day",
    style: "Preppy",
    occasion: "Office",
    color: "Cobalt Blue",
    colors: ["#1E4E8C", "#FFFDFB", "#C19A6B"],
    desc: "Blazer cobalt dengan kemeja putih dan loafers camel, tegas dan rapi untuk kantor.",
  },
  {
    id: 100,
    name: "Mustard Sunny Skirt",
    style: "Cottagecore",
    occasion: "Casual",
    color: "Mustard",
    colors: ["#D4A24C", "#F7EFE5", "#A8B79C"],
    desc: "Rok mustard, blouse krem, dan cardigan sage, cerah dan hangat untuk hari santai.",
  },
  {
    id: 101,
    name: "Baby Blue Skater Set",
    style: "Y2K",
    occasion: "Casual",
    color: "Baby Blue",
    colors: ["#B8D8E8", "#FFFDFB", "#F3D9DC"],
    desc: "Atasan crop baby blue dan rok skater putih dengan sneakers, ceria khas gaya 2000-an.",
  },
  {
    id: 102,
    name: "Plum Velvet Date",
    style: "Dark Academia",
    occasion: "Date",
    color: "Plum",
    colors: ["#6B3F5D", "#F7EFE5", "#C9A227"],
    desc: "Blouse krem dengan vest velvet plum dan aksesori emas antik, misterius untuk kencan malam.",
  },
  {
    id: 103,
    name: "Camel Coat Classic",
    style: "Old Money",
    occasion: "Casual",
    color: "Camel",
    colors: ["#C19A6B", "#F7EFE5", "#2c2420"],
    desc: "Coat camel panjang dengan rajut krem dan celana hitam, klasik yang tak pernah salah.",
  },
  {
    id: 104,
    name: "Navy Satin Wedding Guest",
    style: "Old Money",
    occasion: "Wedding",
    color: "Navy",
    colors: ["#2C3E50", "#C9A227", "#FFFDFB"],
    desc: "Dress satin navy dengan aksesori emas tipis, anggun dan tenang untuk tamu pernikahan.",
  },
  {
    id: 105,
    name: "Dusty Rose Wrap Dress",
    style: "Clean Girl",
    occasion: "Date",
    color: "Dusty Rose",
    colors: ["#C9A0A0", "#FFFDFB", "#B08968"],
    desc: "Wrap dress dusty rose dengan sandal tipis dan tas kecil, sederhana dan romantis.",
  },
  {
    id: 106,
    name: "Charcoal Knit Casual",
    style: "Korean",
    occasion: "Casual",
    color: "Charcoal",
    colors: ["#3A3A3A", "#FFFDFB", "#B8D8E8"],
    desc: "Rajut arang longgar dengan kemeja baby blue dan celana lurus, tenang ala jalanan Seoul.",
  },
  {
    id: 107,
    name: "Terracotta Sunset Set",
    style: "Clean Girl",
    occasion: "Vacation",
    color: "Terracotta",
    colors: ["#C87A5B", "#F7EFE5", "#B08968"],
    desc: "Set dua potong terracotta dengan sandal krem, hangat untuk liburan di pantai saat senja.",
  },
  {
    id: 108,
    name: "Lilac Satin Party",
    style: "Y2K",
    occasion: "Party",
    color: "Lilac",
    colors: ["#DCC6E0", "#FFFDFB", "#8A7A6D"],
    desc: "Atasan satin lilac, rok mini perak lembut, dan clutch mungil, berkilau untuk pesta.",
  },
  {
    id: 109,
    name: "Forest Academia Coat",
    style: "Dark Academia",
    occasion: "Casual",
    color: "Forest Green",
    colors: ["#2F4A34", "#F7EFE5", "#6F4E37"],
    desc: "Coat hijau tua dengan turtleneck krem dan rok cokelat, hangat bernuansa perpustakaan tua.",
  },
  {
    id: 110,
    name: "Mauve Cardigan Date",
    style: "Coquette",
    occasion: "Date",
    color: "Mauve",
    colors: ["#B784A7", "#FFFDFB", "#8A7A6D"],
    desc: "Cardigan mauve, rok putih mini, dan pita kecil, lembut untuk kencan santai.",
  },
];

// Outfit yang ditandai trending (mengambil beberapa id dari outfitData)
// Outfit yang sedang trending (punya label "trend" di data). Tren dirangkum dari laporan Fall/Winter 2026 dan Pinterest Predicts 2026.
const trendingIds = [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

// Data pemadanan warna sederhana untuk section Color Match
const colorMatchData = {
  // --- Netral & Basic ---
  White: {
    hex: "#FFFDFB",
    matches: [
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Brown", hex: "#B08968" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Dress putih polos dipadukan blazer beige dan heels cokelat, tampilan clean girl yang effortless.",
    accessories: ["Anting mutiara", "Belt kulit tipis", "Sunglasses bulat"],
  },
  "Off-White": {
    hex: "#F8F6F2",
    matches: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Black", hex: "#2c2420" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
    ],
    outfitExample: "Knit off-white dipadukan celana camel, basic tapi selalu terlihat rapi.",
    accessories: ["Tas kulit camel", "Sneakers putih", "Jam tangan gold"],
  },
  Cream: {
    hex: "#F7EFE5",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Soft Pink", hex: "#F3D9DC" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Atasan cream dipadukan celana putih dan tas kulit cokelat muda — kombinasi netral yang selalu aman dan terlihat mahal.",
    accessories: ["Kalung emas tipis", "Tas anyaman", "Sandal nude"],
  },
  Ivory: {
    hex: "#F5F0E6",
    matches: [
      { name: "Brown", hex: "#B08968" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
    ],
    outfitExample: "Blouse ivory dipadukan rok hitam, kombinasi klasik yang selalu terlihat rapi dan mahal.",
    accessories: ["Perhiasan emas tipis", "Heels nude", "Tas kulit hitam"],
  },
  Beige: {
    hex: "#EDE0D0",
    matches: [
      { name: "Brown", hex: "#B08968" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Blazer beige, kaos putih, dan celana grey — kombinasi kantor yang tenang dan profesional.",
    accessories: ["Jam tangan minimalis", "Tas tote", "Loafers"],
  },
  Sand: {
    hex: "#E8D9BE",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Denim Blue", hex: "#5A7891" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Outer sand dipadukan jeans denim blue, kombinasi kasual yang selalu terlihat pas.",
    accessories: ["Tas tote kanvas", "Sneakers putih", "Topi bucket"],
  },
  Camel: {
    hex: "#C19A6B",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Black", hex: "#2c2420" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Coat camel klasik dengan turtleneck hitam, kombinasi 'old money' yang tidak pernah salah.",
    accessories: ["Boots kulit cokelat", "Tas kulit besar", "Scarf motif"],
  },
  Brown: {
    hex: "#B08968",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Black", hex: "#2c2420" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Coat cokelat muda dilapis atasan putih dan celana krem, hangat dan terasa 'old money'.",
    accessories: ["Tas kulit cokelat", "Boots ankle", "Scarf motif"],
  },
  Khaki: {
    hex: "#C3B091",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Olive", hex: "#7C7A4E" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Jaket khaki dipadukan kaos putih dan celana hitam, gaya utility yang tetap simpel.",
    accessories: ["Sling bag kanvas", "Boots", "Topi bucket"],
  },
  Taupe: {
    hex: "#8B7D6B",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Sweater taupe dengan celana cream, netral banget dan gampang dipadukan apa saja.",
    accessories: ["Tas kulit nude", "Flat shoes", "Anting emas kecil"],
  },
  Grey: {
    hex: "#8A7A6D",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Pink", hex: "#F3D9DC" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Sweater grey dengan rok pink pastel, lembut namun tetap modern.",
    accessories: ["Beanie rajut", "Sneakers putih", "Tas selempang kecil"],
  },
  "Slate Grey": {
    hex: "#6E7B8B",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Blazer slate grey dengan kemeja putih, formal namun tetap terasa modern.",
    accessories: ["Jam tangan silver", "Tas kulit hitam", "Loafers"],
  },
  "Denim Blue": {
    hex: "#5A7891",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Sand", hex: "#E8D9BE" },
      { name: "Off-White", hex: "#F8F6F2" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Jaket denim blue dengan atasan off-white, kasual klasik yang selalu bisa diandalkan.",
    accessories: ["Sneakers putih", "Tas kanvas", "Kacamata bulat"],
  },
  Charcoal: {
    hex: "#3A3A3A",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Baby Blue", hex: "#B8D8E8" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Turtleneck charcoal dengan celana beige, modern dan gampang banget dipadukan.",
    accessories: ["Jam tangan hitam", "Tas kulit hitam", "Sneakers putih"],
  },
  Black: {
    hex: "#2c2420",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Soft Pink", hex: "#F3D9DC" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress hitam simpel dengan cardigan soft pink, kontras lembut yang tetap terlihat rapi.",
    accessories: ["Perhiasan emas", "Heels hitam", "Tas mini"],
  },
  Navy: {
    hex: "#2C3E50",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Brown", hex: "#B08968" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Blazer navy dipadukan celana putih dan flat shoes cream, rapi dan tetap santai untuk kerja.",
    accessories: ["Kalung emas simpel", "Tas kulit cokelat", "Jam tangan minimalis"],
  },
  "Midnight Navy": {
    hex: "#1B263B",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress midnight navy dengan cardigan camel, gelap tapi tetap terasa hangat dan elegan.",
    accessories: ["Anting emas", "Tas kulit camel", "Heels hitam"],
  },

  // --- Pastel Lembut ---
  Pink: {
    hex: "#F3D9DC",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Top soft pink dengan rok grey flanel dan flat shoes putih, manis tapi tetap kalem.",
    accessories: ["Scrunchie satin", "Clutch kecil", "Anting mutiara"],
  },
  "Blush Pink": {
    hex: "#F4C2C2",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Top blush pink dengan rok grey, feminin tapi tetap terlihat tenang dan elegan.",
    accessories: ["Anting mutiara", "Clutch kecil", "Flat shoes"],
  },
  "Baby Blue": {
    hex: "#B8D8E8",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Kemeja baby blue dipadukan celana beige, segar dan cocok untuk suasana santai di siang hari.",
    accessories: ["Anting mutiara", "Tas kanvas kecil", "Sneakers putih"],
  },
  "Powder Blue": {
    hex: "#CBE0E8",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Set powder blue dua potong, lembut dan calming, cocok untuk daily look yang effortless.",
    accessories: ["Jam tangan silver", "Tas kanvas", "Sneakers putih"],
  },
  "Sky Blue": {
    hex: "#A9D6E5",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Denim Blue", hex: "#5A7891" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Kemeja sky blue dengan celana putih, segar dan ringan untuk dipakai sehari-hari.",
    accessories: ["Sneakers putih", "Tas kanvas", "Kacamata bulat"],
  },
  Lavender: {
    hex: "#C9B8D8",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Soft Pink", hex: "#F3D9DC" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress lavender lembut dengan cardigan putih, manis dan terasa dreamy untuk hangout sore.",
    accessories: ["Scrunchie satin", "Flat shoes putih", "Clutch kecil"],
  },
  "Pistachio Green": {
    hex: "#C3D4B5",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Brown", hex: "#B08968" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Blouse pistachio dipadukan rok cream, segar dan jadi favorit musim semi tahun ini.",
    accessories: ["Anting mutiara", "Tas rotan mini", "Sandal nude"],
  },
  "Sage Green": {
    hex: "#A8B79C",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Cardigan sage green dengan rok linen cream, tenang dan terasa dekat dengan alam.",
    accessories: ["Anting kayu", "Tas anyaman rotan", "Sandal nude"],
  },
  "Butter Yellow": {
    hex: "#F2E2A0",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Cardigan butter yellow dengan jeans putih, ceria dan lagi banyak dipakai musim ini.",
    accessories: ["Tas anyaman", "Sneakers putih", "Kacamata bulat"],
  },
  Peach: {
    hex: "#F0B8A0",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Brown", hex: "#B08968" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Top peach dipadukan rok putih, ceria dan lembut untuk suasana musim semi.",
    accessories: ["Anting emas kecil", "Sandal nude", "Tas mini rotan"],
  },
  "Dusty Rose": {
    hex: "#C9A0A0",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Brown", hex: "#B08968" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Sweater dusty rose dengan celana grey, romantic tapi tetap kalem dan mudah dipadukan.",
    accessories: ["Scrunchie satin", "Tas mini kulit", "Flat shoes"],
  },
  Mauve: {
    hex: "#B784A7",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress mauve dengan heels hitam, pink keunguan yang elegan untuk acara semi-formal.",
    accessories: ["Perhiasan silver", "Clutch satin", "Heels hitam"],
  },

  // --- Earth Tone Hangat ---
  Terracotta: {
    hex: "#C87A5B",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Brown", hex: "#B08968" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Set terracotta dipadukan sandal cream, warna hangat yang pas untuk liburan musim panas.",
    accessories: ["Anting rotan", "Topi anyaman", "Tas jinjing rafia"],
  },
  Rust: {
    hex: "#B7410E",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Brown", hex: "#B08968" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Sweater rust dipadukan celana beige, warna hangat yang lagi naik daun musim ini.",
    accessories: ["Boots suede", "Tas anyaman", "Anting kayu"],
  },
  "Brick Red": {
    hex: "#A63A2F",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Cardigan brick red dengan celana putih, statement color yang tetap terasa kalem.",
    accessories: ["Tas kulit hitam", "Sneakers putih", "Anting emas kecil"],
  },
  Cinnamon: {
    hex: "#A56A43",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Sweater cinnamon dengan rok cream, warm tone yang pas untuk suasana gugur.",
    accessories: ["Boots suede", "Tas kulit", "Scarf rajut"],
  },
  Caramel: {
    hex: "#C68642",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Outer caramel dipadukan celana hitam, kaya warna tapi tetap mudah dipadukan.",
    accessories: ["Tas kulit cokelat", "Boots ankle", "Anting gold"],
  },
  "Mocha Mousse": {
    hex: "#A47764",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Coat mocha mousse dipadukan turtleneck cream, warna tahun ini yang hangat dan mewah.",
    accessories: ["Tas kulit cokelat tua", "Boots suede", "Anting emas"],
  },
  Mustard: {
    hex: "#D4A24C",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Outer mustard dilapis atasan putih dan jeans grey, warna hangat yang mencerahkan tampilan.",
    accessories: ["Tas kulit cokelat", "Sneakers putih", "Kacamata bulat"],
  },
  Apricot: {
    hex: "#F5B183",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Brown", hex: "#B08968" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Top apricot dipadukan celana putih, ceria dan segar untuk suasana siang hari.",
    accessories: ["Anting gold kecil", "Sandal nude", "Tas mini rotan"],
  },
  Olive: {
    hex: "#7C7A4E",
    matches: [
      { name: "Beige", hex: "#EDE0D0" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Jaket olive dengan kaos putih dan celana beige, gaya kasual yang effortless sepanjang hari.",
    accessories: ["Sling bag kanvas", "Boots cokelat", "Topi bucket"],
  },
  "Moss Green": {
    hex: "#6B7052",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Brown", hex: "#B08968" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Jaket moss green dengan kaos putih, gaya kasual yang dekat dengan warna alam.",
    accessories: ["Tas anyaman", "Sneakers putih", "Topi bucket"],
  },
  Coffee: {
    hex: "#6F4E37",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Black", hex: "#2c2420" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Set coffee brown dua potong, hangat dan terasa mewah tanpa perlu banyak aksesori.",
    accessories: ["Tas kulit besar", "Loafers", "Jam tangan gold"],
  },
  "Chocolate Brown": {
    hex: "#4A2C2A",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Mustard", hex: "#D4A24C" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Long coat chocolate brown dengan knit cream di dalamnya, hangat dan terasa 'old money'.",
    accessories: ["Boots kulit", "Tas tote besar", "Scarf motif"],
  },
  Chestnut: {
    hex: "#954535",
    matches: [
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Sweater chestnut dengan celana beige, warna earthy yang hangat dan flattering.",
    accessories: ["Boots ankle", "Tas kulit", "Anting kayu"],
  },
  Mahogany: {
    hex: "#4E2A1E",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Blazer mahogany dengan kemeja putih, gelap dan tegas namun tetap terasa mewah.",
    accessories: ["Tas kulit tua", "Loafers", "Jam tangan gold"],
  },
  "Dark Espresso": {
    hex: "#3B2A20",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Long coat dark espresso dengan knit cream, gelap tapi tetap terasa lembut dan elegan.",
    accessories: ["Boots kulit", "Tas tote besar", "Scarf motif"],
  },

  // --- Jewel Tone Elegan ---
  Gold: {
    hex: "#C9A227",
    matches: [
      { name: "Black", hex: "#2c2420" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Emerald Green", hex: "#245B45" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Outer bertekstur gold dipadukan dress hitam, statement piece untuk acara pesta.",
    accessories: ["Perhiasan gold", "Clutch metalik", "Heels hitam"],
  },
  Teal: {
    hex: "#4C8C86",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Blouse teal dipadukan celana camel, warna berani tapi tetap terasa sophisticated.",
    accessories: ["Tas kulit cokelat", "Loafers", "Anting emas"],
  },
  "Emerald Green": {
    hex: "#245B45",
    matches: [
      { name: "Black", hex: "#2c2420" },
      { name: "Gold", hex: "#C9A227" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress emerald green dengan aksesori gold, mewah dan jadi pusat perhatian di acara formal.",
    accessories: ["Perhiasan gold", "Heels hitam", "Clutch satin"],
  },
  "Forest Green": {
    hex: "#2F4A34",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Coat forest green dengan knit cream, earthy dan hangat untuk cuaca dingin.",
    accessories: ["Boots kulit", "Tas kulit cokelat", "Scarf rajut"],
  },
  Plum: {
    hex: "#6B3F5D",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Sweater plum dengan celana grey, warna ungu gelap yang elegan tanpa terlihat mencolok.",
    accessories: ["Anting silver", "Tas kulit hitam", "Boots ankle"],
  },
  Wine: {
    hex: "#6D1E28",
    matches: [
      { name: "Black", hex: "#2c2420" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
    ],
    outfitExample: "Dress wine dengan coat camel di luarnya, mewah dan pas untuk acara formal malam hari.",
    accessories: ["Perhiasan emas", "Heels hitam", "Clutch kecil"],
  },
  Burgundy: {
    hex: "#5E2129",
    matches: [
      { name: "Black", hex: "#2c2420" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Soft Pink", hex: "#F3D9DC" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
    ],
    outfitExample: "Dress burgundy dengan heels hitam, elegan dan mewah untuk acara malam hari.",
    accessories: ["Perhiasan emas", "Clutch satin", "Heels hitam"],
  },
  Maroon: {
    hex: "#7B2D26",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Sweater maroon dengan rok midi beige, hangat dan pas untuk suasana akhir tahun.",
    accessories: ["Scarf rajut", "Boots cokelat", "Anting emas kecil"],
  },
  "Cherry Red": {
    hex: "#9E2A2B",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Black", hex: "#2c2420" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Dress cherry red dengan flat shoes putih, berani tapi tetap classy untuk tampil beda.",
    accessories: ["Clutch hitam", "Anting emas besar", "Heels hitam"],
  },

  // --- Tambahan Netral & Basic ---
  Linen: {
    hex: "#F0E6D2",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Sage Green", hex: "#A8B79C" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Kemeja linen dipadukan celana putih, ringan dan adem untuk cuaca panas.",
    accessories: ["Topi anyaman", "Sandal nude", "Tas rotan"],
  },
  Oatmeal: {
    hex: "#DCD0BA",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Charcoal", hex: "#3A3A3A" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Sweater oatmeal dipadukan celana charcoal, netral dan gampang banget dipadukan.",
    accessories: ["Tas kulit nude", "Sneakers putih", "Jam tangan minimalis"],
  },
  Greige: {
    hex: "#B9AFA0",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Coat greige dengan turtleneck putih, campuran grey dan beige yang selalu terlihat mahal.",
    accessories: ["Tas kulit hitam", "Loafers", "Jam tangan silver"],
  },
  Pewter: {
    hex: "#8E8C84",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Blush Pink", hex: "#F4C2C2" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Blazer pewter dengan atasan blush pink, abu kehijauan yang tenang dan modern.",
    accessories: ["Anting silver", "Tas kulit hitam", "Loafers"],
  },
  Graphite: {
    hex: "#4B4B4B",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Sky Blue", hex: "#A9D6E5" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Turtleneck graphite dengan celana beige, gelap namun tetap terasa modern dan rapi.",
    accessories: ["Jam tangan hitam", "Tas kulit hitam", "Sneakers putih"],
  },

  // --- Tambahan Pastel Lembut ---
  Champagne: {
    hex: "#F2E4C9",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Gold", hex: "#C9A227" },
      { name: "Brown", hex: "#B08968" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress champagne dengan aksesori gold, lembut dan mewah untuk acara semi-formal.",
    accessories: ["Perhiasan gold tipis", "Heels nude", "Clutch satin"],
  },
  "Ice Blue": {
    hex: "#DCEEF3",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Denim Blue", hex: "#5A7891" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Blouse ice blue dengan celana putih, sejuk dan ringan untuk dipakai siang hari.",
    accessories: ["Anting silver", "Tas kanvas", "Sneakers putih"],
  },
  Periwinkle: {
    hex: "#A9B8E8",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Lavender", hex: "#C9B8D8" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Sweater periwinkle dengan rok putih, biru keunguan yang lembut dan playful.",
    accessories: ["Scrunchie satin", "Tas mini", "Flat shoes putih"],
  },
  Lilac: {
    hex: "#DCC6E0",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Mauve", hex: "#B784A7" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress lilac dengan cardigan putih, manis dan cocok untuk suasana musim semi.",
    accessories: ["Anting mutiara", "Clutch kecil", "Flat shoes"],
  },
  "Mint Green": {
    hex: "#B6E2D3",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Grey", hex: "#8A7A6D" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Top mint green dipadukan rok putih, segar dan cocok untuk suasana musim semi.",
    accessories: ["Anting mutiara", "Tas kanvas kecil", "Sandal nude"],
  },

  // --- Tambahan Earth Tone Hangat ---
  Ochre: {
    hex: "#C68B2E",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Brown", hex: "#B08968" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Cardigan ochre dengan celana cream, warna kuning kecokelatan yang hangat dan earthy.",
    accessories: ["Tas anyaman", "Sandal nude", "Anting kayu"],
  },
  Amber: {
    hex: "#C98A2B",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Brown", hex: "#B08968" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Outer amber dilapis kaos putih, warna hangat yang mencolok tapi tetap easy to wear.",
    accessories: ["Tas kulit cokelat", "Boots ankle", "Anting gold"],
  },
  Copper: {
    hex: "#B36A3C",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Sweater copper dengan celana hitam, metalik hangat yang cocok untuk musim gugur.",
    accessories: ["Perhiasan gold", "Boots suede", "Tas kulit"],
  },
  "Burnt Orange": {
    hex: "#C1440E",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Cardigan burnt orange dengan celana beige, warna berani yang jadi statement musim gugur.",
    accessories: ["Boots suede", "Tas anyaman", "Anting kayu"],
  },
  Sienna: {
    hex: "#8B4A2B",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Black", hex: "#2c2420" },
      { name: "Grey", hex: "#8A7A6D" },
    ],
    outfitExample: "Coat sienna dengan knit cream, warna cokelat kemerahan yang hangat dan elegan.",
    accessories: ["Boots kulit", "Tas tote", "Scarf motif"],
  },

  // --- Tambahan Jewel Tone Elegan ---
  Sapphire: {
    hex: "#0F3D6E",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Gold", hex: "#C9A227" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Dress sapphire dengan aksesori gold, biru pekat yang mewah untuk acara formal malam.",
    accessories: ["Perhiasan gold", "Heels hitam", "Clutch satin"],
  },
  "Cobalt Blue": {
    hex: "#1E4E8C",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#2c2420" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Beige", hex: "#EDE0D0" },
    ],
    outfitExample: "Blazer cobalt blue dengan kemeja putih, biru berani yang tetap terlihat profesional.",
    accessories: ["Tas kulit hitam", "Loafers", "Jam tangan silver"],
  },
  "Royal Blue": {
    hex: "#2A4B9B",
    matches: [
      { name: "White", hex: "#FFFDFB" },
      { name: "Gold", hex: "#C9A227" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Dress royal blue dengan aksesori gold, elegan dan mencolok untuk acara spesial.",
    accessories: ["Perhiasan gold", "Clutch metalik", "Heels hitam"],
  },
  "Bottle Green": {
    hex: "#1B4332",
    matches: [
      { name: "Cream", hex: "#F7EFE5" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "Black", hex: "#2c2420" },
    ],
    outfitExample: "Coat bottle green dengan knit cream, hijau tua yang mewah dan pas untuk cuaca dingin.",
    accessories: ["Boots kulit", "Tas kulit cokelat", "Scarf rajut"],
  },
  "Ruby Red": {
    hex: "#7E1F2B",
    matches: [
      { name: "Black", hex: "#2c2420" },
      { name: "Gold", hex: "#C9A227" },
      { name: "Beige", hex: "#EDE0D0" },
      { name: "White", hex: "#FFFDFB" },
      { name: "Cream", hex: "#F7EFE5" },
    ],
    outfitExample: "Dress ruby red dengan heels hitam, merah pekat yang mewah untuk acara formal.",
    accessories: ["Perhiasan gold", "Clutch hitam", "Heels hitam"],
  },
};

// Pengelompokan warna untuk tampilan picker: dari terang ke gelap di tiap kelompok,
// supaya warna cerah berkumpul dengan warna cerah, dan warna gelap berkumpul dengan warna gelap.
const colorCategories = [
  {
    title: "Netral & Basic",
    colors: [
      "White", "Off-White", "Linen", "Cream", "Ivory", "Beige", "Sand", "Oatmeal",
      "Camel", "Brown", "Khaki", "Taupe", "Greige", "Grey", "Pewter", "Slate Grey",
      "Denim Blue", "Charcoal", "Graphite", "Black", "Navy", "Midnight Navy",
    ],
  },
  {
    title: "Pastel Lembut",
    colors: [
      "Pink", "Blush Pink", "Champagne", "Baby Blue", "Powder Blue", "Ice Blue",
      "Sky Blue", "Periwinkle", "Lavender", "Lilac", "Pistachio Green", "Mint Green",
      "Sage Green", "Butter Yellow", "Peach", "Dusty Rose", "Mauve",
    ],
  },
  {
    title: "Earth Tone Hangat",
    colors: [
      "Terracotta", "Rust", "Burnt Orange", "Brick Red", "Ochre", "Amber",
      "Cinnamon", "Copper", "Caramel", "Sienna", "Mocha Mousse", "Mustard",
      "Apricot", "Olive", "Moss Green", "Coffee", "Chocolate Brown", "Chestnut",
      "Mahogany", "Dark Espresso",
    ],
  },
  {
    title: "Jewel Tone Elegan",
    colors: [
      "Gold", "Teal", "Sapphire", "Cobalt Blue", "Royal Blue", "Emerald Green",
      "Bottle Green", "Forest Green", "Plum", "Wine", "Ruby Red", "Burgundy",
      "Maroon", "Cherry Red",
    ],
  },
];

// Artikel Fashion Tips
const fashionTips = [
  {
    icon: "🎀",
    title: "Tips Mix & Match",
    text: "Mulai dari satu warna netral sebagai dasar, lalu tambahkan satu warna aksen agar outfit tetap seimbang dan tidak ramai.",
  },
  {
    icon: "🎨",
    title: "Cara Memilih Warna Outfit",
    text: "Kenali undertone kulitmu terlebih dahulu — warna hangat seperti cream dan cokelat cocok untuk undertone hangat.",
  },
  {
    icon: "✨",
    title: "Fashion Trend 2026",
    text: "Tahun ini diwarnai cokelat tua, butter yellow, merah ceri, rajut argyle, dan jaket kulit bomber, dengan gaya yang lebih berani dan personal.",
  },
  {
    icon: "👗",
    title: "Capsule Wardrobe Guide",
    text: "Pilih 10–15 item dasar dengan warna senada agar bisa dikombinasikan menjadi puluhan tampilan berbeda.",
  },
];

/* ---------- 2. HELPER: ILUSTRASI SVG OUTFIT ---------- */

// Membuat ilustrasi siluet dress sederhana, diwarnai sesuai warna dominan outfit.
// Dipakai berulang di card & modal supaya setiap outfit punya "identitas warna" yang jelas.
function createOutfitSVG(hex) {
  return `
    <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- leher -->
      <rect x="45" y="26" width="10" height="10" rx="3" fill="#E3C2A5" />
      <!-- kepala -->
      <circle cx="50" cy="16" r="12" fill="#E3C2A5" />
      <!-- rambut -->
      <path d="M39 14 C38 4 46 0 50 0 C55 0 62 4 61 14
               C61 8 56 6 52 7 C49 10 45 10 42 8 C40 9 39 11 39 14 Z"
            fill="#6B4F3F" />
      <!-- lengan -->
      <path d="M38 42 C30 50 26 66 30 82 C31 87 35 91 40 92
               C38 85 37 76 38 68 C39 58 43 48 47 43 Z" fill="#E3C2A5" opacity="0.9" />
      <path d="M62 42 C70 50 74 66 70 82 C69 87 65 91 60 92
               C62 85 63 76 62 68 C61 58 57 48 53 43 Z" fill="#E3C2A5" opacity="0.9" />
      <!-- dress A-line -->
      <path d="M50 36 C43 36 37 40 36 47 C35 53 38 57 36 63
               C29 76 25 98 26 118 C26 126 28 132 31 136
               L69 136 C72 132 74 126 74 118
               C75 98 71 76 64 63 C62 57 65 53 64 47
               C63 40 57 36 50 36 Z"
            fill="${hex}" />
      <!-- belt -->
      <rect x="38" y="64" width="24" height="4" rx="2" fill="#6B4F3F" opacity="0.5" />
    </svg>
  `;
}

// Menampilkan FOTO outfit kalau filenya ada di folder images/.
// Nama file default: images/outfit-ID.jpg (contoh: images/outfit-1.jpg).
// Mau pakai nama/format lain? Tambahkan field  image: "images/namafile.png"  di data outfit.
// Kalau foto tidak ditemukan, otomatis tampil ilustrasi SVG biasa.
// ---------- SUMBER FOTO (CREDIT) ----------
// Foto outfit diambil dari Pinterest sebagai referensi gaya, jadi sumbernya wajib dicantumkan.
// Cara isi: tambahkan field  credit  di data outfit (di outfitData), contohnya:
//   credit: { name: "@namapengguna", url: "https://www.pinterest.com/pin/1234567890/" },
// "name" dan "url" boleh diisi salah satu atau keduanya. Kalau dikosongkan, yang tampil: "Sumber foto: Pinterest".
// Credit hanya muncul di bawah gambar kalau fotonya memang ada.

// Credit untuk foto besar di bagian atas website (hero), isi dengan cara yang sama
const heroCredit = { name: "", url: "" };

function createCreditHTML(outfit) {
  const c = outfit.credit || {};
  const label = c.url
    ? `<a href="${c.url}" target="_blank" rel="noopener noreferrer">${c.name || "Lihat sumber"}</a>`
    : c.name || "";
  return label ? `Sumber foto: Pinterest (${label})` : "Sumber foto: Pinterest";
}

function getOutfitSrc(outfit) {
  return outfit.image || `images/outfit-${outfit.id}.jpg`;
}

// Foto dicari di:  images/outfit-ID.jpg   (contoh: images/outfit-75.jpg)
// Mau pakai nama/format lain? Tambahkan field  image: "images/namafile.png"  di data outfit.
// Outfit yang fotonya belum ada otomatis memakai ilustrasi biasa.
function createOutfitVisual(outfit) {
  return `<img src="${getOutfitSrc(outfit)}" alt="${outfit.name}" loading="lazy"
               data-color="${outfit.colors[0]}"
               onload="handlePhotoLoad(this)" onerror="handleImgError(this)" />`;
}

// Dipanggil otomatis kalau foto tidak ada -> ganti dengan ilustrasi SVG
function handleImgError(img) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = createOutfitSVG(img.dataset.color);
  img.replaceWith(wrapper.firstElementChild);
}

// Cek foto mana yang belum ada. Buka website, tekan F12, buka tab Console, ketik:  cekFoto()
function cekFoto() {
  const list = outfitData.filter((o) => o.trend);
  const missing = [];
  let pending = list.length;
  list.forEach((o) => {
    const probe = new Image();
    const done = () => {
      if (--pending === 0) {
        console.log(`Foto trending yang belum ada: ${missing.length} dari ${list.length}`);
        if (missing.length) console.table(missing);
        else console.log("Semua foto trending sudah terpasang.");
      }
    };
    probe.onload = done;
    probe.onerror = () => { missing.push({ file: getOutfitSrc(o).replace("images/", ""), outfit: o.name }); done(); };
    probe.src = getOutfitSrc(o);
  });
}

/* ---------- WARNA OTOMATIS DARI FOTO ---------- */

// Menyimpan hasil warna per foto supaya tidak dihitung ulang tiap kartu dirender
const photoPalettes = {};

// Ambil warna untuk swatch: pakai hasil dari foto kalau sudah ada, kalau belum pakai warna di data
function getOutfitColors(outfit) {
  return photoPalettes[getOutfitSrc(outfit)] || outfit.colors;
}

// Mengubah angka RGB menjadi kode hex (#RRGGBB)
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
}

// Perkiraan apakah sebuah warna adalah warna kulit (supaya kulit tidak dihitung sebagai warna baju)
function isSkinTone(r, g, b) {
  const max = Math.max(r, g, b) / 255;
  const min = Math.min(r, g, b) / 255;
  const light = (max + min) / 2;
  const d = max - min;
  if (d === 0) return false;
  const sat = d / (1 - Math.abs(2 * light - 1));
  let hue;
  if (max === r / 255) hue = ((g - b) / 255 / d) % 6;
  else if (max === g / 255) hue = (b - r) / 255 / d + 2;
  else hue = (r - g) / 255 / d + 4;
  hue = (hue * 60 + 360) % 360;
  return hue >= 8 && hue <= 28 && sat >= 0.2 && sat <= 0.6 && light >= 0.45 && light <= 0.82;
}

// Memilih warna dominan dari data piksel. Hanya area tengah foto yang dibaca,
// karena baju biasanya ada di tengah dan pinggir foto biasanya latar belakang.
function pickPalette(data, W, H, count = 3) {
  const buckets = {};
  for (let y = Math.floor(H * 0.15); y < Math.floor(H * 0.9); y++) {
    for (let x = Math.floor(W * 0.2); x < Math.floor(W * 0.8); x++) {
      const i = (y * W + x) * 4;
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
      if (a < 200 || isSkinTone(r, g, b)) continue;

      const key = ((r >> 5) << 6) | ((g >> 5) << 3) | (b >> 5); // kelompokkan warna yang mirip
      const centerWeight = 1.5 - Math.abs((x - W / 2) / (W / 2)); // piksel tengah dihitung lebih penting
      const bucket = buckets[key] || (buckets[key] = { w: 0, r: 0, g: 0, b: 0 });
      bucket.w += centerWeight;
      bucket.r += r * centerWeight;
      bucket.g += g * centerWeight;
      bucket.b += b * centerWeight;
    }
  }

  const sorted = Object.values(buckets).sort((a, b) => b.w - a.w);
  const chosen = [];
  for (const bk of sorted) {
    const c = { r: bk.r / bk.w, g: bk.g / bk.w, b: bk.b / bk.w };
    // lewati warna yang terlalu mirip dengan warna yang sudah dipilih
    const tooClose = chosen.some(
      (o) => Math.hypot(o.r - c.r, o.g - c.g, o.b - c.b) < 55
    );
    if (!tooClose) chosen.push(c);
    if (chosen.length === count) break;
  }
  return chosen.length >= 2 ? chosen.map((c) => rgbToHex(c.r, c.g, c.b)) : null;
}

// Dipanggil otomatis saat sebuah foto outfit selesai dimuat
function handlePhotoLoad(img) {
  // Foto berhasil dimuat -> tampilkan keterangan sumber foto di bawahnya
  const holder = img.closest(".outfit-card") || img.closest("#modalContent");
  const credit = holder && holder.querySelector(".photo-credit");
  if (credit) credit.hidden = false;

  try {
    const W = 48, H = 64;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, W, H);
    const palette = pickPalette(ctx.getImageData(0, 0, W, H).data, W, H);
    if (!palette) return;

    photoPalettes[img.getAttribute("src")] = palette;

    // Ganti lingkaran warna di kartu (atau di pop-up) yang memuat foto ini
    const box = img.closest(".outfit-card") || img.closest("#modalContent");
    const strip = box && box.querySelector(".swatch-strip");
    if (strip) strip.innerHTML = palette.map((c) => `<span style="background-color:${c}"></span>`).join("");
  } catch (err) {
    // Gagal membaca foto (misalnya halaman dibuka langsung dari file, bukan lewat Live Server).
    // Tidak masalah: warna dari data tetap dipakai.
  }
}

// Membuat elemen swatch-strip (lingkaran kecil bertumpuk) dari array hex
function createSwatchStrip(colors) {
  return `<div class="swatch-strip">${colors
    .map((c) => `<span style="background-color:${c}"></span>`)
    .join("")}</div>`;
}

// Membuat satu kartu outfit (dipakai di Outfit Finder & Trending)
function createOutfitCard(outfit) {
  const bgTint = outfit.colors[0] + "22"; // tint transparan untuk background visual
  return `
    <article class="outfit-card" data-id="${outfit.id}">
      <div class="outfit-card__visual" style="background-color:${bgTint}">
        ${createOutfitVisual(outfit)}
        <button class="outfit-card__fav" data-fav-id="${outfit.id}" aria-label="Simpan ke favorit">🤍</button>
      </div>
      <p class="photo-credit" hidden>${createCreditHTML(outfit)}</p>
      <div class="outfit-card__body">
        <span class="outfit-card__tag">${outfit.style}</span>
        <h3 class="outfit-card__title">${outfit.name}</h3>
        <p class="outfit-card__desc">${outfit.desc}</p>
        ${createSwatchStrip(getOutfitColors(outfit))}
        <div class="outfit-card__footer">
          <span style="font-size:12.5px; color:var(--color-text-light);">${outfit.occasion}</span>
          <button class="view-details-btn" data-detail-id="${outfit.id}">View Details</button>
        </div>
      </div>
    </article>
  `;
}

/* ---------- 3. OUTFIT FINDER ---------- */

const occasionSelect = document.getElementById("occasionSelect");
const styleSelect = document.getElementById("styleSelect");
const colorSelect = document.getElementById("colorSelect");
const findOutfitBtn = document.getElementById("findOutfitBtn");
const finderResults = document.getElementById("finderResults");

// ---------- Pencocokan warna berdasarkan KEMIRIPAN hex ----------
// Satu warna favorit bisa cocok dengan banyak outfit, selama salah satu warna di palet outfit mirip.
const COLOR_MATCH_DISTANCE = 60; // makin kecil = makin ketat

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}

function colorDistance(hexA, hexB) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

// Jarak terdekat antara satu warna dengan palet sebuah outfit (makin kecil = makin mirip)
function outfitColorDistance(outfit, hex) {
  return Math.min(...outfit.colors.map((c) => colorDistance(c, hex)));
}

// Isi dropdown "Favorite Color" otomatis dari daftar warna Color Match (semua warna, berkelompok)
function populateColorSelect() {
  colorSelect.innerHTML =
    '<option value="all">Semua Warna</option>' +
    colorCategories
      .map(
        (cat) =>
          `<optgroup label="${cat.title}">` +
          cat.colors
            .filter((n) => colorMatchData[n])
            .map((n) => `<option value="${n}">${n}</option>`)
            .join("") +
          `</optgroup>`
      )
      .join("");
}

// ---------- Hasil pencarian: urut dari yang paling cocok, tidak pernah kosong ----------
const FINDER_PAGE_SIZE = 12;
let finderItems = [];
let finderShown = FINDER_PAGE_SIZE;
let finderExactCount = 0;
let finderAllSelected = false;

function renderFinderResults() {
  const occasion = occasionSelect.value;
  const style = styleSelect.value;
  const color = colorSelect.value;
  const colorHex = color === "all" ? null : colorMatchData[color]?.hex;
  finderAllSelected = occasion === "all" && style === "all" && !colorHex;

  // Beri skor tiap outfit: 1 poin per kriteria yang cocok, warna yang "hampir" cocok dapat poin sebagian
  const scored = outfitData.map((o) => {
    let score = 0;
    let exact = true;
    const closeness = colorHex ? outfitColorDistance(o, colorHex) : 0;

    if (occasion !== "all") { if (o.occasion === occasion) score += 1; else exact = false; }
    if (style !== "all") { if (o.style === style) score += 1; else exact = false; }
    if (colorHex) {
      if (closeness <= COLOR_MATCH_DISTANCE) score += 1;
      else { exact = false; score += Math.max(0, 1 - closeness / 220) * 0.6; }
    }
    return { outfit: o, score, exact, closeness };
  });

  scored.sort(
    (a, b) =>
      b.score - a.score ||
      a.closeness - b.closeness ||
      (b.outfit.trend ? 1 : 0) - (a.outfit.trend ? 1 : 0) ||
      a.outfit.id - b.outfit.id
  );

  const exact = scored.filter((s) => s.exact);
  const near = scored.filter((s) => !s.exact && s.score > 0);
  finderExactCount = exact.length;

  finderItems = exact.map((s) => ({ outfit: s.outfit, group: "exact" }));
  if (exact.length < 6) {
    const limit = exact.length === 0 ? 24 : 12;
    near.slice(0, limit).forEach((s) => finderItems.push({ outfit: s.outfit, group: "near" }));
  }

  finderShown = FINDER_PAGE_SIZE;
  drawFinderResults();
}

function finderGroupLabel(group) {
  if (group === "exact") {
    return finderAllSelected
      ? `Semua outfit · ${finderExactCount}`
      : `Cocok dengan semua pilihanmu · ${finderExactCount} outfit`;
  }
  return finderExactCount === 0
    ? "Belum ada yang persis sama. Ini yang paling mendekati pilihanmu:"
    : "Pilihan lain yang mendekati:";
}

function drawFinderResults() {
  if (finderItems.length === 0) {
    finderResults.innerHTML = `<p class="finder-placeholder">Belum ada outfit yang cocok. Coba ubah filter, ya!</p>`;
    return;
  }

  let html = "";
  let lastGroup = null;
  finderItems.slice(0, finderShown).forEach(({ outfit, group }) => {
    if (group !== lastGroup) {
      html += `<h3 class="finder-group-title">${finderGroupLabel(group)}</h3>`;
      lastGroup = group;
    }
    html += createOutfitCard(outfit);
  });

  const remaining = finderItems.length - finderShown;
  if (remaining > 0) {
    html += `<div class="finder-more"><button class="btn btn--outline" id="finderMoreBtn">Tampilkan lebih banyak (${remaining})</button></div>`;
  }

  finderResults.innerHTML = html;
  attachDynamicListeners();

  const moreBtn = document.getElementById("finderMoreBtn");
  if (moreBtn) {
    moreBtn.addEventListener("click", () => {
      finderShown += FINDER_PAGE_SIZE;
      drawFinderResults();
    });
  }
}

findOutfitBtn.addEventListener("click", renderFinderResults);

/* ---------- 4. COLOR MATCH ---------- */

const colorPicker = document.getElementById("colorPicker");

// Generate swatch warna yang bisa dipilih pengguna, dikelompokkan per kategori
function renderColorPicker() {
  colorPicker.innerHTML = colorCategories
    .map((category) => {
      const swatches = category.colors
        .map((name) => {
          const data = colorMatchData[name];
          if (!data) return ""; // lewati kalau nama warna belum terdaftar di colorMatchData
          return `
            <div class="color-swatch" data-color="${name}" style="background-color:${data.hex}">
              <span class="color-swatch__label">${name}</span>
            </div>
          `;
        })
        .join("");

      return `
        <div class="color-category">
          <h4 class="color-category__title">${category.title}</h4>
          <div class="color-category__swatches">${swatches}</div>
        </div>
      `;
    })
    .join("");
}

// Aksesori tambahan per kelompok warna, supaya setiap warna punya 5 rekomendasi aksesori
const extraAccessoryPool = {
  "Netral & Basic": ["Kacamata hitam klasik", "Jam tangan minimalis", "Tas tote", "Sneakers putih", "Anting emas kecil"],
  "Pastel Lembut": ["Scrunchie satin", "Anting mutiara", "Tas mini", "Flat shoes putih", "Jepit rambut pita"],
  "Earth Tone Hangat": ["Topi anyaman", "Boots kulit", "Anting kayu", "Scarf rajut", "Tas anyaman"],
  "Jewel Tone Elegan": ["Perhiasan emas", "Clutch satin", "Heels hitam", "Anting statement", "Sarung tangan kulit"],
};

function getColorAccessories(colorName, data) {
  const category = colorCategories.find((c) => c.colors.includes(colorName));
  const pool = (category && extraAccessoryPool[category.title]) || [];
  const list = [...data.accessories];
  pool.forEach((a) => {
    if (list.length < 5 && !list.includes(a)) list.push(a);
  });
  return list;
}

// Outfit di website ini yang paletnya paling mirip dengan warna yang dipilih
function getRelatedOutfits(hex, limit = 3) {
  return outfitData
    .map((o) => ({ o, d: outfitColorDistance(o, hex) }))
    .sort((a, b) => a.d - b.d || a.o.id - b.o.id)
    .slice(0, limit)
    .map((x) => x.o);
}

// Menampilkan hasil Color Match sebagai pop-up tepat saat warna diklik
function openColorMatchModal(colorName) {
  const data = colorMatchData[colorName];
  if (!data) return;

  const m = data.matches;
  const accessories = getColorAccessories(colorName, data);
  const related = getRelatedOutfits(data.hex);
  const paletteColors = [data.hex, ...m.map((x) => x.hex)];

  modalContent.innerHTML = `
    <div class="match-header">
      <span class="match-header__swatch" style="background-color:${data.hex}"></span>
      <div>
        <span class="eyebrow">Color Match</span>
        <h3>${colorName}</h3>
      </div>
    </div>

    <div class="palette-bar" aria-hidden="true">
      ${paletteColors.map((c) => `<span style="background-color:${c}"></span>`).join("")}
    </div>

    <p class="match-result__title">Warna yang cocok dipadukan (${m.length}):</p>
    <div class="match-colors">
      ${m
        .map(
          (x) => `
        <div class="match-color-chip">
          <span class="chip-dot" style="background-color:${x.hex}"></span>
          ${x.name}
        </div>`
        )
        .join("")}
    </div>

    <div class="match-result__grid">
      <div class="match-block">
        <h4>Contoh Outfit</h4>
        <p>${data.outfitExample}</p>
      </div>
      <div class="match-block">
        <h4>Rekomendasi Aksesori</h4>
        <ul>
          ${accessories.map((a) => `<li>${a}</li>`).join("")}
        </ul>
      </div>
    </div>

    <div class="match-block match-extra">
      <h4>Tips Padu Padan</h4>
      <p>Jadikan ${colorName} warna utama, padukan dengan ${m[0].name} dan ${m[1].name} sebagai pendamping, lalu tambahkan sentuhan ${m[2].name} lewat aksesori atau sepatu.</p>
    </div>

    <div class="match-block match-extra">
      <h4>Outfit dengan Warna Mirip</h4>
      <ul class="related-outfits">
        ${related
          .map(
            (o) => `
          <li>
            <button class="related-outfit" data-open-outfit="${o.id}">
              <span class="related-outfit__dot" style="background-color:${o.colors[0]}"></span>
              <span><strong>${o.name}</strong><small>${o.style} · ${o.occasion}</small></span>
            </button>
          </li>`
          )
          .join("")}
      </ul>
    </div>
  `;

  modalOverlay.classList.add("open"); // pop-up langsung muncul
}

colorPicker?.addEventListener("click", (e) => {
  const swatch = e.target.closest(".color-swatch");
  if (!swatch) return;

  // Hilangkan status selected dari swatch lain
  document.querySelectorAll(".color-swatch").forEach((el) => el.classList.remove("selected"));
  swatch.classList.add("selected");

  openColorMatchModal(swatch.dataset.color); // pop-up langsung muncul di layar
});

/* ---------- 5. TRENDING OUTFIT + SEARCH ---------- */

const trendingGrid = document.getElementById("trendingGrid");
const searchInput = document.getElementById("searchInput");

function renderTrending(keyword = "") {
  const trendingOutfits = outfitData.filter((o) => trendingIds.includes(o.id));

  const filtered = trendingOutfits.filter((o) => {
    const text = `${o.name} ${o.style} ${o.color} ${o.occasion} ${o.trend || ""}`.toLowerCase();
    return text.includes(keyword.toLowerCase());
  });

  if (filtered.length === 0) {
    trendingGrid.innerHTML = `<p class="finder-placeholder">Tidak ada outfit trending yang cocok dengan pencarianmu.</p>`;
    return;
  }

  trendingGrid.innerHTML = filtered.map(createOutfitCard).join("");
  attachDynamicListeners();
}

searchInput?.addEventListener("input", (e) => {
  renderTrending(e.target.value);
});

/* ---------- 6. FASHION TIPS ---------- */

const tipsGrid = document.getElementById("tipsGrid");

function renderTips() {
  tipsGrid.innerHTML = fashionTips
    .map(
      (tip) => `
      <div class="tip-card">
        <div class="tip-card__icon">${tip.icon}</div>
        <h3>${tip.title}</h3>
        <p>${tip.text}</p>
      </div>
    `
    )
    .join("");
}

/* ---------- 7. MODAL DETAIL OUTFIT ---------- */

const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");

function openOutfitModal(id) {
  const outfit = outfitData.find((o) => o.id === Number(id));
  if (!outfit) return;

  modalContent.innerHTML = `
    <div class="modal-visual" style="background-color:${outfit.colors[0]}22">
      ${createOutfitVisual(outfit)}
    </div>
    <p class="photo-credit" hidden>${createCreditHTML(outfit)}</p>
    <span class="outfit-card__tag">${outfit.style}</span>
    <h3>${outfit.name}</h3>
    <p>${outfit.desc}</p>
    ${createSwatchStrip(getOutfitColors(outfit))}
    <p style="margin-top:14px; font-size:13px;"><strong>Occasion:</strong> ${outfit.occasion} &nbsp;•&nbsp; <strong>Warna dominan:</strong> ${outfit.color}</p>
  `;

  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.querySelectorAll(".color-swatch").forEach((el) => el.classList.remove("selected"));
}

// Tekan tombol Esc untuk menutup pop-up
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

modalCloseBtn.addEventListener("click", closeModal);

// Klik outfit terkait di pop-up Color Match -> buka detail outfit tersebut
modalContent.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-open-outfit]");
  if (btn) openOutfitModal(btn.dataset.openOutfit);
});
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal(); // klik di luar kartu modal akan menutup modal
});

/* ---------- 8. FAVORITE BUTTON (DUMMY) ---------- */

function toggleFavorite(btn) {
  const isActive = btn.classList.toggle("active");
  btn.textContent = isActive ? "❤️" : "🤍";
}

// Event listener untuk kartu yang digenerate secara dinamis (delegasi lewat fungsi ini
// dipanggil ulang setiap kali kartu baru dirender)
function attachDynamicListeners() {
  document.querySelectorAll(".view-details-btn").forEach((btn) => {
    btn.onclick = () => openOutfitModal(btn.dataset.detailId);
  });

  document.querySelectorAll(".outfit-card__fav").forEach((btn) => {
    btn.onclick = () => toggleFavorite(btn);
  });
}

/* ---------- 9. NAVBAR MOBILE, SCROLL AKTIF, SCROLL TO TOP ---------- */

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburgerBtn.classList.toggle("active");
});

// Tutup menu mobile setiap kali salah satu link diklik
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburgerBtn.classList.remove("active");
  });
});

// Highlight menu navbar sesuai section yang sedang dilihat pengguna
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  let currentId = "home";
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

// Tombol scroll to top: muncul setelah scroll melewati 400px
const scrollTopBtn = document.getElementById("scrollTopBtn");

function updateScrollTopButton() {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
}

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  updateActiveNav();
  updateScrollTopButton();
});

/* ---------- FOTO HERO (opsional) ---------- */
// Taruh foto di images/hero.jpg, maka otomatis menggantikan ilustrasi di bagian atas website.
function loadHeroPhoto() {
  const box = document.querySelector(".hero__illustration");
  if (!box) return;
  const img = new Image();
  img.onload = () => {
    img.className = "hero-photo";
    img.alt = "Fashion inspiration";
    const wrap = document.createElement("div");
    wrap.className = "hero-photo-wrap";
    const credit = document.createElement("p");
    credit.className = "photo-credit photo-credit--hero";
    credit.innerHTML = createCreditHTML({ credit: heroCredit });
    wrap.append(img, credit);
    box.innerHTML = "";
    box.appendChild(wrap);
  };
  img.src = "images/hero.jpg"; // kalau file tidak ada, ilustrasi tetap dipakai
}

/* ---------- INISIALISASI SAAT HALAMAN DIMUAT ---------- */

document.addEventListener("DOMContentLoaded", () => {
  loadHeroPhoto();
  populateColorSelect();
  renderColorPicker();
  renderTrending();
  renderTips();
  attachDynamicListeners();
});