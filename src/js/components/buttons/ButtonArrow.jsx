
export const ButtonArrow = ({btnStyle, title, iconPosition, icon, handleClick, disabled}) => {
  return (
    <button className={btnStyle} onClick={handleClick} disabled={disabled}>
      <a
        href="#"
        className={'flex justify-center items-center'}
      >
        {iconPosition === 'after' &&  icon}
        <span className="">{title}</span>
        {iconPosition === 'before' &&  icon}
      </a>
    </button>
  );
};
