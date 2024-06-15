import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Button from "./Button";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="relative min-h-screen flex justify-center items-center ">
        <div className="bg-[url('/Rectangle.jpg')] relative z-50 relative w-[430px] h-[932px] overflow-y-auto no-scrollbar">
          <div className="bg-gradient-to-b from-[#EDEDED] to-transparen bg-[url('/BlackProy.jpg')]">
            <Navbar />
            <div className="bg-transparent relative z-50">{children}</div>
            <Footer />
          </div>
        </div>
    </div>
  );
};

export default Main;

// bg-gradient-to-b from-transparent to-transparent bg-[url('/NavBlack.png')]

// bg-cover bg-no-repeat to-[#EDEDED] from-transparent bg-[url('/NavBlack.jpg')] bg-opacity-10
