import { LitElement, html, css } from 'lit';

/**
 * A web component that renders a form for adding new todo items.
 * This component extends LitElement and provides a styled input form with submit functionality.
 * 
 * @extends {LitElement}
 * @fires {CustomEvent} add-todo - Fired when a new todo is submitted with the todo text in the detail
 * @customElement todo-form
 */
export class TodoForm extends LitElement {
  static properties = {
    inputValue: { state: true }
  };


  static styles = css`
    :host {
      display: block;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      gap: 8px;
    }

    input {
      flex: 1;
      padding: 12px 16px;
      font-size: 16px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      outline: none;
      transition: border-color 0.3s;
    }

    input:focus {
      border-color: #667eea;
    }

    button {
      padding: 12px 24px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #5568d3;
    }

    button:active {
      transform: translateY(1px);
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `;

  /**
   * Creates an instance of TodoForm.
   * Initializes the input value state to an empty string.
   */
  constructor() {
    super();
    this.inputValue = '';
  }

  /**
   * Handles the form submission event.
   * Prevents the default form submission, trims the input value, and if not empty,
   * dispatches an 'add-todo' event with the todo text and clears the input.
   * 
   * @param {Event} e - The form submission event
   * @fires {CustomEvent} add-todo - Contains the todo text in event.detail.text
   */
  handleSubmit(e) {
    e.preventDefault();
    const text = this.inputValue.trim();

    if (text) {
      this.dispatchEvent(new CustomEvent('add-todo', {
        detail: { text },
        bubbles: true,
        composed: true
      }));

      this.inputValue = '';
    }
  }

  /**
   * Handles the input change event.
   * Updates the inputValue property with the current input value.
   * 
   * @param {InputEvent} e - The input event object
   */
  handleInput(e) {
    this.inputValue = e.target.value;
  }

  /**
   * Renders the todo form component.
   * 
   * @returns {TemplateResult} The rendered HTML template
   */
  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          .value=${this.inputValue}
          @input=${this.handleInput}
          aria-label="New todo"
          autofocus
        />
        <button type="submit" ?disabled=${!this.inputValue.trim()}>
          Add
        </button>
      </form>
    `;
  }
}

customElements.define('todo-form', TodoForm);
