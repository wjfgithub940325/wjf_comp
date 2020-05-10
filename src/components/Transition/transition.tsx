import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName,//预设好几种动画效果，如果提供了className，以className为主，覆盖我们定义的动画
    wrapper? : boolean,  //提供该属性就会在外面添加一个空的dom节点，这样就不会和已有的Transition属性发生冲突
  }
 
const Transition: React.FC<TransitionProps> = (props) => {
  const {
    children,
    classNames,
    animation,  
    wrapper,
    ...restProps
  } = props
  return (
    <CSSTransition
      classNames = { classNames ? classNames : animation}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,//被包裹的组件，当有动画效果的时候，会添加该dom元素，当动画效果执行结束之后，元素会被删掉。
  appear: true, //默认假如menuOpen是true，第一次执行 也会运行整个动画过程
}

export default Transition