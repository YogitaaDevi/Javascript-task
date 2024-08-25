const tasks = document.getElementById("task-list");
const task_form = document.getElementById("task_form");
const create_task = document.getElementById("create_task");
const cancel_task = document.getElementById("cancel-task");
const reset_form = document.getElementById("reset-form");
const submit_task = document.getElementById("submit-form");
const task_name = document.getElementById("task-name");
const task_image = document.getElementById("task-image");
const task_start_time= document.getElementById("task-start-time");
const task_end_time = document.getElementById("task-end-time");
const people_list = document.getElementById("people-list");
const form = document.getElementById("form")

let task = [
  { name: "Jogging", img: "../assets/images/diet.png", start_time: "06.00", end_time: "07.00", people: [] },
  { name: "Read a book", img: "../assets/images/books.jpg", start_time: "08.00", end_time: "09.00", people: [] },
  {
    name: "Moodboard Landing Page", img: "", start_time: "11.00", end_time: "13.00",
    people: ["../assets/images/profile_img1.jpg", "../assets/images/profile_img2.png"]
  }
]
const task_list = (task) => {
  task.forEach((data) => {
    let people_image = '';
    let task_img = '';
    if (data.people.length != 0) {
      data.people.forEach((img) =>
        people_image += `<img src=${img} alt="" class="h-8 w-8 rounded-full border border-white -me-2">`)
  
    }
    if (data.img) {
      task_img = `<img src=${data.img} alt="diet plan" class="h-4">`;
    } else {
      task_img = `<svg class="h-5 w-5 text-blue-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>`
    }
    tasks.innerHTML +=
      `<li class="bg-white rounded-lg h-12 flex justify-between px-3">
            <div class="flex items-center gap-x-2">
              <input type="checkbox" class="h-5 w-5">
              <span class="w-max">
                ${data.name}
              </span>
              <div class="h-6 w-6 bg-neutral-100 rounded-md flex justify-center items-center">
              ${task_img}
              </div>
            </div>
            <div class="flex text-stone-500 items-center gap-x-1.5">
              <div class="flex w-max ms-2">
                ${people_image}
              </div>
              <div class="h-8 bg-neutral-100 w-28 rounded-lg flex items-center justify-center">
                <i class="fa-regular fa-clock me-1"></i>
                <span class="w-max"> ${data.start_time}-${data.end_time} </span>
              </div>
              <div class="h-8 bg-neutral-100 w-8 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>
            </div>
          </li>
          `
  })
}

task_list(task);

create_task.onclick = () => task_form.style.display = "block";
cancel_task.onclick = (event) => {event.preventDefault(); form.reset(); task_form.style.display = "none";}
reset_form.onclick = (event) => {event.preventDefault(); form.reset();}

submit_task.onclick = (event) => {
  event.preventDefault();
  let new_task = {name: task_name.value, img: task_image.value, start_time: task_start_time.value, end_time: task_end_time.value, people: people_list.value};
  task = [...task, new_task];
  task_list(task);
  form.reset();
  task_form.style.display = "none";
}