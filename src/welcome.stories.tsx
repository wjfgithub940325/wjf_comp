import React from 'react'
import { storiesOf } from '@storybook/react'

const markdownText = `
### 本组件库意在打造自己想要的样式，完全从自己的需求出发，完全是自己喜欢的样式。

### 安装试试

~~~javascript
npm install wjf_comp_lib --save
~~~


### 使用

~~~javascript
// 加载样式
import 'wjf_comp_lib/dist/index.css'
// 引入组件
import { Button } from 'wjf_comp_lib'
`
storiesOf('欢迎来到comp_lib', module)
  .add('welcome', () => {
    return (
      <h2>欢迎来到 wjf_comp_lib 组件库</h2>
    )
  }, { info : { text: markdownText, source: false, }})