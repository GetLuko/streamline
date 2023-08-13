import { CardHighlight } from '@getluko/streamline';

import { DocList } from '../components/DocList';
import { sleep } from '../sandbox.utils';

const onPress = async () => {
  await sleep(2000);
  console.log('CardHighlight Pressed');
};

const docs: JSX.Element[] = [
  <CardHighlight
    title="Title"
    description="Description"
    tag={{ iconName: 'Area', text: 'light' }}
    media={{
      uri: 'https://s3-alpha-sig.figma.com/img/1d9e/bcc6/93fdcc7622862b918dbaff841542b0b7?Expires=1692576000&Signature=GDZ0vqclt~ZFTRn1iQS-YVxwaU0XZlHwJaZmArPtShNq8WWd8bHuxcMvdYkvEw9S8kF02plutnri6zA3SKqCAHyGRQi6yKA2vkpSmbqgvAmprB2iDXgzf0vZh84WYJKPEWDr8eXnuF0a2BW-CVQboQyND5WzC~QxD7DlntYsgDFptxbDJF-SU2sDc0M8PhV0zhfvnD~u9mY-SkI8p~aJXbTzLAYF9HqdH9gCkEsjbShBm8WfDYibOLa7H8BNpbDmLjNZ7n1Te6JSvKTso69c~qaUvKRVSG13rmNj4zt014WjoDXOoY-0n1fgWJgtxahsY3FPrjfgtAWD5VXm69rDBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    }}
    onPress={onPress}
  />,
  <CardHighlight
    appearance="secondary"
    title="Title"
    description="Description"
    tag={{ iconName: 'Area', text: 'tag' }}
    media={{
      uri: 'https://s3-alpha-sig.figma.com/img/1d9e/bcc6/93fdcc7622862b918dbaff841542b0b7?Expires=1692576000&Signature=GDZ0vqclt~ZFTRn1iQS-YVxwaU0XZlHwJaZmArPtShNq8WWd8bHuxcMvdYkvEw9S8kF02plutnri6zA3SKqCAHyGRQi6yKA2vkpSmbqgvAmprB2iDXgzf0vZh84WYJKPEWDr8eXnuF0a2BW-CVQboQyND5WzC~QxD7DlntYsgDFptxbDJF-SU2sDc0M8PhV0zhfvnD~u9mY-SkI8p~aJXbTzLAYF9HqdH9gCkEsjbShBm8WfDYibOLa7H8BNpbDmLjNZ7n1Te6JSvKTso69c~qaUvKRVSG13rmNj4zt014WjoDXOoY-0n1fgWJgtxahsY3FPrjfgtAWD5VXm69rDBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    }}
    onPress={onPress}
  />,
  <CardHighlight
    appearance="warning"
    title="Title"
    description="Description"
    tag={{ iconName: 'Area', text: 'tag' }}
    media={{
      uri: 'https://s3-alpha-sig.figma.com/img/1d9e/bcc6/93fdcc7622862b918dbaff841542b0b7?Expires=1692576000&Signature=GDZ0vqclt~ZFTRn1iQS-YVxwaU0XZlHwJaZmArPtShNq8WWd8bHuxcMvdYkvEw9S8kF02plutnri6zA3SKqCAHyGRQi6yKA2vkpSmbqgvAmprB2iDXgzf0vZh84WYJKPEWDr8eXnuF0a2BW-CVQboQyND5WzC~QxD7DlntYsgDFptxbDJF-SU2sDc0M8PhV0zhfvnD~u9mY-SkI8p~aJXbTzLAYF9HqdH9gCkEsjbShBm8WfDYibOLa7H8BNpbDmLjNZ7n1Te6JSvKTso69c~qaUvKRVSG13rmNj4zt014WjoDXOoY-0n1fgWJgtxahsY3FPrjfgtAWD5VXm69rDBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    }}
    onPress={onPress}
  />,
  <CardHighlight
    appearance="danger"
    title="Title"
    description="Description"
    tag={{ iconName: 'Area', text: 'tag' }}
    media={{
      uri: 'https://s3-alpha-sig.figma.com/img/1d9e/bcc6/93fdcc7622862b918dbaff841542b0b7?Expires=1692576000&Signature=GDZ0vqclt~ZFTRn1iQS-YVxwaU0XZlHwJaZmArPtShNq8WWd8bHuxcMvdYkvEw9S8kF02plutnri6zA3SKqCAHyGRQi6yKA2vkpSmbqgvAmprB2iDXgzf0vZh84WYJKPEWDr8eXnuF0a2BW-CVQboQyND5WzC~QxD7DlntYsgDFptxbDJF-SU2sDc0M8PhV0zhfvnD~u9mY-SkI8p~aJXbTzLAYF9HqdH9gCkEsjbShBm8WfDYibOLa7H8BNpbDmLjNZ7n1Te6JSvKTso69c~qaUvKRVSG13rmNj4zt014WjoDXOoY-0n1fgWJgtxahsY3FPrjfgtAWD5VXm69rDBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    }}
    onPress={onPress}
  />,
  <CardHighlight
    appearance="success"
    title="Title"
    description="Description"
    tag={{ iconName: 'Area', text: 'tag' }}
    media={{
      uri: 'https://s3-alpha-sig.figma.com/img/1d9e/bcc6/93fdcc7622862b918dbaff841542b0b7?Expires=1692576000&Signature=GDZ0vqclt~ZFTRn1iQS-YVxwaU0XZlHwJaZmArPtShNq8WWd8bHuxcMvdYkvEw9S8kF02plutnri6zA3SKqCAHyGRQi6yKA2vkpSmbqgvAmprB2iDXgzf0vZh84WYJKPEWDr8eXnuF0a2BW-CVQboQyND5WzC~QxD7DlntYsgDFptxbDJF-SU2sDc0M8PhV0zhfvnD~u9mY-SkI8p~aJXbTzLAYF9HqdH9gCkEsjbShBm8WfDYibOLa7H8BNpbDmLjNZ7n1Te6JSvKTso69c~qaUvKRVSG13rmNj4zt014WjoDXOoY-0n1fgWJgtxahsY3FPrjfgtAWD5VXm69rDBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    }}
    onPress={onPress}
  />,
  <CardHighlight
    isSkeleton
    title="Title"
    description="Description"
    tag={{ iconName: 'Area', text: 'tag' }}
    media={{
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Luko_Logo.svg/1024px-Luko_Logo.svg.png?20210318113716',
    }}
    onPress={onPress}
  />,
];

export const CardHighlightSandbox = () => <DocList docs={docs} />;
