import moment from "moment";
import PostUser from "./postUser";

export default function PostPreview({post}) {

    // erase all type of html tags, classes and css properties
    const regex = /(<([^>]+)>)/gi;
    const excerpt_filter_tags = post.excerpt.rendered.replace(regex, "");
    // convert date
    const post_date = moment(post.date).format('DD MMM, YYYY');

    return(
        <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">{post.title.rendered}</h2>
                    <h3 className="post-subtitle">{excerpt_filter_tags.substring(0, 30)}</h3>
                </a>
                <p className="post-meta">
                    Posted by <PostUser author={post.author} /> on {post_date}
                </p>
            <hr className="my-4" />
        </div>
    )
}