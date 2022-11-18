function HelloComponent({ length, onStart }) {
  return (
    <>
      <h3>I am LOM!</h3>
      <p>This will probably your last chance to survive!</p>
      <p>
        To accomplish the challenge, you need to answer {length} questions
        correctly
      </p>
      <button onClick={onStart}>Start</button>
    </>
  );
}

export default HelloComponent;
