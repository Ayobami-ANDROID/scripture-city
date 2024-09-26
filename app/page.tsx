import Image from "next/image";
import Hero from "./components/Hero";
import AboutChurch from "./components/AboutChurch";
import Sermon from "./components/Sermon";
import ServiceTime from "./components/ServiceTime";

export default function Home() {
  return (
    <>
    <Hero/>
    <AboutChurch/>
    <Sermon/>
    <ServiceTime/>
    </>
  );
}
