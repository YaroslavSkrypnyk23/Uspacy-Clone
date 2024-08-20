const Button = ({
  background,
  padding,
  textColor,
  border,
  hover,
  textContent,
  fullWidth,
}) => {
  return (
    <button
      className={`${padding ? padding : `p-4`}  ${
        border ? border : `border-none`
      } ${background ? background : `bg-white`}  ${
        textColor ? textColor : `text-white`
      }  ${hover ? hover : `hover:bg-black`} ${
        fullWidth ? `w-[229px] h-[58px]` : fullWidth
      } outline-none rounded-full flex items-center justify-center transition-all duration-500 ease-in-out font-medium`}
    >
      {textContent}
    </button>
  );
};

export default Button;
