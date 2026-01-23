import * as React from "react";
import { cn } from "@/lib/utils";

export function Field({
  children,
  orientation = "vertical",
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <div
      className={cn(
        orientation === "horizontal"
          ? "flex items-center gap-3"
          : "flex flex-col gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function FieldGroup({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-6", className)}>{children}</div>;
}

export function FieldLabel(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className="text-sm font-medium text-foreground" />;
}

export function FieldDescription(
  props: React.HTMLAttributes<HTMLParagraphElement>,
) {
  return <p {...props} className="text-sm text-muted-foreground" />;
}

export function FieldError({ errors }: { errors?: { message?: string }[] }) {
  if (!errors?.length) return null;
  return <p className="text-sm text-destructive">{errors[0]?.message}</p>;
}
