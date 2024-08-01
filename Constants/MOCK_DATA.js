const USERS = [
    {"name":"Amarpa Shashanka Keerthi Kumar","gender":"Female","department":["Sales", "HR", "Finance"],"salary":"10000","start_date":"29 Oct 2019"},
    {"name":"Mohammad Salman Iqbal Shaikh", "gender": "Female", "department": ["Sales", "HR", "Finance"], "salary": "10000", "start_date": "29 Oct 2019"},
    {"name":"Bubere Qais Mohammad Muzaffar", "gender": "Male", "department": ["Sales", "HR", "Finance"], "salary": "10000", "start_date": "29 Oct 2019"},
    {"name":"Amarpa Shashanka Keerthi Kumar","gender":"Male","department":["Sales", "HR", "Finance"],"salary":"10000","start_date":"29 Oct 2019"},
    {"name":"Mohammad Salman Iqbal Shaikh", "gender": "Female", "department": ["Sales", "HR", "Finance"], "salary": "10000", "start_date": "29 Oct 2019"},
    {"name":"Bubere Qais Mohammad Muzaffar", "gender": "Male", "department": ["Sales", "HR", "Finance"], "salary": "10000", "start_date": "29 Oct 2019"},
    {"name":"Amarpa Shashanka Keerthi Kumar","gender":"Female","department":["Sales", "HR", "Finance"],"salary":"10000","start_date":"29 Oct 2019"},
    {"name":"Mohammad Salman Iqbal Shaikh", "gender": "Female", "department": ["Sales", "HR", "Finance"], "salary": "10000", "start_date": "29 Oct 2019"},
    {"name":"Bubere Qais Mohammad Muzaffar", "gender": "Male", "department": ["Sales", "HR", "Finance"], "salary": "10000", "start_date": "29 Oct 2019"},
    {"name":"Amarpa Shashanka Keerthi Kumar","gender":"Male","department":["Sales", "HR", "Finance"],"salary":"10000","start_date":"29 Oct 2019"},
    {"name":"Mohammad Salman Iqbal Shaikh", "gender": "Male", "department": ["Sales", "HR", "Finance"], "salary": "10000", "start_date": "29 Oct 2019"}
]








const DUMMY_ROWS =  `<tr>
<th scope="row"><img src="./Assets/Ellipse -1.png" style="width: 36px;" alt=""></th>
<td>Amarpa Shashanka Keerthi Kumar</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>
<tr>
<th scope="row"><img src="./Assets/Ellipse -2.png" style="width: 36px;" alt=""></th>
<td>Mohammad Salman Iqbal Shaikh</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>
<tr>
<th scope="row"><img src="./Assets/Ellipse -3.png" style="width: 36px;" alt=""></th>
<td>Bubere Qais Mohammad Muzaffar</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>
<tr>
<th scope="row"><img src="./Assets/Ellipse -4.png" style="width: 36px;" alt=""></th>
<td>Amarpa Shashanka Keerthi Kumar</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>
<tr>
<th scope="row"><img src="./Assets/Ellipse -5.png" style="width: 36px;" alt=""></th>
<td>Mohammad Salman Iqbal Shaikh</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>
<tr>
<th scope="row"><img src="./Assets/Ellipse -7.png" style="width: 36px;" alt=""></th>
<td>Bubere Qais Mohammad Muzaffar</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>
<tr>
<th scope="row"><img src="./Assets/Ellipse -8.png" style="width: 36px;" alt=""></th>
<td>Amarpa Shashanka Keerthi Kumar</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>
<tr>
<th scope="row"><img src="./Assets/Ellipse 1.png" style="width: 36px;" alt=""></th>
<td>Mohammad Salman Iqbal Shaikh</td>
<td>Female</td>
<td><span class="departments"> Sales </span> <span class="departments">HR</span> <span class="departments">Finance</span></td>
<td>₹ 10,000</td>
<td>29 Oct 2019</td>
<td style="display: flex; gap: 1rem; font-size: large;">
  <div><img src="./Assets/delete-black-18dp.svg" style="width: 24px;" alt=""></div>
  <div><img src="./Assets/create-black-18dp.svg" style="width: 24px;" alt=""></div>
</td>
</tr>`