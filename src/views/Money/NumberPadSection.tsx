import React from "react";
import { calculateOutput } from "./NumberPadSection/calculateOutput";
import styled from "styled-components";

type Props = {
  value: string,
  onChange: (value: string) => void;
  onOk?: () => void;
};
const NumberPadSec = styled.section`
    display: flex;
    flex-direction: column;
    > .output {
      background: white;
      font-size: 36px;
      line-height: 72px;
      text-align: right;
      padding: 0px 16px;
      box-shadow: inset 0px -5px 5px -5px rgba(0,0,0,0.25),
                  inset 0px 5px 5px -5px rgba(0,0,0,0.25);
    }
    > .pad {
      > button {
        font-size: 18px;
        border: none;
        float: left;
        width: 25%;
        height: 64px;
        &.ok {
          float: right;
          height: 128px;
        }
        &.zero {
          width: 50%;
        }
        &:nth-child(1) {
          background: #f2f2f2;
        }
        &:nth-child(2),
        &:nth-child(5) {
          background: #E0E0E0;
        }
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9) {
          background: #D3D3D3;
        }
        &:nth-child(4),
        &:nth-child(7),
        &:nth-child(10) {
          background: #C1C1C1;
        }
        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13) {
          background: #B8B8B8;
        }
        &:nth-child(12) {
          background: #9A9A9A;
        }
        &:nth-child(14) {
          background: #A9A9A9;
        };
      };
    };
  `;

const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString();
  const setOutput = (output: string) => {
    let value: string;
    if (output.length > 16) {
      value = output.slice(0, 16);
    } else if (output.length === 0) {
      value = '0';
    } else {
      value = output;
    };
    props.onChange(value);
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) { return; };
    if (text === 'OK') {
      if (props.onOk) { props.onOk(); };
    };
    if ('0123456789.'.split('').concat(['Del.', 'C']).indexOf(text) >= 0) {
      setOutput(calculateOutput(text, output));
    };
  };

  return (
    <NumberPadSec>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Del.</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>C</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </NumberPadSec>
  );
};

export { NumberPadSection };