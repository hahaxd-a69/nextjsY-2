"use client";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name_7362166523: z.string().min(1),
  name_2762192293: z.string().min(1),
  name_5883430225: z.string(),
  name_6908856363: z.string(),
  name_5902634297: z.string(),
});

export default function MyForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <Field label="Username">
          <Label htmlFor="name_7362166523"></Label>
          <Input
            id="name_7362166523"
            placeholder="shadcn"
            {...form.register("name_7362166523")}
          />
          <p className="text-sm text-muted-foreground">
            This is your public display name.
          </p>
          {form.formState.errors.name_7362166523?.message && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.name_7362166523?.message}
            </p>
          )}
        </Field>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <Field label="Username">
              <Label htmlFor="name_2762192293"></Label>
              <Input
                id="name_2762192293"
                placeholder="shadcn"
                {...form.register("name_2762192293")}
              />
              <p className="text-sm text-muted-foreground">
                This is your public display name.
              </p>
              {form.formState.errors.name_2762192293?.message && (
                <p className="text-sm font-medium text-destructive">
                  {form.formState.errors.name_2762192293?.message}
                </p>
              )}
            </Field>
          </div>

          <div className="col-span-6">
            <Field label="Email">
              <Label htmlFor="name_5883430225"></Label>
              <Select {...form.register("name_5883430225")}>
                <SelectTrigger id="name_5883430225">
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                You can manage email addresses in your email settings.
              </p>
              {form.formState.errors.name_5883430225?.message && (
                <p className="text-sm font-medium text-destructive">
                  {form.formState.errors.name_5883430225?.message}
                </p>
              )}
            </Field>
          </div>
        </div>
        <Field label="Bio">
          <Label htmlFor="name_6908856363"></Label>
          <Textarea
            id="name_6908856363"
            placeholder="Placeholder"
            {...form.register("name_6908856363")}
          />
          <p className="text-sm text-muted-foreground">
            You can @mention other users and organizations.
          </p>
          {form.formState.errors.name_6908856363?.message && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.name_6908856363?.message}
            </p>
          )}
        </Field>
        <Field label="Select File">
          <Label htmlFor="name_5902634297"></Label>
          <Input
            id="name_5902634297"
            placeholder="Placeholder"
            {...form.register("name_5902634297")}
          />
          <p className="text-sm text-muted-foreground">
            Select a file to upload.
          </p>
          {form.formState.errors.name_5902634297?.message && (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.name_5902634297?.message}
            </p>
          )}
        </Field>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
