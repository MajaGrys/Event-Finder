import React from 'react';
import '../styles/Map.scss';
import map from '../img/map.jpg';
import zoomInBtn from '../img/zoom-in.svg';
import zoomOutBtn from '../img/zoom-out.svg';
import resetBtn from '../img/refresh-cw.svg';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Map() {
    return (
        <section id="availability" className="container">
            <div className="container section-title">
                <h2>Availabilty</h2>
                <p>See the map below to check if EventFinder is available in your area.</p>
            </div>
            <div id='map'>
                <TransformWrapper>
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                    <div className="tools">
                        <button onClick={() => zoomIn()}><img src={zoomInBtn} alt='zoom in icon' /></button>
                        <button onClick={() => zoomOut()}><img src={zoomOutBtn} alt='zoom out icon' /></button>
                        <button onClick={() => resetTransform()}><img src={resetBtn} alt='reset map icon' /></button>
                    </div>
                    <TransformComponent>
                        <img className='mw-100' src={map} alt='world map with areas in which Event Finder is available highlighted' />
                    </TransformComponent>
                    </React.Fragment>)}
                </TransformWrapper>
            </div>
        </section>
    )
}