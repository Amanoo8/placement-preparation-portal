import { db }
from "./firebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const querySnapshot =
await getDocs(
collection(
db,
"scores"
)
);

let table =
document.getElementById(
"leaderboard"
);

querySnapshot.forEach(
(doc)=>{

let data =
doc.data();

table.innerHTML +=

`
<tr>
<td>${data.email}</td>
<td>${data.score}</td>
</tr>
`;

});