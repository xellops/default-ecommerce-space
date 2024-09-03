"use client";
import { Container } from "../Container";
import Link from "next/link";
import { IconContainer } from "../IconContainer/IconContainer";
import { BiCart, BiMenu, BiUser } from "react-icons/bi";
import { Logo } from "../Logo";
import { Search } from "../Search";

export const NavBar = () => {
  return (
    <div className="py-2 shadow-sm bg-white shadow-gray-200 drop-shadow-sm w-full z-50 md:static md:top-0">
      <div className="grid gap-2">
        <Container>
          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <IconContainer className="cursor-pointer">
                <BiMenu />
              </IconContainer>
              <Link href={"/"} className="logo font-medium flex">
                <Logo />
              </Link>
            </div>

            <div className="w-full max-w-screen-md hidden md:block">
              <Search />
            </div>

            <div className="flex items-center justify-end gap-2 md:gap-4">
              <IconContainer>
                <BiCart className="text-2xl cursor-pointer" />
              </IconContainer>

              <IconContainer>
                <BiUser className="text-2xl cursor-pointer" />
              </IconContainer>

              {/* <div className="flex items-center gap-4">
              <Link
                href={`${
                  process.env.NEXT_PUBLIC_AUTH_UI_URL as string
                }?redirect=${browserLocationUrl}`}
                className="w-fit text-nowrap"
              >
                <Button>Sign in</Button>
              </Link>
            </div>  */}
            </div>
          </div>
        </Container>

        <div className="md:hidden">
          <Container>
            <Search />
          </Container>
        </div>
      </div>
    </div>
  );
};
