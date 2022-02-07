import fs from "fs";
import path from "path";

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const flattenArray = (input: array) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    []
  );

const map = (fn) => (input: array) => input.map(fn);

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = (prefix: string) => (extraPath) => path.join(prefix, extraPath);

const getAllFilesRecursively = (folder: string) =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray
  )(folder);

export default getAllFilesRecursively;
