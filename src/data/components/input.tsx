import { Input } from "@/components/ui/input";

export const inputConfig = {
  id: "input",
  name: "Input",
  description:
    "Displays a form input field or a component that looks like an input field.",
  component: Input,
  props: [
    {
      name: "type",
      description: "The type of input field",
      type: "'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'",
      defaultValue: "'text'",
    },
    {
      name: "placeholder",
      description: "The placeholder text",
      type: "string",
      defaultValue: "'Enter value...'",
    },
    {
      name: "disabled",
      description: "Whether the input is disabled",
      type: "boolean",
      defaultValue: "false",
    },
    {
      name: "value",
      description: "The current value (controlled)",
      type: "string",
      defaultValue: "-",
    },
    {
      name: "onChange",
      description: "Callback when the input value changes",
      type: "(e: ChangeEvent) => void",
      defaultValue: "-",
    },
  ],
  examples: [
    {
      name: "Default",
      code: '<Input type="text" placeholder="Email" />',
      props: { type: "text", placeholder: "Email" },
    },
    {
      name: "Password",
      code: '<Input type="password" placeholder="Password" />',
      props: { type: "password", placeholder: "Password" },
    },
    {
      name: "Disabled",
      code: '<Input disabled placeholder="Disabled input" />',
      props: { disabled: true, placeholder: "Disabled input" },
    },
    {
      name: "With Value",
      code: '<Input defaultValue="Read only value" readOnly />',
      props: { defaultValue: "Read only value", readOnly: true },
    },
  ],
};
