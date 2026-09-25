import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Shield,
  PlaneTakeoff,
  Plane,
  Briefcase,
  Users,
  Info,
  History,
  DollarSign,
  HelpCircle,
  Star,
  Quote,
  Gauge,
  Calendar
} from 'lucide-react';

const pageData = {
  name: "AeroLink",
  phone: "6289529605601", // Ganti dengan nomor WhatsApp aktif
  address: "Bandara Tjilik Riwut, VIP Terminal, Palangka Raya, Kalimantan Tengah.",
  title: "Elevate Your Journey",
  description: "Penyedia jasa transportasi pesawat carter premium. Nikmati penerbangan pribadi yang aman, nyaman, dan tepat waktu ke berbagai destinasi domestik maupun internasional.",
  profileImg: "./logo.png", 
  heroImg: "./hero-bg.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    tiktok: "https://www.tiktok.com/@solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya,+Kota+Palangka+Raya,+Kalimantan+Tengah/", 
    facebook: "https://facebook.com/", 
    twitter: "https://twitter.com/"
  },
  services: [
    { name: "Private Charter", icon: "Plane", desc: "Penerbangan eksklusif untuk perjalanan bisnis atau liburan keluarga dengan privasi maksimal." },
    { name: "Medical Evacuation", icon: "Shield", desc: "Layanan evakuasi medis udara yang siaga 24/7 dengan peralatan medis standar ICU." },
    { name: "Corporate Travel", icon: "Briefcase", desc: "Solusi transportasi efisien untuk mobilitas rombongan eksekutif perusahaan." },
    { name: "Cargo Khusus", icon: "PlaneTakeoff", desc: "Pengiriman barang berharga dan dokumen penting dengan jaminan keamanan ekstra tinggi." }
  ],
  fleet: [
    { 
      name: "Gulfstream G650", 
      type: "Heavy Jet",
      pax: "14 Penumpang", 
      speed: "Mach 0.925",
      img: "./fleet-g650.webp"
    },
    { 
      name: "Cessna Citation Latitude", 
      type: "Midsize Jet",
      pax: "9 Penumpang", 
      speed: "826 km/jam",
      img: "./fleet-citation.webp"
    },
    { 
      name: "Embraer Phenom 300", 
      type: "Light Jet",
      pax: "7 Penumpang", 
      speed: "839 km/jam",
      img: "./fleet-phenom300.webp"
    }
  ],
  pricing: [
    { route: "Jakarta - Bali", type: "Light Jet", price: "Mulai Rp 150 Juta" },
    { route: "Jakarta - Singapore", type: "Midsize Jet", price: "Mulai Rp 280 Juta" },
    { route: "Surabaya - Labuan Bajo", type: "Light Jet", price: "Mulai Rp 180 Juta" },
    { route: "Rute Custom / Sewa Per Jam", type: "Semua Armada", price: "Hubungi Kami" }
  ],
  faqs: [
    { q: "Bagaimana cara memesan penerbangan carter?", a: "Anda dapat mengisi formulir reservasi di bagian bawah halaman ini atau langsung menghubungi layanan pelanggan kami via WhatsApp. Kami akan memberikan penawaran harga berdasarkan rute dan jenis pesawat yang dipilih." },
    { q: "Apakah AeroLink melayani penerbangan internasional?", a: "Ya, kami melayani penerbangan ke berbagai destinasi internasional dengan armada Heavy Jet dan Midsize Jet kami yang memiliki kapabilitas jarak tempuh jauh." },
    { q: "Berapa lama waktu persiapan sebelum lepas landas?", a: "Untuk rute domestik, kami dapat mempersiapkan penerbangan dalam waktu 3-4 jam setelah konfirmasi pembayaran. Untuk rute internasional, kami menyarankan H-1 untuk kelancaran pengurusan izin lintas batas negara." },
    { q: "Apakah harga sudah termasuk biaya operasional bandara?", a: "Ya, sebagian besar penawaran harga kami bersifat all-in, mencakup biaya sewa pesawat, avtur, kru, izin bandara (landing/parking fee), serta layanan katering standar VIP selama penerbangan." }
  ],
  testimonials: [
    { name: "Andi Pratama", role: "CEO Tech Indo", rating: 5, text: "Layanan sangat profesional. Pesawat bersih, kru ramah, dan sangat tepat waktu. Solusi terbaik untuk perjalanan bisnis yang padat jadwal." },
    { name: "Diana Kusuma", role: "Public Figure", rating: 5, text: "Privasi sangat terjaga. Proses keberangkatan di terminal VIP sangat cepat tanpa antrean. Penerbangan Jakarta-Bali terasa sangat mewah." },
    { name: "Budi Santoso", role: "Pengusaha", rating: 4, text: "Fasilitas kabin luar biasa nyaman. Kecepatan respon tim reservasi sangat baik, bahkan untuk permintaan penerbangan mendadak." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const departure = formData.get('departure');
    const destination = formData.get('destination');
    const date = formData.get('date');
    const pax = formData.get('pax');
    const fleetType = formData.get('fleetType');
    
    const text = `Halo Tim Reservasi *${pageData.name}*,\n\nSaya tertarik untuk memesan penerbangan carter. Berikut detail rencana perjalanan saya:\n\n👤 Nama: ${name}\n🛫 Dari: ${departure}\n🛬 Tujuan: ${destination}\n📅 Tanggal: ${date}\n👥 Jumlah Penumpang: ${pax}\n✈️ Preferensi Armada: ${fleetType}\n\nMohon informasi ketersediaan armada dan penawaran harganya. Terima kasih.`;
    
    const waUrl = `https://wa.me/${pageData.phone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: pageData.name,
      text: pageData.title,
      url: window.location.href,
    };
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try { await navigator.share(shareData); } catch (err) { console.error('Error sharing:', err); }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = window.location.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderServiceIcon = (iconName) => {
    switch(iconName) {
      case 'Plane': return <Plane size={24} className="text-[#189AD3]" />;
      case 'Shield': return <Shield size={24} className="text-[#189AD3]" />;
      case 'Briefcase': return <Briefcase size={24} className="text-[#189AD3]" />;
      case 'PlaneTakeoff': return <PlaneTakeoff size={24} className="text-[#189AD3]" />;
      default: return <Check size={24} className="text-[#189AD3]" />;
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #0A2B4E; /* Dark Navy Background */
          color: #f8fafc;
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#0A2B4E] text-slate-100 min-h-screen overflow-hidden pb-32">
        
        <section id="hero" className="relative w-full min-h-[100dvh] flex flex-col justify-end pb-12 px-6">
          <button onClick={handleShare} aria-label="Share this page" className="absolute top-6 right-6 z-20 p-3 bg-[#0A2B4E]/40 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-[#0A2B4E]/60 transition-all shadow-sm">
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img src={pageData.heroImg} alt={pageData.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B4E] via-[#0A2B4E]/80 to-[#0A2B4E]/30"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-24 h-24 rounded-2xl p-1 bg-white mb-6 shadow-2xl border-2 border-[#189AD3]/40 overflow-hidden flex items-center justify-center">
               <img src={pageData.profileImg} alt={pageData.name} className="w-full h-full object-contain" />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#189AD3] font-bold mb-4 tracking-wider text-sm uppercase">{pageData.title}</p>
            <p className="text-slate-300 font-light text-sm leading-relaxed mb-8 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm mb-8">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium">
                  <Instagram size={18} /> Instagram
                </a>
                <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-white text-sm font-medium">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <button onClick={() => scrollToSection('location')} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-[#189AD3]/30 hover:bg-white/20 transition-all text-white text-sm font-medium shadow-[0_0_15px_rgba(24,154,211,0.2)]">
                <MapPin size={18} className="text-[#189AD3]" /> Lokasi Keberangkatan
              </button>
            </div>

            <button onClick={() => scrollToSection('booking-form')} className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#189AD3] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#127AA8] transition-all shadow-[0_0_20px_rgba(24,154,211,0.4)]">
              Reservasi Penerbangan
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        <section id="about" className="py-12 px-6 bg-[#0A2B4E]">
          <div className="flex items-center gap-3 mb-6">
            <Info className="text-[#189AD3]" size={28} />
            <h2 className="text-2xl font-bold tracking-tight text-white">Tentang Kami</h2>
          </div>
          <div className="p-6 bg-[#0E355F] rounded-3xl border border-[#189AD3]/20 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-[#0A2B4E] opacity-50">
              <Plane size={140} />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10 mb-4">
              AeroLink adalah penyedia jasa penerbangan carter premium terkemuka yang berdedikasi untuk memberikan standar keselamatan tertinggi, kemewahan, dan ketepatan waktu.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10">
              Kami memahami bahwa waktu adalah aset paling berharga bagi klien kami. Oleh karena itu, kami merancang setiap perjalanan udara menjadi pengalaman tanpa hambatan yang disesuaikan secara khusus dengan kebutuhan spesifik Anda.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-10 mb-6">
            <History className="text-[#189AD3]" size={28} />
            <h2 className="text-2xl font-bold tracking-tight text-white">Sejarah Singkat</h2>
          </div>
          <div className="pl-4 border-l-2 border-[#189AD3]/30 flex flex-col gap-6">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#189AD3] ring-4 ring-[#0A2B4E]"></div>
              <h4 className="text-white font-bold text-sm mb-1">2018 - Pendirian AeroLink</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Dimulai dengan satu armada Light Jet, berfokus pada melayani rute bisnis domestik yang padat.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#189AD3] ring-4 ring-[#0A2B4E]"></div>
              <h4 className="text-white font-bold text-sm mb-1">2021 - Ekspansi Armada</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Menambah armada Midsize dan Heavy Jet, membuka rute internasional dan layanan medevac.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#189AD3] ring-4 ring-[#0A2B4E]"></div>
              <h4 className="text-white font-bold text-sm mb-1">2023 - Premium Terminal Facility</h4>
              <p className="text-slate-400 text-xs leading-relaxed">Meresmikan lounge khusus dan fasilitas boarding privat untuk kenyamanan maksimal penumpang VIP kami.</p>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 px-6 bg-[#0E355F]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">Layanan Kami</h2>
            <p className="text-[#189AD3] text-sm font-medium">Solusi aviasi komprehensif untuk Anda.</p>
          </div>
          
          <div className="grid gap-4">
            {pageData.services.map((service, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[#0A2B4E] border border-[#189AD3]/20 shadow-md">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-[#0E355F] border border-[#189AD3]/30 flex items-center justify-center">
                  {renderServiceIcon(service.icon)}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-white text-[15px] mb-1">{service.name}</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="fleet" className="py-12 bg-[#0E355F] overflow-hidden">
          <div className="px-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <PlaneTakeoff className="text-[#189AD3]" size={28} />
              <h2 className="text-2xl font-bold tracking-tight text-white">Katalog Armada</h2>
            </div>
            <p className="text-[#189AD3] text-sm font-medium">Pilih pesawat yang sesuai dengan kapasitas dan jarak perjalanan Anda.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-8 no-scrollbar">
            {pageData.fleet.map((jet, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[300px] bg-[#0A2B4E] rounded-3xl overflow-hidden border border-[#189AD3]/20 shadow-xl flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={jet.img} alt={jet.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-[#0A2B4E]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#189AD3] shadow-sm">
                    {jet.type}
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <h3 className="font-bold text-lg text-white">{jet.name}</h3>
                  <div className="flex justify-between items-center bg-[#0E355F] p-3 rounded-xl border border-[#189AD3]/10">
                    <div className="flex flex-col gap-1 items-center w-1/2">
                      <Users size={16} className="text-[#189AD3]" />
                      <span className="text-[11px] font-medium text-slate-300 text-center">{jet.pax}</span>
                    </div>
                    <div className="w-px h-8 bg-[#189AD3]/30"></div>
                    <div className="flex flex-col gap-1 items-center w-1/2">
                      <Gauge size={16} className="text-[#189AD3]" />
                      <span className="text-[11px] font-medium text-slate-300 text-center">{jet.speed}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-12 px-6 bg-[#0A2B4E]">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="text-[#189AD3]" size={28} />
            <h2 className="text-2xl font-bold tracking-tight text-white">Estimasi Harga</h2>
          </div>
          <p className="text-slate-400 text-xs mb-6 font-medium">Harga di bawah bersifat indikatif. Silakan hubungi kami untuk penawaran akurat berdasarkan tanggal penerbangan.</p>
          
          <div className="flex flex-col gap-3">
            {pageData.pricing.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-[#0E355F] rounded-2xl border border-[#189AD3]/20 gap-2">
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-[13px] font-bold text-white">{item.route}</span>
                  <span className="text-[11px] text-[#189AD3]">{item.type}</span>
                </div>
                <div className="text-[12px] font-bold bg-[#0A2B4E] py-2 rounded-lg text-white border border-[#189AD3]/20 w-[135px] text-center shrink-0">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="py-12 px-6 bg-[#0E355F]">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-[#189AD3]" size={28} />
            <h2 className="text-2xl font-bold tracking-tight text-white">Lokasi Keberangkatan</h2>
          </div>
          
          <div className="bg-[#0A2B4E] rounded-3xl p-5 border border-[#189AD3]/20 shadow-md">
            <h3 className="font-bold text-white text-[15px] mb-2">Premium Terminal (Private)</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{pageData.address}</p>
            <a 
              href={pageData.links.maps} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#189AD3]/10 text-[#189AD3] font-bold text-sm rounded-xl hover:bg-[#189AD3]/20 transition-colors border border-[#189AD3]/30"
            >
              <MapPin size={16} /> Buka di Google Maps
            </a>
          </div>
        </section>

        <section id="faq" className="py-12 px-6 bg-[#0A2B4E]">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-[#189AD3]" size={28} />
            <h2 className="text-2xl font-bold tracking-tight text-white">FAQ</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0E355F] rounded-2xl border border-[#189AD3]/20 overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className="font-bold text-[13px] text-white pr-4">{faq.q}</span>
                  <ChevronDown size={18} className={`text-[#189AD3] shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="p-4 pt-0 text-slate-300 text-[12px] leading-relaxed border-t border-[#189AD3]/10 mt-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="py-12 px-6 bg-[#0E355F]">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">Pengalaman Klien</h2>
            <p className="text-[#189AD3] text-sm font-medium">Kepercayaan Anda adalah prioritas kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-[#0A2B4E] p-6 rounded-3xl border border-[#189AD3]/20 shadow-lg flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Quote className="text-[#189AD3]/50" size={28} />
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#189AD3] text-[#189AD3]" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-[#189AD3]/20 flex flex-col">
                  <span className="text-[13px] font-bold text-white">{testi.name}</span>
                  <span className="text-[11px] text-[#189AD3]">{testi.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="booking-form" className="py-12 px-6 bg-[#0A2B4E]">
          <div className="bg-[#0E355F] border border-[#189AD3]/30 rounded-[2rem] p-6 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#189AD3]/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Pesan Penerbangan</h2>
              <p className="text-[#189AD3] text-[13px] leading-relaxed font-medium">Isi detail perjalanan Anda untuk mendapatkan penawaran eksklusif.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide ml-1">Nama Pemesan / Perusahaan</label>
                <input type="text" name="name" required placeholder="Contoh: PT. Maju Bersama / Bpk. Budi" className="w-full bg-[#0A2B4E] border border-[#189AD3]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#189AD3] focus:ring-1 focus:ring-[#189AD3] transition-all" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide ml-1">Dari (Bandara)</label>
                  <input type="text" name="departure" required placeholder="Cth: Halim (HLP)" className="w-full bg-[#0A2B4E] border border-[#189AD3]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#189AD3] focus:ring-1 focus:ring-[#189AD3] transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide ml-1">Ke (Bandara)</label>
                  <input type="text" name="destination" required placeholder="Cth: Ngurah Rai (DPS)" className="w-full bg-[#0A2B4E] border border-[#189AD3]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#189AD3] focus:ring-1 focus:ring-[#189AD3] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide ml-1">Tanggal & Waktu</label>
                  <input type="datetime-local" name="date" required className="w-full bg-[#0A2B4E] border border-[#189AD3]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#189AD3] focus:ring-1 focus:ring-[#189AD3] transition-all" style={{colorScheme: 'dark'}} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide ml-1">Jumlah Pax</label>
                  <input type="number" name="pax" min="1" max="19" required placeholder="Maks. 19" className="w-full bg-[#0A2B4E] border border-[#189AD3]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#189AD3] focus:ring-1 focus:ring-[#189AD3] transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wide ml-1">Preferensi Armada</label>
                <select name="fleetType" required defaultValue="" className="w-full bg-[#0A2B4E] border border-[#189AD3]/30 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#189AD3] focus:ring-1 focus:ring-[#189AD3] transition-all appearance-none">
                  <option value="" disabled className="text-slate-500">Pilih armada...</option>
                  <option value="Light Jet (Maks 7 Orang)">Light Jet (Maks 7 Orang)</option>
                  <option value="Midsize Jet (Maks 9 Orang)">Midsize Jet (Maks 9 Orang)</option>
                  <option value="Heavy Jet (Maks 14 Orang)">Heavy Jet (Maks 14 Orang)</option>
                  <option value="Butuh Rekomendasi Tim">Belum Tahu / Butuh Rekomendasi Tim</option>
                </select>
              </div>

              <button type="submit" className="w-full mt-4 bg-[#189AD3] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#127AA8] transition-colors shadow-lg">
                Kirim Permintaan via WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </form>
          </div>
        </section>

        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center bg-[#0E355F]">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 border border-[#189AD3]/30 shadow-md p-1.5 overflow-hidden">
            <img src={pageData.profileImg} alt={pageData.name} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-1 items-center px-6">
            <span className="font-extrabold text-white text-lg tracking-wide">{pageData.name}</span>
            <span className="text-slate-400 text-xs mt-1 max-w-[280px]">{pageData.address}</span>
          </div>
          <p className="text-slate-500 text-[11px] mt-8 mb-2">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] tracking-wide font-medium hover:text-[#189AD3] transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
          <button onClick={() => scrollToSection('booking-form')} className="w-full flex items-center justify-between px-5 py-3 bg-[#0A2B4E]/90 backdrop-blur-xl border border-[#189AD3]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(10,43,78,0.6)] hover:bg-[#0E355F] active:scale-[0.98] transition-all">
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm text-white">Pesan Penerbangan</span>
              <span className="text-[10px] text-[#189AD3]">Tanya ketersediaan armada</span>
            </div>
            <div className="bg-[#189AD3] text-white p-2.5 rounded-xl">
              <PlaneTakeoff size={18} />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center transition-opacity" onClick={() => setShowShareModal(false)}>
          <div className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button onClick={() => setShowShareModal(false)} className="p-1 text-slate-400 hover:bg-slate-100 rounded-full transition-all"><X size={20} /></button>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <button onClick={copyToClipboard} className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all border border-slate-200">
                  {copied ? <Check size={24} className="text-emerald-600" /> : <Copy size={24} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">{copied ? 'Tersalin' : 'Salin Tautan'}</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')} className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-all">
                  <Twitter size={24} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')} className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 transition-all">
                  <Facebook size={24} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}