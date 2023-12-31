export const Cards = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 22 15"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M20.68 0H1.32C.592 0 0 .593 0 1.321v12.334c0 .728.592 1.32 1.32 1.32h19.36c.728 0 1.32-.592 1.32-1.32V1.32C22 .593 21.408 0 20.68 0Zm.44 13.655c0 .242-.198.44-.44.44H1.32a.441.441 0 0 1-.44-.44V1.32a.44.44 0 0 1 .44-.44h19.36a.44.44 0 0 1 .44.44v12.334Z"
      />
      <path fill="currentColor" d="M21.56 3.964H.44v1.762h21.12V3.964Z" />
      <path
        fill="currentColor"
        d="M21.56 3.524H.44a.44.44 0 0 0-.44.44v1.762c0 .243.197.44.44.44h21.12a.44.44 0 0 0 .44-.44V3.964a.44.44 0 0 0-.44-.44Zm-.44 1.762H.88v-.881h20.24v.88ZM11.88 8.81H3.96a.44.44 0 0 0 0 .88h7.92a.44.44 0 0 0 0-.88ZM8.36 10.571h-4.4a.44.44 0 0 0 0 .881h4.4a.44.44 0 0 0 0-.88Z"
      />
    </svg>
  );
};
