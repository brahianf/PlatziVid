import React, {useState, useEffect} from 'react'

import '../assets/styles/Home.scss'
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])

    console.log(videos)

    return(
        <div className="Home">
            <Header />
            <Search />
            <Categories title="Mi Lista">
                <Carousel>
                    <CarouselItem /> 
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Categories  title="Tendencias">
                <Carousel>
                    <CarouselItem /> 
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
};

export default Home;