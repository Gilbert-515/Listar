    const buttonAdd = document.querySelector('form button');
    const inputForm = document.querySelector('form input');
    const lista = document.querySelector('ul');
    let contador_click = 0;
    
    buttonAdd.addEventListener('click',(event) => {
        event.preventDefault();
        
        const newItem = document.createElement('span');
        newItem.innerHTML =`
        <input type="checkbox" 
        id="concluir-${contador_click + 1}" onchange="concluir(this)">
        <li id="item-${contador_click + 1}">
        ${inputForm.value}
        </li>
        <button id="delete-${contador_click + 1}" onclick="excluir(this)">
        Excluir
        </button>`;

        if(inputForm.value){
            lista.appendChild(newItem); 
            inputForm.value = '';
            contador_click += 1;         
        }
    });

    const concluir = (item) => {
       const id = item.getAttribute('id');
       const posicao = id.split('-');
       const numeroItem = posicao[1];
       const Item = document.querySelector(`#item-${numeroItem}`);
       
       item.checked ? 
       Item.classList.add('concluido') : 
       Item.classList.remove('concluido');
    }

    const excluir = (item) => {
        const id = item.getAttribute('id');
        const ElementFilho = document.getElementById(id);
        const ElementoPai = ElementFilho.parentNode;
        lista.removeChild(ElementoPai); 
    }

    const dataHoje = () => {
        const now = new Date;       
        let [
            dia,
            mes,
            ano
        ] = [
            now.getDate(),
            now.getMonth() + 1, 
            now.getFullYear()
        ];
        dia < 10 ? dia = '0'+dia : null;
        mes < 10 ? mes = '0'+mes : null;
        
        const data = `${dia}-${mes}-${ano}`;
        return data;
    }
    