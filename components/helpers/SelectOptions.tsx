"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectOptionsProps {
  title: string;
  options: { title: string }[];
  value: string;  
  onCategorySelect: (category: string) => void;
}

export default function SelectOptions({ title, options, value, onCategorySelect }: SelectOptionsProps) {
  return (
    <Select value={value} onValueChange={onCategorySelect}>
      <SelectTrigger className="w-[180px] my-5">
        <SelectValue placeholder={`Select ${title}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.title.toLowerCase()} value={option.title.toLowerCase()}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
