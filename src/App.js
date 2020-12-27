import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <TextInput />
      <CharacterCount />
    </>
  );
}

const textState = atom({
  key: "textState",
  default: "",
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (evt) => {
    setText(evt.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

const charCounState = selector({
  // atom을 선택
  key: "charCountState",
  // getter을 이용해 값을 가공
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

// ===== 값을 적용 =====
function CharacterCount() {
  const count = useRecoilValue(charCounState);

  return <>Character Count: {count}</>;
}

export default App;
