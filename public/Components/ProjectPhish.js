import { Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
export default function ProjectPhish() {
  return (
    <div>
      <ul>
        <Heading as="h4" size="md" className={styles.projectSubtitle}>
          Tools and services used in this project:
        </Heading>
        <li>Mailgun for mail server </li>
        <li>GoDaddy for domain registration and dns record configuration</li>
        <li>
          Google Cloud Platform (Compute Engine) for building a server with VM
          tools
        </li>
        <li>Linux system - SSH to connect to phishing server (sazan.avi)</li>
        <li>Certbot for generating certificates</li>
        <li>
          [GoPhish repo](https://github.com/gophish/gophish) - [Evilgophish
          repo](https://github.com/fin3ss3g0d/evilgophish) (deprecated) -
          [Evilginx2 repo](https://github.com/kgretzky/evilginx2)
        </li>
      </ul>
      <br></br>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        Preparation
      </Heading>
      <Heading as="h5" size="sm" className={styles.projectSubtitle}>
        GoDaddy domain registry + DNS Records + Mailgun
      </Heading>
      <ul>
        The very first setup for the project is to register a domain, and
        configure the dns records. Some DNS records that set initially are:
        <li>
          A record (the primary DNS record used to connect the domain to an IP
          address that directs visitors to the website) - this will be done when
          the server is built from google Cloud platform.
        </li>
        <li>
          CNAME record (A type of record that also adds a prefix to the domain
          name and is sometimes referred to as a type of subdomain)
        </li>
        <li>
          MX record (Manages the email address and makes sure email messages get
          to inbox) - this will be added with information from mailgun since
          it’s the provider used in this project
        </li>
        <li>
          TXT record (Allows to verify domain ownership and setup email sender
          policies){" "}
        </li>
        <li>
          SPF record (A type of TCT record that lets set up email sender
          policies)
        </li>
        <li>NS record (Contains info about nameservers).</li>
      </ul>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_1.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">
        A screenshot of the DNS records in GoDaddy DNS management page.
      </Text>
      <br></br>
      <br></br>
      <p>
        Some of these records are already provided. Some were edited and updated
        in various steps. Initially the first A record is to reach the GoDaddy
        domain, but while I continue, the A record will be set to point the
        external IP address of my server (as it is seen in the screenshot).
        Multiple A records are added for subdomains such as academy.cincuks.de,
        m.cincuks.de, login.cincuks.de and such.
      </p>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_2.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">
        A screenshot of MX records that are set up with mailgun.{" "}
      </Text>
      <br></br>
      <br></br>
      <ol>
        It’s good to know that DNS records are crucial in phishing campaigns
        primarily for two reasons:
        <li>
          Legitimacy and Trust: By configuring DNS records such as A, AAAA, or
          CNAME records, attackers can link malicious websites to seemingly
          legitimate domain names. This makes phishing sites appear more
          credible to victims, increasing the chances that they will trust the
          site and input sensitive information.
        </li>
        <li>
          Email Spoofing Prevention: DNS records like SPF, DKIM, and DMARC are
          used to verify the authenticity of the sending email server and to
          provide instructions on how to handle emails that fail authentication
          checks. In a defensive context, these records are vital for preventing
          email spoofing. However, in phishing campaigns, attackers might
          attempt to exploit lax configurations of these records to send spoofed
          emails that appear to come from legitimate sources, thereby increasing
          the effectiveness of the phishing attempt.
        </li>
        After adding the domain to the mailgun account, DNS MX records were
        populated in GoDaddy via values taken from mailgun. #SPF #DKIM #MX
      </ol>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_3.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the verified records in mailgun. </Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_4.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">
        A screenshot of the set SMTP credentials in mailgun.{" "}
      </Text>
      <br></br>
      <br></br>
      <Heading as="h5" size="sm" className={styles.projectSubtitle}>
        Google Cloud
      </Heading>
      <p>
        After some research I chose google cloud for IaaS and built the server
        to run the phishing tools. https://www.youtube.com/watch?v=jVPPQ8jCFrE
        the properties of the machine will affect the cost of the cloud
        instance.
        <br></br>Name:sazan-avi Region:Europe-west10(Berlin)
        <br></br>
        Zone:Europe-west10-a, Machine Type: e-micro(2 vCPU, 1 core, 1GB memory)
        <br></br> Firewall: allowing HTTPS and HTTP traffic
      </p>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_5.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the VM instance on Google Cloud. </Text>
      <br></br>
      <br></br>
      <p>
        In order to connect with SSH from my device, I generated an SSH key pair
        from my terminal using this command:
      </p>
      <br></br>
      <Text as="mark">
        $ ssh-keygen -t rsa -f ~/.ssh/gcp_vm -C your_email@example.com
      </Text>
      <p>
        and added the content of the pub file in my virtual machine SSH Keys.
        From this point I could easily connect to my server using:
      </p>
      <p>
        Throughout the project I’ve updated the DNS records and firewall rules
        multiple time. Screenshots are from the final version. Initially the IP
        ranges are set to **my IP address** (not to immediately open the server
        to the public) but later **set to all (0.0.0.0/0)**. One thing before
        setting up GoPhish is to point my server’s IP address to the domain name
        purchased by GoDaddy, which is done through setting up the A record’s
        value as the external IP address of the vm instance.
      </p>{" "}
      <br></br>
      <Text as="mark">$ ssh -i ~/.ssh/gcp_vm canancansucaner@34.32.61.190</Text>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_6.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">
        A screenshot of the firewall rules on the virtual machine.
      </Text>
      <br></br>
      <br></br>
      <p>
        Throughout the project I’ve updated the DNS records and firewall rules
        multiple time. Screenshots are from the final version. Initially the IP
        ranges are set to **my IP address** (not to immediately open the server
        to the public) but later **set to all (0.0.0.0/0)**. One thing before
        setting up GoPhish is to point my server’s IP address to the domain name
        purchased by GoDaddy, which is done through setting up the A record’s
        value as the external IP address of the vm instance.
      </p>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        Setting up GoPhish
      </Heading>
      <p>
        After updating the system, I install golang-go and git to the server.
        This allows me to clone the github repository using git clone in the
        command line with the https url.
      </p>{" "}
      <br></br>
      <Text as="mark">$ golang-go build</Text>
      <br></br>
      <p>Login to the admin panel and navigate to</p>
      <br></br>
      <Text as="mark">$ https://cincuks.de:3333</Text>
      <br></br>
      <p>Now the public IP address:3333 should be outputting the GoPhish. </p>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_7.png"
        alt="image"
      />{" "}
      <Heading as="h5" size="sm" className={styles.projectSubtitle}>
        TLS certificate
      </Heading>
      <p>
        To create a realistic and secure phishing simulation, it's essential to
        use TLS certificates from Let's Encrypt for HTTPS connections, ensuring
        the communication is encrypted. This step makes the simulation more
        believable and safeguards data. The setup involves setting up firewall
        settings in Google Cloud for HTTPS and opening new ports, getting
        certificates with Certbot through DNS validation, and incorporating
        these into Gophish. Adjusting Gophish to use HTTPS and these
        certificates makes the simulation resemble secure websites, offering a
        credible and protected environment.
      </p>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_8.png"
        alt="image"
      />
      <Text as="mark">$ sudo apt install certbot</Text>
      <br></br>
      <Text as="mark">
        $ sudo certbot certonly -d domain --manual --preferred-challenges dns
      </Text>
      <br></br>
      <Text as="mark">
        $ sudo cp /etc/letsencrypt/live/mydomain.com/privkey.pem
        mycert_privkey.pem
      </Text>
      <br></br>
      <Text as="mark">
        $ sudo cp /etc/letsencrypt/live/mydomain.com/fullchain.pem
        mycert_fullchain.pem
      </Text>
      <br></br>
      <Text as="mark">$ nano /home/ubuntu/gophish/config.json</Text>
      <br></br>
      <Text as="mark">$ sudo systemctl stop gophish.service</Text>
      <br></br>
      <Text as="mark">$ sudo systemctl start gophish.service</Text>
      <br></br>
      <p>
        From here on, I started playing around the GoPhish tool. After setting
        up email sending profile and adding an email template, I am almost ready
        for the first campaign.
      </p>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_9.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the the sending profile in GoPhish.</Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_10.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the Email template in html.</Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_11.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of new campaign.</Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_12.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the email.</Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_13.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the login page.</Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_14.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the first phishing e-mail sent.</Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_15.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the dashboard.</Text>
      <br></br>
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_16.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">A screenshot of the progress of the phishing mail.</Text>
      <br></br>
      <br></br>
      <UnorderedList styleType="'+'">
        To sum up the GoPhish setup:
        <ListItem> creating a domain</ListItem>
        <ListItem>
          creating an email account and setting up domain records
        </ListItem>
        <ListItem>creating a vm instance</ListItem>
        <ListItem>download/install go and gophish</ListItem>
        <ListItem>setting up gophish</ListItem>
        <ListItem>
          pointing the DNS A record to the public address of the vm
        </ListItem>
        <ListItem>setting up TLS certificates for gophish</ListItem>
        <ListItem>opening port 3333,3380 to server’s IP address</ListItem>
        <ListItem>
          setting up sender email, groups to target and the campaign
        </ListItem>
        <ListItem>opening port 443 to the internet</ListItem>
        <ListItem>testing the campaign</ListItem>
        <ListItem>sending the campaign</ListItem>
      </UnorderedList>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_17.png"
        alt="image"
      />
      <br></br>
      <Text as="cite">
        A screenshot of the progress of the phishing landing page mimicking
        O365.
      </Text>
      <br></br>
      <br></br>
      <Heading as="h5" size="sm" className={styles.projectSubtitle}>
        Steps to harden the server
      </Heading>
      <ul>
        To ensure the server is not easily identifiable and to enhance its
        evasion capabilities against security controls, I modify the Gophish
        code and configuration:
        <li>
          I run commands to replace specific Gophish HTTP header values, making
          the server less recognizable:{" "}
        </li>
        <Text as="mark">
          $ find . -type f -exec sed -i.bak 's/X-Gophish-Contact/X-Contact/g' {}{" "}
          +
        </Text>
        <br></br>
        <Text as="mark">
          $ find . -type f -exec sed -i.bak
          's/X-Gophish-Signature/X-Signature/g' {} +{" "}
        </Text>
        <li>
          To make tracking links in emails less obvious, I change the query
          parameter used by Gophish:
        </li>
        <Text as="mark">
          $ sed -i 's/const RecipientParameter = "rid"/const RecipientParameter
          = "identifier"/g' models/campaign.go
        </Text>
        <Image
          height={800}
          width={800}
          className={styles.banner}
          src="/images/Phish/PSA_18.png"
          alt="image"
        />
        <br></br>
        <Image
          height={800}
          width={800}
          className={styles.banner}
          src="/images/Phish/PSA_19.png"
          alt="image"
        />
        <br></br>
        <li>
          To further disguise the server's identity, I edit the configuration to
          ignore the server name:
        </li>
        <Text as="mark">$ nano /home/ubuntu/gophish/config/config.json</Text>
        <li>
          Then, if I forget the admin password for Gophish, I reset it using
          sqlite3, ensuring I can always access my Gophish dashboard:
        </li>
        <Text as="mark">
          $ sudo apt install sqlite3 sqlite3 gophish.db 'update users set
          hash="$2a$10$IYkPp0.QsM81lYYPrQx6W.U6oQGw7wMpozrKhKAHUBVL4mkm/EvAS"
          where username="admin";'
        </Text>
        <li>
          For security, I install Certbot and generate TLS certificates to
          secure the phishing server with HTTPS, a crucial step for authentic
          simulations:
          <br></br>
        </li>
        <Text as="mark">$ sudo apt install certbot</Text>
        <Text as="mark">
          $ sudo certbot certonly -d domain--manual --preferred-challenges dns
        </Text>
        <li>
          After securing the server and ensuring I have administrative access, I
          restart the Gophish service to apply all changes:
          <br></br>
        </li>
        <Text as="mark">$ sudo systemctl stop gophish.service</Text>
        <Text as="mark">$ sudo systemctl restart gophish.service</Text>
        <p>
          These commands collectively enhance the Gophish server's security and
          operational stealth, contribute to the campaign's credibility, and
          maintain easy management access. This careful setup helps mimic
          real-world phishing attacks within a controlled and ethical framework,
          aiming to educate about phishing defense mechanisms.
        </p>
      </ul>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        Setting up Evilginx
      </Heading>
      <p>
        This setup involves configuring Evilginx, a powerful man-in-the-middle
        framework used for phishing and capturing credentials, even those
        protected by two-factor authentication. The process begins with cloning
        the Evilginx repository and preparing it for use, including building its
        components with Go, the same way I start with GoPhish. To ensure
        Evilginx can intercept web traffic effectively, DNS settings are
        adjusted to resolve through reliable servers like 1.1.1.1 (Cloudflare)
        and 8.8.8.8 (Google). This involves stopping the systemd-resolved
        service, removing the existing resolv.conf, and creating a new one with
        preferred nameservers. Before launching Evilginx, I make sure to adjust
        the Gophish configuration to prevent port conflicts, specifically moving
        Gophish off port 443, which Evilginx will use.
      </p>
      <br></br>
      <p>
        Running Evilginx in a dedicated tmux session allows it to persistently
        capture traffic, with configurations set for domain and external IP to
        ensure proper routing. To capture credentials effectively, DNS records
        are set up for all necessary subdomains as indicated by the phishlet
        being used. Phishlets—scripts that define a phishing attack for specific
        services—are enabled, and DNS "A Records" are prepared for each
        subdomain involved in the phishing scenario. Throughout this setup,
        firewall rules are crucial to allow incoming connections on the ports
        Evilginx relies on, including 443 (HTTPS), 53 (DNS), and 80 (HTTP). The
        commands executed not only establish the foundation for a sophisticated
        phishing simulation but also customize the engagement through phishlets
        and DNS configurations, enhancing the realism and effectiveness of the
        exercise while maintaining control over the interaction flow with
        potential targets.
      </p>
      <ul>
        <li>Clone and Set Up Evilginx</li>
        <Image
          height={800}
          width={800}
          className={styles.banner}
          src="/images/Phish/PSA_20.png"
          alt="image"
        />

        <br></br>
        <li>DNS Configuration</li>
        <Text as="mark">$ sudo lsof -i :53</Text>
        <br></br>
        <Text as="mark">$ sudo systemctl stop systemd-resolved.service</Text>
        <br></br>
        <Text as="mark">$ sudo rm /etc/resolv.conf</Text>
        <br></br>
        <Text as="mark">$ sudo nano /etc/resolv.conf</Text>
        <li>Adjust Gophish and Run Evilginx</li>
        <Text as="mark">$ sudo nano /home/ubuntu/gophish/config.json</Text>
        <br></br>
        <Text as="mark">$ sudo systemctl stop gophish.service</Text>
        <br></br>
        <Text as="mark">$ sudo systemctl start gophish.service</Text>
        <br></br>
        <Text as="mark">$ tmux</Text>
        <br></br>
        <Text as="mark">$ sudo ./evilginx2</Text>

        <li>Configure Evilginx</li>
        <Text as="mark">$ config domain cincuks.de</Text>
        <br></br>
        <Text as="mark">$ config ipv4 external PublicIpOfPhishingServer</Text>
      </ul>
      <p>
        Setting Up Domains for PhishletsEnsure firewall rules are adjusted as
        needed.
      </p>
      <Heading as="h5" size="sm" className={styles.projectSubtitle}>
        Run and Manage Phishlets
      </Heading>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_24.png"
        alt="image"
      />
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_25.png"
        alt="image"
      />
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_26.png"
        alt="image"
      />
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_27.png"
        alt="image"
      />
      <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Phish/PSA_28.png"
        alt="image"
      />
      <br></br>
      <Heading as="h5" size="sm" className={styles.projectSubtitle}>
        Protecting Evilginx
      </Heading>
      <Text as="mark">$ blacklist unauth</Text>
      <br></br>
      <Text as="mark">$ $ blocklist all</Text>
      <br></br>
      <Text as="mark">$ $ config unauth_url redirectURL</Text>
      <br></br>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        Setting up EvilPhish
      </Heading>
      <p>
        The setup described here combines Evilgophish, a tool designed to
        enhance Gophish capabilities, with the power of Evilginx, focusing on
        expanding phishing simulations into SMS phishing (Smishing) and voice
        phishing (Vishing) campaigns. The process begins with cloning the
        Evilgophish repository from GitHub and preparing the environment using a
        setup script. This script configures Evilgophish with the necessary
        parameters, including domain setup and SSL certificate handling via
        Certbot, ensuring secure HTTPS communication. Additionally, the
        configuration tweaks allow the admin server to be accessible from any
        network address, facilitating remote management.
      </p>
    </div>
  );
}
