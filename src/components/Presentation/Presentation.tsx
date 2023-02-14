import { useEffect, useState } from 'react'
import image1 from '../../assets/images/image1.jpg'
import './Presentation.css'

export const Presentation = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0)
  const [hoursLeft, setHoursLeft] = useState<number>(0)
  const [minutesLeft, setMinutesLeft] = useState<number>(0)
  const [secondsLeft, setSecondsLeft] = useState<number>(0)

  useEffect(() => {
    const countDownDate = new Date('2023-04-04T21:00').getTime()
    const intervalId = setInterval(() => {
      const nowDate = new Date().getTime()
      const distance = countDownDate - nowDate

      if (distance <= 0) {
        clearInterval(intervalId)
        return
      }

      setDaysLeft(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHoursLeft(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
      setMinutesLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSecondsLeft(Math.floor((distance % (1000 * 60)) / 1000))
    })

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto relative flex flex-col items-center overflow-hidden text-black font-bold">
      <img
        src={image1}
        alt="Mi cumpleaños Martín"
        className="h-screen w-full max-w-2xl object-cover"
      />
      <div className="absolute flex flex-col items-center bg-transparent presentation--top-divider" />
      <div className="absolute flex flex-col items-center bg-transparent presentation--bottom-divider" />
      <div className="absolute text-center text-white presentation--text">
        <h3 className="font-normal presentation--title">Mi Cumple</h3>
        <h1 className="mt-4 presentation--name">Martín</h1>
      </div>
      <div className="absolute text-center bg-white bg-opacity-90 rounded-full p-6 shadow-2xl presentation--time-left">
        <h3 className="presentation--title">Faltan</h3>
        <div className="grid items-center  presentation--timer">
          <h2 className="text-4xl mt-6">{daysLeft}</h2>
          <h2 className="text-4xl mt-6">{hoursLeft}</h2>
          <h2 className="text-4xl mt-6">{minutesLeft}</h2>
          <h2 className="text-4xl mt-6">{secondsLeft}</h2>
          <h4 className="text-xl font-normal mt-6">Dias</h4>
          <h4 className="text-xl font-normal mt-6">Horas</h4>
          <h4 className="text-xl font-normal mt-6">Min</h4>
          <h4 className="text-xl font-normal mt-6">Seg</h4>
        </div>
      </div>
    </div>
  )
}
