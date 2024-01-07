import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faSquareFacebook, faSquareYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="border-top">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="#!">
                                <FontAwesomeIcon icon={faSquareXTwitter} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!">
                                <FontAwesomeIcon icon={faSquareFacebook} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#!">
                                <FontAwesomeIcon icon={faSquareYoutube} />
                                </a>
                            </li>
                        </ul>
                        <div className="small text-center text-muted fst-italic">Copyright &copy; Your Website 2023</div>
                    </div>
                </div>
            </div>
        </footer>
    )
  }