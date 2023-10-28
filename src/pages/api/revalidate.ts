import { isValidRequest } from "@sanity/webhook"
import type { NextApiRequest, NextApiResponse } from "next"
import { revalidateTag } from "next/cache"

type Data = {
  message: string
}

const secret = process.env.SANITY_WEBHOOK_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    console.error("Must be a POST request")
    return res.status(401).json({ message: "Must be a POST request" })
  }

  if (secret && !isValidRequest(req, secret)) {
    res.status(405).json({ message: "Invalid signature" })
    return
  }

  try {
    const {
      body: { type, slug },
    } = req

    switch (type) {
      case "project":
        revalidateTag(type)
        return res.json({ message: `Revalidated "${type}" with slug "${slug}"` })
    }

    return res.json({ message: "No managed type" })
  } catch (err) {
    return res.status(500).send({ message: "Error revalidating" })
  }
}