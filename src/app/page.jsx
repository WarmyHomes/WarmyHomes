import Footer from "@/components/common/footer";
import Menubar from "@/components/common/header/menubar";
import Spacer from "@/components/common/misc/spacer";
import ContactUs from "@/components/home-page/contact-us";
import ExploreByCities from "@/components/home-page/explore-cities";
import ExploreByTypes from "@/components/home-page/explore-type";
import RegisterNow from "@/components/home-page/register-now";
import { config } from "@/helpers/config";

export const metadata = {
  title: config.project.slogan,
};
export default function Home() {
  return (
    <>
      <Menubar />
      <Spacer />
      <ExploreByTypes />
      <Spacer />
      <ExploreByCities />
      <Spacer />
      <RegisterNow />
      <Spacer />
      <ContactUs />
      <Spacer />
    </>
  );
}
