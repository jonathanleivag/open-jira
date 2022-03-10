import { FC } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../store/features/menuSlice'

export const NavBarUiComponent: FC = () => {
  const dispatch = useDispatch()

  return (
    <nav className='w-full h-10 bg-purple-700 fixed top-0 flex flex-row justify-center items-center z-40'>
      <div className='w-[98%] h-full flex flex-row items-center gap-4'>
        <button onClick={() => dispatch(toggleMenu())}>
          <AiOutlineMenu className='text-xl' />
        </button>
        <p>OpenJira</p>
      </div>
    </nav>
  )
}
