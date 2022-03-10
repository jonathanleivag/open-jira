import { NextPage } from 'next'
import { InitialLayout } from '../layout'

const Home: NextPage = () => {
  return (
    <InitialLayout title='Home'>
      <div className='md:min-h-screen md:pt-20 md:pb-10 md:px-10 pt-5 px-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='w-full h-full p-2 bg-slate-600'>Pendiente</div>
        <div className='w-full h-full p-2 bg-slate-600'>En progreso</div>
        <div className='w-full h-full p-2 bg-slate-600'>Completada</div>
      </div>
    </InitialLayout>
  )
}

export default Home
