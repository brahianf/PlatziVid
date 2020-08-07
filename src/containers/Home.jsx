import React, {useState, useEffect} from 'react'

import '../assets/styles/Home.scss'
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
    const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])

    console.log(videos.trends)

    return(
        <div className="Home">
            <Header />
            <Search />
            {videos.mylist.length > 0 && (
                <Categories title="Mi Lista">
                    <Carousel>
                        <CarouselItem /> 
                    </Carousel>
                </Categories>
            )}

            <Categories  title="Tendencias">
                <Carousel>
                    {videos.trends.map( item => 
                        // console.log(item);
                        <CarouselItem key={item.id} {...item}/> 
                    )}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
};

export default Home;