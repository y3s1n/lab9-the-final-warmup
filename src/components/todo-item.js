import { LitElement, html, css } from 'lit';

/**
 * A web component that renders an individual todo item.
 * This component handles the display, editing, completion toggle, and deletion of a todo item.
 * 
 * @extends {LitElement}
 * @fires {CustomEvent<{ id: number }>} toggle-todo - Fired when the todo's completion status is toggled
 * @fires {CustomEvent<{ id: number }>} delete-todo - Fired when the todo is deleted
 * @fires {CustomEvent<{ id: number, text: string }>} update-todo - Fired when the todo's text is updated
 * @customElement todo-item
 */
export class TodoItem extends LitElement {
  static properties = {
    todo: { type: Object },
    isEditing: { state: true },
    editValue: { state: true }
  };

  static styles = css`
    :host {
      display: block;
    }

    .todo-item {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding: var(--space-md);
      background: var(--color-white);
      border-radius: 8px;
      margin-bottom: var(--space-sm);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .todo-item:hover {
      transform: translateX(var(--space-l));
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .checkbox {
      width: var(--space-xl);
      height: var(--space-xl);
      cursor: pointer;
    }

    .todo-text {
      flex: 1;
      font-size: 16px;
      color: var(--color-text-main);
      word-break: break-word;
    }

    .todo-text.completed {
      text-decoration: line-through;
      color: var(--color-text-completed);
    }

    .edit-input {
      flex: 1;
      padding: var(--space-sm);
      font-size: 16px;
      border: 2px solid var(--color-accent);
      border-radius: 4px;
      outline: none;
    }

    .button-group {
      display: flex;
      gap: var(--space-sm);
    }

    button {
      padding: var(--space-sm) var(--space-lg);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: background 0.2s;
    }

    .edit-btn {
      background: #4CAF50;
      color: white;
    }

    .edit-btn:hover {
      background: #45a049;
    }

    .delete-btn {
      background: var(--color-danger);
      color: white;
    }

    .delete-btn:hover {
      background: var(--color-danger-dark);
    }

    .save-btn {
      background: #2196F3;
      color: white;
    }

    .save-btn:hover {
      background: #0b7dda;
    }

    .cancel-btn {
      background: #757575;
      color: white;
    }

    .cancel-btn:hover {
      background: #616161;
    }
  `;

  /**
   * Creates an instance of TodoItem.
   * Initializes the editing state and edit value.
   */
  constructor() {
    super();
    this.isEditing = false;
    this.editValue = '';
  }

  /**
   * Handles the toggle event when the checkbox is clicked.
   * Dispatches a toggle-todo event with the todo's ID.
   * 
   * @fires {CustomEvent<{ id: number }>} toggle-todo - Contains the todo ID in event.detail.id
   */
  handleToggle() {
    this.dispatchEvent(new CustomEvent('toggle-todo', {
      detail: { id: this.todo.id },
      bubbles: true,
      composed: true
    }));
  }

  /**
   * Handles the delete button click.
   * Prompts for confirmation and dispatches a delete-todo event if confirmed.
   * 
   * @fires {CustomEvent<{ id: number }>} delete-todo - Contains the todo ID in event.detail.id
   */
  handleDelete() {
    if (confirm('Delete this todo?')) {
      this.dispatchEvent(new CustomEvent('delete-todo', {
        detail: { id: this.todo.id },
        bubbles: true,
        composed: true
      }));
    }
  }

  /**
   * Handles the edit button click.
   * Enters edit mode and initializes the edit value with the current todo text.
   */
  handleEdit() {
    this.isEditing = true;
    this.editValue = this.todo.text;
  }

  /**
   * Handles the save button click in edit mode.
   * Validates and dispatches an update-todo event with the new text.
   * 
   * @fires {CustomEvent<{ id: number, text: string }>} update-todo - Contains the todo ID and new text in event.detail
   */
  handleSave() {
    if (this.editValue.trim()) {
      this.dispatchEvent(new CustomEvent('update-todo', {
        detail: { id: this.todo.id, text: this.editValue },
        bubbles: true,
        composed: true
      }));
      this.isEditing = false;
    }
  }

  /**
   * Handles the cancel button click in edit mode.
   * Exits edit mode and resets the edit value.
   */
  handleCancel() {
    this.isEditing = false;
    this.editValue = '';
  }

  /**
   * Handles keyboard events in the edit input.
   * Enter key saves the changes, Escape key cancels editing.
   * 
   * @param {KeyboardEvent} e - The keyboard event object
   */
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.handleSave();
    } else if (e.key === 'Escape') {
      this.handleCancel();
    }
  }

  /**
   * Lifecycle hook called after the component updates.
   * We use it to auto-focus the edit input when entering edit mode.
   * @param {Map<string, any>} changedProps
   */
  updated(changedProps) {
    if (changedProps.has('isEditing') && this.isEditing) {
      const input = this.renderRoot.querySelector('.edit-input');
      if (input) {
        input.focus();
        input.select();
      }
    }
  }

  /**
   * Renders the todo item component.
   * Shows either the edit form or the todo display based on editing state.
   * 
   * @returns {TemplateResult} The rendered HTML template
   */
  render() {
    if (this.isEditing) {
      return html`
        <div class="todo-item">
          <input
            class="edit-input"
            type="text"
            .value=${this.editValue}
            @input=${(e) => this.editValue = e.target.value}
            @keydown=${this.handleKeyDown}
            autofocus
          />
          <div class="button-group">
            <button class="save-btn" @click=${this.handleSave}>Save</button>
            <button class="cancel-btn" @click=${this.handleCancel}>Cancel</button>
          </div>
        </div>
      `;
    }

    return html`
      <div class="todo-item">
        <input
          type="checkbox"
          class="checkbox"
          .checked=${this.todo.completed}
          @change=${this.handleToggle}
          aria-label="Toggle todo"
        />
        <span class="todo-text ${this.todo.completed ? 'completed' : ''}">
          ${this.todo.text}
        </span>
        <div class="button-group">
          <button
            class="edit-btn"
            @click=${this.handleEdit}
            ?disabled=${this.todo.completed}
            aria-label="Edit todo">
            Edit
          </button>
          <button
            class="delete-btn"
            @click=${this.handleDelete}
            aria-label="Delete todo">
            Delete
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('todo-item', TodoItem);
