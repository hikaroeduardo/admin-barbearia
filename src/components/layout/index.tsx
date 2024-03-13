import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const Layout = () => {
    const [hoverMenuItemDashboard, setHoverMenuItemDashboard] =
        useState<boolean>(false);
    const [hoverMenuItemClients, setHoverMenuItemClients] =
        useState<boolean>(false);
    const [hoverMenuItemServices, setHoverMenuItemServices] =
        useState<boolean>(false);

    return (
        <div>
            <div className="bg-[#034da2]">
                <div className="mx-auto p-4 max-w-[1500px] flex justify-between items-center">
                    <div>
                        <h1 className="text-white text-2xl font-medium">
                            SuaLogo
                        </h1>
                    </div>

                    <ul className="flex gap-10">
                        <Link to="/dashboard">
                            <li
                                className="text-white cursor-pointer"
                                onMouseOver={() =>
                                    setHoverMenuItemDashboard(true)
                                }
                                onMouseOut={() =>
                                    setHoverMenuItemDashboard(false)
                                }
                            >
                                Dashboard
                                <div
                                    className={`mt-1 h-0.5 m-auto rounded-sm bg-white ${
                                        hoverMenuItemDashboard
                                            ? "w-[100%]"
                                            : "w-[0%]"
                                    } transition-all duration-500`}
                                />
                            </li>
                        </Link>

                        <Link to="/clientes">
                            <li
                                className="text-white cursor-pointer"
                                onMouseOver={() =>
                                    setHoverMenuItemClients(true)
                                }
                                onMouseOut={() =>
                                    setHoverMenuItemClients(false)
                                }
                            >
                                Clientes
                                <div
                                    className={`mt-1 h-0.5 m-auto rounded-sm bg-white ${
                                        hoverMenuItemClients
                                            ? "w-[100%]"
                                            : "w-[0%]"
                                    } transition-all duration-500`}
                                />
                            </li>
                        </Link>

                        <Link to="/servicos">
                            <li
                                className="text-white cursor-pointer"
                                onMouseOver={() =>
                                    setHoverMenuItemServices(true)
                                }
                                onMouseOut={() =>
                                    setHoverMenuItemServices(false)
                                }
                            >
                                Serviços
                                <div
                                    className={`mt-1 h-0.5 m-auto rounded-sm bg-white ${
                                        hoverMenuItemServices
                                            ? "w-[100%]"
                                            : "w-[0%]"
                                    } transition-all duration-500`}
                                />
                            </li>
                        </Link>
                    </ul>

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarFallback>HE</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Sair</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-4 px-4 max-w-[1500px]">
                <Outlet />
            </div>
        </div>
    );
};
