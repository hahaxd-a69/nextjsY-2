"use client";

import { useForm, Controller } from "react-hook-form";
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
  title: z.string().min(1, "Title is required"),
  price: z.coerce.number().min(0, "Price must be 0 or more"),
  CategoryId: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  Images: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const FieldDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const FieldError = ({ children }: { children?: React.ReactNode }) => (
  <p className="text-sm text-red-500">{children}</p>
);
export default function ProductForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      CategoryId: "",
      description: "",
      Images: "",
    },
  } as const);
  const onSubmit = (values: FormValues) => {
    console.log(values);

    toast(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(values, null, 2)}</code>
      </pre>,
    );

    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-3xl mx-auto py-10"
    >
      <Field label="Title">
        <Label htmlFor="title" />
        <Input id="title" placeholder="Product title" {...register("title")} />
        <FieldDescription>Public product title</FieldDescription>
        <FieldError>{errors.title?.message}</FieldError>
      </Field>

      {/* PRICE + CATEGORY */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <Field label="Price">
            <Label htmlFor="price" />
            <Input
              id="price"
              type="number"
              placeholder="200"
              {...register("price")}
            />
            <FieldDescription>Product price</FieldDescription>
            <FieldError>{errors.price?.message}</FieldError>
          </Field>
        </div>

        <div className="col-span-6">
          <Field label="Category">
            <Controller
              name="CategoryId"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldDescription>Product category</FieldDescription>
            <FieldError>{errors.CategoryId?.message}</FieldError>
          </Field>
        </div>
      </div>

      <Field label="Description">
        <Label htmlFor="description" />
        <Textarea
          id="description"
          placeholder="Product description"
          {...register("description")}
        />
        <FieldDescription>Describe your product</FieldDescription>
        <FieldError>{errors.description?.message}</FieldError>
      </Field>

      <Field label="Product Images">
        <Label htmlFor="Images"></Label>

        <Input
          id="Images"
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                setValue("Images", reader.result as string);
              };
              reader.readAsDataURL(file);
            } else {
              setValue("Images", "");
            }
          }}
        />

        <FieldDescription>Select a file to upload.</FieldDescription>

        <FieldError>{errors.Images?.message}</FieldError>
      </Field>

      <Button type="submit">Submit</Button>
    </form>
  );
}
