document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    let currentIndex = 0;
    let images = [];

    document.getElementById('carrousel').addEventListener('click', function() {
        let tr = document.getElementsByTagName('tr');
        images = [];
        for (let i = 1; i < tr.length; i++) {
            if (tr[i].classList.contains('image')) {
                let td = tr[i].getElementsByTagName('td');
                images.push(td[0].textContent);
            }
        }
        if (images.length > 0) {
            document.querySelectorAll('#table tr').forEach(row => row.style.display = 'none');
            document.getElementById('buttons').style.display = 'none';
            displayImage(currentIndex);
        }
    });

    function displayImage(index) {
        let container = document.getElementById('image-container');
        container.innerHTML = '';
        let img = document.createElement('img');
        img.src = images[index];
        img.style.position = 'relative';
        container.appendChild(img);

        //nav arrows and back button container
        let navContainer = document.createElement('div');
        navContainer.style.display = 'flex';
        navContainer.style.justifyContent = 'space-between';
        navContainer.style.marginTop = '10px';
        navContainer.style.marginLeft = '35%';
        navContainer.style.marginRight = '35%';

        //left arrow
        let leftArrow = document.createElement('button');
        leftArrow.textContent = '<';
        leftArrow.className = 'btn btn-primary';
        leftArrow.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            displayImage(currentIndex);
        });
        navContainer.appendChild(leftArrow);

        //back button
        let backButton = document.createElement('button');
        backButton.textContent = 'Back';
        backButton.className = 'btn btn-primary';
        backButton.style.paddingLeft = '50px';
        backButton.style.paddingRight = '50px';
        backButton.addEventListener('click', function() {
            document.querySelectorAll('#table tr').forEach(row => row.style.display = '');
            document.getElementById('buttons').style.display = 'block';
            container.innerHTML = '';
        });
        navContainer.appendChild(backButton);

        //right arrow
        let rightArrow = document.createElement('button');
        rightArrow.textContent = '>';
        rightArrow.className = 'btn btn-primary';
        rightArrow.addEventListener('click', function() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            displayImage(currentIndex);
        });
        navContainer.appendChild(rightArrow);

        container.appendChild(navContainer);
    }

    document.getElementById('gallerie').addEventListener('click', function() {
        let tr = document.getElementsByTagName('tr');
        images = [];
        for (let i = 1; i < tr.length; i++) {
            if (tr[i].classList.contains('image')) {
                let td = tr[i].getElementsByTagName('td');
                images.push(td[0].textContent);
            }
        }
        if (images.length > 0) {
            document.querySelectorAll('#table tr').forEach(row => row.style.display = 'none');
            document.getElementById('buttons').style.display = 'none';
            let container = document.getElementById('image-container');
            container.innerHTML = '';
            images.forEach(src => {
                let img = document.createElement('img');
                img.src = src;
                img.style.display = 'block';
                img.style.margin = '10px auto';
                container.appendChild(img);
            });

            //back button container
            let backContainer = document.createElement('div');
            backContainer.style.display = 'flex';
            backContainer.style.justifyContent = 'center';
            backContainer.style.marginTop = '15px';
            backContainer.style.marginBottom = '50px';

            //back button
            let backButton = document.createElement('button');
            backButton.textContent = 'Back';
            backButton.className = 'btn btn-primary';
            backButton.style.paddingLeft = '50px';
            backButton.style.paddingRight = '50px';
            backButton.addEventListener('click', function() {
                document.querySelectorAll('#table tr').forEach(row => row.style.display = '');
                document.getElementById('buttons').style.display = 'block';
                container.innerHTML = '';
            });
            backContainer.appendChild(backButton);
            container.appendChild(backContainer);
        }
    });
});