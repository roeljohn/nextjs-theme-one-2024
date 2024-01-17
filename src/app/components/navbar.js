import Link from "next/link";

export default function NavBar({ menus }) {
    // title.toLowerCase().replace(/\s+/g, '-') lower case to space
    // originalUrl.replace(/^https?:\/\/[^/]+/, ""); // Removes protocol and domain Output: "/sample-page"
    const formattedTitle = (newSlug = new URL(slug)) => newSlug === 'http://localhost/api/home/' ? '/' : newSlug.pathname.substring(newSlug.pathname.lastIndexOf("/") + 1);



    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        {menus.length > 0 ? (
                                <>
                                    {menus.map((menu) => (
                                            <li key={menu.ID} className="nav-item"><a className="nav-link px-lg-3 py-3 py-lg-4" href={formattedTitle(menu.url)}>{menu.title} {menu.url}</a></li>
                                    ))}
                                </>
                            ) : (
                                <>
                                no menu
                                </>
                            )
                        }
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
  }