import { z } from "zod";

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

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "name is requer"),
  email: z.email().min(1, "email is requer"),
  phone: z
    .string()
    .min(11, "phone no must be 11 digit")
    .regex(/^\d+$/, "Phone number must be only number"),
  addres: z.string().min(1, "address is required"),
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "card holder is requer"),
  cardNumber: z.string().min(16, "card Number is requer"),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|[0-2])\/\d{2}$/, "Expiration date must be in MM/YY"),
  cvv: z.string().min(3, "address is required"),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
