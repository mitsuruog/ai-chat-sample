"use client";

import {
  Select,
  Label,
  Button,
  Popover,
  ListBox,
  ListBoxItem,
  SelectValue,
  Key,
} from "react-aria-components";

import Icon, { faChevronDown } from "@/shared/components/icon";

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
    <Select selectedKey={selectedKey} onSelectionChange={onSelectionChange}>
      <div className="flex gap-2 items-center">
        <Label>Model</Label>
        <Button className="flex gap-2 items-center border rounded px-2 py-1">
          <SelectValue />
          <Icon icon={faChevronDown} className="h-4 x-4" />
        </Button>
      </div>
      <Popover>
        <ListBox className="border rounded shadow bg-white">
          {openai_models.map((model) => (
            <ListBoxItem
              key={model}
              id={model}
              className="px-4 py-2 hover:bg-gray-100"
            >
              {model}
            </ListBoxItem>
          ))}
          <ListBoxItem></ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
};

export default ModelSwitcher;
