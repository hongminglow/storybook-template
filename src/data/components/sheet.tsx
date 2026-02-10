import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelRight } from "lucide-react";

const SheetExample = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="p-4 bg-muted rounded-md text-sm">
            Sheet Content Area
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const sheetConfig = {
  id: "sheet",
  name: "Sheet",
  icon: PanelRight,
  description:
    "Extends the Dialog component to display content that complements the main content of the screen.",
  component: SheetExample,
  props: [
    {
      name: "side",
      description: "The side of the screen where the sheet will appear.",
      type: "'top' | 'bottom' | 'left' | 'right'",
      defaultValue: "'right'",
    },
  ],
  examples: [
    {
      name: "Default",
      code: `
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
      `,
      props: {},
    },
  ],
};
