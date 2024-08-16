import React, { useState } from 'react';

function ModifyAddressBook(){
    const addressEntries = [];
    const [addAddressBookEntry, setAddAddressBookEntry] = useState([]);

    function addEntry(){
        addressEntries.push(
            <div className='flex flex-row mt-4'>
                <div className='flex flex-row w-full'>
                    <input type='text' className='border p-2 w-2/3'></input>
                    <button className='bg-green-600 ml-6 px-11 text-white font-bold'>Add</button>
                    <button className='bg-red-600 ml-4 px-8 text-white font-bold'>Cancel</button>
                </div>
            </div>
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

                            <div className='mx-6 mt-3'>
                                <div className='flex flex-row'>
                                    <div className='flex flex-row w-full'>
                                        <input type='text' className='border p-2 w-2/3'></input>
                                        <button className='bg-green-600 ml-6 px-8 text-white font-bold'>Update</button>
                                        <button className='bg-red-600 ml-4 px-8 text-white font-bold'>Delete</button>
                                    </div>
                                </div>

                                <div className='flex flex-row mt-4'>
                                    <div className='flex flex-row w-full'>
                                        <input type='text' className='border p-2 w-2/3'></input>
                                        <button className='bg-green-600 ml-6 px-8 text-white font-bold'>Update</button>
                                        <button className='bg-red-600 ml-4 px-8 text-white font-bold'>Delete</button>
                                    </div>
                                </div>

                                {addAddressBookEntry}

                                <button type='submit' className='bg-black text-white py-3 px-8 float-right mb-8 mt-10 hover:bg-purple-700 font-bold'>CONTINUE</button>
                            </div>
                            
                        </div>
        </>
    );
}

export default ModifyAddressBook;