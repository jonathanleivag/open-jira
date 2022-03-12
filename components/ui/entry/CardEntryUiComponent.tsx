import { FC } from 'react'
import { EntryInterface } from '../../../interfaces'
export interface CardEntryUiComponentProps {
  entry: EntryInterface
}

export const CardEntryUiComponent: FC<CardEntryUiComponentProps> = ({
  entry: { description, createdAt }
}) => {
  return (
    <li className='my-2 p-2 bg-slate-800 flex flex-col gap-2 text-xs'>
      <div className='h-[95%]'>{description}</div>
      <div className='h-[5%] flex flex-row justify-end pr-1'>
        hece 30 minutos
      </div>
    </li>
  )
}
