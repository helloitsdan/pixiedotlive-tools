import { useState, useEffect } from 'react'

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key)

    try {
      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch (e) {
      console.error(`Error parsing "${key}" from localStorage`, e)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(`Error setting "${key}" in localStorage`, e)
    }
  }, [key, value])

  return [value, setValue] as const
}

export default useLocalStorage
