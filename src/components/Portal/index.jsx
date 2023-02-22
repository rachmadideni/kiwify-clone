import {useState, useLayoutEffect} from 'react';
import { createPortal } from 'react-dom';

// utils: create portal DOM wrapper for portal
const createPortalWrapper = (wrapperId) => {
    const wrapperElem = document.createElement('div');
    wrapperElem.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElem)
    return wrapperElem;
} 

const Portal = ({ children, wrapperId = "portal-wrapper"}) => {
    
    const [wrapperElem, setWrapperElem] = useState(null);

    useLayoutEffect(()=>{
        let elem = document.getElementById(wrapperId);
        let systemCreated = false;
        if(!elem){
            systemCreated = true;
            elem = createPortalWrapper(wrapperId)
        }
        setWrapperElem(elem);

        // cleanup or remove previous portal DOM wrapper when unmount 
        return () => {
            if(systemCreated && elem.parentNode){
                elem.parentNode.removeChild(elem)
            }
        }

    }, [wrapperId])

    if(wrapperElem === null) return null;
    
    return createPortal(children, wrapperElem);
}

export default Portal;