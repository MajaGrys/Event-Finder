import '../styles/About.scss';
import bbq from '../img/bbq-36427_1920.webp';

export default function About() {
    return (
    <section id="about" className='container'>
        <div className="container section-title">
            <h2>About</h2>
        </div>

        <div className="about-content d-flex">

        <div className='container col-md-6'>
            <p><span className='event-finder'>EventFinder</span> allows users to search for interesting events in the vicinity of the chosen city. The project has been developed using React, Redux, Bootstrap and <a href='https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/' target='_blank' rel='noreferrer'>Discovery API</a>. Design has been inspired by the <a href='https://bootstrapmade.com/append-bootstrap-website-template/' target='_blank' rel='noreferrer'>Append</a> template.</p>
            <p>Additionally, <a href='https://www.npmjs.com/package/react-loader-spinner' target='_blank' rel='noreferrer'>react-loader-spinner</a> and <a href='https://www.npmjs.com/package/react-zoom-pan-pinch' target='_blank' rel='noreferrer'>react-zoom-pan-pinch</a> packages have been used to implement the loading spinner and the world map. Decorative images have been taken from <a href='https://pixabay.com/' target='_blank' rel='noreferrer'>Pixabay</a>'s database.</p>
            <p>Full code is available at <a href='https://github.com/MajaGrys/Event-Finder' target='_blank' rel='noreferrer'>GitHub</a>.</p>
        </div>

        <img src={bbq} className='container col-md-6' alt='' />

        </div>

    </section>
    )
}