import { BestBusiness } from "@/components/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import  MapsSection  from "@/components/MapsSection/MapsSection";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <BestBusiness />
      <ChooseYourCards />
      <MapsSection />
      <Footer />
    </>
  )
}
