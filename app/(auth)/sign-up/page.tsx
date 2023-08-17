'use client'

import AuthPane from "@/components/auth/auth-pane.component";
import Input from "@/components/form/input.component";
import Url from '@/components/common/url.component';
import Submit from "@/components/form/submit.component";
import Form from "@/components/form/form.component";
import { useForm } from "react-hook-form"
import validator from 'validator';

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {

  const hook = useForm<Inputs>();

  return (<AuthPane title="Sign-up">
    <Form useForm={hook} onSubmit={data => console.log(data)}>
      <Input useForm={hook} name="name" maxLength={255} />
      <Input useForm={hook} name="email" type="email" label="E-mail" validate={value => validator.isEmail(value) || 'Wrong e-mail format!'} />
      <Input useForm={hook} type="password" name="password" minLength={6} maxLength={255} />
      <div className="flex justify-between">
        <p>You have an account already? <Url url="/sign-in" text="Sign in" /> </p>
        <Submit title="Sign up" />
      </div>
    </Form>
  </AuthPane>);
}