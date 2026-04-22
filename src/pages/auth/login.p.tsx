import { useState } from "react";
import { Link } from "react-router-dom";

// ? Components
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

export function Login(): React.ReactNode {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-64 space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <div className="space-y-2">
        <Field title="Email" value={email} setValue={setEmail} />
        <Field title="Password" value={password} setValue={setPassword} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-500">
            Register here
          </Link>
        </div>
        <Button className="w-full">Login</Button>
      </div>
    </div>
  );
}
