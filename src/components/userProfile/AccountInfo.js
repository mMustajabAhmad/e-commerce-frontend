import { useState } from "react";
import apiClient from '../../api/authApi';

function AccountInfo(props){
    const user = props.data;
    const [name, setName]=useState(user.name);
    const [email, setEmail]=useState(user.email);
    const [phoneNumber, setPhoneNumber]=useState(user.phone_number);

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }

    const handlePhoneNumberChange = (event) =>{
        setPhoneNumber(event.target.value);
    }

    const updateUserInfo = async() =>{
        try{
            await apiClient.put(`/users/${user && user.id}`,{"user":{"name": name, "email":email, "phone_number": phoneNumber}});
        }catch(error){
            console.log("ERROR", error);
        }
    };


    return(
        <>
            <div className='border border-gray-300 rounded flex flex-col'>
                <div className='flex flex-row mt-2 p-6'>
                    <span className='text-[20px]'>Your Personal Details</span>
                    
                </div>
                <hr className='mb-4 mx-6'/>

                <div className='mx-6 mt-3'>
                    <div className='flex flex-row'>
                    <div className='flex flex-col w-full'>
                            <label>Name</label>
                            <input type='text' className='border p-2 w-full' value={name} onChange={handleNameChange}></input>
                        </div>
                        
                    </div>

                    <div className='flex flex-row mt-8'>
                        <div className='flex flex-col w-full'>
                            <label>Email Address</label>
                            <input type='email' className='border p-2 w-full' value={email} onChange={handleEmailChange}></input>
                        </div>
                    </div>

                    <div className='flex flex-row mt-8'>
                        <div className='flex flex-col w-full'>
                            <label>Contact Number</label>
                            <input type='text' className='border p-2 w-full' value={phoneNumber} onChange={handlePhoneNumberChange}></input>
                        </div>
                    </div>
                    <button  className='bg-black text-white py-3 px-8 float-right mb-8 mt-10 hover:bg-purple-700 font-bold' onClick={updateUserInfo}>UPDATE</button>
                </div>
                
            </div>
        </>
    );
}

export default AccountInfo;