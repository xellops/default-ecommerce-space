import { BiSearch } from "react-icons/bi";
import { Form, FormField, Input } from "../Form";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import { IconContainer } from "../IconContainer/IconContainer";

export const Search = () => {
  const [browserLocationUrl, setBrowserLocationUrl] = useState<string>("");
  const searchParams = useSearchParams();

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: { q: searchParams.get("q") || "" },
    onSubmit(data) {
      if (data.q) {
        const preProcessed = data.q.replace(" ", "+");
        const url = `${window.location.origin}/products?q=${preProcessed}`;
        window.location.assign(url);
      }
    },
  });

  useEffect(() => {
    setBrowserLocationUrl(window.location.href);
  }, []);

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          <FormField className="relative">
            <div className="flex items-center gap-2">
              <Input
                name="q"
                value={values.q}
                onChange={handleChange}
                onBlur={handleBlur}
                type="search"
                placeholder="Search for absolutely anything - goods, services, brands, dealers, supply chains..."
                className="w-full max-w-screen-lg focus:border-0"
              />

              <button
                type="submit"
                className="bg-white p-0.5 md:block absolute top-[45%] -translate-y-[45%] right-1"
              >
                <IconContainer>
                  <BiSearch className="text-xl" />
                </IconContainer>
              </button>
            </div>
          </FormField>
        </Form>
      </div>
    </div>
  );
};
