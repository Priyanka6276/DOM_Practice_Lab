var menuLinks = [
    { text: 'about', href: '/about' },
    {
      text: 'catalog', href: '#', subLinks: [
        { text: 'all', href: '/catalog/all' },
        { text: 'top selling', href: '/catalog/top' },
        { text: 'search', href: '/catalog/search' },
      ]
    },
    {
      text: 'orders', href: '#', subLinks: [
        { text: 'new', href: '/orders/new' },
        { text: 'pending', href: '/orders/pending' },
        { text: 'history', href: '/orders/history' },
      ]
    },
    {
      text: 'account', href: '#', subLinks: [
        { text: 'profile', href: '/account/profile' },
        { text: 'sign out', href: '/account/signout' },
      ]
    },
  ];
  
  
  const mainEl = document.querySelector('main')
  
  mainEl.style.backgroundColor = '#4a4e4d'
  
  mainEl.innerHTML = '<h1> SEI Rocks! </h1>'
  
  mainEl.classList.toggle('flex-ctr')
  
  const topMenuEl = document.getElementById('top-menu')
  
  topMenuEl.style.height = '100%'
  
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  
  topMenuEl.classList.toggle('flex-around')
  
  
  menuLinks.forEach((link) => {
    const newATag = document.createElement('a')
    newATag.setAttribute('href', link.href)
    newATag.textContent = link.text
    topMenuEl.append(newATag)
  
  })
  
  //=====================================4.0======================================
  
  const subMenuEl = document.getElementById('sub-menu')
  
  //=====================================4.1======================================
  
  subMenuEl.style.height = '100%'
  
  //=====================================4.2======================================
  
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
  
  //=====================================4.3======================================
  
  subMenuEl.classList.toggle('flex-around')
  
  //=====================================4.4======================================
  
  subMenuEl.style.position = 'absolute'
  
  //=====================================4.5======================================
  
  subMenuEl.style.top = '0'
  
  //=====================================5.1======================================
  
  const topMenuLinks = document.querySelectorAll('#top-menu > a')
  
  let showingSubMenu = false
  
  
  //=====================================5.2======================================
  
  topMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault()
    if (evt.target.tagName !== 'A') {
      // console.log('false')
      return
    }
  
    //=====================================5.3======================================
  
    if (evt.target.classList.contains('active')) {
      evt.target.remove('active')
      showingSubMenu = false
      subMenuEl.style.top = '0'
      return
    }
    // console.log(topMenuEl)
    // topMenuLinks.forEach(() => {
    //   evt.target.classList.remove('active')
    // })
  
    //=====================================5.4======================================
  
    topMenuLinks.forEach((arg) => {
      arg.classList.remove('active');
      console.log(arg);
    })
  
  
    //=====================================5.5======================================
  
    // evt.classList.add('active')
  
    // // document.querySelectorAll('.active')
    // // evt.body.classList.toggle('active')
  
    evt.target.classList.add('active')
  
    //=====================================5.6======================================
  
  
    for (let i = 0; i < menuLinks.length; i++) {
      // console.log('menuLinks')
      console.log(menuLinks[i])
      console.log(menuLinks[i].subLinks)
  
      console.log(menuLinks[i].hasOwnProperty('subLinks'))
  
      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
  
      if (menuLinks[i].hasOwnProperty('subLinks')) {
        console.log(menuLinks[i].subLinks)
      }
    }
  
    //my sad attempts at 5.6 below
    //   let link = document.querySelectorAll('href')
    //   if(link[i]){
    //     showingSubMenu = true
    //   } else {
    //     showingSubMenu = false
    //   }
  
    // }
  
    // menuLinks.forEach((evt) => {
    //   let link = evt.target.tagName
    //   console.log(link)
    // })
  
    // if(evt.target.classList.contains('sublinks')) {
    //   showingSubMenu = true
    // } else {
    //   showingSubMenu = false
  
    //=====================================5.7======================================
    const linkObj = menuLinks.find(function (linkObj) {
      return linkObj.text === evt.textContent
    })
  
    // console.log(linkObj)
    
    if (showingSubMenu = true){
      function buildSubMenu (link){
        link.apply(linkObj)
        const aEl = document.createElement('a')
        aEl.setAttribute('href', link.href)
        aEl.textContent = link.text
        subMenuEl.append(aEl)
        // for(let j=0; j< menuLinks.length; j++){
                 
        // }
        
        
      } 
      subMenuEl.style.top = '100%'
    } else {
      subMenuEl.style.top = '0%'
    }
  })
  
  
  
  
  console.log(topMenuLinks)
  
  
  
  
  