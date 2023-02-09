import clsx from "clsx";
const TextInput = ({ name, onClick, errors, ...otherProps }) => {
  return (
    <input
      id={name}
      name={name}
      className={clsx(
        `form-input 
            block 
            py-2 
            px-3 
            border 
            border-gray-300 
            rounded-md 
            shadow-sm
            outline-none                  
            focus:border-blue-300              
            transition duration-150 
            ease-in-out 
            sm:text-sm 
            sm:leading-5 
            w-full`,
        {
          "border-red-500": errors,
        }
      )}
      onClick={onClick}
      {...otherProps}
    />
  );
};

export default TextInput;
