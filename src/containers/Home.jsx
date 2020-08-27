import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import '../assets/styles/Home.scss'
import Header from '../components/Header.jsx'
import Search from '../components/Search.jsx'
import Categories from '../components/Categories.jsx'
import Carousel from '../components/Carousel.jsx'
import CarouselItem from '../components/CarouselItem.jsx'
import Footer from '../components/Footer.jsx'
import useInitialState from '../hooks/useInitialState.js'


const Home = ({ myList, originals}) => {

    return  (
        <div className="Home">
            <Header />
            <Search />
                <Categories title="Mi Lista">
                    <Carousel>
                    {myList !== undefined && myList.length > 0 && (
                        myList.map(item => (
                            <CarouselItem key={item.id} {...item} />
                        ))
                    )}
                    </Carousel>
                </Categories>

            <Categories title="Tendencias">
                <Carousel>
                    {originals !== undefined && originals.length > 0 && (
                    originals.map(item => (
                        <CarouselItem key={item.id} {...item} />
                    )))}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        originals: state.originals
    }
}

// Unir aplicacion con el estado pasado con provider
// export default connect(props, actions)(Home), mapear las acciones a ejecutar, evento a ejecutar reducer
export default connect(mapStateToProps, null)(Home)