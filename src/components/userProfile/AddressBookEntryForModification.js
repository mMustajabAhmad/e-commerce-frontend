function AddressBookEntryForModification(props){
    const address = props.data;
    return(
        <>
            <div className='flex flex-row mt-4'>
                <div className='flex flex-row w-full'>
                    <input type='text' className='border p-2 w-2/3' value={address.address}></input>
                    <button className='bg-green-600 ml-6 px-8 text-white font-bold'>Update</button>
                    <button className='bg-red-600 ml-4 px-8 text-white font-bold'>Delete</button>
                </div>
            </div>
        </>
    );
}
export default AddressBookEntryForModification;