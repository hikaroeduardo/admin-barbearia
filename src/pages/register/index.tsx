import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="h-full bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover bg-center">
            <div className="w-full h-full bg-black/80 flex items-center justify-center p-5">
                <div className="w-full max-w-[35rem] bg-white p-10 rounded-2xl">
                    <form
                        onSubmit={(e) => handleLogin(e)}
                        className="flex flex-col gap-8"
                    >
                        <div className="text-center">
                            <h1 className="font-medium text-2xl">
                                Cadastre-se
                            </h1>
                        </div>

                        <div>
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                placeholder="Nome completo..."
                                type="text"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                placeholder="example@gmail.com"
                                type="email"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-between">
                            <div className="w-full">
                                <Label htmlFor="password">Senha</Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        placeholder="********"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
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

                            <div className="w-full">
                                <Label htmlFor="confirmPassword">
                                    Confirmar senha
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        placeholder="********"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                    />

                                    {showConfirmPassword ? (
                                        <EyeOff
                                            className="absolute top-[0.5rem] right-[0.5rem] text-[#034EA2] cursor-pointer"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                        />
                                    ) : (
                                        <Eye
                                            className="absolute top-[0.5rem] right-[0.5rem] text-[#034EA2] cursor-pointer"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <Button variant="blue" className="w-full">
                                Cadastrar
                            </Button>
                        </div>

                        <div className="text-center">
                            <p>
                                Ja possui uma conta?{" "}
                                <Link to="/">
                                    <span className="text-[#034EA2] font-medium">
                                        Faça o login.
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
