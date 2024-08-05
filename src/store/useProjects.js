import { create } from "zustand";

const useProjectsStore = create((set, get) => ({
  projects: [
    {
      id: 1,
      title: "Awareness",
      background: "/images/id1.png",
      banner: "/images/banner1.png",
      tags: [
        "sensitive data",
        "corporate security",
        "regulatory compliance",
        "ai vulnerabilities",
      ],
      subtitle:
        "Security awareness education aims to emphasize the importance of confidentiality using AI and integrate it in corporate culture",
      date: "03.2024",
      reference:
        "https://www.darkreading.com/cloud-security/aws-ciso-cloud-customers-need-secure-ai-workloads",
      intro:
        "In 2024, the digital landscape is evolving at an unprecedented pace, with artificial intelligence (AI) tools becoming increasingly integral to corporate operations across various industries. While AI brings immense potential for efficiency and innovation, it also introduces new challenges, particularly concerning the protection of sensitive information and the prevention of data leaks.Against this backdrop, educating corporate workers on safeguarding sensitive information when using AI tools is not just important; it's absolutely paramount.",
      text: "",
      list: "",
      subtext: "",
      midtext: "",
      finalWord: "",
      videoLink: "",
    },
    {
      id: 2,
      title: "Sazan Avi",
      background: "/images/id2.png",
      banner: "/images/banner2.png",
      tags: ["e-mail phishing", "MFA Bypass", "SMS phishing", "evilginx"],
      subtitle:
        "The phishing server aims to explore different means for different phishing campaigns using various social engineering methods",
      date: "04.2024",
      reference: [
        "[GoPhish repo](https://github.com/gophish/gophish)",
        "[Evilgophish repo](https://github.com/fin3ss3g0d/evilgophish) (deprecated)",
        "[Evilginx2 repo](https://github.com/kgretzky/evilginx2)",
      ],
      intro: [
        "Phishing attacks are one of the most significant threats in cybersecurity today, tricking people into revealing sensitive information like passwords and financial details. This project involves configuring a phishing server to understand the mechanics of these attacks, which is crucial for enhancing our defenses against them. By creating realistic phishing scenarios, we can train employees to better recognize and respond to phishing attempts, significantly reducing the risk of successful attacks. By doing this project, I know what's happening under the hood of a phishing attack, providing valuable insights to strengthen our security measures. This project underscores the importance of continuous education and hands-on training in fostering a security-aware culture, ultimately protecting organizations from evolving cyber threats.",
      ],
    },
    {
      id: 3,
      title: "Capture the Flag",
      background: "/images/id3.png",
      banner: "/images/banner3.png",
      tags: ["Linux", "Encryption", "Hashing", "File Systems", "NMAP"],
      subtitle:
        "The write-up collects steps and tricks used to tackle the CTF room that is developed to explore Linux environments in depth",
      date: "04.2024",
      intro: [
        "Participating in a Linux Capture the Flag (CTF) task is a crucial exercise for anyone looking to improve their cybersecurity skills. This task helps you become proficient in navigating the Linux environment, uncovering hidden flags, and using hash functions for data verification. It also covers the basics of encryption, providing practical knowledge for protecting sensitive information. This hands-on experience is essential for preparing to tackle real-world cybersecurity challenges.",
      ],
    },
    {
      id: 4,
      title: "Nessus Scan",
      background: "/images/id4.png",
      banner: "/images/banner4.png",

      tags: [
        "Vulnerability Scan",
        "Threat Assessment",
        "Scan Policies",
        "Compliance Checks",
      ],
      subtitle:
        "The write-up 'Vulnerability Scan' is a beginner's guide to set-up, utilize and analyze the results of the powerful tool Nessus",
      date: "04.2024",
      intro: [
        " Participating in a Nessus vulnerability scan is an invaluable exercise for anyone looking to enhance their cybersecurity skills. This task helps you become proficient in identifying potential security weaknesses across various systems. By using Nessus, you learn to scan networks and applications for vulnerabilities, interpret scan results, and prioritize remediation efforts. This hands-on experience provides practical knowledge essential for protecting sensitive information and maintaining robust security postures. Engaging in Nessus vulnerability scanning is crucial for preparing to tackle real-world cybersecurity challenges and ensuring the integrity and safety of digital infrastructures.",
      ],
    },
    {
      id: 5,
      title: "Nmap Notes",
      background: "/images/id5.png",
      banner: "/images/banner5.png",

      tags: [
        "network scanning",
        "port scanning",
        "vulnerability",
        "pen testing",
        "nmap scripts",
      ],
      subtitle:
        "The extensive notes on the crucial tool for network security; Network Mapper aim to gather different use-cases",
      date: "05.2024",
    },
    {
      id: 6,
      title: "Splunk Report",
      background: "/images/id6.png",
      banner: "/images/banner5.png",

      tags: [
        "log analysis",
        "incident response",
        "SIEM",
        "security monitoring",
        "Splunk",
      ],
      subtitle:
        "Detailed investigation and analysis of an event using Splunk, focusing on the alert log to uncover potential security incidents",
      date: "06.2024",
    },
    {
      id: 7,
      title: "Incident Report",
      background: "/images/id7.png",
      banner: "/images/banner6.png",
      tags: [
        "incident response",
        "cybersecurity",
        "threat analysis",
        "mitigation",
        "report writing",
      ],
      subtitle:
        "Comprehensive incident response report on a scenario, showing skills in identifying, analyzing, and mitigating cyber threats",
      date: "07.2024",
    },
    {
      id: 8,
      title: "Forensics Lab",
      background: "/images/id8.png",
      banner: "/images/banner7.png",
      tags: [
        "windows forensics",
        "cybersecurity",
        "digital forensics",
        "investigation",
        "evidence analysis",
      ],
      subtitle:
        "In-depth Windows forensics lab project, demonstrating skills in analyzing and extracting digital evidence from Windows systems",
      date: "07.2024",
    },
    {
      id: 9,
      title: "Redacter",
      background: "/images/id9.png",
      banner: "/images/banner8.png",
      tags: [
        "python",
        "data sanitization",
        "privacy",
        "text processing",
        "sensitive information",
      ],
      subtitle:
        "Python script designed to redact sensitive information from text, ensuring data privacy and compliance with security standards",
      date: "08.2024",
    },
  ],
  setProjects: (projects) => set({ projects }),
  getProjectById: (id) => get().projects.find((p) => p.id === id),
}));

export default useProjectsStore;
