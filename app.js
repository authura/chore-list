/* jshint esversion: 6 */

window.addEventListener('load', () => {

    const form = document.querySelector('#chore-form');

    const input = document.querySelector('#chore-input');

    const choreList = document.querySelector('#chores');

    // Form Submit
    form.addEventListener('submit', (e) => {
        
        e.preventDefault();

        const chore = input.value;

        if (!chore) {

            alert('Please enter a chore.');

            return;
        }


        // Create DOM elements
        
        const choreElement = document.createElement('div');

        choreElement.classList.add('chore');

        const contentElement = document.createElement('div');

        contentElement.classList.add('content');

        choreElement.appendChild(contentElement);

        const inputElement = document.createElement('input');

        inputElement.classList.add('text');

        inputElement.type = 'text';

        contentElement.appendChild(inputElement);

        inputElement.value = chore;

        inputElement.setAttribute('readonly', 'readonly');


        // Button DOMS

        const actionsElement = document.createElement('div');

        actionsElement.classList.add('actions');

        const editElement = document.createElement('button'); 
        
        editElement.classList.add('edit');

        editElement.innerHTML = 'Edit';

        const deleteElement = document.createElement('button');

        deleteElement.classList.add('delete');

        deleteElement.innerHTML = 'X';

        actionsElement.appendChild(editElement);

        actionsElement.appendChild(deleteElement);

        choreElement.appendChild(actionsElement);
        
        choreList.appendChild(choreElement);
        
        form.reset();

        // Edit interaction

        editElement.addEventListener('click', () => {

            if (editElement.innerHTML.toLowerCase() == 'edit') {
                
                inputElement.removeAttribute('readonly');

                editElement.innerHTML = 'Save';

            } else {
                inputElement.setAttribute('readonly', 'readonly');

                editElement.innerHTML = 'Edit';
            }
        });

        // Delete interaction

        deleteElement.addEventListener('click', () => {

            choreList.removeChild(choreElement);
        });
    });
});