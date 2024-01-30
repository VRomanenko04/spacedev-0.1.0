import HomeHeader from "@/components/HomeHeader/HomeHeader";
import HomePlans from "@/components/HomePlans/HomePlans";
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
    </>
  );
}

export default Home;