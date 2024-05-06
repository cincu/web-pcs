import { create } from "zustand";

const useCincuStore = create((set) => ({
  cincu: {
    name: "Canan Cansu Caner",
    year: 2024,
    info: "A former architect turned web developer, now advancing on cyber-security. With a solid foundation in JavaScript, ReactJS, NextJS, and full-stack development, I’m channeling my analytical skills towards mastering cyber threat analysis and mitigation. Leveraging a unique blend of architectural principles and technical expertise, I am eager to contribute to and grow within the tech industry, focusing on building secure and resilient digital infrastructures. Explore my journey and discover how I apply my diverse skills in the dynamic world of cybersecurity.",
    long: [
      "Embarking on my transformative journey from architecture to technology has been both thrilling and enlightening. Starting off in the structured world of architecture, I discovered my passion for technology and made the leap to web development.",
      "Today, I am fully immersed in the world of cybersecurity, a field that fascinates me daily with its complexities and the critical role it plays in protecting our digital lives. My training in JavaScript, ReactJS, NextJS, full-stack development, has laid a strong foundation for me. My ability to quickly grasp Python was significantly enhanced by my background in web development, providing me with powerful tools to tackle complex cybersecurity challenges. This technical versatility allows me to explore the nuances of cyber threat analysis, system security, and proactive defense strategies with a keen eye for detail.",
      "Architecture taught me the importance of a solid foundation and meticulous planning—skills that translate surprisingly well into cybersecurity. My background has also instilled in me a deep appreciation for automation, which is essential for both managing daily tasks and addressing complex security challenges efficiently. These insights are pivotal in designing digital defenses that are not only effective but also scalable and sustainable.",
      "As I seek to start my career in tech, I am eager to apply my blend of technical skills and strategic thinking to a role where I can make a real difference. I am particularly drawn to opportunities that challenge me to secure applications and data, ensuring they are resilient against attacks while maintaining compliance with industry standards. My interests extend deeply into network architecture, system administration, and cloud security—areas where my analytical abilities and management skills can drive substantial improvements in system integrity and operational efficiency.",
      "I am excited as I continue in this journey and grow, and contribute to the ever-evolving field of cybersecurity. Moreover, I’m thrilled to do this together to make the digital world a safer place, employing sophisticated security measures as well-structured and reliable as the buildings I once designed. My goal is to integrate solid cybersecurity practices with effective management to ensure that infrastructure is not only secure but also optimally configured for performance and scalability.",
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
