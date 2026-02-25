import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout } from "lucide-react";

interface CardExampleProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

// Wrapper component to render the full card example
const CardExample = (props: CardExampleProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.title || "Create project"}</CardTitle>
        <CardDescription>
          {props.description || "Deploy your new project in one-click."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="p-4 bg-muted rounded-md text-sm text-muted-foreground">
            {props.children || "Card Content Area (Customize with children)"}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export const cardConfig = {
  id: "card",
  name: "Card",
  group: "Layout",
  tags: ["container", "surface", "content", "layout"],
  icon: Layout,
  description: "Displays a card with header, content, and footer.",
  component: CardExample,
  props: [
    {
      name: "title",
      description: "The title of the card",
      type: "string",
      defaultValue: "'Create project'",
    },
    {
      name: "description",
      description: "The description of the card",
      type: "string",
      defaultValue: "'Deploy your new project in one-click.'",
    },
    {
      name: "children",
      description: "The content of the card",
      type: "ReactNode",
      defaultValue: "-",
    },
  ],
  examples: {
    name: "Default",
    code: `
<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    ...
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>
      `,
    props: {
      title: "Create project",
      description: "Deploy your new project in one-click.",
    },
  },
};
