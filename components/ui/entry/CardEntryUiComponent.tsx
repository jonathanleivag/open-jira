import { DragEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import { EntryInterface } from '../../../interfaces'
import { draggingAction } from '../../../store/features/entriesSlice'
export interface CardEntryUiComponentProps {
  entry: EntryInterface
}

export const CardEntryUiComponent: FC<CardEntryUiComponentProps> = ({
  entry: { id, description, createdAt }
}) => {
  const dispatch = useDispatch()

  const onDragStart = (event: DragEvent<HTMLLIElement>) => {
    event.dataTransfer.setData('entryId', id)
    dispatch(draggingAction(true))
  }

  return (
    <li
      className='my-2 p-2 bg-slate-800 flex flex-col gap-2 text-xs'
      draggable
      onDragStart={onDragStart}
    >
      <div className='h-[95%]'>{description}</div>
      <div className='h-[5%] flex flex-row justify-end pr-1'>
        hece 30 minutos
      </div>
    </li>
  )
}
