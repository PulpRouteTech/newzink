import ComingSoon from "@/components/Home/ComingSoon";
import { SectionFour } from "@/components/Home/SectionFour";
import { SectionOne } from "@/components/Home/SectionOne";
import { SectionThree } from "@/components/Home/SectionThree";


export default function Home() {
  return (
    <section className="">
      <SectionOne />
    
      <ComingSoon />
      {/* <SectionThree/> */}
      {/* <SectionFour/>  */}
    </section>
  );
}
