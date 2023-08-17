import { ReactElement } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface FormProps<I extends FieldValues> {
  useForm: UseFormReturn<I>;
  children?: ReactElement | ReactElement[];
  onSubmit: (data: I) => void;
}

export default function Form<I extends FieldValues>({ children, onSubmit, useForm }: FormProps<I>) {
  const { handleSubmit } = useForm;
  return (<form onSubmit={handleSubmit(onSubmit)}>{children}</form>);
}