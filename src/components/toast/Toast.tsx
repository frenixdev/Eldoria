import { createPortal } from "react-dom";
interface props{
  children: React.ReactNode;
  className? : string;
}
const Toast = ({children, className}:props) => {


  return createPortal(
    <div className={`${className} fixed bottom-[20%] left-[50%]  z-9999 -translate-x-[50%] px-5 py-2 rounded-xl`}>
      {children}
    </div>,
    document.body
  )
};

export default Toast
