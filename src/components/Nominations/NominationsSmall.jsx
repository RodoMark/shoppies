import React, {useContext} from 'react'
import {NominationContext} from '../../context/NominationContext'
import NominationCard from './NominationCard'

const NominationsSmall = () => {
    const {nominations} = useContext(NominationContext)

    return (
        nominations.length > 0 ?
            <ul className="nominations--small">
                {nominations.map(movie => (
                    <li
                        key={movie.imdbID}
                    >
                        <NominationCard type={"small"} movie={movie}/>
                    </li>
                ))}
            </ul>

            :

            null
    )
}

export default NominationsSmall
