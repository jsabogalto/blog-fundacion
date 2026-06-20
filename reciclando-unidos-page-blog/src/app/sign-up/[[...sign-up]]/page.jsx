import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <SignUp routing="path" path="/sign-up" />
    </div>
  );
};

export default RegisterPage;