import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CardEntryUiComponent, NewEntry } from '../..'
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
  const entries = useSelector((state: RootState) => state.entries.entries)

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  )

  return (
    <>
      <h2 className='p-2 '> {title} </h2>
      <NewEntry status={status} />
      <ul className='w-full h-[calc(100vh-150px)] bg-slate-500 py-1 px-2 overflow-y-auto'>
        {entriesByStatus.map(entry => (
          <CardEntryUiComponent key={entry.id} entry={entry} />
        ))}
      </ul>
    </>
  )
}
