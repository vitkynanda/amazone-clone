import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Top Navbar */}
        <div className="flex ites-center flex-grow sm:flex-grow-0 mt-2">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="logo"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex cursor-pointer  items-center bg-yellow-400 hover:bg-yellow-500 flex-grow h-10 rounded-md">
          <input
            type="text"
            className="p-2 w-6 h-full flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right Actions */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowr">
          <div className="link">
            <p>Hello Vitky</p>
            <p className="font-bold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Order</p>
          </div>
          <div className="relative flex items-center link">
            <span className="absolute right-5 top-0 md:right-6 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-bold md:text-sm">Cart</p>
          </div>
        </div>
      </div>
      {/* Navbar Bottom */}
      <div className="bg-amazon_blue-light space-x-3 p-2 pl-6 text-white flex items-center text-sm">
        <p className="flex items-center">
          <MenuIcon className="h-6 mr-3" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Bussines</p>
        <p className="link">Today Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
