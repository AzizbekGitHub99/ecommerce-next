interface DynamicMetadata {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default DynamicMetadata;
