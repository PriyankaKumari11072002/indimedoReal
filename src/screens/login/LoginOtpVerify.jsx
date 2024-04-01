import { Box,TextField } from '@mui/material';
import React from 'react'

const LoginOtpVerify = ({verifyPage}) => {
  return (
    <div>
        
        {verifyPage && (
                <div  className="w-[110%]   px-3 py-1">
                  <h1  className=' text-black'>Enter OTP</h1>
                  <p  className=' text-gray-600 p-1'>Enter OTP We have sent an OTP on +91 8787689678</p>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="One Time Password"
                      variant="standard"
                    />
                  </Box>

                  <p  className=' text-gray-600 p-1'>Get OTP on SMS | Get OTP on Call</p>
                  <button className="w-[100%] bg-sky-500 p-2 text-black  mt-16 rounded" >Done</button>
                </div>
              )}

       
    </div>
  )
}

export default LoginOtpVerify;
