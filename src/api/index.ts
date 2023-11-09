import { z } from "zod"
import { request } from "./util"


//example
const MessageSchema = z.object({
  id: z.number(),
  content: z.string(),
  email: z.string()
})

export type Message = z.infer<typeof MessageSchema>

export const getMessages = async () => {
  return request({
    method: "GET",
    url: "/api/messages"
  }, MessageSchema.array())
}

export const postMessage = async (content: string) => {
  return request({
    method: "POST",
    url: "/api/messages",
    data: { content }
  }, MessageSchema)
}