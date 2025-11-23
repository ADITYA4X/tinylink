import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const links = await prisma.link.findMany({
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json(links);
  }

  if (req.method === "POST") {
    const { code, url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    let finalCode = code;

    if (!finalCode || finalCode.trim() === "") {
      finalCode = Math.random().toString(36).substring(2, 8);
    }

    const existingLink = await prisma.link.findUnique({
      where: { code: finalCode },
    });

    if (existingLink) {
      return res.status(400).json({ error: "Code already exists" });
    }

    const newLink = await prisma.link.create({
      data: {
        code: finalCode,
        url,
      },
    });

    return res.status(201).json(newLink);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
