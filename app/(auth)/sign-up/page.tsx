'use client'

import AuthPane from "@/components/auth/auth-pane.component";
import Input from "@/components/form/input.component";
import Url from '@/components/common/url.component';
import Submit from "@/components/form/submit.component";
import Form from "@/components/form/form.component";
import { useForm } from "react-hook-form"

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {

  const hook = useForm<Inputs>();

  return (<AuthPane title="Sign-up">
    <Form useForm={hook} onSubmit={data => console.log(data)}>
      <Input useForm={hook} name="name" />
      <Input useForm={hook} name="email" type="email" label="E-mail" />
      <Input useForm={hook} type="password" name="password" />
      <div className="flex justify-between">
        <p>You have an account already? <Url url="/sign-in" text="Sign in" /> </p>
        <Submit title="Sign up" />
      </div>
    </Form>
  </AuthPane>);
}