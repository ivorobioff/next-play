import { FieldPath, FieldPathValue, FieldValues, Path, UseFormReturn, Validate } from 'react-hook-form';
import S from 'string';

export interface InputProps<I extends FieldValues> {
  name: Path<I>;
  useForm: UseFormReturn<I>;
  type?: 'text' | 'password' | 'email';
  label?: string;
  optional?: boolean;
  minLength?: number;
  maxLength?: number;
  validate?: Validate<FieldPathValue<I, FieldPath<I>>, I> | Record<string, Validate<FieldPathValue<I, FieldPath<I>>, I>>;
}

export default function Input<I extends FieldValues>({
  type = 'text',
  name,
  label,
  optional = false,
  useForm,
  minLength,
  maxLength,
  validate
}: InputProps<I>) {
  const { register, formState: { errors } } = useForm;
  return (<>
    <div className="py-2">
      <label className="block mb-1" htmlFor={`ctrl-${name}`}>{label || S(name).humanize().s}</label>
      <input {...register(name, {
        validate,
        required: !optional && `It's required!`,
        maxLength: maxLength && { value: maxLength, message: `The max length is ${maxLength}!`},
        minLength: minLength && { value: minLength, message: `The min length is ${minLength}!`}
      })} type={type} className="rounded w-full" />
      {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]?.message?.toString()}</p>}
    </div>
  </>);
}