
import Footer from "./footer/Footer";
import Header from "./header/Header";
import RootLayout from "./layout";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {

    return(
        <main className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p>This is homepage</p>
                    </div>
                </div>
            </div>
        </main>
    )
 }