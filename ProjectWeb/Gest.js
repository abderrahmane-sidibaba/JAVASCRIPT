const formEl = document.querySelector("form");
        const tbodyEl = document.querySelector("tbody");
        const clientTableEl = document.getElementById("clientTable");
        
        // Evenement quand on click sue le button submit elle fait appelle à la fonction "onAddOrUpdateClient"
        formEl.addEventListener("submit", onAddOrUpdateClient);
        clientTableEl.addEventListener("click", onDeleteRow);
        clientTableEl.addEventListener("click", onEditRow);

        // Verifie l'existance d'un client si non elle creér un
        function onAddOrUpdateClient(e) {
            e.preventDefault();

            const ID = document.getElementById("IdC").value;
            const Nom = document.getElementById("NC").value;
            const Prénom = document.getElementById("PC").value;
            const eMail = document.getElementById("EC").value;

            const newRow = createTableRow(ID, Nom, Prénom, eMail);
            const existingRow = document.getElementById(`row-${ID}`);

            if (existingRow) {
                existingRow.replaceWith(newRow);
            } else {
                tbodyEl.appendChild(newRow);
            }

            formEl.reset();
        }

        // c'est une fonction fleche qui Creer un "tr" qui contient un objet

        function createTableRow(ID, Nom, Prénom, eMail) {
            const row = document.createElement("tr");
            row.id = `row-${ID}`;

            const cells = [
                createTableCell(ID),
                createTableCell(Nom),
                createTableCell(Prénom),
                createTableCell(eMail),
                createTableCell(),
                createDeleteButtonCell()
            ];
           // return le "tr" complet
            cells.forEach(cell => row.appendChild(cell));
            return row;
        }
        // fonction qui creer les "td" / case qui seront dans le "tr"
        function createTableCell(text) {
            const cell = document.createElement("td");
            cell.innerText = text || "";
            return cell;
        }
        // Fonction pour creer un button delete dans la cellule
        function createDeleteButtonCell() {
            const cell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("deleteBtn");
            deleteButton.innerText = "Delete";
            cell.appendChild(deleteButton);
            return cell;
        }

        //fonction qui efface le "td" complet

        function onDeleteRow(e) {
            if (e.target.classList.contains("deleteBtn")) {
                const btn = e.target;
                btn.closest("tr").remove();
            }
        }
        
        function onEditRow(e) {
            if (e.target.tagName === "TD") {
                const row = e.target.parentNode;
                const id = row.cells[0].innerText;
                const nom = row.cells[1].innerText;
                const prénom = row.cells[2].innerText;
                const email = row.cells[3].innerText;
                document.getElementById("IdC").value = id;
                document.getElementById("NC").value = nom;
                document.getElementById("PC").value = prénom;
                document.getElementById("EC").value = email;
                const editButtonCell = row.cells[4];
                editButtonCell.innerHTML = '<button class="editBtn">Edit</button>';
            }
        }