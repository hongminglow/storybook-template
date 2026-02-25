import { type ComponentProp } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface PropsTableProps {
  props: ComponentProp[];
  values: Record<string, unknown>;
  canvasProps: Record<string, unknown>;
  onPropChange: (name: string, value: unknown) => void;
}

export function PropsTable({ props, values, canvasProps, onPropChange }: PropsTableProps) {
  const getValue = (propName: string) => {
    return (values[propName] as string) || (canvasProps[propName] as string) || "";
  };

  return (
    <div className="rounded-md border border-gray-200 dark:border-gray-800">
      <Table>
        <TableHeader className="bg-gray-50 dark:bg-gray-900">
          <TableRow>
            <TableHead className="w-[150px]">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[150px]">Default</TableHead>
            <TableHead className="w-[250px]">Control</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono text-pink-600 dark:text-pink-400 font-medium">
                {prop.name}
              </TableCell>
              <TableCell className="text-gray-600 dark:text-gray-300">{prop.description}</TableCell>
              <TableCell className="font-mono text-gray-500">{prop.defaultValue}</TableCell>
              <TableCell>
                {prop.name === "variant" && (
                  <Select
                    value={getValue(prop.name)}
                    onValueChange={(val) => onPropChange(prop.name, val)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">default</SelectItem>
                      <SelectItem value="secondary">secondary</SelectItem>
                      <SelectItem value="outline">outline</SelectItem>
                      <SelectItem value="ghost">ghost</SelectItem>
                      <SelectItem value="destructive">destructive</SelectItem>
                      <SelectItem value="link">link</SelectItem>
                    </SelectContent>
                  </Select>
                )}
                {prop.name === "size" && (
                  <Select
                    value={getValue(prop.name)}
                    onValueChange={(val) => onPropChange(prop.name, val)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">default</SelectItem>
                      <SelectItem value="sm">sm</SelectItem>
                      <SelectItem value="lg">lg</SelectItem>
                      <SelectItem value="icon">icon</SelectItem>
                    </SelectContent>
                  </Select>
                )}
                {prop.name === "children" && (
                  <Input
                    value={getValue(prop.name)}
                    onChange={(e) => onPropChange(prop.name, e.target.value)}
                    className="w-full"
                  />
                )}
                {!["variant", "size", "children"].includes(prop.name) && (
                  <span className="text-gray-400 italic text-sm">-</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
