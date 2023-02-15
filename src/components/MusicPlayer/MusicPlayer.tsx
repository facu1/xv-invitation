import { useRef, useState } from 'react'
import song from '../../assets/audio/young-bd-song.mp3'
import { Speaker } from '../Icons/Speaker'
import { SpeakerX } from '../Icons/SpeakerX'

export const MusicPlayer = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = async () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <>
      <audio ref={audioRef} src={song} />
      {!modalOpen && (
        <div
          className="absolute right-0 top-44 w-16 h-16 rounded-2xl bg-white"
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <Speaker className="w-16 h-16" />
          ) : (
            <SpeakerX className="w-16 h-16" />
          )}
        </div>
      )}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`modal ${modalOpen && 'modal-open'}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">¡Invitación de Mis 50 Años!</h3>
          <div className="modal-action">
            <label
              className="btn"
              onClick={() => {
                setModalOpen(false)
                toggleAudio()
                setIsPlaying(true)
              }}
            >
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
