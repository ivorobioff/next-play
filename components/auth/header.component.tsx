export default function Header({ title }: { title: string }) {
  return (<h1 className="border-b border-b-gray-400 mb-2 pb-1 w-full font-bold text-xl">{title}</h1>);
}