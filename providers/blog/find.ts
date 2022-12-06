import api from '../../services/api'
import {
  IFindPopularPosts,
  IFindResponse,
  IFindTagResponse,
} from './shared.interface'

export const findPost = async (
  search?: string,
  tag?: string,
  page?: number,
) => {
  return api.get<IFindResponse[]>('/posts', {
    params: {
      ...(search && { Titulo_contains: search }),
      ...(tag && { 'Tags.id': tag }),
      ...(page && { _start: page }),
      ...{ _limit: 6 },
    },
  })
}

export const findTags = async () => {
  return api.get<IFindTagResponse[]>('/tags')
}

export const findEbook = async () => {
  return api.get('/materiais')
}

export const findCases = async () => {
  return api.get('/cases')
}

export const findPopularPosts = async () => {
  return api.get<IFindPopularPosts[]>('/posts')
}

export const findPostById = async (id: string) => {
  return api.get<IFindResponse>(`/posts/${id}`)
}
