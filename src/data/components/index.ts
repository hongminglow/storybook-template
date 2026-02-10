import { buttonConfig } from "./button";
import { inputConfig } from "./input";
import { cardConfig } from "./card";
import { separatorConfig } from "./separator";
import { sheetConfig } from "./sheet";
import { scrollAreaConfig } from "./scroll-area";

export const componentConfigs = [
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
