'use client'

import AuthPane from "@/components/auth/auth-pane.component";
import Input from "@/components/form/input.component";
import Submit from "@/components/form/submit.component";
import Url from "@/components/common/url.component";
import { useState } from "react";
import Form from "@/components/form/form.component";

export default function SignIn() {

  return (<AuthPane title="Sign-In">
    <Form url="/api/login" onSubmit={data => console.log(data)}>
      <Input name="email" type="email" label="E-mail" />
      <Input name="password" type="password" />
      <div className="flex justify-between">
        <p>Don't have an account? <Url text="Sign up" url="/sign-up" /></p>
        <Submit title="Sign in" />
      </div>
    </Form>
  </AuthPane>);
}