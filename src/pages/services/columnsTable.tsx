import { ServiceProps } from "./index";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const DataColumnsTableService = ({
    handleClickEdit,
    handleClickRemove,
}: any) => {
    const columnsTableService: ColumnDef<ServiceProps>[] = [
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("status")}</div>
            ),
        },
        {
            accessorKey: "name",
            header: "Nome",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("name")}</div>
            ),
        },
        {
            accessorKey: "price",
            header: () => <div>Preço</div>,
            cell: ({ row }) => {
                const amount = parseFloat(row.getValue("price"));

                const formatted = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(amount);

                return <div>{formatted}</div>;
            },
        },
        {
            id: "actions",
            header: () => <div className="text-right">Ações</div>,
            enableHiding: false,
            cell: ({ row }) => {
                return (
                    <div className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                    onClick={() =>
                                        handleClickEdit(row.original)
                                    }
                                >
                                    Editar
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() =>
                                        handleClickRemove(row.original)
                                    }
                                >
                                    Excluir
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                );
            },
        },
    ];

    return columnsTableService;
};
