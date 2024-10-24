import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Code } from './Code';


export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({});
Primary.args = {
    text: "import { type ComponentMeta, type ComponentStory } from '@storybook/react';\n"
            + "import { Code } from './Code';\n"
            + "export default {\n"
            + "title: 'shared/Code',\n"
            +  "component: Code,\n"
            + "argTypes: {\n"
            +    "backgroundColor: { control: 'color' }\n"
            + "}\n"
            + "} as ComponentMeta<typeof Code>\n"
}