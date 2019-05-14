import React, { useState, useEffect, useRef } from 'react'

export default function Timer() {
  const [timerIsStarted, setTimerIsStarted] = useState(false)
  const countdownSeconds = useRef(900)
  const [secMin, setSecMin] = useState({
    min: Math.floor(countdownSeconds.current / 60),
    sec: '00'
  })
  useEffect(() => {
    if (timerIsStarted & countdownSeconds.current >= 0) {
    const timeout = setTimeout(() => {
      let minutes = Math.floor(countdownSeconds.current / 60)
      let seconds = countdownSeconds.current - minutes * 60
      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds
      setSecMin({
        sec: seconds,
        min: minutes
      })
      countdownSeconds.current = countdownSeconds.current - 1
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
    }
  })
  return (
    <div className="countdown-timer">
        <div className='timer'>
        {secMin.min}:{secMin.sec}
        </div>
        <div className="timer-button"
        onClick={() => setTimerIsStarted(!timerIsStarted)}
        >
          <span>{timerIsStarted ? 'PAUSE TIMER' : 'START TIMER'}</span>
        </div>
    </div>
  )
}
