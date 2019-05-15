import React, { useState, useEffect, useRef } from 'react'

export default function Timer() {
  const [timerIsStarted, setTimerIsStarted] = useState(false)
  const [timerIsHidden, setTimerIsHidden] = useState(true)
  const countdownSeconds = useRef(3) // Number of seconds to count down, default 900 (15min)
  const [secMin, setSecMin] = useState({
    min: Math.floor(countdownSeconds.current / 60),
    sec: '00'
  })
  useEffect(() => {
    if (timerIsStarted & countdownSeconds.current >= 0) {
    const timeout = setTimeout(() => {
      let alarm = new Audio(require('../audio/alarm.mp3'))
      let minutes = Math.floor(countdownSeconds.current / 60)
      let seconds = countdownSeconds.current - minutes * 60
      minutes = minutes < 10 ? "0" + minutes : minutes
      seconds = seconds < 10 ? "0" + seconds : seconds
      setSecMin({
        sec: seconds,
        min: minutes
      })
      countdownSeconds.current = countdownSeconds.current - 1
      if (countdownSeconds.current < 0) {
      alarm.play()
      alarm.volume = 0.5
      setTimeout(() => {
        alarm.pause();
        alarm.currentTime = 0;
      }, 8000)
      }
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
    }
  })
  return (
    <div className="countdown-timer">
        <div className={timerIsHidden ? 'timer' : 'timer unShrink'}>
        {secMin.min}:{secMin.sec}
        </div>
        <div className="timer-button"
        onClick={() => {
          setTimerIsStarted(!timerIsStarted)
          setTimerIsHidden(false)
        }}>
          <span>{timerIsStarted ? 'PAUSE TIMER' : 'START TIMER'}</span>
        </div>
    </div>
  )
}