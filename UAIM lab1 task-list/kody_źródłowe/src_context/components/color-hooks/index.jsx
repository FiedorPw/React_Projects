import React, {createContext, useState, useContext} from "react";
import colorData from "../../color-data.json";
import {v4} from "uuid";
import {ColorContext} from "../..";


export const useColors = () => useContext(ColorContext);

