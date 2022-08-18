import React from "react";


/**这里使用 require 代替 import 是因为
 * TreeShaking 不适用于 require 
 * 可以避免使用 console.log(x);
 **/
// require('icons/records.svg');
// require('icons/chart.svg');
// require('icons/bookkeeping.svg');
/**
 * 下面使用 require 一整个目录/文件夹的方式代替重复 require svg
 * yarn add --dev @types/webpack-env 解决 __WebpackModuleApi 报错
 **/
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }

const Icon = (props: { name: string; }) => {
  return (
    <svg className="icon">
      {props.name && <use xlinkHref={'#' + props.name} />}
    </svg>
  )
};

export default Icon;