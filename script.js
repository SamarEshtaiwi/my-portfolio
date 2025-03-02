function moveTask(element, targetColumnId) {
    var taskCard = element.closest('.task-card');
    var targetColumn = document.getElementById(targetColumnId);
    targetColumn.appendChild(taskCard);
}