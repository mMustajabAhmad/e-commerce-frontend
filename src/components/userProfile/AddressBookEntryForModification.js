import { useState } from "react";
import { updateAddress, deleteAddressEntry } from "../../utils/APIs/Address_APIs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AddressBookEntryForModification(props) {
  const address = props.data;
  const queryClient = useQueryClient();
  const [addressValue, setAddressValue] = useState(address.address);
  
  const handleInputChange = (event) => {
    setAddressValue(event.target.value);
  };

  const modifyAddress = useMutation({
    mutationFn: () => updateAddress(address.id),
    onSuccess: () =>{
      queryClient.invalidateQueries(["addresses"])
      alert("Address Updated")
    },
    onError: () =>{
      alert("Cannot Update Address")
    }
  })

  const deleteAddress = useMutation({
    mutationFn: () => deleteAddressEntry(address.id),
    onSuccess: () =>{
      queryClient.invalidateQueries(["addresses"])
      alert("Address Deleted")
    },
    onError: () =>{
      alert("Cannot Delete Address")
    }
  })

  return (
    <>
      <div className="flex flex-row mt-4">
        <div className="flex flex-row w-full">
          <input
            type="text"
            className="border p-2 w-2/3 rounded-md"
            value={addressValue}
            onChange={handleInputChange}
          ></input>
          <button
            className="bg-black hover:bg-purple-700 ml-6 px-8 text-white font-medium rounded-md"
            onClick={()=>modifyAddress.mutate()}
          >
            Update
          </button>
          <button
            className="bg-red-600 ml-4 px-8 text-white font-medium rounded-md"
            onClick={()=>deleteAddress.mutate()}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default AddressBookEntryForModification;
