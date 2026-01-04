import Hero from "./components/Hero";
import Audience from "./components/Audience";
import Modes from "./components/Modes";
import Tech from "./components/Tech";
import Video from "./components/Video";
import Reviews from "./components/Reviews";
import OrderModal from "./components/OrderModal";
import ThanksModal from "./components/ThanksModal";


export default function Home() {
  return (
    <>
      <Hero />
      <Audience />
      <Modes />
      <Tech />
      <Video />
      <Reviews />
      <OrderModal />
      <ThanksModal />
    </>
  );
}
