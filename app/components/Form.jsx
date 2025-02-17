"use client";
import { useForm } from "react-hook-form";

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="flex flex-col items-center my-[10vh] px-[40vh] py-[10vh] bg-black text-white rounded-xl">
            <h2 className="text-xl font-semibold mb-6">Post a note!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        {...register("title", { required: "Title is required" })}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Title"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium">Discription</label>
                    <input
                        type="text"
                        {...register("discription", { required: "discription is required" })}
                        className="w-full py-4 max-w-4xl border border-gray-300 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write down you notes..."
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
