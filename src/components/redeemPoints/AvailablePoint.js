import { FaPlus } from "react-icons/fa6";
const AvailablePoint = (props) =>{
  const point = props.data
  return (
    <>
      <div className="flex flex-row bg-slate-200 rounded p-2 justify-between pr-4 mb-2">
        <div className="flex flex-col bg-green-600 w-[3px] mr-3 rounded"></div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
          <span className="text-lg font-medium mr-4">Order # {point.order_id}</span>
          <div className="h-[3px] w-[160px] bg-slate-600 rounded mt-3 "></div>
          </div>
          <span className="text-sm">Valid till: {point.expiry_date}</span>
        </div>
        <div className="flex flex-col ml-2">
            <div className=" flex flex-row items-center font-medium">
              <FaPlus className="text-green-700"/>
              <span className="text-green-700  text-xl">{point.number_of_points}</span>
              <span className="text-xs ml-1">Points</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default AvailablePoint;