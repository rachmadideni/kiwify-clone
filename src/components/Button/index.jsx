import clsx from "clsx";

const Button = (props) => {
  const { fullWidth, onClick, disabled, ...otherProps } = props;
  return (
    <button
      className={clsx(
        "flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",
        {
          "w-full": fullWidth && true,
          "disabled:opacity-75": disabled && true
        }
      )}
      onClick={onClick}
      {...otherProps}
    >
      {props.children}
    </button>
  );
};

export default Button;
