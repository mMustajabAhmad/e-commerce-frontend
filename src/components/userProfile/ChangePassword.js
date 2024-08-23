import { useState } from "react";
import apiClient from "../../api/authApi";

function ChangePassword(props) {
  const user = props.data;
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const updateUserInfo = async () => {
    try {
      await apiClient.patch(`/users/${user && user.id}`, {
        user: {
          password: password,
          password_confirmation: passwordConfirmation,
        },
      });
    } catch (error) {
      console.log("ERROR", error);
    }
  };
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
                className="border p-2 w-full"
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
                className="border p-2 w-full"
                value={passwordConfirmation}
                onChange={handlePasswordConfirmationChange}
                autocomplete="new-password"
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-8 float-right mb-8 mt-10 hover:bg-purple-700 font-bold"
            onClick={updateUserInfo}
          >
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
