'use client';
import GamePreview from "@/components/GamePreview/GamePreview";
import HomeHeader from "@/components/HomeHeader/HomeHeader";
import HomePlans from "@/components/HomePlans/HomePlans";
import Footer from "@/components/UI/Footer/Footer";
import WhySpacedev from "@/components/WhySpacedev/WhySpacedev";
import { RootState } from "@/lib/redux/store";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const Home = () => {
  // redirect если user auth
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuthenticated);
  if(isAuth) {
    redirect('/account');
  } 

  return (
    <>
      <header>
        <HomeHeader />
      </header>
      <main>
        <GamePreview />
        <WhySpacedev />
        <HomePlans />
      </main>
      <Footer />
    </>
  );
}

export default Home;