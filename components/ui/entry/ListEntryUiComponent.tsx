import { FC } from 'react'
import { CardEntryUiComponent } from '../..'

export interface ListEntryUiComponentProps {
  title: string
}

export const ListEntryUiComponent: FC<ListEntryUiComponentProps> = ({
  title
}) => {
  return (
    <>
      <h2 className='p-2 '> {title} </h2>
      <ul className='w-full h-[calc(100vh-150px)] bg-slate-500 py-1 px-2 overflow-y-auto'>
        <CardEntryUiComponent />
        <CardEntryUiComponent />
        <CardEntryUiComponent />
        <CardEntryUiComponent />
      </ul>
    </>
  )
}
