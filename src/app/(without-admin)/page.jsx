import Spacer from "@/components/common/misc/spacer";
import ContactUs from "@/components/home-page/contact-us";
import ExploreByCities from "@/components/home-page/explore-cities";
import ExploreByTypes from "@/components/home-page/explore-type";
import RegisterNow from "@/components/home-page/register-now";
import SellingOption from "@/components/home-page/selling-option";
import { config } from "@/helpers/config";
import HeroSection from "@/components/home-page/hero-section";

export const metadata = {
  title: config.project.slogan,
};
export default function Home() {
  return (
    <>
      <HeroSection />
      <Spacer />
      <ExploreByTypes />
      <Spacer />
      <ExploreByCities />
      <Spacer />
      <RegisterNow />
      <Spacer />
      <SellingOption />
      <Spacer />
      <ContactUs />
      <Spacer />
    </>
  );
}
