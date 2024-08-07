import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../home/Header';
import Footer from '../home/Footer';
import apiClient from '../../api/authApi';

function MyProfile() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await apiClient.get('/user');
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
            <main className="flex flex-col min-h-screen">
                <div className="container mx-auto mt-6 px-4">
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
                </div>
            </main>
            <Footer />
        </>
    );
}

export default MyProfile;
