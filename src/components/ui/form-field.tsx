"use client"

import {
    
    Controller
    
    
    
    
} from "react-hook-form"
import type {Control, ControllerFieldState, ControllerRenderProps, FieldValues, Path} from "react-hook-form";
import type { fieldVariants } from "@/components/ui/field";
import type {VariantProps} from "class-variance-authority";
import { Field, FieldError, FieldLabel } from "@/components/ui/field"

interface FormFieldProps<T extends FieldValues>
    extends Omit<React.ComponentProps<"div">, "children">, VariantProps<typeof fieldVariants> {
    name: Path<T>
    control: Control<T>
    label?: React.ReactNode
    children: (field: ControllerRenderProps<T, Path<T>>, fieldState: ControllerFieldState) => React.ReactNode
}

const FormField = <T extends FieldValues>({
    name,
    control,
    label,
    children,
    orientation,
    className,
    ...props
}: FormFieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} orientation={orientation} className={className} {...props}>
                    {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}
                    {children(field, fieldState)}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    )
}

export default FormField
