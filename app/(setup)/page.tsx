import { InitialModal } from "@/components/moledules/InitialModel";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.userId,
        },
      },
    },
  });

  console.log(server);
  if (server) {
    redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
