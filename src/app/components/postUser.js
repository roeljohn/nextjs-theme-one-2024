import { getUserPost } from "../lib/posts"


export default async function PostUser({ author }){

    const user = await getUserPost( author );

    return(
        <a href="#!">{user.name}</a>
    )
}