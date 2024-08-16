import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../shop/Header';
import Footer from '../shop/Footer';
import apiClient from '../../api/authApi';
import { getCurrentUserId } from '../../utils/JWT_TokenDecoder';
import AccountInfo from './AccountInfo';
import ChangePassword from './ChangePassword';
import ModifyAddressBook from './ModifyAddressBook';

function MyProfile() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const user_id = getCurrentUserId();
    const [editAccountInfo, setEditAccountInfo] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [modifyAddressBook, setModifyAddressBook] = useState(false);

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

    return (
        <>
            <Header />
            <main className="flex flex-col min-h-screen mb-16">
                <div className="h-20 flex justify-center bg-gray-200">
                    <span className="font-bold text-3xl mt-4">MY ACCOUNT</span>
                </div>

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
                        <AccountInfo data={user}/>
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
                        <ChangePassword />
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
                        <ModifyAddressBook />
                    }
                </div>
            </main>
            
            <Footer />
        </>
    );
}

export default MyProfile;
