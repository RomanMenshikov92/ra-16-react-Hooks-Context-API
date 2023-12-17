import { DataComponent } from "./DataComponent";
import { ErrorComponent } from "./ErrorComponent";
import { LoadingComponent } from "./LoadingComponent";
import "./general.css";

export const GeneralComponent: React.FC = () => {
  return (
    <div className="general">
      <DataComponent />
      <ErrorComponent />
      <LoadingComponent />
    </div>
  );
};
export default GeneralComponent;
