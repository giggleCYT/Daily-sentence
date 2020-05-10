window.addEventListener('load', function() {
    var newquote = document.querySelector('.newquote');
    var newquote1 = document.querySelector('.newquote1');
    var newquote2 = document.querySelector('.newquote2');
    var newquote3 = document.querySelector('.newquote3');
    var newquote4 = document.querySelector('.newquote4');
    var newquote5 = document.querySelector('.newquote5');

    var love = this.document.querySelector('.love');
    var celebrity = this.document.querySelector('.celebrity');
    var poetry = this.document.querySelector('.poetry');
    var truth = this.document.querySelector('.truth')
    var soup = this.document.querySelector('.soup')
    var constellation = this.document.querySelector('.constellation')

    var contents = this.document.querySelectorAll('.content');
    var lis = document.querySelectorAll('li');
    var input = this.document.querySelector('input')
    var icon = this.document.querySelectorAll('.icon')
    var iconIconTest = this.document.querySelectorAll('.icon-icon-test')
    var iconIconTest1 = this.document.querySelectorAll('.icon-icon-test1')
    var iconIconTest2 = this.document.querySelectorAll('.icon-icon-test2')

    lovy()
    celebrities();
    poetries();
    truthes();
    soups();

    for (let i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function() {
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = ''
            }
            lis[i].className = 'click';
            var index = this.getAttribute('index');
            for (let i = 0; i < contents.length; i++) {
                contents[i].style.display = 'none'
            }
            contents[index].style.display = 'block'
        })
    }


    newquote.addEventListener('click', function() {
        lovy()
    });
    newquote1.addEventListener('click', function() {
        celebrities()
    });
    newquote2.addEventListener('click', function() {
        poetries()
    });
    newquote3.addEventListener('click', function() {
        truthes()
    });
    newquote4.addEventListener('click', function() {
        soups()
    });
    newquote5.addEventListener('click', function() {
        if (input.value === '') {
            return alert('请输入内容')
        }
        constellationes()
        input.value = ''
    });

    newquote.addEventListener('mouseover', function() {
        newquote.style.backgroundColor = '#ffffff'
    })
    newquote.addEventListener('mouseleave', function() {
        newquote.style.backgroundColor = 'rgb(217, 237, 255)'
    })
    newquote1.addEventListener('mouseover', function() {
        newquote1.style.backgroundColor = '#ffffff'
    })
    newquote1.addEventListener('mouseleave', function() {
        newquote1.style.backgroundColor = 'rgb(217, 237, 255)'
    })
    newquote2.addEventListener('mouseover', function() {
        newquote2.style.backgroundColor = '#ffffff'
    })
    newquote2.addEventListener('mouseleave', function() {
        newquote2.style.backgroundColor = 'rgb(217, 237, 255)'
    })
    newquote3.addEventListener('mouseover', function() {
        newquote3.style.backgroundColor = '#ffffff'
    })
    newquote3.addEventListener('mouseleave', function() {
        newquote3.style.backgroundColor = 'rgb(217, 237, 255)'
    })
    newquote4.addEventListener('mouseover', function() {
        newquote4.style.backgroundColor = '#ffffff'
    })
    newquote4.addEventListener('mouseleave', function() {
        newquote4.style.backgroundColor = 'rgb(217, 237, 255)'
    })
    newquote5.addEventListener('mouseover', function() {
        newquote5.style.backgroundColor = '#ffffff'
    })
    newquote5.addEventListener('mouseleave', function() {
        newquote5.style.backgroundColor = 'rgb(217, 237, 255)'
    })
    for (let i = 0; i < iconIconTest.length; i++) {
        iconIconTest[i].addEventListener('mouseover', function() {
            // iconIconTest[i].style.fontSize = '55px';
            iconIconTest[i].style.color = '#ffffff'
                // iconIconTest[i].style.transition = 'all 0.5s linear'
        })
        iconIconTest[i].addEventListener('mouseleave', function() {
            iconIconTest[i].style.color = 'rgb(217, 237, 255)'
        })
    }
    for (let i = 0; i < iconIconTest.length; i++) {
        iconIconTest1[i].addEventListener('mouseover', function() {
            iconIconTest1[i].style.color = '#ffffff'
        })
        iconIconTest1[i].addEventListener('mouseleave', function() {
            iconIconTest1[i].style.color = 'rgb(217, 237, 255)'
        })
    }
    for (let i = 0; i < iconIconTest.length; i++) {
        iconIconTest2[i].addEventListener('mouseover', function() {
            iconIconTest2[i].style.color = '#ffffff'
        })
        iconIconTest2[i].addEventListener('mouseleave', function() {
            iconIconTest2[i].style.color = 'rgb(217, 237, 255)'
        })
    }

    function lovy() {
        axios.get('https://v1.alapi.cn/api/qinghua')
            .then(function(response) {
                love.innerHTML = response.data.data.content
            }).catch(function(erroe) {
                alert('获取失败')
            });
    }

    function celebrities() {
        axios.get('https://v1.alapi.cn/api/mingyan')
            .then(function(response) {
                celebrity.innerHTML = response.data.data.content + '  ——' + response.data.data.author
            }).catch(function(erroe) {
                alert('获取失败')
            });
    }

    function poetries() {
        axios.get('https://v1.alapi.cn/api/shici?type=all')
            .then(function(response) {
                poetry.innerHTML = response.data.data.content + '  ——' + response.data.data.author + '《' + response.data.data.origin + '》'
            }).catch(function(erroe) {
                alert('获取失败')
            });
    }

    function truthes() {
        axios.get('https://v1.alapi.cn/api/hitokoto')
            .then(function(response) {
                truth.innerHTML = response.data.data.hitokoto
            }).catch(function(erroe) {
                alert('获取失败')
            });
    }

    function soups() {
        axios.get('https://v1.alapi.cn/api/soul')
            .then(function(response) {
                soup.innerHTML = response.data.data.title
            }).catch(function(erroe) {
                alert('获取失败')
            });
    }

    function constellationes(value) {
        axios.get('https://api.66mz8.com/api/garbage.php?name=' + input.value)
            .then(function(response) {
                constellation.innerHTML = response.data.name + '是：' + response.data.data
            }).catch(function(erroe) {
                alert('获取失败')
            });
    }
})