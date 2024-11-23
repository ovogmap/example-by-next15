import Text from "../text/text";
import { CalloutContainer } from "./callout.css";

export default function Callout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={CalloutContainer}>
      <Text>{children}</Text>
    </div>
  );
}
