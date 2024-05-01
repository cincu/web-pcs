import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../public/Components/Footer";
import useCincuStore from "@/store/useCincu";

export default function App({ Component, pageProps }) {
  const { cincu, updateCincu } = useCincuStore();
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Footer cincu={cincu} />
    </ChakraProvider>
  );
}
