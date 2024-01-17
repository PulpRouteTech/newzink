import { SampleCard } from "../Common/SampleCard"

export const SectionFour=()=>{
    return(
        <div className=" bg-[url('/images/yoga3.jpg')] bg-cover bg-center  w-full px-4 lg:px-40 py-16">
            <div className=" p-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <SampleCard/>
            <SampleCard/>
            <SampleCard/>
            <SampleCard/>
            <SampleCard/>
            <SampleCard/>
            
            </div>
            </div> 
        
           
        
    )
}