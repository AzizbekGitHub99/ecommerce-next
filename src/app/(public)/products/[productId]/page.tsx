import { notFound } from 'next/navigation'
import axios from "axios";
import DynamicMetadata from "@/types/dynamic-metadata";
import { ENDPOINT } from '@/constants';
import ProductType from '@/types/product';

export async function generateMetadata({
  params: { productId },
}: DynamicMetadata) { 
  try {
    const {
      data: { title, description }
    } = await axios.get(`${ENDPOINT}/product/${productId}`);
    return {
      title,
      description: description,
    };
  } catch(err: any) {
    return {
      title: "Post",
    };
  }
}

async function getProduct(id: string) {
  try {
    const { data } = await axios.get(
      `${ENDPOINT}/product/${id}`
    );
    return data as ProductType;
  } catch (err: any) {
    if (err.response.status === 404) {
      return null
    } else {
      throw new Error(err.response.data);
    }
  }
}

const ProductPage = async ({
  params: { productId },
}: {
  params: { productId: string };
}) => {
  const data = await getProduct(productId);
  if (data === null) notFound();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default ProductPage;
