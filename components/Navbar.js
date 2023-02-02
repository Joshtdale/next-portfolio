// import '/workspace/next-portfolio/styles/globals.css'
// import bootstrap from 'bootstrap'
import { useState, useEffect } from "react"
// import Link from "next/link"
import { Link } from "react-scroll";
import { motion } from "framer-motion"

let buttonWhileHover = { opacity: 1, scale: 1.1 }
let buttonWhileTap = { scale: 0.9 }



function Navbar(props) {
    const [scroll, setScroll] = useState(0)
    let navbarClasses = 'navbar navbar-expand-lg navbar-dark fixed-top'
    const size = useWindowSize();
    // console.log(scroll)
        // Hook
        function useWindowSize() {
            if (scroll > 705){
                // console.log('yuuup')
                navbarClasses = 'navbar navbar-expand-lg navbar-dark navbar-color fixed-top'
            } else if (scroll < 705){
                navbarClasses = 'navbar navbar-expand-lg navbar-dark fixed-top'
            }
            useEffect(() => {
                function handleScroll() {
                    setScroll(
                        window.scrollY
                    );
                }

                window.addEventListener("scroll", handleScroll);
    
                // Call handler right away so state gets updated with initial window size
                handleScroll();
    
                // Remove event listener on cleanup
                return () => window.removeEventListener("scroll", handleScroll);
            }, []); // Empty array ensures that effect is only run on mount
            // return scroll;
        }


    
    // const [colorChange, setColorchange] = useState(false);
    // console.log(colorChange)
    // const changeNavbarColor = () => {
    //     if (window.scrollY >= 80) {
    //         setColorchange(true);
    //     }
    //     else {
    //         setColorchange(false);
    //     }
    // };
    // window.addEventListener('scroll', changeNavbarColor);
    return (

        <nav className={navbarClasses}>
            <div className="container-fluid navContainer">
                {/* <h3 className='m-3 headFont'>Josh Dale</h3> */}
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="nav navbar-nav">
                        <li data-toggle="collapse" className='nav-item'>
                            <Link href="/"><motion.button
                                whileHover={buttonWhileHover}
                                whileTap={buttonWhileTap}
                                className="btn px-2 text-white">
                                <h3 className="headFont" >Josh Dale</h3>
                            </motion.button></Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth spy to="portfolio"><motion.button
                                whileHover={buttonWhileHover}
                                whileTap={buttonWhileTap}
                                className="btn px-2 text-white mt-1">
                                Portfolio
                            </motion.button ></Link>
                        </li>
                        {/* <li className='nav-item'>
                        <a href='blog'><button className="btn px-2 text-white mt-1">
                                Blog
                            </button></a>
                        </li> */}
                        <li className='nav-item'>
                            <a href='contact'><motion.button
                                whileHover={buttonWhileHover}
                                whileTap={buttonWhileTap}
                                className="btn px-2 text-white mt-1">
                                Contact
                            </motion.button></a>
                        </li>
                        <li className='nav-item'>
                            <a href='about'><motion.button
                                whileHover={buttonWhileHover}
                                whileTap={buttonWhileTap}
                                className="btn px-2 text-white mt-1">
                                About
                            </motion.button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
};

export default Navbar