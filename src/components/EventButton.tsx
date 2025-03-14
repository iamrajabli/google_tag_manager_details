import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'

export function EventButton() {
  const [openModal, setOpenModal] = useState(false)


  const router = useRouter()
  useEffect(() => {
    if (openModal) {
      sendGTMEvent({ event: 'modal_seen', value: 'xyz', })
    }

  }, [openModal])


  return (
    <div className='flex gap-4'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        onClick={() => sendGTMEvent({ event: 'button_clicked', value: 'xyz', })}
      >
        Send Event
      </button>



      <button
        className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        onClick={() => {
          sendGTMEvent({ event: 'open_modal', value: 'xyz', })
          setOpenModal(true)
        }}
      >
        Open modal
      </button>


      <a
        href="/dashboard"
        className='bg-yellow-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
      >
        Go to test page
      </a>


      {
        openModal && <div className='text-black bg-white p-4 rounded shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <button
            className='absolute top-0 right-0 p-2'
            onClick={() => setOpenModal(false)}
          >
            X
          </button>
          <h1>Modal title</h1>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus consectetur, dolorem rerum laboriosam sapiente sit facere modi voluptas fugiat, excepturi eveniet nisi ad quo recusandae aut assumenda vero rem delectus.</p>

        </div>
      }

    </div>
  )
}  