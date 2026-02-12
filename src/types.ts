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

export type ComponentType = React.ComponentType<any>;

export interface ComponentConfig {
  id: string;
  name: string;
  tags: string[];
  description: string;
  icon?: any; // Using any for icon to avoid strict type issues with various lucide/react icon types
  props: ComponentProp[];
  examples: ComponentExample;
  component: ComponentType;
}
