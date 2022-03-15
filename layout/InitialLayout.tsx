import { FC } from 'react'
import { NavBarUiComponent, SidebarUiComponent } from '../components'

import Head from 'next/head'

export interface IInitialLayoutProps {
  title?: string
}

export const InitialLayout: FC<IInitialLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title ? `${title} - Open Jira` : 'Open Jira'} </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <SidebarUiComponent />
      <section className='min-h-[100vh] min-w-[100vw] bg-slate-800 text-white'>
        <NavBarUiComponent />
        <main className='pt-10 md:pt-0'> {children} </main>
      </section>
    </>
  )
}
