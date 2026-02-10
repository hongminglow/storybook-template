import { Button } from "@/components/ui/button";
import { Square } from "lucide-react";

export const buttonConfig = {
  id: "button",
  name: "Button",
  icon: Square,
  description:
    "A button component triggers an event or action. They let users know what will happen next.",
  component: Button,
  props: [
    {
      name: "variant",
      description: " The visual style of the button",
      type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'",
      defaultValue: "'default'",
    },
    {
      name: "size",
      description: "The size of the button",
      type: "'default' | 'sm' | 'lg' | 'icon'",
      defaultValue: "'default'",
    },
    {
      name: "children",
      description: "The content of the button",
      type: "ReactNode",
      defaultValue: "-",
    },
    {
      name: "onClick",
      description: "Callback when the button is clicked",
      type: "() => void",
      defaultValue: "-",
    },
  ],
  examples: [
    {
      name: "Default",
      code: '<Button variant="default">Button</Button>',
      props: { variant: "default", children: "Button" },
    },
    {
      name: "Secondary",
      code: '<Button variant="secondary">Button</Button>',
      props: { variant: "secondary", children: "Button" },
    },
    {
      name: "Outline",
      code: '<Button variant="outline">Button</Button>',
      props: { variant: "outline", children: "Button" },
    },
    {
      name: "Ghost",
      code: '<Button variant="ghost">Button</Button>',
      props: { variant: "ghost", children: "Button" },
    },
    {
      name: "Destructive",
      code: '<Button variant="destructive">Button</Button>',
      props: { variant: "destructive", children: "Button" },
    },
  ],
};
