import Carousel from "@/common/components/Carousel";
import styled from "styled-components";
import BannerCard from "./BannerCard";

const Banner = () => {
  return <BannerCarousel arrow={true} >
    <BannerCard />
    <BannerCard />
    <BannerCard />
    <BannerCard />
  </BannerCarousel>;
}

export default Banner;

const BannerCarousel = styled(Carousel)`
  @media (max-width: 479px) { //mobile port
    width: 100%;
  }
  @media (min-width:480px) and (max-width:1023px) { //mobild land + tablet
    width: 100%;
    max-width: 480px;
  }
  @media (min-width:1024px) { //desktop
    width: 550px;
  }
`