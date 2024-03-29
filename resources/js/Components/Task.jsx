import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

dayjs.extend(relativeTime);

const Taks = ({ taks }) => {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    const { data, setData, patch, processing, reset, errors } = useForm({
        title: taks.title,
        description: taks.description,
        start_date: taks.start_date,
        end_date: taks.end_date,
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
        console.log(data);
        e.preventDefault();
        patch(route("task.update", taks.id), {
            onSuccess: () => {
                setEditing(false);
                alert();
            },
        });
    };

    return (
        <div className="p-5 flex space-x-2  bg-indigo-400 shadow-sm rounded-lg divide-y-8 mt-5 w-80">
            <div className=" flex-row grid grid-cols-1 gap-4 place-items-start">
                <img src="puntos.svg" alt="" />
            </div>

            <div className="flex-1 border-none">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{taks.user.name}</span>
                        <small className="ml-2 text-sm text-gray-600">
                            {dayjs(taks.created_at).fromNow()}
                        </small>
                        {taks.created_at !== taks.updated_at && (
                            <small className="text-sm text-gray-600">
                                &middot; edited
                            </small>
                        )}
                        {taks.created_at !== taks.updated_at && (
                            <small className="text-sm text-gray-600"></small>
                        )}
                    </div>
                    {taks.user.id === auth.user.id && (
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
                                    href={route("task.destroy", taks.id)}
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
                                placeholder={taks.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                type="text"
                                className="mt-4  mb-3 block w-full border-gray-300cfocus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                autoFocus
                            />

                            <input
                                 placeholder={taks.start_date}
                                onChange={(e) =>
                                    setData(
                                        "start_date", e.target.value,
                                     )
                                }
                                type="date"
                                autoFocus
                                className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                            <input
                                onChange={(e) =>
                                    setData(
                                       "end_date", e.target.value,
                                    )
                                }
                                type="date"
                                placeholder={taks.end_date}
                                autoFocus
                                className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />

                            <textarea
                                placeholder={taks.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                className=" mt-4  w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            ></textarea>
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
                                    onClick={() => setEditing(false) && reset()}
                                >
                                    cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <p className="mt-4 text-1xl font-bold text-gray-800">
                                {taks.title}
                            </p>
                            <p className="mt-4 text-lg text-gray-800">
                                {taks.description}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Taks;
