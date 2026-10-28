export interface ContactLink {
  label: string;
  href: string;
  icon?: "mail" | "github" | "linkedin" | "instagram";
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  intro: string;
  edition: string;
  photo: {
    src: string;
    srcset: string;
    width: number;
    height: number;
    alt: string;
  };
  about: {
    lead: string;
    paragraphs: string[];
    principles: { title: string; body: string }[];
  };
  contacts: ContactLink[];
}

export const profile: Profile = {
  name: "El Hakim",
  role: "Aspiring Web Developer",
  headline: "Building digital experiences with purpose.",
  intro:
    "Saya sedang mengembangkan kemampuan dalam web development, UI/UX, dan membangun produk digital yang bermanfaat. Saya senang mempelajari cara kerja sebuah produk, memecahkan masalah, dan mengubah ide menjadi pengalaman digital yang fungsional.",
  edition: "Portfolio — Edisi 01 / 2026",
  photo: {
    src: "/images/profile/el-hakim-720.webp",
    srcset:
      "/images/profile/el-hakim-480.webp 480w, /images/profile/el-hakim-720.webp 720w",
    width: 720,
    height: 900,
    alt: "El Hakim tersenyum sambil mengenakan seragam sekolah biru.",
  },
  about: {
    lead: "Saya siswa SMK jurusan RPL yang sedang belajar membangun web dari sisi tampilan sampai data.",
    paragraphs: [
      "Ketertarikan saya ada pada titik ketika sebuah ide harus diterjemahkan menjadi alur, layout, lalu kode yang benar-benar bisa dipakai. Saya senang membongkar cara kerja sebuah produk: apa yang dilihat pengguna, bagaimana data mengalir, dan bagian mana yang membuat pengalaman terasa membingungkan.",
      "Saat ini saya belajar sambil mengerjakan proyek sekolah, mulai dari toko elektronik sampai aplikasi pengelolaan data. Setiap proyek saya jadikan kesempatan untuk menguji cara berpikir, bukan hanya menambah daftar teknologi.",
    ],
    principles: [
      {
        title: "Mulai dari masalah",
        body: "Tampilan hanya berguna kalau menjawab kebutuhan nyata. Saya berusaha memahami alurnya dulu sebelum memilih komponen.",
      },
      {
        title: "Sederhana, lalu diuji",
        body: "Versi pertama dibuat cukup jelas untuk dipakai, kemudian diperbaiki berdasarkan hasil pengujian di layar nyata.",
      },
      {
        title: "Belajar sambil membangun",
        body: "Saya mencatat keputusan dan kesalahan selama mengerjakan proyek agar pelajaran berikutnya tidak hilang.",
      },
    ],
  },
  // Isi setelah tautan tersedia. Contoh:
  // { label: "Email", href: "mailto:alamat@contoh.com", icon: "mail" }
  contacts: [],
};
