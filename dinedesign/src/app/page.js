import Image from "next/image";
import Footer from "./components/Footer"
import Title from "./components/Title";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import Review from "./components/Review";
import Contact from "./components/Contact"
import Reservation from './components/Reservation';
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage-instance";

export default function Home() {
  return (
    <>
      <Title  />
      <div className = "bg-rose-50">
      
        <Offers />
        <Menu />
        <Review />
        <Reservation />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
