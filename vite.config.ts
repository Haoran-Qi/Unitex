import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import googleReviewsHandler, {
  type GoogleReviewsRequest,
  type GoogleReviewsResponse,
} from './api/google-reviews.js'
import googlePhotoHandler from './api/google-photo.js'

type LocalApiHandler = typeof googleReviewsHandler

function parseQuery(requestUrl?: string) {
  const queryString = requestUrl?.split('?')[1] ?? ''

  return Object.fromEntries(
    queryString
      .split('&')
      .filter(Boolean)
      .map((entry) => {
        const [key, ...value] = entry.split('=')
        return [decodeURIComponent(key), decodeURIComponent(value.join('='))]
      }),
  )
}

async function runLocalApi(
  handler: LocalApiHandler,
  request: unknown,
  response: unknown,
  next: (error?: unknown) => void,
  apiKey?: string,
) {
  const apiRequest = request as GoogleReviewsRequest
  const apiResponse = response as GoogleReviewsResponse

  apiRequest.query = parseQuery(apiRequest.url)
  apiRequest.googlePlacesApiKey = apiKey
  apiResponse.status = (code: number) => {
    apiResponse.statusCode = code
    return apiResponse
  }
  apiResponse.json = (body: unknown) => {
    apiResponse.setHeader('Content-Type', 'application/json; charset=utf-8')
    apiResponse.end(JSON.stringify(body))
    return apiResponse
  }

  try {
    await handler(apiRequest, apiResponse)
  } catch (error) {
    next(error)
  }
}

function localGoogleReviewsApi(apiKey?: string): Plugin {
  return {
    name: 'local-google-reviews-api',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use('/api/google-reviews', (request, response, next) =>
        runLocalApi(googleReviewsHandler, request, response, next, apiKey))
      server.middlewares.use('/api/google-photo', (request, response, next) =>
        runLocalApi(googlePhotoHandler, request, response, next, apiKey))
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react(), localGoogleReviewsApi(env.GOOGLE_PLACES_API_KEY)],
  }
})
