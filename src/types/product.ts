import CategoryType from "./category";
import ImageType from "./image";

export default interface ProductType {
  checked: boolean;
  sold: number;
  _id: string;
  title: string;
  price: number;
  description: string;
  image: ImageType;
  quantity: number;
  category: CategoryType
  createdAt: string;
  updatedAt: string;
}
