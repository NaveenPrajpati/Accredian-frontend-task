import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-700">Your Name</label>
        <input
          type="text"
          {...register("referrerName", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.referrerName && (
          <span className="text-red-500">Your name is required</span>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Your Email</label>
        <input
          type="email"
          {...register("referrerEmail", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.referrerEmail && (
          <span className="text-red-500">Your email is required</span>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Friend's Name</label>
        <input
          type="text"
          {...register("refereeName", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.refereeName && (
          <span className="text-red-500">Friend's name is required</span>
        )}
      </div>
      <div>
        <label className="block text-gray-700">Friend's Email</label>
        <input
          type="email"
          {...register("refereeEmail", { required: true })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 p-2"
        />
        {errors.refereeEmail && (
          <span className="text-red-500">Friend's email is required</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
