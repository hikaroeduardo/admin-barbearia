import { DataTable } from "@/components/dataTable";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataColumnsTableService } from "./columnsTable";
import { useState } from "react";

export type ServiceProps = {
    id: string;
    status: string;
    name: string;
    price: string;
};

export default function Services() {
    const [dataRows, setDataRows] = useState<ServiceProps[]>([
        {
            id: "1",
            status: "ativo",
            name: "Corte de cabelo",
            price: "25",
        },
        {
            id: "2",
            status: "ativo",
            name: "Barba",
            price: "15",
        },
    ]);

    const [openDialogNewService, setOpenDialogNewService] =
        useState<boolean>(false);
    const [openDialogEdit, setOpenDialogEdit] = useState<boolean>(false);
    const [nameNewService, setNameNewService] = useState<string>("");
    const [priceNewService, setPriceNewService] = useState<string>("");
    const [currentServiceName, setCurrentServiceName] = useState<string>("");
    const [currentServicePrice, setCurrentServicePrice] = useState<string>("");
    const [currentServiceId, setCurrentServiceId] = useState<string>("");

    const handleClickEdit = (row: any) => {
        setOpenDialogEdit(true);

        setCurrentServiceName(row.name);
        setCurrentServicePrice(row.price);
        setCurrentServiceId(row.id);
    };

    const columnsTableService = DataColumnsTableService({ handleClickEdit });

    const clearInputsNewService = () => {
        setNameNewService("");
        setPriceNewService("");
    };

    const addNewService = () => {
        if (nameNewService === "" && priceNewService === "") {
            alert("Todos os campos são obrigatórios!");
            return;
        }

        const newService = {
            id: (dataRows.length + 1).toString(),
            status: "ativo",
            name: nameNewService,
            price: priceNewService,
        };

        setDataRows((prevState) => [...prevState, newService]);
        setOpenDialogNewService(false);
        clearInputsNewService();
    };

    const cancelNewService = () => {
        setOpenDialogNewService(false);
        clearInputsNewService();
    };

    const editService = (id: string, name: string, price: string) => {
        const copyDataRows = dataRows.map((service) => {
            if (service.id === id) {
                return { ...service, name, price };
            }

            return service;
        });

        setDataRows(copyDataRows);
        setOpenDialogEdit(false);
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-medium text-zinc-500">Serviços</h1>

                <Dialog
                    open={openDialogNewService}
                    onOpenChange={() =>
                        setOpenDialogNewService(!openDialogNewService)
                    }
                >
                    <DialogTrigger asChild>
                        <Button variant="blue">+ Novo serviço</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Adicionar novo serviço</DialogTitle>
                            <DialogDescription>
                                Insira os dados necessários para adicionar um
                                novo serviço.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-5">
                            <div>
                                <Label htmlFor="name">Nome do serviço:</Label>
                                <Input
                                    id="name"
                                    placeholder="Ex: Corte de cabelo"
                                    value={nameNewService}
                                    onChange={(e) =>
                                        setNameNewService(e.target.value)
                                    }
                                />
                            </div>

                            <div>
                                <Label htmlFor="price">Preço do serviço:</Label>
                                <Input
                                    id="price"
                                    placeholder="Ex: 15,00"
                                    type="number"
                                    step="0.01"
                                    min={0}
                                    value={priceNewService}
                                    onChange={(e) =>
                                        setPriceNewService(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <DialogFooter className="flex gap-5">
                            <Button
                                className="flex-1"
                                variant="secondary"
                                onClick={cancelNewService}
                            >
                                Cancelar
                            </Button>

                            <Button
                                className="flex-1"
                                variant="blue"
                                onClick={addNewService}
                            >
                                Adicionar
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <DataTable
                data={dataRows}
                columns={columnsTableService}
                dataFilter="name"
                placeholder="Nome do corte..."
            />

            <Dialog
                open={openDialogEdit}
                onOpenChange={() => setOpenDialogEdit(!openDialogEdit)}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar serviço</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-5">
                        <div>
                            <Label htmlFor="name">Nome do serviço:</Label>
                            <Input
                                id="name"
                                placeholder="Ex: Corte de cabelo"
                                value={currentServiceName}
                                onChange={(e) =>
                                    setCurrentServiceName(e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <Label htmlFor="price">Preço do serviço:</Label>
                            <Input
                                id="price"
                                placeholder="Ex: 15,00"
                                type="number"
                                step="0.01"
                                min={0}
                                value={currentServicePrice}
                                onChange={(e) =>
                                    setCurrentServicePrice(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <DialogFooter className="flex gap-5">
                        <Button
                            className="flex-1"
                            variant="secondary"
                            onClick={() => setOpenDialogEdit(false)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            className="flex-1"
                            variant="blue"
                            onClick={() =>
                                editService(
                                    currentServiceId,
                                    currentServiceName,
                                    currentServicePrice
                                )
                            }
                        >
                            Editar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
