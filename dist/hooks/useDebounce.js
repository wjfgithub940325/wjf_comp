import { useState, useEffect } from 'react';
//自定义hook要以use开头
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    //清除副作用是在下一次update之前执行。我们只需要清除handler
    useEffect(function () {
        var handler = window.setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]); //effect在什么时候执行，value或者delay执行的时候
    return debouncedValue;
}
export default useDebounce;
