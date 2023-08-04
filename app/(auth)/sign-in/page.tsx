import AuthPane from "@/components/auth/auth-pane.component";
import Input from "@/components/form/input.component";
import Submit from "@/components/form/submit.component";
import Url from "@/components/common/url.component";

export default function SignIn() {
  return (<>
    <AuthPane title="Sign-In">
      <>
        <Input name="email" type="email" label="E-mail" />
        <Input name="password" type="password" />
        <div className="flex justify-between">
          <p className="text-sm">Don't have an account? <Url text="Sign up" url="/sign-up" /></p>
          <Submit title="Sign in" />
        </div>
      </>
    </AuthPane>
  </>);
}