import React from "react";
// @import layouts
import { AppLayout } from "../../../layouts";
// @import components
import Description from "../../../components/description-section";
// @import resources
import { data } from "./data";
import benefit from "../../../assets/images/benefit.svg";

const Value = () => {
  return (
    <AppLayout>
      <Description title={"MEMBERSHIP BENEFITS"} img={benefit}>
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
