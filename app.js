const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

//add function
const generateTemplate=(todo)=>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="text">${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  list.innerHTML +=html;
};

//add todo
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete
list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos=(term)=>{
    // add filtered class
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));
    // remove filtered class
  Array.from(list.children)
  .filter(todo => todo.textContent.toLowerCase().includes(term))
  .forEach(todo => todo.classList.remove('filtered'));

};

//keyup event
search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
});