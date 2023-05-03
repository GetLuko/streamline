import React from 'react';

import { Markdown } from './markdown';
import { renderWithProvider } from '../../testing/render-with-provider';

const md = `
# Heading 1
## Heading 2
### Heading 3
![Image](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Luko_Logo.svg/1024px-Luko_Logo.svg.png?20210318113716)
___
*italic* **bold** **_italicbold_** ~~cross~~ [This is a link](https://www.luko.eu) \`Code\`
---

> “Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs
1. First item
1. Second item

- Item
- Item


\`\`\`
I hope this email finds you well. It seems to be originating from your bathroom and has caused water to seep into my unit.
\`\`\`

&nbsp;&nbsp;&nbsp;&nbsp;Indent

[This is a comment that will be hidden.]: # 
      `;

describe('Markdown', () => {
  it('should render successfully', () => {
    // WHen
    const { getByText, getAllByText, queryByText } = renderWithProvider(
      <Markdown>{md}</Markdown>
    );
    // Then
    expect(getByText('Heading 1')).toBeTruthy();
    expect(getByText('Heading 2')).toBeTruthy();
    expect(getByText('Heading 3')).toBeTruthy();
    expect(getByText('italic')).toBeTruthy();
    expect(getByText('bold')).toBeTruthy();
    expect(getByText('italicbold')).toBeTruthy();
    expect(getByText('cross')).toBeTruthy();
    expect(getByText('1.')).toBeTruthy();
    expect(getByText('First item')).toBeTruthy();
    expect(getByText('2.')).toBeTruthy();
    expect(getByText('Second item')).toBeTruthy();
    expect(getAllByText('Item')).toBeTruthy();
    expect(
      getByText(
        'I hope this email finds you well. It seems to be originating from your bathroom and has caused water to seep into my unit.'
      )
    ).toBeTruthy();
    expect(getByText('Indent')).toBeTruthy();
    expect(queryByText('This is a comment that will be hidden.')).toBeNull();
  });
});
