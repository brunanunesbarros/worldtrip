import Prismic from '@prismicio/client'

export function getPrismicClient() {
  const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  return prismic;
}