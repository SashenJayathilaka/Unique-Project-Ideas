import React, { useEffect, useState } from 'react'
import './Main.css'
import tweeterLOgo from '../assets/owner/twitter.png'
import instagramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'

const Main = ({ selectPunk, PunkListData }) => {

    const [activePunk, setActivePunk] = useState(PunkListData[0]);

    useEffect(() => {
        setActivePunk(PunkListData[selectPunk])
    }, [PunkListData, selectPunk])



    return (
        <div className='main'>
            <div className='mainContain'>
                <div className='punkHighlighter'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={activePunk.image_original_url} alt='' />
                    </div>
                </div>
                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className='tittle'>{activePunk.name}</div>
                    <span className='itemNumber'>.#{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activePunk.owner.profile_img_url} alt='' />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@SashenHasindu</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={tweeterLOgo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main