/**
 * the interface provide the structure of the todo.
 * @example {
 *  "id": "52907745-7672-470e-a803-a2f8feb52944",
 *  "title": "Coding Assignment"
 *  "description": "complete all the coding assignment" 
 *  }
 */

export interface Todo {
  id: string;
  /**
   * The title of the todo
   */
  title: string;
  /**
   * the brief description of the todo
   */
  description: string;
}
