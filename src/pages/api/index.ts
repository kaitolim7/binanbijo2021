import { MicroCmsClient } from "./client";
import { Content, Page } from "./type";

export async function getPhotographer() {
  const photographers = await MicroCmsClient.get({ endpoint: "photographer" });
  return photographers.contents;
}

export async function getPageInfo(pageId: string) {
  const pages = await MicroCmsClient.get({
    endpoint: "web",
    queries: { limit: 24 },
  });
  let page = {};
  pages.contents.map((content: any) => {
    if (content.id === pageId) page = content;
  });
  return page;
}

export async function getPageIds() {
  const page = await MicroCmsClient.get({
    endpoint: "web",
    queries: { fields: ["id"], limit: 24 },
  });
  const allPage = page.contents.map((content: any) => {
    return {
      params: {
        id: content.id,
      },
    };
  });
  return allPage.filter((page: any) => page != null);
}

export async function getGirlsTopImages() {
  const page = (await MicroCmsClient.get({
    endpoint: "web",
    queries: {
      fields: [
        "id",
        "name",
        "entry_number",
        "gender",
        "top_image",
        "return_stage",
        "final_stage",
      ],
      limit: 24,
    },
  })) as Page;
  const girlsTopPages = page.contents.map((content: Content) => {
    if (content.gender[0] !== "female") return;
    return {
      id: content.id,
      entryNumber: content.entry_number,
      name: content.name,
      topImage: content.top_image,
      returnStage: content.return_stage,
      finalStage: content.final_stage,
    };
  });
  return girlsTopPages.filter((content: any) => content != null);
}
export async function getBoysTopImages() {
  const page = (await MicroCmsClient.get({
    endpoint: "web",
    queries: {
      fields: [
        "id",
        "name",
        "entry_number",
        "gender",
        "top_image",
        "return_stage",
        "final_stage",
      ],
      limit: 24,
    },
  })) as Page;
  const boysTopPages = page.contents.map((content: Content) => {
    if (content.gender[0] !== "male") return;
    return {
      id: content.id,
      entryNumber: content.entry_number,
      name: content.name,
      topImage: content.top_image,
      returnStage: content.return_stage,
      finalStage: content.final_stage,
    };
  });
  return boysTopPages.filter((content) => content != null);
}

export async function getNews() {
  const news = await MicroCmsClient.get({
    endpoint: "news",
    queries: {
      fields: ["date", "content"],
      limit: 10,
    },
  });
  return news.contents.filter((content: any) => content != null);
}
