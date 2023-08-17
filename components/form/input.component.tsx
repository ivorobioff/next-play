import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import S from 'string';

export interface InputProps<I extends FieldValues> {
  name: Path<I>;
  useForm: UseFormReturn<I>;
  type?: 'text' | 'password' | 'email';
  label?: string;
  optional?: boolean;
  onChange?: (value: unknown) => void;
}

export default function Input<I extends FieldValues>({ 
  type = 'text', 
  name, 
  label, 
  onChange,
  optional = false,
  useForm
 }: InputProps<I>) {
  const { register, formState: { errors } } = useForm;
  return (<>
    <div className="py-2">
      <label className="block mb-1" htmlFor={`ctrl-${name}`}>{label || S(name).humanize().s}</label>
      <input {...register(name, { required: !optional })} className="rounded w-full" />
      { errors[name] && <p className="text-sm text-red-500 mt-1">It's required!</p>}
    </div>
  </>);
}