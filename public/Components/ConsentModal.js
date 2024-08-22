// components/ConsentModal.js
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

const ConsentModal = ({ onConsent }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ipConsent");
    if (!consent) {
      onOpen();
    } else {
      setHasConsented(true);
      onConsent();
    }
  }, []);

  const handleConsent = () => {
    setHasConsented(true);
    localStorage.setItem("ipConsent", "true");
    onClose();
    onConsent();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Privacy Notice</ModalHeader>
        <ModalBody>
          <Text>
            I use cookies and other tracking technologies to improve your
            browsing experience on my website. By clicking Accept, you consent
            to my use of tracking technologies, including the collection of your
            IP address. Thank you for visiting my website!
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleConsent}>Accept</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConsentModal;
