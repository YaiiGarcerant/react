import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";

const index = ({ auth }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        body: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("categories.store"), {
            onSuccess: () => reset(),
        });
    };
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Calendar
                    </h2>
                }
            >
                <div className="py-12">
                    <div className=" sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="mt-5 mb-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Calendar
                                </h2>
                            </div>

                            <Head title="Categories" />
                            {/* <div className="max-w-2x1 mx-auto p-4 sm:p-6 lg:p-8">
                                <form onSubmit={submit}>
                                    <input
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
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
                                    <textarea
                                        value={data.body}
                                        onChange={(e) =>
                                            setData("body", e.target.value)
                                        }
                                        placeholder="Body"
                                        className=" mt-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <InputError
                                        message={errors.body}
                                        className="mt-2"
                                    />

                                    <div>
                                        <PrimaryButton
                                            className="mt-4 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            disabled={processing}
                                        >
                                            Create
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default index;
