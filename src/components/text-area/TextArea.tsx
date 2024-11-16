import { VariantProps, cva } from "class-variance-authority";
// @ts-ignore
import React, {
  ChangeEvent,
  TextareaHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

const textArea = cva(
  [
    "appearance-none focus:outline-none resize-none min-w-40",
    "disabled:bg-gray-300",
  ],
  {
    variants: {
      width: {
        medium: "w-96",
        large: "w-[500px]",
        full: "w-full",
      },
      height: {
        small: "h-40",
        medium: "h-60",
        large: "h-[500px]",
        full: "h-full",
      },
      border: {
        bottom: "px-2 pb-1 border-b border-black",
        full: "rounded-md p-3 pb-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-pink-400",
      },
    },
    defaultVariants: {
      width: "full",
      height: "medium",
      border: "full",
    },
  },
);

type Props = {
  autoGrow?: boolean;
  onChange?: (text: string) => void;
} & Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange" | "width" | "height"
> &
  VariantProps<typeof textArea>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      autoGrow = false,
      onChange = () => {},
      className,
      width,
      height,
      border,
      ...rest
    }: Props,
    forwardedRef,
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const setAutoHeight = () => {
      if ((autoGrow || border === "bottom") && textAreaRef.current) {
        textAreaRef.current.style.height = "0px";
        const scrollHeight = textAreaRef.current!.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
      }
    };

    useEffect(() => {
      setAutoHeight();
    }, [autoGrow, border]);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setAutoHeight();

      onChange(event.target.value);
    };

    useImperativeHandle(forwardedRef, () => textAreaRef.current!, [
      textAreaRef,
    ]);

    return (
      <div>
        <textarea
          ref={textAreaRef}
          onChange={handleChange}
          className={textArea({ border, width, height, className })}
          {...rest}
        />
      </div>
    );
  },
);
