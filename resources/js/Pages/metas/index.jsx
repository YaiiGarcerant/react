import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Meta from "@/Components/Metas";
import Swal from "sweetalert2";
const index = ({ auth,metas }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        start_date: "",
        end_date: "",
    });

    const alert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("metas.store"), {
            onSuccess: () => {
                reset();
                alert();
            },
        });
    };
    return (
        <div>
            <AuthenticatedLayout user={auth.user}>
                <div className="py-12">
                    <div className="sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Metas
                                </h2>
                            </div>

                            <Head title="Categories" />
                            <div className="grid grid-flow-col gap-4 p-4 sm:p-6 lg:p-8">
                                <form
                                    onSubmit={submit}
                                    className="sm:grid sm:grid-cols-1 sm:gap-4"
                                >
                                    <div className="mx-0">
                                        <input
                                            value={data.title}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    title: e.target.value,
                                                })
                                            }
                                            type="text"
                                            placeholder="Title"
                                            autoFocus
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <InputError
                                            message={errors.title}
                                            className="mt-2"
                                        />

                                        <div className="flex flex-col sm:flex-row sm:space-x-4">
                                            <div className="sm:w-1/2">
                                                <input
                                                    value={data.start_date}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            start_date:
                                                                e.target.value,
                                                        })
                                                    }
                                                    type="date"
                                                    placeholder="URL"
                                                    autoFocus
                                                    className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <InputError
                                                    message={errors.start_date}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="sm:w-1/2">
                                                <input
                                                    value={data.end_date}
                                                    onChange={(e) =>
                                                        setData({
                                                            ...data,
                                                            end_date:
                                                                e.target.value,
                                                        })
                                                    }
                                                    type="date"
                                                    placeholder="URL"
                                                    autoFocus
                                                    className="mt-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <InputError
                                                    message={errors.end_date}
                                                    className="mt-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <PrimaryButton
                                            className="mt-4 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            disabled={processing}
                                        >
                                            Create
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-10 sm:flex-row sm:flex-wrap justify-center">
                            {
                            metas?.map(meta =>
                                <Meta
                                key={meta.id} meta={meta} />
                            )}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default index;
