"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Quote {
  author: string;
}

interface ComboBoxProps {
  value: string;
  onAuthorSelect: (author: string) => void;
}

interface ComboBoxProps {
  value: string;
  onAuthorSelect: (author: string) => void;
  authors: string[]; 
}

export default function ComboBox({ value, onAuthorSelect, authors }: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selectedValue: string) => {
    const newValue = selectedValue === value ? "" : selectedValue;
    onAuthorSelect(newValue);
    setOpen(false);
  };

  return (
    <div className="my-5">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
            disabled={authors.length === 0}
          >
            {value || "Select author..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search author" />
            <CommandList>
              <CommandEmpty>No author found.</CommandEmpty>
              <CommandGroup>
                {authors.map((author) => (
                  <CommandItem
                    key={author.toLowerCase()}
                    value={author}
                    onSelect={() => handleSelect(author)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === author ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {author}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
