import { useEffect } from "react";
//第一个参数是我们定义的useRef参数，第二个参数是我们需要处理的逻辑
function useClickOutside(ref, handler) {
    useEffect(function () {
        //点击以后需要处理的逻辑
        var listener = function (event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('click', listener);
        return function () {
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
}
export default useClickOutside;
