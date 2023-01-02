import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, usage, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]} ${
        usage || ""
      }`}
      {...otherProps}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
