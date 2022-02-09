import _ from 'lodash'
//@ts-expect-error: Let's ignore a compile error like this unreachable code
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize
  return _(items).slice(startIndex).take(pageSize).value()
}
