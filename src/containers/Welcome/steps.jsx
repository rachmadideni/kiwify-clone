import React, { useState, useContext } from "react";
import Illustration from "assets/svgs/illustration.svg";
import ArrowUpIcon from "assets/svgs/arrow-up.svg";
import ArrowDownIcon from "assets/svgs/arrow-down.svg";
import ArrowForwardIcon from "assets/svgs/arrow-forward.svg";
import YoutubeIcon from "assets/svgs/youtube.svg";
import { CRM } from "./constants";
import WelcomeStepContext from "context/stepContext";

const ButtonCRM = (props) => {
  return (
    <button className="w-[80px] h-[100px] flex flex-col items-center justify-around hover:shadow-lg hover:rounded-md hover:text-teal-500">
      {props.children}
    </button>
  );
};

const GreetUserStep = () => {
  const { setActiveStep } = useContext(WelcomeStepContext);
  return (
    <div className="flex flex-col w-full h-full items-center px-8 py-6">
      <div className="flex flex-col flex-1 w-full space-y-2 items-center justify-center">
        <p className="font-semibold text-2xl">Welcome to Extention</p>
        <p className="font-normal text-xs">Make your CRM work everywhere</p>
      </div>
      <div className="flex">
        <img alt="" className="w-80 h-80" src={Illustration} />
      </div>
      <div className="flex flex-col flex-1 space-y-3">
        <button 
          onClick={()=>setActiveStep(1)}
          className="flex w-full rounded-lg p-2 items-center justify-around bg-[#00B2BD] text-white font-semibold">
          Get started!
        </button>
        <p className="text-xs text-[#898989]">
          By continuing, you agree to Extention{" "}
          <a href="/" className="text-[#00B2BD]">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="/" className="text-[#00B2BD]">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

const PickCRMStep = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-1 w-full space-x-4 pt-4 justify-center">
        {CRM.map((button, id) => (
          <ButtonCRM key={id}>
            <img alt="" className="w-12 h-12" src={button.icon} />
            <p className="text-xs capitalize">{button.title}</p>
          </ButtonCRM>
        ))}
      </div>

      <div className="flex flex-1 flex-col h-full space-y-2 items-center">
        <p className="text-2xl font-semibold">Pick your favorite CRM</p>

        <div className="flex items-center">
          <button className="flex space-x-4 rounded-lg p-2 items-center justify-around bg-white border-2 border-teal-500 font-normal text-teal-500">
            <img alt="" src={YoutubeIcon} className="w-4 h-4" />
            <p className="text-xs">Watch Extention in action</p>
            <img alt="" src={ArrowForwardIcon} className="w-2 h-2" />
          </button>
        </div>
      </div>

      <div className="bg-[#EEEEEE] px-8 py-4 flex flex-1 h-full">
        <div className="flex flex-col">
          <div className="space-y-2 py-2">
            <div className="flex items-center">
              <p className="w-full text-xs font-semibold">
                What does Extention do with my CRM data?
              </p>
              <button>
                <img alt="" src={ArrowUpIcon} className="w-4 h-4" />
              </button>
            </div>
            <div>
              <p className="text-xs text-gray-400">
                Your CRM data and LinkedIn activity are confidential. Surfe does
                not store any of your business data, we merely pass them through
                between LinkedIn and your CRM.
              </p>
            </div>
          </div>

          <div className="space-y-2 py-2">
            <div className="flex items-center">
              <p className="w-full text-xs font-semibold">
                Do I need special permissions?
              </p>
              <button>
                <img alt="" src={ArrowDownIcon} className="w-4 h-4" />
              </button>
            </div>
            <div>
              <p className="text-xs text-gray-400 hidden">
                Your CRM data and LinkedIn activity are confidential. Surfe does
                not store any of your business data, we merely pass them through
                between LinkedIn and your CRM.
              </p>
            </div>
          </div>

          <div className="space-y-2 py-2">
            <div className="flex items-center">
              <p className="w-full text-xs font-semibold">
                I get an error, how can I get help?
              </p>
              <button>
                <img alt="" src={ArrowDownIcon} className="w-4 h-4" />
              </button>
            </div>
            <div>
              <p className="text-xs text-gray-400 hidden">
                Your CRM data and LinkedIn activity are confidential. Surfe does
                not store any of your business data, we merely pass them through
                between LinkedIn and your CRM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stepper = (props) => {
  const steps = React.Children.toArray(props.children);
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];
  const value = { activeStep, setActiveStep };
  return (
    <WelcomeStepContext.Provider value={value}>
      {currentStep}
    </WelcomeStepContext.Provider>
  );
};

export { GreetUserStep, PickCRMStep };
export default Stepper;
