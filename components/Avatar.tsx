// import Image from "next/image";
// import Link from "./Link";
// import { AuthorsType } from "interfaces/authors";

// type FrontMatter = {
//   frontMatter?: AuthorsType;
// };

// const Avatar = ({ frontMatter }: FrontMatter) => {
//   return (
//     <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
//       <dt className="sr-only">Authors</dt>
//       <dd>
//         <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
//           {authorDetails.map((author) => (
//             <li className="flex items-center space-x-2" key={author.name}>
//               {author.avatar && (
//                 <Image
//                   src={avatar}
//                   alt="avatar"
//                   width="192px"
//                   height="192px"
//                   className="h-48 w-48 rounded-full"
//                 />
//               )}
//               <dl className="whitespace-nowrap text-sm font-medium leading-5">
//                 <dt className="sr-only">Name</dt>
//                 <dd className="text-gray-900 dark:text-gray-100">
//                   {author.name}
//                 </dd>
//                 <dt className="sr-only">Twitter</dt>
//                 <dd>
//                   {author.twitter && (
//                     <Link
//                       href={author.twitter}
//                       className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//                     >
//                       {author.twitter.replace("https://twitter.com/", "@")}
//                     </Link>
//                   )}
//                 </dd>
//               </dl>
//             </li>
//           ))}
//         </ul>
//       </dd>
//     </dl>
//   );
// };
