
        const menubar=document.getElementById('headmenubar');
            document.getElementById('headmenuicon').addEventListener('click', () => {
                if(menubar.style.display === 'none')
                {
                    menubar.style.display = 'block';
                }
                else
                {
                    menubar.style.display = 'none';
                }
            });

