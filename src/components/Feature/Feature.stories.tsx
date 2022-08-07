import { ComponentStory, ComponentMeta } from "@storybook/react";
import { features } from "process";
import Feature from "./Feature";

export default {
  title: "Feature",
  component: Feature,
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = () => {
  return <Feature />;
};

export const FeatureStory = Template.bind({});
