import { DragEvent, FC, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardEntryUiComponent, NewEntry } from '../..'
import {
  draggingAction,
  updateEntry
} from '../../../store/features/entriesSlice'
import { RootState } from '../../../store/index'
import { StatusType } from '../../../types'

export interface ListEntryUiComponentProps {
  title: string
  status: StatusType
}

export const ListEntryUiComponent: FC<ListEntryUiComponentProps> = ({
  title,
  status
}) => {
  const dispatch = useDispatch()
  const entries = useSelector((state: RootState) => state.entries.entries)
  const dragging = useSelector((state: RootState) => state.entries.dragging)

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  )

  const onDragEntry = (event: DragEvent<HTMLUListElement>) => {
    const id = event.dataTransfer.getData('entryId')
    dispatch(updateEntry({ id, status }))
    dispatch(draggingAction(false))
  }

  return (
    <>
      <h2 className='p-2'> {title} </h2>
      <NewEntry status={status} />
      <ul
        onDrop={onDragEntry}
        onDragOver={event => event.preventDefault()}
        className={`transform duration-500 ease-in-out w-full h-[calc(100vh-150px)] ${
          dragging
            ? 'bg-white bg-opacity-30 border border-dashed'
            : 'bg-slate-500'
        }  py-1 px-2 overflow-y-auto`}
      >
        {entriesByStatus.map(entry => (
          <CardEntryUiComponent key={entry.id} entry={entry} />
        ))}
      </ul>
    </>
  )
}
