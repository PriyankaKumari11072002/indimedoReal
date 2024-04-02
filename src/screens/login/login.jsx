
import React from "react";
import { Box, TextField } from "@mui/material";
import { useState } from "react";

const Login = ({ loginPage, signup, verifyPage, setverifyPage, redirectSignupPage}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
const phoneRegex = /^[6-9]\d{9}$/;
  
    if (!phoneRegex.test(phoneNumber)) {        //5546948976
      setError("Please enter a valid phone number ");
      setverifyPage(false); 
    } else {
      setError("");
      setverifyPage(true); 
    }
  };
 
//   const boolen = true
//   if(!true){
// console.log(true,'true')
//   }else{
//     console.log(false,'false')
//   }

  return (
    <div>

      {loginPage && !signup && !verifyPage && (
        <div className="w-[100%]   px-3 py-1">
          <h1 className="pb-2  text-black">  Sign in</h1>
          <div className="pb-2  text-gray-600">
            Sign in to access your orders, special offers, health tips and more!
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                sx={{ marginTop: "10px" }}
                id="standard-basic"
                label="Enter Email Id or Mobile Number"
                variant="standard"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />

{error && <p style={{ color: 'red' }}>{error}</p>}
              <button
                onClick={handleContinue}
                type="button"
                className="w-[100%] bg-sky-500 p-2 text-black"
              >
                Continue
              </button>
              

              <p>
                New on Indimedo Website?{" "}
                </p>

              <div className=" text-sky-500 mt-2 "  type="button"  onClick={redirectSignupPage}>
                  Sign Up
                </div>
              <p>

              By signing up, I agree to the Privacy Policy,Terms and Conditions of Indimedo Website.

              </p>
            </Box>
          </div>
        </div>
      )}

    </div>
  );
};

export default Login;
