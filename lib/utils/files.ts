import fs from 'fs'
import path from 'path'

const pipe =
  //@ts-expect-error: Let's ignore a compile error like this unreachable code


    (...fns) =>
    //@ts-expect-error: Let's ignore a compile error like this unreachable code
    x =>
      fns.reduce((v, f) => f(v), x)

const flattenArray = (input: []) =>
  input.reduce(
    (acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])],
    [],
  )
//@ts-expect-error: Let's ignore a compile error like this unreachable code
const map = fn => (input: []) => input.map(fn)

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile()
    ? fullPath
    : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix: string) => (extraPath: string) =>
  path.join(prefix, extraPath)

const getAllFilesRecursively = (folder: string) =>
  pipe(
    fs.readdirSync,
    map(pipe(pathJoinPrefix(folder), walkDir)),
    flattenArray,
  )(folder)

export default getAllFilesRecursively
