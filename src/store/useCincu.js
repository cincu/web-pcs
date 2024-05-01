import { create } from "zustand";

const useCincuStore = create((set) => ({
  cincu: {
    name: "Canan Cansu Caner",
    year: 2024,
    info: " An architect turned web developer, now focusing on cyber-security. My technical journey includes gaining proficiency in JavaScript, ReactJS, NextJS, and understanding full-stack development principles. Transitioning into cybersecurity, I aim to apply these technical foundations and analytical skills to cyber threat analysis and mitigation. While web-dev background aided me to grasp Python quickly, architecture background provided me the perspective to realise the necessity for automation for both daily and complex tasks, enhancing my approach to securing digital infrastructures. Seeking an entry-level position, I am ready to utilize my technical expertise in cybersecurity tasks, including risk assessment, system security, and implementing preventive measures against cyber vulnerabilities. When starting a project, I believe keeping scalability and ease of maintenance in mind are essential to achieve juxtaposed complex structures.",
  },
  about: {
    Education: [
      "High School Diploma in International Baccaloria",
      "Bachelor of Architecture in Politecnico di Milano",
      "Masters in Architecture and Urban Planning in Politecnico di Milano",
      "Full Stack Web Development in Spiced Academy Berlin",
    ],
    Experience: { role: ["execution planner", "architectural designer"] },
  },
  updateCincu: (newInfo) =>
    set((state) => ({
      cincu: { ...state.cincu, ...newInfo },
    })),
}));

export default useCincuStore;
