import { Switch } from "@repo/ui/switch";
import ComponentDisplay from "../../(components)/ComponentDisplay";

const Page = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Button</h1>
      <p>
        The toggle switch represents a physical switch that allows users to turn
        things on or off, like a light switch. Use toggle switch controls to
        present users with two mutually exclusive options (such as on/off),
        where choosing an option provides immediate results.
      </p>
      <ComponentDisplay label="A Simple Switch" component={<Switch />} />
      <ComponentDisplay
        label="A Simple Disabled Switch"
        component={<Switch disabled />}
      />
    </div>
  );
};

export default Page;
