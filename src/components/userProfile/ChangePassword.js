import { useState } from "react";
import { updateUserInfo } from "../../utils/APIs/User_APIs";
import { useMutation, useQueryClient } from "@tanstack/react-query";


function ChangePassword() {
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
  return (
    <>
      <div className="border border-gray-300 rounded flex flex-col">
        <div className="flex flex-row mt-2 p-6">
          <span className="text-[20px]">Change Password</span>
        </div>
        <hr className="mb-4 mx-6" />

        <div className="mx-6 mt-3">
          <div className="flex flex-row">
            <div className="flex flex-col w-full">
              <label>Password</label>
              <input
                type="password"
                className="border p-2 w-full rounded-md"
                value={password}
                onChange={handlePasswordChange}
                autocomplete="new-password"
              ></input>
            </div>
          </div>

          <div className="flex flex-row mt-8">
            <div className="flex flex-col w-full">
              <label>Confirm Password</label>
              <input
                type="password"
                className="border p-2 w-full rounded-md"
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationChange}
                autocomplete="new-password"
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-8 float-right mb-8 mt-10 hover:bg-purple-700 font-medium rounded-md"
            onClick={()=>updateUser.mutate()}
          >
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
