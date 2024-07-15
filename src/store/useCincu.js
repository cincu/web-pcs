import { create } from "zustand";

const useCincuStore = create((set) => ({
  cincu: {
    name: "Canan Cansu Caner",
    year: 2024,
    info: "A former architect turned web developer, now advancing on cyber-security. With a solid foundation in JavaScript, ReactJS, NextJS, and full-stack development, I’m channeling my analytical skills towards mastering cyber threat analysis and mitigation. Leveraging a unique blend of architectural principles and technical expertise, I am eager to contribute to and grow within the tech industry, focusing on building secure and resilient digital infrastructures. Explore my journey and discover how I apply my diverse skills in the dynamic world of cybersecurity.",
    long: [
      "Born in 1993, originally from Istanbul and educated in Italy. I started my professional journey in architecture, where I honed skills in meticulous planning and design. My passion for technology eventually led me to transition into web development, gaining experience with JavaScript, ReactJS, NextJS, and full-stack development. Today, I am dedicated to cybersecurity, fascinated by its complexities and the critical role it plays in protecting our digital lives. My background in architecture and web development provides a unique perspective on designing secure, scalable, and efficient systems. Beyond tech, I am passionate about beekeeping, food, design, political ecology, history, and biology. Living in Berlin allows me to explore and integrate these diverse interests, from technology and cybersecurity to nature and environmental topics. I am excited to grow in the field of cybersecurity and contribute to making the digital world a safer place. ",
    ],
  },
  about: {
    education: [
      "High School Diploma in International Baccaloria",
      "Bachelor of Architecture in Politecnico di Milano",
      "Masters in Architecture and Urban Planning in Politecnico di Milano",
      "Full Stack Web Development in Spiced Academy Berlin",
    ],
    experience: [
      "Designer and Execution Planner in Heim Balp Architekten, Berlin, 3 years",
      "Architectural Designer in Atolye Kolektif, Istanbul, 1 year",
      "Quantity Surveyor and tender-bid preperation, Atlas Construction, Istanbul, 1 year",
    ],
    languages: ["Turkish", "English", "German", "Italian"],
    voluntary: [
      "Infographics, content creation and other various voluntary work in Puduhepa, Berlin, since 2021",
      "Voluntary work with stray dogs, Kurtkoy Patileri, Istanbul, since 2017 and on and off other organizations",
      "Studies in Urban political ecology",
    ],
    references: [
      "https://github.com/cincu",
      "https://linkedin.com/in/canan-cansu-caner",
      "https://issuu.com/canancansucaner/docs/cc_ap_2023",
      "https://jumisu.vercel.app/",
    ],
  },
  updateCincu: (newInfo) =>
    set((state) => ({
      cincu: { ...state.cincu, ...newInfo },
    })),
}));

export default useCincuStore;
