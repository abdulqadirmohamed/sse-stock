
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import HomeCarousel from "@/components/Home-Carousel";
import LatestInsights from "@/components/latest-insights";
import Latestideos from "@/components/latest-videos";
import LatestEvents from "@/components/LatestEvents";
import MarketSnapshot from "@/components/market-snapshot";
import MembershipOfSSE from "@/components/Membership-of-SSE";
import { limitFetchData } from "@/lib/fetchData";

export default async function Home() {
  const slides = await limitFetchData('/api/slides', 3);
  return (
    <main>
        <HomeCarousel slides={slides} />
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
