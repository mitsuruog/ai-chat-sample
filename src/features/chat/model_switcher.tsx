"use client";

import {
  Select,
  Label,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  Key,
} from "react-aria-components";

const openai_models = ["gpt-4-turbo", "gpt-4", "gpt-3.5-turbo"];

export type ModelSwitcherProps = {
  selectedKey: Key;
  onSelectionChange: (key: Key) => void;
};

const ModelSwitcher = ({
  selectedKey,
  onSelectionChange,
}: ModelSwitcherProps) => {
  return (
    <Select
      className="flex gap-4 items-center w-64"
      selectedKey={selectedKey}
      onSelectionChange={onSelectionChange}
    >
      <Label>Model</Label>
      <Button className="flex flex-grow">
        <SelectValue className="form-select flex-grow text-left" />
      </Button>
      <Popover>
        <ListBox className="border rounded shadow bg-white">
          {openai_models.map((model) => (
            <ListBoxItem
              key={model}
              id={model}
              className="py-2 px-4 hover:bg-gray-100"
            >
              {model}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
};

export default ModelSwitcher;
