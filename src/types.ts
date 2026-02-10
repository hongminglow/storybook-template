export interface ComponentProp {
  name: string;
  description: string;
  type: string;
  defaultValue: string;
}

export interface ComponentExample {
  name: string;
  code: string;
  props: Record<string, unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentType = React.ComponentType<any>;

export interface ComponentConfig {
  id: string;
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any; // Using any for icon to avoid strict type issues with various lucide/react icon types
  props: ComponentProp[];
  examples: ComponentExample[];
  component: ComponentType;
}
