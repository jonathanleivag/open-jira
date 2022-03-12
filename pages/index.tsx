import { NextPage } from 'next'
import { InitialLayout } from '../layout'
import { ListEntryUiComponent } from '../components/ui/entry/ListEntryUiComponent'

const Home: NextPage = () => {
  return (
    <InitialLayout title='Home'>
      <div className='md:min-h-screen md:pt-20 md:pb-10 md:px-10 pt-5 px-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='w-full h-full p-2 bg-slate-600'>
          <ListEntryUiComponent title='Pendiente' status='pending' />
        </div>
        <div className='w-full h-full p-2 bg-slate-600'>
          <ListEntryUiComponent title='En Progreso' status='in-progress' />
        </div>
        <div className='w-full h-full p-2 bg-slate-600'>
          <ListEntryUiComponent title='Completadas' status='finished' />
        </div>
      </div>
    </InitialLayout>
  )
}

export default Home
