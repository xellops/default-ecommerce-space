import { useSpaceConfiguration } from "@/contexts";
import { Storage, Text } from "@/utils";
import Image from "next/image";

export const Logo = () => {
  const { spaceConfiguration } = useSpaceConfiguration();

  return (
    <div className="relative flex items-center gap-2">
      {spaceConfiguration.logoImagePath ? (
        <div className="flex h-12 sm:h-13">
          <Image
            src={Storage.get(spaceConfiguration.logoImagePath)}
            alt={spaceConfiguration.slug}
            width={50}
            height={50}
            className="w-full object-contain"
          />
        </div>
      ) : null}

      <div
        className="font-semibold hidden sm:block text-lg"
        style={{ color: spaceConfiguration.brandColor }}
      >
        {spaceConfiguration.name.length > 14 ? (
          <div>{Text.getInitials(spaceConfiguration.name)}</div>
        ) : (
          spaceConfiguration.name
        )}
      </div>
    </div>
  );
};
