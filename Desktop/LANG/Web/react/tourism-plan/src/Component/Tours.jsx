import React from 'react'
import Card from './Card';

function Tours({tours, removeTour}) {
     return(
        <div className='container'>

            <div>
            <h2 className='title'> PLAN WITH LOVE </h2>
            </div>

            <div className='cards'>
                {
                    tours.map( (tours) => {
                        // {...tour}=>copy of tour var is passed
                        //always when map function is used key is req to pass
                        return <Card  key={tours.id} {...tours} removeTour = {removeTour}> </Card>
                    })
                }
            </div>

        </div>
     );
}


export default Tours;