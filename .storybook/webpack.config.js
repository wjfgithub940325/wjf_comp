module.exports = ({ config }) => {
  // 加入一些新的规则
    config.module.rules.push({
      //test是指，当遇到.tsx文件之后做什么样的处理
      test: /\.tsx?$/,
      use: [
        {
          //这里就是babel-loader，他可以将typescript代码转化为JavaScript代码
          loader: require.resolve("babel-loader"),
          options: {
            //babel转化过程的规则
            presets: [require.resolve("babel-preset-react-app")]
          }
        },
        {
          //自动生成文档
          loader:require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true            
            }
          }
        }
      ]
    });
  
    //处理什么文件
    config.resolve.extensions.push(".ts", ".tsx");
  
    return config;
  };