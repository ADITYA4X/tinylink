import { prisma } from "@/lib/prisma";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const code = params?.code;

  if (typeof code !== "string") {
    return {
      notFound: true,
    };
  }

  const link = await prisma.link
    .update({
      where: { code },
      data: {
        clicks: { increment: 1 },
        lastClicked: new Date(),
      },
    })
    .catch(() => null);

  if (!link) {
    return {
      notFound: true,
    };
  }

  return {
    redirect: {
      destination: link.url,
      permanent: false,
    },
  };
};

export default function RedirectPage() {
  return null;
}
