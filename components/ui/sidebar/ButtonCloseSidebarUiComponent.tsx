import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { toggleMenu } from '../../../store/features/menuSlice'

export const ButtonCloseSidebarUiComponent: FC = () => {
  const dispatch = useDispatch()
  const open = useSelector((state: RootState) => state.menu.open)

  return (
    <button
      onClick={() => dispatch(toggleMenu())}
      className={`w-screen h-screen transform bg-gray-500 bg-opacity-75 delay-75 ease-in-out duration-75 ${
        open ? 'scale-100' : '-scale-0 delay-500 duration-[0ms]'
      }`}
    />
  )
}
