import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  /* config options here */
  images: {
    domains: ["cataas.com"], // 허용할 이미지 호스트 도메인 추가
  },
};

export default withVanillaExtract(nextConfig);
