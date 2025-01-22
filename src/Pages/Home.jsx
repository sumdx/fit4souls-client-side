import About from "../Components/About";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import FeaturedClass from "../Components/FeaturedClass";
import LatestForumPost from "../Components/LatestForumPost";
import Newsletter from "../Components/Newsletter";
import Teams from "../Components/Teams";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <About></About>
      <FeaturedClass></FeaturedClass>
      <LatestForumPost></LatestForumPost>
      <Testimonial> </Testimonial>
      <Teams></Teams>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
