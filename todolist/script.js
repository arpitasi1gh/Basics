const list = document.getElementById("my-list");
const taskBtnsDiv = document.querySelector(".task-btns");
const addBtn = document.querySelector(".addatask-btn");

function handleDueTime(value, operation) {
    if (operation==="formatDueTime") {
        const date = new Date(value);
        return date.toLocaleString(navigator.language, {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        }).replace(" at ", ", ").replace("am", "A.M.").replace("pm", "P.M.");
    } else if (operation==="undoFormatDueTime") {
        let dateObj = new Date(value);
        return dateObj.toISOString().slice(0, 16); 
    }
}

addBtn.addEventListener("click", () => {
    addBtn.style.display = "none";
    let newTask = document.createElement("li");
    newTask.className = "my-list-item editing";
    newTask.innerHTML = `
        Title: <input type="text" placeholder="Enter Title Here" class="task-title-input">
        Details: <textarea type="text" placeholder="Enter Details Here" class="task-details-input"></textarea>
        Due Time:<input type="datetime-local" class="task-due-time-input">
        <button class="deleteatask-btn"><img src="https://img.icons8.com/?size=100&id=98134&format=png&color=559681" alt="❌" width="20px" title="delete a task"></button>
        <button class="saveatask-btn"><img src="https://img.icons8.com/?size=100&id=11849&format=png&color=000000" alt="✅" width="20px" title="save a task"></button>
    `;
    list.appendChild(newTask);
});

list.addEventListener("click", (e) => {
    if (e.target.closest(".saveatask-btn")) {
        const editingLi = document.querySelector(".editing");
        const nextSibling = editingLi.nextElementSibling;

        const taskTitleInput = editingLi.querySelector(".task-title-input");
        const taskDetailsInput = editingLi.querySelector(".task-details-input");
        const taskDueTimeInput = editingLi.querySelector(".task-due-time-input");

        if (!taskTitleInput.value || !taskDetailsInput.value || !taskDueTimeInput.value) {
            alert("Please fill in all the fields before saving the task.");
            return;
        }
        const li = document.createElement("li");
        li.className = "my-list-item";
        li.innerHTML = `
                <div class="task-title">Task Title: <span>${taskTitleInput.value}</span></div>
                <div class="task-details">Its Details: <span>${taskDetailsInput.value}</span></div>
                <div class="task-due-time">Due Time: <span>${handleDueTime(taskDueTimeInput.value, "formatDueTime")}</span></div>
            <div class="task-btns">
                <input type="checkbox" class="markataskascomplete-btn" title="mark a task as complete">
                <button class="editatask-btn"><img src="https://img.icons8.com/?size=100&id=5267&format=png&color=559681" alt="✏️" width="30px" title="edit a task"></button>
                <button class="deleteatask-btn"><img src="https://img.icons8.com/?size=100&id=98134&format=png&color=559681" alt="❌" width="20px" title="delete a task"></button>
            </div>  
        `;
        list.insertBefore(li, nextSibling);

        editingLi.remove();
        addBtn.style.display = "block";

        updateLocalStorage();
    };
    
    if (e.target.closest(".deleteatask-btn")) {
        e.target.closest("li").remove();
        addBtn.style.display = "block";

        updateLocalStorage();
    }

    if (e.target.closest(".markataskascomplete-btn")) {
        const li = e.target.closest("li");
        const spans = li.querySelectorAll("span");
        const checkbox = li.querySelector("input[type='checkbox']");
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            spans.forEach(span => {
                span.style.marginLeft = "0";
            });
            li.style.background = "rgb(244 244 244 / 47%)";
            li.style.color = "grey";
            li.querySelectorAll("*").forEach(el => el.style.color = "inherit");
        } else {
            li.style.textDecoration = "none";
            spans.forEach(span => {
                span.style.marginLeft = "5px";
            });
            li.style.color = "rgb(54, 152, 121)";
            li.style.background = "rgba(216, 255, 238, 0.468)";
            spans.forEach(span => {
                span.style.color = "rgb(32, 92, 73)";
            });
        }
        updateLocalStorage();
    }

    if (e.target.closest(".editatask-btn")) {
        let li = e.target.closest("li");
        let currentTaskTitle = li.querySelector(".task-title span").innerText;
        let currentTaskDetails = li.querySelector(".task-details span").innerText;
        let currentTaskDueTime = li.querySelector(".task-due-time span").innerText;
        li.className = "my-list-item editing";
        li.innerHTML = `
            Title: <input type="text" placeholder="Enter Title Here" class="task-title-input" value="${currentTaskTitle}">
            Details: <textarea type="text" placeholder="Enter Details Here" class="task-details-input">${currentTaskDetails}</textarea>
            Due Time:<input type="datetime-local" class="task-due-time-input" value="${handleDueTime(currentTaskDueTime, "undoFormatDueTime")}">
            <button class="deleteatask-btn"><img src="https://img.icons8.com/?size=100&id=98134&format=png&color=559681" alt="❌" width="20px" title="delete a task"></button>
            <button class="saveatask-btn"><img src="https://img.icons8.com/?size=100&id=11849&format=png&color=000000" alt="✅" width="20px" title="save a task"></button>
        `;
    }

});

function updateLocalStorage() {
    let tasks = [];
    document.querySelectorAll(".my-list-item:not(.editing)").forEach(li => {
        tasks.push({
            title: li.querySelector(".task-title span").innerText,
            details: li.querySelector(".task-details span").innerText,
            time: li.querySelector(".task-due-time span").innerText,
            completed: li.querySelector("input[type='checkbox']").checked
        });
    });
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTasks = JSON.parse(localStorage.getItem("myTasks")) || [];

    savedTasks.forEach(task => {
        let li = document.createElement("li");
        li.className = "my-list-item";
        li.innerHTML = `
            <div class="task-title">Task Title: <span>${task.title}</span></div>
            <div class="task-details">Its Details: <span>${task.details}</span></div>
            <div class="task-due-time">Due Time: <span>${task.time}</span></div>
            <div class="task-btns">
                <input type="checkbox" class="markataskascomplete-btn" title="mark a task as complete">
                <button class="editatask-btn"><img src="https://img.icons8.com/?size=100&id=5267&format=png&color=559681" alt="✏️" width="30px" title="edit a task"></button>
                <button class="deleteatask-btn"><img src="https://img.icons8.com/?size=100&id=98134&format=png&color=559681" alt="❌" width="20px" title="delete a task"></button>
            </div>  
        `;
        list.appendChild(li);
        if (task.completed === true) {
            const spans = li.querySelectorAll("span");
            li.querySelector("input[type='checkbox']").checked = true;
            li.style.textDecoration = "line-through";
            spans.forEach(span => {
                span.style.marginLeft = "0";
            });
            li.style.background = "rgb(244 244 244 / 47%)";
            li.style.color = "grey";
            li.querySelectorAll("*").forEach(el => el.style.color = "inherit");
        }
    });
});
