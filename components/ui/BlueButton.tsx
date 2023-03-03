interface ButtonProps {
  data_text: string;
}
const BlueButton = (props: ButtonProps) => {
  return (
    <button className="bg-blue text-offwhite font-bold font-18 px-7 py-3 hover:bg-darkblue">
      {props.data_text}
    </button>
  );
};

export default BlueButton;
