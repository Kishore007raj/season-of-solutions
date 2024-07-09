"use client";
import { url } from "inspector";
import { TracingBeam } from "./ui/tracing-beam";
import { ContainerScroll } from "./ui/container-scroll-animations";
import useMediaQuery from "./hooks/useMediaQuery";

const Timeline = () => {
  const isSmallScreen = useMediaQuery(640);

  return (
    <div
      id="timeline"
      className=" overflow-y-hidden w-full bg-gradient-three text-white font-semibold font-babasneu tracking-wider flex flex-col  items-center h-full"
    >
      <span className=" text-[25px] sm:text-[35px] md:text-[80px] sm:pt-10 ">
        EVENT TIMELINE
      </span>
      <div className="flex flex-row w-full pt-10">
        <div className=" w-6/12 flex flex-col items-center">
          <div className=" w-full flex flex-row sm:justify-center sm:pl-0">
            <div className=" w-1/3 sm:w-full sm:justify-center flex translate-x-[30%] sm:translate-x-0">
              <img
                className=" sm:w-[155px] sm:h-[155px]"
                src="/Timeline/rocket.svg"
                height={56}
              />
            </div>
            <div className=" w-2/3 sm:w-0 sm:justify-center sm:pl-0"></div>
          </div>
          <div className=" flex flex-row w-full  pt-5">
            <div className=" w-1/3 sm:w-1/2 sm:border-dashed  sm:border-r-[2px] border-[rgb(184,184,184)] flex flex-col items-end overflow-hidden">
              <div className=" h-[16rem] sm:h-[45rem] flex flex-col justify-center pr-1">
                <img
                  className="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] "
                  src="/Timeline/brainstormSkill.svg"
                />
              </div>
              <div className=" h-[16rem] sm:h-[45rem] flex flex-col justify-center">
                <img
                  className="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] "
                  src="/Timeline/constructionWorker.svg"
                />
              </div>
              <div className=" h-[16rem] sm:h-[45rem] flex flex-col justify-center">
                <img
                  className="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] "
                  src="/Timeline/spaceshipLaunch.svg"
                />
              </div>
            </div>

            {isSmallScreen ? (
              <TracingBeam className=" -left-2 w-36">
                <div className=" w-2/3 sm:w-1/2 flex flex-col items-start overflow-hidden pl-1">
                  <div className="TimelineDates text-xs sm:text-5xl h-[16rem] sm:h-[45rem] flex flex-col justify-center pl-2 ">
                    <span>THINKATHON</span>
                    <span>JULY 10</span>
                  </div>
                  <div className="TimelineDates text-xs sm:text-5xl h-[16rem] sm:h-[45rem] flex flex-col justify-center pl-2 ">
                    <span>PROTOWAR</span>
                    <span>JULY 26</span>
                  </div>
                  <div className="TimelineDates text-xs sm:text-5xl h-[16rem] sm:h-[45rem] flex flex-col justify-center pl-2">
                    <span>LAUNCH PAD</span>
                    <span>AUGUST 15</span>
                  </div>
                </div>
              </TracingBeam>
            ) : (
              <div className=" w-2/3 sm:w-1/2 flex flex-col items-start overflow-hidden pl-1">
                <div className="TimelineDates text-xs sm:text-5xl h-[16rem] sm:h-[45rem] flex flex-col justify-center pl-2 ">
                  <span>THINKATHON</span>
                  <span>JULY 10</span>
                </div>
                <div className="TimelineDates text-xs sm:text-5xl h-[16rem] sm:h-[45rem] flex flex-col justify-center pl-2 ">
                  <span>PROTOWAR</span>
                  <span>JULY 26</span>
                </div>
                <div className="TimelineDates text-xs sm:text-5xl h-[16rem] sm:h-[45rem] flex flex-col justify-center pl-2">
                  <span>LAUNCH PAD</span>
                  <span>AUGUST 15</span>
                </div>
              </div>
            )}
          </div>

          <div className=" w-full flex flex-row sm:justify-center sm:pl-0">
            <div className=" w-1/3 sm:w-full sm:justify-center flex translate-x-[50%] sm:translate-x-0">
              <img
                className="z-30 sm:w-[155px] sm:h-[155px] -translate-y-[16%] "
                src="/Timeline/astronaut.svg"
                height={56}
              />
            </div>
            <div className=" w-2/3 sm:w-0 sm:justify-center sm:pl-0"></div>
          </div>
        </div>
        <div className=" w-7/12 flex flex-col items-center overflow-hidden">
          <div className=" w-full sm:w-full flex flex-row sm:justify-center sm:pl-0">
            <div className=" w-full h-[50px] sm:h-[175px] mt-[2.5rem] sm:justify-center flex translate-x-[50%] sm:translate-x-0"></div>
          </div>
          <div className=" h-[16rem] sm:h-[45rem] flex flex-col justify-center items-center ">
            <ContainerScroll titleComponent={""} sideRotate={true}>
              <img
                className="w-[10rem] sm:w-[22rem]  sm:translate-x-0"
                src="/Timeline/Thinkathon.svg"
              />
            </ContainerScroll>
          </div>
          <div className="h-[16rem] sm:h-[45rem] flex flex-col justify-center items-center">
            <ContainerScroll titleComponent={""} sideRotate={false}>
              <img
                className="w-[10rem] sm:w-[22rem] sm:translate-x-0"
                src="/Timeline/Protowar.svg"
              />
            </ContainerScroll>
          </div>
          <div className="h-[16rem] sm:h-[45rem] flex flex-col justify-center items-center">
            <ContainerScroll titleComponent={""} sideRotate={true}>
              <img
                className="w-[10rem] sm:w-[22rem] sm:translate-x-0 "
                src="/Timeline/LaunchPad.svg"
              />
            </ContainerScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
