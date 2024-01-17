import Image from "next/image"

export const SampleCard = () => {

    return (
        <div className="flex bg-white p-4 border border-primary rounded-lg">
            <div className=" relative h-[60px] w-[300px]">
                <Image
                    src='/images/yoga3.jpg'
                    alt='image'
                    layout='fill'
                    objectFit='fill'
                    className=" p-2"
                />
            </div>
            <div className="data ">
                <h1 className=" text-2xl">Title</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque error, at modi ut animi asperiores, ipsa dolore magnam ratione fuga iste libero, dicta assumenda placeat voluptate doloribus facilis vel.</p>
            </div>
        </div>

    )
}