import Image from "next/image";
import Footer from "./components/Footer"
import Title from "./components/Title";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import Review from "./components/Review";
import Contact from "./components/Contact"
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage-instance";

export default function Home() {
  return (
    <>
      <Title  />
      <div className = "bg-back-50">
      
        <Offers />
        <Menu />
        <Contact />

        <Review />
        
      </div>
    </>
  );
}
