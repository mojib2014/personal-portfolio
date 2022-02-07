export interface FrontMatterInterface {
  title: string;
  summary: string;
  slug: string;
  fileName: string;
  date: Date;
  tags: string[];
  [key: string]: any;
}
