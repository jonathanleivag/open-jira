import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { ButtonCloseSidebarUiComponent } from './ButtonCloseSidebarUiComponent'
import { MenuSidebarUiComponent } from './MenuSidebarUiComponent'

export const SidebarUiComponent: FC = () => {
  const open = useSelector((state: RootState) => state.menu.open)

  return (
    <section
      className={`w-screen h-screen z-50 fixed duration-75 ${
        open ? 'left-0' : '-left-full delay-1000'
      } flex flex-row`}
    >
      <MenuSidebarUiComponent />
      <ButtonCloseSidebarUiComponent />
    </section>
  )
}
