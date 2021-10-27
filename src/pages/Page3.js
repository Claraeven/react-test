import {useState} from "react";

export default function Page3({submitClick}) {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  const handleText = () => {
    submitClick(text)
    setText('')
  }
  return (
    <div>
      <div>
        <textarea
          name="text"
          id=""
          cols="100"
          rows="12"
          className="textarea"
          value={text}
          onChange={e => handleChange(e)}
        >
          {text}
        </textarea>
      </div>
      <input
        type="submit"
        value="提交"
        className="subButton"
        onClick={handleText}
      />
    </div>
  )
}
