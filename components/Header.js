import { signIn, signOut } from "auth"
import { auth } from "auth"
import Link from 'next/link'

function SignIn({
  provider,
  ...props
}) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <button className="user-sign-button" {...props}>Sign In</button>
    </form>
  )
}

function SignOut(props) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="user-sign-button" {...props}>
        Sign Out
      </button>
    </form>
  )
}

export default async function Header() {
  const session = await auth()
  return (
    <header className="user-header">
        <Link href="/client">Client Side Component</Link>
        {
          !session?.user ? 
          <SignIn /> : 
          <span className="user-content">
             <span className="user-name">
                {session?.user.name}  
             </span>
            <SignOut />
          </span>
        }
    </header>
  )
}
