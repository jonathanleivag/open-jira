import { FC } from 'react'
import { NavBarUiComponent, SidebarUiComponent } from '../components'
import { Provider } from 'react-redux'
import { store } from '../store'

export const InitialLayout: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <SidebarUiComponent />
      <section className='min-h-[100vh] min-w-[100vw] bg-slate-800 text-white'>
        <NavBarUiComponent />
        <main className='pt-10'> {children} </main>
      </section>
    </Provider>
  )
}
