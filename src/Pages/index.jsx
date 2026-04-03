import Contact from "../components/shared/Contact";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import List from "../components/shared/List";
import Team from "../components/shared/Team";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <List/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}
