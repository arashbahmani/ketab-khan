import SpinnerGif from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerGif}
        style={{
          width: "10vw",
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%)",
        }}
        alt="اوضاع نت خیلی بی ریخته!!"
      />
    </>
  );
};

export default Spinner;
