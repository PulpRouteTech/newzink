import Image from "next/image"
import Link from "next/link"

const CardData = [
    {
        "id": 1,
        "href": "/",
        "imgsrc": '/images/yoga3.jpg',
        "title": "about",
    },
    {
        "id": 1,
        "href": "/",
        "imgsrc": '/images/yoga3.jpg',
        "title": "about",
    },
     {
        "id": 1,
        "href": "/",
        "imgsrc": '/images/yoga3.jpg',
        "title": "about",
    }
]

export const SectionThree = () => {
    return (
        <div className=" mt-1">
            <div className=" bg-primary flex justify-center">
<div className=" w-3/5 bg-[#92BB46] text-center text-white p-10 text-5xl font-serif ">
    What Can We Do For You
</div>
                
            </div>
            <div className=" p-10 bg-[#92BB46] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {CardData.map((e) => (
                    <div key={e.id} className=" relative  w-full ">
                        <Link
                            href={e.href}>
                            <div className="relative h-[300px]">
                                <Image
                                    src={e.imgsrc}
                                    alt='image'
                                    layout='fill'
                                    objectFit='fill'
                                    className=" "
                                />
                            </div>
                            <div className="absolute inset-0 right-0  flex flex-col items-center justify-center p-16 ">
                                <h1 className="text-4xl text-primary my-10 ">{e.title}</h1>

                            </div>
                        </Link>
                    </div>
                )
                )}


            </div>
        </div>
    )
}