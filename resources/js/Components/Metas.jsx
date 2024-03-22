import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

dayjs.extend(relativeTime);

const Meta = ({ meta }) => {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    const { data, setData, patch, processing, reset, errors } = useForm({
        title: meta.name,
        start_date: meta.start_date,
        end_date: meta.end_date,
    });
    const alert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1000,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        patch(route("metas.update", meta.id), {
            onSuccess: () => {
                setEditing(false);
                alert();
            },
        });
    };

    return (
            <div className="p-5 flex space-x-2 mx-6  bg-indigo-400 shadow-sm rounded-lg divide-y-8 mt-5 w-80">
                <div className=" flex-row grid grid-cols-1 gap-4 place-items-start">
                    <img src="puntos.svg" alt="" />
                </div>

                <div className="flex-1 border-none">
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-gray-800">
                                {meta.user.name}
                            </span>
                            <small className="ml-2 text-sm text-gray-600">
                                {dayjs(meta.created_at).fromNow()}
                            </small>
                            {meta.created_at !== meta.updated_at && (
                                <small className="text-sm text-gray-600">
                                    &middot; edited
                                </small>
                            )}
                            {meta.created_at !== meta.updated_at && (
                                <small className="text-sm text-gray-600"></small>
                            )}
                        </div>
                        {meta.user.id === auth.user.id && (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button>
                                        <img src="editar.svg" alt="" />
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <button
                                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-100 transition duration-150 ease-in-out"
                                        onClick={() => setEditing(true)}
                                    >
                                        editar
                                    </button>
                                    <Dropdown.Link
                                        as="button"
                                        href={route(
                                            "metas.destroy",
                                            meta.id
                                        )}
                                        method="delete"
                                    >
                                        delete
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        )}
                    </div>
                    <div>
                        {editing ? (
                            <form onSubmit={submit}>
                                <input
                                    placeholder={meta.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    type="text"
                                    className="mt-4  mb-3 block w-full border-gray-300cfocus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    autoFocus
                                />
                                <input
                                    placeholder={meta.start_date}
                                    onChange={(e) =>
                                        setData("start_date", e.target.value)
                                    }
                                    type="date"
                                    className="mt-4  mb-3 block w-full border-gray-300cfocus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    autoFocus
                                />
                                <input
                                    placeholder={meta.end_date}
                                    onChange={(e) =>
                                        setData("end_date", e.target.value)
                                    }
                                    type="date"
                                    className="mt-4  mb-3 block w-full border-gray-300cfocus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                ></input>
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                />

                                <div className="space-x-2">
                                    <PrimaryButton className="mt-4">
                                        save
                                    </PrimaryButton>
                                    <button
                                        className="mt-4 inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                        onClick={() =>
                                            setEditing(false) && reset()
                                        }
                                    >
                                        cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <>
                                <p className="mt-4 text-2xl font-bold text-gray-800">
                                    {meta.title}
                                </p>
                                <p className="mt-4  text-gray-800">
                                    {meta.start_date}
                                </p>
                                <p className="mt-4 text-lg text-gray-800">
                                    {meta.end_date}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>

    );
};

export default Meta;
