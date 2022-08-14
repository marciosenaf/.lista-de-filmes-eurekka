// para pegar filmes de terror



    fetch('http://localhost:3000/movies')
    .then(res => res.json() )
    .then(data => {
        const list = document.querySelector('#fill_list')
    
        data.map((item) => {
            const li = document.createElement('li');
    
            li.setAttribute('_id' , item._id );
            li.innerHTML =`
            <div class="user">
            <p class="imagem" ><img src="${item.poster}" alt="" /></p>
            
            <h2 class="user2">${item.titulo}</h2>
            
            <h3 class="user3">${item.genero}</h3>
            
            <h4 class="user4">${item.enredo}</h4>
            
            <h5 class="user5">${item.nota}⭐</h5>
            
            </div>`

            list.appendChild(li);
        })
        })
    
// para pegar filmes de comedia

    

        fetch('http://localhost:3000/movies1')
        .then(res => res.json() )
        .then(data => {
            const list = document.querySelector('#fill_list1')
        
            data.map((item) => {
                const li = document.createElement('li');
        
                li.setAttribute('_id' , item._id );
                li.innerHTML =`
                <div class="user">
                <p class="imagem" ><img src="${item.poster1}" alt="" /></p>
                
                <h2 class="user2">${item.titulo1}</h2>
                
                <h3 class="user3">${item.genero1}</h3>
                
                <h4 class="user4">${item.enredo1}</h4>
                
                <h5 class="user5">${item.nota1}⭐</h5>
                
                </div>`
    
                list.appendChild(li);
            })
            })
        

        // para pegar filmes de comedia


            fetch('http://localhost:3000/movies2')
            .then(res => res.json() )
            .then(data => {
                const list = document.querySelector('#fill_list2')
            
                data.map((item) => {
                    const li = document.createElement('li');
            
                    li.setAttribute('_id' , item._id );
                    li.innerHTML =`
                    <div class="user">
                    <p class="imagem" ><img src="${item.poster2}" alt="" /></p>
                    
                    <h2 class="user2">${item.titulo2}</h2>
                    
                    <h3 class="user3">${item.genero2}</h3>
                    
                    <h4 class="user4">${item.enredo2}</h4>
                    
                    <h5 class="user5">${item.nota2}⭐</h5>
                    
                    </div>`
        
                    list.appendChild(li);
                })
                })
            

                  // para pegar filmes de aleatorios

    

            fetch('http://localhost:3000/movies3')
            .then(res => res.json() )
            .then(data => {
                const list = document.querySelector('#fill_list3');
            
                data.map((item) => {
                    const li = document.createElement('lii');
            
                    li.setAttribute('_id' , item._id );
                    li.innerHTML =`
                    <div class="user">
                    <p class="imagem" ><img src="${item.poster3}" alt="" /></p>
                    
                    <h2 class="user2">${item.titulo3}</h2>
                    
                    <h5 class="user5">${item.nota3}⭐</h5>
                    
                    </div>`
        
                    list.appendChild(li);
                })
                })
            