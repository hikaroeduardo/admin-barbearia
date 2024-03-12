import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="h-full bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="w-full h-full bg-black/80 flex items-center justify-center p-5">
                <div className="w-full max-w-[25rem] bg-white p-10 rounded-2xl">
                    <form
                        onSubmit={(e) => handleLogin(e)}
                        className="flex flex-col gap-8"
                    >
                        <div className="text-center">
                            <h1 className="font-medium text-2xl">
                                LogoBarbearia
                            </h1>
                        </div>

                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </div>

                        <div>
                            <Label htmlFor="password">Senha</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    placeholder="********"
                                    type={showPassword ? "text" : "password"}
                                />
                                {showPassword ? (
                                    <EyeOff
                                        className="absolute top-[0.5rem] right-[0.5rem] text-[#034EA2] cursor-pointer"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                ) : (
                                    <Eye
                                        className="absolute top-[0.5rem] right-[0.5rem] text-[#034EA2] cursor-pointer"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                )}
                            </div>
                        </div>

                        <div>
                            <Button variant="blue" className="w-full">
                                Entrar
                            </Button>
                        </div>

                        <div className="text-center">
                            <p>
                                Ainda não tem uma conta?{" "}
                                <Link to="/cadastro">
                                    <span className="text-[#034EA2] font-medium">
                                        Cadastre-se.
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
