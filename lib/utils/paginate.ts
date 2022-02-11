import _ from 'lodash'
import {FrontMatterTypes} from '@/types/index'

export function paginate(
  items: FrontMatterTypes[],
  pageNumber: number,
  pageSize: number,
) {
  const startIndex = (pageNumber - 1) * pageSize
  return _(items).slice(startIndex).take(pageSize).value()
}
