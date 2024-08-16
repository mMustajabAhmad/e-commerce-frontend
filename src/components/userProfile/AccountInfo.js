function AccountInfo(props){
    const user = props.data
    return(
        <>
            <div className='border border-gray-300 rounded flex flex-col'>
                <div className='flex flex-row mt-2 p-6'>
                    <span className='text-[20px]'>Your Personal Details</span>
                    
                </div>
                <hr className='mb-4 mx-6'/>

                <form className='mx-6 mt-3'>
                    <div className='flex flex-row'>
                    <div className='flex flex-col w-full'>
                            <label>Name</label>
                            <input type='text' className='border p-2 w-full' value={user ? user.name : ""}></input>
                        </div>
                        
                    </div>

                    <div className='flex flex-row mt-8'>
                        <div className='flex flex-col w-full'>
                            <label>Email Address</label>
                            <input type='email' className='border p-2 w-full' value={user ? user.email : ""}></input>
                        </div>
                    </div>

                    <div className='flex flex-row mt-8'>
                        <div className='flex flex-col w-full'>
                            <label>Contact Number</label>
                            <input type='text' className='border p-2 w-full' value={user ? user.phone_number : ""}></input>
                        </div>
                    </div>
                    <button type='submit' className='bg-black text-white py-3 px-8 float-right mb-8 mt-10 hover:bg-purple-700 font-bold'>CONTINUE</button>
                </form>
                
            </div>
        </>
    );
}

export default AccountInfo;