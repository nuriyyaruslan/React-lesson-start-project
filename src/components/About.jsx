import { mainTitle } from "./Gallery";

function About(props) {
    const {title,desc} = props;
    return ( 
        <div className='component-cover'>
            <h1>{mainTitle}</h1>
            <h2>About</h2>
            <h2>{title}</h2>
            <div>{desc}</div>
        </div>
     );
}

export default About;