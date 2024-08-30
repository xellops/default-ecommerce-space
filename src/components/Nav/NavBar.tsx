"use client";
import { Container } from "../Container";
import { Button } from "../Button";
import { Form, Input, FormField } from "../Form";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useFormik } from "formik";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IconContainer } from "../IconContainer/IconContainer";
import { BiCart, BiHomeAlt, BiMenu, BiUser } from "react-icons/bi";

export const NavBar = () => {
  const [browserLocationUrl, setBrowserLocationUrl] = useState<string>("");
  const searchParams = useSearchParams();

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { q: searchParams.get("q") || "" },
    onSubmit(data) {
      window.location.assign(`${window.location.origin}/products?q=${data.q}`);
    },
  });

  useEffect(() => {
    setBrowserLocationUrl(window.location.href);
  }, []);

  return (
    <div className="py-2 shadow-sm bg-white shadow-gray-200 drop-shadow-sm w-full z-50 md:static md:top-0">
      <Container>
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <IconContainer className="cursor-pointer">
              <BiMenu />
            </IconContainer>
            <Link href={"/"} className="logo font-medium flex">
              <span className="hidden md:block">ZoneX</span>

              {/* <IconContainer className="md:hidden">
                <BiHomeAlt />
              </IconContainer> */}
            </Link>
          </div>

          <div className="w-full max-w-screen-md relative">
            <Form onSubmit={handleSubmit}>
              <FormField>
                <div className="flex items-center gap-2">
                  <Input
                    name="q"
                    value={values.q}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="search"
                    placeholder="Search for absolutely anything - goods, services, brands, dealers, supply chains..."
                    className="w-full max-w-screen-lg"
                  />
                  <Button
                    type="submit"
                    className="hidden md:block absolute top-[50%] -translate-y-[50%] right-1"
                    disabled={!values.q}
                  >
                    SEARCH
                  </Button>
                </div>
              </FormField>
            </Form>
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
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};
