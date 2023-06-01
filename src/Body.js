import React from "react";
import { useSelector } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Body = () => {
  // const isDark = useSelector((store) => store.darkMode.isDark);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition. okay</span>;
  }

  // if (!isDark) {
  //   return <div className="bg-slate-800 text-white">hello</div>;
  // }
  return (
    <>
      <div className="content-center">
        <div className="rounded-lg shadow-2xl border border-black w-1/4">
          <img
            alt="Work In Progress"
            src="../Images/wip.gif"
            className="justify-center"
          />
        </div>
      </div>
      {/* <div className="justify-center shadow-lg w-1/4 mx-96 my-28 rounded-lg ">
        <h2 className="font-bold px-2">
          <p>{transcript}</p>
        </h2>

        <p>Microphone: {listening ? "on" : "off"}</p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={startListening}
          disabled={listening}
        >
          {listening ? "Listening..." : "Start Recording"}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={SpeechRecognition.stopListening}
        >
          Stop Listening
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
          onClick={resetTranscript}
        >
          Reset Recording
        </button>
      </div> */}
    </>
  );
};

export default Body;
