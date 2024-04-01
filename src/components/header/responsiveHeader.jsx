

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box,Typography,Modal, Badge} from '@mui/material';
import './header.css'
import { BiSolidOffer } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { useMemo } from 'react';
import Signup from '../../screens/Signup/signup.jsx/Signup';
import Login from '../../screens/login/login';
import LoginOtpVerify from '../../screens/login/LoginOtpVerify';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  useLazyGetCartQuery } from '../../services/apis/product';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/features/cartSlice';
import { Fragment} from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
const ResponiveHeader = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const {count} = useSelector((state)=>state.cart) 

    const [loginPage, setloginPage] = useState(false);
    const [verifyPage, setverifyPage] = useState(false);
    const [signup, setsignup] = useState(false);
    
    const [getcartData,{data,isLoading,isError}] = useLazyGetCartQuery()
   
    
   useEffect(()=>{
      getcartData().then((data)=>dispatch(addProductToCart(data?.data?.products)))
   },[])

   useEffect(()=>{
      getcartData().then((data)=>dispatch(addProductToCart(data?.data?.products)))
   },[])

    const memorizeLoginPage = useMemo(() => {
      setloginPage(true);
    }, [verifyPage, loginPage]);
    const [open1, setOpen1] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
       
        boxShadow: 24,
        p: 4,
      };

      const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

    return (
        <div className="sm:hidden  text-green-500">
        it is design  for phone this is for phone
        <div className="flex justify-between items-center bg-white text-black border-b p-3 shadow transition duration-300 ease-in h-20  "
    
    >
         {!open&&<h1 onClick={()=>setOpen(true)}>bars</h1>}
        <Modal  open={open}  onClose={()=>setOpen(false)}>
           <Box>
            <h1>modal is open</h1> 
             <h3  onClick={()=>setOpen(false)}>cross</h3>
            </Box>
           
        </Modal>
        <div className="ml-4">
            <Link to="/">
                <img
                    src="https://indimedo.com/assets/img/logo.png"
                    alt="Logo"
                    style={{ width: "100px" ,height:"100px" ,padding:"20px"}}
                />
            </Link>
    
        </div>

        <div className="flex justify-around items-center gap-3 mr-4  ">
        
            <button  className="text-black font-semibold flex  justify-around items-center g-3">
                <Link  to="/cart">
                <IconButton aria-label="cart">
  <StyledBadge badgeContent={count} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>    

                </Link>
               
            </button>
          
    
        </div>



    </div>
       
     


        </div>

        
    );
};

export default ResponiveHeader;







