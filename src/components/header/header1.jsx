import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Modal, Badge } from "@mui/material";
import "./header.css";
import { BiSolidOffer } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useMemo } from "react";
import Signup from "../../screens/Signup/signup.jsx/Signup";
import Login from "../../screens/login/login";
import LoginOtpVerify from "../../screens/login/LoginOtpVerify";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLazyGetCartQuery } from "../../services/apis/product";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/features/cartSlice";


const Header1 = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { count } = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [loginPage, setloginPage] = useState(false);
  const [verifyPage, setverifyPage] = useState(false);
  const [signup, setsignup] = useState(false);

  const [getcartData, { data, isLoading, isError }] = useLazyGetCartQuery();

  const handleSignUpClick = () => {
    setIsModalOpen(true);

    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
    setIsSignUp(false);
  };
  const handleClose = () => {
    setIsModalOpen(false);
    setverifyPage(false);
  };
 
  useEffect(() => {
    getcartData().then((data) =>
      dispatch(addProductToCart(data?.data?.products))
    );
  }, []);

  useEffect(() => {
    getcartData().then((data) =>
      dispatch(addProductToCart(data?.data?.products))
    );
  }, []);

  const memorizeLoginPage = useMemo(() => {
    setloginPage(true);
  }, [verifyPage, loginPage]);

  const handleOpen = () => setOpen(true);
 
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //  width: "70%",
    bgcolor: "background.paper",

    boxShadow: 24,
    p:4,
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
  
      <div className="hidden sm:block text-red-500  bg-slate-100">
        <div className="flex justify-between items-center bg-white text-black border-b p-3 shadow transition duration-300 ease-in h-20  ">
          <div className="ml-4">
            <Link to="/">
              <img
                src="https://indimedo.com/assets/img/logo.png"
                alt="Logo"
                style={{ width: "100px", height: "100px", padding: "20px" }}
              />
            </Link>
          </div>

          <div className="flex justify-around items-center gap-3 mr-4  ">
            <div className="">
              <Link
                to="/special-offers"
                className=" sm:text-black sm:font-semibold  sm:flex  Offers sm:justify-around sm:items-center sm:g-3"
              >
                <BiSolidOffer className="" />
                Offers
              </Link>
            </div>
            <div className="text-black font-semibold flex  justify-around items-center g-3">
              <Link to="/cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={count} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
            </div>
            <Link
              to="/upload-prescription"
              className="text-black font-semibold"
            >
              Upload
            </Link>

            <button
              onClick={handleOpen}
              className="text-black font-semibold  flex  justify-around items-center g-3"
            >
              <FaUser className="" />
              <span onClick={handleSignUpClick}> Sign up/</span>
              <span onClick={handleLoginClick}>Sign in</span>
            </button>
          </div>

          <Modal
            open={isModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}  className="sm:w-[70%]   lg:w-[60%]">
              <div
                className="  flex justify-around items-center  "
                style={{ padding: "10px 40px" }}
              >
                <div>
                  <div>
                    <img
                      src="https://www.netmeds.com/images/cms/wysiwyg/cms/1680000865_New_Dest_deal.png"
                      alt="sign-in banner"
                      width="180px"
                      height="200"
                    />
                  </div>

                  <div>
                    <h1>Welcome to Indimedo website</h1>
                    <p className="w-[85%]">
                      Sign up with us get exclusive offers,discounts and savings
                      on medicine ,get express delivery on same day
                    </p>
                  </div>
                </div>

                <div>
                  {isSignUp ? (
                    <>
                      <Signup
                        signup={signup}
                        setloginPage={setloginPage}
                        loginPage={loginPage}
                        memorizeLoginPage={memorizeLoginPage}
                        verifyPage={verifyPage}
                        setverifyPage={setverifyPage}
                        setsignup={setsignup}
                        redirectloginPage={handleLoginClick}
                      />{" "}
                      <LoginOtpVerify verifyPage={verifyPage} />
                    </>
                  ) : (
                    <>
                      <Login
                        loginPage={loginPage}
                        setloginPage={setloginPage}
                        signup={signup}
                        verifyPage={verifyPage}
                        setverifyPage={setverifyPage}
                        setsignup={setsignup}
                        redirectSignupPage={handleSignUpClick}
                      />
                      <LoginOtpVerify verifyPage={verifyPage} />
                    </>
                  )}
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Header1;
