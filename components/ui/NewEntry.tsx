import { AiOutlinePlusCircle, AiOutlineSave } from 'react-icons/ai'

export const NewEntry = () => {
  return (
    <div className='w-full my-2 px-3 text-sm'>
      <button className='border border-blue-300 text-blue-300 w-full flex flex-row justify-center items-center gap-2'>
        <AiOutlinePlusCircle /> <span>Nueva entrada</span>
      </button>
      <input
        type='text'
        name='entry'
        id='entry'
        className='my-3 bg-transparent w-full focus:outline-none border rounded-sm border-blue-300 pl-2 py-1'
        placeholder='Escribe aquí tu entrada...'
      />
      <div className='w-full flex flex-row justify-between items-center'>
        <button className='text-blue-300'>Cancelar</button>
        <button className='flex flex-row gap-1 text-green-500 px-2 border border-green-500 rounded-lg items-center'>
          <AiOutlineSave />
          <span>Guardar</span>
        </button>
      </div>
    </div>
  )
}
