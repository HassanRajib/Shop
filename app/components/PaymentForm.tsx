import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema,  } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FiShoppingCart } from 'react-icons/fi';

const PaymentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentFormSchema),
      });
    
      const router = useRouter();
    
      const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
        
      };
    
      return (
        <form
          action=""
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handlePaymentForm)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="cardHolder" className="text-xs text-gray-600 font-medium">
              Name on card
            </label>
            <input
              className="border-b border-gray-200 py-2 outline-none text-sm"
              type="text"
              id="cardHolder"
              placeholder="john doe"
              {...register("cardHolder")}
            />
            {errors.cardHolder && (
              <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
            )}
          </div>
          {/* email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="cardNumber" className="text-xs text-gray-600 font-medium">
              Card Number
            </label>
            <input
              className="border-b border-gray-200 py-2 outline-none text-sm"
              type="text"
              id="cardNumber"
              placeholder="123456789"
              {...register("cardNumber")}
            />
            {errors.cardNumber && (
              <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
            )}
          </div>
          {/* phone */}
          <div className="flex flex-col gap-1">
            <label htmlFor="expirationDate" className="text-xs text-gray-600 font-medium">
              Expiration Date
            </label>
            <input
              className="border-b border-gray-200 py-2 outline-none text-sm"
              type="text"
              id="expirationDate"
              placeholder="01/28"
              {...register("expirationDate")}
            />
            {errors.expirationDate && (
              <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
            )}
          </div>
          {/* address */}
          <div className="flex flex-col gap-1">
            <label htmlFor="cvv" className="text-xs text-gray-600 font-medium">
              CVV
            </label>
            <input
              className="border-b border-gray-200 py-2 outline-none text-sm"
              type="text"
              id="cvv"
              placeholder="123"
              {...register("cvv")}
            />
            {errors.cvv && (
              <p className="text-xs text-red-500">{errors.cvv.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-3"
          >
            Checkout
            <FiShoppingCart className="w-15px h-15px" />
          </button>
        </form>
      );
    };
  

export default PaymentForm