import Header from "./header.component";
import { ReactElement } from "react";

export interface AuthPaneProps {
  title: string;
  children: ReactElement | ReactElement[];
}

export default function AuthPane({ title, children }: AuthPaneProps) {
  return (<div className="w-6/12 container mx-auto">
    <Header title={title} />
    {children}
  </div>);
}