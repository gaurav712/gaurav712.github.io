declare module "*.svg" {
  const asset: {
    src: string;
    width: number;
    height: number;
  };
  export default asset;
}
