
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Header from "@/components/header/Header";
import HomeCarousel from "@/components/Home-Carousel";
import LatestInsights from "@/components/latest-insights";
import Latestideos from "@/components/latest-videos";
import LatestEvents from "@/components/LatestEvents";
import MarketSnapshot from "@/components/market-snapshot";
import MembershipOfSSE from "@/components/Membership-of-SSE";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <HomeCarousel />
        <MarketSnapshot />
        <LatestInsights />
        <Events />
        <Latestideos/>
        <LatestEvents/>
        <MembershipOfSSE/>
        <Faq/>
    </main>
  );
}
