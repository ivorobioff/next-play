export interface ButtonProps {
  title: string;
  toLeft?: boolean
}

export default function Button({ title }: ButtonProps) {
  return (<>
    <button type="submit" className="text-white bg-lime-600 rounded hover:bg-lime-700 p-2 font-bold">{ title }</button>
  </>);
}