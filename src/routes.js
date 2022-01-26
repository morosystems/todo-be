const controller = require('./controller.js');

/**
 * @typedef {object} Task
 * @property {string} id - Identification
 * @property {string} text - Content
 * @property {boolean} completed - Status
 * @property {number} createdDate - Date when task was created
 * @property {number} completedDate - Date when task was completed
 */

/**
 * @typedef {object} CreateTask
 * @property {string} text.required - Content
 */

/**
 * @typedef {object} UpdateTask
 * @property {string} text.required - Content
 */

module.exports = (app) => {

    /**
     * GET /tasks
     * @summary Returns all tasks. Slow service, around 3 seconds
     * @tags Tasks
     * @return {array<Task>} 200 - success response - application/json
     */
    /**
     * POST /tasks
     * @summary Creates task with given text then returns it
     * @tags Tasks
     * @param {CreateTask} request.body.required - text
     * @return {Task} 200 - Task created - application/json
     * @return {string} 422 - Bad request response
     */
    app.route('/tasks')
        .get(controller.getAll)
        .post(controller.create);

    /**
     * GET /tasks/completed
     * @summary Returns all completed tasks
     * @tags Tasks
     * @return {array<Task>} 200 - success response - application/json
     */
    app.route('/tasks/completed')
        .get(controller.getCompleted);

    /**
     * POST /tasks/{id}
     * @summary Updates text of given task
     * @tags Tasks
     * @param {string} id.path.required - ID of task
     * @param {UpdateTask} request.body.required - text
     * @return {array<Task>} 200 - Todo updated - application/json
     * @return {string} 422 - Bad request
     */
    /**
     * DELETE /tasks/{id}
     * @summary Deletes given task
     * @tags Tasks
     * @param {string} id.path.required - ID of task
     * @return {array<Task>} 200 - Task deleted - application/json
     * @return {string} 422 - Bad request
     * @return {string} 400 - ID of task was not found
     */
    app.route('/tasks/:id')
        .post(controller.updateText)
        .delete(controller.delete);

    /**
     * POST /tasks/{id}/complete
     * @summary Completes given task, then returns modified task
     * @tags Todos
     * @param {string} id.path.required - ID of task
     * @return {array<Task>} 200 - success response - application/json
     * @return {string} 422 - Bad request
     * @return {string} 400 - ID of task was not found
     */
    app.route('/tasks/:id/complete')
        .post(controller.complete);

    /**
     * POST /tasks/{id}/incomplete
     * @summary Incompletes given task, then returns modified task
     * @tags Tasks
     * @param {string} id.path.required - ID of task
     * @return {array<Task>} 200 - success response - application/json
     * @return {string} 422 - Bad request
     * @return {string} 400 - ID of task was not found
     */
    app.route('/tasks/:id/incomplete')
        .post(controller.incomplete);
};
