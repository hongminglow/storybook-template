import { useState, useMemo } from "react";
import { type ComponentConfig } from "@/types";
import { Preview } from "@/components/storybook/Preview";
import { PropsTable } from "@/components/storybook/PropsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface ComponentPageProps {
  config: ComponentConfig;
}

export function ComponentPage({ config }: ComponentPageProps) {
  const [copied, setCopied] = useState(false);

  const initialProps = useMemo(() => {
    const defaults: Record<string, unknown> = {};
    config.props.forEach((p) => {
      if (p.defaultValue && p.defaultValue !== "-") {
        let value: any = p.defaultValue.replace(/['"]/g, "");
        if (value === "true") value = true;
        if (value === "false") value = false;
        defaults[p.name] = value;
      }
    });
    return { ...defaults, ...config.examples.props };
  }, [config]);

  const [propsState, setPropsState] = useState<Record<string, unknown>>(initialProps);

  const ComponentToRender = config.component;

  const handlePropChange = (name: string, value: unknown) => {
    setPropsState((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(config.examples.code || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const tabTriggerClass =
    "h-full rounded-none border-0 border-b-2 border-transparent px-2 pb-0 pt-0 font-medium text-gray-500 hover:text-gray-700 data-[state=active]:border-pink-600 data-[state=active]:text-pink-600 dark:text-gray-400 dark:hover:text-gray-200 dark:data-[state=active]:border-pink-500 dark:data-[state=active]:text-pink-500 !bg-transparent !shadow-none after:hidden transition-none";

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center">
            {config.icon ? (
              <config.icon className="w-6 h-6 text-pink-500" />
            ) : (
              <div className="w-6 h-6 border-2 border-pink-500 rounded-sm" />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {config.name}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {config.id.charAt(0).toUpperCase() + config.id.slice(1)} component
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[750px] leading-relaxed">
          {config.description}
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden shadow-sm">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b border-gray-200 dark:border-gray-800 px-6 bg-transparent">
            <TabsList className="h-14 w-auto bg-transparent p-0 gap-8">
              <TabsTrigger value="preview" className={tabTriggerClass}>
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className={tabTriggerClass}>
                Code
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="p-6">
            <TabsContent value="preview" className="mt-0 outline-none">
              <div className="space-y-10">
                <Preview>
                  {ComponentToRender ? (
                    <ComponentToRender {...propsState} />
                  ) : (
                    <div className="text-red-500">Component failed to load</div>
                  )}
                </Preview>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      Prop Controls
                    </h2>
                  </div>
                  <PropsTable
                    props={config.props}
                    values={propsState}
                    canvasProps={config.examples.props || {}}
                    onPropChange={handlePropChange}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code" className="mt-0 outline-none">
              <div className="relative group">
                <div className="absolute right-4 top-4 z-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 text-gray-300 transition-all active:scale-95"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <div className="rounded-xl bg-[#0d0d0d] p-6 overflow-x-auto border border-gray-800 shadow-2xl min-h-[120px]">
                  <pre className="text-sm text-pink-300 font-mono leading-relaxed">
                    {config.examples.code}
                  </pre>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
