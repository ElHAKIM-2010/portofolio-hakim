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
      { name: "TypeScript", level: "dipelajari" },
      { name: "Astro", level: "dipelajari" },
      { name: "Tailwind CSS", level: "dipelajari" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    note: "Memahami dasar permintaan data dan logika di sisi server.",
    items: [
      { name: "Node.js", level: "dipelajari" },
      { name: "API routes", level: "dipelajari" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    note: "Menyusun struktur data dan menghubungkannya ke aplikasi.",
    items: [
      { name: "PostgreSQL", level: "dipelajari" },
      { name: "Neon", level: "dipelajari" },
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
      { name: "Git", level: "dipelajari" },
      { name: "GitHub", level: "dipelajari" },
      { name: "Vercel", level: "dipelajari" },
    ],
  },
];
