import React, { FunctionComponent } from "react";
import { IService } from "@/types";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return { __html: about } as { __html: string | TrustedHTML };
  };

  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-24 h-12 text-blue" />
      <div>
        <h5 className="font-bold">{title}</h5>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
