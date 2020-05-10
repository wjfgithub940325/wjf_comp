import { useState, useEffect } from 'react'
//自定义hook要以use开头
function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  //清除副作用是在下一次update之前执行。我们只需要清除handler
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])//effect在什么时候执行，value或者delay执行的时候
  return debouncedValue
}

export default useDebounce;