import ImageType from "./image";

export default interface CategoryType {
  _id: string;
  name: string;
  image: ImageType;
  createdAt: string;
  updatedAt: string;
}