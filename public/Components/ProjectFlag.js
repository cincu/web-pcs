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
    <div className="leftAlignedText">
      <Text as="i">add new user</Text>
      <br></br> <br></br>
      <Text as="mark"> $ sudo adduser cincux</Text>
      <br></br> <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA2.png"
        alt="image"
      />
      <br></br>
      <Text as="i">ssh to the device</Text>
      <br></br> <br></br>
      <Text as="mark"> $ ssh ctf@[machine-IP]</Text>
      <br></br> <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA3.png"
        alt="image"
      />
      <Text as="kbd">
        flag: {"{"}h4ck3r5_r_us{"}"}
      </Text>
      <br></br> <br></br>
      <Text as="i">check for hidden flags in the main directory</Text>
      <br></br> <br></br>
      <Text as="mark"> $ ls -la</Text>
      <br></br>
      <Text as="mark"> $ cat .f.txt</Text>
      <br></br> <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA4.png"
        alt="image"
      />
      <Text as="kbd">
        flag: {"{"}H1d3_1n_pl41n_s1gh7{"}"}
      </Text>
      <br></br> <br></br>
      <Text as="mark"> $ cat flag/story.txt</Text>
      <br></br> <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA5.png"
        alt="image"
      />
      <Text as="kbd">
        flag: {"{"}St0ry_Fl4g{"}"}
      </Text>{" "}
      <br></br> <br></br>
      <Text as="i">I decide to do a lazy search</Text>
      <br></br> <br></br>
      <Text as="mark">
        {" "}
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
      <br></br> <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA6.png"
        alt="image"
      />
      <Text as="kbd">
        ctf@Masterschool:~/flag$ cat ../../../var/www/html/flag/flag/flag.txt{" "}
      </Text>{" "}
      <Text as="kbd">
        flag: {"{"}Fl4g_fl4g_fl4g{"}"}
      </Text>{" "}
      <br></br>
      <Text as="kbd">
        ctf@Masterschool:~/flag$ cat ../../../var/www/html/flag/flag/flag2.txt
      </Text>{" "}
      <br></br>
      <Text as="kbd">e0ZsNGcyX2ZsNGcyX2ZsNGcyfQ==</Text>
      <br></br> <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA7.png"
        alt="image"
      />
      <br></br>
      <Text as="kbd">
        flag: {"{"}Fl4g_fl4g_fl4g2{"}"}
      </Text>
      <br></br>
      <Text as="kbd">
        ctf@Masterschool:~/flag$ cat ../../../var/backups/find_flag.txt
      </Text>
      <Text as="kbd">
        flag: {"{"}F1nd_Fl4g_Fun{"}"}
      </Text>
      <br></br> <br></br>
      <Text as="mark">$ cat ../../../srv/ftp/flag.txt</Text>
      <br></br> <br></br>
      <Image
        height={800}
        width={800}
        className={styles.banner}
        src="/images/Flag/FLA8.png"
        alt="image"
      />
      <Text as="kbd">
        flag: {"{"}ftp_server_4_lyfe{"}"}
      </Text>
    </div>
  );
}
