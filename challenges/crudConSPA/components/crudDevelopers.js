import { router } from '../router.js';
import Swal from 'sweetalert2';

export function crudView() {
  window.location.hash = '#crudDevelopers';

  content.innerHTML = `
    <button class="cursor-pointer p-3 m-2 border-2 border-black rounded-2xl bg-green-500 hover:bg-green-600 text-white"  id="addDeveloper">Create developer</button>
   
    <table id="table">
        <tr>
            <th class="p-4 border-1 rounded-md">ID</th>
            <th class="p-4 border-1 rounded-md">Name</th>
            <th class="p-4 border-1 rounded-md">Age</th>
            <th class="p-4 border-1 rounded-md">Languaje</th>
            <th class="p-4 border-1 rounded-md">Actions</th>
        </tr>
    </table>
    `;
    const table = document.getElementById('table');
    //print devs----------------------------
    fetch(router.url + '/users')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          table.innerHTML += `
              <tr id="${element.id}">
                  <td class="p-4 border 1">${element.id}</td>
                  <td class="p-4 border 1">${element.name}</td>
                  <td class="p-4 border 1">${element.age}</td>
                  <td class="p-4 border 1">${element.languaje}</td>
                  <td class="border-1">
                  <button class="p-1 m-2 cursor-pointer hover:text-yellow-300 border-1 rounded-xl">Update</button>
                  <button class="p-1 m-2 cursor-pointer hover:text-red-500 border-1 rounded-xl">Delete</button>
                  </td>
              </tr>`;

        });
      });
      //------------------------------------------------

  //Code for CREATE--------------------------------
  const addDeveloper = document.getElementById('addDeveloper');
  addDeveloper.addEventListener("click", () => {

    Swal.fire({
      title: 'Form for add developer to BD',
      html: `
        <form id="form">
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" class="border-1 rounded-xl m-1 p-2" placeholder="Name">
        </div>
        <div>
            <label for="age">Age</label>
            <input type="text" id="age" name="age" class="border-1 rounded-xl m-1 p-2" placeholder="Age">
        </div>
        <div
            <label for="languaje">Language</label>
            <input type="text" id="languaje" name="languaje" class="border-1 rounded-xl m-1 p-2" placeholder="Favorite languaje">
        </div>
        </form>
        `,
      confirmButtonText: 'Send',
      showCancelButton:true,
      cancelButtonText:"Cancelar",
      preConfirm: () => {
        const form = document.getElementById("form")
        let data = new FormData(form);
        data = Object.fromEntries(data.entries())
      
        fetch(router.url + "/users", {
          method:"POST" ,
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        })

        .then(() => {
          Swal.fire({
            icon:'success',
            title:'Developer created!',
          })

          router.render("/crudDevelopers");
        })
      }
    });
  })
  //Code for Delete and update---------------
table.addEventListener("click", (e) => {
  if (e.target.textContent == "Delete") {
    Swal.fire({
      title:"Are you sure to delete?",
      icon: "warning",
      confirmButtonText:"Yes",
      showCancelButton:true,
      cancelButtonText:"No",
      preConfirm: () => {

        const id = e.target.parentNode.parentNode.id;
        fetch(router.url + "/users/" + id, {
          method: "DELETE"
        })
        .then(() => {
          router.render('/crudDevelopers');
        })
      }
    })

  } else if (e.target.textContent == "Update") {
      const childrens = e.target.parentNode.parentNode.children
      // const childrens = column.children;
      let data = {
        id:childrens[0].textContent,
        name:childrens[1].textContent,
        age:childrens[2].textContent,
        languaje:childrens[3].textContent
      }

      Swal.fire({
        title: 'Update Developer',
        html: `
        <form id="formUpdate">
          <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" class="border-1 rounded-xl m-1 p-2" value="${data.name}" placeholder="Name">
          </div>
          <div>
              <label for="age">Age</label>
              <input type="text" id="age" name="age" class="border-1 rounded-xl m-1 p-2" value="${data.age}">
          </div>
          <div
              <label for="languaje">Language</label>
              <input type="text" id="languaje" name="languaje" class="border-1 rounded-xl m-1 p-2" value="${data.languaje}">
          </div>
        </form>
        `,
        confirmButtonText:"Yes",
        showCancelButton:true,
        cancelButtonText:"No",
        preConfirm: () => {
          const formUpdate = document.getElementById('formUpdate');

          Swal.fire({
          title:"Are you sure to update?",
          icon: "warning",
          confirmButtonText:"Yes",
          showCancelButton:true,
          cancelButtonText:"No",
          preConfirm: () => {
            
            let dat = new FormData(formUpdate);
            dat = Object.fromEntries(dat.entries());
            dat.id = data.id
            

            fetch(router.url + '/users/' + data.id, {
              method: 'PUT',
              headers: {
                'Content-Type':"application/json"
              },
              body:JSON.stringify(dat)
            })
            .then(() => {
              router.render('/crudDevelopers');
            })
          }
         });
        }

      })
//--------------------------------------------

}})
}
