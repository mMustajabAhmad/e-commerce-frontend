import { useState } from "react";
import apiClient from "../../api/authApi";

function AddressBookEntryForModification(props) {
  const address = props.data;
  const [addressValue, setAddressValue] = useState(address.address);

  const handleInputChange = (event) => {
    setAddressValue(event.target.value);
  };

  const updateAddress = async () => {
    try {
      await apiClient.put(
        `/users/${address && address.user_id}/addresses/${
          address && address.id
        }`,
        { address: { address: addressValue } }
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const deleteAddress = async () => {
    try {
      await apiClient.delete(
        `/users/${address && address.user_id}/addresses/${
          address && address.id
        }`
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <>
      <div className="flex flex-row mt-4">
        <div className="flex flex-row w-full">
          <input
            type="text"
            className="border p-2 w-2/3"
            value={addressValue}
            onChange={handleInputChange}
          ></input>
          <button
            className="bg-black hover:bg-purple-700 ml-6 px-8 text-white font-bold"
            onClick={updateAddress}
          >
            Update
          </button>
          <button
            className="bg-red-600 ml-4 px-8 text-white font-bold"
            onClick={deleteAddress}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default AddressBookEntryForModification;
