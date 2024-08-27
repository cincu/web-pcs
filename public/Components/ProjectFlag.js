import { Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Text } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";

export default function ProjectFlag() {
  return (
    <div className={styles.leftAlignedText}>
      <Text as="i">add new user</Text>
      <Text className={styles.highlightedCode}>$ sudo adduser cincux</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA2.png"
        alt="image"
      />
      <Text as="i">ssh to the device</Text>
      <Text className={styles.highlightedCode}>$ ssh ctf@[machine-IP]</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA3.png"
        alt="image"
      />
      <Text className={styles.flagCode}>
        flag: {"{"}h4ck3r5_r_us{"}"}
      </Text>
      <Text as="i">check for hidden flags in the main directory</Text>
      <Text className={styles.highlightedCode}>$ ls -la</Text>
      <Text className={styles.highlightedCode}>$ cat .f.txt</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA4.png"
        alt="image"
      />
      <Text className={styles.flagCode}>
        flag: {"{"}H1d3_1n_pl41n_s1gh7{"}"}
      </Text>
      <Text className={styles.highlightedCode}>$ cat flag/story.txt</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA5.png"
        alt="image"
      />
      <Text className={styles.flagCode}>
        flag: {"{"}St0ry_Fl4g{"}"}
      </Text>
      <Text as="i">I decide to do a lazy search</Text>
      <Text className={styles.highlightedCode}>
        $ find / -type f -iname “*flag*.txt” 2 {">"} /dev/null
      </Text>
      <UnorderedList styleType="'-'">
        <ListItem>
          / : the search starts from the root directory, so *find* will search
          for all the directories
        </ListItem>{" "}
        <ListItem>
          {" "}
          -type f : searches for files not directories -iname “*flag*.txt” :{" "}
        </ListItem>{" "}
        <ListItem>
          iname is the case insensitive, and this searches files that match the
          pattern of flag.txt, while * includes any file that has flag in its
          name and is a text file.{" "}
        </ListItem>
        <ListItem>
          {" "}
          2{">"}/dev/null : redirects the standard error output (to discard any
          error messages)
        </ListItem>
      </UnorderedList>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA6.png"
        alt="image"
      />
      <Text className={styles.highlightedCode}>
        $ cat ../../../var/www/html/flag/flag/flag.txt{" "}
      </Text>
      <Text className={styles.flagCode}>
        flag: {"{"}Fl4g_fl4g_fl4g{"}"}
      </Text>{" "}
      <Text className={styles.highlightedCode}>
        $ cat ../../../var/www/html/flag/flag/flag2.txt
      </Text>{" "}
      <Text as="kbd">e0ZsNGcyX2ZsNGcyX2ZsNGcyfQ==</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA7.png"
        alt="image"
      />
      <Text className={styles.flagCode}>
        flag: {"{"}Fl4g_fl4g_fl4g2{"}"}
      </Text>
      <Text className={styles.highlightedCode}>
        $ cat ../../../var/backups/find_flag.txt
      </Text>
      <Text className={styles.flagCode}>
        flag: {"{"}F1nd_Fl4g_Fun{"}"}
      </Text>
      <Text className={styles.highlightedCode}>
        $ cat ../../../srv/ftp/flag.txt
      </Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA8.png"
        alt="image"
      />
      <Text className={styles.flagCode}>
        flag: {"{"}ftp_server_4_lyfe{"}"}
      </Text>
      <Text className={styles.highlightedCode}>
        {`$ find / -type f -name "*.txt" -exec grep -l "{" {} + 2>/dev/null`}
      </Text>
      <UnorderedList styleType="'-'">
        <ListItem>type f: finding files not directories</ListItem>{" "}
        <ListItem>
          name “*.txt”: for filtering the search results ending with the .txt
          extension{" "}
        </ListItem>{" "}
        <ListItem>
          exec: for each file that matches the previous conditions, execute also
          the grep command
        </ListItem>
        <ListItem>
          grep -l {"{"}: searching the occurrence of {"{"} and print the names
          of the files(-l)
        </ListItem>
        <ListItem>
          {"{}"}: a placeholder for later on the names of the files that
          resulted from the search
        </ListItem>
        <ListItem>
          2 {">"}/dev/null: discards the files that generate error messages in
          find. Here it is used to skip the files that output ‘permission
          denied’ in the terminal.
        </ListItem>
      </UnorderedList>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA9.png"
        alt="image"
      />
      <Text as="i">
        the command generates a long list. here are the files I am pretty sure
        that contain a flag. I see a pattern so I jump to the web flags.
      </Text>
      <UnorderedList>
        <ListItem>/var/www/html/secret.txt</ListItem>
        <ListItem>/var/www/html/robots.txt</ListItem>
        <ListItem>/var/log/installer/installer-journal.txt</ListItem>
      </UnorderedList>
      <Text className={styles.highlightedCode}>$ cat secret.txt</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA10.png"
        alt="image"
      />
      <Text as="i">
        I will check all the html files with cat or nano. I will gobuster if I
        cannot find them.
      </Text>
      <Text className={styles.highlightedCode}>$ cat secret.txt</Text>
      <Text className={styles.flagCode}>{"{S3cr3t_Fl4g}"}</Text>
      <Text className={styles.highlightedCode}>$ cat robots.txt</Text>
      <Text className={styles.flagCode}>{"{Robots_Flag}"}</Text>
      <Text className={styles.highlightedCode}>$ cat hide.html</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA11.png"
        alt="image"
      />
      <Text className={styles.flagCode}>{"{H1d3_Fl4g}"}</Text>
      <Text className={styles.highlightedCode}>$ cat index2.html</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA12.png"
        alt="image"
      />
      <Text className={styles.flagCode}>{"{C0nf1gur4t10n_Fl4g}"}</Text>
      <Text as="i">
        I would go and check the index.html files for web too for web flags.
      </Text>
      <Text className={styles.highlightedCode}>$ nano index.html</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA13.png"
        alt="image"
      />
      <Text className={styles.flagCode}>{"{Another_Web_Flag}"}</Text>
      <Text className={styles.highlightedCode}>$ find ./ -type d</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA14.png"
        alt="image"
      />
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA15.png"
        alt="image"
      />
      <Text className={styles.highlightedCode}>$ cat f_l_a_g.txt</Text>
      <Text className={styles.flagCode}>{"{Y0u_g0t_1t}"}</Text>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        HASH CRACKING
      </Heading>
      <Text as="i">
        I open up a new terminal window and stay as root. Here I install hashid
        and john and zip2john. Then I copy the txt files that I will need to use
        the tools. I decide to use the secure copy protocol.{" "}
      </Text>
      <Text className={styles.highlightedCode}>
        $ scp -r ctf@10.10.72.12:/homectf/hash_to_crack ~/Desktop
      </Text>
      <UnorderedList>
        <ListItem>
          r: copies directories recursively, without it, it would only copy
          individual files.
        </ListItem>
        <ListItem>[username]@[ip-address-of remote host]</ListItem>
        <ListItem>
          after “:”the path to the directory on the remote host that I would
          like to copy
        </ListItem>
        <ListItem>the last part is the destination path</ListItem>
      </UnorderedList>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA16.png"
        alt="image"
      />
      <Text className={styles.highlightedCode}>$ hashid hash1.txt </Text>
      <Text className={styles.highlightedCode}>
        $ john —format=raw-md2 —wordlist=wordlist.txt hash1.txt
      </Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA17.png"
        alt="image"
      />
      <Text className={styles.flagCode}>{"{C0d3_0b5cur3r_Flag}"}</Text>
      <Text as="i">
        and I do the same for each. hashid then john.When I am not sure of the
        —format=, I run this command:
      </Text>
      <Text className={styles.highlightedCode}>
        $ john --list=formats | grep -i {'"'} sha1{'"'}
      </Text>
      <Text as="i">
        which generates a list with the given keyword, then I can see what is
        the correct name.
      </Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA18.png"
        alt="image"
      />
      <Text className={styles.flagCode}>{"{C0d3_5l4y3r_Flag }"}</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA19.png"
        alt="image"
      />{" "}
      <Text className={styles.flagCode}>{"{H4ck3r_Flag}"}</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA20.png"
        alt="image"
      />
      <Text className={styles.flagCode}>{"{L0ck_Flag}"}</Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA21.png"
        alt="image"
      />
      <Text className={styles.flagCode}>{"{S3cur1ty_Flag}"}</Text>
      <Text as="i">
        After copying the files.zip with scp to the root device:
      </Text>
      <Text className={styles.highlightedCode}>$ unzip files.zip</Text>
      <Text as="i">the password is Masterschool </Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA22.png"
        alt="image"
      />
      <Text as="i">
        extracts secret.zip and wordlist.txt I could use fcrackzip or zip2john.
        I already installed zip2john while cracking the hashes.
      </Text>
      <Text className={styles.highlightedCode}>
        $ zip2john secret.zip {">"} zip.hash
      </Text>
      <Text as="i">and used the wordlist to crack consequently.</Text>
      <Text className={styles.highlightedCode}>
        $ john zip.hash —wordlist=wordlist.txt
      </Text>
      <Text className={styles.flagCode}>{"{CTF_TIME}"}</Text>
      <Text className={styles.highlightedCode}>$ unzip secret.zip </Text>
      <Text className={styles.flagCode}>{"{LetMeIn123!@#}"}</Text>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        NMAP SCAN TO REMOTE HOST{" "}
      </Heading>
      <Text className={styles.highlightedCode}>
        $ nmap -sV -sC -oA target_scan_report 10.10.72.12
      </Text>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA23.png"
        alt="image"
      />
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        RESULTS{" "}
      </Heading>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA24.png"
        alt="image"
      />
      <Heading as="h4" size="lg" className={styles.projectSubtitle}>
        Findings
      </Heading>
      <UnorderedList>
        <ListItem>
          <Text as="b">FTP Service on Port 21</Text>
          <UnorderedList>
            <ListItem>Service: vsftpd 3.0.3</ListItem>
            <ListItem>
              Notable Findings: Anonymous FTP login is allowed, revealing at
              least two files:
              <Text className={styles.highlightedCode}>files.zip</Text> and
              <Text className={styles.highlightedCode}>flag.txt</Text>. Allowing
              anonymous access can pose a security risk as it permits anyone to
              access or upload files, potentially including malicious content.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">SSH Service on Port 22</Text>
          <UnorderedList>
            <ListItem>Service: OpenSSH 8.2p1 Ubuntu 4ubuntu0.5</ListItem>
            <ListItem>
              Notable Findings: SSH is often targeted for brute-force attacks.
              The version provided appears to be relatively current, but
              ensuring it is fully up-to-date can help mitigate known
              vulnerabilities.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">SMTP Service on Port 25</Text>
          <UnorderedList>
            <ListItem>Service: Postfix smtpd</ListItem>
            <ListItem>
              Notable Findings: SMTP servers can be leveraged for sending
              unsolicited emails if not properly secured.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">DNS Service on Port 53</Text>
          <UnorderedList>
            <ListItem>Service: ISC BIND 9.16.1-Ubuntu</ListItem>
            <ListItem>
              Notable Findings: Older versions of BIND have known
              vulnerabilities; while 9.16.1-Ubuntu is relatively recent, it is
              essential to keep it updated.
            </ListItem>
            <ListItem>
              Action Steps: Verify that the DNS service is patched against known
              vulnerabilities. Consider DNSSEC to protect against DNS spoofing
              and cache poisoning attacks.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">HTTP Service on Port 80</Text>
          <UnorderedList>
            <ListItem>Service: Apache httpd 2.4.41 (Ubuntu)</ListItem>
            <ListItem>
              Notable Findings: The website does not have a title, which might
              indicate a default or under-configured web server.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">Email Services on Ports 110 (POP3) and 143 (IMAP)</Text>
          <UnorderedList>
            <ListItem>Service: Dovecot pop3d/imapd</ListItem>
            <ListItem>
              Notable Findings: Email services, if not secured, can be an entry
              point for attackers to gain access to sensitive communications.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">
            Encrypted Email Services on Ports 993 (IMAPS) and 995 (POP3S)
          </Text>
          <UnorderedList>
            <ListItem>
              Notable Findings: These ports suggest encrypted email services,
              which is a good security practice. However, the services are
              marked as
              <Text className={styles.highlightedCode}>tcpwrapped</Text>, which
              may indicate additional security measures or potential
              misconfigurations to investigate.
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <Heading as="h4" size="md" className={styles.projectSubtitle}>
        NMAP SCAN FOR VULNERABILITIES{" "}
      </Heading>
      <Text className={styles.highlightedCode}>
        $ nmap --script=vuln -oA target_vuln_report
        &lt;target_ip_or_hostname&gt;
      </Text>
      <Text>
        I ran this command and gave the partially censored result to ChatGPT,
        these are some suggestions:
      </Text>
      <UnorderedList>
        <ListItem>
          <Text as="b">FTP Service on Port 21</Text>
          <UnorderedList>
            <ListItem>
              Finding: The FTP service allows anonymous login, which is a
              considerable security risk as it can lead to unauthorized data
              access or upload.
            </ListItem>
            <ListItem>
              Action: Disable anonymous FTP access or ensure only non-sensitive
              data is accessible. Regularly monitor FTP access logs.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">SMTP Service on Port 25</Text>
          <UnorderedList>
            <ListItem>
              Finding: The scan attempted to check for CVE-2010-4344, a
              vulnerability in Exim, but determined the SMTP server is not Exim
              and tagged it as NOT VULNERABLE.
            </ListItem>
            <ListItem>
              Action: Ensure the SMTP service (Postfix) is up-to-date and
              properly configured to prevent misuse, such as being part of a
              spam relay.
            </ListItem>
          </UnorderedList>
        </ListItem>

        <ListItem>
          <Text as="b">HTTP Service on Port 80</Text>
          <UnorderedList>
            <ListItem>
              Vulnerabilities Identified:
              <OrderedList>
                <ListItem>
                  CSRF, DOM-based XSS, Stored XSS: The scan did not find CSRF,
                  DOM-based XSS, or stored XSS vulnerabilities, indicating a
                  positive security stance against these specific web
                  application attack vectors.
                </ListItem>
                <ListItem>
                  SQL Injection: Possible SQL injection points were identified,
                  suggesting that the web application might be vulnerable to SQL
                  injection attacks, a critical security issue allowing
                  attackers to interact with the backend database.
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              Action: Conduct a thorough web application vulnerability
              assessment, focusing on SQL injection vulnerabilities. Use
              parameterized queries or ORM frameworks to prevent SQL injection.
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </div>
  );
}
