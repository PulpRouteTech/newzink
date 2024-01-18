import { PostPage } from "@/components/Post/postpage"
import { Metadata } from "next"
export const metadata: Metadata = {
    title: "Article | NewzInk",
    description: "NewzInk"
}
const Post = () => {
  return (
    <section className=" py-2 bg-primary/50">
        <PostPage/>
        </section>
  )
}

export default Post



      
    


