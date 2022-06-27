import React from 'react'
import profile from '../fakeData'

console.log(profile);

const ProfileCard = ({ image, name, tittle, description }) => {
    return (
        <div style={{
            backgroundColor: '#fff',
            margin: 10,
            padding: 3,
            borderRadius: 15
        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <img
                    src={image}
                    alt=''
                    height='50px' style={{ borderRadius: 10 }} />
                <div>
                    <h2 style={{ marginLeft: '10px' }}>{name}</h2>
                    <h4 style={{ marginLeft: '10px' }}>{tittle}</h4>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <p style={{ fontSize: '10px', padding: 5 }}>
                    {description}</p>
            </div>
        </div>
    )
}

export default ProfileCard