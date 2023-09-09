import React, {useContext} from 'react'
import { Context } from '../Context'
import Carousel from 'react-elastic-carousel'

function Cast({cast}){
    const {breakPoints}=useContext(Context)

    return (
        <div className='castContainer'>
            <h2>Cast</h2>
        <Carousel breakPoints={breakPoints} showArrows={true} pagination={false} showEmptySlots={true}>
            {cast}
        </Carousel>
        </div>
    )
}

export default Cast
