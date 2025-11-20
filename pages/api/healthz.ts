import type { NextApiRequest, NextApiResponse } from "next";

type HealthzRequest = NextApiRequest;

type HealthzResponse = {
  ok: boolean;
  uptime: number;
  timestamp: string;
};

export default function handler(
  req: HealthzRequest,
  res: NextApiResponse<HealthzResponse>
) {
  const uptime: number = process.uptime();
  const timestamp: string = new Date().toISOString();

  res.status(200).json({
    ok: true,
    uptime,
    timestamp,
  });
}
