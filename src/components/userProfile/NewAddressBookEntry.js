import { useState } from "react";
import { addAddress } from "../../utils/APIs/Address_APIs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function NewAddressBookEntry() {
  const [isVisible, setIsVisible] = useState(true);
  const queryClient = useQueryClient();
  const [addressValue, setAddressValue] = useState("");


  const handleInputChange = (event) => {
    setAddressValue(event.target.value);
  };

  const createAddress = useMutation({
    mutationFn: ()=> addAddress( {address: { address: addressValue }}),
    onSuccess: ()=>{
      queryClient.invalidateQueries(["addresses"]);
      alert("address added");
    },
    onError: ()=>{
      alert("cannot add address");
    }
  })

  return (
    <>
      {isVisible && (
        <div className="flex flex-row mt-4">
          <div className="flex flex-row w-full">
            <input
              type="text"
              className="border p-2 w-2/3 rounded-md"
              value={addressValue}
              onChange={handleInputChange}
            ></input>
            <button
              className="bg-black hover:bg-purple-700 ml-6 px-11 text-white font-medium rounded-md"
              onClick={()=>{setIsVisible(false);createAddress.mutate(); }}
            >
              Add
            </button>
            <button
              className="bg-red-600 ml-4 px-8 text-white font-medium rounded-md"
              onClick={() => setIsVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NewAddressBookEntry;
