import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../shop/Header';
import Footer from '../shop/Footer';
import apiClient from '../../api/authApi';
import { getCurrentUserId } from '../../utils/JWT_TokenDecoder';

function MyProfile() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const user_id = getCurrentUserId();
    const [editAccountInfo, setEditAccountInfo] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [modifyAddressBook, setModifyAddressBook] = useState(false);
    const addressEntries = [];
    const [addAddressBookEntry, setAddAddressBookEntry] = useState(addressEntries);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await apiClient.get(`/users/${user_id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data', error);
                navigate('/signin', { state: { from: '/myProfile' } });
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return (
            <>
                <Header />
                <main className="flex flex-col min-h-screen">
                    <div className="container mx-auto mt-6 px-4">
                        <h1 className="text-3xl font-bold mb-4">Edit Account Information</h1>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">User Information</h2>
                            <p>You are not logged in. Please <Link to="/signin" className="text-indigo-600">login</Link> to view your profile.</p>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

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



    return (
        <>
            <Header />
            <main className="flex flex-col min-h-screen mb-16">
                <div className="h-20 flex justify-center bg-gray-200">
                    <span className="font-bold text-3xl mt-4">MY ACCOUNT</span>
                </div>
                {/* <div className="container mx-auto mt-6 px-4">
                    <h1 className="text-3xl font-bold mb-4">Edit Account Information</h1>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                    value={user?.name || ''}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                    value={user?.email || ''}
                                    readOnly
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone Number:</label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                    value={user?.phone_number || ''}
                                    readOnly
                                />
                            </div>
                        </form>
                    </div>
                </div> */}

                <div className='flex flex-col' style={{marginLeft: "20%",marginRight: "20%", marginTop: "7%"}}>
                    <div className='flex flex-row bg-gray-200 mt-4 border border-gray-300 rounded pl-6 py-6'>
                        <div className='flex flex-row font-bold text-2xl hover:text-purple-700' onClick={()=> setEditAccountInfo(!editAccountInfo)}>
                            <div className='flex flex-col'>
                                <span>1.</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='ml-4'>EDIT YOUR ACCOUNT INFORMATION</span>
                            </div>
                            <div className='flex flex-col'>
                                <i className='fa fa-angle-down mt-1 text-2xl' style={{marginLeft: "340px"}}></i>
                            </div>
                        </div>
                    </div>

                    {editAccountInfo &&
                        <div className='border border-gray-300 rounded flex flex-col'>
                            <div className='flex flex-row mt-2 p-6'>
                                <span className='text-[20px]'>Your Personal Details</span>
                                
                            </div>
                            <hr className='mb-4 mx-6'/>

                            <form className='mx-6 mt-3'>
                                <div className='flex flex-row'>
                                    <div className='flex flex-col w-1/2 mr-4'>
                                        <label>First Name</label>
                                        <input type='text' className='border p-2 w-full'></input>
                                    </div>
                                    <div className='flex flex-col w-1/2 ml-4'>
                                        <label>Last Name</label>
                                        <input type='text' className='border p-2 w-full'></input>
                                    </div> 
                                </div>

                                <div className='flex flex-row mt-8'>
                                    <div className='flex flex-col w-full'>
                                        <label>Email Address</label>
                                        <input type='email' className='border p-2 w-full'></input>
                                    </div>
                                </div>

                                <div className='flex flex-row mt-8'>
                                    <div className='flex flex-col w-1/2 mr-4'>
                                        <label>Contact Number</label>
                                        <input type='text' className='border p-2 w-full'></input>
                                    </div>
                                    <div className='flex flex-col w-1/2 ml-4'>
                                        <label>Contact Number(Alternate)</label>
                                        <input type='text' className='border p-2 w-full'></input>
                                    </div> 
                                </div>
                                <button type='submit' className='bg-black text-white py-3 px-8 float-right mb-8 mt-10 hover:bg-purple-700 font-bold'>CONTINUE</button>
                            </form>
                            
                        </div>
                    }

                    <div className='flex flex-row bg-gray-200 mt-4 border border-gray-300 rounded pl-6 py-6'>
                        <div className='flex flex-row font-bold text-2xl hover:text-purple-700' onClick={()=> setChangePassword(!changePassword)}>
                            <div className='flex flex-col'>
                                <span>2.</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='ml-4'>CHANGE YOUR PASSWORD</span>
                            </div>
                            <div className='flex flex-col'>
                                <i className='fa fa-angle-down mt-1 text-2xl' style={{marginLeft: "440px"}}></i>
                            </div>
                        </div>
                    </div>

                    {changePassword &&
                        <div className='border border-gray-300 rounded flex flex-col'>
                            <div className='flex flex-row mt-2 p-6'>
                                <span className='text-[20px]'>Change Password</span>
                                
                            </div>
                            <hr className='mb-4 mx-6'/>

                            <form className='mx-6 mt-3'>
                                <div className='flex flex-row'>
                                    <div className='flex flex-col w-full'>
                                        <label>Password</label>
                                        <input type='email' className='border p-2 w-full'></input>
                                    </div>
                                </div>

                                <div className='flex flex-row mt-8'>
                                    <div className='flex flex-col w-full'>
                                        <label>Confirm Password</label>
                                        <input type='email' className='border p-2 w-full'></input>
                                    </div>
                                </div>
                                <button type='submit' className='bg-black text-white py-3 px-8 float-right mb-8 mt-10 hover:bg-purple-700 font-bold'>CONTINUE</button>
                            </form>
                            
                        </div>
                    }

                    <div className='flex flex-row bg-gray-200 mt-4 border border-gray-300 rounded pl-6 py-6'>
                        <div className='flex flex-row font-bold text-2xl hover:text-purple-700' onClick={()=> setModifyAddressBook(!modifyAddressBook)}>
                            <div className='flex flex-col'>
                                <span>3.</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold ml-4 text-2xl'>MODIFY YOUR ADDRESS BOOK ENTRIES</span>
                            </div>
                            <div className='flex flex-col'>
                                <i className='fa fa-angle-down mt-1 text-2xl' style={{marginLeft: "295px"}}></i>
                            </div>
                        </div>
                    </div>
                    {modifyAddressBook &&
                        <div className='border border-gray-300 rounded flex flex-col'>
                            <div className='flex flex-row mt-2 p-6'>
                                <span className='text-[20px]'>Address Book Entries</span>
                                <div className="bg-black p-2 hover:bg-purple-700" style={{marginLeft: "70%", borderRadius:"26px", width: "40px"}} onClick={addEntry}><i className='fa fa-plus text-white ml-1'></i></div>
                            </div>
                            <hr className='mb-4 mx-6'/>

                            <form className='mx-6 mt-3'>
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
                            </form>
                            
                        </div>
                    }
                </div>
            </main>
            
            <Footer />
        </>
    );
}

export default MyProfile;
