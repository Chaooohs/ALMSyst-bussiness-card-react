import { Advert } from '../components/Advert'
import { Descr } from '../components/Descr'
import { Gallery } from '../components/Gallery'
import { About } from '../components/About'
import { Phone } from '../components/Phone'
import { Aboutus } from '../components/Aboutus'
import { useLoaderData, useRouteLoaderData  } from 'react-router-dom'


export const MainPage = () => {

  const textEditor = useRouteLoaderData('root');

  return (
    <div className='main'>
      < About textEditor={textEditor} />
      < Advert textEditor={textEditor} />
      <div>
        <div className="descr__more">
          <p className="text_lg">
            Дізнатися вартість виїзду та ремонту
          </p>
          <Phone />
        </div>
      </div>
      < Gallery />
      < Descr textEditor={textEditor} />
      <Aboutus textEditor={textEditor} />
    </div>
  )
}