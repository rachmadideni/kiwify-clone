import MemberLayout from "layouts/member.layout";
import Modal from "components/Modal";
import CloseButton from "assets/svgs/close.svg";
import Stepper, { GreetUserStep, PickCRMStep } from "./steps";

const Welcome = () => {
  return (
    <MemberLayout>
      <div className="flex min-h-screen bg-cover bg-linkedIn brightness-50">
        <div className="w-full min-h-full flex flex-col justify-center items-center backdrop-blur-sm">
          <Modal>
            <Modal.Dialog>
              <Modal.Header>
                <div className="flex flex-1 justify-center">
                  <p className="text-[20px] font-semibold">Extention</p>
                </div>
                <div className="flex flex-1/2">
                  <button>
                    <img alt="" className="w-3 h-3" src={CloseButton} />
                  </button>
                </div>
              </Modal.Header>
              <Modal.Body>                
                <Stepper>
                    <GreetUserStep />
                    <PickCRMStep />
                </Stepper>
              </Modal.Body>
            </Modal.Dialog>
          </Modal>
        </div>
      </div>
    </MemberLayout>
  );
};

export default Welcome;
