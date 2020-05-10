import React, { FC } from 'react'
import { ThemeProps } from '../Icon/icon'

export interface ProgressProps {
  //百分比
  percent: number;
  strokeHeight?: number;//高度
  showText?: boolean;//显示里面文字
  styles?: React.CSSProperties;//样式
  theme?: ThemeProps;//主题
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme,
  } = props
  return (
    <div className="comp-progress-bar" style={styles}>
      <div className="comp-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div 
          className={`comp-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
}
export default Progress;