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
        "In 2024, the digital landscape is evolving at an unprecedented pace, with artificial intelligence (AI) tools becoming increasingly integral to corporate operations across various industries. While AI brings immense potential for efficiency and innovation, it also introduces new challenges, particularly concerning the protection of sensitive information and the prevention of data leaks.",
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
      tags: ["e-mail phishing", "MFA Bypass", "SMS phishing", "evilginx"],
      subtitle:
        "The phishing server aims to explore different means for different phishing campaigns using various social engineering methods.",
      date: "04.2024",
      reference: [
        "[GoPhish repo](https://github.com/gophish/gophish)",
        "[Evilgophish repo](https://github.com/fin3ss3g0d/evilgophish) (deprecated)",
        "[Evilginx2 repo](https://github.com/kgretzky/evilginx2)",
      ],
      intro: [
        "Tools and services used in this project:",
        "Mailgun for mail server",
        "GoDaddy for domain registration and dns record configuration",
        "Google Cloud Platform (Compute Engine) for building a server with VM tools",
        "Linux system",
        "SSH to connect to phishing server (sazan.avi)",
        "Certbot for generating certificates",
      ],
    },
    {
      id: 3,
      title: "Capture the Flag",
      background: "/images/id3.png",
      tags: ["Linux", "Encryption", "Hashing", "File Systems"],
      subtitle:
        "The write-up collects steps and tricks used to tackle the CTF room that is developed to explore Linux environments in depth.",
      date: "04.2024",
    },

    {
      id: 4,
      title: "Nessus Scan",
      background: "/images/id4.png",
      tags: [
        "Vulnerability Scan",
        "Threat Assessment",
        "Scan Policies",
        "Compliance Checks",
      ],
      subtitle:
        "The write-up 'Vulnerability Scan' is a beginner's guide to set-up, utilize and analyze the results of the powerful tool Nessus.",
      date: "04.2024",
    },
    {
      id: 5,
      title: "Nmap Notes",
      background: "/images/id5.png",
      tags: [
        "network scanning",
        "port scanning",
        "vulnerability",
        "pen testing",
        "nmap scripts",
      ],
      subtitle:
        "The extensive notes on the crucial tool for network security; Network Mapper aim to gather different use-cases.",
      date: "04.2024",
    },
  ],
  setProjects: (projects) => set({ projects }),
  getProjectById: (id) => get().projects.find((p) => p.id === id),
}));

export default useProjectsStore;
