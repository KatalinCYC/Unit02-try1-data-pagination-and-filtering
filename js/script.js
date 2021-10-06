/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
// There are nine students per page, that's why I opted for the number 9 here.
    const startIndex = (page * 9) - 9;
    const endIndex = page * 9;
    const studentList = document.querySelector('.student-list');
    studentList.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            studentList.insertAdjacentHTML('beforeend', `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`)
        }
    }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
/* The total number of pages is the total number of students devided by 9 (the number of 
people on each page) rounded up to the next integer.*/
    const totalPages = parseFloat(list.length / 9);
    let linkList = document.querySelector('.link-list');
    linkList.innerHTML = '';
// To make sure you can get to the next page, I opted for a for loop. 
    for (let i = 0; i <= totalPages; i++) {
        linkList.insertAdjacentHTML('beforeend', `
      <li>
         <button type="button">${i + 1}</button>
      </li>`)
    }
    let activeLink = linkList.firstElementChild.firstElementChild;
    activeLink.className = 'active';
    linkList.addEventListener('click', e => {
/* I added the following if statement, to make sure that clicking outside of the button 
area won't cause a different page to appear.*/
        if (e.target.tagName === "BUTTON") { 
        linkList = document.querySelectorAll('.link-list li')
        for (let i = 0; i < linkList.length; i++) {
            if (linkList[i].firstElementChild.className === 'active') {
                linkList[i].firstElementChild.classList.remove('active')
            }
        }
        e.target.className = 'active';
        let clickedPage = parseInt(e.target.innerText);
        showPage(list, clickedPage);
        }
    })

}

// Here I call the functions

addPagination(data);
showPage(data, 1);

