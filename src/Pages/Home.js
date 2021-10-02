import React from 'react'
import TrendingRandom from '../Components/TrendingRandom'
import Trending from '../Components/Trending'
import Popular from '../Components/Popular'
import TopRated from '../Components/TopRated'
import Comedy from '../Components/Comedy'
import Action from '../Components/Action'
import Romantic from '../Components/Romantic'
import Drama from '../Components/Drama'
import Horror from '../Components/Horror'
import Documentary from '../Components/Documentary'
import Header from '../Components/Header'

function Home(){

    return <div className='home'>
        <Header/>
        <TrendingRandom/>
        <Trending/>
        <Popular/>
        <TopRated/>
        <Comedy/>
        <Action/>
        <Romantic/>
        <Drama/>
        <Horror/>
        <Documentary/>
    </div>
}
export default Home