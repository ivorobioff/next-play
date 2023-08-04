import Button, { ButtonProps } from "./button.component";

export interface SubmitProps extends ButtonProps {

}

export default function Submit(props: SubmitProps) {
  return (<div className="text-right">
    <Button {...props} />
  </div>);
}