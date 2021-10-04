import { useEffect } from 'react'
const useOutSideClick = (ref, callback) => {
  const handleClick = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export { useOutSideClick }
