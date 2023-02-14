import image6 from '../../assets/images/image6.jpg'
import { WhatsappIcon } from '../Icons/WhatsappIcon'
import './Contact.css'

export const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center text-center h-screen relative contact font-bold">
      <div className="relative flex flex-col items-center text-center h-full">
        <h1 className="text-4xl">Contacto</h1>
        <div className="py-3 px-6 text-xl flex items-center gap-2 justify-center contact--button">
          <WhatsappIcon className="w-6 h-6" />
          <h2>Confirmar a Papá</h2>
        </div>
        <div className="py-3 px-6 text-xl flex items-center gap-2 justify-center contact--button">
          <WhatsappIcon className="w-6 h-6" />
          <h2>Confirmar a Mamá</h2>
        </div>
        <h2 className="text-2xl mt-auto contact--subtitle">¡Te Espero!</h2>
        <img
          src={image6}
          alt="Te espero Mis XV Daniela"
          className="w-full mt-5 object-cover contact--image"
        />
        <div className="flex flex-col items-center mt-auto">
          <p>Imagenes de muestra de Freepik:</p>
          <p>
            <a href="https://www.freepik.es/foto-gratis/nino-sonriente-celebrando-su-cumpleanos_14659014.htm#&position=22&from_view=collections">
              Imagen 1,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/nino-sonriente-celebrando-cumpleanos_14659054.htm#query=kid%20birthday&position=1&from_view=search&track=ais">
              Imagen 2,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/nino-sonriente-aislado-rosa_14659037.htm#&position=42&from_view=collections">
              Imagen 3,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/nino-sonriente-aislado-amarillo_14659045.htm#&position=48&from_view=collections">
              Imagen 4,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/nino-sonriente-celebrando-cumpleanos_14659050.htm#from_view=detail_alsolike">
              Imagen 5,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/nino-sonriente-aislado-rosa_14659035.htm#from_view=detail_alsolike">
              Imagen 6
            </a>
          </p>
          <p className="mt-2">
            Si te gusto la invitacion y queres una para vos, ¡contactanos!
          </p>
          <WhatsappIcon className="w-6 h-6 mt-5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
