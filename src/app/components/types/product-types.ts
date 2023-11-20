export type ProductEntity = {
  id: number;
  name: string;
  value: number;
  imgUrl?: string;
};

export type ProductDTO = Omit<ProductEntity, 'id'>;
