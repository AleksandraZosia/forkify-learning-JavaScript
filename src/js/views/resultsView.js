import previewView from './previewView.js';
import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found matching your query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(rec => previewView.render(rec, 0)).join('');
  }
}

export default new ResultsView();
