import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './View';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(rec => previewView.render(rec, 0)).join('');
  }
}

export default new BookmarksView();
