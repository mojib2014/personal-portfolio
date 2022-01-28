import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).use().process(markdown);
  return result.toString();
}
