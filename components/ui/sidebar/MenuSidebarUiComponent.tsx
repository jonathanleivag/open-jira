import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

export const MenuSidebarUiComponent: FC = () => {
  const open = useSelector((state: RootState) => state.menu.open)

  return (
    <div
      className={`transform ease-in-out duration-500 delay-500 ${
        open ? 'w-[900px] sm:w-[400px]' : 'w-0 delay-[0ms]'
      }  h-full bg-slate-800`}
    ></div>
  )
}
