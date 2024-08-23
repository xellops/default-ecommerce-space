import Link from "next/link";

export interface AuthWrapperProps {
  children?: any;
  headline?: string;
  tagline?: string;
}

export const AuthWrapper = ({
  children,
  headline,
  tagline,
}: AuthWrapperProps) => {
  return (
    <div className="w-96 mx-auto grid gap-4 my-24">
      <div className="border-slate-2000 borderd px-4 rounded-xl grid gap-4">
        <div className=" mb-2 text-center">
          <h1 className="mb-2  text-xl font-medium">{headline || "ZoneX"}</h1>
          <p className="text-sm text-stone-600">
            {tagline || "Your favourite marketplaces online!"}
          </p>
        </div>

        <div>{children}</div>
      </div>

      {/* <p className="text-sm text-center">
        <span>Need help? Contact </span>
        <Link className="text-blue-600" href="mailto:support@xellops.com">
          support.
        </Link>
      </p> */}
    </div>
  );
};
