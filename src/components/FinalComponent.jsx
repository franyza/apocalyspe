function FinalComponent({ ratio }) {
  return ratio < 100 ? (
    <div className="fail">
      <h3>Last chance wasted!</h3>
      <p>Humanity will be exterminated.</p>
      <p>
        Your worthiness is only <strong>{ratio}%</strong>
      </p>
    </div>
  ) : (
    <div className="success">
      <h3>Congratulations!</h3>
      <p>You saved the world with a 100% of success</p>
    </div>
  );
}

export default FinalComponent;
