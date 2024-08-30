import React, { useState } from "react";
import AddressBookEntryForModification from "./AddressBookEntryForModification";
import NewAddressBookEntry from "./NewAddressBookEntry";
import { FaPlus } from "react-icons/fa";

function ModifyAddressBook(props) {
  const addresses = props.data;
  const addressEntries = [];
  const [addAddressBookEntry, setAddAddressBookEntry] = useState([]);

  const userAddresses = [];
  if (addresses) {
    for (let i = 0; i < addresses.length; i++) {
      userAddresses.push(
        <AddressBookEntryForModification data={addresses[i]} />
      );
    }
  }

  function addEntry() {
    addressEntries.push(<NewAddressBookEntry />);
    setAddAddressBookEntry([...addAddressBookEntry, addressEntries]);
  }

  return (
    <>
      <div className="border border-gray-300 rounded flex flex-col">
        <div className="flex flex-row mt-2 p-6">
          <span className="text-[20px]">Address Book Entries</span>
          <div
            className="bg-black p-2 hover:bg-purple-700 ml-[70%] rounded-[26px] w-[40px] h-[40px] flex justify-center items-center"
            onClick={addEntry}
          >
            <FaPlus className="text-white"/>
          </div>
        </div>
        <hr className="mb-4 mx-6" />

        <div className="mx-6 mt-3 mb-8">
          {userAddresses}
          {addAddressBookEntry}
        </div>
      </div>
    </>
  );
}

export default ModifyAddressBook;
