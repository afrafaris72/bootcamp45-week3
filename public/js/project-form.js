const datas = [];
const form = document.querySelector('form');
const projectLists = document.querySelector('#projectLists');


const getData = (form) => {
  const data = {
    projectName : form.name.value,
    startDate   : form.startDate.value,
    endDate     : form.endDate.value,
    description : form.desc.value,
    duration    : getDuration(form.startDate.value, form.endDate.value),
    image       : form.imageUpload.files[0] != undefined ? URL.createObjectURL(form.imageUpload.files[0]) : null,
    icons       : {
      nodeJs    : form.nodeJsIco.checked,
      nextJs    : form.nextJs.checked,
      reactJs   : form.reactJs.checked,
      android   : form.android.checked,
    },
  };

  datas.push(data);

};

const generateCardTemplate = (data) => {
  const projectCard = `<div class="project-card">
  <a href="project-details.html">
  <div class="head">
    <img src="${data.image}" alt="" style="width: 100%" />
  </div>
  <div class="body">
    <h3>${data.projectName} - ${new Date(data.endDate).getFullYear()}</h3>
    <p>Duration : ${data.duration} </p>
    <p>${data.description.length < 120 ? data.description.slice(0, 120) : window.innerWidth <= 768 ? `${data.description.slice(0, 60)}...` : `${data.description.slice(0, 120)}...`}</p>
    <div class="icons">
      <ul>
        ${data.icons.nextJs ? '<li><i class="cib-next-js"></i></li>' : ''}
        ${data.icons.reactJs ? '<li><i class="cib-react"></i></li>' : ''}
        ${data.icons.nodeJs ? '<li><i class="fa-brands fa-node-js"></i></li>' : ''}
        ${data.icons.android ? '<li><i class="fa-android"></i></li>' : ''}
      </ul>
    </div>

    <div class="buttons">
      <button>edit</button>
      <button>delete</button>
    </div>
  </div>
  </a>
</div>`;

  return projectCard;
};

const updateUI = () => {
  projectLists.innerHTML = '';
  datas.map((index) => {
    projectLists.innerHTML += generateCardTemplate(index);
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(form);
  updateUI();
});
