import ComingSoon from "@/components/Home/ComingSoon";
import { SectionFour } from "@/components/Home/SectionFour";
import { SectionOne } from "@/components/Home/SectionOne";
import { SectionThree } from "@/components/Home/SectionThree";
import { SectionTwo } from "@/components/Home/SectionTwo";

export default function Home() {
  return (
    <section className="">
      <SectionOne />
      {/* <SectionTwo /> */}
      <ComingSoon />
      {/* <SectionThree/> */}
      {/* <SectionFour/>  */}
    </section>
  );
}
