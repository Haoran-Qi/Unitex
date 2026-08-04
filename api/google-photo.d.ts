import type { GoogleReviewsRequest, GoogleReviewsResponse } from './google-reviews.js'

export default function handler(
  request: GoogleReviewsRequest,
  response: GoogleReviewsResponse,
): Promise<GoogleReviewsResponse>
