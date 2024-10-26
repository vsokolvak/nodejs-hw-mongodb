export const button = {

    _button: document.querySelector('.form-button'),

    active() {
        this._button.disabled = false
        this._button.classList.add('active')
    },

    disable() {
        this._button.disabled = true;
        this._button.classList.remove('active');
    }
}