import React, { useState, useEffect } from "react";
import Header from "../shop/Header";
import Footer from "../shop/Footer";
import AccountInfo from "./AccountInfo";
import ChangePassword from "./ChangePassword";
import ModifyAddressBook from "./ModifyAddressBook";
import { fetchUser } from "../../utils/APIs/User_APIs";
import { useQuery } from "@tanstack/react-query";
import { fetchAddresses } from "../../utils/APIs/Address_APIs";

function MyProfile() {
  const [editAccountInfo, setEditAccountInfo] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [modifyAddressBook, setModifyAddressBook] = useState(false);

  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  });

  const {
    data: addresses,
    error: addressesError,
    isLoading: loadingAddresses,
  } = useQuery({
    queryKey: ["addresses"],
    queryFn: () => fetchAddresses(),
  });

  if (userIsLoading) return <div>Loading User...</div>;
  if (userError) return <div>User Error</div>;

  if (loadingAddresses) return <div>Loading Addresses...</div>;
  if (addressesError) return <div>Addresses Error</div>;

  console.log("ADDRESES", addresses);

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen mb-16">
        <div className="h-20 flex justify-center bg-gray-200">
          <span className="font-medium text-3xl mt-4">MY ACCOUNT</span>
        </div>

        <div
          className="flex flex-col mx-[20%] mt-[7%]"
        >
          <div className="flex flex-row bg-gray-200 mt-4 border border-gray-300 rounded pl-6 py-6">
            <div
              className="flex flex-row font-medium text-2xl hover:text-purple-700"
              onClick={() => setEditAccountInfo(!editAccountInfo)}
            >
              <div className="flex flex-col">
                <span>1.</span>
              </div>
              <div className="flex flex-col">
                <span className="ml-4">EDIT YOUR ACCOUNT INFORMATION</span>
              </div>
              <div className="flex flex-col">
                <i
                  className="fa fa-angle-down mt-1 text-2xl ml-[340px]"
                ></i>
              </div>
            </div>
          </div>

          {editAccountInfo && <AccountInfo data={user} />}

          <div className="flex flex-row bg-gray-200 mt-4 border border-gray-300 rounded pl-6 py-6">
            <div
              className="flex flex-row font-medium text-2xl hover:text-purple-700"
              onClick={() => setChangePassword(!changePassword)}
            >
              <div className="flex flex-col">
                <span>2.</span>
              </div>
              <div className="flex flex-col">
                <span className="ml-4">CHANGE YOUR PASSWORD</span>
              </div>
              <div className="flex flex-col">
                <i
                  className="fa fa-angle-down mt-1 text-2xl ml-[440px]"
                ></i>
              </div>
            </div>
          </div>

          {changePassword && <ChangePassword />}

          <div className="flex flex-row bg-gray-200 mt-4 border border-gray-300 rounded pl-6 py-6">
            <div
              className="flex flex-row font-medium text-2xl hover:text-purple-700"
              onClick={() => setModifyAddressBook(!modifyAddressBook)}
            >
              <div className="flex flex-col">
                <span>3.</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium ml-4 text-2xl">
                  MODIFY YOUR ADDRESS BOOK ENTRIES
                </span>
              </div>
              <div className="flex flex-col">
                <i
                  className="fa fa-angle-down mt-1 text-2xl ml-[295px]"
                ></i>
              </div>
            </div>
          </div>

          {modifyAddressBook && <ModifyAddressBook data={addresses} />}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyProfile;
