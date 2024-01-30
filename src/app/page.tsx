import HomeHeader from "@/components/HomeHeader/HomeHeader";
import HomePlans from "@/components/HomePlans/HomePlans";
import Footer from "@/components/UI/Footer/Footer";
import WhySpacedev from "@/components/WhySpacedev/WhySpacedev";

const Home = () => {
  return (
    <>
      <header>
        <HomeHeader />
      </header>
      <main>
        <WhySpacedev />
        <HomePlans />
      </main>
      <Footer />
    </>
  );
}

export default Home;