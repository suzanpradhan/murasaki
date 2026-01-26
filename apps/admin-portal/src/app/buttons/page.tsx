import { Button } from "@repo/ui/buttons";
import { CustomButton, TextField } from "@repo/zenlots";
import ComponentDisplay from "../(components)/ComponentDisplay";

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Button</h1>
      <p>
        The button control provides a Click event respond to user input from a
        touch, mouse, keyboard, or other input devices. You can put different
        kinds of content in a button, such as text or an image, or you can
        restyle a button to give it a new look
      </p>

      <TextField
        label="Text Field"
        placeholder="Enter text here"
        className="rounded-sm" id={"example-input"}        
      />

      <ComponentDisplay
        label="A Simple Button"
        component={<Button label="Button Label" className="rounded-sm" />}
      />
      <ComponentDisplay
        label="A Destructive Button"
        component={
          <Button
            variant="destructive"
            label="Button Label"
            className="rounded-sm"
          />
        }
      />
      <ComponentDisplay
        label="A Outlined Button"
        component={
          <CustomButton
            // variant="outline"
            // label="Button Label"
            className="rounded-sm"
            buttonType="bordered"
            text="Zenlots Button"
          />
        }
      />
      <ComponentDisplay
        label="A Ghost Button"
        component={
          <Button variant="ghost" label="Button Label" className="rounded-sm" />
        }
      />
      <ComponentDisplay
        label="A Secondary Button"
        component={
          <Button
            variant="secondary"
            label="Button Label"
            className="rounded-sm"
          />
        }
      />
      <ComponentDisplay
        label="A Link Button"
        component={
          <Button
            variant="link"
            href="buttons"
            label="Button Label"
            className="rounded-sm"
          />
        }
      />
    </div>
  );
}
