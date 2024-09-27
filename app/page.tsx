
import Image from "next/image";
import Hero from "./components/Hero";
import AboutChurch from "./components/AboutChurch";
import Sermon from "./components/Sermon";
import ServiceTime from "./components/ServiceTime";
import Followp from "./components/FollowUp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutChurch/>
    <Sermon/>
    <ServiceTime/>
    <Followp/>
    <Footer/>
    </>
  );
}
