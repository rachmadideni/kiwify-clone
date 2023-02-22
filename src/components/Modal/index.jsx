import Portal from "../Portal";

const Modal = (props) => {
    return (
        <Portal wrapperId="react-portal-modal-container">            
            <div className="fixed flex flex-col items-center justify-center inset-0 overflow-hidden top-0 left-0 z-[1055] w-full h-full overflow-y-auto">                
                {props.children}                
            </div>
        </Portal>
    )
}

const ModalDialog = (props) => <div className="flex flex-col w-[30%] h-[75%] bg-white rounded-xl items-center pt-4 overflow-y-auto">{props.children}</div>

const ModalHeader = (props) => <div className="flex h-[40px] max-h-[40px] w-full px-8 items-center">{props.children}</div>

const ModalBody = (props) => <div className="flex flex-1">{props.children}</div>

Modal.Dialog = ModalDialog;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;