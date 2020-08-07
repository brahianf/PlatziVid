import React, {useState, useEffect} from 'react'

import '../assets/styles/Home.scss'
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../components/Footer.jsx'
import useInitialState from '../hooks/useInitialState.js'

const API = 'http://localhost:3000/initialState/'

const Home = () => {
    console.log(useInitialState(API))
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1> Loading...</h1> : (
        <div className="Home">
            <Header />
            <Search />
                <Categories title="Mi Lista">
                    <Carousel>
                    {initialState.mylist !== undefined && initialState.mylist.length > 0 && (
                        initialState.mylist.map(item => (
                            <CarouselItem key={item.id} {...item} />
                        ))
                    )}
                    </Carousel>
                </Categories>

            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends !== undefined && initialState.trends > 0 && (
                    initialState.trends.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    )))}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
};

export default Home;