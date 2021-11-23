import { createClient } from "microcms-js-sdk";

export const MicroCmsClient = createClient({
  serviceDomain: "bbs2021",
  apiKey: process.env.MICROCMS_API_KEY,
  // apiKey: 'f6b8cde361284e42a2a402d1405a4055289e'
});
