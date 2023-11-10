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

const ClientSchema = z.object({
  name: z.string(),
  pets: z.object({
    name: z.string(),
    animal: z.string(),
    isVaccinated: z.boolean()
  }).array(),
})

export type ClientType = z.infer<typeof ClientSchema>

export const getClients = async (name: string) => {
  return request({
    method: "GET",
    url: "/api/vet/clients",
    params: {search: name}
  }, ClientSchema.array())
}





export const UpdateVaccinated = async (name: string, isVaccinated:boolean) => {
  return request({
    method: "POST",
    url: "/api/vet/pets/",
    data : {name: name, isVaccinated:isVaccinated }
  }, z.object({success: z.boolean()}))
}