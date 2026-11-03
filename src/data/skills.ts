export type SkillLevel = "dipakai" | "dipelajari";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  title: string;
  note: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    note: "Membangun antarmuka dan menjaga tampilan tetap jelas di berbagai ukuran layar.",
    items: [
      { name: "HTML", level: "dipakai" },
      { name: "CSS", level: "dipakai" },
      { name: "JavaScript", level: "dipakai" },
      { name: "React", level: "dipakai" },
      { name: "Next.js", level: "dipakai" },
      { name: "TypeScript", level: "dipakai" },
      { name: "Tailwind CSS", level: "dipakai" },
      { name: "Astro", level: "dipakai" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    note: "Membangun endpoint, validasi, dan aturan akses di sisi server.",
    items: [
      { name: "Node.js", level: "dipakai" },
      { name: "Route handlers", level: "dipakai" },
      { name: "Auth.js", level: "dipakai" },
      { name: "Zod", level: "dipakai" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    note: "Menyusun skema dan menghubungkan aplikasi ke basis data.",
    items: [
      { name: "PostgreSQL", level: "dipakai" },
      { name: "Neon", level: "dipakai" },
      { name: "MySQL (Aiven)", level: "dipakai" },
      { name: "Drizzle ORM", level: "dipakai" },
      { name: "mysql2", level: "dipakai" },
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX & prototyping",
    note: "Merancang alur dan tampilan sebelum menulis kode.",
    items: [
      { name: "Wireframing", level: "dipelajari" },
      { name: "Prototyping", level: "dipelajari" },
      { name: "Design system", level: "dipelajari" },
    ],
  },
  {
    id: "tools",
    title: "Developer tools",
    note: "Alat sehari-hari untuk menulis, menguji, dan merilis.",
    items: [
      { name: "VS Code", level: "dipakai" },
      { name: "npm", level: "dipakai" },
      { name: "Git", level: "dipakai" },
      { name: "GitHub", level: "dipakai" },
      { name: "Vercel", level: "dipakai" },
    ],
  },
];
