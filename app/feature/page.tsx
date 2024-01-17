
import { FeaturePage } from "@/components/Feature/featurepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article | NewzInk",
  description: "NewzInk",
  
};

const Feature = () => {
  return (
    
    <section className=" py-2 bg-primary/50">
      <FeaturePage/>
      
    </section>
      
    
  );
};

export default Feature;
