import { useEffect, useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineSave } from 'react-icons/ai'

export const NewEntry = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [isError, setIsError] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (!isAdd) setIsError(undefined)
    return () => {}
  }, [isAdd])

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 0) {
      setIsError(true)
    } else {
      setIsError(false)
    }
    setText(e.target.value)
  }

  const onSave = () => {
    if (text.length <= 0) {
      setIsError(true)
    } else {
      setIsError(false)
      setText('')
    }
  }

  return (
    <div className='w-full my-2 px-3 text-sm'>
      <button
        onClick={() => setIsAdd(true)}
        className={`transform duration-500 ease-in-out overflow-hidden border-blue-300 text-blue-300 w-full ${
          isAdd ? 'h-0' : 'h-6 border'
        }  flex flex-row justify-center items-center gap-2`}
      >
        <AiOutlinePlusCircle /> <span>Nueva entrada</span>
      </button>

      <div
        className={`w-full overflow-hidden transform duration-500 ease-in-out ${
          isAdd ? 'h-24' : 'h-0'
        }`}
      >
        <input
          type='text'
          name='entry'
          id='entry'
          value={text}
          onChange={onTextChange}
          className={`my-3 bg-transparent w-full focus:outline-none border rounded-sm pl-2 py-1 ${
            isError ? 'border-red-600' : 'border-blue-300'
          }`}
          placeholder='Escribe aquí tu entrada...'
        />

        {isError && (
          <p className='text-red-600 text-xs'>Tiene que tener un valor </p>
        )}

        <div className='w-full flex flex-row justify-between items-center'>
          <button onClick={() => setIsAdd(false)} className='text-blue-300'>
            Cancelar
          </button>
          <button
            onClick={onSave}
            className='flex flex-row gap-1 text-green-500 px-2 border border-green-500 rounded-lg items-center'
          >
            <AiOutlineSave />
            <span>Guardar</span>
          </button>
        </div>
      </div>
    </div>
  )
}
