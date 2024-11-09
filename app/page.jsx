import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full p-2">
      <div className="container mx-auto h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Myself text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">Hello I'm <br /><span className="text-accent">Md.Abdur Razzak Jim</span> </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, consequuntur.
            </p>
            {/* button social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button>
              <span>Download CV</span>
              <FiDownload className="text-xl"></FiDownload>
            </Button>
            {/* Social Media */}
            <div className="mb-8 lg:mb-0">
            <Socials socialStyles="flex gap-4" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transitin-all duration-500"></Socials>
            </div>
            </div>
          </div>
          {/* Myself Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo></Photo>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;