import { cn } from "@/lib/utils";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";

// tabs context //
export const TabsContext = createContext(null);

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabs must be used within a <Tabs />");
  }

  return context;
};

const Tabs = forwardRef(
  (
    { className, value: valueProp, setValue: setValueProp, children, ...props },
    ref,
  ) => {
    const [value, setValue] = useState(valueProp);

    const onTabSelect = (value) => {
      setValue(value);
      if (setValueProp) {
        setValueProp(value);
      }
    };

    useEffect(() => {
      if (valueProp !== undefined) {
        setValue(valueProp);
      }
    }, [valueProp]);

    return (
      <TabsContext.Provider
        value={{
          value,
          onTabSelect,
        }}
      >
        <div ref={ref} className={cn("relative", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = "Tabs";
// ------- //

// tabs contents //
const TabsList = forwardRef(({ className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-1 overflow-x-auto",
        className,
      )}
      {...props}
    />
  );
});
TabsList.displayName = "TabsList";

const TabsTrigger = forwardRef(
  (
    { className, activeClassName, value, disabled, isLoading, ...props },
    ref,
  ) => {
    const { value: contextValue, onTabSelect } = useTabs();
    return (
      <li
        ref={ref}
        onClick={() =>
          !disabled &&
          !isLoading &&
          value !== undefined &&
          value !== null &&
          onTabSelect(value)
        }
        data-state={value === contextValue ? "active" : "inactive"}
        className={cn(
          "cursor-pointer text-title hover-underline-overlay after:mx-auto after:origin-center after:border-title disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
          {
            [cn(
              "cursor-default text-primary after:w-full after:border-primary",
              activeClassName,
            )]: value === contextValue,
          },
        )}
        disabled={disabled || isLoading}
        {...props}
      />
    );
  },
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("", className)} {...props} />;
});
TabsContent.displayName = "TabsContent";

const TabsItem = forwardRef(
  ({ className, activeClassName, value, ...props }, ref) => {
    const { value: contextValue } = useTabs();
    return (
      <div
        ref={ref}
        className={cn("hidden", className, {
          [cn("block", activeClassName)]: value === contextValue,
        })}
        {...props}
      />
    );
  },
);
TabsItem.displayName = "TabsItem";
// ------- //

export { Tabs, TabsContent, TabsItem, TabsList, TabsTrigger };
