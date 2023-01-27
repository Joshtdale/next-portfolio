import { React, useState, useEffect } from 'react'
// import './Portfolio.css'
import HTML from '../styles/images/stackIcons/html.png';
import JavaScript from '../styles/images/stackIcons/java-script.png';
import CSS from '../styles/images/stackIcons/css-3.png';
import ReactJS from '../styles/images/stackIcons/react.svg';
import Python from '../styles/images/stackIcons/python.png';
import Postgres from '../styles/images/stackIcons/postgres.png';
import Bootstrap from '../styles/images/stackIcons/bootstrap.svg';
import django from '../styles/images/stackIcons/django.png';
import Image from 'next/image';


let count = 0 // Counter for project card mapping

function IFrameCard(props) {

    const baseClasses = 'card portfolioCards card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'

    return (
        <div className="col portCard">
            <div className={`${baseClasses}`}>
                <div className="d-flex flex-column text-white text-shadow-1">
                    <iframe className="embed-responsive-item portfolioIframe" src={props.link}>

                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <a href={props.link}><button className="btn btn-secondary">View project</button></a>
                            </li>

                        </ul>
                    </iframe>
                </div>
            </div>
        </div>
    )
};

function ProjectImage(props) {
    const baseClasses = 'card portfolioCards cardHeight card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'
    const project = props.project
    return (
        <div className="col-sm-12 col-md-5 col-lg-5 imgheight m-3">
            <div className={`${baseClasses + ' ' + project.class}`}>

            </div>
        </div>
    )
}

