import S from 'string';

export interface InputProps {
  type?: 'text' | 'password' | 'email';
  name: string;
  label?: string;
}

export default function Input({ type = 'text', name, label }: InputProps) {
  return (<>
    <div className="py-2">
      <label className="block mb-1" htmlFor={`ctrl-${name}`}>{label || S(name).humanize().s}</label>
      <input id={`ctrl-${name}`} name={name} type={type} className="rounded w-full" />
    </div>
  </>);
}