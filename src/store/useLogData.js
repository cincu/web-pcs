import { create } from "zustand";

const useLogData = create((set, get) => ({
  logOne: {
    summary:
      "This report provides an analysis of system login activities, highlighting potential security threats such as repeated failed login attempts, successful logins after failures, and logins from different geographical locations.",
    itInfrastructure: {
      host: "Masterschool",
      sourceType: "access_combined",
      logFile: "Log1.json",
      index: "default",
    },
    findings: [
      {
        title: "Repeated Failed Logins",
        observation:
          "Multiple failed login attempts followed by successful logins from the same IP address, suggesting possible brute force attacks.",
        mitre: "T1110: Brute Force",
        query:
          'source="Log1.json" host="Masterschool" sourcetype="_json" action="An account failed to logon" | stats count by Source_ip | where count > 3',
        example: [
          {
            ip: "190.56.224.166",
            details: "Failed logins: 274, Country: Guatemala",
          },
          {
            ip: "238.163.231.224",
            details: "Failed logins: 48, Country: United States",
          },
          {
            ip: "69.208.133.98",
            details: "Failed logins: 29, Country: United States",
          },
          {
            ip: "157.109.0.102",
            details: "Failed logins: 28, Country: United States",
          },
        ],
      },
      {
        title: "Successful Logins After Multiple Failures",
        observation:
          "Successful logins observed immediately after multiple failed attempts, indicating the attacker may have guessed the correct password.",
        mitre: "T1078: Valid Accounts",
        query:
          'source="Log1.json" host="Masterschool" sourcetype="_json" action="An account was successfully logged on" | transaction UserName Source_ip | table _time, UserName, Source_ip, action',
        example: [
          {
            userName: "Mike",
            source_ip: "39.75.132.211",
            actions: "Multiple failed logins followed by a successful login",
          },
          {
            userName: "Penny",
            source_ip: "39.66.218.145",
            actions: "Multiple failed logins followed by a successful login",
          },
        ],
      },
      {
        title: "Logins from Different Locations",
        observation:
          "Logins detected from different geographical locations within a short period, suggesting compromised credentials being used in multiple locations.",
        mitre: "T1090: Proxy",
        query:
          'source="Log1.json" host="Masterschool" sourcetype="_json" action="An account was successfully logged on" | iplocation Source_ip | transaction UserName maxspan=5m | where eventcount > 1 | stats values(Country) as Countries, values(City) as Cities, dc(Country) as unique_countries by UserName, Source_ip, _time | where unique_countries > 1 | table UserName, Source_ip, _time, Countries, Cities, unique_countries',
        example: [
          {
            userName: "James",
            source_ip: "151.164.74.14",
            countries: "Japan, United States",
            cities: "Chiyoda, New York",
          },
        ],
      },
    ],
    analysis: [
      {
        title: "Correlation of Failed and Successful Logins",
        description:
          "Analysis showed that several failed login attempts were followed by a successful login, indicating possible brute-force success.",
        query:
          'source="Log1.json" host="Masterschool" sourcetype="_json" action="An account failed to logon" OR action="An account was successfully logged on" | transaction UserName Source_ip | table _time, UserName, Source_ip, action',
        findings: [
          {
            userName: "Mike",
            source_ip: "39.75.132.211",
            details: "Multiple failed logins followed by a successful login",
          },
          {
            userName: "Penny",
            source_ip: "39.66.218.145",
            details: "Multiple failed logins followed by a successful login",
          },
        ],
      },
    ],
    iocs: [
      {
        title: "Failed Logins Within a 5-Minute Window",
        details:
          "Users with more than 3 failed login attempts within a 5-minute window were identified, indicating potential brute-force attacks.",
        query:
          'source="Log1.json" host="Masterschool" sourcetype="_json" action="An account failed to logon" | transaction UserName Source_ip maxspan=5m | search eventcount > 3 | table UserName, Source_ip, eventcount',
        findings: [
          { userName: "Suzi", source_ip: "190.56.224.166", eventCount: 274 },
        ],
      },
    ],
    nextSteps: {
      immediate: [
        "Investigate activities associated with IP 190.56.224.166 and other suspicious IPs.",
        "Verify whether successful logins following failed attempts were legitimate.",
        "Notify affected users (e.g., James, Suzi, Mike, Penny) to change their passwords.",
      ],
      enhancedMonitoring: [
        "Implement alerts for unusual login patterns such as multiple failed logins or logins from different locations.",
        "Increase logging detail to capture more information on login attempts.",
      ],
      internalReview: [
        "Conduct a thorough review of user accounts to ensure they are not compromised.",
        "Perform a security audit of systems to detect any unauthorized access.",
      ],
    },
    prevention: {
      networkSecurity: [
        "Enforce rate limiting on sensitive endpoints to prevent automated brute-force attacks.",
        "Implement network segmentation to isolate critical systems from potential threats.",
      ],
      authentication: [
        "Enable Multi-Factor Authentication (MFA) for all user accounts.",
        "Strengthen password policies and encourage the use of password managers.",
      ],
      securityAudits: [
        "Schedule regular security audits and penetration tests to identify vulnerabilities.",
        "Ensure all systems are up to date with the latest security patches.",
      ],
      ueba: [
        "Deploy User and Entity Behavior Analytics (UEBA) to detect abnormal activity.",
        "Monitor for signs of account compromise or insider threats.",
      ],
      training: [
        "Conduct regular security awareness training to educate users on phishing and social engineering threats.",
        "Encourage users to report suspicious activities immediately.",
      ],
    },
    mitreMapping: [
      { tactic: "Initial Access", technique: "Brute Force (T1110)" },
      { tactic: "Persistence", technique: "Valid Accounts (T1078)" },
      { tactic: "Defense Evasion", technique: "Valid Accounts (T1078)" },
      { tactic: "Discovery", technique: "Account Discovery (T1087)" },
      { tactic: "Lateral Movement", technique: "Remote Services (T1021)" },
      { tactic: "Collection", technique: "Input Capture (T1056)" },
      {
        tactic: "Command and Control",
        technique: "Commonly Used Port (T1071)",
      },
    ],
    conclusion:
      "The analysis of the system logs has identified several potential security threats that require immediate attention. By implementing the recommended actions and preventive measures, the security posture of the organization can be significantly enhanced.",
  },

  // Web Server Log Data
  logTwo: {
    summary:
      "An investigation into web server logs revealed potential security issues including unusual traffic patterns, repeated access attempts, and the use of automated tools for scanning or attacks.",
    itInfrastructure: {
      host: "Masterschool",
      sourceType: "access_combined",
      logFile: "Log2.json",
      index: "default",
    },
    findings: [
      {
        title: "Unusual Traffic Patterns",
        observation:
          "A single IP address made numerous requests to sensitive endpoints, which deviates from normal behavior.",
        mitre: "T1071: Application Layer Protocol",
        query:
          'source="Log2.json" host="Masterschool" sourcetype="access_combined" | stats count by _time, source, host, uri_path | where uri_path="/rest/admin/application-configuration" AND count > 10',
        example: [
          {
            ip: "193.163.125.128",
            details: "Numerous requests to sensitive endpoints",
          },
        ],
      },
      {
        title: "Repeated Access Attempts (Potential Brute-force Attack)",
        observation:
          "Multiple failed login attempts followed by a successful login attempt from the same IP address, indicating possible brute-force attack.",
        mitre: "T1110: Brute Force",
        query:
          'source="Log2.json" host="Masterschool" sourcetype="access_combined" "POST /rest/user/login HTTP/1.0" ("401" OR "200") "Admin" "Mozilla/5.0 (Hydra)"',
        example: [
          {
            ip: "193.163.125.128",
            details: "Failed logins followed by a successful login attempt",
          },
        ],
      },
      {
        title: "Suspicious User Agents (Automated Tools)",
        observation:
          "Requests containing unusual user agents such as Mozilla/5.0 (Hydra) and sqlmap/1.5.2#stable, indicating the use of automated tools for scanning or attacks.",
        mitre: "T1203: Exploitation for Client Execution",
        query:
          'source="Log2.json" host="Masterschool" sourcetype="access_combined" (useragent="Mozilla/5.0 (Hydra)" OR useragent="sqlmap/1.5.2#stable (<http://sqlmap.org>)")',
        example: [
          {
            userAgent: "Mozilla/5.0 (Hydra)",
            details: "Suspicious user agent indicating automated tool usage",
          },
          {
            userAgent: "sqlmap/1.5.2#stable",
            details: "User agent associated with SQL injection tool",
          },
        ],
      },
      {
        title: "Access to Sensitive Endpoints",
        observation:
          "Requests to administrative or sensitive endpoints from IP addresses not recognized as part of the internal network.",
        mitre: "T1069: Permission Groups Discovery",
        query:
          'source="Log2.json" host="Masterschool" sourcetype="access_combined" (uri_path="/rest/admin/application-configuration" OR uri_path="/rest/user/whoami")',
        example: [
          {
            ip: "193.163.125.128",
            uri_path: "/rest/admin/application-configuration",
            details: "Access attempt to a sensitive endpoint",
          },
        ],
      },
      {
        title: "SQL Injection Attempts",
        observation:
          "HTTP GET requests to `/rest/products/search` with query parameters containing SQL injection payloads, suggesting an attempt to exploit the application.",
        mitre: "T1190: Exploit Public-Facing Application",
        query:
          'source="Log2.json" host="Masterschool" sourcetype="access_combined" (sql OR select OR union OR or OR and OR drop OR delete OR insert OR update OR exec OR xp_cmdshell) | table _time, host, sourcetype, _raw',
        example: [
          {
            ip: "193.163.125.128",
            details: "SQL injection payload detected in request parameters",
          },
        ],
      },
    ],
    analysis: [
      {
        title: "Analysis of Unusual Traffic",
        description:
          "Detailed investigation into the IP 193.163.125.128 revealed a pattern of targeted requests to sensitive endpoints, suggesting reconnaissance or an attempted attack.",
        query:
          'source="Log2.json" host="Masterschool" sourcetype="access_combined" | stats count by _time, source, host, uri_path | where uri_path="/rest/admin/application-configuration" AND count > 10',
        findings: [
          {
            ip: "193.163.125.128",
            uri_path: "/rest/admin/application-configuration",
            count: 15,
          },
        ],
      },
    ],
    nextSteps: {
      immediate: [
        "Implement rate limiting to prevent rapid repeated requests from a single IP address.",
        "Temporarily block IP addresses exhibiting suspicious patterns.",
      ],
      enhancedMonitoring: [
        "Capture more detailed log information and set up alerts for unusual patterns in traffic.",
        "Review the security configuration of the affected endpoints to prevent unauthorized access.",
      ],
      internalReview: [
        "Conduct a review of the server configurations and ensure that all sensitive endpoints are properly secured.",
        "Verify whether any data was accessed or exfiltrated during the attack attempts.",
      ],
    },
    prevention: {
      securityTesting: [
        "Use automated and manual security testing tools to regularly test the applications for vulnerabilities.",
        "Implement SQL injection protections such as prepared statements and parameterized queries.",
      ],
      loggingAndMonitoring: [
        "Enhance logging capabilities to capture detailed information about access to sensitive endpoints.",
        "Implement advanced monitoring tools to detect and alert on unusual patterns in web traffic.",
      ],
      incidentResponse: [
        "Develop a comprehensive incident response plan that includes steps for handling web application attacks.",
        "Train staff on incident response procedures and ensure regular drills are conducted.",
      ],
    },
    mitreMapping: [
      {
        tactic: "Execution",
        technique: "T1203: Exploitation for Client Execution",
      },
      { tactic: "Credential Access", technique: "T1110: Brute Force" },
      { tactic: "Discovery", technique: "T1069: Permission Groups Discovery" },
      {
        tactic: "Defense Evasion",
        technique: "T1070: Indicator Removal on Host",
      },
    ],
    conclusion:
      "The web server logs analysis indicates several potential security threats that require immediate attention. Implementing the recommended actions will help mitigate these risks and strengthen the overall security posture.",
  },

  // Network Log Data
  logThree: {
    summary:
      "An analysis of network logs has revealed potential malicious activities involving high-frequency connections and data transfers between internal and external IP addresses, indicating possible data exfiltration or unauthorized access.",
    itInfrastructure: {
      host: "Masterschool",
      sourceType: "network",
      logFile: "Log3.csv",
      index: "default",
    },
    findings: [
      {
        title: "Suspicious Traffic Volume",
        observation:
          "High-frequency connections were observed between internal IPs and a flagged external IP, suggesting possible data exfiltration or unauthorized communication.",
        mitre: "T1078: Valid Accounts",
        query:
          'source="Log3.csv" host="Masterschool" sourcetype="network" | stats count by _time, Source_ip, Destination_ip | where Destination_ip="157.240.241.35" AND count > 50',
        example: [
          {
            source_ip: "192.168.1.157",
            destination_ip: "157.240.241.35",
            details: "Flagged external IP",
          },
        ],
      },
      {
        title: "Frequent API Requests",
        observation:
          "Numerous GET and POST requests were made to internal API endpoints, suggesting attempts to access sensitive data or perform reconnaissance.",
        mitre: "T1087: Account Discovery",
        query:
          'source="Log3.csv" host="Masterschool" sourcetype="network" | stats count by _time, Source_ip, uri_path | where uri_path="/api/core/capabilities" OR uri_path="/api/saved_objects/bulk_resolve"',
        example: [
          {
            source_ip: "192.168.1.157",
            uri_path: "/api/core/capabilities",
            details: "Frequent API requests detected",
          },
        ],
      },
      {
        title: "Persistent TCP Connections",
        observation:
          "A high volume of TCP Keep-Alive packets was observed between internal IPs, indicating efforts to maintain open communication channels for possible malicious purposes.",
        mitre: "T1071: Application Layer Protocol",
        query:
          'source="Log3.csv" host="Masterschool" sourcetype="network" | stats count by _time, Source_ip, Destination_ip | where Destination_ip="192.168.1.161" AND count > 100',
        example: [
          {
            source_ip: "192.168.1.157",
            destination_ip: "192.168.1.161",
            details: "High volume of TCP Keep-Alive packets",
          },
        ],
      },
      {
        title: "SSL/TLS Handshake Activity",
        observation:
          "Repeated SSL/TLS handshake messages were observed between an internal IP and an external flagged IP, indicating attempts to establish secure communication for potentially malicious purposes.",
        mitre: "T1071: Application Layer Protocol",
        query:
          'source="Log3.csv" host="Masterschool" sourcetype="network" | stats count by _time, Source_ip, Destination_ip | where Destination_ip="157.240.241.35" AND count > 20',
        example: [
          {
            source_ip: "192.168.1.157",
            destination_ip: "157.240.241.35",
            details: "SSL/TLS handshake attempts detected",
          },
        ],
      },
      {
        title: "Large Volumes of Application Data",
        observation:
          "Numerous Application Data packets were observed, suggesting ongoing data transfers that could indicate data exfiltration.",
        mitre: "T1048: Exfiltration Over Alternative Protocol",
        query:
          'source="Log3.csv" host="Masterschool" sourcetype="network" | stats count by _time, Source_ip, Destination_ip | where Destination_ip="157.240.241.35" AND count > 100',
        example: [
          {
            source_ip: "192.168.1.157",
            destination_ip: "157.240.241.35",
            details: "Large volumes of Application Data packets detected",
          },
        ],
      },
    ],
    iocs: [
      {
        title: "Indicators of Compromise (IOCs)",
        details:
          "The following indicators of compromise were identified in the network traffic, suggesting potential malicious activity:",
        findings: [
          {
            description:
              "Frequent connections to flagged external IP 157.240.241.35 from internal IP 192.168.1.157.",
          },
          {
            description:
              "High volume of TCP Keep-Alive packets between internal IPs 192.168.1.157 and 192.168.1.161.",
          },
          {
            description:
              "SSL/TLS handshake attempts between internal IP 192.168.1.157 and external IP 157.240.241.35.",
          },
        ],
      },
    ],
    nextSteps: {
      immediate: [
        "Investigate high-frequency connections between internal IPs and the flagged external IP 157.240.241.35.",
        "Analyze the volume and content of data transfers to and from the flagged IP address.",
      ],
      enhancedMonitoring: [
        "Enable comprehensive logging for all critical systems to capture detailed data for future analysis.",
        "Implement anomaly detection tools to identify unusual patterns in network traffic and API usage.",
      ],
      internalReview: [
        "Check the internal systems (192.168.1.157 and 192.168.1.161) for signs of compromise, such as unexpected processes or unauthorized changes.",
        "Analyze session durations to identify unusually long or persistent sessions that may indicate unauthorized access.",
      ],
    },
    prevention: {
      networkSecurity: [
        "Apply rate limiting on sensitive API endpoints to prevent automated attacks and data exfiltration attempts.",
        "Implement network segmentation to isolate critical systems and sensitive data to limit the impact of potential breaches.",
      ],
      authentication: [
        "Ensure strong authentication mechanisms and strict authorization controls are in place to protect access to sensitive data and endpoints.",
        "Monitor for unusual access patterns and enforce stricter controls where necessary.",
      ],
      securityAudits: [
        "Conduct regular security audits and penetration testing to identify and address vulnerabilities before they can be exploited.",
        "Ensure that all security patches and updates are applied promptly to reduce the risk of exploitation.",
      ],
      ueba: [
        "Deploy User and Entity Behavior Analytics (UEBA) to monitor user and entity behavior and detect deviations from normal patterns.",
        "Implement alerts for abnormal behaviors that may indicate compromised accounts or insider threats.",
      ],
      training: [
        "Conduct regular security training sessions for staff to educate them on best practices and how to recognize phishing attempts and other social engineering attacks.",
        "Encourage a culture of security awareness and ensure that all employees are familiar with the procedures for reporting suspicious activities.",
      ],
    },
    mitreMapping: [
      { tactic: "Initial Access", technique: "T1078: Valid Accounts" },
      {
        tactic: "Execution",
        technique: "T1059: Command and Scripting Interpreter",
      },
      {
        tactic: "Persistence",
        technique: "T1078.003: Valid Accounts: Cloud Accounts",
      },
      { tactic: "Privilege Escalation", technique: "T1078: Valid Accounts" },
      {
        tactic: "Defense Evasion",
        technique: "T1070.004: Indicator Removal on Host",
      },
      {
        tactic: "Credential Access",
        technique: "T1552: Unsecured Credentials",
      },
      { tactic: "Discovery", technique: "T1083: File and Directory Discovery" },
      { tactic: "Collection", technique: "T1074: Data Staged" },
      {
        tactic: "Exfiltration",
        technique: "T1048: Exfiltration Over Alternative Protocol",
      },
      { tactic: "Command and Control", technique: "T1102: Web Service" },
    ],
    conclusion:
      "The network logs indicate potential threats that require immediate investigation and long-term preventive measures. By implementing these measures and continuously monitoring the network, the organization can enhance its security posture, detect potential threats early, and respond promptly to mitigate the impact of any security incidents.",
  },
}));

export default useLogData;
