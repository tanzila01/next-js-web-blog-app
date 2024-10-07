import { handleGithubLogin } from "@/lib/actions";
import { auth } from "@/lib/auth"
import styles from './login.module.css'
import LoginForm from "@/components/loginForm/loginForm";

async function LoginPage() {

  const session = await auth();
  console.log("session", session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
    // <div>
    //   <form action={handleGithubLogin}>
    //       <button>Login with Github</button>
    //     </form>
    // </div>
  )
}

export default LoginPage