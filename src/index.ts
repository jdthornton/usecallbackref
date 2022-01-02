import { useEffect, useRef } from 'react'

export default function useCallbackRef(
  callback: Function
) {

  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  return savedCallback;
}
