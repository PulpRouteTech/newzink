import Image from "next/image"
import Link from "next/link"

export const SectionTwo = () => {
    return (
        <section className=" -my-1 ">
            <div className="h-4 bg-gradient-to-r from-primary via-primary/40 to-primary "></div>
            <div className=" flex flex-wrap">
                <div className=" p-16 w-full lg:w-1/2 bg-gray-400  items-start">
                    <h1 className=" text-4xl text-primary my-10">
                        Hello and Welcome
                    </h1>
                    <p className=" my-16">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis assumenda vitae inventore nobis quidem aspernatur ipsam? Illo, incidunt qui! Corporis alias tempore unde dolore, amet provident nulla laudantium recusandae. Assumenda?
                    </p>
                    <h1 className=" my-10 text-primary text-2xl">
                        #HealthMatters
                    </h1>

                </div>
                <div className=" relative  w-full lg:w-1/2">
                    <div className="relative h-[500px]">
                        <Image
                            src='/images/yoga3.jpg'
                            alt='image'
                            layout='fill'
                            objectFit='fill'
                            className=" "
                        />
                    </div>
                    <div className=" absolute top-0 left-0 right-0  flex flex-col items-start justify-center p-16 ">
                        <h1 className="text-4xl text-primary my-10">About Me</h1>
                        <p className=" my-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dignissimos repudiandae sit at voluptate, sunt neque dicta voluptatum qui consectetur quo earum, amet sequi! Natus deserunt ipsa quia pariatur ad?</p>
                        <Link
                            href="/"
                            className="rounded-full bg-primary/80 hover:bg-primary my-10 px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out scale-75 md:scale-100"
                        >
                            ABOUT
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}