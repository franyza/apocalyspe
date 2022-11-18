import { useRef, useState } from "react";

function QuestionComponent({ q, onAnswer }) {
  const inputRef = useRef();
  const [valid, setValid] = useState(null);
  const saveAnswer = () => {
    const ans = isValidAnswer(inputRef.current.value);
    setValid(ans);
    setTimeout(() => {
      setValid(null);
      inputRef.current.value = "";
      onAnswer(ans);
    }, 2000);
  };

  const isValidAnswer = (ans) => {
    return (
      q.answer === ans ||
      (q.type === "text" && q.answer.toLowerCase() === ans.toLowerCase()) ||
      (q.type === "number" && q.answer === +ans)
    );
  };

  return (
    <>
      <p>{q.question}</p>
      {q.type === "select" ? (
        <select ref={inputRef}>
          {q.options.map((it, index) => (
            <option key={index} value={it}>
              {it}
            </option>
          ))}
        </select>
      ) : (
        <input type={q.type} ref={inputRef} />
      )}

      <p className={valid ? "success" : "fail"}>
        {valid !== null &&
          (valid ? "Correct!" : "Fail! Correct Answer: " + q.answer)}
      </p>
      {valid === null && <button onClick={saveAnswer}>Go!</button>}
    </>
  );
}

export default QuestionComponent;
