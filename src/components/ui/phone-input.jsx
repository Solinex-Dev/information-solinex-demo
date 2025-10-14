import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "./command";
import { Input } from "./input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { ScrollArea } from "./scroll-area";
import { cn } from "../../lib/utils";

// Main PhoneInput component with country selector and international formatting
const PhoneInput = React.forwardRef(
  ({ className, onChange, value, error, ...props }, ref) => {
    return (
      <div className={cn("flex w-full", error && "ring-2 ring-red-500 rounded-xl", className)}>
        <RPNInput.default
          ref={ref}
          className="flex w-full"
          flagComponent={FlagComponent}
          countrySelectComponent={CountrySelect}
          inputComponent={InputComponent}
          smartCaret={false}
          value={value || undefined}
          onChange={(value) => onChange?.(value || "")}
          international={true}
          withCountryCallingCode={true}
          {...props}
        />
      </div>
    );
  },
);
PhoneInput.displayName = "PhoneInput";

// Custom input component with Solinex styling
const InputComponent = React.forwardRef(({ className, ...props }, ref) => (
  <Input
    className={cn(
      "h-12 px-4 py-4 rounded-e-xl rounded-s-none border-solinex-blue/30 bg-white/80 backdrop-blur-sm text-solinex-teal placeholder:text-solinex-teal/60 focus:ring-solinex-blue focus:border-solinex-blue focus:outline-none transition-all duration-200",
      className
    )}
    {...props}
    ref={ref}
  />
));
InputComponent.displayName = "InputComponent";

// Country selector with search functionality
const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}) => {
  const scrollAreaRef = React.useRef(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSearchChange = (value) => {
    setSearchValue(value);
    // Reset scroll position when searching
    setTimeout(() => {
      if (scrollAreaRef.current) {
        const viewportElement = scrollAreaRef.current.querySelector(
          "[data-radix-scroll-area-viewport]"
        );
        if (viewportElement) {
          viewportElement.scrollTop = 0;
        }
      }
    }, 0);
  };

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (open) setSearchValue("");
  };

  return (
    <Popover
      open={isOpen}
      modal={false}
      onOpenChange={handleOpenChange}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="h-12 flex gap-1 rounded-e-none rounded-s-xl border-r-0 px-4 py-4 focus:z-10 border-solinex-blue/30 bg-white/80 backdrop-blur-sm text-solinex-teal hover:bg-white focus:outline-none focus:ring-2 focus:ring-solinex-blue focus:border-transparent transition-all duration-200"
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown
            className={cn(
              "-mr-2 size-4 opacity-50",
              disabled ? "hidden" : "opacity-100"
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            value={searchValue}
            onValueChange={handleSearchChange}
            placeholder="Search country..."
          />
          <CommandList>
            <ScrollArea ref={scrollAreaRef} className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <div className="p-1">
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                      onSelectComplete={() => setIsOpen(false)}
                    />
                  ) : null
                )}
              </div>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

// Individual country option with click handling
const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
  onSelectComplete,
}) => {
  const handleClick = () => {
    onChange(country);
    onSelectComplete();
  };

  const isSelected = country === selectedCountry;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 gap-2"
      style={{ 
        backgroundColor: isSelected ? 'hsl(var(--accent))' : 'transparent',
        color: isSelected ? 'hsl(var(--accent-foreground))' : 'hsl(var(--foreground))'
      }}
    >
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-left">{countryName}</span>
      <span className="text-sm text-muted-foreground">
        +{RPNInput.getCountryCallingCode(country)}
      </span>
      <CheckIcon
        className={`ml-auto size-4 ${isSelected ? "opacity-100" : "opacity-0"}`}
      />
    </button>
  );
};

// Country flag component
const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg:not([class*='size-'])]:size-full">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };