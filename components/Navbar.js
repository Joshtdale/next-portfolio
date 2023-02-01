// import '/workspace/next-portfolio/styles/globals.css'
// import bootstrap from 'bootstrap'
import Link from "next/link"


function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark navbar-color fixed-top">
            <div className="container-fluid navContainer">
                {/* <h3 className='m-3 headFont'>Josh Dale</h3> */}
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="nav navbar-nav">
                        <li data-toggle="collapse" className='nav-item'>
                        <Link href="/"><button className="btn px-2 text-white headFont">
                                <h3>Josh Dale</h3>
                            </button></Link>
                        </li>
                        <li className='nav-item'>
                            <Link href='portfolio'><button className="btn px-2 text-white mt-1">
                                Portfolio
                            </button></Link>
                        </li>
                        {/* <li className='nav-item'>
                        <a href='blog'><button className="btn px-2 text-white mt-1">
                                Blog
                            </button></a>
                        </li> */}
                        <li className='nav-item'>
                        <a href='contact'><button className="btn px-2 text-white mt-1">
                                Contact
                            </button></a>
                        </li>
                        <li className='nav-item'>
                        <a href='about'><button className="btn px-2 text-white mt-1">
                                About
                            </button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
};

export default Navbar