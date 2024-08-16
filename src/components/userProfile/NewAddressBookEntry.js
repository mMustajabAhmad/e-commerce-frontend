import { useState } from "react";

function NewAddressBookEntry(){
    const [isVisible, setIsVisible] = useState(true);
    return(
        <>
            {isVisible &&
                <div className='flex flex-row mt-4'>
                    <div className='flex flex-row w-full'>
                        <input type='text' className='border p-2 w-2/3'></input>
                        <button className='bg-green-600 ml-6 px-11 text-white font-bold'>Add</button>
                        <button className='bg-red-600 ml-4 px-8 text-white font-bold' onClick={()=>setIsVisible(false)}>Cancel</button>
                    </div>
                </div>
            }
        </>
    );
}

export default NewAddressBookEntry;