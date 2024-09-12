import Header from "./shop/Header";
import Footer from "./shop/Footer";
import { updateUserInfo } from "../utils/APIs/User_APIs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const ResetPassword = () =>{
  const queryClient = useQueryClient();
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const updateUser = useMutation({
    mutationFn: () => updateUserInfo({user: { password: password, password_confirmation: passwordConfirmation }}),
    onSuccess: () => {
      alert('Password Updated!');
      queryClient.invalidateQueries(["user"]);
    },
    onError: () => {
      alert("Cannot update Password");
    }
  })
  return(
  <>
    <Header/>
    <main className="flex flex-col min-h-screen">
      <div className="h-20 flex justify-center bg-gray-200 ">
        <span className="font-medium text-3xl mt-4">RESET PASSWORD</span>
      </div>
      <div className="flex flex-col gap-2 w-2/3 ml-[18%] mt-[2%]">
        <p className="text-xl font-medium">New Password</p>
        <input 
          className="border flex rounded-md p-1"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <p className="text-xl font-medium">Confirm Password</p>
        <input 
          className="border flex rounded-md p-1"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
        ></input>
        <button className="border p-2 h-[3em] w-[12em] rounded-md bg-black hover:bg-purple-700 text-white mt-2">Reset Password</button>
      </div>
    </main>
    <Footer className="mt-auto"/>
  </>
  );
} 

export default ResetPassword;