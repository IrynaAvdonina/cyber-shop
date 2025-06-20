export type TProductCard = {
  id: number,
  title: string,
  price: number,
  stock: number,
  category: string,
  thumbnail?: string,
  images: string[]
}

export type TProduct = TProductCard & {
  description: string,
  rating: number,
  availabilityStatus: string,
  returnPolicy: string,
  shippingInformation: string,
  warrantyInformation: string
}

export type TProductCardProps =
  {
    product: TProductCard;
  }

export type TProductCardList =
  {
    products: TProductCard[];
  }

export type TCartItemsProps =
  {
    product: TProductCard,
    updateQuantity: (productID: number, newQuantity: number) => void,
    removeItem: (productID: number) => void,
  }

export type TItemCart =
  {
    productID: number,
    quantity: number
  }
