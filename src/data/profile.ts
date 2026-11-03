export interface ContactLink {
  label: string;
  href: string;
  icon?: "mail" | "github" | "linkedin" | "instagram";
}

export interface Profile {
  name: string;
  role: string;
  intro: string;
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
  };
  contacts: ContactLink[];
}

export const profile: Profile = {
  name: "El Hakim",
  role: "Siswa SMK RPL",
  intro:
    "Saya siswa SMK jurusan RPL. Saya belajar membangun web dari tampilan sampai database lewat proyek sekolah, lalu menuliskan proses dan hasilnya di sini.",
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
      "Saya suka bagian ketika sebuah ide berubah menjadi alur, layout, lalu kode yang benar-benar bisa dipakai. Saya senang membongkar cara kerja sebuah produk: apa yang dilihat pengguna, bagaimana data mengalir, dan bagian mana yang membuat pengalaman terasa membingungkan.",
      "Saat ini saya belajar sambil mengerjakan proyek sekolah, mulai dari toko elektronik sampai aplikasi pengelolaan data. Setiap proyek saya pakai untuk melatih cara berpikir dan menulis kode yang rapi.",
    ],
  },
  contacts: [
    {
      label: "GitHub",
      href: "https://github.com/ELHAKIM-2010",
      icon: "github",
    },
  ],
};
