import {
  IFindPopularPosts,
  IFindResponse,
  IFindTagResponse,
} from './shared.interface'

import api from '../../services/api'

export const findPost = async (search?: string, tag?: string) => {
  return api.get<IFindResponse[]>(`/posts`, {
    params: {
      ...(search && { Titulo_containss: search }),
      ...(tag && { 'Tags.id': tag }),
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
