import { renderWithProvider } from '../../testing/render-with-provider';
import Dialog from './dialog';

describe('Dialog', () => {
  it('should render successfully', () => {
    const { container } = renderWithProvider(
      <Dialog
        title="Dialog Title"
        buttons={{
          primary: { text: 'Primary', appearance: 'primary' },
          orientation: 'horizontal',
        }}
      />
    );
    expect(container).toBeTruthy();
  });
});
