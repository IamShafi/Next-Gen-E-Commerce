import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skBxpkp5Ixpsl5fXVVSqxy6cHuWok9eI7Bztkt9GdZIS3rNQnYX4ksblxQAKVcy0FWb73XRikD8ZVPSpXct8sQtU9s8R0VvYifiduVwX8pnmdaAEvu10kEwFWJBhQKLIrlw4DtZmHL3Ht1URc9InIKONx3oSgCCTOXw3Vy6DrIM4C95prWUm",
})
