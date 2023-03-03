import { FC } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
const PlayButton: FC = () => {
  return (
    <button className="flex items-center">
      <span className="h-[32px] w-[32px] rounded-full bg-blue flex justify-center items-center hover:bg-darkblue">
        <BsFillCaretRightFill className="text-white" />
      </span>
      <span className="font-semibold text-blue ml-[8px] hover:text-darkblue">
        Listen Now
      </span>
    </button>
  );
};

export default PlayButton;
