export type GoogleReviewsRequest = {
  method?: string
  url?: string
  query: Record<string, string | string[] | undefined>
  googlePlacesApiKey?: string
}

export type GoogleReviewsResponse = {
  statusCode: number
  setHeader(name: string, value: string): void
  end(body?: string): void
  status(code: number): GoogleReviewsResponse
  json(body: unknown): GoogleReviewsResponse
}

export default function handler(
  request: GoogleReviewsRequest,
  response: GoogleReviewsResponse,
): Promise<GoogleReviewsResponse>
