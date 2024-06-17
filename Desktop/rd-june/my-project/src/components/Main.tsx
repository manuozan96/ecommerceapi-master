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
      <div className="bg-gradient-to-t to-[#000000]/90 to-transparent  relative z-50 relative w-[430px] h-[932px] overflow-y-auto no-scrollbar">
        <div className="bg-gradient-to-b from-[#000000]/20 to-[#EDEDED] bg-no-repeat bg-[url('/BackProy.png')]">
          <Navbar />
          <div className="bg-transparent relative z-50">{children}</div>
          <Button />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;

// bg-gradient-to-b from-transparent to-transparent bg-[url('/NavBlack.png')]

// bg-cover bg-no-repeat to-[#EDEDED] from-transparent bg-[url('/NavBlack.jpg')] bg-opacity-10
