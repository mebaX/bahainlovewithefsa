import { useEffect, useState } from 'react'
import './App.css'
import MainPage from './mainPage'


function Countdown() {
    const [today, setToday] = useState(0)
    const targetDate = new Date('Feb 14, 2025 00:00:00').getTime()
    useEffect(() => {
        setInterval(() => {
            do { setToday(new Date().getTime()) }
            while (today != 0)
        })
    }, [])

    const remainingTime = targetDate - today
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);


    if (remainingTime >= 0) {
        return (
            <>
                <div className='container'>
                    <p className='lbl'>SEVGİLİLER GÜNÜNE;</p>
                    <div className="timer">
                        <span className='day timer-item'>{days}</span>
                        <span className='hour timer-item'>{hours}</span>
                        <span className="min timer-item">{minutes}</span>
                        <span className="sec timer-item">{seconds}</span>
                    </div>
                </div>
            </>
        )
    }
    else{
        return (
            <MainPage />
        )
    }
}
export default Countdown