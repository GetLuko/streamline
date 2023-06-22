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

> # “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
---

1. First item
1. Second item

- Item
- Item

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indent

\`\`\`
I hope this email finds you well. It seems to be originating from your bathroom and has caused water to seep into my unit.
\`\`\`
[This is a comment that will be hidden.]: # 


![Image](https://images.prismic.io/luko/12533d65-918a-4653-8b1a-9b51191b187a_Picture_Maison.jpg?auto=compress,format&w=309&h=232)

**Bold text draws attention to important concepts.** *Italic text adds additional context or emphasizes a specific point.* **_Italic bold text provides even greater emphasis._** [Hyperlinks](https://www.luko.eu) provide easy access to external resources. ~~Strikethrough indicates a word to be removed~~

![Image](https://w0.peakpx.com/wallpaper/148/185/HD-wallpaper-nature-landscape-portrait-display-leaves-fallen-leaves-dirt-road-trees-forest-fall.jpg)

Unordered lists are lists of items that do not have a specific order:

- Fire damage
- Water damage
- Theft or burglary
- Natural disasters
- Liability claims
___

Ordered lists are lists of items that follow a specific numerical order

1. Evaluate the value of your home contents
1. Research different insurance providers and policies 
1. Determine the amount of coverage you need
1. Understand what your policy covers and what it doesn't
1. Review and update your policy regularly
---

![Image](https://t6w3k2m6.stackpathcdn.com/wp-content/uploads/2012/01/IMG_6347-square-vertorama.jpg?iv=344)

      `}
    </Markdown>
  </Box>
);