function ProjectInfo(props) {

    const project = props.project
    return (
        <div className="col d-flex justify-content-center container">
            <div className="row text-center">
                <div className="col-12">
                    <h2 className='m-4'>{project.name}</h2>
                </div>
                <div className="col-12 description">
                    <div>{project.description}</div>
                </div>
                <div className="col-12">
                    {project.link &&
                        <a href={project.link} target='blank_'><button className="btn btn-secondary m-2">View live project</button></a>

                    }

                    <a href={project.source} target='blank_'><button className="btn btn-secondary m-2">View source code</button></a>
                </div>
                <div className="col-12">

                    {project.stack.map((item) => {
                        console.log(item)
                    return (
                        // <img key={props.key} title={item.name} className='icons m-1' src={item.icon} alt={item.name}/>
                        <Image width='auto' height='auto' key={props.key} title={item.name} className='icons m-1' src={item.icon} alt={item.name}/>
                    )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}


function PortfolioCard(props) {
    const [width, setWidth] = useState(0)
    console.log(width)

    // const baseClasses = 'card portfolioCards h-100 w-100 card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg'
    const project = props.project
    // console.log(props.count)
    // var x = window.matchMedia("(max-width: 700px)")
    // window.innerWidth.addEventListener("resize", () => {
    //     if (x.matches) {
    //         (console.log('Small screen size: If you are seeing this, It is because I have not yet optimized the page layout for starting at desktop size then resizing to mobile size. Please reload the window at this sizing to see my intended output'))
    //     }
    // });
    const size = useWindowSize();

// console.log(size)
// Hook
function useWindowSize() {
    // const [windowSize, setWindowSize] = useState({
    //     width: undefined,
    //     height: undefined,
    // });
    // console.log(windowSize.width)
    // setWidth(windowSize.width)
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWidth(
                window.innerWidth
            );
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return width;
}

// let x = windowSize

// console.log(props.count, props.project)
if (props.count % 2 !== 0 && width > 700) {
    console.log('triggered')
    // return (
    //     <div className="col-sm-12 col-lg-10 portCard m-3">
    //         <div className="row h-100 bg-secondary rounded bg-opacity-25">
    //             {/* <div className="col d-flex justify-content-center container">
    //                 <div className="row text-center">
    //                     <div className="col-12">
    //                         <h1 className='headFont'>{project.name}</h1>
    //                     </div>
    //                     <div className="col-12">
    //                         <div>{project.description}</div>
    //                     </div>
    //                     <div className="col-12">
    //                         <a href={project.link}><button className="btn btn-secondary m-2">View live project</button></a>
    //                         <a href={project.source}><button className="btn btn-secondary m-2">View source code</button></a>
    //                     </div>
    //                     <div className="col-12">

    //                         {project.stack.map((item) =>  (
    //                                 <img title={item.name} className='icons m-1' src={item.icon} alt={item.name}></img>
    //                             )
    //                         )}
    //                     </div>
    //                 </div>
    //             </div> */}
    //             {/* <div className="col-sm-12 col-md-5 col-lg-5 m-3">
    //                 <div className={`${baseClasses + ' ' + project.class}`}>

    //                 </div>
    //             </div> */}

    //         </div>
    //     </div>
    // )
    return (
        <div className="col-sm-12 col-lg-10 portCard m-3">
            <div className="row d-flex justify-content-center mt-4">
                <ProjectInfo project={project} />
                <ProjectImage project={project} />
            </div>
        </div>

    )
} else {
    // return (
    //     <div className="col-sm-12 col-lg-10 portCard m-3">
    //         <div className="row h-100 bg-secondary rounded bg-opacity-25">
    //             <div className="col-sm-12 col-md-5 col-lg-5 m-3">
    //                 <div className={`${baseClasses + ' ' + project.class}`}>
    //                     {/* <div className="d-flex flex-column text-white text-shadow-1">

    //                     <ul className="d-flex list-unstyled mt-auto">
    //                         <li className="me-auto">
    //                             <a href={project.link}><button className="btn btn-secondary">View project</button></a>
    //                         </li>
    //                     </ul>
    //                 </div> */}
    //                 </div>
    //             </div>
    //             <div className="col d-flex justify-content-center container">
    //                 <div className="row text-center">
    //                     <div className="col-12">
    //                         <h1 className='headFont'>{project.name}</h1>
    //                     </div>
    //                     <div className="col-12">
    //                         <div>{project.description}</div>
    //                     </div>
    //                     <div className="col-12">
    //                         <a href={project.link}><button className="btn btn-secondary m-2">View live project</button></a>
    //                         <a href={project.source}><button className="btn btn-secondary m-2">View source code</button></a>
    //                     </div>
    //                     <div className="col-12">

    //                         {project.stack.map((item) =>  (
    //                                 <img title={item.name} className='icons m-1' src={item.icon} alt={item.name}></img>
    //                             )
    //                         )}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className="col-sm-12 col-lg-10 portCard m-3">
            <div className="row d-flex justify-content-center mt-4">
                <ProjectImage project={project} />
                <ProjectInfo project={project} />
            </div>
        </div>
    )
}


};



const projects = [ // Project data
    { // ChatR
        name: 'ChatR',
        class: 'chatr',
        link: 'https://chatr-db.web.app/',
        source: 'https://github.com/Joshtdale/messaging-app',
        stack: [
            {
                icon: ReactJS,
                name: 'ReactJS'
            },
            {
                icon: django,
                name: 'django'
            },
            {
                icon: Python,
                name: 'Python'
            },
            {
                icon: Postgres,
                name: 'Postgresql'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'My capstone project for the Awesome Inc. Bootcamp. Fun fact about this project in particular, my Wife gave birth to our first child during the second of the two weeks we were allotted to complete the project. This definitely added some stress and caused me to miss out on a few days worth of work. For this project I set out to clone iMessage. To be honest, this was not my first choice solely because it scared me. The thought of having to figure out how to copy one of the most well know applications on the planet was extremely intimidating. Yet it\'s those very reasons that convinced me I needed to do it. I knew getting out of my comfort zone would be the best way for me to learn. Why iMessage? I think Apple is the king of simplistic design. If you think about all of the features that iMessage has and the minimal amount of buttons, it is amazing how they can create a user experience that is so intuitive.'
    },
    { // To-do List
        name: 'To-do List',
        class: 'to-do-list',
        link: 'https://joshtdale.github.io/todo-list/',
        source: 'https://github.com/Joshtdale/todo-list',
        stack: [
            {
                icon: ReactJS,
                name: 'ReactJS'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'This basic to-do list uses local storage to assist users. This was made during my second week of learning React.js and I personally think this is one of the best projects that I\'ve made. React really clicked with me and I think that is very apparent in how this project came together both in the design and logic.'
    },
    { // Secret Sauce (React restaurant website)
        name: 'Secret Sauce',
        class: 'secret-sauce',
        // link: 'https://github.com/Joshtdale/react-restaurant',
        source: 'https://github.com/Joshtdale/react-restaurant/tree/dev',
        stack: [
            {
                icon: ReactJS,
                name: 'ReactJS'
            },
            {
                icon: Python,
                name: 'Python'
            },
            {
                icon: django,
                name: 'django'
            },
            {
                icon: Postgres,
                name: 'Postgresql'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'Created and launched Restaurant Website for a fictional company as a showcase for skills with React.js. This was my first project built in React. React clicked early on for me and I quickly became comfortable with it. Allowing me to go above and beyond the project requirements. In addition to the project requirements, I was able to add a shopping cart.'
    },
    { // Deadly Tic Tac Toe
        name: 'Deadly Tic Tac Toe',
        class: 'tic-tac-toe',
        link: 'https://joshtdale.github.io/tic-tac-toe/',
        source: 'https://github.com/Joshtdale/tic-tac-toe',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'A deadly virtual tic-tac-toe utilizing VanillaJS. One of my favorite projects. A true test of logical thinking and pseudocoding.'
    },
    { // Weather app
        name: 'Weather app',
        class: 'weather-app',
        link: 'https://joshtdale.github.io/weather-app/',
        source: 'https://github.com/Joshtdale/weather-app',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: Bootstrap,
                name: 'Bootstrap'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'A basic weather app built with VanillaJS and Axios, This was our first week where we weren\'t allowed to write any HTML, all elements had to be generated with JavaScript.'
    },
    { // Alarm Clock
        name: 'Alarm Clock',
        class: 'alarm-clock',
        link: 'https://joshtdale.github.io/alarm-clock/',
        source: 'https://github.com/Joshtdale/alarm-clock',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'My first project with JavaScript with no pre-made code snippets or step by step instruction, only a prompt. "Build an alarm clock using JavaScript." Since I had already had a little experience with DOM style manipulation, I was able to have some fun with this project. When the alarm is triggered, It changes the background, font colors and plays Daydreaming by Radiohead.'
    },
    { // Scary Story Generator
        name: 'Scary Story Generator',
        class: 'scary-story-generator',
        link: 'https://joshtdale.github.io/silly-story-generator/sandbox/sandbox.html',
        source: 'https://github.com/Joshtdale/silly-story-generator',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'My fun take on MDN\'s Silly Story Generator project. Taking my love of classic horror films and combining it with a madlib format application.'
    },
    { // Mind reader
        name: 'Mind reader',
        class: 'mind-reader',
        link: 'https://joshtdale.github.io/mind-reader/',
        source: 'https://github.com/Joshtdale/mind-reader',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            },
            {
                icon: JavaScript,
                name: 'JavaScript'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'A fun project utilizing a simple math equation to seemingly read the user\'s mind. One of our first projects at Awesome Inc. utilizing Javascript and dynamic element generation.'
    },
    { // Thundercat website
        name: 'Thundercat website',
        class: 'thundercat',
        link: 'https://dale-webpage-project.glitch.me/index.html',
        source: 'https://dale-webpage-project.glitch.me/index.html',
        stack: [
            {
                icon: HTML,
                name: 'HTML'
            },
            {
                icon: CSS,
                name: 'CSS'
            },
        ],
        description: 'One of my first webpages. Built during Awesome Inc\'s Into to web development course with only HTML and CSS. This was integral in my learning of CSS grid.'
    },

]



function Portfolio() {
    return (
        <div className='portfolioContainer'>
            <div className='row d-flex justify-content-center'>
                {projects.map((item) => {
                    count += 1
                    // console.log(count)
                    return (
                        <PortfolioCard key={count} count={count} project={item} />
                    )
                })}
            </div>
        </div>
    )
};

export default Portfolio