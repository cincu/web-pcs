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
            This website uses cookies and other tracking technologies to improve
            browsing experience. By clicking Accept, you consent to the use of
            tracking technologies.
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
