import MainLayout from "../../../layouts/MainLaout";
import { Brand } from "../components/Brand";
import { LoginForm } from "../components/LoginForm";


export function LoginView() {

      return (
        <MainLayout>
            <Brand />
            <LoginForm />
        </MainLayout>
      )
}
