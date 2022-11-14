import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

const PunkList = ({ PunkListData, setSelectPunk }) => {
  return (
    <div className='punkList'>
      {PunkListData.map(punk => (
        <div onClick={() => setSelectPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  )
}

export default PunkList