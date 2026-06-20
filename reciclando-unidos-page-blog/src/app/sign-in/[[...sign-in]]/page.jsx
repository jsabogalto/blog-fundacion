import { SignIn } from "@clerk/nextjs"

const LoginPage = () => {
  return (
    <div className="flex bg-black justify-center items-center h-[calc(100vh-80px)]">
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
    </div>
  )
}

export default LoginPage