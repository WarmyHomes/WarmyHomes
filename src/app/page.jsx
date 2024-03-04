import Footer from "@/components/common/footer";
import Menubar from "@/components/common/header/menubar";
import Spacer from "@/components/common/spacer";
import ContactUs from "@/components/home-page/contact-us";
import RegisterNow from "@/components/home-page/register-now";
import { config } from "@/helpers/config";

export const metadata = {
	title: config.project.slogan,
};
export default function Home(){
  return(
    

     
    <>
   <Menubar/>
   <Spacer/>
   <RegisterNow/>
   <Spacer/>
   <ContactUs/>
   <Spacer/>
  
      </>

    
  );
}