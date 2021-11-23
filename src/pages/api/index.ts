import { MicroCmsClient } from "./client";

export async function getPhotographer() {
  const photographers = await MicroCmsClient.get({ endpoint: "photographer" });
  return photographers.contents;
}
