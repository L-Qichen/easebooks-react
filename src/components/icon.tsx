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

/**
 *  这里暂用 props: any 的原因是不知道如何接收外部的 svg 传入的onClick方法
 *  虽然 any 很方便，但是不建议使用
 *  项目 version1.0 完成后再回来研究
 **/
// type Props = {
//   name?: string;
// } & React.SVGAttributes<SVGAElement>;

const Icon = (props: any) => {
  return (
    <svg className="icon" onClick={props.onClick}>
      {props.name && <use xlinkHref={'#' + props.name} />}
    </svg>
  )
};

export default Icon;