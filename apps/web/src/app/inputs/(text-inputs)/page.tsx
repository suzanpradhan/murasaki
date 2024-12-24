import { Inputs } from "@repo/ui/inputs";
import ComponentDisplay from "../../(components)/ComponentDisplay";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Text Input</h1>
      <p>
        The Input field lets user type text into an app. Its typically used to
        capture a single line of text, but can be configured to capture multiple
        lines of text. The text displays on the screen in a simple, uniform,
        plaintext format. It has a number of features that can simplyfy text
        entry. It comes with a familar, build-in context menu with support for
        copying and pasting text. It also has spell checking capabilities build
        in and enabled by default.
      </p>

      <ComponentDisplay
        label="A Simple Input Field"
        component={<Inputs id="simple input" placeholder="Placeholder" />}
      />
      <ComponentDisplay
        label="A Simple Input Field with label"
        component={
          <Inputs
            id="simple input"
            label="Input label"
            placeholder="Placeholder"
          />
        }
      />
      <ComponentDisplay
        label="A Multiline Text field"
        component={
          <Inputs id="simple input" isMulti placeholder="Placeholder" />
        }
      />
      <ComponentDisplay
        label="A Disabled Input Field"
        component={
          <Inputs id="simple input" disabled placeholder="Placeholder" />
        }
      />
    </div>
  );
}
