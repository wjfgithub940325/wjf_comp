import { RefObject, useEffect } from "react";

//第一个参数是我们定义的useRef参数，第二个参数是我们需要处理的逻辑
function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
  useEffect(() => {
    //点击以后需要处理的逻辑
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      handler(event)
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, handler])
}

export default useClickOutside