import { buttonConfig } from "./button";
import { inputConfig } from "./input";
import { cardConfig } from "./card";
import { separatorConfig } from "./separator";
import { sheetConfig } from "./sheet";
import { scrollAreaConfig } from "./scroll-area";
import { type ComponentConfig } from "@/types";

export const componentConfigs: ComponentConfig[] = [
  buttonConfig,
  inputConfig,
  cardConfig,
  separatorConfig,
  sheetConfig,
  scrollAreaConfig,
];

export const getComponentConfig = (id: string) => {
  return componentConfigs.find((c) => c.id === id);
};
