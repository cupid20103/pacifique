import React from "react";
import { AppLayout } from "../../../layouts";
import Description from "../../../components/description-section";
import { data } from "./data";

const Value = () => {
  return (
    <AppLayout>
      <Description title={"Our Values"}>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <p>
                <b>{item.title}</b>
                {item.content}
              </p>
            </li>
          ))}
        </ul>
      </Description>
    </AppLayout>
  );
};

export default Value;
