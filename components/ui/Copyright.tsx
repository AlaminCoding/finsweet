import { MdOutlineCopyright } from "react-icons/md";
const Copyright = () => {
  return (
    <div className="h-[64px] bg-blue flex justify-center items-center font-bold ">
      <p className="flex items-center text-white">
        <MdOutlineCopyright className="mr-[5px]" /> Copyright Finsweet 2021
      </p>
    </div>
  );
};

export default Copyright;
