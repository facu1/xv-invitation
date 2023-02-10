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
          <h2>Confirmar a Daniela</h2>
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
            <a href="https://www.freepik.es/foto-gratis/vista-frontal-nina-sonriente-corona_33754327.htm#&position=9&from_view=collections">
              Imagen 1,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/chica-alto-angulo-vestido-princesa_33754326.htm#&position=8&from_view=collections">
              Imagen 2,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/chica-sonriente-alto-angulo-vestido_33754343.htm#&position=25&from_view=collections">
              Imagen 3,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/chica-alto-angulo-posando-flores_33754321.htm#&position=3&from_view=collections">
              Imagen 4,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/vista-frontal-sonriente-gente-posando-juntos_33754337.htm#&position=19&from_view=collections">
              Imagen 5,{' '}
            </a>
            <a href="https://www.freepik.es/foto-gratis/chica-celebrando-su-quinceanera_33756519.htm#page=2&position=10&from_view=collections">
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
