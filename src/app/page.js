
import PostPreview from "./components/postPreview";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import RootLayout from "./layout";

async function getPosts() {
    const res = await fetch('http://localhost/api/wp-json/wp/v2/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
  }
// `app/page.tsx` is the UI for the `/` URL
export default async function Page() {
    const posts = await getPosts();
    return(
        <main className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {posts.length > 0 ? (
                            <>
                                {posts.map((post) => (
                                    <PostPreview key={post.id} {...post} />
                                ))}
                            </>
                        ) : (
                            <>
                            no posts
                            </>
                        )
                    }
                    
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </main>
    )
 }