    const nameList = document.getElementById('nameList');

    nameList.onchange(() => {

        nameList.value != ''?
        nameList.classList.add('preenchido'):
        nameList.classList.remove('preenchido');
    });