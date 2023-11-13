import Navbar from "../../components/Navbar/Navbar"
import Slider from "../../components/Slider/Slider"
import './Home.css'
import {Link} from 'react-router-dom'
import { useState } from "react"
import Collection from "../../components/Collection/Collection"
import BoxCreator from "../../components/BoxCreator/BoxCreator"
import Comment from "../../components/Comment/Comment"
import Footer from "../../components/Footer/Footer"

export default function Home(){

    const [sliderImage, setSliderImage] = useState(1)

    return (
        <>
            <div className="bannerAnimate">
                <ul className="bannerContent">
                    <li>Award-winning cocktails 🥃</li>
                    <li>We plant a tree for every box sold 🌳</li>
                    <li>Free shipping with all cocktails 📦</li>
                    <li>Sign up for 15% off your first order 🍸</li>
                    <li>Award-winning cocktails 🥃</li>
                    <li>We plant a tree for every box sold 🌳</li>
                    <li>Free shipping with all cocktails 📦</li>
                    <li>Sign up for 15% off your first order 🍸</li>
                </ul>
            </div>
            <Navbar />
            <Slider />
            <div className="ad-container">
                <h2 className="title-ad-container">Real cocktails. Bottled.</h2>
                <p>At Edmunds we bring the magic of the cocktail experience to you.</p>
                <p>We craft our award-winning drinks with the same skill you’d find in your favourite cocktail<br></br> bar, using a full measure of premium spirits with the finest liqueurs and juices.</p>
                <Link to='/collections/all'>
                    <button className="btn-ad-container">Shop now</button>
                </Link>
            </div>
            <Collection />
            <BoxCreator />
            <Comment />
            <Footer />
        </>
    )   
}