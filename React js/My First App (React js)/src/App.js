import './App.css'
import { useEffect, useState } from 'react';
import MyButton from './components/MyButton';
import ProfileCard from './components/ProfileCard';
import profile from './fakeData';

function App() {
    const [count, setCount] = useState(20);

    const [fullName, setFullName] = useState('')


    // setCount(count + 1);    increment
    // setCount(count - 1);    decrement

    const getRandomName = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        setFullName(data.results[0].name.first + ' ' + data.results[0].name.last)
        return data.result[0].picture.large
    }

    useEffect(() => {
        getRandomName()
    }, [])

    return (

        <>
            <h2 style={{ color: 'red' }}>{count}</h2>

            <button onClick={() => {

                setCount(count + 1)

            }}>+</button>

            <button onClick={() => {

                setCount(count - 1)

            }}>-</button>

            <MyButton tittle='Buy 🚀' color='red' />
            <MyButton tittle='Sell 🚀' color='green' />

            { profile.map(profile => (
                <ProfileCard 
                image={`https://robohash.org/${Math.random()}.png`}
                name={fullName}
                tittle={profile.tittle}
                description={profile.description}/>
            ))}
        </>
    )
}

export default App