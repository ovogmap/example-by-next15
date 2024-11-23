"use server";

const BASE_URL = "https://cataas.com";

interface CatPhotoResponse {
  url?: string;
  message?: string;
  _id?: string;
}

export async function getCatPhoto(): Promise<CatPhotoResponse> {
  const response = await fetch(`${BASE_URL}/cat?json=true`);
  const data = (await response.json()) as CatPhotoResponse;
  if (!response.ok) {
    return {
      url: undefined,
      message: "고양이 사진을 가져 오기에 실패했습니다.",
    };
  }
  return { url: `${BASE_URL}/cat/${data._id}`, message: undefined };
}
