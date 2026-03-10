import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import CoInvestors from "@/components/landing/CoInvestors";
import DealFlow from "@/components/landing/DealFlow";
import PastMultipliers from "@/components/landing/PastMultipliers";
import Benefits from "@/components/landing/Benefits";
import HowToJoin from "@/components/landing/HowToJoin";
import FeaturedDeal from "@/components/landing/FeaturedDeal";
import NetworkingEvent from "@/components/landing/NetworkingEvent";
import MemberCounters from "@/components/landing/MemberCounters";
import StartupNews from "@/components/landing/StartupNews";
import RiskProtocol from "@/components/landing/RiskProtocol";
import MemberReviews from "@/components/landing/MemberReviews";
import ApplyFooter from "@/components/landing/ApplyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CoInvestors />
      <DealFlow />
      <PastMultipliers />
      <Benefits />
      <HowToJoin />
      <FeaturedDeal />
      <NetworkingEvent />
      <MemberCounters />
      <StartupNews />
      <RiskProtocol />
      <MemberReviews />
      <ApplyFooter />
    </div>
  );
};

export default Index;
