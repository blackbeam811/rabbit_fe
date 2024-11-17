import { Player } from "@lottiefiles/react-lottie-player";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const RiousLandingPage = () => {
  return (
    <>
      <div className="fixed top-4 flex justify-start items-center pl-4 sm:pl-8">
        <img className="rounded-full w-6" src="./logo.JPEG" alt="logo" />
        <div className="text-[#114EA9] ml-1 comic-neue-bold">Rious</div>
        <div className="text-[#F5DF15] ml-3 comic-neue-bold">The Rabbit</div>
      </div>
      <div className="w-screen h-screen overflow-auto flex flex-col justify-center items-center comic-neue-bold">
        <div className="relative ">
          <div className="max-w-sm sm:max-w-md">
            <Player
              src="./RabbitAnimation.json"
              className="player w-3/5"
              loop
              autoplay
            />
          </div>
          <div className="absolute -top-[80%] sm:-top-[40%] -left-[30%] w-full z-[-1]">
            <img src="./tree.png" alt="Tree" className="w-auto" />
          </div>
          <div className="absolute -bottom-[15%] z-[-1] w-full">
            <div className="flex justify-between items-end px-16">
              <Player src="./Grass.json" className="w-[70px]" loop autoplay />
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
            </div>
            <div className="flex justify-between items-end mt-[-20px]">
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
              <Player src="./Grass.json" className="w-[60px]" loop autoplay />
            </div>
            <div className="absolute top-0 -left-32">
              <Player src="./Grass.json" className="w-[70px]" loop autoplay />
            </div>
            <div className="absolute top-10 -left-44">
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
            </div>
            <div className="absolute top-0 -left-56">
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
            </div>
            <div className="absolute top-44 -left-24">
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
            </div>
            <div className="absolute top-0 -right-12">
              <Player src="./Grass.json" className="w-[70px]" loop autoplay />
            </div>
            <div className="absolute top-10 -right-44">
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
            </div>
            <div className="absolute top-12 -right-56">
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
            </div>
            <div className="absolute top-44 -right-24">
              <Player src="./Grass.json" className="w-[90px]" loop autoplay />
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <div className="sm:flex space-x-1">
            <div className="text-[#03C3FF] text-[1.2rem] font-bold">
              Combibing the power of
            </div>
            <div className="text-[#F5DF15] text-[1.2rem] font-bold">
              Staking and Gaming
            </div>
          </div>
          <div className="text-[#C1F4C3] font-bold text-[0.7rem] mt-6">
            Presenting Rious The Rabbit
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center mt-10">
          <div className="flex justify-center items-center bg-[#92CC5A] text-white text-base rounded-full px-8 py-1.5">
            Open App
          </div>
          <div className="flex justify-center items-center bg-[#92CC5A] text-white text-base rounded-full px-8 py-1.5">
            WhitePaper
          </div>
        </div>
        <div className="flex w-full justify-center gap-6 mt-10">
          <div className="p-3 bg-[#1166C5] bg-opacity-60 rounded-full">
            <FaTwitter className="text-white" />
          </div>
          <div className="p-3 bg-[#1166C5] bg-opacity-60 rounded-full">
            <SiTelegram className="text-white" />
          </div>
          <div className="p-3 bg-[#1166C5] bg-opacity-60 rounded-full">
            <FaInstagram className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RiousLandingPage;