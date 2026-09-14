import { Button } from "@/components/atoms/Button";
import { Heading, Text } from "@/components/atoms/Typography";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-shell flex-col items-center px-4 py-32 text-center md:px-6">
      <Heading level={1} as="h1">
        Off the map
      </Heading>
      <Text tone="muted" className="mt-4 max-w-md">
        That heritage site isn't in the showcase. Head back to browse all of
        Pangasinan's destinations.
      </Text>
      <div className="mt-8">
        <Button href="/" icon="arrow">
          Return home
        </Button>
      </div>
    </div>
  );
}
