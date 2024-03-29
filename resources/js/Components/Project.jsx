import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

dayjs.extend(relativeTime);

const Project = ({ project }) => {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    const { data, setData, patch, processing, reset, errors } = useForm({
        name: project.name,
        descripcion: project.descripcion,
        url: project.url,
        image: project.image,
        start_date: project.start_date,
        end_date: project.end_date,
        categories_id: project.categories_id,
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
        patch(route("projects.update", project.id), {
            onSuccess: () => {
                setEditing(false);
                alert();
            },
        });
    };

    return (
        <div className="p-5 flex space-x-2 mx-6  bg-indigo-400 shadow-sm rounded-lg divide-y-8 mt-5 w-85">
            <div className=" flex-row grid grid-cols-1 gap-4 place-items-start">
                <img src="puntos.svg" alt="" />
            </div>

            <div className="flex-1 border-none">
                <div className="flex justify-between items-center">
                    <div>
                        {/* <span className="text-gray-800">
                                {project.user.name}
                            </span> */}
                        <small className="ml-2 text-sm text-gray-600">
                            {dayjs(project.created_at).fromNow()}
                        </small>
                        {project.created_at !== project.updated_at && (
                            <small className="text-sm text-gray-600">
                                &middot; edited
                            </small>
                        )}
                        {project.created_at !== project.updated_at && (
                            <small className="text-sm text-gray-600"></small>
                        )}
                    </div>
                    {project.users_id === auth.user.id && (
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
                                href={route("projects.destroy", project.id)}
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
                        <form
                            onSubmit={submit}
                            className="sm:grid sm:grid-cols-2 sm:gap-4"
                        >
                            {/* <input
                                    placeholder={project.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    type="text"
                                    className="mt-4  mb-3 block w-full border-gray-300cfocus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    autoFocus
                                />
                                <textarea
                                    placeholder={project.descripcion}
                                    onChange={(e) =>
                                        setData("descripcion", e.target.value)
                                    }
                                    className=" mt-4  w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                ></textarea>
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                /> */}

                            <div className="mx-0">
                                <input
                                    placeholder={project.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    type="text"
                                    autoFocus
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />

                                <input
                                    placeholder={project.url}
                                    onChange={(e) =>
                                        setData("url", e.target.value)
                                    }
                                    type="text"
                                    autoFocus
                                    className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <textarea
                                placeholder={project.descripcion}
                                onChange={(e) =>
                                    setData("descripcion", e.target.value)
                                }
                                type="text"
                                className="rows-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-3 sm:mt-0"
                            />

                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                {/* <div className="sm:w-1/2">
                                    <select
                                        placeholder={project.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        type="text"
                                        className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option value="" disabled selected>
                                            Selecione Una Categoria
                                        </option>
                                        {
                                        categories?.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.categoria}
                                            </option>
                                        ))
                                        }
                                    </select>
                                </div> */}

                                <div className="sm:w-1/2 ">
                                    <input
                                        placeholder={project.image}
                                        onChange={(e) =>
                                            setData("image", e.target.value)
                                        }
                                        type="text"
                                        className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:space-x-4">
                                <div className="sm:w-1/2">
                                    <input
                                        placeholder={project.start_date}
                                        onChange={(e) =>
                                            setData("start_date", e.target.value)
                                        }
                                        type="date"
                                        autoFocus
                                        className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>

                                <div className="sm:w-1/2">
                                    <input
                                        placeholder={project.end_date}
                                        onChange={(e) =>
                                            setData("end_date", e.target.value)
                                        }
                                        type="date"
                                        autoFocus
                                        className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
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
                            <p className="mt-4 text-2xl font-bold text-gray-800">
                                {project.name}
                            </p>
                            <p className="mt-4 text-lg text-gray-800">
                                {project.url}
                            </p>
                            <p className="mt-4 text-lg text-gray-800">
                                {project.descripcion}
                            </p>
                            <p className="mt-4 text-lg text-gray-800">
                                {project.categories_id}
                            </p>
                            <p className="mt-4 text-lg text-gray-800">
                                {project.image}
                            </p>
                            <p className="mt-4 text-lg text-gray-800">
                                {project.start_date}
                            </p>
                            <p className="mt-4 text-lg text-gray-800">
                                {project.end_date}
                            </p>

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
