import bannerSam from "../assets/bannerSam.svg";
import Certified from "../components/Certified";
import HomeHero from "../components/HomeHero";
import HomeSections from "../components/homeSections";

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
