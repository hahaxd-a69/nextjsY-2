"use client";

import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

// 1. setup validation rule
const formSchema = z.object({
  title: z
    .string()
    .min(5, "Product title must be at least 5 characters.")
    .max(200, "Product title must be at most 200 characters."),
  price: z.coerce.number().positive(),
  description: z
    .string()
    .min(5, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
  category: z
    .string()
    .min(1, "Please select your spoken language.")
    .refine((val) => val !== "auto", {
      message: "Please select a specific category.",
    }),
});

export function BugReportForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("Form submitted successfully", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-slate-900 p-4 text-white">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Bug Report</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="bug-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* ---------- TITLE ---------- */}
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="title">Bug Title</FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    placeholder="Login button not working"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid ? "true" : "false"}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* ---------- DESCRIPTION ---------- */}
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="description">Description</FieldLabel>

                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="description"
                      rows={6}
                      className="resize-none"
                      placeholder="Steps to reproduce the bug..."
                      aria-invalid={fieldState.invalid ? "true" : "false"}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText>{field.value.length}/100</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <FieldDescription>
                    Include steps, expected behavior, and actual result.
                  </FieldDescription>

                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="bug-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
