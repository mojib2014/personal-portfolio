import { FrontMatterInterface } from "./frontMatter";

export interface PostType {
  mdxSource: string;
  frontMatter: FrontMatterInterface;
  toc: {
    depth: number;
    fromHeading: number;
    toHeading: number;
    asDisclosure: boolean;
    exclude: string;
    value: string;
  };
}
