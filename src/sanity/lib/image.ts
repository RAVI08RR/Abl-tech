import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./client";

const builder = imageUrlBuilder({ projectId, dataset });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImage(source: any) {
  return builder.image(source);
}

