import bannerSam from "../assets/bannerSam.svg";
import Certified from "../components/home/Certified";
import HomeHero from "../components/home/HomeHero";
import HomeSections from "../components/home/homeSections";

export default function Home() {
  return (
    <main>
      <div>
        <img src={bannerSam} alt="Banner de anúncio do app S.A.M" />
      </div>
      <HomeHero />
      <Certified />
      <HomeSections />
    </main>
  );
}
