export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean
}

export default function Button({ title, onClick, type, disabled }: ButtonProps) {
  return (<>
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="text-white bg-lime-600 rounded hover:bg-lime-700 p-2 font-bold disabled:bg-lime-500">{title}</button>
  </>);
}