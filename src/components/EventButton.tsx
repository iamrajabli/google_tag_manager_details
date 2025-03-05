import { sendGTMEvent } from '@next/third-parties/google'
 
export function EventButton() {
  return (
    <div className='flex gap-4'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        onClick={() => sendGTMEvent({ event: 'button_clicked', value: 'xyz',  })}
      >
        Send Event
      </button>

      <button
        className='bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        onClick={() => sendGTMEvent({ event: 'fn_clicked', value: 'xyz',  })}
      >
        Send FN
      </button>
    </div>
  )
}  