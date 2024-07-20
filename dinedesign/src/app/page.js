import Image from "next/image";
import Footer from "./components/Footer"
import InfiniteScroll from "./components/InfiniteScroll";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import Review from "./components/Review";
import Contact from "./components/Contact"
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage-instance";

export default function Home() {
  return (
    <>
      <Title />
      <Offers />
      <Menu />
      <div>
      {/* <span class="glf-button" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075" >See MENU & Order</span> */}
        <span class="glf-button reservation" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075" data-glf-reservation="true" >Table Reservation</span>
        <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script>
      </div>
      <Review />
      <Contact/>
      {/* <InfiniteScroll/> */}

    </>
  );
}
