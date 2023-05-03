import { Box, Markdown } from '@getluko/streamline';

export const MarkdownSandbox = () => (
  <Box marginHorizontal="md">
    <Markdown>
      {`
# Heading 1
## Heading 2
### Heading 3
![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Luko_Logo.svg/1024px-Luko_Logo.svg.png?20210318113716)
___
*italic* **bold** **_italicbold_** ~~cross~~ [This is a link](https://www.luko.eu) \`Code\`

> “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
---

1. First item
1. Second item

- Item
- Item

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indent

\`\`\`
I hope this email finds you well. It seems to be originating from your bathroom and has caused water to seep into my unit.
\`\`\`
[This is a comment that will be hidden.]: # 
      `}
    </Markdown>
  </Box>
);
