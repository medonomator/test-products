// Сперва раскрасить по дефолту ячейки
const tableSelect = Array.from(document.querySelectorAll('.table-column-select div'));
const tableTotals = Array.from(document.querySelectorAll('.table-column-total div'));
const tableEntitys = document.querySelector('.table-entitys');
const emberElement = document.getElementsByTagName('embed')[0];
let dataEntitysByColumn = JSON.parse(emberElement.getAttribute('data-entitys'));

tableTotals.shift();
tableSelect.shift();

tableTotals.forEach((htmlElement, index) => {
  let sumAgregate = dataEntitysByColumn[index].reduce((a, b) => Number(a) + Number(b)).toString();
  const prepareString = sumAgregate.replace('-', '');

  if (prepareString.length > 6) {
    sumAgregate = sumAgregate.slice(0, 6);
  }

  htmlElement.innerHTML = sumAgregate;
});

tableSelect.forEach((htmlElement, index) => {
  htmlElement.addEventListener('click', (e) => {
    if (e.target.value) {
      const value = calculateValueByColumn(e.target.value, index);
      tableTotals[index].innerHTML = value;
    }
  });
});

function calculateValueByColumn(operation, index) {
  dataEntitysByColumn = JSON.parse(emberElement.getAttribute('data-entitys'));
  let value = 0;

  switch (operation) {
    case 'sum':
      value = dataEntitysByColumn[index]
        .reduce((a, b) => Number(a) + Number(b))
        .toString()
        .slice(0, 6);
      break;
    case 'min':
      value = Math.min.apply(null, dataEntitysByColumn[index]);
      break;
    case 'max':
      value = Math.max.apply(null, dataEntitysByColumn[index]);
      break;
    case 'avg':
      value = dataEntitysByColumn[index].reduce((a, b) => Number(a) + Number(b));
      value = value / dataEntitysByColumn[index].length;
      value = value.toString().slice(0, 6);
      break;
    default:
      break;
  }

  return value;
}

setInterval(() => {
  fetch('http://localhost:5000/entitys/getAll')
    .then((res) => Promise.resolve(res.json()))
    .then((res) => {
      const composeValuesByColumn = {};
      const arrayFill = Array(20).fill(0);

      arrayFill.forEach((_, index) => {
        composeValuesByColumn[index] = [];
      });

      let replaceHtml = '';
      Object.keys(res).forEach((entity, index) => {
        replaceHtml += `<div class="table-column">`;
        replaceHtml += `<div class="table-row table-row-name">${entity}</div>`;
        Object.keys(res[entity]).forEach((parameter, idx) => {
          const value = res[entity][parameter];
          composeValuesByColumn[idx] = composeValuesByColumn[idx].concat(value);

          let color = '';
          let backgroundColor = 'white';
          if (value < 0) {
            color = `rgba(255, 140, 0, ${Math.abs(value)})`;
          } else if (value === 0) {
            color = `rgba(255, 255, 255)`;
          } else if (value > 0) {
            color = `rgba(0, 0, 0, ${Math.abs(value)})`;
          }

          if (Math.abs(value) < 0.15) {
            backgroundColor = 'black';
            color = 'red';
          }

          replaceHtml += `<div style="color: ${color};background-color: ${backgroundColor}" class="table-row">${res[entity][parameter]}</div>`;
        });
        replaceHtml += `</div>`;

        emberElement.dataset.entitys = JSON.stringify(composeValuesByColumn);
      });

      tableEntitys.innerHTML = replaceHtml;

      tableTotals.forEach((htmlElement, index) => {
        const selectValue = tableSelect[index].children[0].value;
        const value = calculateValueByColumn(selectValue, index);

        htmlElement.innerHTML = value;
      });
    });
}, 3000);
