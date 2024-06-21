import { Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

export default function ProjectAwareness() {
  return (
    <div>
      <ol>
        <li>
          <strong>Rising Threat Landscape:</strong> With each passing year, the
          threat landscape continues to expand, with cybercriminals deploying
          sophisticated tactics to exploit vulnerabilities in corporate systems.
          As AI technologies advance, so too do the capabilities of malicious
          actors, making it crucial for organizations to stay ahead of the curve
          in data security.{" "}
        </li>
        <li>
          <strong>Legal and Regulatory Compliance:</strong> Governments
          worldwide are enacting stringent data protection laws and regulations,
          such as the General Data Protection Regulation (GDPR) and the
          California Consumer Privacy Act (CCPA). Failure to comply with these
          regulations can result in severe penalties and reputational damage.
          Educating employees on data protection best practices ensures
          compliance with these laws and mitigates legal risks.
        </li>
        <li>
          <strong>Reputation and Trust:</strong> Data breaches not only result
          in financial losses but also erode customer trust and tarnish the
          reputation of organizations. In today's interconnected world, news of
          a data breach spreads rapidly, leading to a loss of confidence among
          customers, partners, and stakeholders. By prioritizing data security
          education, companies demonstrate their commitment to safeguarding
          sensitive information and preserving trust.{" "}
        </li>
        <li>
          <strong>AI Tool Vulnerabilities:</strong> While AI tools offer
          tremendous benefits, they also pose unique security risks. From
          algorithmic biases to adversarial attacks, AI systems can be exploited
          in various ways to compromise data integrity. Employees need to
          understand these risks and be equipped with the knowledge to identify
          and mitigate potential threats effectively.{" "}
        </li>
        <li>
          <strong>Cultural Shift Towards Security:</strong> As cybersecurity
          threats continue to evolve, there is a growing recognition of the
          importance of a security-first mindset within organizations. By
          fostering a culture of security awareness and responsibility,
          companies empower employees to play an active role in protecting
          sensitive data, thereby strengthening the overall security posture.
        </li>
      </ol>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        Important Points for the IT Department
      </Heading>
      <ul>
        <li>
          Data Ownership Awareness: Emphasize the importance of understanding
          data ownership within the organization. Ensure employees are aware
          that the data they handle belongs to the company, and they must
          exercise caution when sharing it with AI tools.
        </li>
        <li>
          Data Encryption: Encourage the use of encryption techniques to protect
          sensitive data when it's in transit and at rest. This ensures that
          even if data is accessed by AI tools, it remains unreadable to
          unauthorized parties.
        </li>
        <li>
          Access Controls: Implement stringent access controls to limit the
          exposure of sensitive data to only those employees who require it for
          their job functions. Utilize role-based access control (RBAC)
          mechanisms to enforce the principle of least privilege.
        </li>
        <li>
          Data Masking and Anonymization: Prioritize data masking and
          anonymization techniques to obscure personally identifiable
          information (PII) and other sensitive data before feeding it into AI
          models. This reduces the risk of inadvertent exposure.
        </li>
        <li>
          Audit Trails: Implement robust audit trails to track the usage of
          sensitive data by AI tools. This allows for retrospective analysis and
          investigation in case of any suspected data leaks or breaches.
        </li>
      </ul>
    </div>
  );
}
