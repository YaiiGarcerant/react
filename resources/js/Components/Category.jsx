import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";

dayjs.extend(relativeTime);

const Category = ({ category }) => {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: category.name,
        descripcion: category.descripcion,
    });
    const submit = (e) => {
        e.preventDefault();
        patch(
            route("categories.update", category.id, {
                onSuccess: () => setEditing(false),
            })
        );
    };

    return (
        <div className="p-1 space-x-2 ">
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                d="M8 12H8.00901M12.0045 12H12.0135M15.991 12H16"
                                stroke="#ffffff"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>{" "}
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="#ffffff"
                                stroke-width="1.5"
                            ></circle>{" "}
                        </g>
                    </svg>
                </div>

                <div className="basis-1/2 justify-items-end">
                        {category.user.id === auth.user.id && (
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    Cronograma
                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link>
                                                <div className="">
                                                    <ResponsiveNavLink
                                                        href={route("task.index")}
                                                        active={route().current(
                                                            "task.index"
                                                        )}
                                                    >
                                                        Tasks
                                                    </ResponsiveNavLink>
                                                </div>
                                            </Dropdown.Link>
                                            <Dropdown.Link>
                                                <div className="">
                                                    <ResponsiveNavLink
                                                        href={route("metas.index")}
                                                        active={route().current(
                                                            "metas.index"
                                                        )}
                                                    >
                                                        Metas
                                                    </ResponsiveNavLink>
                                                </div>
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                        )}
                </div>
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">
                            {category.user.name}
                        </span>
                        <small className="ml-2 text-sm text-gray-600">
                            {dayjs(category.created_at).fromNow()}
                        </small>
                        {category.created_at !== category.updated_at && (
                            <small className="text-sm text-gray-600">
                                &middot; edited
                            </small>
                        )}
                    </div>
                    {/*  */}
                    <div>
                        {editing ? (
                            <form>
                                <input
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    autoFocus
                                />
                                <textarea
                                    value={data.descripcion}
                                    onChange={(e) =>
                                        setData("descripcion", e.target.value)
                                    }
                                    className=" mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                ></textarea>
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                />
                            </form>
                        ) : (
                            <>
                                <p className="mt-4 text-lg text-gray-800">
                                    {category.name}
                                </p>
                                <p className="mt-4 text-lg text-gray-800">
                                    {category.descripcion}
                                </p>
                            </>
                        )}
                        <p className="mt-4 text-lg text-gray-800">
                            {category.name}
                        </p>
                        <p className="mt-4 text-lg text-gray-800">
                            {category.descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
