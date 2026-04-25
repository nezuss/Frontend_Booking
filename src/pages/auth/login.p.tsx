import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

// ? Api
import { login } from "@/api/auth";

// ? Components
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

export function Login(): React.ReactNode {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [jwt, setJwt] = useCookies(["token"]);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const result = await login(email, password);

      if (result.success) {
        setError("");

        setJwt("token", result.content?.token, {
          path: "/",
          secure: true,
          maxAge: 3600,
        });

        navigate("/");
      } else {
        setError(result.content?.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="w-64 space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
      </div>
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
        <Button className="w-full" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
}
