"use client";

import { useId, useState } from "react";
import { Icon } from "../atoms/Icon";
import { Button } from "../atoms/Button";

/**
 * MOLECULE — Search Form
 * Input + submit built from atoms. It manages its own text state and reports
 * the query up through `onSearch` (controlled from outside, e.g. to filter the
 * Heritage Grid). A visually-hidden <label> keeps it usable without a
 * placeholder-only cue (WCAG 3.3.2).
 */
type SearchFormProps = {
  onSearch?: (query: string) => void;
  placeholder?: string;
  defaultValue?: string;
};

export function SearchForm({
  onSearch,
  placeholder = "Search a town or landmark",
  defaultValue = "",
}: SearchFormProps) {
  const id = useId();
  const [value, setValue] = useState(defaultValue);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSearch?.(value.trim());
  }

  return (
    <form onSubmit={submit} role="search" className="flex items-center gap-2">
      <label htmlFor={id} className="sr-only">
        Search heritage sites
      </label>
      <div className="relative flex-1">
        <span
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mist"
        >
          <Icon name="search" size={18} />
        </span>
        <input
          id={id}
          type="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onSearch?.(e.target.value.trim()); // live filtering
          }}
          placeholder={placeholder}
          className="w-full rounded-pill border border-hairline bg-pine py-3 pl-10 pr-4 font-body text-sm text-sand placeholder:text-mist focus:border-gold focus:outline-none"
        />
      </div>
      <Button type="submit" size="md" variant="secondary">
        Search
      </Button>
    </form>
  );
}
