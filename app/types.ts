import {z} from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};


export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
  name:z.string().min(1,"name is requer"),
  email:z.email().min(1,"email is requer"),
  phone:z.string().min(11,"phone no must be 11 digit").regex(/^\d+$/, "Phone number must be only number"),
  addres:z.string().min(1, "address is required" )
})