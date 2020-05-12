import React from 'react'
import { storiesOf } from '@storybook/react'

const markdownText = `

### 本组件库意在打造自己想要的样式，完全从自己的需求出发，完全是自己喜欢的样式。
### 
### 安装试试

~~~javascript
npm install wjf_comp_lib --save
~~~


### 使用

~~~javascript
// 加载样式
import 'wjf_comp_lib/dist/index.css'
~~~
~~~javascript
// 引入组件
import { Button } from 'wjf_comp_lib'
~~~
`
const markdownText1 = `

### 这里是日志更新，我们需要更新当前组件，我会不断完善该组件哒。
### 
### 日志更新请访问下面网址

~~~javascript
https://www.npmjs.com/package/wjf_comp_lib
~~~


### 使用

~~~javascript
// 加载样式
import 'wjf_comp_lib/dist/index.css'
~~~
~~~javascript
// 引入组件
import { Button } from 'wjf_comp_lib'
~~~
`
storiesOf('欢迎来到comp_lib', module)
  .add('welcome', () => {
    return (
      <h2>欢迎来到 wjf_comp_lib 组件库</h2>
    )
  }, { info : { text: markdownText, source: false, }})
  .add('更新日志',() =>{
    return(
      <h3>这里是日志更新</h3>
    )
  },{ info : { text: markdownText1, source: false, }})