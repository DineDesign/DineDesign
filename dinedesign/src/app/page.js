import Image from "next/image";
import Footer from "./components/Footer"
import InfiniteScroll from "./components/InfiniteScroll";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
export default function Home() {
  return (
    <>
      <Title />
      <Offers />
      <Menu />
      {/* <InfiniteScroll/> */}

    </>
  );
}
