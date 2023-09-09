import React, {useContext} from 'react'
import { Context } from '../Context'
import Carousel from 'react-elastic-carousel'

function Crew({crew}){
    const {breakPoints} = useContext(Context)

    return(
        <div className='crewContainer'>
            <h2>Crew</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false} showEmptySlots={true}>
            {crew}
            </Carousel>
        </div>
    )
}

export default Crew