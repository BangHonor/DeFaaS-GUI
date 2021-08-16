import { MarkdownPipe } from './markdwon.pipe';

describe('MarkdwonPipe', () => {
  it('create an instance', () => {
    const pipe = new MarkdownPipe();
    expect(pipe).toBeTruthy();
  });
});
