import React, { useContext, createContext } from "react";
import { productsArray } from "../../PopupResponseData";

const { products } = productsArray;
export const productsContext = createContext({ products });
