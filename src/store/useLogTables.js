import { create } from "zustand";

const useLogTables = create((set, get) => ({
  logTables: {
    sysmonLogData: [
      [
        "Common System32 Executables",
        "Identify programs that don’t belong in `C:\\Windows\\System32`.",
      ],
      [
        "Executables in Temp/System Folders",
        "Watch for files running from unusual temporary or system folders.",
      ],
      [
        "Unusual Parent Processes",
        "Monitor processes launched by unusual parent programs.",
      ],
      [
        "Unexpected Privileges",
        "Detect processes running with higher privileges than expected.",
      ],
      [
        "File Hashes",
        "Check file hashes against VirusTotal for known malware.",
      ],
      [
        "Misleading Executable Names",
        "Look for names resembling legit files but slightly altered (e.g., `svch0st.exe`).",
      ],
      ["Registry Key Changes", "Monitor changes in startup registry keys."],
      [
        "Shell/Userinit Modifications",
        "Watch for changes in shell or userinit registry keys.",
      ],
      [
        "Unusual File Types",
        "Look for strange file types in unexpected locations.",
      ],
      ["Hidden Files", "Identify hidden files in system or user directories."],
      [
        "Unexpected Scheduled Tasks",
        "Find new scheduled tasks or services with odd names.",
      ],
    ],
    vpnLogData: [
      ["Unusual Login Times", "Logins at odd hours for the user."],
      ["Failed Logins", "Multiple failed logins before a success."],
      ["New Devices", "Logins from devices not seen before."],
      [
        "Concurrent Sessions",
        "Sessions from different locations at the same time.",
      ],
      ["Unusual Login Locations", "Logins from uncommon IPs or regions."],
      ["Suspicious IPs", "Connections from known bad IP addresses."],
      ["Increased Usage", "Sudden spike in VPN activity."],
      [
        "Blacklisted Countries",
        "Logins from countries on the organization's no-go list.",
      ],
    ],
    networkLogData: [
      ["Unusual Traffic Volume", "Sudden spikes in network traffic."],
      ["Unrecognized Protocols", "Use of uncommon or suspicious protocols."],
      [
        "Frequent Connection Attempts",
        "Repeated attempts to connect to internal resources.",
      ],
      [
        "External Connections",
        "Unexpected outbound connections to unknown IPs.",
      ],
      ["Port Scanning", "Signs of port scanning or probing."],
      ["Large Data Transfers", "Massive data uploads or downloads."],
      ["New Devices", "New or unknown devices on the network."],
      ["Blocked Traffic", "High volume of blocked or denied connections."],
    ],
    windowsEventLogData: [
      ["Logon Events", "Failed or unusual logins, especially admin accounts."],
      [
        "Privilege Escalation",
        "Attempts to gain higher privileges (e.g., `runas`).",
      ],
      ["Service Changes", "Addition or changes to system services."],
      ["Scheduled Tasks", "New or modified tasks outside normal operations."],
      [
        "Group Policy Changes",
        "Unexpected changes to Group Policy Objects (GPOs).",
      ],
      [
        "Account Lockouts",
        "Repeated lockouts, possibly from brute force attacks.",
      ],
      [
        "Audit Log Clearing",
        "Logs being cleared, possibly to hide malicious actions.",
      ],
    ],
    firewallLogData: [
      ["Unusual Traffic Patterns", "High volume to uncommon ports."],
      [
        "Blocked Connections",
        "Blocked attempts to risky ports or from suspicious IPs.",
      ],
      [
        "Unusual Allowed Connections",
        "Allowed connections that don't fit typical usage.",
      ],
      [
        "IP Reputation",
        "Connections with bad IP reputation based on threat feeds.",
      ],
      [
        "Ingress/Egress Traffic",
        "Anomalies in incoming/outgoing traffic, especially large transfers.",
      ],
    ],
    webServerLogData: [
      [
        "Unusual Request Patterns",
        "High-rate requests from a single IP or other odd patterns.",
      ],
      [
        "Access to Sensitive Endpoints",
        "Attempts to access admin or sensitive areas.",
      ],
      [
        "Large File Transfers",
        "Large uploads or downloads, potential data theft or malware.",
      ],
      [
        "Unusual User Agents",
        "Requests with suspicious or known bad user-agent strings.",
      ],
      [
        "Referrer Anomalies",
        "Odd referrers not typical for normal site usage.",
      ],
      [
        "Excessive 404 Errors",
        "High number of 404 errors indicating scanning or reconnaissance.",
      ],
      [
        "Injection Attempts",
        "Signs of SQL injection, XSS, or similar attacks.",
      ],
    ],
  },
}));

export default useLogTables;
