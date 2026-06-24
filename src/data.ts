import { Project } from './types';

export const projectsData: Project[] = [
  {
    id: 'kebonlokal',
    title: 'Kebonlokal Market',
    category: 'UI/UX Design',
    subtitle: 'Fresh Market E-Commerce Mockup & Prototype',
    description: 'Konseptualisasi end-to-end high-fidelity mockup marketplace bahan pangan organik berbasis website.',
    challenge: 'Masyarakat urban sering kali kesulitan mendapatkan akses bahan pangan organik segar langsung dari petani lokal Bandung karena panjangnya rantai distribusi tradisional, serta minimnya sistem pelacakan kualitas (freshness info) yang transparan bagi konsumen.',
    solution: 'Merancang arsitektur informasi dan antarmuka web interaktif menggunakan Figma dengan pendekatan modern Bento Grid. Desain difokuskan pada pemetaan empat halaman krusial: Homepage yang bersih, Product Detail yang dilengkapi indikator tingkat kesegaran produk, Shopping Chart & Summary yang ringkas, hingga sistem visualisasi Order & Live Tracking dari ladang hingga ke rumah konsumen.',
    impact: 'Menghasilkan purwarupa interaktif komprehensif (Figma Prototype) yang divalidasi melalui user testing, siap diserahkan kepada tim developer lengkap dengan panduan aset visual yang konsisten dan responsif.',
    images: [
      'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=500'
    ],
    tags: ['UI/UX Design', 'Figma Prototype', 'Bento Grid', 'Freshness Indicator', 'E-Commerce Wireframing'],
    role: 'Lead UI/UX Designer',
    date: 'Tugas Kuliah',
    client: 'Universitas Teknologi Digital',
    links: {
      figma: 'https://www.figma.com/design/7MHDcNnFJRKl8Egqjk28NI/EAS-UI-UX-PROTOTYPE?node-id=0-1&m=dev&t=VWjsTrAeisxyOKK1-1',
      live: 'https://cintia404.github.io/portofoliocintia.github.io/'
    }
  },
  {
    id: 'sicantik-skincare',
    title: 'SICANTIK – Skincare Reminders',
    category: 'Web Development',
    subtitle: 'Full-Stack Web-Based Skin Log & Notification System',
    description: 'Pengembangan aplikasi web fungsional pelacak rutinitas perawatan kulit harian terintegrasi database.',
    challenge: 'Banyak pemula perawatan kecantikan sering melewatkan urutan produk skincare atau lupa membedakan jadwal pemakaian produk harian (pagi vs malam), sehingga hasil perawatan kulit tidak berjalan optimal.',
    solution: 'Membangun aplikasi web interaktif responsif menggunakan HTML5, CSS3, JavaScript, dan PHP Core. Sistem ini menyediakan fitur autentikasi akun yang aman, kalender log harian perkembangan kulit, serta dasbor pengingat otomatis produk skincare sesuai jenis kulit yang disimpan langsung ke dalam basis data MySQL.',
    impact: 'Sukses merancang dan merilis aplikasi web fungsional yang siap pakai (live deployment) dengan antarmuka yang ramah pengguna, memudahkan pencatatan skin journey secara real-time dan terstruktur.',
    images: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800&h=500'
    ],
    tags: ['PHP Core', 'JavaScript', 'MySQL Database', 'Responsive Design', 'Auth System'],
    role: 'Full Stack Web Developer',
    date: 'Project Tugas Akhir',
    client: 'Universitas Teknologi Digital',
    links: {
      live: 'https://sicantik.alwaysdata.net/sicantik-auth/public/'
    }
  },
  {
    id: 'soco-lite',
    title: 'Soco Lite Mod Application',
    category: 'Mobile Development',
    subtitle: 'Android Studio Native UI Replication & Modification',
    description: 'Modifikasi dan implementasi replika layout aplikasi mobile kosmetik menggunakan Android Studio.',
    challenge: 'Mengadaptasi kompleksitas tata letak dinamis dari platform kecantikan e-commerce ke dalam lingkungan native mobile yang ringan, responsif, dan bebas dari isu tumpang tindih elemen visual.',
    solution: 'Melakukan rekayasa antarmuka visual (UI Replication) aplikasi Soco Lite menggunakan XML layout dan Java/Kotlin di Android Studio. Mengoptimalkan penempatan komponen gambar produk, menu pencarian, dan tombol filter navigasi bawah, serta melakukan uji emulasi fungsionalitas di berbagai ukuran layar smartphone.',
    impact: 'Menghasilkan prototipe aplikasi mobile fungsional (.apk) dengan performa render visual yang mulus, struktur kode tata letak yang bersih, serta tingkat kemiripan antarmuka yang presisi tinggi.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800&h=500'
    ],
    tags: ['Android Studio', 'XML Layout', 'Mobile UI Modification', 'App Emulation Testing'],
    role: 'Mobile UI Developer',
    date: 'Tugas Kuliah',
    client: 'Universitas Teknologi Digital'
  },
  {
    id: 'hos-project',
    title: 'HOS Project – Kawasan Bina Progresif',
    category: 'Community Volunteer',
    subtitle: 'Event Division Volunteer & Literacy Program Leader',
    description: 'Memimpin implementasi program literasi unggulan dan koordinasi lintas program sosial kemasyarakatan.',
    challenge: 'Adanya kesenjangan tingkat kemampuan membaca pada anak-anak usia dini di kawasan binaan yang membutuhkan pendekatan belajar intensif, interaktif, dan adaptif agar tidak membosankan.',
    solution: 'Dipercaya memimpin program literasi andalan "2 Weeks Can Read" di Batch #1. Menyusun materi pembelajaran kreatif harian, memfasilitasi sesi micro-teaching yang menyenangkan, mengevaluasi berkala grafik progres membaca anak, serta aktif berkolaborasi menyukseskan 7 program sosial kemasyarakatan lainnya di Desa Bojong Sari.',
    impact: 'Meningkatkan motivasi dan kemampuan membaca dasar anak-anak binaan secara signifikan, serta membangun kedekatan emosional (engagement) yang kuat antara relawan, anak-anak, dan masyarakat sekitar.',
    images: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800&h=500'
    ],
    tags: ['Program Coordination', 'Public Speaking', 'Micro-Teaching', 'Community Leadership', 'Social Impact'],
    role: 'Event Division Volunteer & Program Leader',
    date: 'Aug 2024',
    client: 'HOS Project Kawasan Bina Progresif Batch #1'
  },
  {
    id: 'kalamoeda-manager',
    title: 'Kalamoeda Indonesia Media',
    category: 'Management & PR',
    subtitle: 'Public Relations & Event Project Manager',
    description: 'Mengelola komunikasi strategis media komunitas, peliputan jurnalistik lapangan, dan manajemen event.',
    challenge: 'Menjaga konsistensi kehadiran media (media presence) dan meningkatkan keterlibatan pemirsa (audience engagement) di tengah dinamisnya tren konsumsi informasi digital mahasiswa.',
    solution: 'Bertanggung jawab penuh atas manajemen operasional hubungan masyarakat, memimpin perencanaan hingga eksekusi proyek acara (event projects), menyusun draf penulisan artikel berita, melakukan peliputan langsung di lapangan, serta menjadi on-camera talent untuk wawancara eksklusif terstruktur.',
    impact: 'Memperkuat jangkauan komunikasi publik platform Kalamoeda Indonesia, meningkatkan engagement media sosial, serta menyukseskan rangkaian proyek acara yang terstruktur dan berdampak luas.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800&h=500'
    ],
    tags: ['Project Management', 'Public Relations', 'Field Reporting', 'Media Strategy', 'Interviewing Techniques'],
    role: 'PR & Event Project Manager',
    date: 'Feb 2026 - Present',
    client: 'Kalamoeda Indonesia'
  },
  {
    id: 'live-streaming-host',
    title: 'Digital Live Commerce Sales Host',
    category: 'Public Speaking & Sales',
    subtitle: 'Professional Live Streamer (TikTok Shop & Shopee Live)',
    description: 'Menggerakkan performa penjualan digital real-time melalui strategi komunikasi persuasif.',
    challenge: 'Mempertahankan retensi perhatian penonton (viewer retention) yang sangat singkat dalam ekosistem live streaming dan mengubah interaksi penonton menjadi konversi penjualan langsung (checkout).',
    solution: 'Bekerja secara interaktif menyajikan demonstrasi produk, mengedukasi keunggulan fungsi barang, dan membangun komunikasi dua arah yang energetik dengan audiens. Melakukan analisis instan terhadap grafik interaksi penonton untuk menyesuaikan gaya penyampaian secara real-time di panggung kamera.',
    impact: 'Berhasil mendorong performa konversi penjualan produk, meningkatkan angka penjualan toko, serta membangun rasa percaya yang kuat antara brand dengan calon konsumen digital.',
    images: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&q=80&w=800&h=500'
    ],
    tags: ['Live Commerce', 'Persuasive Communication', 'Digital Marketing', 'Audience Analytics', 'Public Speaking'],
    role: 'Digital Live Streaming Sales Host',
    date: '2024 - 2025',
    client: 'BABIES CHOICE'
  },
  {
    id: 'court-it-support',
    title: 'Administrative & IT Support Intern',
    category: 'Administration & IT',
    subtitle: 'Institutional Operational Support & Infrastructure Maintenance',
    description: 'Optimalisasi manajemen dokumen birokrasi dan dukungan infrastruktur teknis ruang sidang.',
    challenge: 'Memastikan akurasi pengarsipan surat-menyurat resmi lembaga peradilan dengan tingkat kesalahan nol persen, serta menjamin kesiapan sarana IT ruang sidang terbebas dari kendala teknis.',
    solution: 'Melakukan rekapitulasi entri data sistem informasi surat keluar-masuk divisi organisasi, mengelola manajemen berkas penting secara presisi, serta melakukan inspeksi rutin kesiapan perangkat keras (hardware) dan jaringan IT untuk mendukung kelancaran fasilitas infrastruktur ruang sidang.',
    impact: 'Meningkatkan efisiensi waktu pencarian arsip korespondensi, memperkuat keamanan administrasi data, dan memastikan seluruh jalannya agenda persidangan institusi bebas dari gangguan teknis perangkat.',
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=500',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=500'
    ],
    tags: ['Technical Support', 'Administrative Assistance', 'Data Entry Accuracy', 'Infrastructure Maintenance'],
    role: 'Administrative & IT Support Intern',
    date: 'Aug 2022 - Nov 2022',
    client: 'Pengadilan Negeri Bale Bandung Kelas IA'
  }
];

export const musicTracksList = [
  {
    id: 'silk',
    title: 'Satin Bed of Folds',
    artist: 'Cintia Beats',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    duration: '5:44'
  }
];