import React, { useState } from 'react';
import AddressBookEntryForModification from './AddressBookEntryForModification';
import NewAddressBookEntry from './NewAddressBookEntry';

function ModifyAddressBook(props){
    const addresses = props.data;
    const addressEntries = [];
    const [addAddressBookEntry, setAddAddressBookEntry] = useState([]);

    const userAddresses = [];
    if(addresses){
        for(let i=0; i<addresses.length; i++){
            userAddresses.push(
                <AddressBookEntryForModification data={addresses[i]}/>
            )
        }
    }

    function addEntry(){
        addressEntries.push(
            <NewAddressBookEntry />
        )
        setAddAddressBookEntry([...addAddressBookEntry, addressEntries]);
    }

    return(
        <>
            <div className='border border-gray-300 rounded flex flex-col'>
                <div className='flex flex-row mt-2 p-6'>
                    <span className='text-[20px]'>Address Book Entries</span>
                    <div className="bg-black p-2 hover:bg-purple-700" style={{marginLeft: "70%", borderRadius:"26px", width: "40px"}} onClick={addEntry}><i className='fa fa-plus text-white ml-1'></i></div>
                </div>
                <hr className='mb-4 mx-6'/>

                <div className='mx-6 mt-3 mb-8'>
                    {userAddresses}
                    {addAddressBookEntry}
                </div>
                
            </div>
        </>
    );
}

export default ModifyAddressBook;