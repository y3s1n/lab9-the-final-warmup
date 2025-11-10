import { LitElement, html, css} from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import './todo-item.js';

/**
 * A web component that renders a scrollable list of todo items.
 * This component acts as a container for todo-item components and handles empty state display.
 * Uses the lit-html repeat directive for efficient rendering of todo items.
 * 
 * @extends {LitElement}
 * @listens {CustomEvent} toggle-todo - Bubbles up from todo items
 * @listens {CustomEvent} delete-todo - Bubbles up from todo items
 * @listens {CustomEvent} update-todo - Bubbles up from todo items
 * @customElement todo-list
 * 
 * @property {Array<Object>} todos - Array of todo objects to display
 * @property {number} todos[].id - Unique identifier for each todo
 * @property {string} todos[].text - The text content of the todo
 * @property {boolean} todos[].completed - Whether the todo is completed
 */
export class TodoList extends LitElement {
  static properties = {
    todos: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
    }

    .empty-state {
      text-align: center;
      padding: var(--space-2xl) var(--space-lg);
      color: var(--color-white);
      font-size: 18px;
    }

    .empty-icon {
      font-size: 48px;
      margin-bottom: var(--space-lg);
    }

    .list-container {
      max-height: 500px;
      overflow-y: auto;
    }

    /* Custom scrollbar */
    .list-container::-webkit-scrollbar {
      width: var(--space-sm);
    }

    .list-container::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }

    .list-container::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }

    .list-container::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `;

  /**
   * Creates an instance of TodoList.
   * Initializes the todos array as empty.
   */
  constructor() {
    super();
    this.todos = [];
  }

  /**
   * Renders the todo list component.
   * Shows an empty state message if there are no todos,
   * otherwise renders a scrollable list of todo-item components.
   * 
   * @returns {TemplateResult} The rendered HTML template
   */
  render() {
    if (this.todos.length === 0) {
      return html`
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <p>No todos yet. Add one above!</p>
        </div>
      `;
    }

    return html`
      <div class="list-container">
        ${repeat(
          this.todos,
          (todo) => todo.id,
          (todo) => html`<todo-item .todo=${todo}></todo-item>`
        )}
      </div>
    `;
  }
}

customElements.define('todo-list', TodoList);
