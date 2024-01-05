
import Footer from "./footer/Footer";
import Header from "./header/Header";
import RootLayout from "./layout";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {

    return(
        <RootLayout>
            <Header />

            <Footer />
        </RootLayout>
    )
 }