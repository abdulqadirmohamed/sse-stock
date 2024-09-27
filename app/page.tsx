
import Events from "@/components/Events";
import Header from "@/components/header/Header";
import HomeCarousel from "@/components/Home-Carousel";
import LatestInsights from "@/components/latest-insights";
import MarketSnapshot from "@/components/market-snapshot";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="">
        <HomeCarousel />
        <MarketSnapshot />
        <LatestInsights />
        <Events />
      </div>
    </main>
  );
}
