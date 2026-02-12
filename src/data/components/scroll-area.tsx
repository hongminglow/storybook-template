import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MousePointer2 } from "lucide-react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const ScrollAreaExample = () => {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export const scrollAreaConfig = {
  id: "scroll-area",
  name: "Scroll Area",
  tags: ["scroll", "container", "viewport", "overflow"],
  icon: MousePointer2,
  description:
    "Augments native scroll functionality for custom cross-browser styling.",
  component: ScrollAreaExample,
  props: [],
  examples: {
    name: "Default",
    code: `
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <>
        <div key={tag} className="text-sm">
          {tag}
        </div>
        <Separator className="my-2" />
      </>
    ))}
  </div>
</ScrollArea>
      `,
    props: {},
  },
};
