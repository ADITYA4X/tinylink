import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  res.write(
    JSON.stringify({
      ok: true,
      version: "1.0",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    })
  );

  res.end();

  return { props: {} };
};

export default function HealthCheck() {
  return null;
}
