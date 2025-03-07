document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
    
    let currentIndex = 0;
    let images = [];

    document.getElementById('carrousel').addEventListener('click', function() {
        let tr = document.getElementsByTagName('tr');
        images = [];
        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td');
            if (td[1].textContent === 'Client Image') {
                images.push(td[0].textContent);
            }
        }
        if (images.length > 0) {
            document.getElementById('table').style.display = 'none';
            document.getElementById('gallerie').style.display = 'none';
            document.getElementById('carrousel').style.display = 'none';
            displayImage(currentIndex);
        }
    });

    function displayImage(index) {
        let container = document.getElementById('container');
        container.innerHTML = '';
        let img = document.createElement('img');
        img.src = images[index];
        container.appendChild(img);

        //nav arrows
        let leftArrow = document.createElement('button');
        leftArrow.textContent = '<';
        leftArrow.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            displayImage(currentIndex);
        });
        container.appendChild(leftArrow);

        let rightArrow = document.createElement('button');
        rightArrow.textContent = '>';
        rightArrow.addEventListener('click', function() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            displayImage(currentIndex);
        });
        container.appendChild(rightArrow);

        //back button
        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', function() {
            document.getElementById('table').style.display = '';
            document.getElementById('gallerie').style.display = '';
            document.getElementById('carrousel').style.display = '';
            container.innerHTML = '';
        });
        container.appendChild(backButton);
    }

    document.getElementById('gallerie').addEventListener('click', function() {
        let tr = document.getElementsByTagName('tr');
        document.getElementById('table').style.display = 'none';
        document.getElementById('carrousel').style.display = 'none';
        document.getElementById('gallerie').style.display = 'none';
        document.getElementById('container').innerHTML = '';
        for (let i = 1; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td');
            if (td[1].textContent === 'Client Image') {
                let img = document.createElement('img');
                img.src = td[0].textContent;
                document.getElementById('container').appendChild(img);
            }
        }

        //back button
        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.addEventListener('click', function() {
            document.getElementById('table').style.display = '';
            document.getElementById('carrousel').style.display = '';
            document.getElementById('gallerie').style.display = '';
            document.getElementById('container').innerHTML = ''; // Clear gallery content
        });
        document.getElementById('container').appendChild(backButton);
    });
});