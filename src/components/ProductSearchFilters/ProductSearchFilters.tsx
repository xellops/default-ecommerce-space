"use client";
import { useState } from "react";
import { Numerics } from "@/utils";
import { Checkbox, Radio } from "../Form";
import { IconContainer } from "../IconContainer/IconContainer";
import { GoFilter } from "react-icons/go";
import { BiCaretDown } from "react-icons/bi";
import { PiCaretDown, PiCaretDownThin } from "react-icons/pi";

export const ProductSearchFilters = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full md:max-w-72 flex flex-col gap-4 relative rounded-md bg-white p-2 mb-1">
      <div className="relative flex items-center gap-0.5 justify-between font-semibold">
        <div className="flex items-center gap-0.5">
          <IconContainer>
            <GoFilter />
          </IconContainer>
          <span className="text-sm">Filters</span>
        </div>

        <IconContainer className="md:opacity-0">
          <PiCaretDown
            className={`transition-transform ${isOpen ? "p rotate-180" : ""}`}
          />
        </IconContainer>

        <div
          className="cursor-pointer absolute top-0 h-full left-0 w-full md:static"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      </div>

      <div
        className={`bg-white w-full grid gap-4 absolute top-8 left-0 transition-all ${
          isOpen
            ? "scale-100 shadow-lg rounded-b-md p-2 z-50 origin-top-left"
            : "scale-0"
        } md:static md:scale-100 md:drop-shadow-none md:rounded-none md:p-0`}
      >
        <ul className="flex flex-col gap-4">
          <li className="grid gap-1">
            <h4 className="font-semibold text-sm">Price (NGN)</h4>
            <ul>
              <li>
                <Checkbox
                  options={[
                    {
                      name: `Less than ${Numerics.format(1000, {
                        precision: 0,
                      })}`,
                      value: 1000,
                    },
                  ]}
                />
              </li>
            </ul>
          </li>

          <li className="grid gap-1">
            <h4 className="font-semibold text-sm">Brand</h4>
            <ul>
              <li>
                <Radio
                  options={[
                    {
                      name: "Hisense",
                      value: "hisense-id",
                    },
                    {
                      name: "LG",
                      value: "lg-id",
                    },
                    {
                      name: "Dangote",
                      value: "dangote-id",
                    },
                  ]}
                />
              </li>
            </ul>
          </li>

          <li className="grid gap-1">
            <h4 className="font-semibold text-sm">Category</h4>
            <ul className="max-h-24 overflow-y-scroll scroll-pb-12">
              <li>
                <Checkbox
                  options={[
                    {
                      name: "Refrigerators",
                      value: "hisense-id",
                    },
                    {
                      name: "Kitchen equipments",
                      value: "lg-id",
                    },
                    {
                      name: "Home appliances",
                      value: "dangote-id",
                    },
                    {
                      name: "School equipments",
                      value: "dangote-id",
                    },
                  ]}
                />
              </li>
            </ul>
          </li>
        </ul>

        <hr />

        <div>
          <h4 className="text-md mb-4">Specifications</h4>
          <ul className="flex flex-col gap-8">
            <li className="grid gap-1">
              <h4 className="font-semibold text-sm">Weight (kg)</h4>
              <ul>
                <li>
                  <Radio
                    options={[
                      {
                        name: `Less than ${Numerics.format(1000, {
                          precision: 0,
                        })}`,
                        value: 1000,
                      },
                    ]}
                  />
                </li>
              </ul>
            </li>

            <li className="grid gap-1">
              <h4 className="font-semibold text-sm">Size (kg)</h4>
              <ul>
                <li>
                  <Radio
                    options={[
                      {
                        name: `Less than ${Numerics.format(1000, {
                          precision: 0,
                        })}`,
                        value: 1000,
                      },
                    ]}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
