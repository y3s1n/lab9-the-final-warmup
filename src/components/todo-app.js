import { LitElement, html, css } from 'lit';
import { TodoModel } from '../models/todo-model.js';
import { StorageService } from '../services/storage-service.js';
import './todo-form.js';
import './todo-list.js';

/**
 * A web component that serves as the main todo application container.
 * This component manages the state and coordinates interactions between the todo form,
 * list, and storage service. It provides statistics and management actions for todos.
 * 
 * @extends {LitElement}
 * @fires {CustomEvent} add-todo - Listens for todo additions
 * @fires {CustomEvent} toggle-todo - Listens for todo completion toggles
 * @fires {CustomEvent} delete-todo - Listens for todo deletions
 * @fires {CustomEvent} update-todo - Listens for todo text updates
 * @customElement todo-app
 */
export class TodoApp extends LitElement {

  static styles = css`
    :host {
      display: block;
    }

    .app-container {
      background: white;
      border-radius: 16px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      padding: 32px;
      min-height: 400px;
    }

    h1 {
      margin: 0 0 8px 0;
      color: #333;
      font-size: 32px;
      font-weight: 700;
    }

    .subtitle {
      color: #666;
      margin-bottom: 24px;
      font-size: 14px;
    }

    .stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background: #f5f5f5;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #667eea;
    }

    .stat-label {
      font-size: 12px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .actions {
      display: flex;
      gap: 8px;
      margin-top: 20px;
    }

    button {
      flex: 1;
      padding: 10px 16px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .clear-completed {
      background: #ff9800;
      color: white;
    }

    .clear-completed:hover {
      background: #f57c00;
    }

    .clear-all {
      background: #f44336;
      color: white;
    }

    .clear-all:hover {
      background: #da190b;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .footer {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      text-align: center;
      color: #666;
      font-size: 12px;
    }
  `;

  /**
   * Creates an instance of TodoApp.
   * Initializes the storage service, todo model, and sets up model change subscription.
   */
  constructor() {
    super();
    this.storageService = new StorageService();
    this.model = new TodoModel(this.storageService);

    // Subscribe to model changes
    this.model.subscribe(() => {
      this.requestUpdate();
    });
  }

  /**
   * Handles the add-todo event from the todo form.
   * Adds a new todo item to the model with the provided text.
   * 
   * @param {CustomEvent} e - The add-todo event containing the todo text
   */
  handleAddTodo(e) {
    this.model.addTodo(e.detail.text);
  }

  /**
   * Handles the toggle-todo event from the todo list.
   * Toggles the completion status of the specified todo.
   * 
   * @param {CustomEvent} e - The toggle-todo event containing the todo ID
   */
  handleToggleTodo(e) {
    this.model.toggleComplete(e.detail.id);
  }

  /**
   * Handles the delete-todo event from the todo list.
   * Removes the specified todo from the model.
   * 
   * @param {CustomEvent} e - The delete-todo event containing the todo ID
   */
  handleDeleteTodo(e) {
    this.model.deleteTodo(e.detail.id);
  }

  /**
   * Handles the update-todo event from the todo list.
   * Updates the text of the specified todo.
   * 
   * @param {CustomEvent} e - The update-todo event containing the todo ID and new text
   */
  handleUpdateTodo(e) {
    this.model.updateTodo(e.detail.id, e.detail.text);
  }

  /**
   * Handles the clear completed todos action.
   * Prompts for confirmation before removing all completed todos.
   */
  handleClearCompleted() {
    if (confirm('Clear all completed todos?')) {
      this.model.clearCompleted();
    }
  }

  /**
   * Handles the clear all todos action.
   * Prompts for confirmation before removing all todos.
   */
  handleClearAll() {
    if (confirm('Clear ALL todos? This cannot be undone.')) {
      this.model.clearAll();
    }
  }

  /**
   * Renders the todo application component.
   * Includes statistics, todo form, todo list, and action buttons.
   * 
   * @returns {TemplateResult} The rendered HTML template
   */
  render() {
    return html`
      <div class="app-container">
        <h1>My Tasks</h1>
        <p class="subtitle">Stay organized and productive</p>

        <div class="stats">
          <div class="stat-item">
            <div class="stat-value">${this.model.todos.length}</div>
            <div class="stat-label">Total</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.model.activeCount}</div>
            <div class="stat-label">Active</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.model.completedCount}</div>
            <div class="stat-label">Completed</div>
          </div>
        </div>

        <todo-form
          @add-todo=${this.handleAddTodo}>
        </todo-form>

        <todo-list
          .todos=${this.model.todos}
          @toggle-todo=${this.handleToggleTodo}
          @delete-todo=${this.handleDeleteTodo}
          @update-todo=${this.handleUpdateTodo}>
        </todo-list>

        <div class="actions">
          <button
            class="clear-completed"
            @click=${this.handleClearCompleted}
            ?disabled=${this.model.completedCount === 0}>
            Clear Completed
          </button>
          <button
            class="clear-all"
            @click=${this.handleClearAll}
            ?disabled=${this.model.todos.length === 0}>
            Clear All
          </button>
        </div>

        <div class="footer">
          Lab 9: The final battle!
        </div>
      </div>
    `;
  }
}

customElements.define('todo-app', TodoApp);
