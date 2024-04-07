import React, {
  ComponentProps,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { ToggleItem } from "../toggle-item";

type Props = {
  children: ReactElement<typeof ToggleItem> | ReactElement<typeof ToggleItem>[];
  defaultSelection?: number | number[];
  onToggleChange?: (index: number[]) => void;
  multiSelect?: boolean;
  size?: ComponentProps<typeof ToggleItem>["size"];
};

export function ToggleGroup({
  children,
  defaultSelection = 0,
  onToggleChange = () => {},
  multiSelect = false,
  size,
}: Props) {
  const [activeIndexes, setActiveIndexes] = useState<number[]>(
    Array.isArray(defaultSelection) ? defaultSelection : [defaultSelection],
  );

  useEffect(() => {
    onToggleChange(activeIndexes);
  }, [activeIndexes, onToggleChange, multiSelect]);

  const handleToggle = (index: number) => {
    setActiveIndexes((prevActiveIndexes) => {
      if (!multiSelect) {
        return [index];
      }

      return prevActiveIndexes.includes(index)
        ? prevActiveIndexes.filter((item) => item !== index)
        : [...prevActiveIndexes, index];
    });
  };

  return (
    <div className="flex space-x-2">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          size,
          active: activeIndexes.includes(index),
          onClick: () => {
            handleToggle(index);
            if ((child as React.ReactElement).props.onClick) {
              (child as React.ReactElement).props.onClick();
            }
          },
        }),
      )}
    </div>
  );
}
