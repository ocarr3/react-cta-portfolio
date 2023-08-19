import {useEffect, useState} from 'react';
import * as React from "react";
import {Loader} from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import {useSpring, animated} from "react-spring";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import ReactLeafletKml from 'react-leaflet-kml';
import * as L from 'leaflet';

import "leaflet/dist/leaflet.css";


function Number({ n, f, t }) {
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 200,
        config: {mass: 1, tension: t, friction: f},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const title1 = "In 2022..."
const title2 = "rides were taken on the CTA."
const subtitle1 = "on the bus, and"
const subtitle2 = "on the train."

const LocationClick = () => {
    const map = useMapEvents(
        {
            click(e) {
                console.log(e.latlng)
            },
        }
    );
    return null
};



const Project = () => {

    const [kml, setKml] = React.useState(null);
    
    const [letterClass, setLetterClass] = useState('text-animate-cta')
    
    
    useEffect(() => {
        

        let timeoutId = setTimeout(() => {
            setLetterClass('cta-text-animate-hover')
        }, 8000)

        
        

        return () => {
            clearTimeout(timeoutId)
        }
    }, []);

    React.useEffect(() => {
        fetch (
            "https://ocarr3.github.io/react-cta-portfolio/data/doc.kml"
        )
           .then((res) => res.text())
           .then((kmlText) => {
            const parser = new DOMParser();
            const kml = parser.parseFromString(kmlText, "text/xml");
            setKml(kml);
           }); 
    }, []);


    return (
        <>
        
        <div className = "container project-page">
            <div className = "text-zone">
                <h2>
                    This page is under construction. But feel free to look around!
                </h2>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray = {[title1.split("")]}
                        idx = {15}
                    />
                    <br></br>
                    <div className='numbers'>
                        <Number n = {243} f = {10} t = {20}/>
                        <div>,</div>
                        <Number n = {279} f = {10} t = {15}/>
                        <div>,</div>
                        <Number n = {803} f = {10} t = {12}/>
                        <div>&nbsp;</div>
                    </div>
                    <AnimatedLetters 
                        className = "statement"
                        letterClass={letterClass}
                        strArray = {[title2.split("")]}
                        idx = {25}
                    />
                    <br></br>
                    <div className='numbers'>
                        <Number n = {140} f = {10} t = {20}/>
                        <div>,0</div>
                        <Number n = {13} f = {10} t = {15}/>
                        <div>,</div>
                        <Number n = {945} f = {10} t = {12}/>
                        <div>&nbsp;</div> 
                    </div>
                    <AnimatedLetters 
                        className = "statement"
                        letterClass={letterClass}
                        strArray = {[subtitle1.split("")]}
                        idx = {40}
                    />
                    <div className='numbers'>
                        <div>&nbsp;</div>
                        <Number n = {103} f = {10} t = {20}/>
                        <div>,</div>
                        <Number n = {524} f = {10} t = {15}/>
                        <div>,</div>
                        <Number n = {858} f = {10} t = {12}/>
                        <div>&nbsp;</div>
                    </div>
                    <AnimatedLetters 
                        className = "statement"
                        letterClass={letterClass}
                        strArray = {[subtitle2.split("")]}
                        idx = {53}
                    />
                </h1>
                <p>
                    Interact with the map of Chicago's 'L' route below to learn more about the ridership history of the city's public transportaion.
                </p>
                <div className='containter map'>
                    <MapContainer center = {[41.8781, -87.6298]} zoom = {11.25} dragging = {false} zoomControl= {false} scrollWheelZoom = {false}  doubleClickZoom={false}>
                        <TileLayer
                            attribution = 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Map style: &copy; <a href="https://www.OpenStreetMap.org">OpenRailwayMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                            url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />
                        <LocationClick/>
                        {kml && <ReactLeafletKml kml = {kml} />}
                    </MapContainer>
                </div>
                <p>
                    Click on a line on the CTA you're interested in on the map above and select from options below    
                </p>
                <p>
                    The currently selected line is:   
                </p>
            </div>
        </div>
        
        <Loader type = "pacman"/>
        </>
    )
    
}

export default Project