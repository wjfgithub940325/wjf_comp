// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//先用npm install --save-dev @testing-library/jest-dom
//然后创建setupTests.ts文件，加上下面这段话，jest-dom就安装完毕了
import '@testing-library/jest-dom/extend-expect';
