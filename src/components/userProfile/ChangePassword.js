function ChangePassword(){
    return(
        <>
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
        </>
    );
}

export default ChangePassword;