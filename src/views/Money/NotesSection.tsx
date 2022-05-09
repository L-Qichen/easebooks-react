import styled from "styled-components";

function NotesSection() {
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

  return (
    <NotesSec>
      <label>
        <span>
          Comment:
        </span>
        <input type="text" placeholder="Add comments here" />
      </label>
    </NotesSec>
  );
}

export { NotesSection }