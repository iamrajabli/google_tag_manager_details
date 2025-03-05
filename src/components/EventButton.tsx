import { sendGTMEvent } from '@next/third-parties/google'
 
export function EventButton() {
  return (
    <div>
      <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
      >
        Send Event
      </button>
    </div>
  )
}  