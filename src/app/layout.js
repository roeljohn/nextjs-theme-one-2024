import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import './globals.css'
import ImportBsJS from './components/importBSJS'
import Header from './header/Header'
import Footer from './footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <ImportBsJS />
      
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  )
}
