import { create } from "zustand";

const useCincuStore = create((set) => ({
  cincu: {
    name: "Canan Cansu Caner",
    year: 2024,
    info: "A former architect turned web developer, now advancing on cyber-security. With a solid foundation in JavaScript, ReactJS, NextJS, and full-stack development, I’m channeling my analytical skills towards mastering cyber threat analysis and mitigation. Leveraging a unique blend of architectural principles and technical expertise, I am eager to contribute to and grow within the tech industry, focusing on building secure and resilient digital infrastructures. Explore my journey and discover how I apply my diverse skills in the dynamic world of cybersecurity.",
    long: [
      "Born in 1993, originally from Istanbul and educated in Italy. I started my professional journey in architecture, where I developed skills in planning and design. My passion for technology eventually led me to transition into web development, gaining experience with JavaScript, ReactJS, NextJS, and full-stack development. Today, I am dedicated to cybersecurity, fascinated by its complexities and the critical role it plays in protecting our digital lives. My background in architecture and web development provides a unique perspective on designing secure, scalable, and efficient systems. Beyond tech, I am passionate about beekeeping, food, design, political ecology, history, and biology. Living in Berlin allows me to explore and integrate these diverse interests, from technology and cybersecurity to nature and environmental topics. I am excited to grow in the field of cybersecurity and contribute to making the digital world a safer place. ",
    ],
  },
  about: {
    education: [
      "<strong>2024 - Cyber Security Bootcamp, Masterschool, online, certification successful completion.</strong> <br><strong>Hands-On Skill Development</strong> </br>Immersed in networking, operating systems, and Python programming, complemented by participation in industry-aligned projects. <br><strong>Certification Preparation</br></strong> Focused training for the CompTIA Security+ (SY0-701) exam, enhancing skills in security analytics with Splunk and mastering firewall administration. <br><strong>Strategic Security Frameworks</br></strong> Delved into applying the MITRE ATT&CK framework, ensuring compliance with ISO 27001:2013, and fortifying TCP/IP security protocols.<br><strong>IT Support Expertise</strong> </br>Cultivated a robust foundation in IT support, including in-depth training on Windows 10 and 11, network troubleshooting techniques, and essential help desk operations ",
      "<strong>2023 - Full Stack Web Development Bootcamp in Spiced Academy Berlin, certification upon successful completion</strong> Group and individual work on 6 web applications using APIs. Deep knowledge gained over HTML, CSS, Javascript, ReactJS, MongoDB, Next. Final project for an artist, database, content management system, authentication log-in, application form and portfolio website development.",
      "<strong>2021 - Masters in Architecture and Urban Planning in Politecnico di Milano, 103/110 </strong> <br/>During my Master’s in Architecture and Urban Design at Politecnico di Milano, I engaged in both urban design studies and building technology studios, which enhanced my understanding of sustainable architecture and urban environments. I participated in a reconstruction project in Frankfurt, where I worked on revitalizing urban spaces that were once bombed in the second world war, and in a building preservation project in China, focusing on preserving historical structures, exploring traditional building methods, as well as projects in Milan. Additionally, I successfully completed a semester-long Revit course, gaining proficiency in this essential architectural software. ",
      "<strong>2015 - Bachelor of Architecture in Politecnico di Milano, Bsc, 100/110 </strong>",
      "<strong>2012 - High School Diploma in International Baccalaureate, High Level in Economics, 39/43 </strong>",
    ],
    experience: [
      "<strong>Designer and Execution Planner in Heim Balp Architekten, Berlin, 3 years </strong> <br/>Specialized in producing technical drawings for construction in a 15-person office, I participated primarily in projects based in Berlin and Milan. Over three years, I gained proficiency in Vectorworks, a BIM software, becoming the go-to person for troubleshooting and optimizing its integration into the workflow. <br/> One major project was an industrial conversion in Berlin, where I contributed to transforming an old industrial site into a multifunctional space for industry, coworking, and business. <br/>Another significant project involved managing a factory building with office spaces in Milan, from building phases 1-5.<br/>Additionally, I worked on numerous smaller residential projects and handled building permit application preparations. My role involved close collaboration with colleagues, assisting and teaching them to enhance efficiency. ",
      "<strong>Architectural Designer in Atolye Kolektif, Istanbul, 1 year</strong> <br/>",
      "<strong>Quantity Surveyor and tender-bid preperation, Atlas Construction, Istanbul, 1 year</strong> <br/>",
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
