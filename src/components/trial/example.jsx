
// import { Fragment, useState } from 'react'
 import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
 import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { ShoppingCartIcon } from 'lucide-react'
import { IconButton } from '@mui/material'

import { useEffect, useState ,useMemo,Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Box,Typography,Modal, Badge} from '@mui/material';

import { BiSolidOffer } from 'react-icons/bi';
import { BsCart2 } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';



import { styled } from '@mui/material/styles';

import {  useLazyGetCartQuery } from '../../services/apis/product';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/features/cartSlice';
import Signup from '../../screens/Signup/signup.jsx/Signup';
import Login from '../../screens/login/login';
import LoginOtpVerify from '../../screens/login/LoginOtpVerify';


const navigation = {


  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example1() {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const [open1, setOpen1] = useState(false);
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
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open1} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen1}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-[70%] max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div  className=" flex  justify-between  p-3 align-middle ">
                <div>
                 <FaUser  className="" style={{borderRadius:"50%",padding:"2px",border:'1px solid black'}}/> Hello , SignIn
                </div>
                <div  onClick={()=>setOpen1(false)}> <XMarkIcon className="h-6 w-6" aria-hidden="true" /></div>
              </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                
                 
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">Cart</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
       

        <nav aria-label="Top" className="">
          <div className="border-b border-gray-200    sm:px-10 sm:py-3 p-4"  >
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen1(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  {/* <span className="sr-only">Your Company</span> */}

                  <img
                    className=""
                    src="https://indimedo.com/assets/img/logo.png"
                    alt=""
                    style={{ width: "80px" ,height:"70px" }}
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open1 }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open1
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
              

                <div className="hidden lg:ml-8 lg:flex">
                <Link to="/offers" className="flex items-center text-gray-700 hover:text-gray-800"> 
                  
                  
                    <BiSolidOffer />
                   
    
                    <span className="ml-1 block text-sm font-medium">Offers</span>
                    <span className="sr-only">, change currency</span>
                 </Link> 
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                <Link to="/cart" className="flex items-center text-gray-700 hover:text-gray-800"> 
                  
                      <StyledBadge badgeContent={count} color="secondary">
                    <ShoppingCartIcon/>
                    </StyledBadge>
    
                    <span className="ml-3 block text-sm font-medium">Cart</span>
                    <span className="sr-only">, change currency</span>
                 </Link> 


                 <Link to="" className="flex items-center text-gray-700 hover:text-gray-800"> 
                 <FaUser className="ml-4"  />
                 <span className="ml-1 block text-sm font-medium"  onClick={handleOpen}>Signup/Signin</span>
                 </Link> 
                 </div>
                 <Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>


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
              <p>
                Sign up with us get exclusive offers,discounts and savings
                on medicine ,get express delivery on same day
              </p>
            </div>
          </div>


         <Signup signup={signup} memorizeLoginPage={memorizeLoginPage}/>

         <Login  loginPage={loginPage}  signup={signup}  verifyPage={verifyPage}  
         setverifyPage={setverifyPage}  setsignup={setsignup}/>
         
         <LoginOtpVerify verifyPage={verifyPage}/>

        </div>
</Box>
</Modal>            
  
                
               
              
               

                {/* Search */}
            

                {/* Cart */}
                <div className="ml-4 flow-root sm:hidden lg:ml-6">
                  <Link  to='/cart'>     
                <StyledBadge badgeContent={count} color="secondary">
                    <ShoppingCartIcon/>
                    </StyledBadge>
    
                    <span className="hidden sm:block  ml-3  text-sm font-medium">Cart</span>
                    <span className="sr-only">, change currency</span>
                 </Link> 
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
