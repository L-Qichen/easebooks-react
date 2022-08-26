import { useRef } from "react";
import styled from "styled-components";

const NotesSec = styled.section`
padding: 0px 16px;
> label {
  display: flex;
  align-items: center;
  > span {
    margin-right: 8px;
    white-space: nowrap;
  }
  > input {
    width: 100%;
    height: 72px;
    border: none;
    background: none;
  }
}
`

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    };
  };

  return (
    <NotesSec>
      <label>
        <span>
          Comment:
        </span>
        <input type="text" placeholder="Add comments here"
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </NotesSec>
  );
}

export { NotesSection };