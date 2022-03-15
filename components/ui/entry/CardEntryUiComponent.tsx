import { useRouter } from 'next/router'
import { DragEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import { getFormatDistanceToNow } from '../../../helpers'
import { EntryInterface } from '../../../interfaces'
import { draggingAction } from '../../../store/features/entriesSlice'
export interface CardEntryUiComponentProps {
  entry: EntryInterface
}

export const CardEntryUiComponent: FC<CardEntryUiComponentProps> = ({
  entry: { id, description, updatedAt }
}) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const onDragStart = (event: DragEvent<HTMLLIElement>) => {
    event.dataTransfer.setData('entryId', id)
    dispatch(draggingAction(true))
  }

  const onClick = () => {
    router.push(`/entries/${id}`)
  }

  return (
    <li
      className='my-2 p-2 bg-slate-800'
      draggable
      onDragStart={onDragStart}
      onDragEnd={() => dispatch(draggingAction(false))}
    >
      <button
        onClick={onClick}
        className='flex flex-col gap-2 text-xs cursor-grab items-start text-left'
      >
        <div className='h-[95%]'>{description}</div>
        <div className='h-[5%] w-full flex flex-row justify-end pr-1'>
          {getFormatDistanceToNow(updatedAt)}
        </div>
      </button>
    </li>
  )
}
