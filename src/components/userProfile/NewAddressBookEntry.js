import { useState } from "react";
import apiClient from '../../api/authApi';
import { getCurrentUserId } from '../../utils/JWT_TokenDecoder';

function NewAddressBookEntry(){
    const [isVisible, setIsVisible] = useState(true);
    const [addressValue, setAddressValue] = useState('');
    const user_id = getCurrentUserId();

    const handleInputChange = (event) =>{
        setAddressValue(event.target.value);
    }

    const createAddress = async() =>{
        try{
            await apiClient.post(`/users/${user_id}/addresses`,{"address":{"address": addressValue}});
            setIsVisible(false);
        }catch(error){
            console.log("ERROR", error);
        }
    };

    return(
        <>
            {isVisible &&
                <div className='flex flex-row mt-4'>
                    <div className='flex flex-row w-full'>
                        <input type='text' className='border p-2 w-2/3' value={addressValue} onChange={handleInputChange}></input>
                        <button className='bg-black hover:bg-purple-700 ml-6 px-11 text-white font-bold' onClick={createAddress}>Add</button>
                        <button className='bg-red-600 ml-4 px-8 text-white font-bold' onClick={()=>setIsVisible(false)}>Cancel</button>
                    </div>
                </div>
            }
        </>
    );
}

export default NewAddressBookEntry;