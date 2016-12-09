import { VideoEditorPage } from './app.po';

describe('video-editor App', function() {
  let page: VideoEditorPage;

  beforeEach(() => {
    page = new VideoEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
