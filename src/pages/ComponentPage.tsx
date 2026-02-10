import { useState } from "react";
import { type ComponentConfig } from "@/types";
import { Preview } from "@/components/storybook/Preview";
import { PropsTable } from "@/components/storybook/PropsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentPageProps {
  config: ComponentConfig;
}

export function ComponentPage({ config }: ComponentPageProps) {
  // Calculate initial props directly.
  // Since we use 'key' in App.tsx, this component remounts on config change,
  // so we don't need useMemo or sync-logic to reset state.
  const getInitialProps = () => {
    const defaults: Record<string, unknown> = {};
    config.props.forEach((p) => {
      if (p.defaultValue && p.defaultValue !== "-") {
        let value: any = p.defaultValue.replace(/['"]/g, "");
        if (value === "true") value = true;
        if (value === "false") value = false;
        defaults[p.name] = value;
      }
    });
    // Override with example props if available
    if (config.examples.length > 0) {
      return { ...defaults, ...config.examples[0].props };
    }
    return defaults;
  };

  const [propsState, setPropsState] =
    useState<Record<string, unknown>>(getInitialProps);

  const ComponentToRender = config.component;

  const handlePropChange = (name: string, value: unknown) => {
    setPropsState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {config.name}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-[750px]">
          {config.description}
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden shadow-sm">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b border-gray-200 dark:border-gray-800 px-6">
            <TabsList className="h-12 w-auto bg-transparent p-0 gap-6">
              <TabsTrigger
                value="preview"
                className="h-full rounded-none border-b-2 border-transparent px-2 pb-3 pt-3 font-medium text-gray-500 hover:text-gray-700 data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 dark:text-gray-400 dark:hover:text-gray-200 dark:data-[state=active]:border-pink-400 dark:data-[state=active]:text-pink-400 bg-transparent shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="h-full rounded-none border-b-2 border-transparent px-2 pb-3 pt-3 font-medium text-gray-500 hover:text-gray-700 data-[state=active]:border-gray-900 data-[state=active]:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 dark:data-[state=active]:border-gray-100 dark:data-[state=active]:text-gray-100 bg-transparent shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="p-6">
            <TabsContent value="preview" className="mt-0 outline-none">
              <div className="space-y-8">
                <Preview>
                  {ComponentToRender ? (
                    <ComponentToRender {...propsState} />
                  ) : (
                    <div className="text-red-500">Component failed to load</div>
                  )}
                </Preview>

                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                    Prop Controls
                  </h2>
                  <PropsTable
                    props={config.props}
                    values={propsState}
                    canvasProps={config.examples[0]?.props || {}}
                    onPropChange={handlePropChange}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code" className="mt-0 outline-none">
              <div className="rounded-lg bg-gray-900 dark:bg-black p-4 overflow-x-auto border border-gray-800 shadow-inner">
                <pre className="text-sm text-pink-300 font-mono leading-relaxed">
                  {config.examples[0]?.code}
                </pre>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
