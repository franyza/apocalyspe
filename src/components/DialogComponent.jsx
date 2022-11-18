import { Suspense, useState, lazy } from "react";
import questions from "../data/questions.json";
import StepsComponent from "./StepsComponent";

const HelloComponent = lazy(() => import("./HelloComponent"));
const FinalComponent = lazy(() => import("./FinalComponent"));
const QuestionComponent = lazy(() => import("./QuestionComponent"));

function DialogComponent() {
  const [step, setStep] = useState(-1);
  const [isValidAnswers, setValidAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const incrementStep = () => {
    setStep(step + 1);
  };

  const storeAnswer = (isValid) => {
    let newAnswers = [...isValidAnswers];
    newAnswers[step] = isValid;
    setValidAnswers(newAnswers);
    incrementStep();
  };

  const getRatio = () => {
    return Math.round(
      (isValidAnswers.filter((it) => it === true).length * 100) /
        questions.length
    );
  };

  return (
    <Suspense>
      <StepsComponent step={step} answers={isValidAnswers} />
      <div className="App-dialog">
        {step === -1 ? (
          <HelloComponent length={questions.length} onStart={incrementStep} />
        ) : step < questions.length ? (
          <QuestionComponent q={questions[step]} onAnswer={storeAnswer} />
        ) : (
          <FinalComponent ratio={getRatio()} />
        )}
      </div>
    </Suspense>
  );
}

export default DialogComponent;
