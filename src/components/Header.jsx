import page from "@/app/(auth)/SignUp/page";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-black font-bold shadow-orange-400  shadow-sm bg-yellow-300 p-2 rounded-xl">
              Learning Managment System
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <h1 className="mr-5 hover:text-orange-400 font-bold text-white ">
                Home
              </h1>
            </Link>
            <Link href="/Courses">
              <h1 className="mr-5 hover:text-orange-400 font-bold text-white ">
                Courses
              </h1>
            </Link>
            <Link href="/Trainers">
              <h1 className="mr-5 hover:text-orange-400 font-bold text-white ">
                Trainers
              </h1>
            </Link>
            <Link href="/Aboutus">
              <h1 className="mr-5 hover:text-orange-400 font-bold text-white ">
                About Us
              </h1>
            </Link>
          </nav>
          <div className="flex gap-2">
            <Link href="SignIn">
              <h1 className="inline-flex text-white font-bold items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 ">
                SignIn
              </h1>
            </Link>
            <Link href={"Signup"}>
              <h1 className="inline-flex text-white font-bold items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0">
                SignUp
              </h1>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
