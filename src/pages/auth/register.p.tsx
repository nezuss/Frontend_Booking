import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// ? Api
import { register } from "@/api/auth";

// ? Components
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

export function Register(): React.ReactNode {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (password !== passwordConfirm) {
        setError("Passwords do not match");
        return;
      }

      const result = await register(name, email, password);

      if (result.success) {
        setError("");
        navigate("/auth/login");
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
        <h2 className="text-2xl font-bold">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="space-y-2">
        <Field title="Name" value={name} setValue={setName} />
        <Field title="Email" value={email} setValue={setEmail} />
        <Field title="Password" value={password} setValue={setPassword} />
        <Field
          title="Password Confirm"
          value={passwordConfirm}
          setValue={setPasswordConfirm}
        />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500">
            Login here
          </Link>
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Register
        </Button>
      </div>
    </div>
  );
}
