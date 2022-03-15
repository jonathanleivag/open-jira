import { GetServerSideProps, GetStaticPropsResult, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineSave } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { dbEntry } from '../../database'
import { EntryInterface } from '../../interfaces'
import { InitialLayout } from '../../layout'
import { deleteEntry, updateEntry } from '../../store/features/entriesSlice'
import { StatusType } from '../../types'

const states: StatusType[] = ['pending', 'in-progress', 'finished']

export interface IEntryExtend extends EntryInterface {
  _id: string
}

export interface IEntryPage {
  entry: IEntryExtend
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const EntryPage: NextPage<IEntryPage> = ({ entry }) => {
  const [stateValue, setStateValue] = useState<StatusType>(entry.status)
  const [text, setText] = useState<string>(entry.description)
  const dispatch = useDispatch()
  const router = useRouter()

  const onSave = async () => {
    if (text.length === 0) {
      Swal.fire('Error', 'No puede estar vacio el campo', 'error')
    } else {
      Swal.fire({
        title: '¿Deseas guardar los cambios?',
        showCancelButton: true,
        confirmButtonText: 'Guardar'
      }).then(result => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(
            updateEntry({
              id: entry._id,
              description: text,
              status: stateValue
            })
          )

          Toast.fire({
            icon: 'success',
            title: 'Se guardaron los cambios'
          })
        }
      })
    }
  }

  const onDelete = () => {
    Swal.fire({
      title: '¿Deseas eliminar la entrada?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar'
    }).then(result => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteEntry(entry._id))
        router.replace('/')
        Toast.fire({
          icon: 'success',
          title: 'Se elimino la entrada'
        })
      }
    })
  }

  return (
    <InitialLayout title={`${text.substring(0, 5)}...`}>
      <div className='pt-10 min-h-[calc(100vh-2.5rem)] min-w-[100vw] flex flex-row justify-center'>
        <div className='w-[95%] md:w-[55%] h-[370px] md:h-[300px] bg-slate-600 mt-5 px-3 pt-3 relative'>
          <div className='absolute top-2 right-2 w-full flex flex-row justify-end items-center my-2'>
            <button
              onClick={onDelete}
              className='text-sm text-red-500 hover:text-red-600'
            >
              Eliminar
            </button>
          </div>
          <h3>Entrada: {text.substring(0, 40)}... </h3>
          <p className='text-xs'>Creada hace 30 minutos</p>
          <div className='w-[98%] border border-gray-300 mt-10 mb-5 py-3 px-1'>
            <textarea
              className='w-full h-full resize-none focus:outline-none bg-transparent'
              name='text'
              id='text'
              placeholder='Escribe aquí tu entrada'
              value={text}
              onChange={e => setText(e.target.value)}
            />
          </div>
          <div className='w-[90%]'>
            <h2 className='block'>Estado</h2>
            <div className='flex flex-col md:flex-row gap-2'>
              {states.map(state => (
                <div
                  className='my-2 flex flex-row items-center justify-start gap-1'
                  key={state}
                >
                  <input
                    className='cursor-pointer'
                    type='radio'
                    name='state'
                    checked={stateValue === state}
                    id={state}
                    value={state}
                    onChange={() => setStateValue(state)}
                  />
                  <label className='cursor-pointer' htmlFor={state}>
                    {state}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={onSave}
            className='bg-blue-300 w-full flex flex-row justify-center items-center gap-2 text-slate-800 py-1'
          >
            <AiOutlineSave /> <span>Guardar</span>
          </button>
        </div>
      </div>
    </InitialLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  // const { data } = await  // your fetch function here
  const { id } = ctx.params as { id: string }

  let resp: GetStaticPropsResult<{ id: string } | {}> = { props: {} }
  const entry = (await dbEntry.getEntryById(id)) as IEntryExtend

  if (!entry) {
    resp = {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  } else {
    resp = {
      props: { entry }
    }
  }

  return resp
}

export default EntryPage
