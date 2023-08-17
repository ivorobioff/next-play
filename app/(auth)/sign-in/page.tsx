'use client'

import AuthPane from "@/components/auth/auth-pane.component";
import Input from "@/components/form/input.component";
import Submit from "@/components/form/submit.component";
import Url from "@/components/common/url.component";
import Form from "@/components/form/form.component";
import { useForm } from "react-hook-form";

export default function SignIn() {

  const hook = useForm();

  return (<AuthPane title="Sign-In">
    <Form useForm={hook} onSubmit={data => console.log(data)}>
      <Input useForm={hook} name="email" type="email" label="E-mail" />
      <Input useForm={hook} name="password" type="password" />
      <div className="flex justify-between">
        <p>Don't have an account? <Url text="Sign up" url="/sign-up" /></p>
        <Submit title="Sign in" />
      </div>
    </Form>
  </AuthPane>);
}