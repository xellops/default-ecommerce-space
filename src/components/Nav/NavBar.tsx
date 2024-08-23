import { useEffect, useState } from "react";
import { Container } from "../Container";
import { Button } from "../Button";
import { Form, Input, FormField } from "../Form";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useFormik } from "formik";

export const NavBar = () => {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { q: "" },
    onSubmit(data) {
      console.log(data);
    },
  });

  return (
    <div className="py-4 shadow-sm shadow-gray-200 drop-shadow-sm sticky top-0">
      <Container>
        <div className="flex items-center justify-between gap-4 md:gap-12">
          <h2 className="logo font-medium">ZoneX</h2>

          <div className="w-full max-w-screen-lg">
            <Form onSubmit={handleSubmit}>
              <FormField>
                <Input
                  name="q"
                  value={values.q}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="search"
                  placeholder="Search for absolutely anything - goods, services, brands, dealers, supply chains..."
                  className="w-full max-w-screen-lg"
                />
              </FormField>

              <button type="submit" className="absolute"></button>
            </Form>
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-4">
              <Link
                href={process.env.NEXT_PUBLIC_AUTH_UI_URL as string}
                className="w-fit text-nowrap"
              >
                <Button>Sign in</Button>
              </Link>
            </div>

            <div className="cart">
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
