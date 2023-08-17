export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ title, onClick, type }: ButtonProps) {
  return (<>
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-lime-600 rounded hover:bg-lime-700 p-2 font-bold">{title}</button>
  </>);
}