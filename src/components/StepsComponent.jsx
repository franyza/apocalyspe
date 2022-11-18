function StepsComponent({ step, answers }) {
  return (
    <div className="App-steps">
      {answers.map((it, index) => (
        <span
          className={
            step === index
              ? "current"
              : step >= 0 && it !== null
              ? it
                ? "success"
                : "fail"
              : ""
          }
          key={`a-${index}`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

export default StepsComponent;
