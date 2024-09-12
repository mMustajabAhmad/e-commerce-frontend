import { FaMinus } from "react-icons/fa6";

const ExpiredPoint = () => {
  return (
    <>
      <div className="flex flex-row bg-slate-200 rounded p-2 justify-between pr-4 mb-2">
        <div className="flex flex-col bg-red-700 w-[3px] mr-3 rounded"></div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
          <span className="text-lg font-medium ">Order # 289</span>
          <div className="h-[3px] w-[190px] bg-slate-600 rounded mt-3 ml-2"></div>
          </div>
          <span className="text-sm">Valid till: 02-12-2025</span>
        </div>
        <div className="flex flex-col ml-2">
            <div className=" flex flex-row items-center font-medium">
              <FaMinus className="text-red-700"/>
              <span className="text-red-700 text-xl">100</span>
              <span className="text-xs ml-1">Points</span>
            </div>
        </div>
      </div>
    </>
  );
};
export default ExpiredPoint;
